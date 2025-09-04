// Educational Game Questions Database
// 240 questions total: 8 subjects × 5 questions × 6 levels

export const QUESTIONS = {
  // Level 1 (Kelas 1)
  1: {
    pkn: [
      {
        question: "Apa lambang negara Indonesia?",
        options: ["Garuda Pancasila", "Bendera Merah Putih", "Bintang", "Bulan"],
        correct: 0,
        explanation: "Garuda Pancasila adalah lambang negara Indonesia yang melambangkan Pancasila."
      },
      {
        question: "Berapa banyak sila dalam Pancasila?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Pancasila memiliki 5 sila yang menjadi dasar negara Indonesia."
      },
      {
        question: "Warna bendera Indonesia adalah?",
        options: ["Merah Biru", "Merah Putih", "Putih Biru", "Hijau Putih"],
        correct: 1,
        explanation: "Bendera Indonesia berwarna Merah Putih."
      },
      {
        question: "Hari kemerdekaan Indonesia adalah tanggal?",
        options: ["17 Agustus", "17 Juli", "17 September", "17 Juni"],
        correct: 0,
        explanation: "Indonesia merdeka pada tanggal 17 Agustus 1945."
      },
      {
        question: "Siapa presiden pertama Indonesia?",
        options: ["Suharto", "Soekarno", "Habibie", "SBY"],
        correct: 1,
        explanation: "Ir. Soekarno adalah presiden pertama Indonesia."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Huruf pertama dalam alfabet adalah?",
        options: ["B", "A", "C", "D"],
        correct: 1,
        explanation: "Huruf A adalah huruf pertama dalam alfabet."
      },
      {
        question: "Kata 'kucing' memiliki berapa suku kata?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Kata 'kucing' memiliki 2 suku kata: ku-cing."
      },
      {
        question: "Lawan kata dari 'besar' adalah?",
        options: ["Tinggi", "Kecil", "Luas", "Panjang"],
        correct: 1,
        explanation: "Lawan kata dari 'besar' adalah 'kecil'."
      },
      {
        question: "Huruf vokal yang pertama adalah?",
        options: ["A", "I", "U", "E"],
        correct: 0,
        explanation: "A adalah huruf vokal yang pertama dalam urutan A, I, U, E, O."
      },
      {
        question: "Kata 'rumah' termasuk kata?",
        options: ["Kerja", "Sifat", "Benda", "Keterangan"],
        correct: 2,
        explanation: "Kata 'rumah' adalah kata benda karena menunjukkan nama benda."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 2 + 3?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "2 + 3 = 5"
      },
      {
        question: "Angka setelah 7 adalah?",
        options: ["6", "8", "9", "10"],
        correct: 1,
        explanation: "Urutan angka: 7, 8, 9, 10..."
      },
      {
        question: "Berapa hasil dari 10 - 5?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "10 - 5 = 5"
      },
      {
        question: "Angka mana yang paling besar?",
        options: ["3", "7", "5", "2"],
        correct: 1,
        explanation: "7 adalah angka terbesar di antara pilihan."
      },
      {
        question: "Berapa hasil dari 4 + 4?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "4 + 4 = 8"
      }
    ],
    seni_budaya: [
      {
        question: "Warna primer adalah?",
        options: ["Hijau, Ungu, Orange", "Merah, Kuning, Biru", "Hitam, Putih, Abu", "Pink, Coklat, Silver"],
        correct: 1,
        explanation: "Warna primer adalah merah, kuning, dan biru."
      },
      {
        question: "Alat musik tradisional dari Jawa adalah?",
        options: ["Angklung", "Gamelan", "Sasando", "Tifa"],
        correct: 1,
        explanation: "Gamelan adalah alat musik tradisional dari Jawa."
      },
      {
        question: "Tarian dari Bali yang terkenal adalah?",
        options: ["Saman", "Kecak", "Tor-tor", "Jaipong"],
        correct: 1,
        explanation: "Tari Kecak adalah tarian tradisional terkenal dari Bali."
      },
      {
        question: "Batik berasal dari daerah?",
        options: ["Sumatra", "Jawa", "Kalimantan", "Papua"],
        correct: 1,
        explanation: "Batik berasal dari Jawa dan menjadi warisan budaya Indonesia."
      },
      {
        question: "Wayang kulit berasal dari?",
        options: ["Bali", "Jawa", "Sumatra", "Lombok"],
        correct: 1,
        explanation: "Wayang kulit adalah seni tradisional dari Jawa."
      }
    ],
    penjasorkes: [
      {
        question: "Berapa kali kita harus mencuci tangan dalam sehari?",
        options: ["2 kali", "5 kali", "Sesering mungkin", "1 kali"],
        correct: 2,
        explanation: "Mencuci tangan sebaiknya dilakukan sesering mungkin, terutama sebelum makan dan setelah bermain."
      },
      {
        question: "Makanan yang baik untuk kesehatan adalah?",
        options: ["Gorengan", "Sayur dan Buah", "Permen", "Es krim"],
        correct: 1,
        explanation: "Sayur dan buah mengandung vitamin yang baik untuk kesehatan."
      },
      {
        question: "Berapa jam tidur yang baik untuk anak?",
        options: ["5 jam", "8-10 jam", "12 jam", "15 jam"],
        correct: 1,
        explanation: "Anak memerlukan 8-10 jam tidur untuk pertumbuhan yang sehat."
      },
      {
        question: "Olahraga apa yang baik untuk jantung?",
        options: ["Berlari", "Duduk", "Tidur", "Menonton TV"],
        correct: 0,
        explanation: "Berlari adalah olahraga kardio yang baik untuk kesehatan jantung."
      },
      {
        question: "Kapan sebaiknya kita minum air?",
        options: ["Hanya saat haus", "Sesering mungkin", "Hanya pagi", "Hanya malam"],
        correct: 1,
        explanation: "Minum air putih sesering mungkin penting untuk menjaga tubuh tetap terhidrasi."
      }
    ],
    bahasa_inggris: [
      {
        question: "How do you say 'kucing' in English?",
        options: ["Dog", "Cat", "Bird", "Fish"],
        correct: 1,
        explanation: "'Cat' means kucing in English."
      },
      {
        question: "What color is 'merah' in English?",
        options: ["Blue", "Green", "Red", "Yellow"],
        correct: 2,
        explanation: "'Red' means merah in English."
      },
      {
        question: "How do you say 'satu' in English?",
        options: ["Two", "One", "Three", "Four"],
        correct: 1,
        explanation: "'One' means satu in English."
      },
      {
        question: "What is 'selamat pagi' in English?",
        options: ["Good night", "Good morning", "Good afternoon", "Goodbye"],
        correct: 1,
        explanation: "'Good morning' means selamat pagi in English."
      },
      {
        question: "How do you say 'rumah' in English?",
        options: ["School", "House", "Car", "Tree"],
        correct: 1,
        explanation: "'House' means rumah in English."
      }
    ],
    ipa: [
      {
        question: "Matahari terbit dari arah?",
        options: ["Barat", "Timur", "Utara", "Selatan"],
        correct: 1,
        explanation: "Matahari terbit dari arah timur dan tenggelam di arah barat."
      },
      {
        question: "Air berubah menjadi es karena?",
        options: ["Dipanaskan", "Didinginkan", "Dibiarkan", "Diaduk"],
        correct: 1,
        explanation: "Air berubah menjadi es karena didinginkan hingga membeku."
      },
      {
        question: "Hewan yang bisa terbang adalah?",
        options: ["Kucing", "Ikan", "Burung", "Sapi"],
        correct: 2,
        explanation: "Burung memiliki sayap sehingga bisa terbang."
      },
      {
        question: "Tanaman memerlukan apa untuk tumbuh?",
        options: ["Air dan sinar matahari", "Es", "Suara", "Angin kencang"],
        correct: 0,
        explanation: "Tanaman memerlukan air dan sinar matahari untuk proses fotosintesis."
      },
      {
        question: "Bagian tubuh untuk melihat adalah?",
        options: ["Telinga", "Mata", "Hidung", "Mulut"],
        correct: 1,
        explanation: "Mata adalah indra penglihatan untuk melihat."
      }
    ],
    ips: [
      {
        question: "Indonesia terletak di benua?",
        options: ["Afrika", "Asia", "Amerika", "Eropa"],
        correct: 1,
        explanation: "Indonesia terletak di benua Asia bagian tenggara."
      },
      {
        question: "Ibu kota Indonesia adalah?",
        options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
        correct: 2,
        explanation: "Jakarta adalah ibu kota negara Indonesia."
      },
      {
        question: "Pulau terbesar di Indonesia adalah?",
        options: ["Jawa", "Sumatra", "Kalimantan", "Papua"],
        correct: 2,
        explanation: "Kalimantan adalah pulau terbesar di Indonesia."
      },
      {
        question: "Suku asli Papua adalah?",
        options: ["Jawa", "Dayak", "Papua", "Batak"],
        correct: 2,
        explanation: "Suku Papua adalah suku asli dari pulau Papua."
      },
      {
        question: "Mata uang Indonesia adalah?",
        options: ["Dollar", "Rupiah", "Ringgit", "Peso"],
        correct: 1,
        explanation: "Rupiah adalah mata uang resmi Indonesia."
      }
    ]
  },

  // Level 2 (Kelas 2) - Similar structure but harder questions
  2: {
    pkn: [
      {
        question: "Sila pertama Pancasila adalah?",
        options: ["Kemanusiaan yang adil", "Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kerakyatan"],
        correct: 1,
        explanation: "Sila pertama Pancasila adalah 'Ketuhanan Yang Maha Esa'."
      },
      {
        question: "Bhinneka Tunggal Ika artinya?",
        options: ["Berbeda-beda tetapi tetap satu", "Sama semua", "Bersatu kita teguh", "Gotong royong"],
        correct: 0,
        explanation: "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu jua."
      },
      {
        question: "Siapa yang membuat lagu Indonesia Raya?",
        options: ["Ismail Marzuki", "W.R. Supratman", "C. Simanjuntak", "R.A. Kartini"],
        correct: 1,
        explanation: "W.R. Supratman adalah pencipta lagu kebangsaan Indonesia Raya."
      },
      {
        question: "Apa nama lagu kebangsaan Indonesia?",
        options: ["Garuda Pancasila", "Indonesia Raya", "Hari Merdeka", "Tanah Airku"],
        correct: 1,
        explanation: "Indonesia Raya adalah lagu kebangsaan Indonesia."
      },
      {
        question: "Gotong royong artinya?",
        options: ["Bekerja sendiri", "Bekerja sama", "Bermain", "Belajar"],
        correct: 1,
        explanation: "Gotong royong adalah tradisi bekerja sama untuk kepentingan bersama."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Berapa jumlah huruf dalam alfabet?",
        options: ["24", "25", "26", "27"],
        correct: 2,
        explanation: "Alfabet memiliki 26 huruf dari A sampai Z."
      },
      {
        question: "Sinonim dari kata 'cantik' adalah?",
        options: ["Jelek", "Indah", "Buruk", "Kotor"],
        correct: 1,
        explanation: "Sinonim adalah kata yang memiliki makna sama. 'Indah' memiliki makna sama dengan 'cantik'."
      },
      {
        question: "Kata tanya untuk menanyakan tempat adalah?",
        options: ["Siapa", "Kapan", "Dimana", "Mengapa"],
        correct: 2,
        explanation: "'Dimana' digunakan untuk menanyakan tempat atau lokasi."
      },
      {
        question: "Huruf besar digunakan di?",
        options: ["Tengah kalimat", "Awal kalimat", "Akhir kalimat", "Tidak perlu"],
        correct: 1,
        explanation: "Huruf besar digunakan di awal kalimat dan untuk nama orang atau tempat."
      },
      {
        question: "Berapa banyak huruf vokal?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Ada 5 huruf vokal: A, I, U, E, O."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 5 + 7?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "5 + 7 = 12"
      },
      {
        question: "Berapa hasil dari 15 - 8?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "15 - 8 = 7"
      },
      {
        question: "Berapa hasil dari 3 × 4?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "3 × 4 = 12"
      },
      {
        question: "20 ÷ 4 = ?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "20 ÷ 4 = 5"
      },
      {
        question: "Bentuk bangun datar yang memiliki 3 sisi adalah?",
        options: ["Persegi", "Segitiga", "Lingkaran", "Persegi panjang"],
        correct: 1,
        explanation: "Segitiga memiliki 3 sisi dan 3 sudut."
      }
    ],
    seni_budaya: [
      {
        question: "Campuran warna merah dan kuning menghasilkan?",
        options: ["Hijau", "Orange", "Ungu", "Coklat"],
        correct: 1,
        explanation: "Merah + kuning = orange (jingga)."
      },
      {
        question: "Angklung berasal dari daerah?",
        options: ["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Jakarta"],
        correct: 0,
        explanation: "Angklung adalah alat musik tradisional dari Jawa Barat."
      },
      {
        question: "Tari Saman berasal dari?",
        options: ["Bali", "Jawa", "Aceh", "Sumatra Barat"],
        correct: 2,
        explanation: "Tari Saman adalah tarian tradisional dari Aceh."
      },
      {
        question: "Rumah adat Joglo berasal dari?",
        options: ["Jawa", "Bali", "Sumatra", "Kalimantan"],
        correct: 0,
        explanation: "Rumah Joglo adalah rumah adat tradisional dari Jawa."
      },
      {
        question: "Keris adalah senjata tradisional dari?",
        options: ["Papua", "Jawa", "Sumatra", "Sulawesi"],
        correct: 1,
        explanation: "Keris adalah senjata tradisional yang berasal dari Jawa."
      }
    ],
    penjasorkes: [
      {
        question: "Sebelum berolahraga, kita harus?",
        options: ["Makan banyak", "Pemanasan", "Minum es", "Tidur"],
        correct: 1,
        explanation: "Pemanasan penting untuk mencegah cedera saat berolahraga."
      },
      {
        question: "Olahraga yang menggunakan bola adalah?",
        options: ["Renang", "Sepak bola", "Lari", "Senam"],
        correct: 1,
        explanation: "Sepak bola adalah olahraga yang menggunakan bola."
      },
      {
        question: "Vitamin yang didapat dari sinar matahari adalah?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3,
        explanation: "Vitamin D dapat diperoleh dari sinar matahari pagi."
      },
      {
        question: "Makanan yang mengandung karbohidrat adalah?",
        options: ["Daging", "Nasi", "Ikan", "Telur"],
        correct: 1,
        explanation: "Nasi mengandung karbohidrat sebagai sumber energi."
      },
      {
        question: "Fungsi gigi adalah untuk?",
        options: ["Mendengar", "Melihat", "Mengunyah", "Mencium"],
        correct: 2,
        explanation: "Gigi berfungsi untuk mengunyah makanan sebelum ditelan."
      }
    ],
    bahasa_inggris: [
      {
        question: "How do you say 'anjing' in English?",
        options: ["Cat", "Dog", "Bird", "Fish"],
        correct: 1,
        explanation: "'Dog' means anjing in English."
      },
      {
        question: "What is 'dua' in English?",
        options: ["One", "Two", "Three", "Four"],
        correct: 1,
        explanation: "'Two' means dua in English."
      },
      {
        question: "What color is 'hijau'?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correct: 2,
        explanation: "'Green' means hijau in English."
      },
      {
        question: "How do you say 'terima kasih'?",
        options: ["Sorry", "Please", "Thank you", "Excuse me"],
        correct: 2,
        explanation: "'Thank you' means terima kasih in English."
      },
      {
        question: "What is 'sekolah' in English?",
        options: ["Home", "School", "Park", "Store"],
        correct: 1,
        explanation: "'School' means sekolah in English."
      }
    ],
    ipa: [
      {
        question: "Berapa jumlah planet dalam tata surya?",
        options: ["7", "8", "9", "10"],
        correct: 1,
        explanation: "Ada 8 planet dalam tata surya kita."
      },
      {
        question: "Gas yang kita hirup untuk bernapas adalah?",
        options: ["Karbon dioksida", "Oksigen", "Nitrogen", "Hidrogen"],
        correct: 1,
        explanation: "Oksigen adalah gas yang kita hirup untuk bernapas."
      },
      {
        question: "Hujan berasal dari?",
        options: ["Tanah", "Awan", "Pohon", "Gunung"],
        correct: 1,
        explanation: "Hujan terjadi ketika uap air di awan mengembun dan turun ke bumi."
      },
      {
        question: "Hewan yang bertelur adalah?",
        options: ["Sapi", "Ayam", "Kucing", "Anjing"],
        correct: 1,
        explanation: "Ayam adalah hewan yang berkembang biak dengan bertelur."
      },
      {
        question: "Bagian tumbuhan yang menyerap air adalah?",
        options: ["Daun", "Bunga", "Akar", "Batang"],
        correct: 2,
        explanation: "Akar berfungsi menyerap air dan nutrisi dari tanah."
      }
    ],
    ips: [
      {
        question: "Berapa banyak pulau besar di Indonesia?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Indonesia memiliki 5 pulau besar: Sumatra, Jawa, Kalimantan, Sulawesi, dan Papua."
      },
      {
        question: "Laut yang ada di utara Jawa adalah?",
        options: ["Laut Jawa", "Laut Banda", "Laut Arafura", "Laut Timor"],
        correct: 0,
        explanation: "Laut Jawa terletak di utara pulau Jawa."
      },
      {
        question: "Profesi yang mengajar di sekolah adalah?",
        options: ["Dokter", "Guru", "Pilot", "Petani"],
        correct: 1,
        explanation: "Guru adalah profesi yang mengajar siswa di sekolah."
      },
      {
        question: "Tempat jual beli barang adalah?",
        options: ["Sekolah", "Rumah sakit", "Pasar", "Kantor"],
        correct: 2,
        explanation: "Pasar adalah tempat untuk jual beli barang."
      },
      {
        question: "Alat transportasi di air adalah?",
        options: ["Mobil", "Pesawat", "Kapal", "Sepeda"],
        correct: 2,
        explanation: "Kapal adalah alat transportasi yang digunakan di air."
      }
    ]
  },

  // Level 3 (Kelas 3) - Continuing with more complex questions
  3: {
    pkn: [
      {
        question: "Siapa yang memimpin upacara bendera di sekolah?",
        options: ["Murid kelas 1", "Pembina upacara", "Satpam", "Orang tua"],
        correct: 1,
        explanation: "Pembina upacara yang memimpin jalannya upacara bendera."
      },
      {
        question: "Apa yang harus dilakukan saat lagu Indonesia Raya dinyanyikan?",
        options: ["Berlari", "Berdiri tegak dan hormat", "Duduk", "Bermain"],
        correct: 1,
        explanation: "Saat lagu Indonesia Raya dinyanyikan, kita harus berdiri tegak dan hormat."
      },
      {
        question: "Sikap yang baik di rumah adalah?",
        options: ["Menghormati orang tua", "Marah-marah", "Tidak mendengar", "Nakal"],
        correct: 0,
        explanation: "Menghormati orang tua adalah sikap yang baik dan sesuai nilai Pancasila."
      },
      {
        question: "Di sekolah, kita harus?",
        options: ["Ribut di kelas", "Mendengarkan guru", "Tidak belajar", "Mengganggu teman"],
        correct: 1,
        explanation: "Di sekolah, kita harus mendengarkan guru dan belajar dengan baik."
      },
      {
        question: "Lambang sila ke-2 Pancasila adalah?",
        options: ["Bintang", "Rantai", "Pohon beringin", "Kepala banteng"],
        correct: 1,
        explanation: "Lambang sila ke-2 adalah rantai yang melambangkan kemanusiaan."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Kata yang menunjukkan perbuatan disebut kata?",
        options: ["Benda", "Kerja", "Sifat", "Bilangan"],
        correct: 1,
        explanation: "Kata kerja menunjukkan perbuatan atau aktivitas."
      },
      {
        question: "Antonim dari kata 'tinggi' adalah?",
        options: ["Pendek", "Panjang", "Lebar", "Besar"],
        correct: 0,
        explanation: "Antonim (lawan kata) dari 'tinggi' adalah 'pendek'."
      },
      {
        question: "Tanda baca untuk mengakhiri kalimat tanya adalah?",
        options: [".", "!", "?", ","],
        correct: 2,
        explanation: "Tanda tanya (?) digunakan untuk mengakhiri kalimat tanya."
      },
      {
        question: "Kata 'berlari' termasuk kata?",
        options: ["Benda", "Kerja", "Sifat", "Keterangan"],
        correct: 1,
        explanation: "'Berlari' adalah kata kerja karena menunjukkan aktivitas."
      },
      {
        question: "Awalan 'ber-' dalam kata 'bermain' menunjukkan?",
        options: ["Tempat", "Perbuatan", "Waktu", "Jumlah"],
        correct: 1,
        explanation: "Awalan 'ber-' menunjukkan perbuatan atau aktivitas."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 12 × 3?",
        options: ["35", "36", "37", "38"],
        correct: 1,
        explanation: "12 × 3 = 36"
      },
      {
        question: "Berapa hasil dari 45 ÷ 5?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "45 ÷ 5 = 9"
      },
      {
        question: "Bangun datar yang memiliki 4 sisi sama panjang adalah?",
        options: ["Persegi panjang", "Persegi", "Segitiga", "Lingkaran"],
        correct: 1,
        explanation: "Persegi memiliki 4 sisi yang sama panjang."
      },
      {
        question: "Berapa hasil dari 8 + 9 - 5?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "8 + 9 - 5 = 17 - 5 = 12"
      },
      {
        question: "Pecahan 1/2 sama dengan?",
        options: ["0,3", "0,4", "0,5", "0,6"],
        correct: 2,
        explanation: "1/2 = 0,5 (setengah)"
      }
    ],
    seni_budaya: [
      {
        question: "Alat musik yang dipetik adalah?",
        options: ["Drum", "Gitar", "Suling", "Terompet"],
        correct: 1,
        explanation: "Gitar adalah alat musik yang dimainkan dengan cara dipetik."
      },
      {
        question: "Patung Garuda Wisnu Kencana ada di?",
        options: ["Jakarta", "Bandung", "Bali", "Yogyakarta"],
        correct: 2,
        explanation: "Patung Garuda Wisnu Kencana berada di Bali."
      },
      {
        question: "Lukisan dibuat menggunakan?",
        options: ["Pensil", "Cat", "Gunting", "Lem"],
        correct: 1,
        explanation: "Lukisan dibuat menggunakan cat dan kuas di atas kanvas."
      },
      {
        question: "Tari Pendet berasal dari?",
        options: ["Jawa", "Bali", "Sumatra", "Kalimantan"],
        correct: 1,
        explanation: "Tari Pendet adalah tarian tradisional dari Bali."
      },
      {
        question: "Candi Borobudur ada di provinsi?",
        options: ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "DI Yogyakarta"],
        correct: 1,
        explanation: "Candi Borobudur berada di Jawa Tengah."
      }
    ],
    penjasorkes: [
      {
        question: "Berapa kali kita harus menggosok gigi dalam sehari?",
        options: ["1 kali", "2 kali", "3 kali", "4 kali"],
        correct: 1,
        explanation: "Menggosok gigi sebaiknya dilakukan 2 kali sehari, pagi dan malam."
      },
      {
        question: "Manfaat berolahraga adalah?",
        options: ["Membuat lelah", "Menyehatkan tubuh", "Membuat sakit", "Menambah berat"],
        correct: 1,
        explanation: "Berolahraga bermanfaat untuk menyehatkan tubuh dan menjaga kebugaran."
      },
      {
        question: "Posisi tubuh yang baik saat duduk adalah?",
        options: ["Membungkuk", "Tegak", "Miring", "Tiduran"],
        correct: 1,
        explanation: "Posisi duduk yang baik adalah tegak untuk menjaga kesehatan tulang belakang."
      },
      {
        question: "Kegiatan yang termasuk olahraga ringan adalah?",
        options: ["Jalan kaki", "Angkat beban berat", "Tinju", "Gulat"],
        correct: 0,
        explanation: "Jalan kaki adalah olahraga ringan yang baik untuk semua usia."
      },
      {
        question: "Air putih sebaiknya diminum berapa gelas sehari?",
        options: ["2 gelas", "4 gelas", "8 gelas", "1 gelas"],
        correct: 2,
        explanation: "Sebaiknya minum 8 gelas air putih sehari untuk menjaga tubuh tetap terhidrasi."
      }
    ],
    bahasa_inggris: [
      {
        question: "What is 'buku' in English?",
        options: ["Book", "Pen", "Table", "Chair"],
        correct: 0,
        explanation: "'Book' means buku in English."
      },
      {
        question: "How do you say 'tiga' in English?",
        options: ["Two", "Three", "Four", "Five"],
        correct: 1,
        explanation: "'Three' means tiga in English."
      },
      {
        question: "What is the opposite of 'big'?",
        options: ["Large", "Small", "Tall", "Wide"],
        correct: 1,
        explanation: "The opposite of 'big' is 'small'."
      },
      {
        question: "How do you say 'selamat siang'?",
        options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
        correct: 1,
        explanation: "'Good afternoon' means selamat siang."
      },
      {
        question: "What is 'guru' in English?",
        options: ["Student", "Teacher", "Doctor", "Farmer"],
        correct: 1,
        explanation: "'Teacher' means guru in English."
      }
    ],
    ipa: [
      {
        question: "Planet terdekat dengan matahari adalah?",
        options: ["Venus", "Merkurius", "Bumi", "Mars"],
        correct: 1,
        explanation: "Merkurius adalah planet terdekat dengan matahari."
      },
      {
        question: "Hewan yang hidup di dua alam adalah?",
        options: ["Ikan", "Burung", "Katak", "Kucing"],
        correct: 2,
        explanation: "Katak adalah amfibi yang dapat hidup di air dan di darat."
      },
      {
        question: "Bagian bunga yang berwarna-warni adalah?",
        options: ["Akar", "Mahkota bunga", "Batang", "Daun"],
        correct: 1,
        explanation: "Mahkota bunga (kelopak bunga) biasanya berwarna-warni untuk menarik serangga."
      },
      {
        question: "Metamorfosis kupu-kupu dimulai dari?",
        options: ["Kepompong", "Kupu-kupu", "Telur", "Ulat"],
        correct: 2,
        explanation: "Metamorfosis kupu-kupu dimulai dari telur, kemudian ulat, kepompong, dan kupu-kupu."
      },
      {
        question: "Benda yang dapat menyerap air adalah?",
        options: ["Kaca", "Spons", "Plastik", "Batu"],
        correct: 1,
        explanation: "Spons memiliki pori-pori yang dapat menyerap air."
      }
    ],
    ips: [
      {
        question: "Danau terbesar di Indonesia adalah?",
        options: ["Danau Sentani", "Danau Toba", "Danau Maninjau", "Danau Kelimutu"],
        correct: 1,
        explanation: "Danau Toba di Sumatra Utara adalah danau terbesar di Indonesia."
      },
      {
        question: "Pekerjaan yang menghasilkan padi adalah?",
        options: ["Nelayan", "Petani", "Dokter", "Guru"],
        correct: 1,
        explanation: "Petani adalah orang yang bercocok tanam dan menghasilkan padi."
      },
      {
        question: "Gunung tertinggi di Indonesia adalah?",
        options: ["Gunung Merapi", "Puncak Jaya", "Gunung Bromo", "Gunung Salak"],
        correct: 1,
        explanation: "Puncak Jaya di Papua adalah gunung tertinggi di Indonesia."
      },
      {
        question: "Provinsi yang berbatasan dengan Malaysia adalah?",
        options: ["Jawa Barat", "Kalimantan Barat", "Sumatra Selatan", "Sulawesi"],
        correct: 1,
        explanation: "Kalimantan Barat berbatasan langsung dengan Malaysia."
      },
      {
        question: "Sungai terpanjang di Indonesia adalah?",
        options: ["Sungai Musi", "Sungai Kapuas", "Sungai Citarum", "Sungai Brantas"],
        correct: 1,
        explanation: "Sungai Kapuas di Kalimantan Barat adalah sungai terpanjang di Indonesia."
      }
    ]
  },

  // Level 4 (Kelas 4)
  4: {
    pkn: [
      {
        question: "Apa makna sila ke-3 Pancasila?",
        options: ["Persatuan Indonesia", "Ketuhanan", "Kemanusiaan", "Keadilan"],
        correct: 0,
        explanation: "Sila ke-3 'Persatuan Indonesia' menekankan pentingnya bersatu sebagai bangsa."
      },
      {
        question: "Hak dan kewajiban sebagai warga negara harus?",
        options: ["Seimbang", "Hanya hak saja", "Hanya kewajiban", "Tidak perlu"],
        correct: 0,
        explanation: "Hak dan kewajiban warga negara harus seimbang dan dilaksanakan."
      },
      {
        question: "Lembaga tertinggi negara adalah?",
        options: ["DPR", "MPR", "Presiden", "MA"],
        correct: 1,
        explanation: "MPR (Majelis Permusyawaratan Rakyat) adalah lembaga tertinggi negara."
      },
      {
        question: "Pemilihan umum dilakukan setiap?",
        options: ["3 tahun", "4 tahun", "5 tahun", "6 tahun"],
        correct: 2,
        explanation: "Pemilihan umum di Indonesia dilakukan setiap 5 tahun sekali."
      },
      {
        question: "Apa yang dimaksud dengan musyawarah?",
        options: ["Bertengkar", "Berunding untuk mencapai mufakat", "Bermain", "Belajar"],
        correct: 1,
        explanation: "Musyawarah adalah berunding bersama untuk mencapai mufakat."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Kalimat yang menggunakan tanda seru (!) adalah kalimat?",
        options: ["Tanya", "Berita", "Perintah", "Semua benar"],
        correct: 2,
        explanation: "Kalimat perintah atau seruan menggunakan tanda seru (!)."
      },
      {
        question: "Kata depan yang tepat: 'Saya pergi ... sekolah'",
        options: ["di", "ke", "dari", "untuk"],
        correct: 1,
        explanation: "Kata depan 'ke' menunjukkan arah tujuan."
      },
      {
        question: "Subjek dalam kalimat 'Adik bermain bola' adalah?",
        options: ["bermain", "bola", "Adik", "main"],
        correct: 2,
        explanation: "Subjek adalah pelaku dalam kalimat, yaitu 'Adik'."
      },
      {
        question: "Bentuk jamak dari kata 'anak' adalah?",
        options: ["anak-anak", "anakan", "beranak", "keanak"],
        correct: 0,
        explanation: "Bentuk jamak dibuat dengan mengulang kata: anak-anak."
      },
      {
        question: "Kata yang berima dengan 'bunga' adalah?",
        options: ["rumah", "bangga", "makan", "tidur"],
        correct: 1,
        explanation: "'Bangga' berima dengan 'bunga' karena berakhiran sama (-nga)."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 234 + 156?",
        options: ["390", "380", "370", "360"],
        correct: 0,
        explanation: "234 + 156 = 390"
      },
      {
        question: "Berapa hasil dari 15 × 12?",
        options: ["180", "170", "160", "150"],
        correct: 0,
        explanation: "15 × 12 = 180"
      },
      {
        question: "1 meter sama dengan berapa sentimeter?",
        options: ["10 cm", "100 cm", "1000 cm", "50 cm"],
        correct: 1,
        explanation: "1 meter = 100 sentimeter"
      },
      {
        question: "Keliling persegi dengan sisi 5 cm adalah?",
        options: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correct: 1,
        explanation: "Keliling persegi = 4 × sisi = 4 × 5 = 20 cm"
      },
      {
        question: "Pecahan 3/4 dalam desimal adalah?",
        options: ["0,25", "0,5", "0,75", "1,25"],
        correct: 2,
        explanation: "3/4 = 0,75 (tiga per empat)"
      }
    ],
    seni_budaya: [
      {
        question: "Teknik melukis dengan titik-titik kecil disebut?",
        options: ["Abstrak", "Pointilisme", "Kubisme", "Realisme"],
        correct: 1,
        explanation: "Pointilisme adalah teknik melukis dengan titik-titik kecil."
      },
      {
        question: "Alat musik Sasando berasal dari?",
        options: ["NTB", "NTT", "Papua", "Maluku"],
        correct: 1,
        explanation: "Sasando adalah alat musik tradisional dari Nusa Tenggara Timur."
      },
      {
        question: "Motif batik yang terkenal dari Solo adalah?",
        options: ["Mega Mendung", "Parang", "Kawung", "Sekar Jagad"],
        correct: 1,
        explanation: "Batik Parang adalah motif batik terkenal dari Solo."
      },
      {
        question: "Rumah adat Tongkonan berasal dari?",
        options: ["Sumatra", "Jawa", "Sulawesi", "Papua"],
        correct: 2,
        explanation: "Tongkonan adalah rumah adat dari Sulawesi Selatan (Toraja)."
      },
      {
        question: "Lagu daerah 'Gundul Pacul' berasal dari?",
        options: ["Jawa Tengah", "Jawa Barat", "Jawa Timur", "Bali"],
        correct: 0,
        explanation: "Lagu 'Gundul Pacul' adalah lagu daerah dari Jawa Tengah."
      }
    ],
    penjasorkes: [
      {
        question: "Olahraga yang menggunakan raket adalah?",
        options: ["Sepak bola", "Badminton", "Renang", "Lari"],
        correct: 1,
        explanation: "Badminton adalah olahraga yang menggunakan raket dan shuttlecock."
      },
      {
        question: "Vitamin C banyak terdapat dalam?",
        options: ["Daging", "Jeruk", "Nasi", "Mie"],
        correct: 1,
        explanation: "Jeruk dan buah-buahan citrus kaya akan vitamin C."
      },
      {
        question: "Latihan untuk melatih kelenturan tubuh adalah?",
        options: ["Angkat beban", "Senam", "Lari cepat", "Loncat tinggi"],
        correct: 1,
        explanation: "Senam membantu melatih kelenturan dan fleksibilitas tubuh."
      },
      {
        question: "Berapa lama kita harus berolahraga dalam sehari?",
        options: ["10 menit", "30 menit", "2 jam", "5 jam"],
        correct: 1,
        explanation: "Olahraga minimal 30 menit sehari baik untuk kesehatan."
      },
      {
        question: "Manfaat makan buah adalah?",
        options: ["Menambah berat badan", "Memberikan vitamin", "Membuat mengantuk", "Membuat sakit"],
        correct: 1,
        explanation: "Buah mengandung vitamin dan mineral yang baik untuk tubuh."
      }
    ],
    bahasa_inggris: [
      {
        question: "What day comes after Monday?",
        options: ["Sunday", "Tuesday", "Wednesday", "Thursday"],
        correct: 1,
        explanation: "Tuesday comes after Monday."
      },
      {
        question: "How many months are in a year?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "There are 12 months in a year."
      },
      {
        question: "What is 'ayah' in English?",
        options: ["Mother", "Father", "Brother", "Sister"],
        correct: 1,
        explanation: "'Father' means ayah in English."
      },
      {
        question: "Which one is a fruit?",
        options: ["Carrot", "Apple", "Potato", "Onion"],
        correct: 1,
        explanation: "Apple is a fruit."
      },
      {
        question: "What is the English for 'meja'?",
        options: ["Chair", "Table", "Bed", "Door"],
        correct: 1,
        explanation: "'Table' means meja in English."
      }
    ],
    ipa: [
      {
        question: "Hewan yang berkembang biak dengan bertelur disebut?",
        options: ["Mamalia", "Ovipar", "Vivipar", "Ovovivipar"],
        correct: 1,
        explanation: "Ovipar adalah hewan yang berkembang biak dengan bertelur."
      },
      {
        question: "Proses tumbuhan membuat makanan disebut?",
        options: ["Respirasi", "Fotosintesis", "Evaporasi", "Kondensasi"],
        correct: 1,
        explanation: "Fotosintesis adalah proses tumbuhan membuat makanan menggunakan sinar matahari."
      },
      {
        question: "Planet terbesar dalam tata surya adalah?",
        options: ["Bumi", "Jupiter", "Saturnus", "Mars"],
        correct: 1,
        explanation: "Jupiter adalah planet terbesar dalam tata surya."
      },
      {
        question: "Bunyi merambat melalui?",
        options: ["Ruang hampa", "Udara", "Cahaya", "Listrik"],
        correct: 1,
        explanation: "Bunyi memerlukan medium seperti udara untuk merambat."
      },
      {
        question: "Bagian mata yang berfungsi melihat adalah?",
        options: ["Kelopak mata", "Retina", "Alis", "Bulu mata"],
        correct: 1,
        explanation: "Retina adalah bagian mata yang menangkap cahaya untuk melihat."
      }
    ],
    ips: [
      {
        question: "Negara tetangga Indonesia di sebelah utara adalah?",
        options: ["Australia", "Malaysia", "Singapura", "Thailand"],
        correct: 1,
        explanation: "Malaysia adalah negara tetangga Indonesia di sebelah utara."
      },
      {
        question: "Hasil tambang Indonesia yang terkenal adalah?",
        options: ["Emas", "Minyak bumi", "Batu bara", "Semua benar"],
        correct: 3,
        explanation: "Indonesia kaya akan hasil tambang seperti emas, minyak bumi, dan batu bara."
      },
      {
        question: "Kegiatan ekonomi utama di daerah pantai adalah?",
        options: ["Bertani", "Nelayan", "Beternak", "Berkebun"],
        correct: 1,
        explanation: "Daerah pantai cocok untuk kegiatan nelayan karena dekat dengan laut."
      },
      {
        question: "Ciri khas rumah adat daerah tropis adalah?",
        options: ["Atap datar", "Atap miring", "Tanpa jendela", "Tertutup rapat"],
        correct: 1,
        explanation: "Rumah adat daerah tropis memiliki atap miring untuk mengalirkan air hujan."
      },
      {
        question: "Kerajinan dari daerah Jepara yang terkenal adalah?",
        options: ["Anyaman", "Ukiran kayu", "Keramik", "Logam"],
        correct: 1,
        explanation: "Jepara terkenal dengan kerajinan ukiran kayu yang indah."
      }
    ]
  },

  // Level 5 (Kelas 5) - More advanced questions
  5: {
    pkn: [
      {
        question: "Siapa yang berwenang mengubah UUD 1945?",
        options: ["Presiden", "DPR", "MPR", "MA"],
        correct: 2,
        explanation: "MPR memiliki wewenang untuk mengubah dan menetapkan UUD 1945."
      },
      {
        question: "Apa fungsi lembaga yudikatif?",
        options: ["Membuat undang-undang", "Menjalankan pemerintahan", "Mengadili", "Memilih presiden"],
        correct: 2,
        explanation: "Lembaga yudikatif berfungsi mengadili dan menegakkan hukum."
      },
      {
        question: "Pemimpin daerah provinsi disebut?",
        options: ["Bupati", "Walikota", "Gubernur", "Camat"],
        correct: 2,
        explanation: "Gubernur adalah pemimpin daerah tingkat provinsi."
      },
      {
        question: "Apa yang dimaksud dengan demokrasi?",
        options: ["Pemerintahan oleh rakyat", "Pemerintahan oleh raja", "Pemerintahan militer", "Pemerintahan agama"],
        correct: 0,
        explanation: "Demokrasi adalah sistem pemerintahan dari rakyat, oleh rakyat, dan untuk rakyat."
      },
      {
        question: "Tugas utama DPR adalah?",
        options: ["Mengadili", "Membuat undang-undang", "Menjalankan pemerintahan", "Memilih presiden"],
        correct: 1,
        explanation: "DPR bertugas membuat undang-undang dan mengawasi pemerintah."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Apa yang dimaksud dengan puisi?",
        options: ["Cerita panjang", "Karya sastra berbait", "Drama", "Novel"],
        correct: 1,
        explanation: "Puisi adalah karya sastra yang tersusun dalam bait-bait dengan irama tertentu."
      },
      {
        question: "Majas yang membandingkan dua hal disebut?",
        options: ["Metafora", "Simile", "Personifikasi", "Hiperbola"],
        correct: 1,
        explanation: "Simile adalah majas yang membandingkan dua hal menggunakan kata 'seperti' atau 'bagai'."
      },
      {
        question: "Apa yang dimaksud dengan pantun?",
        options: ["Puisi 2 baris", "Puisi 4 baris dengan pola a-b-a-b", "Cerita pendek", "Drama"],
        correct: 1,
        explanation: "Pantun adalah puisi 4 baris dengan pola rima a-b-a-b."
      },
      {
        question: "Konflik dalam cerita adalah?",
        options: ["Akhir cerita", "Masalah dalam cerita", "Tokoh utama", "Latar tempat"],
        correct: 1,
        explanation: "Konflik adalah masalah atau pertentangan yang terjadi dalam cerita."
      },
      {
        question: "Kata sambung yang menunjukkan sebab akibat adalah?",
        options: ["dan", "atau", "karena", "tetapi"],
        correct: 2,
        explanation: "'Karena' adalah kata sambung yang menunjukkan hubungan sebab akibat."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 1,5 + 2,3?",
        options: ["3,8", "3,7", "3,9", "4,0"],
        correct: 0,
        explanation: "1,5 + 2,3 = 3,8"
      },
      {
        question: "Luas persegi dengan sisi 8 cm adalah?",
        options: ["32 cm²", "64 cm²", "16 cm²", "24 cm²"],
        correct: 1,
        explanation: "Luas persegi = sisi × sisi = 8 × 8 = 64 cm²"
      },
      {
        question: "Berapa hasil dari 144 ÷ 12?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "144 ÷ 12 = 12"
      },
      {
        question: "Volume kubus dengan rusuk 3 cm adalah?",
        options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        correct: 2,
        explanation: "Volume kubus = rusuk³ = 3³ = 27 cm³"
      },
      {
        question: "Berapa persen dari 25% × 80?",
        options: ["15", "20", "25", "30"],
        correct: 1,
        explanation: "25% × 80 = 0,25 × 80 = 20"
      }
    ],
    seni_budaya: [
      {
        question: "Teknik pewarnaan gradasi adalah?",
        options: ["Warna rata", "Peralihan warna bertahap", "Warna kontras", "Warna gelap"],
        correct: 1,
        explanation: "Gradasi adalah teknik peralihan warna secara bertahap dari terang ke gelap."
      },
      {
        question: "Alat musik Kolintang berasal dari?",
        options: ["Maluku", "Sulawesi Utara", "Papua", "NTB"],
        correct: 1,
        explanation: "Kolintang adalah alat musik tradisional dari Sulawesi Utara."
      },
      {
        question: "Teknik membuat keramik dengan roda putar disebut?",
        options: ["Pinching", "Coiling", "Throwing", "Slab"],
        correct: 2,
        explanation: "Throwing adalah teknik membuat keramik menggunakan roda putar."
      },
      {
        question: "Apa yang dimaksud dengan seni rupa terapan?",
        options: ["Seni untuk dipajang", "Seni untuk digunakan", "Seni untuk dijual", "Seni untuk kompetisi"],
        correct: 1,
        explanation: "Seni rupa terapan adalah seni yang dibuat untuk digunakan dalam kehidupan sehari-hari."
      },
      {
        question: "Proporsi dalam menggambar manusia, kepala berbanding tubuh adalah?",
        options: ["1:6", "1:7", "1:8", "1:9"],
        correct: 1,
        explanation: "Proporsi ideal manusia dewasa adalah kepala berbanding tubuh 1:7."
      }
    ],
    penjasorkes: [
      {
        question: "Indeks massa tubuh (BMI) yang normal untuk anak adalah?",
        options: ["10-15", "18,5-24,9", "25-30", "30-35"],
        correct: 1,
        explanation: "BMI normal untuk anak usia sekolah sekitar 18,5-24,9."
      },
      {
        question: "Olahraga yang baik untuk melatih daya tahan adalah?",
        options: ["Angkat beban", "Lari jarak jauh", "Lempar lembing", "Loncat tinggi"],
        correct: 1,
        explanation: "Lari jarak jauh melatih daya tahan kardiovaskular."
      },
      {
        question: "Cedera yang sering terjadi saat olahraga adalah?",
        options: ["Patah tulang", "Keseleo", "Luka bakar", "Masuk angin"],
        correct: 1,
        explanation: "Keseleo adalah cedera yang paling sering terjadi saat berolahraga."
      },
      {
        question: "Makanan yang sebaiknya dihindari sebelum olahraga adalah?",
        options: ["Pisang", "Makanan berlemak", "Air putih", "Roti"],
        correct: 1,
        explanation: "Makanan berlemak sulit dicerna dan sebaiknya dihindari sebelum olahraga."
      },
      {
        question: "Teknik pernapasan yang benar saat berlari adalah?",
        options: ["Napas pendek", "Napas melalui hidung", "Menahan napas", "Napas tidak teratur"],
        correct: 1,
        explanation: "Bernapas melalui hidung membantu menyaring udara dan mengatur irama."
      }
    ],
    bahasa_inggris: [
      {
        question: "What is the past tense of 'go'?",
        options: ["Goes", "Going", "Went", "Gone"],
        correct: 2,
        explanation: "The past tense of 'go' is 'went'."
      },
      {
        question: "Which sentence is correct?",
        options: ["I am student", "I am a student", "I is student", "I are student"],
        correct: 1,
        explanation: "'I am a student' is the correct sentence structure."
      },
      {
        question: "What is the plural of 'child'?",
        options: ["Childs", "Children", "Childes", "Child"],
        correct: 1,
        explanation: "The plural of 'child' is 'children'."
      },
      {
        question: "How do you ask someone's name politely?",
        options: ["Who you?", "What your name?", "What is your name?", "Name what?"],
        correct: 2,
        explanation: "'What is your name?' is the polite way to ask someone's name."
      },
      {
        question: "What is 'kemarin' in English?",
        options: ["Today", "Tomorrow", "Yesterday", "Now"],
        correct: 2,
        explanation: "'Yesterday' means kemarin in English."
      }
    ],
    ipa: [
      {
        question: "Apa yang terjadi pada air saat dipanaskan?",
        options: ["Membeku", "Menguap", "Mengeras", "Tidak berubah"],
        correct: 1,
        explanation: "Air yang dipanaskan akan berubah menjadi uap air (menguap)."
      },
      {
        question: "Alat peredaran darah manusia adalah?",
        options: ["Paru-paru", "Jantung", "Ginjal", "Hati"],
        correct: 1,
        explanation: "Jantung memompa darah ke seluruh tubuh melalui pembuluh darah."
      },
      {
        question: "Gaya yang membuat benda jatuh ke bumi adalah?",
        options: ["Gaya magnet", "Gaya gravitasi", "Gaya gesek", "Gaya listrik"],
        correct: 1,
        explanation: "Gaya gravitasi bumi menarik semua benda ke bawah."
      },
      {
        question: "Organ yang berfungsi mencerna makanan adalah?",
        options: ["Jantung", "Lambung", "Paru-paru", "Otak"],
        correct: 1,
        explanation: "Lambung adalah organ pencernaan yang mencerna makanan dengan asam lambung."
      },
      {
        question: "Satelit alami bumi adalah?",
        options: ["Matahari", "Bulan", "Mars", "Venus"],
        correct: 1,
        explanation: "Bulan adalah satelit alami yang mengelilingi bumi."
      }
    ],
    ips: [
      {
        question: "Iklim Indonesia termasuk iklim?",
        options: ["Subtropis", "Tropis", "Gurun", "Kutub"],
        correct: 1,
        explanation: "Indonesia beriklim tropis karena terletak di daerah khatulistiwa."
      },
      {
        question: "Batas Indonesia dengan Papua Nugini adalah?",
        options: ["Laut", "Sungai", "Gunung", "Darat"],
        correct: 3,
        explanation: "Indonesia berbatasan darat dengan Papua Nugini di pulau Papua."
      },
      {
        question: "Kegiatan ekspor adalah?",
        options: ["Menjual ke luar negeri", "Membeli dari luar negeri", "Menukar barang", "Memberikan gratis"],
        correct: 0,
        explanation: "Ekspor adalah kegiatan menjual barang ke luar negeri."
      },
      {
        question: "Organisasi kerjasama negara-negara Asia Tenggara adalah?",
        options: ["ASEAN", "APEC", "UNESCO", "UNICEF"],
        correct: 0,
        explanation: "ASEAN adalah organisasi kerjasama negara-negara Asia Tenggara."
      },
      {
        question: "Hasil perkebunan Indonesia yang diekspor adalah?",
        options: ["Beras", "Kelapa sawit", "Jagung", "Kentang"],
        correct: 1,
        explanation: "Kelapa sawit adalah hasil perkebunan Indonesia yang banyak diekspor."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Apa ciri-ciri teks deskripsi?",
        options: ["Menggambarkan sesuatu", "Menceritakan kejadian", "Memberikan pendapat", "Menyuruh melakukan sesuatu"],
        correct: 0,
        explanation: "Teks deskripsi bertujuan menggambarkan atau melukiskan sesuatu secara detail."
      },
      {
        question: "Unsur intrinsik cerita meliputi?",
        options: ["Penulis dan penerbit", "Tokoh, alur, latar", "Harga dan sampul", "Tahun terbit"],
        correct: 1,
        explanation: "Unsur intrinsik meliputi tokoh, alur, latar, tema, sudut pandang, dan amanat."
      },
      {
        question: "Kata ulang 'bolak-balik' termasuk jenis?",
        options: ["Dwipurwa", "Dwilingga", "Salin suara", "Berubah bunyi"],
        correct: 3,
        explanation: "Bolak-balik adalah kata ulang berubah bunyi karena ada perubahan vokal."
      },
      {
        question: "Imbuhan 'me-kan' dalam 'memasukkan' berfungsi?",
        options: ["Membuat kata benda", "Membuat kata kerja aktif", "Membuat kata sifat", "Membuat kata keterangan"],
        correct: 1,
        explanation: "Imbuhan 'me-kan' membentuk kata kerja aktif transitif."
      },
      {
        question: "Gagasan utama dalam paragraf disebut?",
        options: ["Gagasan penjelas", "Gagasan pokok", "Gagasan sampingan", "Gagasan tambahan"],
        correct: 1,
        explanation: "Gagasan pokok adalah ide utama yang ingin disampaikan dalam paragraf."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 15² (lima belas pangkat dua)?",
        options: ["225", "215", "235", "245"],
        correct: 0,
        explanation: "15² = 15 × 15 = 225"
      },
      {
        question: "KPK dari 12 dan 18 adalah?",
        options: ["30", "36", "42", "48"],
        correct: 1,
        explanation: "KPK (Kelipatan Persekutuan Kecil) dari 12 dan 18 adalah 36."
      },
      {
        question: "Luas segitiga dengan alas 10 cm dan tinggi 6 cm adalah?",
        options: ["30 cm²", "60 cm²", "15 cm²", "25 cm²"],
        correct: 0,
        explanation: "Luas segitiga = ½ × alas × tinggi = ½ × 10 × 6 = 30 cm²"
      },
      {
        question: "Berapa hasil dari ∛64 (akar pangkat tiga dari 64)?",
        options: ["2", "4", "6", "8"],
        correct: 1,
        explanation: "∛64 = 4 karena 4³ = 64"
      },
      {
        question: "FPB dari 24 dan 36 adalah?",
        options: ["6", "8", "12", "18"],
        correct: 2,
        explanation: "FPB (Faktor Persekutuan Besar) dari 24 dan 36 adalah 12."
      }
    ],
    seni_budaya: [
      {
        question: "Komposisi dalam seni rupa adalah?",
        options: ["Warna yang digunakan", "Susunan unsur seni", "Alat yang digunakan", "Ukuran karya"],
        correct: 1,
        explanation: "Komposisi adalah cara menyusun unsur-unsur seni dalam karya seni rupa."
      },
      {
        question: "Alat musik Tifa berasal dari?",
        options: ["Jawa", "Papua", "Sumatra", "Kalimantan"],
        correct: 1,
        explanation: "Tifa adalah alat musik tradisional dari Papua dan Maluku."
      },
      {
        question: "Apa yang dimaksud dengan seni tari kreasi?",
        options: ["Tari tradisional murni", "Tari hasil pengembangan", "Tari asing", "Tari modern"],
        correct: 1,
        explanation: "Tari kreasi adalah tari hasil pengembangan dari tari tradisional atau menciptakan gerakan baru."
      },
      {
        question: "Teknik memahat yang mengurangi bahan disebut?",
        options: ["Aditive", "Substraktif", "Konstruktif", "Dekonstruktif"],
        correct: 1,
        explanation: "Teknik substraktif adalah memahat dengan mengurangi atau memotong bahan."
      },
      {
        question: "Alat musik yang dimainkan dengan cara dipukul adalah?",
        options: ["Gitar", "Suling", "Kendang", "Biola"],
        correct: 2,
        explanation: "Kendang adalah alat musik perkusi yang dimainkan dengan cara dipukul."
      }
    ],
    penjasorkes: [
      {
        question: "Berapa detak jantung normal anak per menit?",
        options: ["60-80", "80-100", "100-120", "120-140"],
        correct: 2,
        explanation: "Detak jantung normal anak sekitar 100-120 kali per menit."
      },
      {
        question: "Apa manfaat pemanasan sebelum olahraga?",
        options: ["Mencegah cedera", "Menambah berat badan", "Membuat lelah", "Mengurangi stamina"],
        correct: 0,
        explanation: "Pemanasan mempersiapkan otot dan sendi untuk mencegah cedera saat berolahraga."
      },
      {
        question: "Teknik dasar dalam permainan sepak bola adalah?",
        options: ["Menangkap bola", "Menendang bola", "Memukul bola", "Melempar bola"],
        correct: 1,
        explanation: "Menendang bola adalah teknik dasar utama dalam permainan sepak bola."
      },
      {
        question: "Makanan yang mengandung protein tinggi adalah?",
        options: ["Nasi", "Tempe", "Kentang", "Roti"],
        correct: 1,
        explanation: "Tempe terbuat dari kedelai yang kaya akan protein nabati."
      },
      {
        question: "Berapa lama waktu istirahat yang baik antara set latihan?",
        options: ["10 detik", "30 detik", "1-2 menit", "10 menit"],
        correct: 2,
        explanation: "Istirahat 1-2 menit antara set latihan membantu pemulihan otot."
      }
    ],
    bahasa_inggris: [
      {
        question: "What is the correct form: 'She ___ to school every day'?",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
        explanation: "For third person singular (she), we use 'goes'."
      },
      {
        question: "What time is it? 'It's 2:30'",
        options: ["Two thirty", "Two three zero", "Two thirteen", "Twenty thirty"],
        correct: 0,
        explanation: "2:30 is read as 'two thirty' or 'half past two'."
      },
      {
        question: "Choose the correct sentence:",
        options: ["There is many books", "There are many books", "There be many books", "There has many books"],
        correct: 1,
        explanation: "'There are' is used with plural nouns like 'books'."
      },
      {
        question: "What is the superlative form of 'good'?",
        options: ["Gooder", "More good", "Better", "Best"],
        correct: 3,
        explanation: "The superlative form of 'good' is 'best'."
      },
      {
        question: "How do you ask about someone's age?",
        options: ["How you are?", "How old are you?", "How age you?", "What your age?"],
        correct: 1,
        explanation: "'How old are you?' is the correct way to ask about someone's age."
      }
    ],
    ipa: [
      {
        question: "Proses penguapan air laut yang naik ke atmosfer disebut?",
        options: ["Kondensasi", "Evaporasi", "Presipitasi", "Infiltrasi"],
        correct: 1,
        explanation: "Evaporasi adalah proses penguapan air dari permukaan laut ke atmosfer."
      },
      {
        question: "Organ ekskresi pada manusia adalah?",
        options: ["Jantung", "Ginjal", "Paru-paru", "Lambung"],
        correct: 1,
        explanation: "Ginjal adalah organ ekskresi yang menyaring darah dan menghasilkan urine."
      },
      {
        question: "Energi yang berasal dari matahari disebut energi?",
        options: ["Nuklir", "Kimia", "Surya", "Listrik"],
        correct: 2,
        explanation: "Energi surya atau matahari adalah sumber energi terbarukan."
      },
      {
        question: "Bagian sel tumbuhan yang tidak dimiliki sel hewan adalah?",
        options: ["Inti sel", "Dinding sel", "Sitoplasma", "Membran sel"],
        correct: 1,
        explanation: "Dinding sel adalah struktur khas sel tumbuhan yang tidak dimiliki sel hewan."
      },
      {
        question: "Peristiwa gerhana bulan terjadi ketika?",
        options: ["Bulan di antara bumi dan matahari", "Bumi di antara bulan dan matahari", "Matahari tertutup awan", "Bulan tidak terlihat"],
        correct: 1,
        explanation: "Gerhana bulan terjadi saat bumi berada di antara bulan dan matahari."
      }
    ],
    ips: [
      {
        question: "Bentuk kerjasama ekonomi internasional Indonesia adalah?",
        options: ["Ekspor impor", "ASEAN", "APEC", "Semua benar"],
        correct: 3,
        explanation: "Indonesia melakukan kerjasama ekonomi melalui ekspor-impor dan organisasi seperti ASEAN dan APEC."
      },
      {
        question: "Faktor yang mempengaruhi kepadatan penduduk adalah?",
        options: ["Iklim", "Sumber daya alam", "Lapangan kerja", "Semua benar"],
        correct: 3,
        explanation: "Kepadatan penduduk dipengaruhi oleh iklim, sumber daya alam, dan lapangan kerja."
      },
      {
        question: "Dampak positif perdagangan internasional adalah?",
        options: ["Menambah devisa", "Mengurangi lapangan kerja", "Merusak industri lokal", "Ketergantungan impor"],
        correct: 0,
        explanation: "Perdagangan internasional dapat menambah devisa negara melalui ekspor."
      },
      {
        question: "Contoh sumber daya alam yang dapat diperbaharui adalah?",
        options: ["Minyak bumi", "Hutan", "Gas alam", "Batu bara"],
        correct: 1,
        explanation: "Hutan adalah sumber daya alam yang dapat diperbaharui melalui reboisasi."
      },
      {
        question: "Jalur perdagangan rempah-rempah masa lalu melewati?",
        options: ["Selat Sunda", "Selat Malaka", "Selat Lombok", "Selat Makassar"],
        correct: 1,
        explanation: "Selat Malaka adalah jalur perdagangan rempah-rempah yang penting di masa lalu."
      }
    ]
  },

  // Level 6 (Kelas 6) - Most advanced level
  6: {
    pkn: [
      {
        question: "Sistem pemerintahan Indonesia berdasarkan UUD 1945 adalah?",
        options: ["Presidensial", "Parlementer", "Monarki", "Federal"],
        correct: 0,
        explanation: "Indonesia menganut sistem presidensial dimana presiden sebagai kepala negara dan pemerintahan."
      },
      {
        question: "Apa yang dimaksud dengan otonomi daerah?",
        options: ["Pemerintah pusat mengatur semua", "Daerah mengatur urusan sendiri", "Tidak ada pemerintahan", "Asing yang mengatur"],
        correct: 1,
        explanation: "Otonomi daerah memberikan kewenangan kepada daerah untuk mengatur urusan pemerintahan sendiri."
      },
      {
        question: "Lembaga yang berwenang memilih presiden adalah?",
        options: ["DPR", "DPD", "Rakyat langsung", "MPR"],
        correct: 2,
        explanation: "Presiden dipilih langsung oleh rakyat melalui pemilihan umum."
      },
      {
        question: "Apa prinsip dasar negara hukum?",
        options: ["Supremasi hukum", "Supremasi penguasa", "Supremasi militer", "Supremasi agama"],
        correct: 0,
        explanation: "Negara hukum berprinsip pada supremasi hukum dimana semua tunduk pada hukum."
      },
      {
        question: "Peran generasi muda dalam pembangunan bangsa adalah?",
        options: ["Pasif menunggu", "Aktif berpartisipasi", "Menghindari tanggung jawab", "Hanya mengkritik"],
        correct: 1,
        explanation: "Generasi muda harus aktif berpartisipasi dalam pembangunan bangsa."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Apa perbedaan fakta dan opini?",
        options: ["Tidak ada perbedaan", "Fakta dapat dibuktikan, opini adalah pendapat", "Fakta adalah pendapat", "Opini dapat dibuktikan"],
        correct: 1,
        explanation: "Fakta adalah kenyataan yang dapat dibuktikan, sedangkan opini adalah pendapat pribadi."
      },
      {
        question: "Struktur teks laporan percobaan adalah?",
        options: ["Orientasi-komplikasi-resolusi", "Tujuan-alat-langkah-hasil", "Tesis-argumen-penegasan", "Pernyataan umum-aspek"],
        correct: 1,
        explanation: "Struktur laporan percobaan: tujuan, alat/bahan, langkah-langkah, hasil, kesimpulan."
      },
      {
        question: "Majas yang memberikan sifat manusia pada benda mati disebut?",
        options: ["Metafora", "Simile", "Personifikasi", "Hiperbola"],
        correct: 2,
        explanation: "Personifikasi adalah majas yang memberikan sifat-sifat manusia pada benda mati."
      },
      {
        question: "Kalimat efektif harus memiliki?",
        options: ["Subjek dan predikat jelas", "Banyak kata", "Kalimat panjang", "Bahasa sulit"],
        correct: 0,
        explanation: "Kalimat efektif memiliki subjek dan predikat yang jelas, hemat kata, dan mudah dipahami."
      },
      {
        question: "Apa ciri utama teks persuasi?",
        options: ["Menghibur", "Membujuk/mempengaruhi", "Memberikan informasi", "Menceritakan"],
        correct: 1,
        explanation: "Teks persuasi bertujuan membujuk atau mempengaruhi pembaca untuk melakukan sesuatu."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 0,25 × 1,6?",
        options: ["0,4", "0,3", "0,5", "0,6"],
        correct: 0,
        explanation: "0,25 × 1,6 = 0,4"
      },
      {
        question: "Volume balok dengan p=8cm, l=5cm, t=3cm adalah?",
        options: ["120 cm³", "40 cm³", "80 cm³", "100 cm³"],
        correct: 0,
        explanation: "Volume balok = panjang × lebar × tinggi = 8 × 5 × 3 = 120 cm³"
      },
      {
        question: "Jika 3x + 5 = 14, maka x = ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "3x + 5 = 14, maka 3x = 9, sehingga x = 3"
      },
      {
        question: "Luas lingkaran dengan jari-jari 7 cm adalah? (π = 22/7)",
        options: ["154 cm²", "144 cm²", "164 cm²", "174 cm²"],
        correct: 0,
        explanation: "Luas lingkaran = π × r² = 22/7 × 7² = 22/7 × 49 = 154 cm²"
      },
      {
        question: "Mean dari data 5, 8, 6, 9, 7 adalah?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "Mean = (5+8+6+9+7) ÷ 5 = 35 ÷ 5 = 7"
      }
    ],
    seni_budaya: [
      {
        question: "Prinsip kesatuan dalam seni rupa berarti?",
        options: ["Semua unsur terpisah", "Semua unsur menyatu harmonis", "Warna sama semua", "Bentuk sama semua"],
        correct: 1,
        explanation: "Prinsip kesatuan berarti semua unsur seni menyatu secara harmonis dalam karya."
      },
      {
        question: "Teknik pewarnaan basah dalam melukis menggunakan?",
        options: ["Pensil warna", "Krayon", "Cat air", "Spidol"],
        correct: 2,
        explanation: "Teknik basah menggunakan cat air yang dicampur dengan air."
      },
      {
        question: "Apa yang dimaksud dengan tangga nada diatonik?",
        options: ["5 nada", "7 nada", "8 nada", "12 nada"],
        correct: 1,
        explanation: "Tangga nada diatonik terdiri dari 7 nada: do, re, mi, fa, sol, la, si."
      },
      {
        question: "Fungsi kostum dalam pertunjukan tari adalah?",
        options: ["Hanya hiasan", "Mendukung karakter dan tema", "Membuat mahal", "Menutupi kesalahan"],
        correct: 1,
        explanation: "Kostum tari berfungsi mendukung karakter penari dan tema tarian."
      },
      {
        question: "Apa yang dimaksud dengan apresiasi seni?",
        options: ["Mengkritik seni", "Menghargai dan memahami seni", "Membeli karya seni", "Meniru karya seni"],
        correct: 1,
        explanation: "Apresiasi seni adalah sikap menghargai, memahami, dan menikmati karya seni."
      }
    ],
    penjasorkes: [
      {
        question: "Apa yang dimaksud dengan kebugaran jasmani?",
        options: ["Hanya kuat fisik", "Kemampuan tubuh melakukan aktivitas", "Berat badan ideal", "Tinggi badan ideal"],
        correct: 1,
        explanation: "Kebugaran jasmani adalah kemampuan tubuh untuk melakukan aktivitas tanpa mengalami kelelahan berlebihan."
      },
      {
        question: "Komponen kebugaran jasmani meliputi?",
        options: ["Hanya kekuatan", "Kekuatan, daya tahan, kelenturan", "Hanya daya tahan", "Hanya kelenturan"],
        correct: 1,
        explanation: "Komponen kebugaran jasmani meliputi kekuatan, daya tahan, kelenturan, kecepatan, dan kelincahan."
      },
      {
        question: "RICE untuk pertolongan pertama cedera adalah?",
        options: ["Rumah, Ice, Care, Emergency", "Rest, Ice, Compression, Elevation", "Run, Ice, Call, Emergency", "Red, Ice, Cold, Emergency"],
        correct: 1,
        explanation: "RICE: Rest (istirahat), Ice (es), Compression (kompresi), Elevation (tinggikan)."
      },
      {
        question: "Manfaat olahraga untuk mental adalah?",
        options: ["Membuat stress", "Meningkatkan mood", "Membuat marah", "Mengurangi konsentrasi"],
        correct: 1,
        explanation: "Olahraga dapat meningkatkan mood dan mengurangi stress."
      },
      {
        question: "Prinsip latihan yang benar adalah?",
        options: ["Berlebihan setiap hari", "Bertahap dan teratur", "Sekali dalam setahun", "Tidak perlu istirahat"],
        correct: 1,
        explanation: "Latihan yang efektif harus dilakukan secara bertahap dan teratur dengan istirahat cukup."
      }
    ],
    bahasa_inggris: [
      {
        question: "What is the correct passive voice of 'John writes a letter'?",
        options: ["A letter is written by John", "A letter was written by John", "A letter writes by John", "John is written a letter"],
        correct: 0,
        explanation: "The passive voice uses 'is/are + past participle': 'A letter is written by John'."
      },
      {
        question: "Choose the correct conditional sentence:",
        options: ["If I have money, I will buy it", "If I had money, I will buy it", "If I have money, I would buy it", "If I will have money, I buy it"],
        correct: 0,
        explanation: "Type 1 conditional: If + simple present, will + base verb."
      },
      {
        question: "What is the meaning of 'break a leg'?",
        options: ["Injure yourself", "Good luck", "Run fast", "Jump high"],
        correct: 1,
        explanation: "'Break a leg' is an idiom meaning 'good luck'."
      },
      {
        question: "Which word is a synonym for 'intelligent'?",
        options: ["Stupid", "Smart", "Lazy", "Slow"],
        correct: 1,
        explanation: "'Smart' is a synonym for 'intelligent'."
      },
      {
        question: "What type of text tells a story in sequence?",
        options: ["Descriptive", "Narrative", "Expository", "Persuasive"],
        correct: 1,
        explanation: "Narrative text tells a story with events in sequence."
      }
    ],
    ipa: [
      {
        question: "Apa yang dimaksud dengan fotosintesis?",
        options: ["Proses pernapasan tumbuhan", "Proses pembuatan makanan tumbuhan", "Proses pertumbuhan tumbuhan", "Proses reproduksi tumbuhan"],
        correct: 1,
        explanation: "Fotosintesis adalah proses pembuatan makanan oleh tumbuhan menggunakan cahaya matahari."
      },
      {
        question: "Listrik statis dapat terjadi karena?",
        options: ["Gesekan", "Air", "Angin", "Tanah"],
        correct: 0,
        explanation: "Listrik statis terjadi karena adanya gesekan yang memindahkan elektron."
      },
      {
        question: "Hukum Archimedes menyatakan bahwa?",
        options: ["Benda tenggelam", "Benda terapung karena gaya apung", "Benda melayang", "Benda hancur"],
        correct: 1,
        explanation: "Hukum Archimedes menyatakan bahwa benda dalam fluida mendapat gaya apung."
      },
      {
        question: "Apa fungsi ozon di atmosfer?",
        options: ["Membuat hujan", "Melindungi dari sinar UV", "Menghangatkan bumi", "Membuat angin"],
        correct: 1,
        explanation: "Lapisan ozon melindungi bumi dari radiasi sinar ultraviolet yang berbahaya."
      },
      {
        question: "Ekosistem terdiri dari?",
        options: ["Hanya tumbuhan", "Hanya hewan", "Komponen biotik dan abiotik", "Hanya air"],
        correct: 2,
        explanation: "Ekosistem terdiri dari komponen biotik (makhluk hidup) dan abiotik (tak hidup)."
      }
    ],
    bahasa_indonesia: [
      {
        question: "Apa ciri-ciri teks argumentasi?",
        options: ["Berisi pendapat dengan alasan kuat", "Hanya berisi cerita", "Berisi deskripsi", "Berisi dialog"],
        correct: 0,
        explanation: "Teks argumentasi berisi pendapat atau gagasan yang didukung dengan alasan dan bukti yang kuat."
      },
      {
        question: "Kata berimbuhan yang salah adalah?",
        options: ["Memukul", "Dipukul", "Terpukul", "Berpukul"],
        correct: 3,
        explanation: "'Berpukul' bukan bentuk kata yang benar dalam bahasa Indonesia baku."
      },
      {
        question: "Apa fungsi kata penghubung 'meskipun'?",
        options: ["Menunjukkan waktu", "Menunjukkan pertentangan", "Menunjukkan sebab", "Menunjukkan tujuan"],
        correct: 1,
        explanation: "'Meskipun' adalah kata penghubung yang menunjukkan hubungan pertentangan."
      },
      {
        question: "Diksi dalam karya sastra berarti?",
        options: ["Alur cerita", "Pilihan kata", "Tokoh cerita", "Latar cerita"],
        correct: 1,
        explanation: "Diksi adalah pilihan kata yang tepat dan sesuai untuk mengekspresikan gagasan."
      },
      {
        question: "Apa yang dimaksud dengan kohesi dalam paragraf?",
        options: ["Keterkaitan antar kalimat", "Panjang paragraf", "Jumlah kalimat", "Ukuran huruf"],
        correct: 0,
        explanation: "Kohesi adalah keterkaitan dan kepaduan antar kalimat dalam paragraf."
      }
    ],
    matematika: [
      {
        question: "Berapa hasil dari 2³ × 3² ?",
        options: ["72", "64", "81", "54"],
        correct: 0,
        explanation: "2³ × 3² = 8 × 9 = 72"
      },
      {
        question: "Jika perbandingan umur Ani dan Budi adalah 3:5, dan umur Ani 12 tahun, berapa umur Budi?",
        options: ["15 tahun", "18 tahun", "20 tahun", "25 tahun"],
        correct: 2,
        explanation: "3/5 = 12/x, maka x = (5 × 12) ÷ 3 = 20 tahun"
      },
      {
        question: "Berapa bunga tunggal dari modal Rp 1.000.000 dengan bunga 5% per tahun selama 2 tahun?",
        options: ["Rp 50.000", "Rp 100.000", "Rp 150.000", "Rp 200.000"],
        correct: 1,
        explanation: "Bunga = Modal × Bunga × Waktu = 1.000.000 × 5% × 2 = 100.000"
      },
      {
        question: "Koordinat titik yang terletak di kuadran II adalah?",
        options: ["(3, 4)", "(-3, 4)", "(3, -4)", "(-3, -4)"],
        correct: 1,
        explanation: "Kuadran II memiliki koordinat x negatif dan y positif: (-3, 4)"
      },
      {
        question: "Berapa hasil dari √(169) ?",
        options: ["11", "12", "13", "14"],
        correct: 2,
        explanation: "√169 = 13 karena 13² = 169"
      }
    ],
    seni_budaya: [
      {
        question: "Apa yang dimaksud dengan seni rupa kontemporer?",
        options: ["Seni tradisional", "Seni modern masa kini", "Seni klasik", "Seni kuno"],
        correct: 1,
        explanation: "Seni rupa kontemporer adalah seni rupa modern yang berkembang sesuai zaman."
      },
      {
        question: "Teknik kolase menggunakan?",
        options: ["Cat", "Potongan kertas/bahan", "Tanah liat", "Logam"],
        correct: 1,
        explanation: "Kolase adalah teknik seni yang menggunakan potongan kertas atau bahan lain yang ditempel."
      },
      {
        question: "Interval nada dari Do ke Sol adalah?",
        options: ["Kuart", "Kuint", "Sekst", "Septim"],
        correct: 1,
        explanation: "Interval dari Do ke Sol adalah kuint (5 nada: Do-Re-Mi-Fa-Sol)."
      },
      {
        question: "Apa yang dimaksud dengan improvisasi dalam musik?",
        options: ["Bermain sesuai partitur", "Bermain spontan tanpa partitur", "Bermain dengan alat", "Bermain keras"],
        correct: 1,
        explanation: "Improvisasi adalah bermain musik secara spontan tanpa mengikuti partitur yang sudah ada."
      },
      {
        question: "Unsur desain yang menciptakan kesan gerak adalah?",
        options: ["Warna", "Garis", "Tekstur", "Ruang"],
        correct: 1,
        explanation: "Garis dapat menciptakan kesan gerak dan arah dalam desain."
      }
    ],
    penjasorkes: [
      {
        question: "Apa yang dimaksud dengan VO2 Max?",
        options: ["Kapasitas paru-paru", "Konsumsi oksigen maksimal", "Detak jantung maksimal", "Kekuatan otot maksimal"],
        correct: 1,
        explanation: "VO2 Max adalah konsumsi oksigen maksimal yang dapat digunakan tubuh saat berolahraga."
      },
      {
        question: "Prinsip overload dalam latihan berarti?",
        options: ["Latihan berlebihan", "Beban latihan ditingkatkan bertahap", "Latihan sekali saja", "Latihan tanpa istirahat"],
        correct: 1,
        explanation: "Prinsip overload adalah meningkatkan beban latihan secara bertahap untuk kemajuan."
      },
      {
        question: "Apa manfaat latihan anaerobik?",
        options: ["Meningkatkan daya tahan jantung", "Meningkatkan kekuatan otot", "Menurunkan berat badan", "Meningkatkan kelenturan"],
        correct: 1,
        explanation: "Latihan anaerobik seperti angkat beban bermanfaat meningkatkan kekuatan otot."
      },
      {
        question: "Berapa persen lemak tubuh yang sehat untuk anak?",
        options: ["5-10%", "15-20%", "25-30%", "35-40%"],
        correct: 1,
        explanation: "Persentase lemak tubuh yang sehat untuk anak sekitar 15-20%."
      },
      {
        question: "Apa yang terjadi pada otot saat latihan berlebihan?",
        options: ["Menguat", "Overtraining/cedera", "Tidak berubah", "Mengecil"],
        correct: 1,
        explanation: "Latihan berlebihan dapat menyebabkan overtraining dan meningkatkan risiko cedera."
      }
    ],
    bahasa_inggris: [
      {
        question: "What is the difference between 'affect' and 'effect'?",
        options: ["No difference", "Affect is verb, effect is noun", "Both are verbs", "Both are nouns"],
        correct: 1,
        explanation: "'Affect' is usually a verb meaning to influence, 'effect' is usually a noun meaning result."
      },
      {
        question: "Choose the correct reported speech: He said, 'I am happy'",
        options: ["He said that I am happy", "He said that he is happy", "He said that he was happy", "He said that I was happy"],
        correct: 2,
        explanation: "In reported speech, 'am' changes to 'was' and 'I' changes to 'he'."
      },
      {
        question: "What is a metaphor?",
        options: ["Direct comparison using like/as", "Indirect comparison without like/as", "Exaggeration", "Human qualities to objects"],
        correct: 1,
        explanation: "A metaphor is an indirect comparison that doesn't use 'like' or 'as'."
      },
      {
        question: "Which sentence uses correct subject-verb agreement?",
        options: ["The team are playing well", "The team is playing well", "The team were playing well", "The team be playing well"],
        correct: 1,
        explanation: "'Team' is a collective noun treated as singular, so use 'is'."
      },
      {
        question: "What is the main purpose of a thesis statement?",
        options: ["To conclude an essay", "To introduce the main argument", "To provide examples", "To ask questions"],
        correct: 1,
        explanation: "A thesis statement introduces and summarizes the main argument of an essay."
      }
    ],
    ipa: [
      {
        question: "Apa yang dimaksud dengan biodiversitas?",
        options: ["Keanekaragaman hayati", "Jenis tanah", "Cuaca", "Polusi"],
        correct: 0,
        explanation: "Biodiversitas adalah keanekaragaman hayati atau kehidupan di bumi."
      },
      {
        question: "Rantai makanan dimulai dari?",
        options: ["Konsumen primer", "Konsumen sekunder", "Produsen", "Dekomposer"],
        correct: 2,
        explanation: "Rantai makanan dimulai dari produsen (tumbuhan) yang membuat makanan sendiri."
      },
      {
        question: "Apa penyebab terjadinya gempa bumi?",
        options: ["Hujan lebat", "Pergerakan lempeng tektonik", "Angin kencang", "Suhu panas"],
        correct: 1,
        explanation: "Gempa bumi terjadi karena pergerakan lempeng-lempeng tektonik di kulit bumi."
      },
      {
        question: "Gas rumah kaca yang paling banyak adalah?",
        options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Hidrogen"],
        correct: 1,
        explanation: "Karbon dioksida (CO2) adalah gas rumah kaca utama yang menyebabkan pemanasan global."
      },
      {
        question: "Organ tubuh yang memproduksi insulin adalah?",
        options: ["Hati", "Ginjal", "Pankreas", "Limpa"],
        correct: 2,
        explanation: "Pankreas memproduksi insulin untuk mengatur kadar gula dalam darah."
      }
    ],
    ips: [
      {
        question: "Apa yang dimaksud dengan globalisasi?",
        options: ["Kemerdekaan negara", "Keterkaitan dunia dalam berbagai bidang", "Perang dunia", "Perdamaian dunia"],
        correct: 1,
        explanation: "Globalisasi adalah proses keterkaitan dan ketergantungan dunia dalam berbagai bidang."
      },
      {
        question: "Dampak negatif globalisasi bagi budaya lokal adalah?",
        options: ["Budaya lokal hilang", "Budaya lokal menguat", "Tidak ada dampak", "Budaya lokal berubah positif"],
        correct: 0,
        explanation: "Globalisasi dapat menyebabkan pudarnya atau hilangnya budaya lokal."
      },
      {
        question: "Organisasi internasional yang mengurus perdamaian dunia adalah?",
        options: ["WHO", "UNESCO", "PBB", "IMF"],
        correct: 2,
        explanation: "PBB (Perserikatan Bangsa-Bangsa) bertugas menjaga perdamaian dan keamanan dunia."
      },
      {
        question: "Faktor pendorong urbanisasi adalah?",
        options: ["Lapangan kerja di desa banyak", "Fasilitas kota lebih lengkap", "Biaya hidup kota murah", "Polusi di kota rendah"],
        correct: 1,
        explanation: "Urbanisasi terjadi karena fasilitas dan peluang kerja di kota lebih lengkap."
      },
      {
        question: "Apa yang dimaksud dengan pembangunan berkelanjutan?",
        options: ["Pembangunan yang cepat", "Pembangunan tanpa merusak lingkungan", "Pembangunan yang mahal", "Pembangunan modern"],
        correct: 1,
        explanation: "Pembangunan berkelanjutan memenuhi kebutuhan masa kini tanpa mengorbankan generasi mendatang."
      }
    ]
  }
};

