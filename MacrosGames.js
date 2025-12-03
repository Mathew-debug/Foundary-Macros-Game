// ===== ИГРОВОЙ ТЕЛЕФОН =====

const username = game.user.name;

// Полностью очищаем старые игры
if (game.mygame && game.mygame.gameLoop) {
    clearTimeout(game.mygame.gameLoop);
}

// Главное меню телефона
function showPhoneMenu() {
    const menuContent = `
        <div class="phone-container">
            <div class="phone-status-bar">
                <span>${new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})}</span>
                <div class="phone-status-icons">
                    <span>📶</span>
                    <span>🔋</span>
                </div>
            </div>
            
            <div class="phone-header">
                <span>📱 Игровой телефон</span>
            </div>
            
            <div class="phone-content">
                <div class="phone-section" style="background: #1a1a1a; text-align: center;">
                    <div style="color: #fff; font-size: 14px; margin-bottom: 8px;">Привет, ${username}!</div>
                    <div style="color: #888; font-size: 12px;">Выберите игру</div>
                </div>
                
                <div class="phone-apps-grid">
                    <button class="phone-app" data-app="fantasy" type="button">
                        <div class="phone-app-icon" style="background: linear-gradient(145deg, #4CAF50, #2E7D32);">
                            🏰
                        </div>
                        <div class="phone-app-name">Fantasy Quest</div>
                    </button>
                    
                    <button class="phone-app" data-app="minesweeper" type="button">
                        <div class="phone-app-icon" style="background: linear-gradient(145deg, #2196F3, #0D47A1);">
                            💣
                        </div>
                        <div class="phone-app-name">Сапёр</div>
                    </button>
                    
                   <button class="phone-app" data-app="snake" type="button">
                        <div class="phone-app-icon" style="background: linear-gradient(145deg, #4CAF50, #2E7D32);">
                        🐉
                        </div>
                    <div class="phone-app-name">Змейка</div>
                    </button>
                    
                    <button class="phone-app" data-app="seaBattle" type="button">
                        <div class="phone-app-icon" style="background: linear-gradient(145deg, #2196F3, #0D47A1);">
                        ⚔️
                            </div>
                    <div class="phone-app-name">Морская битва</div>
                    </button>
                    
                    <button class="phone-app" data-app="goblinArena" type="button">
                        <div class="phone-app-icon" style="background: linear-gradient(145deg, #8B4513, #654321);">
                        🧟
                            </div>
                    <div class="phone-app-name">Гоблин Арена</div>
                    </button>
                </div>
                
                <div class="phone-dock">
                    <button class="phone-dock-item" data-action="close" type="button">
                        <div style="font-size: 24px;">❌</div>
                        <div style="font-size: 10px; color: #888;">Закрыть</div>
                    </button>
                </div>
            </div>
            
            <div class="phone-home-bar"></div>
        </div>
        
        <style>
            .phone-container {
                width: 320px;
                background: #000;
                border-radius: 24px;
                padding: 16px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                color: white;
                position: relative;
                border: 2px solid #333;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }
            
            .phone-status-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 8px 8px 8px;
                font-size: 12px;
                color: #fff;
            }
            
            .phone-status-icons {
                display: flex;
                gap: 4px;
            }
            
            .phone-header {
                text-align: center;
                padding: 8px;
                font-weight: bold;
                font-size: 16px;
                background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
                border-radius: 12px;
                margin-bottom: 12px;
            }
            
            .phone-content {
                background: #000;
                min-height: 400px;
            }
            
            .phone-section {
                background: #1a1a1a;
                padding: 12px;
                border-radius: 12px;
                margin: 8px 0;
                text-align: center;
                font-size: 14px;
            }
            
            .phone-apps-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
                padding: 16px;
                margin: 12px 0;
            }
            
            .phone-app {
                text-align: center;
                cursor: pointer;
                transition: transform 0.2s;
                background: none;
                border: none;
                color: inherit;
                font: inherit;
                padding: 0;
            }
            
            .phone-app:hover:not(:disabled) {
                transform: scale(1.1);
            }
            
            .phone-app:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .phone-app-icon {
                width: 60px;
                height: 60px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                margin: 0 auto 8px auto;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }
            
            .phone-app-name {
                font-size: 11px;
                color: #fff;
                text-align: center;
            }
            
            .phone-dock {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-top: 20px;
                padding: 12px;
                background: rgba(255,255,255,0.05);
                border-radius: 20px;
            }
            
            .phone-dock-item {
                text-align: center;
                cursor: pointer;
                transition: transform 0.2s;
                background: none;
                border: none;
                color: inherit;
                font: inherit;
                padding: 0;
            }
            
            .phone-dock-item:hover {
                transform: scale(1.1);
            }
            
            .phone-home-bar {
                width: 120px;
                height: 4px;
                background: #666;
                border-radius: 2px;
                margin: 12px auto 0 auto;
            }
        </style>
    `;

    if (game.phoneDialog) {
        game.phoneDialog.close();
    }

    game.phoneDialog = new Dialog({
        title: "",
        content: menuContent,
        buttons: {},
        default: "close",
        close: () => {
            if (game.mygame && game.mygame.gameLoop) {
                clearTimeout(game.mygame.gameLoop);
                game.mygame.gameLoop = null;
            }
            game.phoneDialog = null;
        }
    }, {
        width: 350,
        height: 560,
        resizable: false
    });
    
    game.phoneDialog.render(true);
    
    // Вешаем обработчики напрямую на элементы
    setTimeout(() => {
        const dialogElement = $(game.phoneDialog.element);
        
        // Очищаем все старые обработчики
        dialogElement.off('click');
        
        // Вешаем обработчики напрямую на кнопки
        dialogElement.find('.phone-app[data-app="fantasy"]').click((e) => {
            e.preventDefault();
            startFantasyGame();
        });
        
        dialogElement.find('.phone-app[data-app="minesweeper"]').click((e) => {
            e.preventDefault();
            startMinesweeperGame();
        });
        dialogElement.find('.phone-dock-item[data-action="close"]').click((e) => {
            e.preventDefault();
            if (game.phoneDialog) {
                game.phoneDialog.close();
            }
        });
        dialogElement.find('.phone-app[data-app="snake"]').click((e) => {
            e.preventDefault();
            startSnakeGame();
        });
        dialogElement.find('.phone-app[data-app="seaBattle"]').click((e) => {
            e.preventDefault();
            startFantasySeaBattle();
        });
        dialogElement.find('.phone-app[data-app="goblinArena"]').click((e) => {
            e.preventDefault();
            startGoblinArena();
        });
    }, 100);
}

// ===== FANTASY QUEST GAME =====

async function loadHighScores() {
    try {
        // Используем user flags для хранения рекордов
        const saved = await game.user.getFlag("world", "fantasy-game-highscores");
        if (saved) return saved;
        
        // Если нет сохраненных данных, создаем начальные
        const initialScores = [
            { score: 500, level: 4, title: "Легенда", player: "Эльринд", date: "01.01.2024" },
            { score: 400, level: 3, title: "Магистр", player: "Гэндальф", date: "01.01.2024" },
            { score: 300, level: 2, title: "Воин", player: "Арагорн", date: "01.01.2024" },
            { score: 200, level: 1, title: "Новичок", player: "Фродо", date: "01.01.2024" },
            { score: 100, level: 1, title: "Новичок", player: "Сэм", date: "01.01.2024" }
        ];
        
        return initialScores;
        
    } catch (e) {
        console.log("Не удалось загрузить рекорды", e);
        return [
            { score: 0, level: 1, title: "Новичок", player: "Игрок", date: null },
            { score: 0, level: 1, title: "Новичок", player: "Игрок", date: null },
            { score: 0, level: 1, title: "Новичок", player: "Игрок", date: null },
            { score: 0, level: 1, title: "Новичок", player: "Игрок", date: null },
            { score: 0, level: 1, title: "Новичок", player: "Игрок", date: null }
        ];
    }
}

async function saveHighScores(scores) {
    try {
        // Сохраняем в user flags
        await game.user.setFlag("world", "fantasy-game-highscores", scores);
        console.log("Рекорды сохранены");
    } catch (e) {
        console.log("Не удалось сохранить рекорды", e);
    }
}

function getLevelName(level) {
    const names = {
        1: "Новичок Искатель",
        2: "Странник", 
        3: "Воин Света",
        4: "Магистр Меча",
        5: "Повелитель Драконов",
        6: "Хранитель Легенд",
        7: "Верховный Маг",
        8: "Король Артур",
        9: "Император",
        10: "Бессмертный Герой",
        11: "Властелин Судьбы",
        12: "Легенда Столетий"
    };
    return names[level] || `Верховный Властитель ${level}`;
}

async function updateHighScores(currentScore, currentLevel) {
    console.log("=== UPDATE HIGH SCORES ===");
    const scores = await loadHighScores();
    console.log("Current scores:", scores);
    console.log("New score:", currentScore, "Level:", currentLevel);
    
    const playerTitle = getLevelName(currentLevel);
    const playerName = game.user.name;

    // Проверяем условия для добавления в таблицу
    const hasFreeSlots = scores.length < 10;
    const worstScore = scores.length > 0 ? scores[scores.length - 1].score : 0;
    const isBetterThanWorst = currentScore > worstScore;
    
    console.log("Has free slots:", hasFreeSlots);
    console.log("Worst score in table:", worstScore);
    console.log("Is better than worst:", isBetterThanWorst);
    console.log("Should add to table:", hasFreeSlots || isBetterThanWorst);

    if (hasFreeSlots || isBetterThanWorst) {
        const newRecord = {
            score: currentScore,
            level: currentLevel,
            title: playerTitle,
            player: playerName,
            date: new Date().toLocaleDateString('ru-RU')
        };
    
        console.log("Adding new record:", newRecord);
        
        // Создаем новый массив чтобы не мутировать исходный
        const updatedScores = [...scores, newRecord];
        
        // Сортируем по очкам (по убыванию)
        updatedScores.sort((a, b) => b.score - a.score);
    
        // Оставляем только топ-10
        const topScores = updatedScores.slice(0, 10);
    
        console.log("Updated scores:", topScores);
        
        // Сохраняем глобально
        await saveHighScores(topScores);
    
        return topScores;
    }

    console.log("Score not worthy of top 10, keeping old scores");
    return scores;
}

async function getRankPosition(score) {
    const scores = await loadHighScores();
    for (let i = 0; i < scores.length; i++) {
        if (score >= scores[i].score) {
            return i + 1;
        }
    }
    return scores.length + 1;
}

