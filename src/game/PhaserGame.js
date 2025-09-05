// Phaser Game Engine Integration

import Phaser from 'phaser';

export class MainGameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainGameScene' });
    this.gameManager = null;
    this.castle = null;
    this.player = null;
    this.monster = null;
    this.background = null;
  }

  init(data) {
    this.gameManager = data.gameManager;
  }

  preload() {
    // Create simple colored rectangles as placeholders for sprites
    this.load.image('castle1', this.createCastleTexture('#FFD700'));
    this.load.image('castle2', this.createCastleTexture('#8B4513'));
    this.load.image('castle3', this.createCastleTexture('#696969'));
    this.load.image('castle4', this.createCastleTexture('#F5DEB3'));
    this.load.image('castle5', this.createCastleTexture('#DAA520'));
    this.load.image('castle6', this.createCastleTexture('#FFD700'));
    
    this.load.image('hero', this.createHeroTexture());
    this.load.image('monster', this.createMonsterTexture());
    this.load.image('boss', this.createBossTexture());
  }

  createCastleTexture(color) {
    // Create a data URL for a simple castle shape
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    
    // Castle base
    ctx.fillStyle = color;
    ctx.fillRect(20, 50, 160, 100);
    
    // Castle towers
    ctx.fillRect(0, 30, 40, 120);
    ctx.fillRect(80, 20, 40, 130);
    ctx.fillRect(160, 30, 40, 120);
    
    // Castle details
    ctx.fillStyle = '#654321';
    ctx.fillRect(85, 80, 30, 70);  // Door
    
    ctx.fillStyle = '#000';
    ctx.fillRect(30, 60, 8, 8);   // Windows
    ctx.fillRect(50, 60, 8, 8);
    ctx.fillRect(30, 80, 8, 8);
    ctx.fillRect(50, 80, 8, 8);
    
    return canvas.toDataURL();
  }

  createHeroTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 60;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    
    // Simple hero figure
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(20, 10, 20, 30);  // Body
    
    ctx.fillStyle = '#FFC107';
    ctx.beginPath();
    ctx.arc(30, 25, 8, 0, Math.PI * 2);  // Head
    ctx.fill();
    
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(15, 45, 30, 25);  // Cape
    
    return canvas.toDataURL();
  }

  createMonsterTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 80;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    
    // Monster body
    ctx.fillStyle = '#E91E63';
    ctx.fillRect(15, 20, 50, 60);
    
    // Monster head
    ctx.fillStyle = '#AD1457';
    ctx.beginPath();
    ctx.arc(40, 35, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Monster eyes
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(32, 28, 4, 4);
    ctx.fillRect(44, 28, 4, 4);
    
    return canvas.toDataURL();
  }

  createBossTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 120;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    
    // Boss body (larger)
    ctx.fillStyle = '#9C27B0';
    ctx.fillRect(20, 40, 80, 90);
    
    // Boss head
    ctx.fillStyle = '#7B1FA2';
    ctx.beginPath();
    ctx.arc(60, 55, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Boss crown
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(40, 30, 40, 15);
    
    return canvas.toDataURL();
  }

  create() {
    // Background
    this.background = this.add.graphics();
    this.updateBackground();
    
    // Castle
    this.castle = this.add.image(600, 400, `castle${this.gameManager.currentLevel}`);
    this.castle.setScale(1.2);
    
    // Player hero
    this.player = this.add.image(150, 400, 'hero');
    this.player.setScale(1.5);
    
    // Monster
    this.monster = this.add.image(450, 350, 'monster');
    this.monster.setScale(1.3);
    
    // Add some particle effects
    this.particles = this.add.particles({
      x: 400,
      y: 100,
      scale: { start: 0.1, end: 0.3 },
      speed: 20,
      lifespan: 3000,
      blendMode: 'ADD'
    });

    // Animation tweens
    this.setupAnimations();
  }

  setupAnimations() {
    // Breathing animation for characters
    this.tweens.add({
      targets: this.player,
      scaleY: 1.6,
      duration: 2000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.tweens.add({
      targets: this.monster,
      scaleX: 1.4,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // Castle ambient animation
    this.tweens.add({
      targets: this.castle,
      y: 390,
      duration: 3000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  updateBackground() {
    // Gradient background based on level
    const colors = [
      [0x87CEEB, 0x98FB98], // Level 1: Sky blue to light green
      [0xFF7F50, 0xFFD700], // Level 2: Coral to gold
      [0xDDA0DD, 0xE6E6FA], // Level 3: Plum to lavender
      [0xF0E68C, 0xFFE4B5], // Level 4: Khaki to moccasin
      [0xCD853F, 0xD2691E], // Level 5: Peru to chocolate
      [0x4B0082, 0x8A2BE2]  // Level 6: Indigo to blue violet
    ];
    
    const [color1, color2] = colors[this.gameManager.currentLevel - 1] || colors[0];
    
    this.background.clear();
    this.background.fillGradientStyle(color1, color1, color2, color2, 1);
    this.background.fillRect(0, 0, 800, 600);
  }

  playAttackAnimation() {
    // Player attacks monster
    this.tweens.add({
      targets: this.player,
      x: 350,
      duration: 300,
      ease: 'Power2',
      onComplete: () => {
        // Monster hit effect
        this.monster.setTint(0xff0000);
        this.cameras.main.shake(100, 0.01);
        
        setTimeout(() => {
          this.monster.clearTint();
          this.tweens.add({
            targets: this.player,
            x: 150,
            duration: 300,
            ease: 'Power2'
          });
        }, 200);
      }
    });
  }

  playDefenseAnimation() {
    // Monster attacks player
    this.tweens.add({
      targets: this.monster,
      x: 250,
      duration: 300,
      ease: 'Power2',
      onComplete: () => {
        // Player hit effect
        this.player.setTint(0xff0000);
        this.cameras.main.shake(150, 0.02);
        
        setTimeout(() => {
          this.player.clearTint();
          this.tweens.add({
            targets: this.monster,
            x: 450,
            duration: 300,
            ease: 'Power2'
          });
        }, 200);
      }
    });
  }

  update() {
    // Update game visuals based on game state
    if (this.gameManager.gameState === 'playing') {
      // Update monster visibility based on HP
      const monsterAlpha = this.gameManager.monsterHP / this.gameManager.monsterMaxHP;
      this.monster.setAlpha(Math.max(0.3, monsterAlpha));
      
      // Update castle glow based on progress
      const progress = (this.gameManager.currentSubjectIndex + 1) / this.gameManager.subjects.length;
      const glowIntensity = 0.8 + (progress * 0.4);
      this.castle.setAlpha(glowIntensity);
    }
  }

  updateLevel(newLevel) {
    // Update visuals for new level
    this.castle.setTexture(`castle${newLevel}`);
    this.updateBackground();
    
    // Reset monster HP visualization
    this.monster.setAlpha(1);
    this.monster.clearTint();
  }

  showVictoryEffect() {
    // Fireworks effect
    this.add.particles({
      x: { min: 100, max: 700 },
      y: { min: 100, max: 200 },
      scale: { start: 0.3, end: 0.1 },
      speed: { min: 50, max: 150 },
      lifespan: 2000,
      quantity: 30,
      blendMode: 'ADD'
    });
    
    // Castle celebration
    this.tweens.add({
      targets: this.castle,
      scaleX: 1.3,
      scaleY: 1.3,
      duration: 500,
      yoyo: true,
      ease: 'Bounce.easeInOut'
    });
  }

  destroy() {
    if (this.game) {
      this.game.destroy(true);
    }
  }
}

export class PhaserGameEngine {
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-canvas',
      backgroundColor: '#1a1a2e',
      scene: MainGameScene,
      physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
      }
    };
    
    this.game = new Phaser.Game(this.config);
    this.mainScene = null;
  }

  init(gameManager) {
    this.game.events.once('ready', () => {
      this.mainScene = this.game.scene.getScene('MainGameScene');
      this.mainScene.init({ gameManager });
    });
  }

  playAttackAnimation() {
    if (this.mainScene) {
      this.mainScene.playAttackAnimation();
    }
  }

  playDefenseAnimation() {
    if (this.mainScene) {
      this.mainScene.playDefenseAnimation();
    }
  }

  updateLevel(newLevel) {
    if (this.mainScene) {
      this.mainScene.updateLevel(newLevel);
    }
  }

  showVictoryEffect() {
    if (this.mainScene) {
      this.mainScene.showVictoryEffect();
    }
  }

  destroy() {
    if (this.game) {
      this.game.destroy(true);
    }
  }
}