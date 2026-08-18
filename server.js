const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// 현재 폴더(루트)에서 index.html 및 정적 파일을 찾도록 설정
app.use(express.static(__dirname));

const rooms = {}; 

io.on('connection', (socket) => {
    console.log('유저 접속:', socket.id);

    socket.on('request_room_list', () => {
        let roomList = [];
        for (let roomId in rooms) {
            if (!rooms[roomId].isPlaying) { 
                roomList.push({
                    roomId: roomId,
                    players: rooms[roomId].players.length
                });
            }
        }
        socket.emit('room_list', roomList);
    });

    socket.on('create_room', () => {
        let roomId = Math.floor(1000 + Math.random() * 9000).toString();
        rooms[roomId] = { players: [{ id: socket.id }], isPlaying: false, settings: null };
        socket.join(roomId);
        socket.emit('room_joined', { roomId: roomId, players: 1, isHost: true });
    });

    socket.on('join_room', (roomId) => {
        if (!rooms[roomId]) { socket.emit('show_toast', '존재하지 않는 방 번호입니다.'); return; }
        let room = rooms[roomId];
        if (room.players.length >= 2 || room.isPlaying) { socket.emit('show_toast', '이미 꽉 찼거나 게임이 시작된 방입니다.'); return; }

        socket.join(roomId);
        room.players.push({ id: socket.id });
        
        socket.emit('room_joined', { roomId: roomId, players: 2, isHost: false });
        socket.to(roomId).emit('player2_joined');
        
        if(room.settings) { socket.emit('sync_lobby', room.settings); }
    });

    socket.on('sync_lobby', (data) => {
        if(rooms[data.roomId]) {
            rooms[data.roomId].settings = data;
            socket.to(data.roomId).emit('sync_lobby', data);
        }
    });

    socket.on('start_game', (data) => {
        let room = rooms[data.roomId];
        if (room) {
            room.isPlaying = true;
            let p1Color = Math.random() < 0.5 ? 'white' : 'black';
            let p2Color = p1Color === 'white' ? 'black' : 'white';
            
            let colors = {};
            let p1Id = room.players[0].id;
            colors[p1Id] = p1Color;
            
            if (room.players.length > 1) {
                colors[room.players[1].id] = p2Color;
            }

            let whiteTime = p1Color === 'white' ? data.p1Time : data.p2Time;
            let blackTime = p1Color === 'black' ? data.p1Time : data.p2Time;

            io.to(data.roomId).emit('game_started', { 
                isAI: data.isAI, 
                colors: colors,
                whiteTime: whiteTime * 60,
                blackTime: blackTime * 60,
                stats: data.stats
            });
        }
    });

    socket.on('action', (data) => {
        socket.to(data.roomId).emit('update_board', data);
    });

    socket.on('disconnect', () => {
        for (let roomId in rooms) {
            let room = rooms[roomId];
            let isPlayer = room.players.some(p => p.id === socket.id);
            if (isPlayer) {
                room.players = room.players.filter(p => p.id !== socket.id);
                if (room.players.length === 0) { delete rooms[roomId]; } 
                else { io.to(roomId).emit('player_left'); room.isPlaying = false; }
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