function startFantasyGame() {
    if (game.phoneDialog) {
        game.phoneDialog.close();
    }

    game.mygame = {
        pos: 2,
        score: 0,
        level: 1,
        lives: 3,
        obstacles: [],
        bonuses: [],
        playing: true,
        speed: 800,
        lastMessage: null,
        gameLoop: null,
        shield: 0,
        highScores: [],
        showHighScores: false,
        dialog: null,
        levelColors: {
            1: { primary: "#4a6572", secondary: "#344955", accent: "#f9aa33", theme: "🌲 Лесной путь" },
            2: { primary: "#7e57c2", secondary: "#5e35b1", accent: "#b388ff", theme: "🔮 Магические руны" },
            3: { primary: "#00695c", secondary: "#004d40", accent: "#00bfa5", theme: "🐉 Драконьи земли" },
            4: { primary: "#c62828", secondary: "#b71c1c", accent: "#ff6e40", theme: "🔥 Вулканические пещеры" },
            5: { primary: "#283593", secondary: "#1a237e", accent: "#536dfe", theme: "❄️ Ледяные пустоши" },
            6: { primary: "#2e7d32", secondary: "#1b5e20", accent: "#00c853", theme: "🏹 Эльфийские тропы" },
            7: { primary: "#6a1b9a", secondary: "#4a148c", accent: "#e1bee7", theme: "👑 Королевский замок" },
            8: { primary: "#d84315", secondary: "#bf360c", accent: "#ffab91", theme: "⚔️ Поле битвы" }
        },
        obstacleTypes: [
            { symbol: "🧙", color: "#7e57c2", name: "Маги", effect: "Магические чары" },
            { symbol: "🐉", color: "#c62828", name: "Драконы", effect: "Огненное дыхание" },
            { symbol: "⚔️", color: "#546e7a", name: "Рыцари", effect: "Стальные клинки" },
            { symbol: "👹", color: "#5d4037", name: "Тролли", effect: "Мощные удары" },
            { symbol: "🕷️", color: "#212121", name: "Пауки", effect: "Ядовитые укусы" },
            { symbol: "👻", color: "#90a4ae", name: "Призраки", effect: "Мистическая аура" },
            { symbol: "🧟", color: "#795548", name: "Зомби", effect: "Неустанное преследование" },
            { symbol: "🦇", color: "#37474f", name: "Вампиры", effect: "Темная магия" }
        ],
        bonusTypes: [
            { symbol: "❤️", color: "#e91e63", type: "life", name: "Сердце", effect: "+1 жизнь" },
            { symbol: "🛡️", color: "#2196f3", type: "shield", name: "Щит", effect: "Защита от урона" },
            { symbol: "⭐", color: "#ffeb3b", type: "points", name: "Звезда", effect: "+10 очков" }
        ]
    };

    function handleFantasyKeyPress(event) {
        const s = game.mygame;
        if (!s.playing || s.lives <= 0) return;
        
        switch(event.key) {
            case 'ArrowLeft':
                s.pos = Math.max(0, s.pos - 1);
                showFantasyGame();
                break;
            case 'ArrowRight':
                s.pos = Math.min(width - 1, s.pos + 1);
                showFantasyGame();
                break;
            case ' ':
                // Пауза/продолжить по пробелу
                s.playing = !s.playing;
                if (s.playing) gameTick();
                showFantasyGame();
                break;
        }
    }

    const width = 5;
    const height = 5;
    const POINTS_PER_LEVEL = 25;
    const BASE_SPEED = 800;
    const MIN_SPEED = 300;
    const SPEED_DECREASE_PER_LEVEL = 50;

    function getCurrentLevel() {
        const s = game.mygame;
        return Math.floor(s.score / POINTS_PER_LEVEL) + 1;
    }

    function getObstacleType(level) {
        const types = game.mygame.obstacleTypes;
        const typeIndex = Math.min(Math.floor((level - 1) / 2), types.length - 1);
        return types[typeIndex];
    }

    function getLevelColor(level) {
        const colors = game.mygame.levelColors;
        return colors[Math.min(level, 8)] || colors[8];
    }

    function createObstacle(level) {
        const obstacleType = getObstacleType(level);
        
        let obstacleCount = 1;
        if (level >= 4 && Math.random() < 0.3) obstacleCount = 2;
        if (level >= 7 && Math.random() < 0.2) obstacleCount = 3;
        if (level >= 10 && Math.random() < 0.1) obstacleCount = 4;
        
        const obstacles = [];
        for (let i = 0; i < obstacleCount; i++) {
            obstacles.push({ 
                x: Math.floor(Math.random() * width), 
                y: 0,
                type: obstacleType
            });
        }
        return obstacles;
    }

    function createBonus(level) {
        const bonusChance = 0.15;
        if (Math.random() < bonusChance) {
            const bonusType = game.mygame.bonusTypes[Math.floor(Math.random() * game.mygame.bonusTypes.length)];
            return [{ 
                x: Math.floor(Math.random() * width), 
                y: 0,
                type: bonusType
            }];
        }
        return [];
    }

    function startGame() {
        if (game.mygame.gameLoop) {
            clearTimeout(game.mygame.gameLoop);
        }
        // Вешаем обработчик клавиатуры при старте игры
        document.addEventListener('keydown', handleFantasyKeyPress);
        gameTick();
    }

    async function gameTick() {
        const s = game.mygame;
        if (!s.playing) return;

        s.level = getCurrentLevel();
        const levelColors = getLevelColor(s.level);
        const obstacleType = getObstacleType(s.level);

        s.obstacles.forEach(o => o.y++);
        s.bonuses.forEach(b => b.y++);
        
        const spawnChance = 0.3 + (s.level * 0.03);
        if (Math.random() < spawnChance) {
            const newObstacles = createObstacle(s.level);
            s.obstacles.push(...newObstacles);
        }
        
        const newBonuses = createBonus(s.level);
        s.bonuses.push(...newBonuses);
        
        const hitObstacle = s.obstacles.some(o => o.y === height - 1 && o.x === s.pos);
        if (hitObstacle) {
            if (s.shield > 0) {
                s.shield--;
            } else {
                s.lives--;
            }
            
            if (s.lives <= 0) {
                s.playing = false;
                s.highScores = await updateHighScores(s.score, s.level);
                showFantasyGame();
                return;
            }
            s.obstacles = s.obstacles.filter(o => !(o.y === height - 1 && o.x === s.pos));
        }
        
        const collectedBonus = s.bonuses.find(b => b.y === height - 1 && b.x === s.pos);
        if (collectedBonus) {
            applyBonus(collectedBonus.type);
            s.bonuses = s.bonuses.filter(b => !(b.y === height - 1 && b.x === s.pos));
        }
        
        s.obstacles = s.obstacles.filter(o => o.y < height);
        s.bonuses = s.bonuses.filter(b => b.y < height);
        
        s.score++;
        s.speed = Math.max(MIN_SPEED, BASE_SPEED - (s.level - 1) * SPEED_DECREASE_PER_LEVEL);
        
        showFantasyGame();
        
        if (s.playing) {
            s.gameLoop = setTimeout(gameTick, s.speed);
        }
    }

    function applyBonus(bonusType) {
        const s = game.mygame;
        switch(bonusType.type) {
            case 'life': s.lives = Math.min(5, s.lives + 1); break;
            case 'shield': s.shield = Math.min(3, s.shield + 1); break;
            case 'points': s.score += 10; break;
        }
    }

    function createFantasyProgressBar(progress, color) {
        const barLength = 10;
        let bar = "";
        
        for (let i = 0; i < barLength; i++) {
            if (i < (progress * barLength)) {
                bar += `<span style="color: ${color}">▰</span>`;
            } else {
                bar += `<span style="color: #5d4037">▱</span>`;
            }
        }
        
        return bar;
    }

    function createHighScoresTable(scores, currentScore) {
        let table = `
        <div style="
            background: linear-gradient(145deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6));
            padding: 12px;
            border-radius: 8px;
            border: 2px solid #8d6e63;
            margin: 10px 0;
        ">
            <div style="text-align: center; margin-bottom: 10px; font-weight: bold; color: #ffd54f;">
                🏆 ГЛОБАЛЬНЫЙ РЕЙТИНГ 🏆
            </div>
        `;
        
        scores.forEach((record, index) => {
            const isCurrent = record.score === currentScore && record.player === game.user.name;
            const rankColors = ["#ffd700", "#c0c0c0", "#cd7f32", "#4a6572", "#4a6572", "#4a6572", "#4a6572", "#4a6572", "#4a6572", "#4a6572"];
            const rankIcons = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
            
            table += `
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 6px 8px;
                    margin: 4px 0;
                    background: ${isCurrent ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255,255,255,0.1)'};
                    border-radius: 5px;
                    border-left: 3px solid ${rankColors[index]};
                    ${isCurrent ? 'border: 2px solid #ffd700;' : ''}
                ">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-weight: bold; color: ${rankColors[index]}">${rankIcons[index]}</span>
                        <div>
                            <div style="color: #fff8e1; font-size: 12px; font-weight: bold;">${record.player}</div>
                            <div style="color: #d7ccc8; font-size: 10px;">${record.title}</div>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="color: #ffd54f; font-weight: bold; font-size: 12px;">${record.score}</div>
                        <div style="color: #d7ccc8; font-size: 10px;">ур. ${record.level}</div>
                        ${record.date ? `<div style="color: #bcaaa4; font-size: 9px;">${record.date}</div>` : ''}
                    </div>
                </div>
            `;
        });
        
        table += `</div>`;
        return table;
    }

    async function showFantasyGame() {
        const s = game.mygame;
        const levelColors = getLevelColor(s.level);
        const obstacleType = getObstacleType(s.level);
        const levelName = getLevelName(s.level);
        
        if (s.highScores.length === 0 && !s.playing) {
            s.highScores = await loadHighScores();
        }
        
        let field = "";
        for (let y = 0; y < height; y++) {
            field += "│";
            for (let x = 0; x < width; x++) {
                let cell = "⬜";
                
                for (let b of s.bonuses) {
                    if (b.y === y && b.x === x) {
                        cell = b.type.symbol;
                        break;
                    }
                }
                
                for (let o of s.obstacles) {
                    if (o.y === y && o.x === x) {
                        cell = o.type.symbol;
                        break;
                    }
                }
                
                if (y === height - 1 && x === s.pos) {
                    cell = s.shield > 0 ? "✨" : "🧙";
                }
                
                field += cell;
            }
            field += "│\n";
        }
        
        const topBorder = "┌" + "─".repeat(width) + "┐\n";
        const bottomBorder = "└" + "─".repeat(width) + "┘";
        field = topBorder + field + bottomBorder;
        
        const progressToNextLevel = (s.score % POINTS_PER_LEVEL) / POINTS_PER_LEVEL;
        const progressBar = createFantasyProgressBar(progressToNextLevel, levelColors.accent);
        const pointsToNextLevel = POINTS_PER_LEVEL - (s.score % POINTS_PER_LEVEL);
        
        const info = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px; color: #fff8e1;">
                <span>🏰 ${levelName}</span>
                <span>💎 ${s.score}</span>
                <span>❤️ ${"♥".repeat(s.lives)}${s.shield > 0 ? ` 🛡️${s.shield}` : ''}</span>
            </div>
            <div style="text-align: center; margin: 5px 0; font-size: 11px; color: ${levelColors.accent}">
                ${progressBar}
            </div>
            <div style="font-size: 10px; color: #d7ccc8; text-align: center;">
                До след. уровня: ${pointsToNextLevel} очков
            </div>
        `;
        
        let controls = "";
        if (s.lives <= 0) {
            const rankPosition = await getRankPosition(s.score);
            controls = `
                <div style="text-align: center; margin: 15px 0 5px 0;">
                    <button type="button" data-action="restart" style="
                        background: linear-gradient(145deg, #388e3c, #2e7d32);
                        border: 2px solid #1b5e20;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                        box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
                    ">🔄 Играть снова</button>
                    
                    <button type="button" data-action="toggleScores" style="
                        background: linear-gradient(145deg, #7e57c2, #5e35b1);
                        border: 2px solid #4527a0;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                        box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
                    ">${s.showHighScores ? '🎮 Скрыть рекорды' : '🏆 Показать рекорды'}</button>

                    <button type="button" data-action="backToMenu" style="
                        background: linear-gradient(145deg, #666, #555);
                        border: 2px solid #444;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                        box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
                    ">📱 Меню</button>
                </div>
                <div style="text-align: center; margin: 10px 0; color: #ffd54f; font-size: 12px;">
                    Ваше место в рейтинге: ${rankPosition}
                </div>
            `;
        } else {
            controls = `
                <div style="text-align: center; margin: 15px 0 5px 0;">
                    <button type="button" data-action="pause" style="
                        background: linear-gradient(145deg, ${s.playing ? '#8d6e63' : '#4caf50'}, ${s.playing ? '#6d4c41' : '#388e3c'});
                        border: 2px solid ${s.playing ? '#5d4037' : '#1b5e20'};
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                        box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
                        font-size: 13px;
                    ">${s.playing ? '⏸️ Пауза' : '▶️ Продолжить'}</button>

                    <button type="button" data-action="backToMenu" style="
                        background: linear-gradient(145deg, #666, #555);
                        border: 2px solid #444;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                        box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
                        font-size: 13px;
                    ">📱 Меню</button>
                </div>
            `;
        }
        
        const gameOver = (s.lives <= 0) ? `
            <div style="
                background: linear-gradient(145deg, #5d4037, #4e342e);
                color: #ffab91; 
                padding: 12px; 
                text-align: center; 
                margin: 15px 0; 
                border-radius: 8px;
                border: 2px solid #8d6e63;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                font-family: 'Times New Roman', serif;
            ">
                <strong style="font-size: 16px;">💀 Квест провален!</strong><br>
                <span style="font-size: 14px;">Достигнут уровень: ${s.level} | Слава: ${s.score}</span>
            </div>
        ` : "";

        const pauseMessage = (!s.playing && s.lives > 0) ? `
            <div style="
                background: linear-gradient(145deg, #ff9800, #f57c00);
                color: white; 
                padding: 10px; 
                text-align: center; 
                margin: 10px 0; 
                border-radius: 8px;
                border: 2px solid #ffb74d;
                font-family: 'Times New Roman', serif;
            ">
                <strong>⏸️ ИГРА НА ПАУЗЕ</strong><br>
                <small>Нажмите "Продолжить" чтобы возобновить</small>
            </div>
        ` : "";
        
        const levelUpMessage = (s.score % POINTS_PER_LEVEL === 1 && s.score > 1) ? `
            <div style="
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(145deg, ${levelColors.accent}, ${levelColors.primary});
                color: white; 
                padding: 8px 16px;
                text-align: center; 
                border-radius: 8px;
                border: 2px solid #ffd54f;
                font-family: 'Times New Roman', serif;
                animation: glow 2s infinite alternate;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.6);
                min-width: 200px;
                font-size: 12px;
            ">
                <strong>🎉 ${levelName}</strong>
            </div>
        ` : "";
        
        const highScoresTable = (s.showHighScores && s.lives <= 0) ? 
            createHighScoresTable(s.highScores, s.score) : "";

        const content = `
            <div style="
                background: linear-gradient(145deg, ${levelColors.primary}, ${levelColors.secondary});
                color: #fff8e1; 
                padding: 20px; 
                border-radius: 15px; 
                border: 3px solid #8d6e63;
                font-family: 'Times New Roman', serif;
                max-width: 350px;
                box-shadow: 0 8px 16px rgba(0,0,0,0.4);
                position: relative;
                overflow: hidden;
            ">
                ${levelUpMessage}
                <div style="position: absolute; top: 5px; left: 5px; font-size: 12px; opacity: 0.6;">⚔️</div>
                <div style="position: absolute; top: 5px; right: 5px; font-size: 12px; opacity: 0.6;">🛡️</div>
                <div style="position: absolute; bottom: 5px; left: 5px; font-size: 12px; opacity: 0.6;">🏹</div>
                <div style="position: absolute; bottom: 5px; right: 5px; font-size: 12px; opacity: 0.6;">🔮</div>
                
                <div style="
                    text-align: center; 
                    background: linear-gradient(145deg, ${levelColors.secondary}, ${levelColors.primary});
                    padding: 12px; 
                    margin: -20px -20px 20px -20px; 
                    border-radius: 12px 12px 0 0;
                    border-bottom: 3px solid #8d6e63;
                    font-family: 'Times New Roman', serif;
                ">
                    <strong style="font-size: 18px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                        🏰 СКАЗАНИЕ О ДОБЛЕСТНОМ ГЕРОЕ
                    </strong>
                </div>
                ${pauseMessage}
                ${gameOver}
                ${highScoresTable}
                
                <div style="
                    background: linear-gradient(145deg, rgba(141, 110, 99, 0.3), rgba(93, 64, 55, 0.5));
                    padding: 12px; 
                    text-align: center; 
                    margin: 15px 0; 
                    border-radius: 10px;
                    border: 2px solid #8d6e63;
                    font-weight: bold;
                    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
                ">
                    ${info}
                </div>
                
                <div style="
                    background: linear-gradient(145deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6));
                    padding: 15px; 
                    border-radius: 10px; 
                    text-align: center; 
                    margin: 15px 0;
                    border: 2px solid #8d6e63;
                    box-shadow: inset 0 0 15px rgba(0,0,0,0.5);
                    position: relative;
                ">
                    <pre style="
                        margin: 0;
                        font-family: 'Courier New', monospace;
                        font-size: 18px;
                        line-height: 1.4;
                        color: #fff8e1;
                        text-shadow: 0 0 5px ${levelColors.accent};
                        letter-spacing: 1px;
                    ">${field}</pre>
                </div>
                
                ${controls}
                
                <div style="
                    text-align: center; 
                    margin-top: 15px; 
                    font-size: 10px; 
                    color: #d7ccc8;
                    border-top: 1px solid #8d6e63;
                    padding-top: 10px;
                    font-style: italic;
                ">
                    Бонусы: ❤️+жизнь 🛡️+щит ⭐+10 очков<br>
                    Уровень ${s.level}: ${obstacleType.effect} · Скорость: ${((BASE_SPEED - s.speed) / 5)}%<br>
                    ⬅️➡️ - движение · Пробел - пауза
                </div>
            </div>
            
            <style>
                @keyframes glow {
                    from { 
                        box-shadow: 0 0 5px ${levelColors.accent}, 0 0 10px ${levelColors.accent};
                    }
                    to { 
                        box-shadow: 0 0 15px ${levelColors.accent}, 0 0 25px ${levelColors.accent};
                    }
                }
                
                button:hover {
                    transform: translateY(-1px) scale(1.05);
                    box-shadow: 2px 2px 6px rgba(0,0,0,0.4) !important;
                }
            </style>
        `;

        if (!s.dialog) {
            s.dialog = new Dialog({
                title: "",
                content: content,
                buttons: {},
                default: "close",
                close: () => {
                    if (s.gameLoop) {
                        clearTimeout(s.gameLoop);
                        s.gameLoop = null;
                    }
                    s.playing = false;
                    s.dialog = null;
                    // Убираем обработчик клавиатуры при закрытии
                    document.removeEventListener('keydown', handleFantasyKeyPress);
                }
            }, {
                width: 400,
                height: 650,
                resizable: false
            });
            
            s.dialog.render(true);
            setupFantasyHandlers();
        } else {
            const html = $(s.dialog.element).find('.dialog-content');
            html.html(content);
            setupFantasyHandlers();
        }
    }

    function setupFantasyHandlers() {
        const s = game.mygame;
        if (!s.dialog) return;
        
        const dialogElement = $(s.dialog.element);
        
        // Очищаем все старые обработчики
        dialogElement.off('click');
        
        // Вешаем обработчики только на кнопки меню (управление теперь с клавиатуры)
        dialogElement.find('button[data-action="pause"]').click(() => {
            s.playing = !s.playing;
            if (s.playing) gameTick();
            else if (s.gameLoop) clearTimeout(s.gameLoop);
            showFantasyGame();
        });
        
        dialogElement.find('button[data-action="restart"]').click(() => {
            if (s.gameLoop) clearTimeout(s.gameLoop);
            s.pos = 2; s.score = 0; s.level = 1; s.lives = 3;
            s.obstacles = []; s.bonuses = []; s.playing = true;
            s.speed = 800; s.shield = 0; s.showHighScores = false;
            // Перевешиваем обработчик клавиатуры при рестарте
            document.addEventListener('keydown', handleFantasyKeyPress);
            gameTick();
        });
        
        dialogElement.find('button[data-action="toggleScores"]').click(() => {
            s.showHighScores = !s.showHighScores;
            showFantasyGame();
        });
        
        dialogElement.find('button[data-action="backToMenu"]').click(() => {
            if (s.gameLoop) {
                clearTimeout(s.gameLoop);
                s.gameLoop = null;
            }
            // Убираем обработчик клавиатуры
            document.removeEventListener('keydown', handleFantasyKeyPress);
            if (s.dialog) {
                s.dialog.close();
            }
            showPhoneMenu();
        });
    }

    startGame();
}

// ===== MINESWEEPER GAME =====

function startMinesweeperGame() {
    window.revealCell = null;
    window.toggleFlag = null;
    
    if (game.phoneDialog) {
        game.phoneDialog.close();
    }

    const gameState = {
        width: 8,
        height: 8,
        mines: 10,
        grid: [],
        revealed: [],
        flags: [],
        gameOver: false,
        gameWon: false,
        startTime: Date.now()
    };

    function initializeGame() {
        gameState.grid = [];
        gameState.revealed = [];
        gameState.flags = [];
        gameState.gameOver = false;
        gameState.gameWon = false;
        gameState.startTime = Date.now();
        
        for (let y = 0; y < gameState.height; y++) {
            gameState.grid[y] = [];
            gameState.revealed[y] = [];
            gameState.flags[y] = [];
            for (let x = 0; x < gameState.width; x++) {
                gameState.grid[y][x] = 0;
                gameState.revealed[y][x] = false;
                gameState.flags[y][x] = false;
            }
        }
        
        let minesPlaced = 0;
        while (minesPlaced < gameState.mines) {
            const x = Math.floor(Math.random() * gameState.width);
            const y = Math.floor(Math.random() * gameState.height);
            
            if (gameState.grid[y][x] !== '💣') {
                gameState.grid[y][x] = '💣';
                minesPlaced++;
                
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        const nx = x + dx;
                        const ny = y + dy;
                        if (nx >= 0 && nx < gameState.width && ny >= 0 && ny < gameState.height) {
                            if (gameState.grid[ny][nx] !== '💣') {
                                gameState.grid[ny][nx]++;
                            }
                        }
                    }
                }
            }
        }
        updateGame();
    }

    function revealCell(x, y) {
        if (gameState.gameOver || gameState.gameWon) return;
        if (x < 0 || x >= gameState.width || y < 0 || y >= gameState.height) return;
        if (gameState.revealed[y][x] || gameState.flags[y][x]) return;
        
        gameState.revealed[y][x] = true;
        
        if (gameState.grid[y][x] === '💣') {
            gameState.gameOver = true;
            revealAllMines();
            updateGame(); // ДОБАВЬ ЭТУ СТРОКУ
            return;
        }
        
        if (gameState.grid[y][x] === 0) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    revealCell(x + dx, y + dy);
                }
            }
        }
        
        checkWin();
        updateGame(); // ДОБАВЬ ЭТУ СТРОКУ
    }
 function toggleFlag(x, y) {
        if (gameState.gameOver || gameState.gameWon) return;
        if (gameState.revealed[y][x]) return;
        
        gameState.flags[y][x] = !gameState.flags[y][x];
        checkWin();
        updateGame(); // ДОБАВЬ ЭТУ СТРОКУ
    }

    function checkWin() {
        let unrevealedSafeCells = 0;
        
        for (let y = 0; y < gameState.height; y++) {
            for (let x = 0; x < gameState.width; x++) {
                if (!gameState.revealed[y][x] && gameState.grid[y][x] !== '💣') {
                    unrevealedSafeCells++;
                }
            }
        }
        
        if (unrevealedSafeCells === 0) {
            gameState.gameWon = true;
        }
    }

    function revealAllMines() {
        for (let y = 0; y < gameState.height; y++) {
            for (let x = 0; x < gameState.width; x++) {
                if (gameState.grid[y][x] === '💣') {
                    gameState.revealed[y][x] = true;
                }
            }
        }
    }

    function getNumberColor(number) {
        const colors = {
            1: '#2196F3',
            2: '#4CAF50',
            3: '#f44336',
            4: '#9C27B0',
            5: '#FF9800',
            6: '#00BCD4',
            7: '#795548',
            8: '#607D8B'
        };
        return colors[number] || '#000';
    }

           function renderGame() {
        let fieldHTML = '';
        
        for (let y = 0; y < gameState.height; y++) {
            fieldHTML += '<div style="display: flex; justify-content: center;">';
            for (let x = 0; x < gameState.width; x++) {
                let cellContent = '';
                let cellStyle = '';
                let dataAction = '';
                let dataX = '';
                let dataY = '';
                
                if (gameState.revealed[y][x]) {
                    if (gameState.grid[y][x] === '💣') {
                        cellContent = '💣';
                        cellStyle = 'background: #ff4444; color: black;';
                    } else if (gameState.grid[y][x] === 0) {
                        cellContent = '';
                        cellStyle = 'background: #e0e0e0;';
                    } else {
                        cellContent = gameState.grid[y][x];
                        cellStyle = `background: #e0e0e0; color: ${getNumberColor(gameState.grid[y][x])}; font-weight: bold;`;
                    }
                } else {
                    if (gameState.flags[y][x]) {
                        cellContent = '🚩';
                        cellStyle = 'background: #ff9800;';
                        dataAction = 'unflag';
                        dataX = x;
                        dataY = y;
                    } else {
                        cellContent = '⬜';
                        cellStyle = 'background: #a0a0a0; cursor: pointer;';
                        dataAction = 'reveal';
                        dataX = x;
                        dataY = y;
                    }
                }
                
                // Убираем все onclick, используем только data-атрибуты
                fieldHTML += `
                    <button data-action="${dataAction}" data-x="${dataX}" data-y="${dataY}" style="
                        width: 30px; 
                        height: 30px; 
                        border: 1px solid #666; 
                        margin: 1px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        font-size: 14px;
                        ${cellStyle}
                    ">${cellContent}</button>
                `;
            }
            fieldHTML += '</div>';
        }
        
        return fieldHTML;
    }

    function getGameStats() {
        const elapsedTime = Math.floor((Date.now() - gameState.startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;
        
        let flagsPlaced = 0;
        for (let y = 0; y < gameState.height; y++) {
            for (let x = 0; x < gameState.width; x++) {
                if (gameState.flags[y][x]) flagsPlaced++;
            }
        }
        
        return {
            time: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
            flags: `${flagsPlaced}/${gameState.mines}`,
            mines: gameState.mines
        };
    }

      function giveHint() {
        if (gameState.gameOver || gameState.gameWon) return false;
        
        for (let y = 0; y < gameState.height; y++) {
            for (let x = 0; x < gameState.width; x++) {
                if (!gameState.revealed[y][x] && !gameState.flags[y][x] && gameState.grid[y][x] !== '💣') {
                    revealCell(x, y);
                    updateGame(); // ДОБАВЬ ЭТУ СТРОКУ
                    return true;
                }
            }
        }
        return false;
    }
        function setupMinesweeperHandlers() {
        console.log("Setting up minesweeper handlers");
        
        if (!game.minesweeperDialog) {
            console.log("No dialog found");
            return;
        }

        // Даем время диалогу отрендериться
        setTimeout(() => {
            const dialogElement = $(game.minesweeperDialog.element);
            console.log("Dialog element found");
            
            // Очищаем ВСЕ обработчики
            dialogElement.off('click.minesweeper');
            dialogElement.off('contextmenu.minesweeper');
            
            // Вешаем обработчики на ВСЕ кнопки в диалоге
            dialogElement.on('click.minesweeper', 'button', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const button = $(this);
                const action = button.attr('data-action');
                const x = parseInt(button.attr('data-x'));
                const y = parseInt(button.attr('data-y'));
                
                console.log("Button clicked - Action:", action, "X:", x, "Y:", y);
                
                switch(action) {
                    case 'reveal':
                        revealCell(x, y);
                        break;
                    case 'unflag':
                        toggleFlag(x, y);
                        break;
                    case 'newGame':
                        initializeGame();
                        break;
                    case 'hint':
                        if (!gameState.gameOver && !gameState.gameWon) {
                            giveHint();
                        }
                        break;
                    case 'backToMenu':
                        if (game.minesweeperDialog) {
                            game.minesweeperDialog.close();
                        }
                        showPhoneMenu();
                        break;
                    default:
                        console.log("No action or unknown action:", action);
                }
            });

            // Правый клик для установки флагов
            dialogElement.on('contextmenu.minesweeper', 'button[data-action="reveal"]', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const button = $(this);
                const x = parseInt(button.attr('data-x'));
                const y = parseInt(button.attr('data-y'));
                console.log("Right click - X:", x, "Y:", y);
                toggleFlag(x, y);
            });

            console.log("Minesweeper handlers setup complete");
        }, 100);
    }
    function updateGame() {
        //setupMinesweeperHandlers();
        const stats = getGameStats();
        
        let statusMessage = '';
        if (gameState.gameOver) {
            statusMessage = `
                <div style="
                    background: linear-gradient(145deg, #d32f2f, #c62828);
                    color: white; 
                    padding: 12px; 
                    text-align: center; 
                    margin: 15px 0; 
                    border-radius: 8px;
                    border: 2px solid #b71c1c;
                    font-family: 'Times New Roman', serif;
                ">
                    <strong>💥 Игра окончена!</strong><br>
                    <small>Наступил на мину</small>
                </div>
            `;
        } else if (gameState.gameWon) {
            statusMessage = `
                <div style="
                    background: linear-gradient(145deg, #4CAF50, #388e3c);
                    color: white; 
                    padding: 12px; 
                    text-align: center; 
                    margin: 15px 0; 
                    border-radius: 8px;
                    border: 2px solid #1b5e20;
                    font-family: 'Times New Roman', serif;
                ">
                    <strong>🎉 Победа!</strong><br>
                    <small>Все мины обезврежены!</small>
                </div>
            `;
        }
        
        const content = `
            <div style="
                background: linear-gradient(145deg, #1a1a2e, #16213e);
                color: #fff8e1; 
                padding: 20px; 
                border-radius: 15px; 
                border: 3px solid #2196F3;
                font-family: 'Times New Roman', serif;
                max-width: 350px;
                box-shadow: 0 8px 16px rgba(0,0,0,0.4);
            ">
                <div style="
                    text-align: center; 
                    background: linear-gradient(145deg, #0f3460, #1a1a2e);
                    padding: 12px; 
                    margin: -20px -20px 20px -20px; 
                    border-radius: 12px 12px 0 0;
                    border-bottom: 3px solid #2196F3;
                ">
                    <strong style="font-size: 18px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                        💣 САПЁР
                    </strong>
                </div>
                
                ${statusMessage}
                
                <div style="
                    background: rgba(255,255,255,0.1);
                    padding: 12px; 
                    text-align: center; 
                    margin: 15px 0; 
                    border-radius: 10px;
                    border: 2px solid #2196F3;
                ">
                    <div style="display: flex; justify-content: space-around; color: #ccc; font-size: 14px;">
                        <div>⏱️ <span>${stats.time}</span></div>
                        <div>🚩 <span>${stats.flags}</span></div>
                        <div>💣 ${stats.mines}</div>
                    </div>
                </div>
                
                <div style="
                    background: rgba(0,0,0,0.4);
                    padding: 15px; 
                    border-radius: 10px; 
                    text-align: center; 
                    margin: 15px 0;
                    border: 2px solid #2196F3;
                ">
                    ${renderGame()}
                </div>
                
                <div style="text-align: center; margin: 15px 0 5px 0;">
                    <button data-action="newGame" style="
                        background: linear-gradient(145deg, #4CAF50, #388e3c);
                        border: 2px solid #1b5e20;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                    ">🔄 Новая игра</button>
                    
                    <button data-action="hint" style="
                        background: linear-gradient(145deg, #FF9800, #F57C00);
                        border: 2px solid #E65100;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                        ${gameState.gameOver || gameState.gameWon ? 'opacity: 0.5; cursor: not-allowed;' : ''}
                    ">💡 Подсказка</button>

                    <button data-action="backToMenu" style="
                        background: linear-gradient(145deg, #666, #555);
                        border: 2px solid #444;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                    ">📱 Меню</button>
                </div>
                
                <div style="
                    text-align: center; 
                    margin-top: 15px; 
                    font-size: 10px; 
                    color: #90caf9;
                    border-top: 1px solid #2196F3;
                    padding-top: 10px;
                ">
                    ЛКМ - открыть клетку • ПКМ - поставить флажок
                </div>
            </div>
            
            <style>
                button:hover {
                    transform: translateY(-1px) scale(1.05);
                    box-shadow: 2px 2px 6px rgba(0,0,0,0.4) !important;
                }
            </style>
        `;

        if (!game.minesweeperDialog) {
            game.minesweeperDialog = new Dialog({
                title: "",
                content: content,
                buttons: {},
                default: "close",
                close: () => {
                    game.minesweeperDialog = null;
                }
            }, {
                width: 400,
                height: 650,
                resizable: false
            });
            
            game.minesweeperDialog.render(true);
            setupMinesweeperHandlers();
        } else {
            const html = $(game.minesweeperDialog.element).find('.dialog-content');
            html.html(content);
            setupMinesweeperHandlers();
        }
        setTimeout(setupMinesweeperHandlers, 50);
    }

    initializeGame();
    updateGame();
}
// ===== FANTASY SNAKE GAME =====