// Boss questions for mixed subject challenges
export const BOSS_QUESTIONS = {
  1: [
    {
      question: "Lambang Pancasila sila pertama adalah bintang, sedangkan 2 + 3 = ?",
      options: ["4", "5", "6", "7"],
      correct: 1,
      subjects: ["pkn", "matematika"]
    },
    {
      question: "Dalam bahasa Inggris 'cat' artinya kucing. Kucing adalah hewan yang berkembang biak dengan?",
      options: ["Bertelur", "Melahirkan", "Membelah diri", "Tunas"],
      correct: 1,
      subjects: ["bahasa_inggris", "ipa"]
    },
    {
      question: "Indonesia berada di benua Asia. Warna primer adalah merah, kuning, dan?",
      options: ["Hijau", "Biru", "Ungu", "Orange"],
      correct: 1,
      subjects: ["ips", "seni_budaya"]
    },
    {
      question: "Untuk kesehatan, kita perlu olahraga. Antonim dari 'sehat' adalah?",
      options: ["Kuat", "Sakit", "Baik", "Cantik"],
      correct: 1,
      subjects: ["penjasorkes", "bahasa_indonesia"]
    }
  ],
  2: [
    {
      question: "Gamelan dari Jawa memiliki nada-nada indah. Berapa hasil dari 6 × 7?",
      options: ["40", "41", "42", "43"],
      correct: 2,
      subjects: ["seni_budaya", "matematika"]
    },
    {
      question: "'Thank you' dalam bahasa Inggris artinya terima kasih. Sila ke-2 Pancasila tentang?",
      options: ["Ketuhanan", "Kemanusiaan", "Persatuan", "Kerakyatan"],
      correct: 1,
      subjects: ["bahasa_inggris", "pkn"]
    }
  ],
  3: [
    {
      question: "Candi Borobudur di Jawa Tengah memiliki luas dasar berbentuk persegi 123m × 123m. Berapa luasnya?",
      options: ["15.129 m²", "15.219 m²", "15.129 m²", "14.129 m²"],
      correct: 0,
      subjects: ["ips", "matematika"]
    }
  ],
  4: [
    {
      question: "Fotosintesis tumbuhan menghasilkan oksigen. 'Oxygen' dalam bahasa Inggris artinya?",
      options: ["Karbon", "Oksigen", "Nitrogen", "Hidrogen"],
      correct: 1,
      subjects: ["ipa", "bahasa_inggris"]
    }
  ],
  5: [
    {
      question: "ASEAN memiliki 10 negara anggota. Jika 40% adalah negara kepulauan, berapa negara kepulauan?",
      options: ["3", "4", "5", "6"],
      correct: 1,
      subjects: ["ips", "matematika"]
    }
  ],
  6: [
    {
      question: "Biodiversitas Indonesia sangat tinggi. Dalam teks argumentasi, ini disebut?",
      options: ["Gagasan penjelas", "Fakta pendukung", "Opini", "Kesimpulan"],
      correct: 1,
      subjects: ["ipa", "bahasa_indonesia"]
    }
  ]
};