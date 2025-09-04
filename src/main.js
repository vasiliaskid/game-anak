// Main entry point for the Educational Adventure Game

import { GameManager } from './game/GameManager.js';
import { PhaserGameEngine } from './game/PhaserGame.js';
import { AudioManager } from './utils/AudioManager.js';
import { StorageManager } from './utils/StorageManager.js';

class EducationalGame {
  constructor() {
    this.gameManager = new GameManager();
    this.phaserEngine = null;
    this.audioManager = new AudioManager();
    this.storageManager = new StorageManager();
    
    this.initialize();
  }

  async initialize() {
    try {
      // Initialize audio (requires user interaction)
      document.addEventListener('click', () => {
        this.audioManager.initialize();
      }, { once: true });

      // Initialize Phaser engine
      this.phaserEngine = new PhaserGameEngine(this.gameManager);
      
      // Load saved progress
      this.loadSavedProgress();
      
      // Setup additional game managers
      this.setupGameIntegration();
      
      console.log('🎮 Petualangan Pendidikan berhasil dimuat!');
      
    } catch (error) {
      console.error('Error initializing game:', error);
      this.showErrorMessage('Gagal memuat game. Silakan refresh halaman.');
    }
  }

  setupGameIntegration() {
    // Connect GameManager events with Phaser engine
    this.gameManager.onCorrectAnswer = () => {
      this.audioManager.playCorrectAnswer();
      this.phaserEngine.playAttackAnimation();
    };

    this.gameManager.onWrongAnswer = () => {
      this.audioManager.playWrongAnswer();
      this.phaserEngine.playDefenseAnimation();
    };

    this.gameManager.onPowerUp = () => {
      this.audioManager.playPowerUp();
    };

    this.gameManager.onLevelComplete = () => {
      this.audioManager.playVictory();
      this.phaserEngine.showVictoryEffect();
      this.saveGameProgress();
    };

    this.gameManager.onLevelChanged = (newLevel) => {
      this.phaserEngine.updateLevel(newLevel);
    };

    this.gameManager.onHeal = () => {
      this.audioManager.playHeal();
    };

    this.gameManager.onDamage = () => {
      this.audioManager.playDamage();
    };
  }

  loadSavedProgress() {
    const progress = this.storageManager.loadGameProgress();
    
    // Update UI based on saved progress
    this.updateProgressDisplay(progress);
    
    // Enable/disable level buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
      const level = parseInt(btn.dataset.level);
      if (level > progress.unlockedLevel) {
        btn.disabled = true;
        btn.classList.add('locked');
        btn.innerHTML = `🔒 Kelas ${level}`;
      }
    });
  }

  updateProgressDisplay(progress) {
    // Could add a progress display panel if needed
    const stats = this.storageManager.getPlayerStats();
    console.log('Player stats loaded:', stats);
  }

  saveGameProgress() {
    const gameData = {
      unlockedLevel: Math.max(this.storageManager.loadGameProgress().unlockedLevel, 
                             this.gameManager.currentLevel + 1),
      highScore: Math.max(this.storageManager.loadGameProgress().highScore, 
                         this.gameManager.score),
      lastPlayedLevel: this.gameManager.currentLevel,
      lastPlayedCharacter: this.gameManager.selectedCharacter
    };

    this.storageManager.saveGameProgress(gameData);
  }

  showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f44336;
      color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 9999;
      font-weight: 600;
      box-shadow: 0 4px 20px rgba(244, 67, 54, 0.5);
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }, 5000);
  }

  // Debug methods for development
  debugUnlockAllLevels() {
    this.storageManager.saveGameProgress({ unlockedLevel: 6 });
    this.loadSavedProgress();
    console.log('🔓 All levels unlocked for testing');
  }

  debugResetProgress() {
    this.storageManager.clearProgress();
    this.loadSavedProgress();
    console.log('🗑️ Progress reset');
  }

  debugShowStats() {
    const stats = this.storageManager.getPlayerStats();
    console.table(stats);
  }
}

// Enhanced GameManager with additional methods
class EnhancedGameManager extends GameManager {
  constructor() {
    super();
    this.onCorrectAnswer = null;
    this.onWrongAnswer = null;
    this.onPowerUp = null;
    this.onLevelComplete = null;
    this.onLevelChanged = null;
    this.onHeal = null;
    this.onDamage = null;
  }

  handleCorrectAnswer() {
    super.handleCorrectAnswer();
    if (this.onCorrectAnswer) this.onCorrectAnswer();
  }

  handleWrongAnswer() {
    super.handleWrongAnswer();
    if (this.onWrongAnswer) this.onWrongAnswer();
  }

  activatePowerUp() {
    super.activatePowerUp();
    if (this.onPowerUp) this.onPowerUp();
  }

  completeLevel() {
    super.completeLevel();
    if (this.onLevelComplete) this.onLevelComplete();
  }

  healPlayer(amount) {
    super.healPlayer(amount);
    if (this.onHeal) this.onHeal();
  }

  damagePlayer(damage) {
    super.damagePlayer(damage);
    if (this.onDamage) this.onDamage();
  }

  nextLevel() {
    super.nextLevel();
    if (this.onLevelChanged) this.onLevelChanged(this.currentLevel);
  }
}

// Replace the GameManager in main with enhanced version
GameManager.prototype = EnhancedGameManager.prototype;

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.educationalGame = new EducationalGame();
  
  // Global debug functions for development
  window.debugGame = {
    unlockAll: () => window.educationalGame.debugUnlockAllLevels(),
    resetProgress: () => window.educationalGame.debugResetProgress(),
    showStats: () => window.educationalGame.debugShowStats()
  };
  
  console.log('🎓 Petualangan Pendidikan Ready!');
  console.log('🔧 Debug commands: window.debugGame.unlockAll(), resetProgress(), showStats()');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause game when page is hidden
    if (window.educationalGame?.audioManager) {
      window.educationalGame.audioManager.stopBackgroundMusic();
    }
  } else {
    // Resume when page is visible
    if (window.educationalGame?.audioManager && window.educationalGame.gameManager.gameState === 'playing') {
      window.educationalGame.audioManager.playBackgroundMusic();
    }
  }
});

// PWA Support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}