function startSnakeGame() {
    if (game.phoneDialog) {
        game.phoneDialog.close();
    }

    const gameState = {
        width: 12,
        height: 12,
        snake: [{x: 6, y: 6}],
        food: {x: 3, y: 3},
        direction: 'right',
        nextDirection: 'right',
        score: 0,
        speed: 200,
        gameOver: false,
        gameStarted: false
    };

    function initializeGame() {
        gameState.snake = [{x: 6, y: 6}];
        gameState.food = generateFood();
        gameState.direction = 'right';
        gameState.nextDirection = 'right';
        gameState.score = 0;
        gameState.speed = 200;
        gameState.gameOver = false;
        gameState.gameStarted = false;
    }

    function generateFood() {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * gameState.width),
                y: Math.floor(Math.random() * gameState.height)
            };
        } while (gameState.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        
        return newFood;
    }

    function updateGame() {
        if (!gameState.gameStarted || gameState.gameOver) return;

        // Обновляем направление
        gameState.direction = gameState.nextDirection;

        // Двигаем голову змейки
        const head = {...gameState.snake[0]};
        
        switch(gameState.direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }

        // Проверка столкновения со стенами
        if (head.x < 0 || head.x >= gameState.width || head.y < 0 || head.y >= gameState.height) {
            gameState.gameOver = true;
            updateDisplay();
            return;
        }

        // Проверка столкновения с собой
        if (gameState.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            gameState.gameOver = true;
            updateDisplay();
            return;
        }

        // Добавляем новую голову
        gameState.snake.unshift(head);

        // Проверка съедания еды
        if (head.x === gameState.food.x && head.y === gameState.food.y) {
            gameState.score += 10;
            gameState.food = generateFood();
            // Увеличиваем скорость каждые 50 очков
            if (gameState.score % 50 === 0) {
                gameState.speed = Math.max(100, gameState.speed - 20);
            }
        } else {
            // Удаляем хвост если не съели еду
            gameState.snake.pop();
        }

        updateDisplay();

        // Продолжаем игровой цикл
        if (!gameState.gameOver) {
            setTimeout(updateGame, gameState.speed);
        }
    }

    function handleKeyPress(event) {
        if (!gameState.gameStarted) {
            gameState.gameStarted = true;
            updateGame();
        }

        switch(event.key) {
            case 'ArrowUp':
                if (gameState.direction !== 'down') gameState.nextDirection = 'up';
                break;
            case 'ArrowDown':
                if (gameState.direction !== 'up') gameState.nextDirection = 'down';
                break;
            case 'ArrowLeft':
                if (gameState.direction !== 'right') gameState.nextDirection = 'left';
                break;
            case 'ArrowRight':
                if (gameState.direction !== 'left') gameState.nextDirection = 'right';
                break;
        }
    }

    function renderGame() {
        let fieldHTML = '';
        
        for (let y = 0; y < gameState.height; y++) {
            fieldHTML += '<div style="display: flex; justify-content: center;">';
            for (let x = 0; x < gameState.width; x++) {
                let cellContent = '⬜';
                let cellStyle = 'background: #2a2a2a;';
                
                // Змейка
                const snakeIndex = gameState.snake.findIndex(segment => segment.x === x && segment.y === y);
                if (snakeIndex === 0) {
                    cellContent = '🐉'; // Голова дракона
                    cellStyle = 'background: #4CAF50;';
                } else if (snakeIndex > 0) {
                    cellContent = '🟢'; // Тело змейки
                    cellStyle = 'background: #388E3C;';
                }
                // Еда
                else if (x === gameState.food.x && y === gameState.food.y) {
                    cellContent = '🍎'; // Волшебное яблоко
                    cellStyle = 'background: #F44336;';
                }
                
                fieldHTML += `
                    <div style="
                        width: 20px; 
                        height: 20px; 
                        border: 1px solid #444; 
                        margin: 1px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        font-size: 12px;
                        ${cellStyle}
                    ">${cellContent}</div>
                `;
            }
            fieldHTML += '</div>';
        }
        
        return fieldHTML;
    }

    function updateDisplay() {
        const statusMessage = gameState.gameOver ? `
            <div style="
                background: linear-gradient(145deg, #d32f2f, #c62828);
                color: white; 
                padding: 12px; 
                text-align: center; 
                margin: 15px 0; 
                border-radius: 8px;
                border: 2px solid #b71c1c;
                font-family: 'Times New Roman', serif;
            ">
                <strong>💀 Дракон повержен!</strong><br>
                <small>Собрано сокровищ: ${gameState.score}</small>
            </div>
        ` : '';

        const content = `
            <div style="
                background: linear-gradient(145deg, #1b5e20, #2e7d32);
                color: #fff8e1; 
                padding: 20px; 
                border-radius: 15px; 
                border: 3px solid #4CAF50;
                font-family: 'Times New Roman', serif;
                max-width: 320px;
                box-shadow: 0 8px 16px rgba(0,0,0,0.4);
            ">
                <div style="
                    text-align: center; 
                    background: linear-gradient(145deg, #388e3c, #1b5e20);
                    padding: 12px; 
                    margin: -20px -20px 20px -20px; 
                    border-radius: 12px 12px 0 0;
                    border-bottom: 3px solid #4CAF50;
                ">
                    <strong style="font-size: 18px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                        🐉 ДРАКОНЬЯ ЗМЕЙКА
                    </strong>
                </div>
                
                ${statusMessage}
                
                <div style="
                    background: rgba(255,255,255,0.1);
                    padding: 12px; 
                    text-align: center; 
                    margin: 15px 0; 
                    border-radius: 10px;
                    border: 2px solid #4CAF50;
                ">
                    <div style="display: flex; justify-content: space-around; color: #ccc; font-size: 14px;">
                        <div>🏆 <span>${gameState.score}</span></div>
                        <div>⚡ <span>${Math.max(0, 200 - gameState.speed)}</span></div>
                        <div>📏 <span>${gameState.snake.length}</span></div>
                    </div>
                </div>
                
                <div style="
                    background: rgba(0,0,0,0.4);
                    padding: 10px; 
                    border-radius: 10px; 
                    text-align: center; 
                    margin: 15px 0;
                    border: 2px solid #4CAF50;
                ">
                    ${renderGame()}
                </div>
                
                <div style="text-align: center; margin: 15px 0 5px 0;">
                    <button data-action="newGame" style="
                        background: linear-gradient(145deg, #2196F3, #1976D2);
                        border: 2px solid #0D47A1;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                    ">🔄 Новая игра</button>

                    <button data-action="backToMenu" style="
                        background: linear-gradient(145deg, #666, #555);
                        border: 2px solid #444;
                        border-radius: 8px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 13px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.2s;
                        font-family: 'Times New Roman', serif;
                    ">📱 Меню</button>
                </div>
                
                <div style="
                    text-align: center; 
                    margin-top: 15px; 
                    font-size: 10px; 
                    color: #a5d6a7;
                    border-top: 1px solid #4CAF50;
                    padding-top: 10px;
                ">
                    ${!gameState.gameStarted ? '🎮 Нажмите стрелку для начала!' : '⬆️⬇️⬅️➡️ - управление драконом'}
                </div>
            </div>
            
            <style>
                button:hover {
                    transform: translateY(-1px) scale(1.05);
                    box-shadow: 2px 2px 6px rgba(0,0,0,0.4) !important;
                }
            </style>
        `;

        if (!game.snakeDialog) {
            game.snakeDialog = new Dialog({
                title: "",
                content: content,
                buttons: {},
                default: "close",
                close: () => {
                    // Убираем обработчик клавиш при закрытии
                    document.removeEventListener('keydown', handleKeyPress);
                    game.snakeDialog = null;
                }
            }, {
                width: 380,
                height: 600,
                resizable: false
            });
            
            game.snakeDialog.render(true);
            
            
            // Вешаем обработчик клавиш
            document.addEventListener('keydown', handleKeyPress);
        } else {
            const html = $(game.snakeDialog.element).find('.dialog-content');
            html.html(content);
            setupSnakeHandlers();
        }
        setTimeout(setupSnakeHandlers, 50);
    }

    function setupSnakeHandlers() {
    if (!game.snakeDialog) return;
    
    const dialogElement = $(game.snakeDialog.element);
    
    // Очищаем все старые обработчики
    dialogElement.off('click.snake');
    
    // Вешаем обработчики с пространством имен
    dialogElement.on('click.snake', 'button[data-action="newGame"]', function(e) {
        e.preventDefault();
        e.stopPropagation();
        initializeGame();
        updateDisplay();
    });
    
    dialogElement.on('click.snake', 'button[data-action="backToMenu"]', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.removeEventListener('keydown', handleKeyPress);
        if (game.snakeDialog) {
            game.snakeDialog.close();
        }
        showPhoneMenu();
    });
}

    initializeGame();
    updateDisplay();
}
// ===== FANTASY SEA BATTLE GAME =====

