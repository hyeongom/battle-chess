<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    
    <meta name="color-scheme" content="dark">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#1a1a2e">
    
    <title>배틀 체스</title>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
        
        :root {
            --board-size: min(calc(100dvh - 120px), calc(100vw - 320px), 650px);
            
            --bg-color: #1a1a2e;
            --light-color: #eeeed2; 
            --dark-color: #769656;
        }

        @media (max-width: 900px) and (orientation: landscape) {
            :root {
                --board-size: min(calc(100dvh - 70px), calc(100vw - 240px), 600px);
            }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #778ca3; border-radius: 3px; }

        body { 
            background-color: var(--bg-color);
            color: #fff; font-family: 'Gowun Dodum', sans-serif; 
            display: flex; flex-direction: column; align-items: center; user-select: none; 
            margin: 0; padding: 0; height: 100dvh; width: 100vw; overflow: hidden; box-sizing: border-box; 
            transition: background-color 0.3s ease;
        }
        
        #intro-screen {
            position: absolute; top: 0; left: 0; width: 100vw; height: 100dvh; 
            background: var(--bg-color); z-index: 20000; display: flex; flex-direction: column; 
            align-items: center; justify-content: center; cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .screen { 
            position: absolute; top: 0; left: 0; width: 100vw; height: 100dvh; 
            background: rgba(0,0,0,0.95); z-index: 100; display: flex; align-items: center; justify-content: center; 
            flex-direction: column; box-sizing: border-box; padding: 15px; overflow-y: auto; overflow-x: hidden;
        }

        #main-screen { background: transparent; }

        h1.main-title { font-size: 40px; color: #f7b731; margin-bottom: 20px; text-shadow: 3px 3px 0px #000; text-align: center; }
        
        .menu-btn { margin: 8px; padding: 15px; font-size: 20px; width: 100%; max-width: 280px; background: #e94560; color: white; border: none; cursor: pointer; font-family: inherit; font-weight: bold; border-radius: 10px; transition: 0.2s; text-align: center; box-sizing: border-box; }
        .menu-btn:hover { background: #ff6b81; transform: scale(1.05); }
        .room-input { padding: 15px; font-size: 18px; width: 100%; max-width: 180px; text-align: center; font-family: inherit; border-radius: 10px; border: 2px solid #778ca3; background: #d1d8e0; color: #1a1a2e; font-weight: bold; outline: none; box-sizing: border-box; }
        
        .room-list-box { width: 100%; max-width: 400px; max-height: 250px; overflow-y: auto; background: #16213e; border: 2px solid #0f3460; border-radius: 10px; padding: 10px; margin-bottom: 15px; box-sizing: border-box; }
        .room-item { background: #2f3542; padding: 12px; margin-bottom: 10px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; }
        .room-item button { width: 80px; padding: 8px; font-size: 14px; margin: 0; }

        .player-slot { width: 100%; padding: 12px; margin-bottom: 10px; background: #2f3542; border-radius: 10px; font-size: 18px; font-weight: bold; text-align: center; border: 2px solid #555; box-sizing: border-box;}
        .slot-filled { border-color: #20bf6b; color: #20bf6b; }
        .slot-waiting { border-color: #f1c40f; color: #f1c40f; animation: blink 1.5s infinite; }
        @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        #toast { position: fixed; top: 15px; left: 50%; transform: translateX(-50%); background: #ff6b81; color: white; padding: 12px 25px; font-size: 18px; font-weight: bold; border-radius: 30px; z-index: 9999; display: none; box-shadow: 0 5px 15px rgba(0,0,0,0.5); pointer-events: none; white-space: nowrap; }

        .lobby-layout { 
            display: flex; gap: 20px; background: #1a1a2e; border: 3px solid #0f3460; border-radius: 15px; 
            padding: 20px; box-sizing: border-box; width: 100%; max-width: 900px; 
            height: 85dvh; max-height: 600px; 
        }
        .lobby-left, .lobby-right { display: flex; flex-direction: column; height: 100%; overflow-y: auto; padding-right: 5px; }
        .lobby-left { width: 40%; min-width: 250px; flex-shrink: 0; }
        .lobby-right { width: 60%; min-width: 350px; }

        table { border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #16213e; width: 100%; }
        th, td { border: 2px solid #0f3460; padding: 5px; text-align: center; }
        th { background-color: #0f3460; color: #f7b731; }
        
        .stat-input, .time-input { width: 45px; padding: 4px; font-family: inherit; font-size: 13px; font-weight: bold; text-align: center; border-radius: 5px; border: 1px solid #778ca3; background: #d1d8e0; color: #1a1a2e; box-sizing: border-box; }
        .time-input { width: 60px; font-size: 16px; }

        #in-game-title { display: none; } 

        #ui-bar { 
            display: flex; justify-content: space-between; align-items: flex-end; 
            width: calc(var(--board-size) + 270px); 
            max-width: 100%; margin-top: 15px; margin-bottom: 10px; z-index: 10; padding: 0 10px; box-sizing: border-box;
        }
        .turn-white { color: #fff; text-shadow: 0 0 10px #0fb9b1; }
        .turn-black { color: #ff6b81; text-shadow: 0 0 10px #eb3b5a; }
        #check-indicator { color: #f1c40f; font-size: 14px; font-weight: bold; text-shadow: 0 0 8px #f39c12; margin-top: 5px; }
        .timer-box { font-size: 16px; font-weight: bold; background: #2f3542; padding: 6px 15px; border-radius: 8px; border: 2px solid #555; }

        #game-container { 
            display: flex; flex-direction: row; gap: 20px; 
            width: 100%; justify-content: center; align-items: flex-start; box-sizing: border-box; 
        }
        
        #board { 
            display: grid; grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(8, 1fr); 
            width: var(--board-size); height: var(--board-size); 
            border: 6px solid #000;
            box-shadow: 0 15px 35px rgba(0,0,0,0.9); background: #000; 
            box-sizing: border-box; flex-shrink: 0; 
        }
        
        .square { 
            width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; 
            font-size: calc(var(--board-size) * 0.085); 
            position: relative; cursor: pointer; transition: 0.1s; box-sizing: border-box; 
        }
        
        .coord-num, .coord-letter { font-size: calc(var(--board-size) * 0.02); font-weight: 900; position: absolute; z-index: 25; pointer-events: none; }
        .coord-num { top: 2px; left: 4px; }
        .coord-letter { bottom: 2px; right: 4px; }
        
        .light { background-color: var(--light-color); transition: background-color 0.2s ease; }
        .dark { background-color: var(--dark-color); transition: background-color 0.2s ease; }
        
        .highlight { box-shadow: inset 0 0 0 5px rgba(32, 191, 107, 0.95); }
        .attack-highlight { box-shadow: inset 0 0 0 5px rgba(235, 59, 90, 0.95); }
        .castling-highlight { box-shadow: inset 0 0 0 5px rgba(247, 183, 49, 0.95); }
        .selected { background-color: #f7b731 !important; box-shadow: inset 0 0 15px rgba(0,0,0,0.5); }

        .piece { position: absolute; pointer-events: none; z-index: 20; width: 100%; text-align: center; }
        
        .white-piece { 
            color: #ffffff; 
            text-shadow: 
                -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000,
                0px 3px 5px rgba(0,0,0,0.9); 
        }
        
        .black-piece { 
            color: #050505 !important; 
            text-shadow: 
                -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff,
                0px 3px 5px rgba(255,255,255,0.7) !important; 
        }

        .hp-container { position: absolute; bottom: 4px; left: 10%; width: 80%; height: 6px; background: #111; border: 1.5px solid #000; border-radius: 3px; overflow: hidden; z-index: 15;}
        .hp-fill { height: 100%; background: #20bf6b; transition: width 0.3s; }
        
        .shake { animation: shake 0.4s; }
        .dodge-anim { animation: dodgeMove 0.5s ease-out; }
        @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-4px) rotate(-5deg); } 50% { transform: translateX(4px) rotate(5deg); } 75% { transform: translateX(-4px) rotate(-5deg); } 100% { transform: translateX(0); } }
        @keyframes dodgeMove { 0% { transform: translateX(0); opacity: 1; } 50% { transform: translateX(15px); opacity: 0.5; } 100% { transform: translateX(0); opacity: 1; } }

        .float-text { position: absolute; font-weight: bold; font-size: calc(var(--board-size) * 0.05); text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000; pointer-events: none; z-index: 30; animation: floatUp 1s ease-out forwards; }
        .text-dmg { color: #ff4757; }
        .text-crit { color: #ffa502; font-size: calc(var(--board-size) * 0.07); text-shadow: 0 0 10px #ff4757, 3px 3px 0 #000; }
        .text-dodge { color: #2ed573; text-shadow: 2px 2px 0 #000; }
        .text-counter { color: #ff7f50; text-shadow: 2px 2px 0 #000; }
        @keyframes floatUp { 0% { transform: translateY(5px) scale(1); opacity: 1; } 100% { transform: translateY(-30px) scale(1.5); opacity: 0; } }

        #log { 
            width: 250px; height: var(--board-size); padding: 10px; background: #000; 
            border: 3px solid #333; overflow-y: auto; color: #fff; font-size: 15px; 
            border-radius: 8px; box-sizing: border-box; line-height: 1.5; flex-shrink: 0; 
        }
        #log span { display: block; margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px solid #222; }
        #log span:last-child { border-bottom: none; }

        #portrait-warning { display: none; }

        .setting-icon {
            position: absolute; bottom: 20px; right: 20px; font-size: 35px; cursor: pointer; 
            text-shadow: 2px 2px 10px rgba(0,0,0,0.8); z-index: 1000; transition: 0.3s;
        }
        .setting-icon:hover { transform: rotate(90deg) scale(1.1); }
        
        .color-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 10px; }
        .color-swatch { width: 45px; height: 45px; border-radius: 50%; cursor: pointer; border: 3px solid #fff; transition: 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.5); }
        .color-swatch:hover { transform: scale(1.15); }
        .board-swatch { width: 60px; height: 45px; border-radius: 8px; cursor: pointer; border: 3px solid #fff; display: flex; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.5); transition: 0.2s; }
        .board-swatch .half { flex: 1; height: 100%; }
        .board-swatch:hover { transform: scale(1.15); }

        @media (max-width: 900px) and (orientation: landscape) {
            h1.main-title { font-size: 26px !important; margin-bottom: 10px; }
            .menu-btn { max-width: 200px; padding: 10px; font-size: 16px; margin: 5px; }
            
            .lobby-layout { padding: 10px; gap: 15px; border-width: 2px; }
            .lobby-left { min-width: 200px; }
            .lobby-right { min-width: 280px; }
            .player-slot { padding: 8px; font-size: 15px; }

            #ui-bar { width: calc(var(--board-size) + 210px); margin-top: 5px; margin-bottom: 5px; }
            #turn-indicator { font-size: 18px; }
            .timer-box { font-size: 13px; padding: 4px 10px; }
            
            #game-container { gap: 10px; }
            #log { width: 200px; font-size: 13px; }
            
            table { font-size: 11px; }
            th, td { padding: 2px; }
            .stat-input { width: 32px; font-size: 11px; }
            
            #intro-screen h1 { font-size: 35px !important; }
            #intro-screen p { font-size: 18px !important; }

            .setting-icon { font-size: 30px; bottom: 15px; right: 15px; }
            
            .color-swatch { width: 35px; height: 35px; }
            .board-swatch { width: 50px; height: 35px; }
        }

        @media screen and (max-width: 768px) and (orientation: portrait) {
            #portrait-warning {
                display: flex !important; position: fixed; top: 0; left: 0; width: 100vw; height: 100dvh;
                background: rgba(0, 0, 0, 0.98); color: #fff; z-index: 99999;
                flex-direction: column; align-items: center; justify-content: center;
                font-size: 24px; font-weight: bold; text-align: center; line-height: 1.5;
            }
        }
    </style>
</head>
<body>

    <div id="portrait-warning">
        <div style="font-size: 60px; margin-bottom: 20px;">🔄</div>
        스마트폰을 가로로 눕혀주세요!<br>
        <span style="font-size: 14px; color: #778ca3; font-weight: normal; margin-top: 10px;">(쾌적한 플레이를 위해 가로 모드만 지원합니다)</span>
    </div>

    <div id="intro-screen" onclick="startApp()">
        <h1 class="main-title" style="font-size: 50px;">⚔️ 배틀 체스</h1>
        <p style="color: #20bf6b; font-size: 24px; font-weight: bold; animation: blink 1.5s infinite;">화면을 터치해서 시작하세요</p>
    </div>

    <div id="toast">메시지</div>

    <!-- 메인 화면 -->
    <div id="main-screen" class="screen">
        <h1 class="main-title">⚔️ 배틀 체스</h1>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <button class="menu-btn" style="background: #20bf6b;" onclick="enterFullScreen(); createRoom();">새로운 방 만들기</button>
            <button class="menu-btn" style="background: #e94560;" onclick="enterFullScreen(); openRoomList();">방 목록 보기</button>
        </div>
        <div style="margin: 15px 0; font-size: 16px; color: #778ca3; font-weight:bold;">또는</div>
        <div style="display: flex; gap: 10px; align-items: center; justify-content: center;">
            <input type="text" id="invite-code" class="room-input" placeholder="초대 코드" maxlength="4">
            <button class="menu-btn" style="width: auto; margin: 0; padding: 10px 20px; background: #778ca3;" onclick="enterFullScreen(); joinByCode();">입장</button>
        </div>

        <div class="setting-icon" onclick="openSettings()">⚙️</div>
    </div>

    <!-- 설정 화면 -->
    <div id="settings-screen" class="screen" style="display: none; z-index: 3000;">
        <h1 class="main-title" style="font-size: 35px; margin-bottom: 10px;">⚙️ 환경 설정</h1>
        
        <div style="background: rgba(30, 30, 30, 0.95); padding: 15px 20px; border-radius: 10px; width: 100%; max-width: 500px; margin-bottom: 15px; border: 2px solid #555;">
            <h3 style="margin-top: 0; color: #fff; border-bottom: 1px solid #555; padding-bottom: 8px;">🌌 배경색 테마 (눈에 편안한 10종)</h3>
            <div class="color-grid" id="bg-color-grid"></div>
        </div>
        
        <div style="background: rgba(30, 30, 30, 0.95); padding: 15px 20px; border-radius: 10px; width: 100%; max-width: 500px; margin-bottom: 20px; border: 2px solid #555;">
            <h3 style="margin-top: 0; color: #fff; border-bottom: 1px solid #555; padding-bottom: 8px;">🏁 체스판 테마 (가시성 최강 10종)</h3>
            <div class="color-grid" id="board-color-grid"></div>
        </div>

        <button class="menu-btn" style="background: #778ca3; width: 200px;" onclick="closeSettings()">저장 및 닫기</button>
    </div>

    <!-- 방 목록 화면 -->
    <div id="room-list-screen" class="screen" style="display: none;">
        <h1 class="main-title" style="font-size: 30px;">대기 중인 방 목록</h1>
        <div id="room-list-box" class="room-list-box"></div>
        <button class="menu-btn" style="background: #0fb9b1;" onclick="goHome()">뒤로가기</button>
    </div>

    <!-- 로비 화면 -->
    <div id="lobby-screen" class="screen" style="display: none;">
        <div id="guest-notice-banner" style="background: rgba(235, 59, 90, 0.2); border: 2px solid #eb3b5a; padding: 8px 15px; border-radius: 10px; margin-bottom: 10px; color: #ff6b81; font-weight: bold; font-size: 15px; text-align: center; display: none;">
            🔒 참가자는 방장이 설정한 값을 보기만 할 수 있습니다.
        </div>
        
        <div style="background: #20bf6b; color: #1a1a2e; padding: 5px 20px; border-radius: 15px; font-size: 20px; font-weight: bold; margin-bottom: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
            초대 코드 : <span id="lobby-room-id" style="letter-spacing: 2px;"></span>
        </div>
        
        <div class="lobby-layout">
            <div class="lobby-left">
                <h2 style="margin: 0 0 10px 0; color: #fff; border-bottom: 2px solid #0f3460; padding-bottom: 5px; font-size: 18px;">👥 참가자 정보</h2>
                <div class="player-slot slot-filled">1P: 방장</div>
                <div id="player2-slot" class="player-slot slot-waiting">2P: 대기 중...</div>

                <div style="background: #2f3542; padding: 15px; border-radius: 10px; margin-top: 10px; border: 2px solid #555;">
                    <h3 style="margin: 0 0 10px 0; color: #fff; border-bottom: 1px solid #555; padding-bottom: 8px; font-size: 15px;">⏱️ 제한 시간</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span style="font-size: 14px; font-weight: bold; color: #d1d8e0;">1P (방장):</span>
                        <div style="display: flex; align-items: center;">
                            <input type="number" id="p1-time" class="time-input" value="5" min="1" max="120" onchange="syncLobby()">
                            <span style="color: #fff; font-size: 15px; font-weight: bold; margin-left: 6px;">분</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 14px; font-weight: bold; color: #d1d8e0;">2P (참가자):</span>
                        <div style="display: flex; align-items: center;">
                            <input type="number" id="p2-time" class="time-input" value="5" min="1" max="120" onchange="syncLobby()">
                            <span style="color: #fff; font-size: 15px; font-weight: bold; margin-left: 6px;">분</span>
                        </div>
                    </div>
                </div>

                <div id="host-controls" style="margin-top: auto; padding-top: 15px;">
                    <button class="menu-btn" style="background: #eb3b5a; font-size: 22px; padding: 15px; width: 100%; margin: 0; box-shadow: 0 5px 15px rgba(235, 59, 90, 0.4);" onclick="startGameBtn()">⚔️ 시작</button>
                    <p style="color:#778ca3; margin-top:10px; text-align:center; font-size: 12px;">* 2P 유저가 없으면 AI와 대결</p>
                </div>
                <div id="guest-controls" style="margin-top: auto; padding-top: 15px; text-align: center; display: none;">
                    <div style="background: rgba(32, 191, 107, 0.1); border: 1px solid #20bf6b; padding: 10px; border-radius: 8px;">
                        <span style="color: #20bf6b; font-size: 14px; font-weight: bold; animation: blink 1.5s infinite;">방장 시작 대기중...</span>
                    </div>
                </div>
            </div>

            <div class="lobby-right">
                <h2 style="margin: 0 0 10px 0; color: #fff; border-bottom: 2px solid #0f3460; padding-bottom: 5px; font-size: 18px;">⚙️ 스탯 설정</h2>
                <div id="lobby-settings-container" style="flex-grow: 1;"></div>
                <div style="display: flex; justify-content: space-between; margin-top: 10px; gap: 10px;">
                    <button id="btn-reset" class="menu-btn" style="flex: 1; background: #eccc68; color: #2d3436; margin: 0; padding: 10px;" onclick="resetSettings()">초기화</button>
                    <button class="menu-btn" style="flex: 1; background: #778ca3; margin: 0; padding: 10px;" onclick="location.reload()">방 나가기</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 폰 승급 팝업 -->
    <div id="promotion-screen" class="screen" style="display: none; z-index: 200;">
        <h1 class="main-title" style="font-size: 30px; margin-bottom: 20px;">🌟 승급!</h1>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <button class="menu-btn" style="width: auto; padding: 15px; font-size: 24px;" onclick="selectPromotion('Q')">♛ 퀸</button>
            <button class="menu-btn" style="width: auto; padding: 15px; font-size: 24px; background:#0fb9b1;" onclick="selectPromotion('R')">♜ 룩</button>
            <button class="menu-btn" style="width: auto; padding: 15px; font-size: 24px; background:#f7b731;" onclick="selectPromotion('B')">♝ 비숍</button>
            <button class="menu-btn" style="width: auto; padding: 15px; font-size: 24px; background:#eccc68; color:#2d3436;" onclick="selectPromotion('N')">♞ 나이트</button>
        </div>
    </div>

    <!-- 인게임 스탯 팝업 -->
    <div id="in-game-stats-screen" class="screen" style="display: none; z-index: 250; background: rgba(0,0,0,0.85);">
        <h1 class="main-title" style="font-size: 24px; margin-bottom: 10px;">📊 적용된 스탯</h1>
        <div id="in-game-stats-container" style="background: #1a1a2e; border: 3px solid #0f3460; padding: 15px; border-radius: 10px; width: 100%; max-width: 500px; overflow-x: auto;"></div>
        <button class="menu-btn" style="background: #778ca3; margin-top: 15px;" onclick="closeInGameStats()">닫기</button>
    </div>

    <div id="ui-bar" style="display: none;">
        <div style="display: flex; flex-direction: column; justify-content: flex-end;">
            <div id="turn-indicator" class="turn-white" style="font-size: 22px; font-weight: bold;">대기 중...</div>
            <div id="check-indicator"></div>
        </div>
        <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 5px;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div id="my-role" style="color:#f7b731; font-size: 14px; display: none;">역할 대기 중...</div>
                <button class="menu-btn" style="width: auto; padding: 4px 10px; font-size: 14px; margin: 0; background: #0fb9b1;" onclick="openInGameStats()">📊 스탯 확인</button>
            </div>
            <div class="timer-box">
                상대: <span id="opp-time" style="color:#778ca3;">00:00</span> &nbsp;|&nbsp; 나: <span id="my-time" style="color:#778ca3;">00:00</span>
            </div>
        </div>
    </div>
    
    <div id="game-container" style="display: none;">
        <div id="board"></div>
        <div id="log"></div>
    </div>

    <div id="game-over" class="screen" style="display: none; z-index: 300;">
        <h1 id="winner-text" class="main-title" style="font-size: 50px;">승리!</h1>
        <button class="menu-btn" onclick="location.reload()">메인 메뉴로 돌아가기</button>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script>
        const BG_COLORS = [
            '#1a1a2e', '#000000', '#2d3436', '#1e272e', '#833471', 
            '#c23616', '#009432', '#0652DD', '#EA2027', '#1B1464'
        ];

        const BOARD_THEMES = [
            { light: '#eeeed2', dark: '#769656' }, 
            { light: '#dee3e6', dark: '#8ca2ad' }, 
            { light: '#f0d9b5', dark: '#b58863' }, 
            { light: '#ffffff', dark: '#666666' }, 
            { light: '#e4dced', dark: '#896a98' }, 
            { light: '#fce4cf', dark: '#cf6767' }, 
            { light: '#dcf5eb', dark: '#4fa692' }, 
            { light: '#ffffcc', dark: '#ff9ff3' }, 
            { light: '#eaf0ce', dark: '#5a8f7b' }, 
            { light: '#cccccc', dark: '#555555' }  
        ];

        function openSettings() {
            document.getElementById('settings-screen').style.display = 'flex';
            
            const bgGrid = document.getElementById('bg-color-grid');
            bgGrid.innerHTML = '';
            BG_COLORS.forEach(color => {
                let div = document.createElement('div');
                div.className = 'color-swatch';
                div.style.backgroundColor = color;
                div.onclick = () => document.documentElement.style.setProperty('--bg-color', color);
                bgGrid.appendChild(div);
            });

            const boardGrid = document.getElementById('board-color-grid');
            boardGrid.innerHTML = '';
            BOARD_THEMES.forEach(theme => {
                let div = document.createElement('div');
                div.className = 'board-swatch';
                div.innerHTML = `<div class="half" style="background:${theme.light}"></div><div class="half" style="background:${theme.dark}"></div>`;
                div.onclick = () => {
                    document.documentElement.style.setProperty('--light-color', theme.light);
                    document.documentElement.style.setProperty('--dark-color', theme.dark);
                };
                boardGrid.appendChild(div);
            });
        }

        function closeSettings() {
            document.getElementById('settings-screen').style.display = 'none';
        }

        function startApp() {
            enterFullScreen();
            document.getElementById('intro-screen').style.display = 'none';
        }

        function enterFullScreen() {
            let doc = document.documentElement;
            if (doc.requestFullscreen) { doc.requestFullscreen().catch(err => console.log(err)); } 
            else if (doc.webkitRequestFullscreen) { doc.webkitRequestFullscreen().catch(err => console.log(err)); } 
            else if (doc.msRequestFullscreen) { doc.msRequestFullscreen().catch(err => console.log(err)); }
        }

        const socket = io();
        const BOARD_SIZE = 8;
        const boardEl = document.getElementById('board');
        const logEl = document.getElementById('log');
        
        let myRoomId = null;
        let myColor = 'spectator';
        let aiColor = 'black'; 
        let isHost = false;
        let playersInRoom = 0;
        let isAIMode = false; 
        
        let board = [];
        let turn = 'white';
        let selectedCell = null;
        let validMoves = [];
        let pendingAction = null;

        let whiteTime = 300;
        let blackTime = 300;
        let timerInterval = null;
        let isGameRunning = false;

        const DEFAULT_STATS = {
            'P': { sym: '♟', maxHp: 30, minDmg: 10, maxDmg: 20, dodge: 10, crit: 5, counter: 100, name: '폰' },
            'N': { sym: '♞', maxHp: 50, minDmg: 20, maxDmg: 35, dodge: 30, crit: 15, counter: 80, name: '나이트' }, 
            'B': { sym: '♝', maxHp: 40, minDmg: 25, maxDmg: 40, dodge: 20, crit: 15, counter: 80, name: '비숍' },
            'R': { sym: '♜', maxHp: 70, minDmg: 20, maxDmg: 30, dodge: 10, crit: 10, counter: 100, name: '룩' },
            'Q': { sym: '♛', maxHp: 90, minDmg: 30, maxDmg: 50, dodge: 20, crit: 20, counter: 100, name: '퀸' },
            'K': { sym: '♚', maxHp: 120, minDmg: 15, maxDmg: 25, dodge: 15, crit: 10, counter: 100, name: '킹' }
        };
        
        let PIECE_TYPES = JSON.parse(JSON.stringify(DEFAULT_STATS));

        const INITIAL_SETUP = [
            ['R','N','B','Q','K','B','N','R'],
            ['P','P','P','P','P','P','P','P'],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['P','P','P','P','P','P','P','P'],
            ['R','N','B','Q','K','B','N','R']
        ];

        function getCoord(r, c) { return String.fromCharCode(65 + c) + (8 - r); }
        function getPieceFullName(p) { return (p.color === 'white' ? '백' : '흑') + ' ' + p.stats.name; }

        function showToast(msg) {
            let t = document.getElementById('toast');
            t.innerText = msg; t.style.display = 'block';
            setTimeout(() => { t.style.display = 'none'; }, 3000);
        }
        socket.on('show_toast', (msg) => { showToast(msg); });

        function hideAllScreens() { document.querySelectorAll('.screen').forEach(s => { if(s.id !== 'settings-screen') s.style.display = 'none'; }); }
        function goHome() { hideAllScreens(); document.getElementById('main-screen').style.display = 'flex'; }
        function openRoomList() { hideAllScreens(); document.getElementById('room-list-screen').style.display = 'flex'; socket.emit('request_room_list'); }
        
        socket.on('room_list', (list) => {
            const box = document.getElementById('room-list-box'); box.innerHTML = '';
            if(list.length === 0) { box.innerHTML = '<p style="text-align:center; color:#778ca3;">열려있는 방이 없습니다.</p>'; } 
            else { list.forEach(room => { box.innerHTML += `<div class="room-item"><span style="font-weight: bold;">방 번호: ${room.roomId} (${room.players}/2)</span><button class="menu-btn" style="background:#20bf6b;" onclick="joinRoom('${room.roomId}')">입장</button></div>`; }); }
        });

        function joinByCode() { let code = document.getElementById('invite-code').value.trim(); if(code) joinRoom(code); }
        function createRoom() { socket.emit('create_room'); }
        function joinRoom(roomId) { socket.emit('join_room', roomId); }

        socket.on('room_joined', (data) => {
            myRoomId = data.roomId; isHost = data.isHost; playersInRoom = data.players;
            hideAllScreens(); document.getElementById('lobby-screen').style.display = 'flex'; document.getElementById('lobby-room-id').innerText = myRoomId;
            renderLobbySettings();
            if (isHost) {
                document.getElementById('host-controls').style.display = 'flex'; document.getElementById('guest-controls').style.display = 'none';
                document.getElementById('btn-reset').style.display = 'block'; document.getElementById('guest-notice-banner').style.display = 'none';
            } else {
                document.getElementById('host-controls').style.display = 'none'; document.getElementById('guest-controls').style.display = 'block'; 
                document.getElementById('btn-reset').style.display = 'none'; document.getElementById('guest-notice-banner').style.display = 'block';
                updatePlayer2Slot(true); 
            }
        });

        socket.on('player2_joined', () => { playersInRoom = 2; updatePlayer2Slot(true); });
        socket.on('player_left', () => {
            if (!isGameRunning) { playersInRoom = 1; updatePlayer2Slot(false); showToast("상대가 나갔습니다."); } 
            else { showToast("상대방이 게임을 나갔습니다."); setTimeout(() => location.reload(), 2000); }
        });

        function updatePlayer2Slot(isFilled) {
            let p2Slot = document.getElementById('player2-slot');
            if(isFilled) { p2Slot.innerText = "2P: 접속 완료!"; p2Slot.className = "player-slot slot-filled"; } 
            else { p2Slot.innerText = "2P: 대기 중..."; p2Slot.className = "player-slot slot-waiting"; }
        }

        function renderLobbySettings() {
            let html = `<table style="width: 100%;"><tr><th>기물</th><th>HP</th><th>최소</th><th>최대</th><th>회피%</th><th>크리%</th><th>반격%</th></tr>`;
            for(let key in PIECE_TYPES) {
                let p = PIECE_TYPES[key]; let disabled = isHost ? '' : 'disabled';
                html += `<tr><td style="color:#f7b731; font-weight:bold;">${p.sym} ${p.name}</td>
                    <td><input type="number" id="hp-${key}" value="${p.maxHp}" class="stat-input" ${disabled} onchange="syncLobby()"></td>
                    <td><input type="number" id="min-${key}" value="${p.minDmg}" class="stat-input" ${disabled} onchange="syncLobby()"></td>
                    <td><input type="number" id="max-${key}" value="${p.maxDmg}" class="stat-input" ${disabled} onchange="syncLobby()"></td>
                    <td><input type="number" id="dodge-${key}" value="${p.dodge}" class="stat-input" ${disabled} onchange="syncLobby()"></td>
                    <td><input type="number" id="crit-${key}" value="${p.crit}" class="stat-input" ${disabled} onchange="syncLobby()"></td>
                    <td><input type="number" id="counter-${key}" value="${p.counter}" class="stat-input" ${disabled} onchange="syncLobby()"></td></tr>`;
            }
            html += `</table>`;
            document.getElementById('lobby-settings-container').innerHTML = html;
            document.getElementById('p1-time').disabled = !isHost; document.getElementById('p2-time').disabled = !isHost;
        }

        function resetSettings() { 
            if(!isHost) return; PIECE_TYPES = JSON.parse(JSON.stringify(DEFAULT_STATS)); 
            document.getElementById('p1-time').value = 5; document.getElementById('p2-time').value = 5;
            renderLobbySettings(); syncLobby();
        }

        function syncLobby() {
            if(!isHost) return;
            let p1T = parseInt(document.getElementById('p1-time').value) || 5; let p2T = parseInt(document.getElementById('p2-time').value) || 5;
            for(let key in PIECE_TYPES) {
                PIECE_TYPES[key].maxHp = parseInt(document.getElementById(`hp-${key}`).value) || 1;
                PIECE_TYPES[key].minDmg = parseInt(document.getElementById(`min-${key}`).value) || 0;
                PIECE_TYPES[key].maxDmg = parseInt(document.getElementById(`max-${key}`).value) || 0;
                PIECE_TYPES[key].dodge = parseInt(document.getElementById(`dodge-${key}`).value) || 0;
                PIECE_TYPES[key].crit = parseInt(document.getElementById(`crit-${key}`).value) || 0;
                PIECE_TYPES[key].counter = parseInt(document.getElementById(`counter-${key}`).value) || 0;
            }
            socket.emit('sync_lobby', { roomId: myRoomId, stats: PIECE_TYPES, p1Time: p1T, p2Time: p2T });
        }

        socket.on('sync_lobby', (data) => { 
            if(!isHost) { PIECE_TYPES = data.stats; document.getElementById('p1-time').value = data.p1Time; document.getElementById('p2-time').value = data.p2Time; renderLobbySettings(); }
        });

        function openInGameStats() {
            let html = `<table style="width: 100%; margin: 0;"><tr><th>기물</th><th>HP</th><th>최소</th><th>최대</th><th>회피%</th><th>크리%</th><th>반격%</th></tr>`;
            for(let key in PIECE_TYPES) {
                let p = PIECE_TYPES[key];
                html += `<tr><td style="color:#f7b731; font-weight:bold;">${p.sym} ${p.name}</td><td>${p.maxHp}</td><td>${p.minDmg}</td><td>${p.maxDmg}</td><td>${p.dodge}%</td><td>${p.crit}%</td><td>${p.counter}%</td></tr>`;
            }
            html += `</table>`;
            document.getElementById('in-game-stats-container').innerHTML = html; document.getElementById('in-game-stats-screen').style.display = 'flex';
        }
        function closeInGameStats() { document.getElementById('in-game-stats-screen').style.display = 'none'; }

        function startGameBtn() {
            if(!isHost) return; syncLobby(); 
            let aiMode = (playersInRoom === 1); 
            let p1T = parseInt(document.getElementById('p1-time').value) || 5; let p2T = parseInt(document.getElementById('p2-time').value) || 5;
            socket.emit('start_game', { roomId: myRoomId, isAI: aiMode, p1Time: p1T, p2Time: p2T, stats: PIECE_TYPES });
        }

        socket.on('game_started', (data) => {
            isAIMode = data.isAI; myColor = data.colors[socket.id]; 
            if (isAIMode) aiColor = myColor === 'white' ? 'black' : 'white';

            whiteTime = data.whiteTime; blackTime = data.blackTime; PIECE_TYPES = data.stats;

            hideAllScreens(); 
            document.getElementById('ui-bar').style.display = 'flex';
            document.getElementById('game-container').style.display = 'flex';

            let roleName = myColor === 'white' ? '백 (선공)' : '흑 (후공)';
            document.getElementById('my-role').innerText = roleName;
            document.getElementById('my-role').style.display = 'block';
            
            initBoardOnly(); 
            let ind = document.getElementById('turn-indicator'); ind.innerText = ('white' === myColor) ? '나의 턴 (백)' : '상대방 턴 (백)'; ind.className = 'turn-white';

            isGameRunning = true; updateTimerUI(); startTimer(); 
            logMessage(`⚔️ 게임이 시작되었습니다.`);
            
            if (isAIMode && aiColor === 'white') { setTimeout(playAI, 1000); }
        });

        function formatTime(seconds) {
            if (seconds < 0) seconds = 0; let m = Math.floor(seconds / 60); let s = seconds % 60; return `${m}:${s.toString().padStart(2, '0')}`;
        }
        function updateTimerUI() {
            let myT = (myColor === 'white') ? whiteTime : blackTime; let oppT = (myColor === 'white') ? blackTime : whiteTime;
            document.getElementById('my-time').innerText = formatTime(myT); document.getElementById('opp-time').innerText = formatTime(oppT);
            if (turn === myColor) { document.getElementById('my-time').style.color = '#20bf6b'; document.getElementById('opp-time').style.color = '#778ca3'; } 
            else { document.getElementById('my-time').style.color = '#778ca3'; document.getElementById('opp-time').style.color = '#20bf6b'; }
        }
        function startTimer() {
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                if (!isGameRunning) return;
                if (turn === 'white') whiteTime--; else blackTime--; updateTimerUI();
                if (whiteTime <= 0) timeOver('white'); if (blackTime <= 0) timeOver('black');
            }, 1000);
        }
        function timeOver(loserColor) {
            if(!isGameRunning) return; isGameRunning = false; clearInterval(timerInterval);
            let winner = (loserColor === 'white') ? 'black' : 'white';
            logMessage(`<span style="color:#eb3b5a; font-weight:bold;">⏰ 시간 초과! ${loserColor === 'white' ? '백' : '흑'} 패배.</span>`);
            document.getElementById('game-over').style.display = 'flex'; document.getElementById('winner-text').innerText = (winner === 'white' ? '백(White)' : '흑(Black)') + " 승리!"; 
        }
        function getSquareIndex(r, c) { return (myColor === 'black') ? (7 - r) * 8 + (7 - c) : r * 8 + c; }

        function initBoardOnly() {
            boardEl.innerHTML = ''; board = [];
            for (let r = 0; r < BOARD_SIZE; r++) {
                let row = [];
                for (let c = 0; c < BOARD_SIZE; c++) {
                    let pieceStr = INITIAL_SETUP[r][c];
                    if (pieceStr) {
                        let stats = PIECE_TYPES[pieceStr];
                        row.push({ type: pieceStr, color: (r < 2 ? 'black' : 'white'), hp: stats.maxHp, stats: stats, hasMoved: false });
                    } else { row.push(null); }
                }
                board.push(row);
            }
            for (let visualR = 0; visualR < BOARD_SIZE; visualR++) {
                for (let visualC = 0; visualC < BOARD_SIZE; visualC++) {
                    let actualR = myColor === 'black' ? 7 - visualR : visualR; let actualC = myColor === 'black' ? 7 - visualC : visualC;
                    const cell = document.createElement('div'); cell.className = `square ${(actualR + actualC) % 2 === 0 ? 'light' : 'dark'}`;
                    cell.onclick = () => handleSquareClick(actualR, actualC); boardEl.appendChild(cell);
                }
            }
            renderBoard();
        }

        function renderBoard() {
            const squares = boardEl.children;
            for (let r = 0; r < BOARD_SIZE; r++) {
                for (let c = 0; c < BOARD_SIZE; c++) {
                    let idx = getSquareIndex(r, c); let sq = squares[idx]; sq.innerHTML = ''; 

                    let visualR = myColor === 'black' ? 7 - r : r;
                    let visualC = myColor === 'black' ? 7 - c : c;
                    let isLightSquare = (visualR + visualC) % 2 === 0;
                    let coordColor = isLightSquare ? '#1a1a2e' : '#ffffff';

                    if (visualC === 0) {
                        let num = document.createElement('div'); num.className = 'coord-num'; num.style.color = coordColor;
                        num.innerText = 8 - r; sq.appendChild(num);
                    }
                    if (visualR === 7) {
                        let letter = document.createElement('div'); letter.className = 'coord-letter'; letter.style.color = coordColor;
                        letter.innerText = String.fromCharCode(65 + c); sq.appendChild(letter);
                    }

                    let piece = board[r][c];
                    if (piece) {
                        let pEl = document.createElement('div'); pEl.className = `piece ${piece.color}-piece`; pEl.innerText = piece.stats.sym;
                        let hpCont = document.createElement('div'); hpCont.className = 'hp-container'; let hpFill = document.createElement('div'); hpFill.className = 'hp-fill';
                        let hpPercent = (piece.hp / piece.stats.maxHp) * 100; hpFill.style.width = `${hpPercent}%`;
                        if(hpPercent <= 30) hpFill.style.background = '#ff4757'; else if(hpPercent <= 60) hpFill.style.background = '#ffa502';
                        hpCont.appendChild(hpFill); sq.appendChild(pEl); sq.appendChild(hpCont);
                    }
                }
            }
        }

        function getValidMoves(r, c) {
            let moves = []; let p = board[r][c]; if (!p) return moves;
            function addMove(nr, nc, limit = 8) {
                let step = 1, curR = r + nr, curC = c + nc;
                while (curR >= 0 && curR < 8 && curC >= 0 && curC < 8 && step <= limit) {
                    if (board[curR][curC] === null) moves.push({ r: curR, c: curC, type: 'move' }); else { if (board[curR][curC].color !== p.color) moves.push({ r: curR, c: curC, type: 'attack' }); break; }
                    curR += nr; curC += nc; step++;
                }
            }
            if (p.type === 'P') {
                let dir = p.color === 'white' ? -1 : 1; let startRow = p.color === 'white' ? 6 : 1;
                if (board[r + dir] && board[r + dir][c] === null) {
                    moves.push({ r: r + dir, c: c, type: 'move' }); if (r === startRow && board[r + 2*dir][c] === null) moves.push({ r: r + 2*dir, c: c, type: 'move' });
                }
                if (board[r + dir] && board[r + dir][c - 1] && board[r + dir][c - 1].color !== p.color) moves.push({ r: r + dir, c: c - 1, type: 'attack' });
                if (board[r + dir] && board[r + dir][c + 1] && board[r + dir][c + 1].color !== p.color) moves.push({ r: r + dir, c: c + 1, type: 'attack' });
            }
            else if (p.type === 'N') [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(m => addMove(m[0], m[1], 1));
            else if (p.type === 'B') [[-1,-1],[-1,1],[1,-1],[1,1]].forEach(m => addMove(m[0], m[1]));
            else if (p.type === 'R') [[-1,0],[1,0],[0,-1],[0,1]].forEach(m => addMove(m[0], m[1]));
            else if (p.type === 'Q') [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]].forEach(m => addMove(m[0], m[1]));
            else if (p.type === 'K') {
                [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]].forEach(m => addMove(m[0], m[1], 1));
                if (!p.hasMoved) {
                    if (c + 3 < 8 && board[r][c+3] && board[r][c+3].type === 'R' && !board[r][c+3].hasMoved) { if (board[r][c+1] === null && board[r][c+2] === null) moves.push({ r: r, c: c+2, type: 'castling', rookC: c+3, rookTargetC: c+1 }); }
                    if (c - 4 >= 0 && board[r][c-4] && board[r][c-4].type === 'R' && !board[r][c-4].hasMoved) { if (board[r][c-1] === null && board[r][c-2] === null && board[r][c-3] === null) moves.push({ r: r, c: c-2, type: 'castling', rookC: c-4, rookTargetC: c-1 }); }
                }
            }
            return moves;
        }

        function generateAttackData(fromR, fromC, toR, toC) {
            let attacker = board[fromR][fromC]; let defender = board[toR][toC];
            let isDodge = Math.random() < (defender.stats.dodge / 100); let isCrit = false; let dmg = 0;
            if (!isDodge) { isCrit = Math.random() < (attacker.stats.crit / 100); dmg = isCrit ? defender.hp : Math.floor(Math.random() * (attacker.stats.maxDmg - attacker.stats.minDmg + 1)) + attacker.stats.minDmg; }
            let data = { roomId: myRoomId, type: 'attack', fromR, fromC, toR, toC, dmg, isCrit, isDodge, counter: null, syncWhite: whiteTime, syncBlack: blackTime };
            let willKill = !isDodge && (dmg >= defender.hp);
            if (!willKill) {
                let defMoves = getValidMoves(toR, toC);
                if (defMoves.some(m => m.r === fromR && m.c === fromC && m.type === 'attack') && Math.random() < (defender.stats.counter / 100)) {
                    let cIsDodge = Math.random() < (attacker.stats.dodge / 100); let cIsCrit = false; let cDmg = 0;
                    if (!cIsDodge) { cIsCrit = Math.random() < (defender.stats.crit / 100); cDmg = cIsCrit ? attacker.hp : Math.floor(Math.random() * (defender.stats.maxDmg - defender.stats.minDmg + 1)) + defender.stats.minDmg; }
                    data.counter = { dmg: cDmg, isCrit: cIsCrit, isDodge: cIsDodge };
                }
            }
            return data;
        }

        function selectPromotion(pieceType) {
            document.getElementById('promotion-screen').style.display = 'none'; pendingAction.promotionPiece = pieceType;
            if(!isAIMode) socket.emit('action', pendingAction); 
            if (pendingAction.type === 'move') applyMove(pendingAction); else if (pendingAction.type === 'attack') applyAttack(pendingAction);
            pendingAction = null;
        }

        function handleSquareClick(r, c) {
            if (!isGameRunning) return;
            if (turn !== myColor) { showToast("상대방의 턴입니다!"); return; }
            let clickedPiece = board[r][c];
            if (selectedCell) {
                let move = validMoves.find(m => m.r === r && m.c === c);
                if (move) {
                    let attacker = board[selectedCell.r][selectedCell.c]; let isPromotion = attacker.type === 'P' && (r === 0 || r === 7);
                    if (move.type === 'move') {
                        let data = { roomId: myRoomId, type: 'move', fromR: selectedCell.r, fromC: selectedCell.c, toR: r, toC: c, syncWhite: whiteTime, syncBlack: blackTime };
                        if (isPromotion) { pendingAction = data; document.getElementById('promotion-screen').style.display = 'flex'; return; }
                        if(!isAIMode) socket.emit('action', data); applyMove(data);
                    } else if (move.type === 'castling') {
                        let data = { roomId: myRoomId, type: 'castling', fromR: selectedCell.r, fromC: selectedCell.c, toR: r, toC: c, rookC: move.rookC, rookTargetC: move.rookTargetC, syncWhite: whiteTime, syncBlack: blackTime };
                        if(!isAIMode) socket.emit('action', data); applyCastling(data);
                    } else if (move.type === 'attack') {
                        let data = generateAttackData(selectedCell.r, selectedCell.c, r, c); let willKill = !data.isDodge && (data.dmg >= board[r][c].hp);
                        if (isPromotion && willKill) { pendingAction = data; document.getElementById('promotion-screen').style.display = 'flex'; return; }
                        if(!isAIMode) socket.emit('action', data); applyAttack(data);
                    }
                    return;
                } else if (clickedPiece && clickedPiece.color === myColor) { selectPiece(r, c); return; } else { clearHighlights(); selectedCell = null; return; }
            }
            if (clickedPiece && clickedPiece.color === myColor) selectPiece(r, c);
        }

        socket.on('update_board', (data) => {
            if(data.syncWhite !== undefined) { whiteTime = data.syncWhite; blackTime = data.syncBlack; updateTimerUI(); }
            if (data.type === 'move') applyMove(data); else if (data.type === 'castling') applyCastling(data); else if (data.type === 'attack') applyAttack(data);
        });

        function applyMove(data) {
            let p = board[data.fromR][data.fromC];
            logMessage(`🚶 ${getPieceFullName(p)}: ${getCoord(data.fromR, data.fromC)} ➔ ${getCoord(data.toR, data.toC)}`);

            board[data.toR][data.toC] = p; board[data.fromR][data.fromC] = null; board[data.toR][data.toC].hasMoved = true;
            if (data.promotionPiece) { 
                let p2 = board[data.toR][data.toC]; p2.type = data.promotionPiece; p2.stats = PIECE_TYPES[data.promotionPiece]; p2.hp = p2.stats.maxHp; 
                logMessage(`🌟 ${p2.color==='white'?'백':'흑'} 폰 ➔ ${p2.stats.name}(으)로 승급!`); 
                showFloatText(data.toR, data.toC, "승급!", 'crit'); 
            }
            endTurn();
        }

        function applyCastling(data) {
            let king = board[data.fromR][data.fromC]; let rook = board[data.toR][data.rookC];
            logMessage(`🏰 ${king.color==='white'?'백':'흑'} 캐슬링 (킹&룩 교환)`);
            board[data.toR][data.toC] = king; board[data.fromR][data.fromC] = null; king.hasMoved = true;
            board[data.toR][data.rookTargetC] = rook; board[data.toR][data.rookC] = null; rook.hasMoved = true; endTurn();
        }

        function applyAttack(data) {
            let attacker = board[data.fromR][data.fromC]; let defender = board[data.toR][data.toC]; 
            const targetSquare = boardEl.children[getSquareIndex(data.toR, data.toC)];
            let attName = getPieceFullName(attacker); let defName = getPieceFullName(defender);
            let moveStr = `${getCoord(data.fromR, data.fromC)}➔${getCoord(data.toR, data.toC)}`;

            if (data.isDodge) {
                showFloatText(data.toR, data.toC, "회피!", 'dodge'); 
                logMessage(`💨 [회피] ${defName}, 공격 피함!`);
                if (targetSquare.children[0]) targetSquare.children[0].classList.add('dodge-anim');
                setTimeout(() => { if(targetSquare.children[0]) targetSquare.children[0].classList.remove('dodge-anim'); checkAfterAttack(data, attacker, defender); }, 600);
            } else {
                defender.hp -= data.dmg; showFloatText(data.toR, data.toC, data.isCrit ? 'CRITICAL!' : `-${data.dmg}`, data.isCrit ? 'crit' : 'dmg'); renderBoard(); targetSquare.children[0].classList.add('shake');
                setTimeout(() => { if(targetSquare.children[0]) targetSquare.children[0].classList.remove('shake'); }, 400);
                
                if(data.isCrit) logMessage(`💥 [치명타] ${attName} (${moveStr}) 👉 ${defName}에게 즉사급 피해!`);
                else logMessage(`⚔️ [공격] ${attName} (${moveStr}) 👉 ${defName}에게 ${data.dmg} 피해`);

                setTimeout(() => { checkAfterAttack(data, attacker, defender); }, 600);
            }
        }

        function checkAfterAttack(data, attacker, defender) {
            let defName = getPieceFullName(defender);
            if (defender.hp <= 0) {
                logMessage(`☠️ ${defName} 파괴됨!`); 
                let isKingDead = defender.type === 'K'; board[data.toR][data.toC] = attacker; board[data.fromR][data.fromC] = null;
                if (data.promotionPiece) { 
                    let p = board[data.toR][data.toC]; p.type = data.promotionPiece; p.stats = PIECE_TYPES[data.promotionPiece]; p.hp = p.stats.maxHp; 
                    logMessage(`🌟 ${p.color==='white'?'백':'흑'} 폰 ➔ ${p.stats.name}(으)로 승급!`); 
                }
                renderBoard(); if (isKingDead) { gameOver(attacker.color); return; } endTurn();
            } else {
                if (data.counter) { 
                    showFloatText(data.toR, data.toC, "반격!", 'counter'); 
                    logMessage(`🔥 ${defName}의 반격 발동!`); 
                    setTimeout(() => { applyCounter(data); }, 800); 
                } else { endTurn(); }
            }
        }

        function applyCounter(data) {
            let originalAttacker = board[data.fromR][data.fromC]; let originalDefender = board[data.toR][data.toC]; 
            const targetSquare = boardEl.children[getSquareIndex(data.fromR, data.fromC)]; let cData = data.counter;
            let attName = getPieceFullName(originalAttacker); let defName = getPieceFullName(originalDefender);

            if (cData.isDodge) {
                showFloatText(data.fromR, data.fromC, "회피!", 'dodge'); 
                logMessage(`💨 [회피] ${attName}, 반격 피함!`);
                if (targetSquare.children[0]) targetSquare.children[0].classList.add('dodge-anim'); setTimeout(() => { if(targetSquare.children[0]) targetSquare.children[0].classList.remove('dodge-anim'); endTurn(); }, 600);
            } else {
                originalAttacker.hp -= cData.dmg; showFloatText(data.fromR, data.fromC, cData.isCrit ? 'CRITICAL!' : `-${cData.dmg}`, cData.isCrit ? 'crit' : 'dmg'); renderBoard(); targetSquare.children[0].classList.add('shake');
                setTimeout(() => { if(targetSquare.children[0]) targetSquare.children[0].classList.remove('shake'); }, 400);
                
                if(cData.isCrit) logMessage(`💥 [반격-치명타] ${defName} 👉 ${attName}에게 치명타!`);
                else logMessage(`🔥 [반격] ${defName} 👉 ${attName}에게 ${cData.dmg} 피해!`);

                setTimeout(() => {
                    if (originalAttacker.hp <= 0) { 
                        logMessage(`☠️ ${attName} 파괴됨!`); 
                        let isKingDead = originalAttacker.type === 'K'; board[data.fromR][data.fromC] = null; renderBoard(); if (isKingDead) { gameOver(originalDefender.color); return; } 
                    }
                    endTurn();
                }, 600);
            }
        }

        function gameOver(winnerColor) { isGameRunning = false; clearInterval(timerInterval); document.getElementById('game-over').style.display = 'flex'; document.getElementById('winner-text').innerText = (winnerColor === 'white' ? '백(White)' : '흑(Black)') + " 승리!"; }

        function selectPiece(r, c) { clearHighlights(); selectedCell = { r, c }; validMoves = getValidMoves(r, c); const squares = boardEl.children; squares[getSquareIndex(r, c)].classList.add('selected'); validMoves.forEach(m => { let sq = squares[getSquareIndex(m.r, m.c)]; if (m.type === 'attack') sq.classList.add('attack-highlight'); else if (m.type === 'castling') sq.classList.add('castling-highlight'); else sq.classList.add('highlight'); }); }
        function clearHighlights() { const squares = boardEl.children; for (let i = 0; i < squares.length; i++) { squares[i].classList.remove('highlight', 'attack-highlight', 'castling-highlight', 'selected'); } }
        function showFloatText(r, c, text, type) { const sq = boardEl.children[getSquareIndex(r, c)]; let dmgEl = document.createElement('div'); dmgEl.className = `float-text text-${type}`; dmgEl.innerText = text; sq.appendChild(dmgEl); setTimeout(() => { if (sq.contains(dmgEl)) sq.removeChild(dmgEl); }, 1000); }

        function endTurn() {
            turn = turn === 'white' ? 'black' : 'white'; let ind = document.getElementById('turn-indicator'); let turnText = (turn === 'white' ? '백' : '흑');
            ind.innerText = (turn === myColor) ? `나의 턴 (${turnText})` : `상대방 턴 (${turnText})`; ind.className = turn === 'white' ? 'turn-white' : 'turn-black';
            clearHighlights(); selectedCell = null; renderBoard(); updateTimerUI();
            
            let whiteThreats = getKingThreats('white'); let blackThreats = getKingThreats('black'); let checkInd = document.getElementById('check-indicator');
            if (whiteThreats > 0 && blackThreats > 0) checkInd.innerText = "⚠️ 양팀 킹 위험 (체크)!"; else if (whiteThreats > 0) checkInd.innerText = "⚠️ 백(White) 킹 위험 (체크)!"; else if (blackThreats > 0) checkInd.innerText = "⚠️ 흑(Black) 킹 위험 (체크)!"; else checkInd.innerText = "";
            if (isAIMode && turn === aiColor) { setTimeout(playAI, 800); }
        }
        function logMessage(msg) { logEl.innerHTML += `<span>${msg}</span>`; logEl.scrollTop = logEl.scrollHeight; }

        function getKingPos(color) { for (let r = 0; r < BOARD_SIZE; r++) { for (let c = 0; c < BOARD_SIZE; c++) { if (board[r][c] && board[r][c].type === 'K' && board[r][c].color === color) return { r, c }; } } return null; }
        function getKingThreats(color) {
            let kingPos = getKingPos(color); if (!kingPos) return 0; let threats = 0; let enemyColor = color === 'white' ? 'black' : 'white';
            for (let r = 0; r < BOARD_SIZE; r++) { for (let c = 0; c < BOARD_SIZE; c++) { if (board[r][c] && board[r][c].color === enemyColor) { if (getValidMoves(r, c).some(m => m.r === kingPos.r && m.c === kingPos.c && m.type === 'attack')) threats++; } } } return threats;
        }
        function simulateThreatToKing(m, color) {
            let originalTarget = board[m.toR][m.toC]; let originalAttacker = board[m.fromR][m.fromC]; let originalRook = null;
            board[m.toR][m.toC] = originalAttacker; board[m.fromR][m.fromC] = null;
            if (m.type === 'castling') { originalRook = board[m.toR][m.rookC]; board[m.toR][m.rookTargetC] = originalRook; board[m.toR][m.rookC] = null; }
            let threats = getKingThreats(color);
            board[m.fromR][m.fromC] = originalAttacker; board[m.toR][m.toC] = originalTarget;
            if (m.type === 'castling') { board[m.toR][m.rookC] = originalRook; board[m.toR][m.rookTargetC] = null; } return threats;
        }

        function playAI() {
            if(!isGameRunning) return; let allMoves = [];
            for (let r = 0; r < BOARD_SIZE; r++) { for (let c = 0; c < BOARD_SIZE; c++) { let p = board[r][c]; if (p && p.color === aiColor) { let moves = getValidMoves(r, c); moves.forEach(m => { allMoves.push({ fromR: r, fromC: c, toR: m.r, toC: m.c, type: m.type, rookC: m.rookC, rookTargetC: m.rookTargetC }); }); } } }
            if (allMoves.length === 0) { endTurn(); return; }

            let currentThreats = getKingThreats(aiColor);
            allMoves.forEach(m => {
                m.score = Math.random() * 10; let futureThreats = simulateThreatToKing(m, aiColor);
                if (currentThreats > 0) { if (futureThreats < currentThreats) m.score += 10000; else m.score -= 5000; } else { if (futureThreats > 0) m.score -= 5000; }
                if (m.type === 'attack') { let target = board[m.toR][m.toC]; m.score += 50; if (target.type === 'K') m.score += 2000; else if (target.hp <= board[m.fromR][m.fromC].stats.maxDmg) m.score += 200; } 
                else if (m.type === 'castling') { m.score += 150; } 
                else { if (board[m.fromR][m.fromC].type === 'P') { m.score += (m.toR > m.fromR) ? 15 : 0; if (m.toR === 7 || m.toR === 0) m.score += 500; } }
            });

            allMoves.sort((a, b) => b.score - a.score); let bestMove = allMoves[0]; selectPiece(bestMove.fromR, bestMove.fromC);
            
            setTimeout(() => {
                let attacker = board[bestMove.fromR][bestMove.fromC]; let isPromotion = attacker.type === 'P' && (bestMove.toR === 7 || bestMove.toR === 0);
                if (bestMove.type === 'move') { let data = { fromR: bestMove.fromR, fromC: bestMove.fromC, toR: bestMove.toR, toC: bestMove.toC, type: bestMove.type, syncWhite: whiteTime, syncBlack: blackTime }; if (isPromotion) data.promotionPiece = 'Q'; applyMove(data); } 
                else if (bestMove.type === 'castling') { let data = { fromR: bestMove.fromR, fromC: bestMove.fromC, toR: bestMove.toR, toC: bestMove.toC, type: bestMove.type, rookC: bestMove.rookC, rookTargetC: bestMove.rookTargetC, syncWhite: whiteTime, syncBlack: blackTime }; applyCastling(data); } 
                else if (bestMove.type === 'attack') { let data = generateAttackData(bestMove.fromR, bestMove.fromC, bestMove.toR, bestMove.toC); if (isPromotion) data.promotionPiece = 'Q'; applyAttack(data); }
            }, 500); 
        }
    </script>
</body>
</html>
