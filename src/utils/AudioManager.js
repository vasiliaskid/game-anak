// Audio Manager for game sounds and music

export class AudioManager {
  constructor() {
    this.sounds = new Map();
    this.musicVolume = 0.3;
    this.sfxVolume = 0.5;
    this.isInitialized = false;
    this.audioContext = null;
  }

  async initialize() {
    if (this.isInitialized) return;

    try {
      // Initialize Web Audio API
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create sound effects using Web Audio API
      this.createSoundEffects();
      this.isInitialized = true;
    } catch (error) {
      console.log('Audio initialization failed:', error);
    }
  }

  createSoundEffects() {
    // Create sound effects using oscillators
    this.sounds.set('correct', this.createTone([523.25, 659.25, 783.99], 0.3)); // C-E-G chord
    this.sounds.set('wrong', this.createTone([196, 164.81], 0.5)); // G-E flat
    this.sounds.set('powerup', this.createTone([440, 554.37, 659.25, 880], 0.4)); // Power-up chord
    this.sounds.set('victory', this.createTone([523.25, 659.25, 783.99, 1046.5], 0.6)); // Victory fanfare
    this.sounds.set('damage', this.createNoise(0.2, 200)); // Damage noise
    this.sounds.set('heal', this.createTone([349.23, 440, 523.25], 0.3)); // Healing chord
  }

  createTone(frequencies, duration) {
    return () => {
      if (!this.audioContext) return;

      frequencies.forEach((freq, index) => {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.sfxVolume * 0.3, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime + index * 0.1);
        oscillator.stop(this.audioContext.currentTime + duration + index * 0.1);
      });
    };
  }

  createNoise(duration, frequency = 100) {
    return () => {
      if (!this.audioContext) return;

      const bufferSize = this.audioContext.sampleRate * duration;
      const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.sin(i / frequency);
      }
      
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      gainNode.gain.setValueAtTime(this.sfxVolume * 0.2, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
      
      source.start();
    };
  }

  play(soundName) {
    if (!this.isInitialized) {
      this.initialize();
      return;
    }

    const sound = this.sounds.get(soundName);
    if (sound) {
      sound();
    }
  }

  playCorrectAnswer() {
    this.play('correct');
  }

  playWrongAnswer() {
    this.play('wrong');
  }

  playPowerUp() {
    this.play('powerup');
  }

  playVictory() {
    this.play('victory');
  }

  playDamage() {
    this.play('damage');
  }

  playHeal() {
    this.play('heal');
  }

  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
  }

  setSFXVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
  }

  // Background music using Web Audio API
  playBackgroundMusic() {
    if (!this.audioContext) return;

    // Simple background music with oscillators
    const melodyNotes = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88]; // C major scale
    let noteIndex = 0;
    
    const playNote = () => {
      if (!this.audioContext) return;
      
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.value = melodyNotes[noteIndex];
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(this.musicVolume * 0.1, this.audioContext.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
      
      oscillator.start();
      oscillator.stop(this.audioContext.currentTime + 1);
      
      noteIndex = (noteIndex + 1) % melodyNotes.length;
    };

    // Play notes at intervals
    this.musicInterval = setInterval(playNote, 1000);
  }

  stopBackgroundMusic() {
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  // User interaction required to enable audio
  async enableAudio() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }
}