function startFantasySeaBattle() {
     if (game.seaBattleDialog) {
        game.seaBattleDialog.close();
        game.seaBattleDialog = null;
    }
    
    if (game.phoneDialog) {
        game.phoneDialog.close();
    }

    const gameState = {
        playerField: [],
        enemyField: [],
        playerShips: [],
        enemyShips: [],
        gamePhase: 'placement', // placement, battle, gameOver
        availableShips: [4, 3, 3, 2, 2, 1, 1],
        currentShipSize: 3,
        currentOrientation: 'horizontal',
        playerTurn: true,
        message: 'Расставьте свои корабли!',
        playerScore: 0,
        enemyScore: 0
    };

    // Фентези-корабли
    const shipTypes = [
        { size: 1, name: "⚡ Страж", symbol: "⚡", color: "#FFD700" },
        { size: 1, name: "🔮 Магический шар", symbol: "🔮", color: "#9370DB" },
        { size: 2, name: "🏹 Лодка лучников", symbol: "🏹", color: "#32CD32" },
        { size: 2, name: "🛡️ Защитник", symbol: "🛡️", color: "#1E90FF" },
        { size: 3, name: "🐉 Драконья ладья", symbol: "🐉", color: "#DC143C" },
        { size: 3, name: "⚔️ Воинский корабль", symbol: "⚔️", color: "#8B4513" },
        { size: 4, name: "🏰 Крепость", symbol: "🏰", color: "#A52A2A" }
    ];
    function getCurrentShipType() {
        if (gameState.availableShips.length === 0) return null;
        const currentSize = gameState.availableShips[0];
        return shipTypes.find(ship => ship.size === currentSize);
    }
    function initializeFields() {
    // Инициализация пустых полей 8x8 - КАЖДАЯ клетка отдельный объект!
    gameState.playerField = Array(8).fill().map(() => 
        Array(8).fill().map(() => ({ type: 'water', hit: false }))
    );
    gameState.enemyField = Array(8).fill().map(() => 
        Array(8).fill().map(() => ({ type: 'water', hit: false }))
    );
    gameState.playerShips = [];
    gameState.enemyShips = [];
    gameState.availableShips = [4, 3, 3, 2, 2, 1, 1];
}

    function canPlaceShip(field, x, y, size, orientation) {
        if (orientation === 'horizontal') {
            if (x + size > 8) return false;
            for (let i = -1; i <= size; i++) {
                for (let j = -1; j <= 1; j++) {
                    const checkX = x + i;
                    const checkY = y + j;
                    if (checkX >= 0 && checkX < 8 && checkY >= 0 && checkY < 8) {
                        if (field[checkY][checkX].type !== 'water') return false;
                    }
                }
            }
        } else {
            if (y + size > 8) return false;
            for (let i = -1; i <= size; i++) {
                for (let j = -1; j <= 1; j++) {
                    const checkX = x + j;
                    const checkY = y + i;
                    if (checkX >= 0 && checkX < 8 && checkY >= 0 && checkY < 8) {
                        if (field[checkY][checkX].type !== 'water') return false;
                    }
                }
            }
        }
        return true;
    }

    function placeShip(field, ships, x, y, size, orientation, shipType) {
        const ship = { x, y, size, orientation, hits: 0, type: shipType };
        ships.push(ship);
        
        if (orientation === 'horizontal') {
            for (let i = 0; i < size; i++) {
                field[y][x + i] = { type: 'ship', shipIndex: ships.length - 1, hit: false };
            }
        } else {
            for (let i = 0; i < size; i++) {
                field[y + i][x] = { type: 'ship', shipIndex: ships.length - 1, hit: false };
            }
        }
    }

    function placeEnemyShips() {
        const sizes = [4, 3, 3, 2, 2, 1, 1];
        sizes.forEach((size, index) => {
            let placed = false;
            while (!placed) {
                const x = Math.floor(Math.random() * 8);
                const y = Math.floor(Math.random() * 8);
                const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
                const shipType = shipTypes.find(s => s.size === size);
                
                if (canPlaceShip(gameState.enemyField, x, y, size, orientation)) {
                    placeShip(gameState.enemyField, gameState.enemyShips, x, y, size, orientation, shipType);
                    placed = true;
                }
            }
        });
    }

function handlePlayerAttack(x, y) {
    if (!gameState.playerTurn || gameState.gamePhase !== 'battle') return;
    if (gameState.enemyField[y][x].hit) return;

    const cell = gameState.enemyField[y][x];
    cell.hit = true;

    if (cell.type === 'ship') {
        const ship = gameState.enemyShips[cell.shipIndex];
        ship.hits++;
        
        if (ship.hits === ship.size) {
            gameState.message = `✅ Потоплен ${ship.type.name}!`;
            gameState.playerScore += ship.size * 10;
        } else {
            gameState.message = `🎯 Попадание в ${ship.type.name}!`;
        }
        
        checkGameOver();
        updateDisplay(); // Только обновляем дисплей
    } else {
        gameState.message = "💧 Промах!";
        gameState.playerTurn = false;
        updateDisplay(); // Сначала показываем промах
        setTimeout(enemyAttack, 1000); // Потом ход врага
    }
}

function enemyAttack() {
    let attackX, attackY;
    let foundTarget = false;

    // 1. Ищем раненые корабли для добивания
    const woundedShips = [];
    
    // Собираем все попадания по еще не потопленным кораблям
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const cell = gameState.playerField[y][x];
            if (cell.hit && cell.type === 'ship') {
                const ship = gameState.playerShips[cell.shipIndex];
                if (ship.hits < ship.size) { // Корабль еще не потоплен
                    woundedShips.push({ x, y, ship });
                }
            }
        }
    }

    // 2. Если есть раненые корабли - добиваем их
    if (woundedShips.length > 0) {
        // Группируем попадания по кораблям
        const shipHits = {};
        woundedShips.forEach(hit => {
            if (!shipHits[hit.shipIndex]) {
                shipHits[hit.shipIndex] = [];
            }
            shipHits[hit.shipIndex].push({ x: hit.x, y: hit.y });
        });

        // Ищем корабль с максимальным количеством попаданий
        let bestShipIndex = null;
        let maxHits = 0;
        
        for (const shipIndex in shipHits) {
            if (shipHits[shipIndex].length > maxHits) {
                maxHits = shipHits[shipIndex].length;
                bestShipIndex = shipIndex;
            }
        }

        if (bestShipIndex && shipHits[bestShipIndex].length >= 2) {
            // Есть минимум 2 попадания - определяем точное направление
            const hits = shipHits[bestShipIndex];
            
            // Сортируем попадания для определения направления
            hits.sort((a, b) => a.x - b.x || a.y - b.y);
            
            // Определяем направление по первым двум попаданиям
            const isHorizontal = hits[0].y === hits[1].y;
            const isVertical = hits[0].x === hits[1].x;
            
            if (isHorizontal) {
                // Горизонтальный корабль - ищем крайние точки
                const minX = Math.min(...hits.map(h => h.x));
                const maxX = Math.max(...hits.map(h => h.x));
                const y = hits[0].y;
                
                // Пробуем слева и справа от крайних точек
                const targets = [
                    { x: minX - 1, y: y }, // Слева от начала
                    { x: maxX + 1, y: y }  // Справа от конца
                ];
                
                for (let target of targets) {
                    if (target.x >= 0 && target.x < 8 && 
                        !gameState.playerField[target.y][target.x].hit &&
                        !isCellAdjacentToSunkShip(target.x, target.y)) {
                        attackX = target.x;
                        attackY = target.y;
                        foundTarget = true;
                        break;
                    }
                }
            } else if (isVertical) {
                // Вертикальный корабль - ищем крайние точки
                const minY = Math.min(...hits.map(h => h.y));
                const maxY = Math.max(...hits.map(h => h.y));
                const x = hits[0].x;
                
                // Пробуем сверху и снизу от крайних точек
                const targets = [
                    { x: x, y: minY - 1 }, // Сверху от начала
                    { x: x, y: maxY + 1 }  // Снизу от конца
                ];
                
                for (let target of targets) {
                    if (target.y >= 0 && target.y < 8 && 
                        !gameState.playerField[target.y][target.x].hit &&
                        !isCellAdjacentToSunkShip(target.x, target.y)) {
                        attackX = target.x;
                        attackY = target.y;
                        foundTarget = true;
                        break;
                    }
                }
            }
        }
        
        // Если не нашли по направлению или только одно попадание
        if (!foundTarget) {
            // Берем первое попадание и пробуем все 4 направления
            const firstHit = woundedShips[0];
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            
            for (let [dx, dy] of directions) {
                const newX = firstHit.x + dx;
                const newY = firstHit.y + dy;
                
                if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                    const cell = gameState.playerField[newY][newX];
                    if (!cell.hit && !isCellAdjacentToSunkShip(newX, newY)) {
                        attackX = newX;
                        attackY = newY;
                        foundTarget = true;
                        break;
                    }
                }
            }
        }
    }

    // 3. Если не нашли целей для добивания, ищем умные случайные цели
    if (!foundTarget) {
        const smartTargets = [];
        
        // Собираем все неоткрытые клетки, которые не примыкают к потопленным кораблям
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                const cell = gameState.playerField[y][x];
                if (!cell.hit && !isCellAdjacentToSunkShip(x, y)) {
                    // Даем приоритет клеткам, которые могут быть частью корабля
                    const priority = getCellPriority(x, y);
                    smartTargets.push({ x, y, priority });
                }
            }
        }
        
        if (smartTargets.length > 0) {
            // Сортируем по приоритету (высокий приоритет сначала)
            smartTargets.sort((a, b) => b.priority - a.priority);
            
            // Берем клетку с наивысшим приоритетом
            const target = smartTargets[0];
            attackX = target.x;
            attackY = target.y;
            foundTarget = true;
        }
    }

    // 4. Если все умные цели исчерпаны, стреляем в любую доступную клетку
    if (!foundTarget) {
        let attacked = false;
        while (!attacked) {
            attackX = Math.floor(Math.random() * 8);
            attackY = Math.floor(Math.random() * 8);
            if (!gameState.playerField[attackY][attackX].hit) {
                attacked = true;
            }
        }
    }

    // Выполняем атаку
    const cell = gameState.playerField[attackY][attackX];
    cell.hit = true;

    if (cell.type === 'ship') {
        const ship = gameState.playerShips[cell.shipIndex];
        ship.hits++;
        
        if (ship.hits === ship.size) {
            gameState.message = `💀 Враг потопил ваш ${ship.type.name}!`;
            gameState.enemyScore += ship.size * 10;
        } else {
            gameState.message = `🔥 Враг попал в ваш ${ship.type.name}!`;
        }
        
        checkGameOver();
        // Если попал - ходит снова
        if (gameState.gamePhase === 'battle') {
            setTimeout(enemyAttack, 1000);
        }
    } else {
        gameState.message = "🌊 Враг промахнулся! Ваш ход.";
        gameState.playerTurn = true;
    }
    
    updateDisplay();
}

