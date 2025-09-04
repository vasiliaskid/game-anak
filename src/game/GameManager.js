// Main Game Manager - Controls overall game flow and state

export class GameManager {
  constructor() {
    this.currentLevel = 1;
    this.selectedCharacter = null;
    this.playerHP = 100;
    this.playerMaxHP = 100;
    this.monsterHP = 80;
    this.monsterMaxHP = 80;
    this.score = 0;
    this.correctStreak = 0;
    this.activePowerups = new Map();
    this.currentSubject = '';
    this.currentSubjectIndex = 0;
    this.currentQuestionIndex = 0;
    this.gameState = 'menu'; // menu, playing, boss, victory, gameover
    this.timeLimit = 30;
    this.timeRemaining = 30;
    this.timer = null;
    
    // Subjects order
    this.subjects = [
      'pkn', 'bahasa_indonesia', 'matematika', 'seni_budaya',
      'penjasorkes', 'bahasa_inggris', 'ipa', 'ips'
    ];
    
    this.subjectNames = {
      pkn: 'PKn',
      bahasa_indonesia: 'Bahasa Indonesia',
      matematika: 'Matematika',
      seni_budaya: 'Seni Budaya',
      penjasorkes: 'Penjasorkes',
      bahasa_inggris: 'Bahasa Inggris',
      ipa: 'IPA',
      ips: 'IPS'
    };

    this.levelConfig = {
      1: { timeLimit: 30, playerHP: 100, monsterHP: 80 },
      2: { timeLimit: 35, playerHP: 90, monsterHP: 100 },
      3: { timeLimit: 40, playerHP: 80, monsterHP: 120 },
      4: { timeLimit: 45, playerHP: 70, monsterHP: 140 },
      5: { timeLimit: 50, playerHP: 60, monsterHP: 160 },
      6: { timeLimit: 60, playerHP: 50, monsterHP: 180 }
    };

    this.loadProgress();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Character selection
    document.querySelectorAll('.character-card').forEach(card => {
      card.addEventListener('click', () => {
        this.selectCharacter(card.dataset.character);
      });
    });

    // Level selection
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectLevel(parseInt(btn.dataset.level));
      });
    });

    // Start game button
    document.getElementById('start-game-btn').addEventListener('click', () => {
      this.startGame();
    });

    // Answer buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectAnswer(parseInt(btn.dataset.option));
      });
    });

    // Victory/Game Over buttons
    document.getElementById('next-level-btn').addEventListener('click', () => {
      this.nextLevel();
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
      this.restartGame();
    });

    document.getElementById('retry-level-btn').addEventListener('click', () => {
      this.retryLevel();
    });

    document.getElementById('back-to-menu-btn').addEventListener('click', () => {
      this.backToMenu();
    });

    document.getElementById('start-boss-btn').addEventListener('click', () => {
      this.startBossFight();
    });
  }

  selectCharacter(character) {
    this.selectedCharacter = character;
    
    // Visual feedback
    document.querySelectorAll('.character-card').forEach(card => {
      card.classList.remove('selected');
    });
    
    document.querySelector(`[data-character="${character}"]`).classList.add('selected');
    this.updateStartButton();
  }

  selectLevel(level) {
    // Check if level is unlocked
    const unlockedLevel = this.getUnlockedLevel();
    if (level > unlockedLevel) {
      this.showMessage(`Level ${level} belum terbuka! Selesaikan level ${unlockedLevel} terlebih dahulu.`);
      return;
    }

    this.currentLevel = level;
    
    // Visual feedback
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    
    document.querySelector(`[data-level="${level}"]`).classList.add('selected');
    this.updateStartButton();
  }

  updateStartButton() {
    const btn = document.getElementById('start-game-btn');
    if (this.selectedCharacter && this.currentLevel) {
      btn.disabled = false;
      btn.textContent = `🚀 Mulai Level ${this.currentLevel}!`;
    } else {
      btn.disabled = true;
      btn.textContent = '🚀 Pilih Karakter dan Level!';
    }
  }

  getUnlockedLevel() {
    // Get highest unlocked level from localStorage
    const progress = JSON.parse(localStorage.getItem('educationalGameProgress') || '{}');
    return progress.unlockedLevel || 1;
  }

  startGame() {
    if (!this.selectedCharacter || !this.currentLevel) {
      this.showMessage('Pilih karakter dan level terlebih dahulu!');
      return;
    }

    this.initializeLevel();
    this.hideModal('start-screen');
    this.gameState = 'playing';
    this.startSubjectRound();
  }

  initializeLevel() {
    const config = this.levelConfig[this.currentLevel];
    
    this.playerMaxHP = config.playerHP;
    this.playerHP = config.playerHP;
    this.monsterMaxHP = config.monsterHP;
    this.monsterHP = config.monsterHP;
    this.timeLimit = config.timeLimit;
    this.score = 0;
    this.correctStreak = 0;
    this.currentSubjectIndex = 0;
    this.currentQuestionIndex = 0;
    this.activePowerups.clear();

    this.updateUI();
  }

  startSubjectRound() {
    if (this.currentSubjectIndex >= this.subjects.length) {
      // All subjects completed, start boss fight
      this.showBossScreen();
      return;
    }

    this.currentSubject = this.subjects[this.currentSubjectIndex];
    this.currentQuestionIndex = 0;
    this.showNextQuestion();
  }

  showNextQuestion() {
    // Import questions dynamically
    import('../data/questions.js').then(module => {
      const questions = module.QUESTIONS[this.currentLevel][this.currentSubject];
      
      if (this.currentQuestionIndex >= questions.length) {
        // Subject completed, move to next
        this.completeSubject();
        return;
      }

      const question = questions[this.currentQuestionIndex];
      this.displayQuestion(question);
    });
  }

  displayQuestion(question) {
    this.timeRemaining = this.timeLimit;
    
    // Apply character skills
    this.applyCharacterSkills();

    // Update question display
    document.getElementById('subject-name').textContent = this.subjectNames[this.currentSubject];
    document.getElementById('question-counter').textContent = 
      `Pertanyaan ${this.currentQuestionIndex + 1}/5`;
    document.getElementById('question-text').textContent = question.question;

    // Display options
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
      btn.textContent = question.options[index];
      btn.disabled = false;
      btn.className = 'option-btn';
    });

    // Apply monster special attacks
    this.applyMonsterSpecialAttack();

    // Show hint if powerup active
    this.handleHintPowerup(question);

    this.showModal('question-modal');
    this.startQuestionTimer();
  }

  applyCharacterSkills() {
    const character = this.selectedCharacter;
    const skill = this.getCharacterSkill(character, this.currentSubject);
    
    if (skill && skill.effect === 'time_bonus') {
      this.timeRemaining = this.timeLimit + skill.value;
    }
  }

  getCharacterSkill(character, subject) {
    // Import characters data and return skill if available
    import('../data/characters.js').then(module => {
      const chars = module.CHARACTERS;
      return chars[character]?.skills[subject];
    });
    return null;
  }

  applyMonsterSpecialAttack() {
    import('../data/characters.js').then(module => {
      const monster = module.MONSTERS[this.currentLevel];
      
      if (Math.random() < monster.specialAttack.chance) {
        this.executeSpecialAttack(monster.specialAttack);
      }
    });
  }

  executeSpecialAttack(attack) {
    switch (attack.name) {
      case "Curi Waktu":
        this.timeRemaining = Math.max(5, this.timeRemaining - 5);
        this.showMessage("🕐 Monster mencuri 5 detik waktu mu!");
        break;
      case "Bingung":
        this.shuffleAnswerOptions();
        this.showMessage("🌀 Monster mengacak pilihan jawaban!");
        break;
      case "Suara Menggoda":
        this.hideRandomOptions(2);
        this.showMessage("👻 Monster menyembunyikan 2 pilihan!");
        break;
      case "Lompat Panik":
        this.timeRemaining = Math.floor(this.timeRemaining * 0.5);
        this.showMessage("⚡ Monster membuat mu panik! Waktu berkurang 50%!");
        break;
      case "Gempa Bumi":
        this.shakeScreen();
        this.timeRemaining = Math.floor(this.timeRemaining * 0.8);
        this.showMessage("🌋 Gempa bumi! Layar bergetar!");
        break;
      case "Sihir Kelam":
        this.timeRemaining = Math.floor(this.timeRemaining * 0.6);
        this.shuffleAnswerOptions();
        this.showMessage("🔮 Sihir kelam menggabungkan semua serangan!");
        break;
    }
  }

  shuffleAnswerOptions() {
    const options = document.querySelectorAll('.option-btn');
    const texts = Array.from(options).map(btn => btn.textContent);
    
    // Fisher-Yates shuffle
    for (let i = texts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [texts[i], texts[j]] = [texts[j], texts[i]];
    }
    
    options.forEach((btn, index) => {
      btn.textContent = texts[index];
    });
  }

  hideRandomOptions(count) {
    const options = Array.from(document.querySelectorAll('.option-btn'));
    const availableOptions = options.filter(btn => !btn.disabled);
    
    for (let i = 0; i < Math.min(count, availableOptions.length - 1); i++) {
      const randomIndex = Math.floor(Math.random() * availableOptions.length);
      const option = availableOptions.splice(randomIndex, 1)[0];
      option.style.opacity = '0.3';
      option.disabled = true;
    }
  }

  shakeScreen() {
    document.body.classList.add('shake');
    setTimeout(() => {
      document.body.classList.remove('shake');
    }, 500);
  }

  handleHintPowerup(question) {
    if (this.activePowerups.has('hint') || this.hasCharacterAutoHint()) {
      document.getElementById('hint-container').style.display = 'block';
      document.querySelector('.hint-text').textContent = 
        `💡 Petunjuk: ${question.explanation.split('.')[0]}...`;
    } else {
      document.getElementById('hint-container').style.display = 'none';
    }
  }

  hasCharacterAutoHint() {
    // Check if character has auto-hint skill for current subject
    if (this.selectedCharacter === 'tuanku' && this.currentSubject === 'bahasa_indonesia') {
      return true;
    }
    return false;
  }

  startQuestionTimer() {
    this.updateTimerDisplay();
    
    this.timer = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();
      
      if (this.timeRemaining <= 0) {
        this.handleTimeOut();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    document.getElementById('timer').textContent = this.timeRemaining;
    
    // Update timer bar
    const percentage = (this.timeRemaining / this.timeLimit) * 100;
    document.getElementById('question-timer-fill').style.width = `${percentage}%`;
    
    // Color coding
    const timerElement = document.getElementById('timer');
    if (this.timeRemaining <= 10) {
      timerElement.style.color = '#f44336';
    } else if (this.timeRemaining <= 20) {
      timerElement.style.color = '#ff9800';
    } else {
      timerElement.style.color = '#4caf50';
    }
  }

  selectAnswer(optionIndex) {
    if (this.timer) {
      clearInterval(this.timer);
    }

    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.disabled = true;
    });

    import('../data/questions.js').then(module => {
      const questions = module.QUESTIONS[this.currentLevel][this.currentSubject];
      const question = questions[this.currentQuestionIndex];
      
      this.processAnswer(optionIndex, question);
    });
  }

  processAnswer(selectedIndex, question) {
    const isCorrect = selectedIndex === question.correct;
    const selectedBtn = document.querySelector(`[data-option="${selectedIndex}"]`);
    const correctBtn = document.querySelector(`[data-option="${question.correct}"]`);

    // Visual feedback
    if (isCorrect) {
      selectedBtn.classList.add('correct');
      this.handleCorrectAnswer();
    } else {
      selectedBtn.classList.add('incorrect');
      correctBtn.classList.add('correct');
      this.handleWrongAnswer();
    }

    // Show explanation briefly, then proceed
    setTimeout(() => {
      this.hideModal('question-modal');
      this.proceedToNextQuestion();
    }, 2000);
  }

  handleCorrectAnswer() {
    this.correctStreak++;
    this.score += 10;
    
    // Damage monster
    let damage = 20;
    if (this.activePowerups.has('shield')) {
      // Shield doesn't affect attack damage, but could add other bonuses
      damage += 5;
    }
    
    this.damageMonster(damage);
    this.showMessage("⚔️ Serangan berhasil! Monster terkena damage!");

    // Check for power-up trigger
    this.checkPowerUpTrigger();
    
    this.updateUI();
  }

  handleWrongAnswer() {
    this.correctStreak = 0;
    
    // Take damage
    let damage = 15;
    if (this.activePowerups.has('shield')) {
      damage = Math.floor(damage * 0.5);
      this.showMessage("🛡️ Perisai mengurangi damage!");
    }
    
    this.damagePlayer(damage);
    this.showMessage("💥 Jawaban salah! Kamu terkena serangan monster!");
    
    this.updateUI();
  }

  handleTimeOut() {
    this.showMessage("⏰ Waktu habis! Monster menyerang!");
    this.handleWrongAnswer();
  }

  checkPowerUpTrigger() {
    if (this.correctStreak >= 3) {
      this.correctStreak = 0;
      this.activatePowerUp();
    }
  }

  activatePowerUp() {
    import('../data/characters.js').then(module => {
      const powerups = module.POWERUPS;
      const powerupTypes = Object.keys(powerups);
      const randomPowerup = powerupTypes[Math.floor(Math.random() * powerupTypes.length)];
      const powerup = powerups[randomPowerup];

      if (powerup.duration > 0) {
        this.activePowerups.set(randomPowerup, powerup.duration);
      } else if (randomPowerup === 'heal') {
        this.healPlayer(powerup.value || 25);
      }

      this.showMessage(`✨ Power-up aktif: ${powerup.name}!`);
      this.updatePowerupDisplay();
    });
  }

  damagePlayer(damage) {
    this.playerHP = Math.max(0, this.playerHP - damage);
    
    if (this.playerHP <= 0) {
      this.gameOver();
    }
  }

  damageMonster(damage) {
    this.monsterHP = Math.max(0, this.monsterHP - damage);
  }

  healPlayer(amount) {
    this.playerHP = Math.min(this.playerMaxHP, this.playerHP + amount);
  }

  proceedToNextQuestion() {
    this.currentQuestionIndex++;
    
    // Decrease powerup duration
    this.decreasePowerupDuration();
    
    if (this.currentQuestionIndex >= 5) {
      // Subject completed
      this.completeSubject();
    } else {
      // Next question in same subject
      setTimeout(() => {
        this.showNextQuestion();
      }, 1000);
    }
  }

  completeSubject() {
    this.currentSubjectIndex++;
    this.currentQuestionIndex = 0;
    
    if (this.currentSubjectIndex >= this.subjects.length) {
      // All subjects completed, show boss
      this.showBossScreen();
    } else {
      // Move to next subject
      setTimeout(() => {
        this.startSubjectRound();
      }, 1500);
    }
  }

  decreasePowerupDuration() {
    this.activePowerups.forEach((duration, powerup) => {
      if (duration > 0) {
        this.activePowerups.set(powerup, duration - 1);
        if (duration - 1 <= 0) {
          this.activePowerups.delete(powerup);
        }
      }
    });
    this.updatePowerupDisplay();
  }

  updatePowerupDisplay() {
    const container = document.getElementById('active-powerups');
    container.innerHTML = '';
    
    this.activePowerups.forEach((duration, powerup) => {
      const icon = document.createElement('div');
      icon.className = `powerup-icon powerup-${powerup}`;
      
      const powerupIcons = {
        shield: '🛡️',
        hint: '💡',
        heal: '❤️'
      };
      
      icon.textContent = powerupIcons[powerup] || '✨';
      icon.title = `${powerup} (${duration} pertanyaan tersisa)`;
      container.appendChild(icon);
    });
  }

  showBossScreen() {
    this.gameState = 'boss';
    this.showModal('boss-screen');
    
    // Update boss info
    import('../data/characters.js').then(module => {
      const boss = module.BOSSES[this.currentLevel];
      document.querySelector('.boss-name').textContent = boss.name;
      document.querySelector('.boss-avatar').textContent = boss.avatar;
      document.getElementById('boss-health-text').textContent = `${boss.hp}/${boss.hp}`;
    });
  }

  startBossFight() {
    this.hideModal('boss-screen');
    // Initialize boss fight logic
    this.initializeBossFight();
  }

  initializeBossFight() {
    // Boss fight uses mixed questions from BOSS_QUESTIONS
    import('../data/questions.js').then(module => {
      const bossQuestions = module.BOSS_QUESTIONS[this.currentLevel];
      if (bossQuestions && bossQuestions.length > 0) {
        this.currentBossQuestionIndex = 0;
        this.bossQuestions = bossQuestions;
        this.showBossQuestion();
      }
    });
  }

  showBossQuestion() {
    if (this.currentBossQuestionIndex >= this.bossQuestions.length) {
      this.completeBossFight();
      return;
    }

    const question = this.bossQuestions[this.currentBossQuestionIndex];
    this.displayQuestion(question);
  }

  completeBossFight() {
    // Boss defeated, level complete
    this.completeLevel();
  }

  completeLevel() {
    this.gameState = 'victory';
    this.saveProgress();
    this.showVictoryScreen();
  }

  showVictoryScreen() {
    document.getElementById('remaining-hp').textContent = this.playerHP;
    document.getElementById('final-score').textContent = this.score;
    
    const accuracy = ((this.score / (this.subjects.length * 5 * 10)) * 100).toFixed(1);
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    
    this.showModal('victory-screen');
  }

  gameOver() {
    this.gameState = 'gameover';
    this.showModal('gameover-screen');
  }

  nextLevel() {
    if (this.currentLevel < 6) {
      this.currentLevel++;
      this.hideModal('victory-screen');
      this.initializeLevel();
      this.startSubjectRound();
    } else {
      // Game completed
      this.showMessage("🎉 Selamat! Kamu telah menyelesaikan semua level!");
      this.backToMenu();
    }
  }

  retryLevel() {
    this.hideModal('gameover-screen');
    this.initializeLevel();
    this.startSubjectRound();
  }

  restartGame() {
    this.hideModal('victory-screen');
    this.backToMenu();
  }

  backToMenu() {
    this.hideModal('gameover-screen');
    this.hideModal('victory-screen');
    this.gameState = 'menu';
    this.showModal('start-screen');
    this.currentLevel = 1;
    this.selectedCharacter = null;
    
    // Reset UI
    document.querySelectorAll('.character-card').forEach(card => {
      card.classList.remove('selected');
    });
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    
    this.updateStartButton();
  }

  updateUI() {
    // Update health bars
    const playerHealthPercentage = (this.playerHP / this.playerMaxHP) * 100;
    const monsterHealthPercentage = (this.monsterHP / this.monsterMaxHP) * 100;
    
    document.getElementById('health-fill').style.width = `${playerHealthPercentage}%`;
    document.getElementById('health-text').textContent = `${this.playerHP}/${this.playerMaxHP}`;
    
    document.getElementById('monster-health-fill').style.width = `${monsterHealthPercentage}%`;
    document.getElementById('monster-health-text').textContent = `${this.monsterHP}/${this.monsterMaxHP}`;
    
    // Update score and level
    document.getElementById('score').textContent = this.score;
    document.getElementById('current-level').textContent = this.currentLevel;
  }

  saveProgress() {
    const progress = {
      unlockedLevel: Math.max(this.getUnlockedLevel(), this.currentLevel + 1),
      highScore: Math.max(this.getHighScore(), this.score),
      lastPlayed: new Date().toISOString()
    };
    
    localStorage.setItem('educationalGameProgress', JSON.stringify(progress));
  }

  loadProgress() {
    const progress = JSON.parse(localStorage.getItem('educationalGameProgress') || '{}');
    
    // Update level buttons based on progress
    document.querySelectorAll('.level-btn').forEach(btn => {
      const level = parseInt(btn.dataset.level);
      const unlockedLevel = progress.unlockedLevel || 1;
      
      if (level > unlockedLevel) {
        btn.disabled = true;
        btn.textContent = `🔒 Kelas ${level}`;
      }
    });
  }

  getHighScore() {
    const progress = JSON.parse(localStorage.getItem('educationalGameProgress') || '{}');
    return progress.highScore || 0;
  }

  showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
  }

  hideModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
  }

  showMessage(message) {
    // Create a temporary message display
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      z-index: 2000;
      font-weight: 600;
      font-size: 1.1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.parentNode.removeChild(messageEl);
      }
    }, 2000);
  }
}