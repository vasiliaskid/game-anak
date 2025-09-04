// Storage Manager for saving and loading game progress

export class StorageManager {
  constructor() {
    this.storageKey = 'educationalGameData';
  }

  saveGameProgress(data) {
    try {
      const gameData = {
        ...this.loadGameProgress(),
        ...data,
        lastSaved: new Date().toISOString()
      };
      
      localStorage.setItem(this.storageKey, JSON.stringify(gameData));
      return true;
    } catch (error) {
      console.error('Failed to save game progress:', error);
      return false;
    }
  }

  loadGameProgress() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : this.getDefaultProgress();
    } catch (error) {
      console.error('Failed to load game progress:', error);
      return this.getDefaultProgress();
    }
  }

  getDefaultProgress() {
    return {
      unlockedLevel: 1,
      highScore: 0,
      totalGamesPlayed: 0,
      totalCorrectAnswers: 0,
      totalQuestionsAnswered: 0,
      subjectStats: {
        pkn: { correct: 0, total: 0 },
        bahasa_indonesia: { correct: 0, total: 0 },
        matematika: { correct: 0, total: 0 },
        seni_budaya: { correct: 0, total: 0 },
        penjasorkes: { correct: 0, total: 0 },
        bahasa_inggris: { correct: 0, total: 0 },
        ipa: { correct: 0, total: 0 },
        ips: { correct: 0, total: 0 }
      },
      achievements: [],
      settings: {
        musicVolume: 0.3,
        sfxVolume: 0.5,
        autoHints: false
      },
      lastSaved: new Date().toISOString()
    };
  }

  updateSubjectStats(subject, isCorrect) {
    const progress = this.loadGameProgress();
    
    if (!progress.subjectStats[subject]) {
      progress.subjectStats[subject] = { correct: 0, total: 0 };
    }
    
    progress.subjectStats[subject].total++;
    progress.totalQuestionsAnswered++;
    
    if (isCorrect) {
      progress.subjectStats[subject].correct++;
      progress.totalCorrectAnswers++;
    }
    
    this.saveGameProgress(progress);
  }

  unlockLevel(level) {
    const progress = this.loadGameProgress();
    progress.unlockedLevel = Math.max(progress.unlockedLevel, level);
    this.saveGameProgress(progress);
  }

  updateHighScore(score) {
    const progress = this.loadGameProgress();
    if (score > progress.highScore) {
      progress.highScore = score;
      this.saveGameProgress(progress);
      return true; // New high score
    }
    return false;
  }

  incrementGamesPlayed() {
    const progress = this.loadGameProgress();
    progress.totalGamesPlayed++;
    this.saveGameProgress(progress);
  }

  getSubjectAccuracy(subject) {
    const progress = this.loadGameProgress();
    const stats = progress.subjectStats[subject];
    
    if (!stats || stats.total === 0) return 0;
    return (stats.correct / stats.total * 100).toFixed(1);
  }

  getTotalAccuracy() {
    const progress = this.loadGameProgress();
    if (progress.totalQuestionsAnswered === 0) return 0;
    return (progress.totalCorrectAnswers / progress.totalQuestionsAnswered * 100).toFixed(1);
  }

  checkAchievements(gameStats) {
    const progress = this.loadGameProgress();
    const newAchievements = [];

    // Define achievements
    const achievements = [
      {
        id: 'first_win',
        name: 'Penakluk Pertama',
        description: 'Menyelesaikan level pertama',
        condition: () => gameStats.level >= 1 && gameStats.victory
      },
      {
        id: 'perfect_subject',
        name: 'Master Mata Pelajaran',
        description: 'Menjawab benar semua soal dalam satu mata pelajaran',
        condition: () => gameStats.perfectSubject
      },
      {
        id: 'streak_master',
        name: 'Raja Kombo',
        description: 'Jawab benar 5 soal berturut-turut',
        condition: () => gameStats.maxStreak >= 5
      },
      {
        id: 'speed_demon',
        name: 'Kilat Cerdas',
        description: 'Menjawab benar dalam 5 detik',
        condition: () => gameStats.fastestAnswer <= 5
      },
      {
        id: 'survivor',
        name: 'Penyintas Sejati',
        description: 'Menyelesaikan level dengan HP di bawah 20',
        condition: () => gameStats.victory && gameStats.finalHP < 20
      }
    ];

    achievements.forEach(achievement => {
      if (!progress.achievements.includes(achievement.id) && achievement.condition()) {
        progress.achievements.push(achievement.id);
        newAchievements.push(achievement);
      }
    });

    if (newAchievements.length > 0) {
      this.saveGameProgress(progress);
    }

    return newAchievements;
  }

  exportProgress() {
    const progress = this.loadGameProgress();
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'petualangan-pendidikan-progress.json';
    link.click();
  }

  importProgress(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          
          // Validate imported data structure
          if (this.validateProgressData(importedData)) {
            localStorage.setItem(this.storageKey, JSON.stringify(importedData));
            resolve(importedData);
          } else {
            reject(new Error('Invalid progress file format'));
          }
        } catch (error) {
          reject(error);
        }
      };
      
      reader.readAsText(file);
    });
  }

  validateProgressData(data) {
    const required = ['unlockedLevel', 'highScore', 'subjectStats'];
    return required.every(key => key in data) && 
           typeof data.unlockedLevel === 'number' &&
           typeof data.highScore === 'number' &&
           typeof data.subjectStats === 'object';
  }

  clearProgress() {
    if (confirm('Apakah kamu yakin ingin menghapus semua progress? Tindakan ini tidak dapat dibatalkan.')) {
      localStorage.removeItem(this.storageKey);
      return true;
    }
    return false;
  }

  getPlayerStats() {
    const progress = this.loadGameProgress();
    
    return {
      totalGamesPlayed: progress.totalGamesPlayed || 0,
      totalCorrectAnswers: progress.totalCorrectAnswers || 0,
      totalQuestionsAnswered: progress.totalQuestionsAnswered || 0,
      accuracy: this.getTotalAccuracy(),
      highScore: progress.highScore || 0,
      unlockedLevel: progress.unlockedLevel || 1,
      achievements: progress.achievements || [],
      favoriteSubject: this.getFavoriteSubject(progress.subjectStats),
      weakestSubject: this.getWeakestSubject(progress.subjectStats)
    };
  }

  getFavoriteSubject(subjectStats) {
    let bestAccuracy = 0;
    let favoriteSubject = 'matematika';
    
    Object.entries(subjectStats).forEach(([subject, stats]) => {
      if (stats.total > 0) {
        const accuracy = stats.correct / stats.total;
        if (accuracy > bestAccuracy) {
          bestAccuracy = accuracy;
          favoriteSubject = subject;
        }
      }
    });
    
    return favoriteSubject;
  }

  getWeakestSubject(subjectStats) {
    let worstAccuracy = 1;
    let weakestSubject = 'matematika';
    
    Object.entries(subjectStats).forEach(([subject, stats]) => {
      if (stats.total > 0) {
        const accuracy = stats.correct / stats.total;
        if (accuracy < worstAccuracy) {
          worstAccuracy = accuracy;
          weakestSubject = subject;
        }
      }
    });
    
    return weakestSubject;
  }
}