// Вспомогательные функции оставляем без изменений
function isCellAdjacentToSunkShip(x, y) {
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const checkX = x + dx;
            const checkY = y + dy;
            if (checkX >= 0 && checkX < 8 && checkY >= 0 && checkY < 8) {
                const cell = gameState.playerField[checkY][checkX];
                if (cell.hit && cell.type === 'ship') {
                    const ship = gameState.playerShips[cell.shipIndex];
                    if (ship.hits === ship.size) { // Корабль потоплен
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function getCellPriority(x, y) {
    let priority = 0;
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for (let [dx, dy] of directions) {
        const checkX = x + dx;
        const checkY = y + dy;
        
        if (checkX >= 0 && checkX < 8 && checkY >= 0 && checkY < 8) {
            const cell = gameState.playerField[checkY][checkX];
            if (cell.hit && cell.type === 'ship') {
                priority += 10;
            } else if (!cell.hit) {
                priority += 1;
            }
        }
    }
    
    return priority;
}

    function checkGameOver() {
        const playerAlive = gameState.playerShips.some(ship => ship.hits < ship.size);
        const enemyAlive = gameState.enemyShips.some(ship => ship.hits < ship.size);
        
        if (!playerAlive) {
            gameState.gamePhase = 'gameOver';
            gameState.message = "💀 Поражение! Все ваши корабли потоплены.";
        } else if (!enemyAlive) {
            gameState.gamePhase = 'gameOver';
            gameState.message = "🎉 Победа! Все вражеские корабли уничтожены!";
        }
    }

function renderField(field, isPlayer, clickable = false) {
    let html = '<div style="display: grid; grid-template-columns: repeat(8, 30px); gap: 2px; justify-content: center;">';
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const cell = field[y][x];
            
            let content = '🌊';
            let style = 'width: 30px; height: 30px; border: 1px solid #1E90FF; display: flex; align-items: center; justify-content: center; font-size: 12px; ';
            
            // Для вражеского поля
            if (!isPlayer) {
                if (cell.hit) {
                    console.log(`Enemy cell [${x},${y}] is HIT`);
                    if (cell.type === 'ship') {
                        content = '💥';
                        style += 'background: #FF4444; ';
                    } else {
                        content = '❌';
                        style += 'background: #87CEEB; ';
                    }
                    html += `<div style="${style}">${content}</div>`;
                } else {
                    console.log(`Enemy cell [${x},${y}] is NOT hit - showing ocean`);
                    // Неоткрытая клетка - кликабельна
                    if (clickable && gameState.playerTurn) {
                        style += 'cursor: pointer; ';
                        html += `<div data-x="${x}" data-y="${y}" style="${style}" onclick="handleSeaBattleClick(${x}, ${y})">${content}</div>`;
                    } else {
                        html += `<div style="${style}">${content}</div>`;
                    }
                }
            } 
            // Для своего поля
            else {
                if (cell.hit) {
                    if (cell.type === 'ship') {
                        content = '💥';
                        style += 'background: #FF4444; ';
                    } else {
                        content = '❌';
                        style += 'background: #87CEEB; ';
                    }
                } else if (cell.type === 'ship') {
                    content = cell.shipIndex !== undefined ? gameState.playerShips[cell.shipIndex].type.symbol : '🚢';
                    style += `background: ${cell.shipIndex !== undefined ? gameState.playerShips[cell.shipIndex].type.color : '#8B4513'}; `;
                }
                html += `<div style="${style}">${content}</div>`;
            }
        }
    }
    
    html += '</div>';
    return html;
}

    function renderShipPlacement() {
    let html = '<div style="display: grid; grid-template-columns: repeat(8, 30px); gap: 2px; justify-content: center;">';
    
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const cell = gameState.playerField[y][x];
            let content = '🌊';
            let style = 'width: 30px; height: 30px; border: 1px solid #1E90FF; display: flex; align-items: center; justify-content: center; font-size: 12px; cursor: pointer; ';
            
            if (cell.type === 'ship') {
                content = gameState.playerShips[cell.shipIndex].type.symbol;
                style += `background: ${gameState.playerShips[cell.shipIndex].type.color}; `;
            }
            
            // Подсветка возможного размещения
            if (getCurrentShipType() && canPlaceShip(gameState.playerField, x, y, getCurrentShipType().size, gameState.currentOrientation)) {
                style += 'background: rgba(144, 238, 144, 0.3); ';
            }
            
            html += `<div data-x="${x}" data-y="${y}" style="${style}" onclick="handleShipPlacement(${x}, ${y})">${content}</div>`;
        }
    }
    
    html += '</div>';
    return html;
}

    // Глобальные функции для обработки кликов
    window.handleSeaBattleClick = function(x, y) {
        handlePlayerAttack(x, y);
    };

    window.handleShipPlacement = function(x, y) {
    if (gameState.gamePhase !== 'placement') return;
    
    const shipType = getCurrentShipType(); // ЗАМЕНИ ЭТУ СТРОКУ
    if (!shipType) return;
    
    const size = shipType.size; // ДОБАВЬ ЭТУ СТРОКУ
    
    if (canPlaceShip(gameState.playerField, x, y, size, gameState.currentOrientation)) {
        placeShip(gameState.playerField, gameState.playerShips, x, y, size, gameState.currentOrientation, shipType);
        
        // Убираем размещенный корабль из очереди
        gameState.availableShips.shift(); // ДОБАВЬ ЭТУ СТРОКУ
        
        if (gameState.availableShips.length > 0) {
            const nextShip = getCurrentShipType(); // ЗАМЕНИ ЭТУ СТРОКУ
            gameState.message = `Разместите ${nextShip.name}`;
        } else {
            gameState.gamePhase = 'battle';
            placeEnemyShips();
            gameState.message = 'Битва начинается! Ваш ход.';
        }
        
        updateDisplay();
    }
};

    window.rotateShip = function() {
        gameState.currentOrientation = gameState.currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
        updateDisplay();
    };

    window.restartSeaBattle = function() {
        initializeFields();
        gameState.gamePhase = 'placement';
        gameState.currentShipSize = 3;
        gameState.currentOrientation = 'horizontal';
        gameState.playerTurn = true;
        gameState.message = 'Расставьте свои корабли!';
        gameState.playerScore = 0;
        gameState.enemyScore = 0;
        updateDisplay();
    };

function updateDisplay() {
    const content = `
        <div style="
            background: linear-gradient(145deg, #1a1a2e, #16213e);
            color: #fff8e1; 
            padding: 15px; 
            border-radius: 15px; 
            border: 3px solid #2196F3;
            font-family: 'Times New Roman', serif;
            max-width: 700px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.4);
        ">
            <div style="
                text-align: center; 
                background: linear-gradient(145deg, #0f3460, #1a1a2e);
                padding: 10px; 
                margin: -15px -15px 15px -15px; 
                border-radius: 12px 12px 0 0;
                border-bottom: 3px solid #2196F3;
            ">
                <strong style="font-size: 16px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                    ⚔️ МОРСКАЯ БИТВА
                </strong>
            </div>
            
            <div style="text-align: center; margin: 10px 0; color: #90caf9; font-size: 12px; min-height: 40px;">
                ${gameState.message}
            </div>
            
            <div style="display: flex; justify-content: space-around; margin: 10px 0; color: #ccc; font-size: 12px;">
                <div>🎯 Ваши очки: ${gameState.playerScore}</div>
                <div>💀 Очки врага: ${gameState.enemyScore}</div>
            </div>
            
            ${gameState.gamePhase === 'placement' ? `
                <div style="text-align: center; margin: 10px 0;">
                    <div style="color: #ffd54f; margin-bottom: 8px; font-size: 12px;">
                       Корабль: ${getCurrentShipType() ? getCurrentShipType().name : 'Все размещены!'}
                    </div>
                    <button onclick="rotateShip()" style="
                        background: linear-gradient(145deg, #FF9800, #F57C00);
                        border: 2px solid #E65100;
                        border-radius: 6px;
                        color: white;
                        padding: 6px 12px;
                        margin: 5px;
                        font-size: 11px;
                        cursor: pointer;
                    ">🔄 Повернуть</button>
                </div>
                <div style="text-align: center; margin: 10px 0;">
                    <div style="color: #4CAF50; margin-bottom: 5px; font-size: 12px;"><strong>Ваш флот</strong></div>
                    ${renderShipPlacement()}
                </div>
            ` : `
                <div style="display: flex; justify-content: space-between; gap: 20px; align-items: flex-start;">
                    <div style="flex: 1;">
                        <div style="text-align: center; color: #4CAF50; margin-bottom: 5px; font-size: 12px;">
                            <strong>Ваш флот</strong>
                        </div>
                        ${renderField(gameState.playerField, true)}
                    </div>
                    <div style="flex: 1;">
                        <div style="text-align: center; color: #F44336; margin-bottom: 5px; font-size: 12px;">
                            <strong>Флот врага</strong>
                        </div>
                        ${renderField(gameState.enemyField, false, gameState.gamePhase === 'battle')}
                    </div>
                </div>
            `}
            
            ${gameState.gamePhase === 'gameOver' ? `
                <div style="
                    background: linear-gradient(145deg, ${gameState.playerScore > gameState.enemyScore ? '#4CAF50' : '#F44336'}, ${gameState.playerScore > gameState.enemyScore ? '#388E3C' : '#D32F2F'});
                    color: white; 
                    padding: 12px; 
                    text-align: center; 
                    margin: 15px 0; 
                    border-radius: 8px;
                    border: 2px solid ${gameState.playerScore > gameState.enemyScore ? '#1B5E20' : '#B71C1C'};
                ">
                    <strong style="font-size: 14px;">
                        ${gameState.playerScore > gameState.enemyScore ? '🎉 ПОБЕДА!' : '💀 ПОРАЖЕНИЕ!'}
                    </strong><br>
                    <span style="font-size: 12px;">Счет: ${gameState.playerScore} - ${gameState.enemyScore}</span>
                </div>
            ` : ''}
            
            <div style="text-align: center; margin: 15px 0 5px 0;">
                <button onclick="restartSeaBattle()" style="
                    background: linear-gradient(145deg, #2196F3, #1976D2);
                    border: 2px solid #0D47A1;
                    border-radius: 6px;
                    color: white;
                    padding: 6px 12px;
                    margin: 0 3px;
                    font-size: 11px;
                    cursor: pointer;
                ">🔄 Новая игра</button>
                
                <button data-action="backToMenu" style="
                    background: linear-gradient(145deg, #666, #555);
                     border: 2px solid #444;
                    border-radius: 6px;
                    color: white;
                    padding: 6px 12px;
                    margin: 0 3px;
                    font-size: 11px;
                    cursor: pointer;
                ">📱 Меню</button>
            </div>
        </div>
    `;

    if (!game.seaBattleDialog) {
        game.seaBattleDialog = new Dialog({
            title: "",
            content: content,
            buttons: {},
            default: "close",
            close: () => {
                game.seaBattleDialog = null;
            }
        }, {
            width: 660, // Шире для горизонтального layout
            height: 600,
            resizable: false
        });
        
        game.seaBattleDialog.render(true);
        setupSeaBattleHandlers();
    } else {
        const html = $(game.seaBattleDialog.element).find('.dialog-content');
        html.html(content);
        setupSeaBattleHandlers();
    }
}

function setupSeaBattleHandlers() {
    if (!game.seaBattleDialog) return;
    
    // Даем время диалогу полностью отрендериться
    setTimeout(() => {
        const dialogElement = $(game.seaBattleDialog.element);
        console.log("Setting up sea battle handlers");
        
        // Очищаем ВСЕ обработчики
        dialogElement.off('click.seaBattle');
        
        // Вешаем обработчик на кнопку меню
        dialogElement.on('click.seaBattle', 'button[data-action="backToMenu"]', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("Back to menu clicked");
            
            if (game.seaBattleDialog) {
                game.seaBattleDialog.close();
                game.seaBattleDialog = null;
            }
            showPhoneMenu();
        });
        
        // Также вешаем обработчик для новой игры
        dialogElement.on('click.seaBattle', 'button[onclick="restartSeaBattle()"]', function(e) {
            e.preventDefault();
            e.stopPropagation();
            restartSeaBattle();
        });
        
        console.log("Sea battle handlers setup complete");
    }, 100);
}

    // Инициализация и запуск
    initializeFields();
    updateDisplay();
}
// ===== GOBLIN ARENA GAME =====

