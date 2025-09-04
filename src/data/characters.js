// Character data for hero selection

export const CHARACTERS = {
  gatotkaca: {
    name: "Gatotkaca",
    avatar: "⚔️",
    description: "Ksatria sakti dari Jawa",
    skills: {
      matematika: {
        name: "Kekuatan Angka",
        description: "Tambah waktu +10 detik untuk soal Matematika",
        effect: "time_bonus",
        value: 10
      }
    },
    stats: {
      strength: 8,
      intelligence: 7,
      defense: 9
    }
  },
  cutnyakdien: {
    name: "Cut Nyak Dien",
    avatar: "🛡️",
    description: "Pahlawan wanita dari Aceh",
    skills: {
      pkn: {
        name: "Perisai Keadilan",
        description: "Shield PKn mengurangi damage 50% lebih banyak",
        effect: "enhanced_shield",
        value: 0.5
      }
    },
    stats: {
      strength: 7,
      intelligence: 9,
      defense: 8
    }
  },
  tuanku: {
    name: "Tuanku Imam Bonjol",
    avatar: "📚",
    description: "Ulama dan pahlawan dari Sumatra Barat",
    skills: {
      bahasa_indonesia: {
        name: "Cahaya Hikmat",
        description: "Auto-hint untuk soal Bahasa Indonesia",
        effect: "auto_hint",
        value: 1
      }
    },
    stats: {
      strength: 6,
      intelligence: 10,
      defense: 7
    }
  }
};

export const MONSTERS = {
  1: {
    name: "Tuyul Nakal",
    avatar: "👹",
    description: "Monster kastil yang suka mencuri jawaban",
    hp: 80,
    attack: 15,
    defense: 5,
    specialAttack: {
      name: "Curi Waktu",
      description: "Mengurangi 5 detik waktu jawab",
      chance: 0.2
    }
  },
  2: {
    name: "Leak Lucu",
    avatar: "👻",
    description: "Hantu Bali yang mengacaukan konsentrasi",
    hp: 100,
    attack: 18,
    defense: 7,
    specialAttack: {
      name: "Bingung",
      description: "Acak urutan pilihan jawaban",
      chance: 0.25
    }
  },
  3: {
    name: "Kuntilanak Imut",
    avatar: "👺",
    description: "Hantu perempuan yang menggoda dengan suara",
    hp: 120,
    attack: 20,
    defense: 8,
    specialAttack: {
      name: "Suara Menggoda",
      description: "Mengurangi 2 pilihan jawaban",
      chance: 0.3
    }
  },
  4: {
    name: "Pocong Berlompat",
    avatar: "🧟",
    description: "Hantu yang membuat pemain terburu-buru",
    hp: 140,
    attack: 22,
    defense: 10,
    specialAttack: {
      name: "Lompat Panik",
      description: "Waktu jawab dikurangi 50%",
      chance: 0.25
    }
  },
  5: {
    name: "Buto Ijo",
    avatar: "👹",
    description: "Raksasa hijau yang kuat dari cerita rakyat",
    hp: 160,
    attack: 25,
    defense: 12,
    specialAttack: {
      name: "Gempa Bumi",
      description: "Layar bergetar dan mengurangi fokus",
      chance: 0.3
    }
  },
  6: {
    name: "Rangda",
    avatar: "😈",
    description: "Ratu iblis dari Bali yang sangat kuat",
    hp: 180,
    attack: 28,
    defense: 15,
    specialAttack: {
      name: "Sihir Kelam",
      description: "Kombinasi semua serangan khusus",
      chance: 0.35
    }
  }
};

export const BOSSES = {
  1: {
    name: "Raja Tuyul",
    avatar: "👑",
    hp: 150,
    attack: 20,
    defense: 8,
    specialAttacks: [
      {
        name: "Serangan Bayangan",
        description: "Mengurangi HP pemain 25",
        chance: 0.3
      },
      {
        name: "Kabut Kebingungan", 
        description: "Acak semua pilihan jawaban",
        chance: 0.25
      }
    ]
  },
  2: {
    name: "Maharaja Leak",
    avatar: "👹",
    hp: 200,
    attack: 25,
    defense: 10,
    specialAttacks: [
      {
        name: "Ilusi Ganda",
        description: "Menampilkan 2 pertanyaan sekaligus",
        chance: 0.25
      }
    ]
  },
  3: {
    name: "Ratu Kuntilanak",
    avatar: "👸",
    hp: 250,
    attack: 30,
    defense: 12,
    specialAttacks: [
      {
        name: "Pesona Mematikan",
        description: "Membalik jawaban benar jadi salah",
        chance: 0.2
      }
    ]
  },
  4: {
    name: "Kaiser Pocong",
    avatar: "⚡",
    hp: 300,
    attack: 35,
    defense: 15,
    specialAttacks: [
      {
        name: "Temporal Distortion",
        description: "Waktu berjalan 2x lebih cepat",
        chance: 0.3
      }
    ]
  },
  5: {
    name: "Buto Ijo Supreme",
    avatar: "🌪️",
    hp: 350,
    attack: 40,
    defense: 18,
    specialAttacks: [
      {
        name: "Earthquake Slam",
        description: "Screen shake + mengurangi semua pilihan menjadi 2",
        chance: 0.35
      }
    ]
  },
  6: {
    name: "Maharani Rangda",
    avatar: "🔥",
    hp: 400,
    attack: 45,
    defense: 20,
    specialAttacks: [
      {
        name: "Dark Magic Supremacy",
        description: "Kombinasi semua serangan boss sebelumnya",
        chance: 0.4
      }
    ]
  }
};

export const POWERUPS = {
  shield: {
    name: "Perisai Penjasorkes",
    icon: "🛡️",
    description: "Mengurangi damage monster sebesar 50%",
    duration: 3, // questions
    subject: "penjasorkes"
  },
  hint: {
    name: "Petunjuk Bahasa Inggris",
    icon: "💡",
    description: "Menampilkan petunjuk untuk jawaban",
    duration: 1, // questions
    subject: "bahasa_inggris"
  },
  heal: {
    name: "Artefak Seni Budaya",
    icon: "❤️",
    description: "Menambah HP pemain sebesar 25",
    duration: 0, // instant effect
    subject: "seni_budaya"
  }
};

export const CASTLE_THEMES = {
  1: {
    name: "Kastil Pancasila",
    background: "#FFD700",
    description: "Kastil emas yang menjaga nilai-nilai Pancasila"
  },
  2: {
    name: "Benteng Majapahit",
    background: "#8B4513",
    description: "Benteng kerajaan yang menjaga warisan budaya"
  },
  3: {
    name: "Istana Borobudur",
    background: "#696969",
    description: "Istana batu yang penuh dengan kebijaksanaan"
  },
  4: {
    name: "Candi Prambanan",
    background: "#F5DEB3",
    description: "Candi megah yang menyimpan ilmu pengetahuan"
  },
  5: {
    name: "Keraton Yogyakarta",
    background: "#DAA520",
    description: "Istana raja yang kaya akan budaya Jawa"
  },
  6: {
    name: "Istana Emas Nusantara",
    background: "linear-gradient(45deg, #FFD700, #FFA500)",
    description: "Istana legendaris penjaga semua ilmu"
  }
};