function startGoblinArena() {
    if (game.phoneDialog) {
        game.phoneDialog.close();
    }

    if (game.goblinArenaDialog) {
        game.goblinArenaDialog.close();
        game.goblinArenaDialog = null;
    }

    // Останавливаем ВСЕ старые игровые циклы
    if (game.goblinGameLoop) {
        clearInterval(game.goblinGameLoop);
        game.goblinGameLoop = null;
    }
    if (game.goblinRenderLoop) {
        clearInterval(game.goblinRenderLoop);
        game.goblinRenderLoop = null;
    }

    const gameState = {
        player: {
            x: 200, y: 150,
            speed: 3,
            health: 100,
            maxHealth: 100,
            level: 1,
            exp: 0,
            expToNext: 100,
            weapons: [],
            isAlive: true,
            maxLevel: 15,
            // Новые свойства для спрайта
            width: 16,
            height: 16,
            color: "#FF6B6B",
            facing: "right",
            // Статистика
            totalDamageDealt: 0,
            totalDamageTaken: 0
        },
        enemies: [],
        projectiles: [],
        expOrbs: [],
        gameTime: 0,
        spawnTimer: 0,
        isPaused: false,
        gameOver: false,
        killCount: 0,
        highestWave: 0,
        currentWave: 1,
        lastMouseX: 200,
        lastMouseY: 150,
        // Общая статистика игры
        totalPlayTime: 0,
        sessionStartTime: Date.now()
    };

    // Оружия и способности
    const weapons = [
        { 
            name: "⚔️ Меч воина", 
            type: "melee", 
            damage: 15, 
            cooldown: 90,
            range: 40,
            level: 0,
            maxLevel: 5,
            description: "Круговой удар мечом"
        },
        { 
            name: "🏹 Лук охотника", 
            type: "ranged", 
            damage: 10, 
            cooldown: 45,
            range: 200,
            level: 0,
            maxLevel: 5,
            description: "Стрелы в ближайшего врага"
        },
        { 
            name: "🔮 Магический шар", 
            type: "magic", 
            damage: 20, 
            cooldown: 120,
            range: 150,
            level: 0,
            maxLevel: 5,
            description: "Вращающиеся магические сферы"
        },
        { 
            name: "🛡️ Шипы щита", 
            type: "defense", 
            damage: 8, 
            cooldown: 150,
            range: 60,
            level: 0,
            maxLevel: 5,
            description: "Урон при столкновении с врагами"
        }
    ];

    // Типы врагов
    const enemyTypes = [
        { 
            name: "👹 Гоблин", 
            health: 30, 
            speed: 1.2, 
            damage: 8, 
            exp: 5, 
            color: "#4CAF50",
            width: 14,
            height: 14,
            spawnTime: 0
        },
        { 
            name: "💀 Скелет", 
            health: 50, 
            speed: 1.0, 
            damage: 12, 
            exp: 8, 
            color: "#E0E0E0",
            width: 14,
            height: 16,
            spawnTime: 600
        },
        { 
            name: "🔥 Огненный элементаль", 
            health: 80, 
            speed: 0.8, 
            damage: 18, 
            exp: 12, 
            color: "#FF5722",
            width: 16,
            height: 16,
            spawnTime: 1200
        },
        { 
            name: "👑 Гоблин-вождь", 
            health: 150, 
            speed: 0.6, 
            damage: 25, 
            exp: 20, 
            color: "#FFD700",
            width: 18,
            height: 18,
            spawnTime: 1800
        }
    ];

    function initializeGame() {
        gameState.player = {
            x: 200, y: 150,
            speed: 3,
            health: 100,
            maxHealth: 100,
            level: 1,
            exp: 0,
            expToNext: 100,
            weapons: [{...weapons[0], cooldown: 0}],
            isAlive: true,
            maxLevel: 15,
            width: 16,
            height: 16,
            color: "#FF6B6B",
            facing: "right",
            totalDamageDealt: 0,
            totalDamageTaken: 0
        };
        gameState.enemies = [];
        gameState.projectiles = [];
        gameState.expOrbs = [];
        gameState.gameTime = 0;
        gameState.spawnTimer = 0;
        gameState.isPaused = false;
        gameState.gameOver = false;
        gameState.killCount = 0;
        gameState.highestWave = 0;
        gameState.currentWave = 1;
        gameState.lastMouseX = 200;
        gameState.lastMouseY = 150;
        gameState.sessionStartTime = Date.now();
    }

    function updateGame() {
        if (gameState.isPaused) return;
        
        if (!gameState.gameOver && !gameState.player.isAlive) {
            handleGameOver();
            return;
        }

        if (gameState.gameOver) return;

        gameState.gameTime++;
        gameState.spawnTimer++;

        // Плавное движение к позиции мыши
        const dx = gameState.lastMouseX - gameState.player.x;
        const dy = gameState.lastMouseY - gameState.player.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Определяем направление взгляда
        if (Math.abs(dx) > 5) {
            gameState.player.facing = dx > 0 ? "right" : "left";
        }
        
        if (dist > 3) {
            gameState.player.x += (dx / dist) * gameState.player.speed;
            gameState.player.y += (dy / dist) * gameState.player.speed;
        }

        updateWeapons();
        updateEnemies();
        updateProjectiles();
        updateExpOrbs();
        checkCollisions();
        spawnEnemies();
        checkLevelUp();
        
        // Обновляем статистику каждую секунду
        if (gameState.gameTime % 60 === 0) {
            updateDisplay();
        }
    }

    function handleGameOver() {
        gameState.gameOver = true;
        gameState.totalPlayTime += Math.floor((Date.now() - gameState.sessionStartTime) / 1000);
        
        // Показываем экран смерти
        showGameOverScreen();
    }

    function showGameOverScreen() {
    // ЗАКРЫВАЕМ СТАРОЕ ОКНО ИГРЫ ПРИ ПОКАЗЕ ЭКРАНА СМЕРТИ
    if (game.goblinArenaDialog) {
        game.goblinArenaDialog.close();
        game.goblinArenaDialog = null;
    }
    
    const playTime = Math.floor((Date.now() - gameState.sessionStartTime) / 1000);
    const minutes = Math.floor(playTime / 60);
    const seconds = playTime % 60;
    
    const content = `
        <div style="
            background: linear-gradient(145deg, #2d1b69, #1a0f3d);
            color: white; 
            padding: 25px; 
            border-radius: 15px; 
            border: 3px solid #8B4513;
            text-align: center;
            font-family: 'Times New Roman', serif;
            max-width: 400px;
        ">
            <div style="font-size: 48px; margin-bottom: 20px;">💀</div>
            <h2 style="color: #FFD700; margin-bottom: 20px; font-size: 24px;">ГЕРОЙ ПАЛ В БОЮ!</h2>
            
            <div style="
                background: rgba(255,255,255,0.1);
                padding: 15px;
                border-radius: 10px;
                margin: 15px 0;
                text-align: left;
            ">
                <div style="display: flex; justify-content: space-between; margin: 8px 0;">
                    <span>🏆 Уровень:</span>
                    <span style="color: #FFD700;">${gameState.player.level}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 8px 0;">
                    <span>🎯 Убийств:</span>
                    <span style="color: #FFD700;">${gameState.killCount}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 8px 0;">
                    <span>🌊 Макс. волна:</span>
                    <span style="color: #FFD700;">${gameState.highestWave}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 8px 0;">
                    <span>⏱️ Время выживания:</span>
                    <span style="color: #FFD700;">${minutes}:${seconds.toString().padStart(2, '0')}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 8px 0;">
                    <span>⚔️ Нанесено урона:</span>
                    <span style="color: #FFD700;">${gameState.player.totalDamageDealt}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 8px 0;">
                    <span>🛡️ Получено урона:</span>
                    <span style="color: #FFD700;">${Math.ceil(gameState.player.totalDamageTaken)}</span>
                </div>
            </div>
            
            <div style="margin: 20px 0; font-size: 14px; color: #ccc;">
                ${getGameOverMessage()}
            </div>
            
            <div style="display: flex; justify-content: center; gap: 10px;">
                <button onclick="restartGoblinArenaGame()" style="
                    background: linear-gradient(145deg, #4CAF50, #388E3C);
                    border: 2px solid #1B5E20;
                    border-radius: 8px;
                    color: white;
                    padding: 12px 20px;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: bold;
                ">🔄 Сразиться снова</button>
                
                <button onclick="closeGameOverScreen()" style="
                    background: linear-gradient(145deg, #666, #555);
                    border: 2px solid #444;
                    border-radius: 8px;
                    color: white;
                    padding: 12px 20px;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: bold;
                ">📱 В меню</button>
            </div>
        </div>
    `;

    if (game.gameOverDialog) {
        game.gameOverDialog.close();
    }
    
    game.gameOverDialog = new Dialog({
        title: "",
        content: content,
        buttons: {},
        default: "close",
        close: () => {
            game.gameOverDialog = null;
        }
    }, {
        width: 450,
        height: 500,
        resizable: false
    });
    
    game.gameOverDialog.render(true);
}

    function getGameOverMessage() {
        if (gameState.killCount < 10) return "Новичок! Попробуй еще раз и стань легендой!";
        if (gameState.killCount < 25) return "Хорошая попытка! Ты уже чувствуешь вкус победы!";
        if (gameState.killCount < 50) return "Отличный результат! Ты настоящий воин!";
        if (gameState.killCount < 100) return "Великолепно! Арена будет помнить твой подвиг!";
        return "Легендарно! Твое имя войдет в историю арены!";
    }

    window.closeGameOverScreen = function() {
        if (game.gameOverDialog) {
            game.gameOverDialog.close();
            game.gameOverDialog = null;
        }
        showPhoneMenu();
    };

    function updateWeapons() {
        gameState.player.weapons.forEach(weapon => {
            weapon.cooldown--;
            
            if (weapon.cooldown <= 0) {
                const baseCooldown = weapon.type === "melee" ? 90 : 
                                   weapon.type === "ranged" ? 45 :
                                   weapon.type === "magic" ? 120 : 150;
                weapon.cooldown = Math.max(30, baseCooldown - (weapon.level * 10));
                
                switch(weapon.type) {
                    case "melee":
                        createCircularAttack(weapon);
                        break;
                    case "ranged":
                        const target = findNearestEnemy();
                        if (target) {
                            createProjectile(target, weapon);
                        }
                        break;
                    case "magic":
                        createMagicOrbs(weapon);
                        break;
                    case "defense":
                        createSpikeField(weapon);
                        break;
                }
            }
        });
    }

    function createCircularAttack(weapon) {
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const damage = weapon.damage + (weapon.level * 3);
            
            gameState.projectiles.push({
                x: gameState.player.x,
                y: gameState.player.y,
                vx: Math.cos(angle) * 4,
                vy: Math.sin(angle) * 4,
                damage: damage,
                lifetime: 20,
                type: "sword"
            });
        }
    }

    function createProjectile(target, weapon) {
        const dx = target.x - gameState.player.x;
        const dy = target.y - gameState.player.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const damage = weapon.damage + (weapon.level * 2);
        
        gameState.projectiles.push({
            x: gameState.player.x,
            y: gameState.player.y,
            vx: (dx / dist) * 5,
            vy: (dy / dist) * 5,
            damage: damage,
            lifetime: 40,
            type: "arrow"
        });
    }

    function createMagicOrbs(weapon) {
        const count = 2 + Math.floor(weapon.level / 2);
        const damage = weapon.damage + (weapon.level * 4);
        
        gameState.projectiles = gameState.projectiles.filter(proj => proj.type !== "magic");
        
        for (let i = 0; i < count; i++) {
            gameState.projectiles.push({
                x: gameState.player.x,
                y: gameState.player.y,
                angle: (i / count) * Math.PI * 2,
                radius: 60 + (weapon.level * 10),
                speed: 0.03 + (weapon.level * 0.005),
                damage: damage,
                lifetime: 9999,
                type: "magic"
            });
        }
    }

    function createSpikeField(weapon) {
        const damage = weapon.damage + (weapon.level * 2);
        
        gameState.projectiles = gameState.projectiles.filter(proj => proj.type !== "spike");
        
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            gameState.projectiles.push({
                x: gameState.player.x,
                y: gameState.player.y,
                angle: angle,
                radius: 50 + (weapon.level * 5),
                damage: damage,
                lifetime: 60,
                type: "spike"
            });
        }
    }

    function findNearestEnemy() {
        let nearest = null;
        let minDist = Infinity;
        
        gameState.enemies.forEach(enemy => {
            const dx = enemy.x - gameState.player.x;
            const dy = enemy.y - gameState.player.y;
            const dist = dx * dx + dy * dy;
            
            if (dist < minDist) {
                minDist = dist;
                nearest = enemy;
            }
        });
        
        return nearest;
    }

    function spawnEnemies() {
        if (gameState.spawnTimer < 120) return;
        
        gameState.spawnTimer = 0;
        const enemyCount = 1 + Math.floor(gameState.gameTime / 600);
        
        for (let i = 0; i < enemyCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 100;
            const x = gameState.player.x + Math.cos(angle) * distance;
            const y = gameState.player.y + Math.sin(angle) * distance;
            
            let availableTypes = enemyTypes.filter(type => gameState.gameTime >= type.spawnTime);
            if (availableTypes.length === 0) availableTypes = [enemyTypes[0]];
            
            const type = availableTypes[Math.floor(Math.random() * availableTypes.length)];
            
            gameState.enemies.push({
                x: Math.max(20, Math.min(380, x)),
                y: Math.max(20, Math.min(280, y)),
                health: type.health,
                maxHealth: type.health,
                speed: type.speed,
                damage: type.damage,
                exp: type.exp,
                type: type.name,
                color: type.color,
                width: type.width,
                height: type.height
            });
        }
        
        gameState.currentWave = 1 + Math.floor(gameState.gameTime / 600);
        gameState.highestWave = Math.max(gameState.highestWave, gameState.currentWave);
    }

    function updateEnemies() {
        gameState.enemies.forEach(enemy => {
            const dx = gameState.player.x - enemy.x;
            const dy = gameState.player.y - enemy.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist > 20) {
                enemy.x += (dx / dist) * enemy.speed;
                enemy.y += (dy / dist) * enemy.speed;
                
                enemy.x = Math.max(20, Math.min(380, enemy.x));
                enemy.y = Math.max(20, Math.min(280, enemy.y));
            }
        });

        gameState.enemies = gameState.enemies.filter(enemy => enemy.health > 0);
    }

    function updateProjectiles() {
        gameState.projectiles.forEach(proj => {
            proj.lifetime--;
            
            if (proj.type === "magic") {
                proj.angle += proj.speed;
                proj.x = gameState.player.x + Math.cos(proj.angle) * proj.radius;
                proj.y = gameState.player.y + Math.sin(proj.angle) * proj.radius;
            } else if (proj.type === "spike") {
                proj.x = gameState.player.x + Math.cos(proj.angle) * proj.radius;
                proj.y = gameState.player.y + Math.sin(proj.angle) * proj.radius;
            } else {
                proj.x += proj.vx;
                proj.y += proj.vy;
            }
        });
        
        gameState.projectiles = gameState.projectiles.filter(proj => 
            proj.lifetime > 0 && 
            proj.x > 0 && proj.x < 400 && 
            proj.y > 0 && proj.y < 300
        );
    }

    function updateExpOrbs() {
        gameState.expOrbs.forEach(orb => {
            const dx = gameState.player.x - orb.x;
            const dy = gameState.player.y - orb.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 80) {
                orb.x += (dx / dist) * 2;
                orb.y += (dy / dist) * 2;
            }
        });
        
        gameState.expOrbs = gameState.expOrbs.filter(orb => {
            const dx = orb.x - gameState.player.x;
            const dy = orb.y - gameState.player.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            return dist > 10;
        });
    }

    function checkCollisions() {
        // Столкновения снарядов с врагами
        gameState.projectiles.forEach(proj => {
            gameState.enemies.forEach(enemy => {
                const dx = proj.x - enemy.x;
                const dy = proj.y - enemy.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 15) {
                    const damageDealt = Math.min(proj.damage, enemy.health);
                    enemy.health -= proj.damage;
                    gameState.player.totalDamageDealt += damageDealt;
                    
                    if (enemy.health <= 0) {
                        createExpOrbs(enemy.x, enemy.y, enemy.exp);
                        gameState.killCount++;
                        updateDisplay(); // Обновляем счетчик убийств сразу
                    }
                }
            });
        });
        
        // Столкновения врагов с игроком
        gameState.enemies.forEach(enemy => {
            const dx = enemy.x - gameState.player.x;
            const dy = enemy.y - gameState.player.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 20) {
                const damageTaken = enemy.damage * 0.1;
                gameState.player.health -= damageTaken;
                gameState.player.totalDamageTaken += damageTaken;
                
                if (gameState.player.health <= 0) {
                    gameState.player.isAlive = false;
                    gameState.player.health = 0;
                }
                updateDisplay(); // Обновляем HP сразу при получении урона
            }
        });
        
        // Сбор опыта
        gameState.expOrbs.forEach((orb, index) => {
            const dx = orb.x - gameState.player.x;
            const dy = orb.y - gameState.player.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 15) {
                gameState.player.exp += orb.value;
                gameState.expOrbs.splice(index, 1);
                updateDisplay(); // Обновляем опыт сразу при сборе
            }
        });
    }

    function createExpOrbs(x, y, expValue) {
        const orbCount = 1 + Math.floor(expValue / 10);
        for (let i = 0; i < orbCount; i++) {
            gameState.expOrbs.push({
                x: x + (Math.random() - 0.5) * 20,
                y: y + (Math.random() - 0.5) * 20,
                value: Math.floor(expValue / orbCount)
            });
        }
    }

    function checkLevelUp() {
        if (gameState.player.level >= gameState.player.maxLevel) return;
        
        if (gameState.player.exp >= gameState.player.expToNext) {
            gameState.player.level++;
            gameState.player.exp -= gameState.player.expToNext;
            gameState.player.expToNext = Math.floor(gameState.player.expToNext * 1.5);
            // Восстанавливаем только 50% HP
            const healthRestore = Math.floor(gameState.player.maxHealth * 0.5);
            gameState.player.health = Math.min(gameState.player.maxHealth, gameState.player.health + healthRestore);
            
            showLevelUpMenu();
        }
    }

function showLevelUpMenu() {
    if (gameState.player.level >= gameState.player.maxLevel) {
        gameState.isPaused = false;
        return;
    }

    const availableWeapons = weapons.filter(weapon => 
        !gameState.player.weapons.some(w => w.name === weapon.name) || 
        gameState.player.weapons.find(w => w.name === weapon.name)?.level < weapon.maxLevel
    );
    
    // СОХРАНЯЕМ ОПЦИИ В ГЛОБАЛЬНУЮ ПЕРЕМЕННУЮ
    window.currentLevelUpOptions = [];
    const options = [];
    
    while (options.length < 3 && availableWeapons.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableWeapons.length);
        const weapon = availableWeapons[randomIndex];
        options.push(weapon);
        window.currentLevelUpOptions.push(weapon);
        availableWeapons.splice(randomIndex, 1);
    }
    
    const content = `
        <div style="
            background: linear-gradient(145deg, #2d1b69, #1a0f3d);
            color: white; 
            padding: 20px; 
            border-radius: 15px; 
            border: 3px solid #8B4513;
            text-align: center;
            font-family: 'Times New Roman', serif;
        ">
            <h2 style="color: #FFD700; margin-bottom: 20px;">🎉 Уровень ${gameState.player.level}!</h2>
            <p style="margin-bottom: 15px;">Выберите улучшение:</p>
            
            ${options.map((weapon, index) => {
                const currentWeapon = gameState.player.weapons.find(w => w.name === weapon.name);
                const currentLevel = currentWeapon ? currentWeapon.level : 0;
                const isMaxLevel = currentLevel >= weapon.maxLevel;
                
                return `
                    <button data-upgrade-index="${index}" style="
                        background: linear-gradient(145deg, #4a2ca0, #3a1f7a);
                        border: 2px solid #8B4513;
                        border-radius: 10px;
                        color: white;
                        padding: 12px;
                        margin: 8px 0;
                        width: 100%;
                        text-align: left;
                        cursor: pointer;
                        font-family: 'Times New Roman', serif;
                        ${isMaxLevel ? 'opacity: 0.6; cursor: not-allowed;' : ''}
                    " ${isMaxLevel ? 'disabled' : ''}>
                        <div style="font-weight: bold; color: #FFD700;">${weapon.name} ${isMaxLevel ? '(MAX)' : `Ур. ${currentLevel + 1}`}</div>
                        <div style="font-size: 12px; color: #ccc;">${weapon.description}</div>
                        <div style="font-size: 11px; color: #aaa;">
                            Урон: ${weapon.damage + (currentLevel * (weapon.type === "magic" ? 4 : 2))} 
                            ${weapon.type === "ranged" ? '• Дальний бой' : ''}
                            ${weapon.type === "magic" ? '• Магический' : ''}
                            ${weapon.type === "defense" ? '• Защита' : ''}
                        </div>
                    </button>
                `;
            }).join('')}
            
            <div style="margin-top: 15px; font-size: 12px; color: #ccc;">
                Выбрано улучшений: ${gameState.player.weapons.reduce((sum, w) => sum + w.level, 0)}/20
            </div>
        </div>
    `;

    gameState.isPaused = true;
    
    // ЗАКРЫВАЕМ СТАРЫЙ ДИАЛОГ ЕСЛИ ЕСТЬ
    if (game.levelUpDialog) {
        game.levelUpDialog.close();
        game.levelUpDialog = null;
    }
    
    game.levelUpDialog = new Dialog({
        title: "",
        content: content,
        buttons: {},
        default: "close",
        close: () => {
            console.log("Level up dialog closed");
            // ЕСЛИ ДИАЛОГ ЗАКРЫЛИ БЕЗ ВЫБОРА - ВЫБИРАЕМ СЛУЧАЙНОЕ УЛУЧШЕНИЕ
            if (gameState.isPaused) {
                const randomIndex = Math.floor(Math.random() * window.currentLevelUpOptions.length);
                applyUpgrade(randomIndex);
                gameState.isPaused = false;
            }
            game.levelUpDialog = null;
            window.currentLevelUpOptions = null;
        }
    }, {
        width: 380,
        height: 450,
        resizable: false
    });
    
    game.levelUpDialog.render(true);
    
    // ДОБАВЛЯЕМ ОБРАБОТЧИКИ ПОСЛЕ ТОГО КАК ДИАЛОГ ОТРЕНДЕРИЛСЯ
    setTimeout(() => {
        setupLevelUpHandlers();
    }, 100);
}
function setupLevelUpHandlers() {
    if (!game.levelUpDialog) return;
    
    const dialogElement = $(game.levelUpDialog.element);
    
    // ОЧИЩАЕМ ВСЕ СТАРЫЕ ОБРАБОТЧИКИ
    dialogElement.off('click.levelup');
    
    // ДОБАВЛЯЕМ НОВЫЕ ОБРАБОТЧИКИ
    dialogElement.on('click.levelup', 'button[data-upgrade-index]', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const button = $(this);
        const index = parseInt(button.attr('data-upgrade-index'));
        
        console.log("Upgrade button clicked, index:", index);
        
        if (button.prop('disabled')) {
            console.log("Button is disabled, ignoring click");
            return;
        }
        
        applyUpgrade(index);
        
        // ЗАКРЫВАЕМ ДИАЛОГ
        if (game.levelUpDialog) {
            game.levelUpDialog.close();
            game.levelUpDialog = null;
        }
        
        gameState.isPaused = false;
        window.currentLevelUpOptions = null;
        
        // ОБНОВЛЯЕМ ОТОБРАЖЕНИЕ ИГРЫ
        updateDisplay();
    });
}
function applyUpgrade(index) {
    console.log("Applying upgrade, index:", index, "Options:", window.currentLevelUpOptions);
    
    if (!window.currentLevelUpOptions || index >= window.currentLevelUpOptions.length) {
        console.error("Invalid upgrade index:", index);
        return;
    }
    
    const selectedWeapon = window.currentLevelUpOptions[index];
    console.log("Selected weapon:", selectedWeapon.name);
    
    const existingWeapon = gameState.player.weapons.find(w => w.name === selectedWeapon.name);
    if (existingWeapon) {
        if (existingWeapon.level < existingWeapon.maxLevel) {
            existingWeapon.level++;
            console.log(`Upgraded ${selectedWeapon.name} to level ${existingWeapon.level}`);
        } else {
            console.log(`${selectedWeapon.name} is already at max level`);
        }
    } else {
        gameState.player.weapons.push({
            ...selectedWeapon,
            level: 1,
            cooldown: 0
        });
        console.log(`Added new weapon: ${selectedWeapon.name}`);
    }
}

// УДАЛЯЕМ СТАРУЮ ГЛОБАЛЬНУЮ ФУНКЦИЮ - ОНА БОЛЬШЕ НЕ НУЖНА
delete window.selectGoblinUpgrade;

// ОБНОВЛЯЕМ ФУНКЦИЮ RESTART ДЛЯ ОЧИСТКИ
window.restartGoblinArenaGame = function() {
    console.log("Restarting game...");
    
    // ЗАКРЫВАЕМ ВСЕ ДИАЛОГИ
    if (game.gameOverDialog) {
        game.gameOverDialog.close();
        game.gameOverDialog = null;
    }
    if (game.levelUpDialog) {
        game.levelUpDialog.close();
        game.levelUpDialog = null;
    }
    if (game.goblinArenaDialog) {
        game.goblinArenaDialog.close();
        game.goblinArenaDialog = null;
    }
    
    // ОСТАНАВЛИВАЕМ ЦИКЛЫ
    if (game.goblinGameLoop) {
        clearInterval(game.goblinGameLoop);
        game.goblinGameLoop = null;
    }
    if (game.goblinRenderLoop) {
        clearInterval(game.goblinRenderLoop);
        game.goblinRenderLoop = null;
    }
    
    // ОЧИЩАЕМ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
    window.currentLevelUpOptions = null;
    
    // ПЕРЕЗАПУСКАЕМ ИГРУ
    initializeGame();
    updateDisplay();
    
    setTimeout(() => {
        startGameLoops();
    }, 100);
};

// ОБНОВЛЯЕМ ФУНКЦИЮ ВОЗВРАТА В МЕНЮ
window.closeGameOverScreen = function() {
    console.log("Closing game over screen and returning to menu");
    
    // ЗАКРЫВАЕМ ВСЕ ДИАЛОГИ
    if (game.gameOverDialog) {
        game.gameOverDialog.close();
        game.gameOverDialog = null;
    }
    if (game.levelUpDialog) {
        game.levelUpDialog.close();
        game.levelUpDialog = null;
    }
    if (game.goblinArenaDialog) {
        game.goblinArenaDialog.close();
        game.goblinArenaDialog = null;
    }
    
    // ОСТАНАВЛИВАЕМ ЦИКЛЫ
    if (game.goblinGameLoop) {
        clearInterval(game.goblinGameLoop);
        game.goblinGameLoop = null;
    }
    if (game.goblinRenderLoop) {
        clearInterval(game.goblinRenderLoop);
        game.goblinRenderLoop = null;
    }
    
    // ОЧИЩАЕМ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
    window.currentLevelUpOptions = null;
    
    showPhoneMenu();
};

    function drawPixelWarrior(ctx, x, y, width, height, color, facing) {
    const centerX = x;
    const centerY = y;
    
    // Тело (основной квадрат)
    ctx.fillStyle = color;
    ctx.fillRect(centerX - width/2, centerY - height/2, width, height);
    
    // Детали в зависимости от направления
    if (facing === "right") {
        // Голова (правый верхний угол)
        ctx.fillStyle = "#FF8E8E";
        ctx.fillRect(centerX + width/4, centerY - height/2, width/4, height/4);
        
        // Оружие/рука справа
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(centerX + width/2, centerY - height/4, width/3, height/8);
    } else {
        // Голова (левый верхний угол)
        ctx.fillStyle = "#FF8E8E";
        ctx.fillRect(centerX - width/2, centerY - height/2, width/4, height/4);
        
        // Оружие/рука слева
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(centerX - width/2 - width/3, centerY - height/4, width/3, height/8);
    }
    
    // Ноги (нижняя часть)
    ctx.fillStyle = "#8B0000";
    ctx.fillRect(centerX - width/3, centerY + height/4, width/3, height/4);
    ctx.fillRect(centerX, centerY + height/4, width/3, height/4);
}

function drawGoblin(ctx, x, y, width, height, color) {
    const centerX = x;
    const centerY = y;
    
    // Тело гоблина
    ctx.fillStyle = color;
    ctx.fillRect(centerX - width/2, centerY - height/2, width, height);
    
    // Голова гоблина (зеленая)
    ctx.fillStyle = "#2E7D32";
    ctx.fillRect(centerX - width/4, centerY - height/2 - 2, width/2, height/4);
    
    // Глаза гоблина
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(centerX - width/6, centerY - height/2, 2, 2);
    ctx.fillRect(centerX + width/6 - 2, centerY - height/2, 2, 2);
    
    // Оружие гоблина
    ctx.fillStyle = "#5D4037";
    ctx.fillRect(centerX - width/2 - 4, centerY, width/2, 2);
}

function drawSkeleton(ctx, x, y, width, height, color) {
    const centerX = x;
    const centerY = y;
    
    // Тело скелета
    ctx.fillStyle = color;
    ctx.fillRect(centerX - width/2, centerY - height/2, width, height);
    
    // Череп
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(centerX - width/3, centerY - height/2 - 2, width/1.5, height/3);
    
    // Глазницы
    ctx.fillStyle = "#000000";
    ctx.fillRect(centerX - width/4, centerY - height/2, 2, 2);
    ctx.fillRect(centerX + width/4 - 2, centerY - height/2, 2, 2);
    
    // Меч
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(centerX - width/2 - 6, centerY, width/2, 3);
}

function drawFireElemental(ctx, x, y, width, height, color) {
    const centerX = x;
    const centerY = y;
    
    // Тело элементаля
    ctx.fillStyle = color;
    ctx.fillRect(centerX - width/2, centerY - height/2, width, height);
    
    // Пламя
    ctx.fillStyle = "#FF9800";
    for (let i = 0; i < 3; i++) {
        ctx.fillRect(centerX - width/3 + i*2, centerY - height/2 - 4, 2, 4);
    }
    
    // Ядро
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(centerX - 2, centerY - 2, 4, 4);
}

function drawGoblinChief(ctx, x, y, width, height, color) {
    const centerX = x;
    const centerY = y;
    
    // Тело вождя
    ctx.fillStyle = color;
    ctx.fillRect(centerX - width/2, centerY - height/2, width, height);
    
    // Корона
    ctx.fillStyle = "#FFD700";
    ctx.fillRect(centerX - width/2, centerY - height/2 - 4, width, 3);
    ctx.fillRect(centerX - width/4, centerY - height/2 - 6, width/2, 2);
    
    // Броня
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(centerX - width/3, centerY - height/4, width/1.5, 2);
    
    // Большое оружие
    ctx.fillStyle = "#5D4037";
    ctx.fillRect(centerX - width/2 - 8, centerY, width, 4);
}

    function renderGameCanvas() {
        const canvas = document.getElementById('goblinArenaCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Полная очистка canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Фон
        ctx.fillStyle = '#1a0f3d';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Рисуем снаряды
        gameState.projectiles.forEach(proj => {
            if (proj.type === "magic") {
                ctx.fillStyle = "#9370DB";
                ctx.beginPath();
                ctx.arc(proj.x, proj.y, 6, 0, Math.PI * 2);
                ctx.fill();
            } else if (proj.type === "spike") {
                ctx.fillStyle = "#FF5722";
                ctx.beginPath();
                ctx.moveTo(proj.x, proj.y - 4);
                ctx.lineTo(proj.x - 3, proj.y + 3);
                ctx.lineTo(proj.x + 3, proj.y + 3);
                ctx.closePath();
                ctx.fill();
            } else {
                ctx.fillStyle = proj.type === "sword" ? "#FFD700" : "#8B4513";
                ctx.fillRect(proj.x - 2, proj.y - 2, 4, 4);
            }
        });
        
        // Рисуем опыт (звездочки)
        gameState.expOrbs.forEach(orb => {
            ctx.fillStyle = '#00FFFF';
            ctx.beginPath();
            ctx.moveTo(orb.x, orb.y - 3);
            ctx.lineTo(orb.x - 2, orb.y + 2);
            ctx.lineTo(orb.x + 2, orb.y + 2);
            ctx.closePath();
            ctx.fill();
        });
        
        // Рисуем врагов
        gameState.enemies.forEach(enemy => {
            const healthPercent = enemy.health / enemy.maxHealth;
            
            if (enemy.type.includes("Гоблин-вождь")) {
                drawGoblinChief(ctx, enemy.x, enemy.y, enemy.width, enemy.height, enemy.color);
            } else if (enemy.type.includes("Огненный")) {
                drawFireElemental(ctx, enemy.x, enemy.y, enemy.width, enemy.height, enemy.color);
            } else if (enemy.type.includes("Скелет")) {
                drawSkeleton(ctx, enemy.x, enemy.y, enemy.width, enemy.height, enemy.color);
            } else {
                drawGoblin(ctx, enemy.x, enemy.y, enemy.width, enemy.height, enemy.color);
            }
            
            // Полоска здоровья над врагом
            ctx.fillStyle = '#333';
            ctx.fillRect(enemy.x - 10, enemy.y - 20, 20, 3);
            ctx.fillStyle = healthPercent > 0.5 ? '#4CAF50' : healthPercent > 0.25 ? '#FF9800' : '#F44336';
            ctx.fillRect(enemy.x - 10, enemy.y - 20, 20 * healthPercent, 3);
        });
        
        // Рисуем игрока (пиксельного воина)
        if (gameState.player.isAlive) {
            drawPixelWarrior(
                ctx, 
                gameState.player.x, 
                gameState.player.y, 
                gameState.player.width, 
                gameState.player.height, 
                gameState.player.color, 
                gameState.player.facing
            );
            
            // Полоска здоровья игрока
            const playerHealthPercent = gameState.player.health / gameState.player.maxHealth;
            ctx.fillStyle = '#333';
            ctx.fillRect(gameState.player.x - 15, gameState.player.y - 25, 30, 4);
            ctx.fillStyle = playerHealthPercent > 0.5 ? '#4CAF50' : playerHealthPercent > 0.25 ? '#FF9800' : '#F44336';
            ctx.fillRect(gameState.player.x - 15, gameState.player.y - 25, 30 * playerHealthPercent, 4);
        } else {
            // Мертвый игрок
            ctx.fillStyle = '#666';
            ctx.fillRect(
                gameState.player.x - gameState.player.width/2, 
                gameState.player.y - gameState.player.height/2, 
                gameState.player.width, 
                gameState.player.height
            );
        }
    }

    function setupMouseControl() {
        const canvas = document.getElementById('goblinArenaCanvas');
        if (!canvas) return;
        
        canvas.addEventListener('mousemove', (e) => {
            if (gameState.isPaused || gameState.gameOver || !gameState.player.isAlive) return;
            
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            gameState.lastMouseX = Math.max(15, Math.min(385, x));
            gameState.lastMouseY = Math.max(15, Math.min(285, y));
        });
    }

    function startGameLoops() {
        if (game.goblinGameLoop) clearInterval(game.goblinGameLoop);
        if (game.goblinRenderLoop) clearInterval(game.goblinRenderLoop);
        
        game.goblinGameLoop = setInterval(() => {
            updateGame();
        }, 1000 / 60);
        
        game.goblinRenderLoop = setInterval(() => {
            renderGameCanvas();
        }, 1000 / 60);
    }

    function updateDisplay() {
        const maxLevelText = gameState.player.level >= gameState.player.maxLevel ? 
            `<div style="color: #FFD700; text-align: center; margin: 5px 0; font-size: 12px;">🏆 Достигнут максимальный уровень!</div>` : '';

        const playTime = Math.floor((Date.now() - gameState.sessionStartTime) / 1000);
        const minutes = Math.floor(playTime / 60);
        const seconds = playTime % 60;

        const stats = `
            <div style="display: flex; justify-content: space-between; margin: 10px 0; color: #ccc; font-size: 12px;">
                <div>❤️ ${Math.ceil(gameState.player.health)}/${gameState.player.maxHealth}</div>
                <div>⭐ Ур. ${gameState.player.level}${gameState.player.level >= gameState.player.maxLevel ? ' (MAX)' : ''}</div>
                <div>🎯 ${gameState.killCount} убийств</div>
                <div>🌊 Волна ${gameState.currentWave}</div>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 5px 0; color: #999; font-size: 11px;">
                <div>⚔️ ${gameState.player.totalDamageDealt}</div>
                <div>⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}</div>
                <div>🛡️ ${Math.ceil(gameState.player.totalDamageTaken)}</div>
            </div>
            ${maxLevelText}
            ${gameState.player.level < gameState.player.maxLevel ? `
            <div style="background: #333; border-radius: 5px; margin: 10px 0; height: 10px;">
                <div style="background: #00FFFF; height: 100%; border-radius: 5px; width: ${(gameState.player.exp / gameState.player.expToNext) * 100}%;"></div>
            </div>
            ` : ''}
        `;

        const content = `
            <div style="
                background: linear-gradient(145deg, #1a1a2e, #16213e);
                color: #fff8e1; 
                padding: 15px; 
                border-radius: 15px; 
                border: 3px solid #8B4513;
                font-family: 'Times New Roman', serif;
                max-width: 450px;
            ">
                <div style="
                    text-align: center; 
                    background: linear-gradient(145deg, #8B4513, #654321);
                    padding: 10px; 
                    margin: -15px -15px 15px -15px; 
                    border-radius: 12px 12px 0 0;
                    border-bottom: 3px solid #FFD700;
                ">
                    <strong style="font-size: 18px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                        ⚔️ АРЕНА ГОБЛИНОВ
                    </strong>
                </div>
                
                ${stats}
                
                <div style="text-align: center; margin: 10px 0;">
                    <canvas id="goblinArenaCanvas" width="400" height="300" style="border: 2px solid #8B4513; background: #1a0f3d; cursor: crosshair; display: block;"></canvas>
                </div>
                
                <div style="text-align: center; margin: 15px 0 5px 0;">
                    <button onclick="restartGoblinArenaGame()" style="
                        background: linear-gradient(145deg, #4CAF50, #388E3C);
                        border: 2px solid #1B5E20;
                        border-radius: 6px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 12px;
                        cursor: pointer;
                    ">🔄 Новая игра</button>
                    
                    <button data-action="backToMenu" style="
                        background: linear-gradient(145deg, #666, #555);
                        border: 2px solid #444;
                        border-radius: 6px;
                        color: white;
                        padding: 8px 16px;
                        margin: 0 5px;
                        font-size: 12px;
                        cursor: pointer;
                    ">📱 Меню</button>
                </div>
                
                <div style="
                    text-align: center; 
                    margin-top: 10px; 
                    font-size: 10px; 
                    color: #90caf9;
                    border-top: 1px solid #8B4513;
                    padding-top: 8px;
                ">
                    Водите мышью для движения • Макс. уровень: 15 • Выживай как можно дольше!
                </div>
            </div>
        `;

        if (!game.goblinArenaDialog) {
            game.goblinArenaDialog = new Dialog({
                title: "",
                content: content,
                buttons: {},
                default: "close",
                close: () => {
                    if (game.goblinGameLoop) {
                        clearInterval(game.goblinGameLoop);
                        game.goblinGameLoop = null;
                    }
                    if (game.goblinRenderLoop) {
                        clearInterval(game.goblinRenderLoop);
                        game.goblinRenderLoop = null;
                    }
                    game.goblinArenaDialog = null;
                }
            }, {
                width: 480,
                height: 580,
                resizable: false
            });
            
            game.goblinArenaDialog.render(true);
            
            setTimeout(() => {
                setupMouseControl();
                startGameLoops();
            }, 100);
            
        } else {
            const html = $(game.goblinArenaDialog.element).find('.dialog-content');
            html.html(content);
            
            setTimeout(() => {
                setupMouseControl();
            }, 100);
        }
    }

    window.restartGoblinArenaGame = function() {
        if (game.goblinGameLoop) {
            clearInterval(game.goblinGameLoop);
            game.goblinGameLoop = null;
        }
        if (game.goblinRenderLoop) {
            clearInterval(game.goblinRenderLoop);
            game.goblinRenderLoop = null;
        }
        if (game.gameOverDialog) {
            game.gameOverDialog.close();
            game.gameOverDialog = null;
        }
        
        initializeGame();
        updateDisplay();
        
        setTimeout(() => {
            startGameLoops();
        }, 100);
    };

    // Инициализация и запуск
    initializeGame();
    updateDisplay();
    
    setTimeout(() => {
        const dialogElement = $(game.goblinArenaDialog.element);
        dialogElement.off('click.goblinArena');
        
        dialogElement.on('click.goblinArena', 'button[data-action="backToMenu"]', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (game.goblinGameLoop) {
                clearInterval(game.goblinGameLoop);
                game.goblinGameLoop = null;
            }
            if (game.goblinRenderLoop) {
                clearInterval(game.goblinRenderLoop);
                game.goblinRenderLoop = null;
            }
            if (game.goblinArenaDialog) {
                game.goblinArenaDialog.close();
                game.goblinArenaDialog = null;
            }
            showPhoneMenu();
        });
    }, 200);
}
// Запускаем главное меню
showPhoneMenu();