// --- 1. DATA SOAL ---
// Masukkan soal Anda di sini dalam format array of objects
const questions = [
    {
        question: "Ibu kota Indonesia adalah...",
        options: ["Surabaya", "Jakarta", "Bandung", "Medan"],
        correctAnswer: "Jakarta",
        explanation: "Jakarta adalah ibu kota negara Republik Indonesia.",
        category: "TWK" 
    },
    {
        question: "Sila ke-3 Pancasila berbunyi...",
        options: ["Ketuhanan Yang Maha Esa", "Kemanusiaan yang Adil dan Beradab", "Persatuan Indonesia", "Keadilan Sosial"],
        correctAnswer: "Persatuan Indonesia",
        explanation: "Bunyi sila ketiga adalah Persatuan Indonesia, dilambangkan pohon beringin.",
        category: "TWK" 
    },
    {
        question: "2 + 2 * 3 = ...",
        options: ["10", "8", "12", "6"],
        correctAnswer: "8",
        explanation: "Perkalian dikerjakan lebih dulu: 2 * 3 = 6, kemudian 2 + 6 = 8.",
        category: "TKD" 
    },
    {
        question: "Antonim dari kata 'Besar' adalah...",
        options: ["Luas", "Lebar", "Kecil", "Tinggi"],
        correctAnswer: "Kecil",
        explanation: "Antonim adalah lawan kata. Lawan kata dari besar adalah kecil.",
        category: "TKD" 
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "5 1 4",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [9, 5, 20, 25, 23],
            part3: "84 89 85"
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "23 seharusnya 21 karena pola nya dikurang 4",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "9 5 10",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [6, 12, 8, 16, 20],
            part3: "24 20 40"
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", //  
        explanation: "20 seharsunya 16 karena pola nya dikurang 4 ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "-3 1 5",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [9, 13, 15, 21, 25],
            part3: "29 33 37"
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "c", // 
        explanation: "15 seharsunya 17 karena pola nya ditambah 4 ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "25 24 27",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [22, 29, 20, 31, 17],
            part3: "33 16 35"
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "17 seharsunya 18 karena pola nya dikurang 2 (2 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "1 2 4",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [5, 7, 8, 10, 12],
            part3: "13 14 16"
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "12 seharsunya 11 karena pola nya ditambah 1 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "27 21 15",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [9, 3, -3, -9 , -18],
            part3: "-21 -27 -33"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "-18 seharsunya -15 karena pola nya dikurang 6 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "49 42 37",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [30, 25, 18, 13 , 5],
            part3: "1 -6 -11"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "5 seharsunya 6 karena pola nya dikurang 7 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "831 277 267",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [89, 30, 27, 21, 7],
            part3: "3 1 -1"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "30 seharsunya 81 karena pola nya dikurang 8 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "30 37 36",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [15, 19, 18, 6, 13],
            part3: "12 4 11"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "a", // 
        explanation: "15 seharsunya 12 karena pola nya dibagi 3 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "1/64 1/32 1/16",
            letters: ["a", "b", "c", "d", "e"],
            numbers: ["1/8", "1/6", "1/2", 1, 2],
            part3: "4 8 16"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "b", // 
        explanation: "1/6 seharsunya 1/4 karena pola nya dikali 2 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "165 55 53",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [57, 51, 17, 21, 7],
            part3: "5 9 3"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "b", // 
        explanation: "51 seharsunya 19 karena pola nya dibagi 3 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "606 603 201",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [198, 189, 63, 21, 18],
            part3: "6 3 1"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "b", // 
        explanation: "189 seharsunya 66 karena pola nya dibagi 3 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "-1 2 4",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [9, 18, 25, 30, 59],
            part3: "118 129 258"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "d", // 
        explanation: "30 seharsunya 50 karena pola nya dikali 2 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "20 162 27",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [54, 34, 18, 41, 24],
            part3: "48 2 55"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "24 seharsunya 6 karena pola nya dibagi 3 (2 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "19 16 13",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [10, 7, 4, 0, -2],
            part3: "-5 -8 -11"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "d", // 
        explanation: "0 seharsunya 1 karena pola nya dikurang 1 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "84 42 52",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [26, 36, 18, 28, 16],
            part3: "24 12 22"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "16 seharsunya 14 karena pola nya dibagi 2 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "1 6 2",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [6, 11, 16, 21, 26],
            part3: "22 66 71"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "c", // 
        explanation: "16 seharsunya 7 karena pola nya dikurang 4 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "72 324 68",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [96, 64, 36, 60, 12],
            part3: "56 4 52"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "a", // 
        explanation: "96 seharsunya 108 karena pola nya dibagi 3 (2 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "-1 1 3",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [5, 10, 17, 51, 53],
            part3: "159 161 483"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "b", // 
        explanation: "20 seharsunya 25 karena pola nya dikali 3 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "729 243 81",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [27, 6, 3, 1, "1/3"],
            part3: "1/9 1/27 1/81"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "b", // 
        explanation: "6 seharsunya 9 karena pola nya dibagi 3 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "1 -1 -2",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [-4, -8, -12, -20, -22],
            part3: "-44 -46 -92"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "c", // 
        explanation: "-12 seharsunya -10 karena pola nya dikurang 2 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "13 16 20",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [25, 27, 30, 34, 37],
            part3: "41 44 48"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "a", // 
        explanation: "25 seharsunya 23 karena pola nya ditambah 3 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "27 21 15",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [9, 3, -3, -9, -18],
            part3: "-21 -27 -33"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "e", // 
        explanation: "-18 seharsunya -15 karena pola nya dikurang 6 (1 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "11 24 15",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [21, 19, 20, 23, 15],
            part3: "27 12 31"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "c", // 
        explanation: "20 seharsunya 18 karena pola nya dikurang 3 (2 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        question: "Manakah huruf yang memiliki pola atau nilai yang berbeda dari kelompoknya?", // Ini contoh pertanyaan eksplisit
        sequence: { // Objek baru untuk data deret
            part1: "2 10 4",
            letters: ["a", "b", "c", "d", "e"],
            numbers: [22, 28, 34, 16, 46],
            part3: "32 58 64"  
        },
        options: ["a", "b", "c", "d", "e"], // Opsi sesuai gambar (A, B, C, D)
        correctAnswer: "b", // 
        explanation: "28 seharsunya 8 karena pola nya dikali 2 (2 larik) ",
        category: "TKD" // Atau kategori spesifik "Pola Deret"
    },
    {
        type: 'image_logic',
        question: "Perhatikan pola hubungan gambar berikut. Tentukan gambar yang tepat untuk mengisi tanda tanya.",
        category: "TKD",

        // BAGIAN 1: Gambar Fakta (Gunakan nama file tanpa _combined)
        fact_images: [
            // Pastikan file 'images/fact_row_1.png' benar-benar ada dan
            // berisi gambar gabungan kiri->kanan untuk fakta 1
            { image: 'images/fact_row_1.png', label: '1' },
            { image: 'images/fact_row_2.png', label: '2' },
            { image: 'images/fact_row_3.png', label: '3' },
            { image: 'images/fact_row_4.png', label: '4' },
            { image: 'images/fact_row_5.png', label: '5' },
        ],

        // BAGIAN 2: Gambar Soal Utama (Gunakan nama file tanpa _combined)
        // Pastikan file 'images/main_question.png' berisi gambar gabungan ?->kanan
        main_question_image: 'images/main_question.png',

        // BAGIAN 3: Gambar Pilihan Jawaban (Tetap Sama)
        options: [
            { id: 'A', image: 'images/opsi_a.png' },
            { id: 'B', image: 'images/opsi_b.png' },
            { id: 'C', image: 'images/opsi_c.png' },
            { id: 'D', image: 'images/opsi_d.png' },
            { id: 'E', image: 'images/opsi_e.png' }
        ],

        correctAnswer: 'E', // Sesuaikan
        explanation: "Pencerminan Vertikal",
        // timeLimit: 60 // Opsional
    },
    {
        question: "Lembaga yang berwenang memeriksa pengelolaan dan tanggung jawab keuangan negara adalah...",
        options: ["BPK", "KPK", "MA", "DPR"],
        correctAnswer: "BPK",
        explanation: "BPK (Badan Pemeriksa Keuangan) adalah lembaga negara yang memiliki wewenang memeriksa pengelolaan dan tanggung jawab keuangan negara.",
        category: "TWK"
    },
    {
        question: "Sila pertama dalam Pancasila adalah...",
        options: ["Kemanusiaan yang adil dan beradab", "Ketuhanan Yang Maha Esa", "Keadilan sosial bagi seluruh rakyat Indonesia", "Persatuan Indonesia"],
        correctAnswer: "Ketuhanan Yang Maha Esa",
        explanation: "Sila pertama dalam Pancasila adalah 'Ketuhanan Yang Maha Esa' yang mencerminkan dasar spiritual dan religius bangsa Indonesia.",
        category: "TWK"
    },
    {
        question: "UUD 1945 pertama kali disahkan pada tanggal...",
        options: ["1 Juni 1945", "17 Agustus 1945", "18 Agustus 1945", "20 Oktober 1945"],
        correctAnswer: "18 Agustus 1945",
        explanation: "UUD 1945 disahkan oleh PPKI pada tanggal 18 Agustus 1945, sehari setelah Proklamasi Kemerdekaan.",
        category: "TWK"
    },
    {
        question: "Semboyan negara Indonesia adalah...",
        options: ["Garuda Pancasila", "Indonesia Raya", "Bhinneka Tunggal Ika", "Tanah Air Beta"],
        correctAnswer: "Bhinneka Tunggal Ika",
        explanation: "Bhinneka Tunggal Ika berarti 'Berbeda-beda tetapi tetap satu', mencerminkan keberagaman suku, budaya, dan agama di Indonesia.",
        category: "TWK"
    },
    {
        question: "Strategi 'devide et impera' yang diterapkan Belanda terhadap bangsa Indonesia berarti...",
        options: ["Bersatu kita teguh, bercerai kita runtuh", "Membagi wilayah Indonesia menjadi beberapa provinsi", "Memecah belah kekuatan bangsa untuk dikuasai", "Menjajah melalui perdagangan"],
        correctAnswer: "Memecah belah kekuatan bangsa untuk dikuasai",
        explanation: "'Devide et impera' adalah strategi penjajahan Belanda yang berarti 'adu domba' atau 'memecah belah', dengan tujuan agar bangsa Indonesia tidak bersatu dan mudah untuk dikuasai.",
        category: "TWK"
    },
    {
        question: "Contoh nyata penerapan politik 'devide et impera' oleh Belanda di Indonesia adalah...",
        options: ["Mengadu domba antar kerajaan atau suku", "Mendirikan sekolah untuk pribumi", "Memberikan hak suara kepada rakyat", "Membangun infrastruktur jalan"],
        correctAnswer: "Mengadu domba antar kerajaan atau suku",
        explanation: "Belanda sering mengadu domba antar kerajaan atau suku di Indonesia agar mereka saling bertikai dan tidak bersatu melawan penjajahan.",
        category: "TWK"
    },
    {
        question: "Tujuan utama dari politik adu domba (devide et impera) adalah...",
        options: ["Membangun solidaritas bangsa", "Menghindari peperangan", "Menguasai wilayah dengan mudah", "Melindungi kepentingan rakyat"],
        correctAnswer: "Menguasai wilayah dengan mudah",
        explanation: "Dengan memecah belah kelompok-kelompok lokal, penjajah dapat lebih mudah menguasai wilayah karena tidak ada perlawanan yang terorganisir.",
        category: "TWK"
    },
    {
        question: "Contoh pengamalan sila pertama Pancasila dalam kehidupan sehari-hari adalah...",
        options: ["Menghormati agama orang lain", "Bersikap adil kepada sesama", "Bermusyawarah dalam mengambil keputusan", "Menjaga persatuan di lingkungan masyarakat"],
        correctAnswer: "Menghormati agama orang lain",
        explanation: "Sila pertama Pancasila, 'Ketuhanan Yang Maha Esa', diwujudkan dalam sikap saling menghormati antar umat beragama.",
        category: "TWK"
    },
    {
        question: "Sikap membantu tetangga yang sedang kesusahan mencerminkan pengamalan sila ke...",
        options: ["Kedua", "Ketiga", "Keempat", "Kelima"],
        correctAnswer: "Kedua",
        explanation: "Sila kedua berbunyi 'Kemanusiaan yang adil dan beradab', salah satunya diwujudkan dalam sikap saling tolong-menolong.",
        category: "TWK"
    },
    {
        question: "Contoh pengamalan sila ketiga Pancasila adalah...",
        options: ["Beribadah sesuai agama masing-masing", "Mengutamakan kepentingan bangsa di atas kepentingan pribadi", "Menghormati pendapat orang lain", "Membayar pajak tepat waktu"],
        correctAnswer: "Mengutamakan kepentingan bangsa di atas kepentingan pribadi",
        explanation: "Sila ketiga, 'Persatuan Indonesia', menekankan pentingnya mengutamakan persatuan dan kepentingan nasional.",
        category: "TWK"
    },
    {
        question: "Sikap suka bermusyawarah dalam mengambil keputusan mencerminkan pengamalan sila ke...",
        options: ["Pertama", "Kedua", "Keempat", "Kelima"],
        correctAnswer: "Keempat",
        explanation: "Sila keempat berbunyi 'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan', yang diwujudkan dalam musyawarah mufakat.",
        category: "TWK"
    },
    {
        question: "Contoh pengamalan sila kelima Pancasila adalah...",
        options: ["Menghargai pendapat orang lain", "Bersikap adil kepada sesama", "Berdoa sebelum makan", "Ikut dalam pemilihan umum"],
        correctAnswer: "Bersikap adil kepada sesama",
        explanation: "Sila kelima, 'Keadilan sosial bagi seluruh rakyat Indonesia', menekankan pentingnya keadilan dalam kehidupan bermasyarakat.",
        category: "TWK"
    },
    {
        question: "Salah satu tugas utama MPR menurut UUD 1945 adalah...",
        options: ["Membuat undang-undang", "Mengangkat duta besar", "Mengubah dan menetapkan Undang-Undang Dasar", "Melaksanakan putusan pengadilan"],
        correctAnswer: "Mengubah dan menetapkan Undang-Undang Dasar",
        explanation: "Menurut Pasal 3 UUD 1945, MPR memiliki wewenang untuk mengubah dan menetapkan Undang-Undang Dasar.",
        category: "TWK"
    },
    {
        question: "Lembaga negara yang berwenang melantik Presiden dan/atau Wakil Presiden adalah...",
        options: ["DPR", "MA", "MPR", "KPU"],
        correctAnswer: "MPR",
        explanation: "MPR memiliki wewenang melantik Presiden dan/atau Wakil Presiden berdasarkan hasil pemilu.",
        category: "TWK"
    },
    {
        question: "Jika Presiden dan Wakil Presiden mangkat secara bersamaan, MPR bertugas untuk...",
        options: ["Menunjuk pengganti dari kalangan militer", "Menetapkan pelaksana tugas Presiden", "Memilih Presiden dan Wakil Presiden baru dari dua calon yang diusulkan DPR", "Menunjuk Ketua Mahkamah Agung sebagai Presiden"],
        correctAnswer: "Memilih Presiden dan Wakil Presiden baru dari dua calon yang diusulkan DPR",
        explanation: "Sesuai UUD 1945 Pasal 8 Ayat (3), MPR memilih Presiden dan Wakil Presiden dari dua calon yang diusulkan DPR apabila terjadi kekosongan jabatan.",
        category: "TWK"
    },
    {
        question: "Keanggotaan MPR terdiri atas...",
        options: ["Hanya anggota DPR", "Anggota DPR dan Presiden", "Anggota DPR dan DPD", "Anggota DPR dan MA"],
        correctAnswer: "Anggota DPR dan DPD",
        explanation: "MPR terdiri dari anggota DPR dan anggota DPD sebagaimana diatur dalam Pasal 2 UUD 1945.",
        category: "TWK"
    },
    {
        question: "Berikut ini yang bukan merupakan wewenang MPR adalah...",
        options: ["Mengubah UUD", "Melantik Presiden", "Mengangkat menteri", "Memutuskan usul pemberhentian Presiden"],
        correctAnswer: "Mengangkat menteri",
        explanation: "Pengangkatan menteri merupakan hak prerogatif Presiden, bukan wewenang MPR.",
        category: "TWK"
    },
    {
        question: "Trias Politica adalah teori pemisahan kekuasaan yang dikemukakan oleh...",
        options: ["John Locke", "Karl Marx", "Montesquieu", "Thomas Hobbes"],
        correctAnswer: "Montesquieu",
        explanation: "Teori Trias Politica dikemukakan oleh Montesquieu dalam bukunya 'L'esprit des lois' untuk mencegah kekuasaan absolut.",
        category: "TWK"
    },
    {
        question: "Berikut ini yang termasuk dalam tiga cabang kekuasaan menurut teori Trias Politica adalah...",
        options: ["Eksekutif, Yudikatif, Legislatif", "Presiden, Menteri, DPR", "Negara, Rakyat, Pemerintah", "Pusat, Provinsi, Kabupaten"],
        correctAnswer: "Eksekutif, Yudikatif, Legislatif",
        explanation: "Trias Politica membagi kekuasaan negara menjadi tiga, yaitu eksekutif (pelaksana), legislatif (pembuat UU), dan yudikatif (pengawas hukum).",
        category: "TWK"
    },
    {
        question: "Di Indonesia, lembaga yang menjalankan fungsi legislatif adalah...",
        options: ["Mahkamah Agung", "DPR", "Presiden", "KPK"],
        correctAnswer: "DPR",
        explanation: "DPR (Dewan Perwakilan Rakyat) menjalankan fungsi legislatif, yaitu membuat undang-undang bersama Presiden.",
        category: "TWK"
    },
    {
        question: "Lembaga yang menjalankan kekuasaan eksekutif di Indonesia adalah...",
        options: ["DPR dan DPD", "Mahkamah Konstitusi", "Presiden dan Wakil Presiden", "BPK dan MA"],
        correctAnswer: "Presiden dan Wakil Presiden",
        explanation: "Presiden dan Wakil Presiden menjalankan kekuasaan eksekutif, yaitu menjalankan pemerintahan sehari-hari.",
        category: "TWK"
    },
    {
        question: "Yang termasuk lembaga yudikatif di Indonesia adalah...",
        options: ["Presiden dan DPR", "MA dan MK", "DPR dan DPD", "BPK dan KPU"],
        correctAnswer: "MA dan MK",
        explanation: "Lembaga yudikatif di Indonesia adalah Mahkamah Agung (MA) dan Mahkamah Konstitusi (MK), yang berperan dalam menegakkan hukum dan konstitusi.",
        category: "TWK"
    },
    {
        question: "Bentuk partisipasi warga negara dalam usaha pertahanan negara adalah...",
        options: ["Membayar pajak", "Menjadi anggota partai politik", "Mengikuti pelatihan bela negara", "Berjualan di lingkungan TNI"],
        correctAnswer: "Mengikuti pelatihan bela negara",
        explanation: "Salah satu bentuk partisipasi warga negara dalam usaha pertahanan negara adalah mengikuti pelatihan bela negara sebagaimana diatur dalam Undang-Undang.",
        category: "TWK"
    },
    {
        question: "Dasar hukum penyelenggaraan pertahanan negara di Indonesia adalah...",
        options: ["UUD 1945 Pasal 27 Ayat (3)", "UUD 1945 Pasal 30", "Undang-Undang Perpajakan", "Undang-Undang Pemilu"],
        correctAnswer: "UUD 1945 Pasal 30",
        explanation: "UUD 1945 Pasal 30 mengatur hak dan kewajiban warga negara dalam usaha pertahanan dan keamanan negara.",
        category: "TWK"
    },
    {
        question: "Komponen utama dalam sistem pertahanan negara adalah...",
        options: ["Polisi", "Rakyat", "TNI", "Satpol PP"],
        correctAnswer: "TNI",
        explanation: "Menurut UU No. 3 Tahun 2002 tentang Pertahanan Negara, TNI merupakan komponen utama dalam sistem pertahanan negara.",
        category: "TWK"
    },
    {
        question: "Warga negara memiliki hak dan kewajiban dalam usaha pertahanan dan keamanan negara. Hal ini tertuang dalam...",
        options: ["Pasal 28", "Pasal 30", "Pasal 33", "Pasal 35"],
        correctAnswer: "Pasal 30",
        explanation: "Pasal 30 UUD 1945 menyatakan bahwa tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara.",
        category: "TWK"
    },
    {
        question: "Sistem pertahanan negara Indonesia bersifat...",
        options: ["Statis dan terpusat", "Total dan semesta", "Sentralistik dan ofensif", "Eksekutif dan represif"],
        correctAnswer: "Total dan semesta",
        explanation: "Pertahanan negara Indonesia menganut sistem pertahanan rakyat semesta, yang melibatkan seluruh warga negara, wilayah, dan sumber daya nasional secara total.",
        category: "TWK"
    },
    {
        question: "Tokoh pejuang wanita dari Aceh yang dikenal Belanda dengan nama 'Joan of Arc dari Aceh' adalah...",
        options: ["Cut Nyak Dien", "Cut Meutia", "Laksamana Malahayati", "Rohana Kudus"],
        correctAnswer: "Cut Nyak Dien",
        explanation: "Cut Nyak Dien dijuluki 'Joan of Arc dari Aceh' oleh Belanda karena keberaniannya memimpin perlawanan rakyat Aceh melawan penjajahan.",
        category: "TWK"
    },
    {
        question: "Cut Nyak Dien dikenal oleh Belanda karena...",
        options: ["Menjadi duta besar Aceh di Belanda", "Berjuang gigih melawan penjajahan Belanda di Aceh", "Menjadi guru bagi anak-anak Belanda", "Mendirikan sekolah Belanda di Aceh"],
        correctAnswer: "Berjuang gigih melawan penjajahan Belanda di Aceh",
        explanation: "Cut Nyak Dien adalah pahlawan nasional yang memimpin perlawanan rakyat Aceh melawan penjajahan Belanda setelah gugurnya suaminya, Teuku Umar.",
        category: "TWK"
    },
    {
        question: "Menghargai dan menghormati perbedaan agama di lingkungan masyarakat merupakan contoh pengamalan sila ke...",
        options: ["Pertama", "Kedua", "Ketiga", "Keempat"],
        correctAnswer: "Pertama",
        explanation: "Penghormatan terhadap perbedaan agama mencerminkan pengamalan sila pertama Pancasila yaitu 'Ketuhanan Yang Maha Esa'.",
        category: "TWK"
    },
    {
        question: "Mengikuti kerja bakti membersihkan lingkungan adalah wujud pengamalan sila ke...",
        options: ["Kedua", "Ketiga", "Keempat", "Kelima"],
        correctAnswer: "Ketiga",
        explanation: "Kerja bakti mencerminkan semangat persatuan dan gotong royong yang merupakan nilai dari sila ketiga Pancasila, 'Persatuan Indonesia'.",
        category: "TWK"
    },
    {
        question: "Sikap adil dalam memperlakukan teman tanpa membedakan suku dan agama mencerminkan pengamalan sila ke...",
        options: ["Pertama", "Kedua", "Keempat", "Kelima"],
        correctAnswer: "Kedua",
        explanation: "Sila kedua Pancasila, 'Kemanusiaan yang adil dan beradab', mengajarkan kita untuk memperlakukan sesama manusia secara adil dan beradab tanpa diskriminasi.",
        category: "TWK"
    },
    {
        question: "Menghargai pendapat orang lain saat diskusi merupakan pengamalan sila ke...",
        options: ["Pertama", "Kedua", "Keempat", "Kelima"],
        correctAnswer: "Keempat",
        explanation: "Sikap menghargai pendapat merupakan bentuk dari pengamalan sila keempat, 'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan'.",
        category: "TWK"
    },
    {
        question: "Berusaha membantu teman yang kurang mampu di sekolah adalah contoh pengamalan sila ke...",
        options: ["Kedua", "Ketiga", "Keempat", "Kelima"],
        correctAnswer: "Kelima",
        explanation: "Tindakan membantu sesama mencerminkan pengamalan sila kelima Pancasila yaitu 'Keadilan sosial bagi seluruh rakyat Indonesia'.",
        category: "TWK"
    },
    {
        question: "Dr. Snouck Hurgronje dikenal sebagai seorang orientalis yang berperan penting dalam kolonialisme Belanda di Indonesia. Salah satu perannya yang kontroversial adalah...",
        options: ["Menjadi penasihat Belanda dalam menghadapi perlawanan Aceh", "Mengorganisir perlawanan terhadap Belanda di Sumatera", "Mendirikan sekolah-sekolah Islam di Jawa", "Mendirikan organisasi pergerakan kemerdekaan Indonesia"],
        correctAnswer: "Menjadi penasihat Belanda dalam menghadapi perlawanan Aceh",
        explanation: "Dr. Snouck Hurgronje adalah seorang orientalis Belanda yang terkenal karena peranannya sebagai penasihat kolonial Belanda dalam menghadapi perlawanan rakyat Aceh pada masa penjajahan.",
        category: "TWK"
    },
    {
        question: "Dr. Snouck Hurgronje memanfaatkan pengetahuan tentang budaya Aceh untuk...",
        options: ["Menggali potensi ekonomi Aceh", "Mengendalikan perlawanan Aceh dengan cara diplomatik", "Membantu perjuangan kemerdekaan Indonesia", "Mendirikan sekolah agama di Aceh"],
        correctAnswer: "Mengendalikan perlawanan Aceh dengan cara diplomatik",
        explanation: "Dr. Snouck Hurgronje menggunakan pengetahuan mendalam tentang budaya dan agama Aceh untuk mengendalikan perlawanan dengan cara diplomatik, termasuk memanfaatkan perbedaan dalam masyarakat Aceh.",
        category: "TWK"
    },
    {
        question: "Abdul Gafur adalah seorang tokoh penting dalam pergerakan kemerdekaan Indonesia, terutama dalam perjuangan di Aceh. Beliau dikenal karena...",
        options: ["Mendirikan organisasi perlawanan di Aceh", "Bergabung dengan pasukan Belanda untuk melawan perlawanan Indonesia", "Menjadi jenderal dalam perang kemerdekaan Indonesia", "Menulis buku tentang sejarah perjuangan Aceh"],
        correctAnswer: "Mendirikan organisasi perlawanan di Aceh",
        explanation: "Abdul Gafur adalah seorang tokoh perlawanan yang berperan dalam memimpin perjuangan rakyat Aceh melawan penjajahan Belanda dengan mendirikan organisasi-organisasi perlawanan.",
        category: "TWK"
    },
    {
        question: "Dalam konteks perjuangan Indonesia, Dr. Snouck Hurgronje sering dikritik karena peranannya yang lebih menguntungkan Belanda. Ia dikenal sebagai...",
        options: ["Pahlawan Indonesia", "Penasihat Belanda dalam menghadapi Aceh", "Pemimpin perjuangan kemerdekaan", "Pengikut perlawanan Indonesia"],
        correctAnswer: "Penasihat Belanda dalam menghadapi Aceh",
        explanation: "Dr. Snouck Hurgronje dikenal karena peranannya sebagai penasihat Belanda yang menggunakan pengetahuan tentang budaya Aceh untuk mengatasi perlawanan rakyat Aceh.",
        category: "TWK"
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 berisi tentang...",
        options: ["Pembubaran partai politik", "Kembalinya UUD 1945 sebagai dasar negara", "Pemberontakan di wilayah Indonesia Timur", "Pembentukan pemerintahan darurat"],
        correctAnswer: "Kembalinya UUD 1945 sebagai dasar negara",
        explanation: "Dekrit Presiden 5 Juli 1959 mengembalikan UUD 1945 sebagai dasar negara setelah sebelumnya menggunakan UUD Sementara 1950.",
        category: "TWK"
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 dikeluarkan oleh Presiden Soekarno karena...",
        options: ["Pemerintahan tidak dapat berjalan sesuai dengan UUD Sementara", "Adanya ancaman dari luar negeri", "Pemberontakan daerah yang meluas", "Proses pemilu yang berlangsung tidak lancar"],
        correctAnswer: "Pemerintahan tidak dapat berjalan sesuai dengan UUD Sementara",
        explanation: "Dekrit Presiden 5 Juli 1959 dikeluarkan karena pemerintahan Indonesia tidak dapat berjalan efektif dengan menggunakan UUD Sementara 1950, sehingga Presiden Soekarno memutuskan untuk kembali ke UUD 1945.",
        category: "TWK"
    },
    {
        question: "Akibat dikeluarkannya Dekrit Presiden 5 Juli 1959, Indonesia kembali ke sistem pemerintahan...",
        options: ["Presidensial", "Parlementer", "Demokrasi Pancasila", "Berbasis desentralisasi"],
        correctAnswer: "Presidensial",
        explanation: "Dengan dikeluarkannya Dekrit Presiden, Indonesia kembali menggunakan sistem pemerintahan presidensial sesuai dengan UUD 1945.",
        category: "TWK"
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 juga menyebabkan pembubaran...",
        options: ["Partai Nasional Indonesia", "Dewan Konstituante", "DPR", "Mahkamah Agung"],
        correctAnswer: "Dewan Konstituante",
        explanation: "Pembubaran Dewan Konstituante terjadi setelah dikeluarkannya Dekrit Presiden 5 Juli 1959 karena Dewan Konstituante gagal merumuskan UUD yang baru dan menyebabkan ketegangan politik.",
        category: "TWK"
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 memiliki pengaruh besar terhadap sistem pemerintahan Indonesia, karena...",
        options: ["Mengganti UUD 1945 dengan UUD Sementara", "Menyatukan kembali Indonesia setelah pemberontakan", "Menghentikan sistem parlementer dan mengembalikan sistem presidensial", "Membentuk sistem kerajaan di Indonesia"],
        correctAnswer: "Menghentikan sistem parlementer dan mengembalikan sistem presidensial",
        explanation: "Dekrit Presiden 5 Juli 1959 menghentikan sistem parlementer yang ada pada masa itu dan mengembalikan sistem pemerintahan presidensial berdasarkan UUD 1945.",
        category: "TWK"
    },
    {
        question: "Jenderal J.H.R. Kohler adalah tokoh Belanda yang tewas dalam pertempuran saat menyerbu wilayah...",
        options: ["Surabaya", "Banten", "Aceh", "Padang"],
        correctAnswer: "Aceh",
        explanation: "Jenderal J.H.R. Kohler adalah tokoh militer Belanda yang memimpin penyerangan ke Kesultanan Aceh pada tahun 1873 dan tewas dalam pertempuran di Masjid Raya Baiturrahman, Banda Aceh.",
        category: "TWK"
    },
    {
        question: "Peristiwa gugurnya Jenderal Kohler menandai dimulainya...",
        options: ["Perang Diponegoro", "Perang Aceh", "Perang Padri", "Perang Jawa"],
        correctAnswer: "Perang Aceh",
        explanation: "Gugurnya Jenderal Kohler pada tahun 1873 menjadi penanda dimulainya Perang Aceh antara Kesultanan Aceh dengan pemerintah kolonial Belanda.",
        category: "TWK"
    },
    {
        question: "Jenderal J.H.R. Kohler tewas saat mencoba merebut salah satu tempat suci umat Islam di Aceh, yaitu...",
        options: ["Masjid Agung Al-Azhar", "Masjid Raya Baiturrahman", "Masjid Al-Aqsa", "Masjid Salman"],
        correctAnswer: "Masjid Raya Baiturrahman",
        explanation: "Jenderal Kohler tewas ditembak oleh pejuang Aceh di halaman Masjid Raya Baiturrahman pada saat serangan militer Belanda terhadap Kesultanan Aceh.",
        category: "TWK"
    },
    {
        question: "Jenderal Jan van Swieten dikenal sebagai tokoh Belanda yang memimpin pasukan dalam perang melawan...",
        options: ["Perang Diponegoro", "Perang Aceh", "Perang Padri", "Perang Bali"],
        correctAnswer: "Perang Aceh",
        explanation: "Jan van Swieten adalah jenderal Belanda yang ditugaskan memimpin ekspedisi militer Belanda kedua ke Aceh setelah kematian Jenderal Kohler dalam perang Aceh pertama.",
        category: "TWK"
    },
    {
        question: "Tujuan utama pengiriman Jenderal Jan van Swieten ke Aceh adalah...",
        options: ["Menggantikan posisi Sultan Aceh", "Menjalin kerja sama ekonomi", "Melanjutkan serangan militer setelah gugurnya Jenderal Kohler", "Mendirikan sekolah Belanda di Aceh"],
        correctAnswer: "Melanjutkan serangan militer setelah gugurnya Jenderal Kohler",
        explanation: "Setelah Jenderal Kohler gugur pada tahun 1873, Jan van Swieten dikirim ke Aceh untuk memimpin ekspedisi militer kedua dan memperkuat pendudukan Belanda di wilayah tersebut.",
        category: "TWK"
    },
    {
        question: "Kebijakan militer yang dilakukan oleh Jan van Swieten dalam Perang Aceh menyebabkan...",
        options: ["Aceh langsung menyerah", "Perang Aceh semakin meluas dan berlangsung lama", "Kemenangan cepat Belanda", "Pengangkatan Jan van Swieten sebagai raja di Aceh"],
        correctAnswer: "Perang Aceh semakin meluas dan berlangsung lama",
        explanation: "Meskipun Jan van Swieten berhasil menguasai ibu kota Kesultanan Aceh, namun perlawanan rakyat Aceh terus berlanjut dengan perang gerilya yang membuat perang berlangsung puluhan tahun.",
        category: "TWK"
    },
    {
        question: "Salah satu isi Dekrit Presiden 5 Juli 1959 adalah...",
        options: [
          "Pembentukan Majelis Permusyawaratan Rakyat Sementara (MPRS)",
          "Pemberlakuan kembali UUD 1945 dan tidak berlakunya UUDS 1950",
          "Pemilihan umum presiden secara langsung",
          "Pembubaran kabinet parlementer"
        ],
        correctAnswer: "Pemberlakuan kembali UUD 1945 dan tidak berlakunya UUDS 1950",
        explanation: "Dekrit Presiden 5 Juli 1959 menyatakan bahwa UUD 1945 kembali diberlakukan dan UUDS 1950 tidak berlaku lagi karena kegagalan Konstituante dalam menetapkan UUD baru.",
        category: "TWK"
    },
    {
        question: "Isi penting dari Dekrit Presiden 5 Juli 1959 adalah pembubaran...",
        options: ["DPR", "MPR", "Konstituante", "Kabinet"],
        correctAnswer: "Konstituante",
        explanation: "Salah satu isi Dekrit Presiden adalah pembubaran Konstituante karena dianggap gagal menjalankan tugasnya menyusun UUD baru.",
        category: "TWK"
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 dikeluarkan karena...",
        options: [
          "Tuntutan mahasiswa untuk mengganti presiden",
          "Pemilu tidak dapat dilaksanakan",
          "Konstituante gagal menetapkan UUD baru",
          "Kudeta militer sedang berlangsung"
        ],
        correctAnswer: "Konstituante gagal menetapkan UUD baru",
        explanation: "Konstituante gagal mencapai kesepakatan dalam merumuskan UUD baru, sehingga Presiden Soekarno mengeluarkan Dekrit untuk kembali ke UUD 1945.",
        category: "TWK"
    },
    {
        type: 'reading_comprehension', // Tipe baru untuk soal bacaan
        category: 'TKD', // Atau kategori lain yang sesuai, misal: 'Penalaran Logis'
        // --- Bagian Bacaan ---
        passage_title: "PROGRAM PENDIDIKAN INKLUSI",
        passage_intro: "SMP Harapan Bangsa adalah salah satu sekolah yang menerapkan program pendidikan inklusi, di mana siswa berkebutuhan khusus belajar bersama dengan siswa reguler dalam satu kelas. Sekolah ini percaya bahwa pendidikan inklusi dapat membantu menciptakan lingkungan belajar yang lebih inklusif dan saling menghargai.\nBeberapa fakta tentang SMP Harapan Bangsa:", // \n untuk baris baru potensial
        passage_facts: [ // Array untuk menyimpan fakta bernomor
            "1. Program pendidikan inklusi ini sudah berjalan selama lebih dari lima tahun.",
            "2. Setiap kelas memiliki maksimal 25 siswa, dengan dua hingga tiga siswa berkebutuhan khusus di dalamnya.",
            "3. Sekolah menyediakan guru pendamping khusus untuk membantu siswa berkebutuhan khusus dalam proses belajar.",
            "4. Dalam survei terbaru, 85% orang tua siswa menyatakan puas dengan sistem pendidikan inklusi yang diterapkan sekolah ini.",
            "5. SMP Harapan Bangsa sering dijadikan model oleh sekolah lain yang ingin menerapkan pendidikan inklusi."
        ],
        // --- Bagian Pertanyaan & Kesimpulan ---
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:", // Pertanyaan eksplisit
        conclusion: "Semua siswa berkebutuhan khusus di SMP Harapan Bangsa mendapatkan pendampingan khusus.", // Simpulan yang dievaluasi
        // --- Opsi Jawaban & Penjelasan ---
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Tidak dapat disimpulkan",
        explanation: "Fakta nomor 3 hanya menyebutkan bahwa sekolah menyediakan guru pendamping khusus, namun tidak dijelaskan secara eksplisit apakah semua siswa berkebutuhan khusus mendapat pendampingan. Karena itu, simpulan tersebut tidak dapat dipastikan kebenarannya.",
        // timeLimit: 90 // Opsional: Beri waktu lebih lama jika perlu
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "PENGELOLAAN SAMPAH DI KOTA MANDIRI",
        passage_intro: "Kota Mandiri merupakan salah satu kota yang berhasil menerapkan sistem pengelolaan sampah berbasis masyarakat. Pemerintah kota bekerja sama dengan berbagai komunitas lokal untuk meningkatkan kesadaran warga tentang pentingnya pengelolaan sampah yang berkelanjutan.\nBeberapa fakta tentang Kota Mandiri:",
        passage_facts: [
            "1. Program pemilahan sampah dari rumah tangga sudah berjalan selama tiga tahun.",
            "2. Terdapat lebih dari 150 bank sampah aktif yang tersebar di seluruh kecamatan.",
            "3. Pemerintah kota memberikan insentif bagi warga yang aktif dalam kegiatan daur ulang.",
            "4. Volume sampah yang masuk ke tempat pembuangan akhir berkurang hingga 40% dalam dua tahun terakhir.",
            "5. Kota Mandiri meraih penghargaan nasional atas inovasi pengelolaan sampah berbasis komunitas."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Pengelolaan sampah di Kota Mandiri hanya dilakukan oleh pemerintah kota tanpa peran serta masyarakat.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah salah",
        explanation: "Fakta menunjukkan bahwa pengelolaan sampah dilakukan bersama antara pemerintah kota dan masyarakat, seperti melalui bank sampah dan insentif daur ulang. Maka, simpulan bahwa hanya pemerintah yang berperan adalah keliru."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "GERAKAN NASIONAL BANGGA BUATAN INDONESIA",
        passage_intro: "Gerakan Nasional Bangga Buatan Indonesia (BBI) diluncurkan oleh pemerintah sebagai upaya untuk meningkatkan kecintaan masyarakat terhadap produk lokal. Gerakan ini melibatkan berbagai kementerian, pelaku usaha, dan masyarakat dalam mendukung UMKM agar mampu bersaing di pasar nasional maupun global.\nBeberapa fakta tentang pelaksanaan program BBI:",
        passage_facts: [
            "1. Program ini resmi diluncurkan pada Mei 2020 oleh Presiden Republik Indonesia.",
            "2. Lebih dari 20 juta UMKM telah tergabung dalam program ini melalui berbagai platform digital.",
            "3. Pemerintah bekerja sama dengan marketplace untuk meningkatkan visibilitas produk lokal.",
            "4. Kementerian BUMN turut aktif memfasilitasi pelatihan digitalisasi dan manajemen usaha bagi UMKM.",
            "5. Salah satu target utama gerakan ini adalah meningkatkan penggunaan produk dalam negeri dalam pengadaan barang dan jasa pemerintah serta BUMN."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Gerakan Bangga Buatan Indonesia hanya difokuskan pada promosi produk lokal di luar negeri.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah salah",
        explanation: "Fakta-fakta menyebutkan bahwa gerakan ini fokus pada peningkatan konsumsi produk lokal di dalam negeri, melalui pelibatan UMKM, digitalisasi, dan dukungan BUMN serta pemerintah. Tidak ada indikasi bahwa fokus utamanya adalah promosi di luar negeri.",
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "PERUSAHAAN TEKNOLOGI STARTUP",
        passage_intro: "PT Inovasi Digital adalah perusahaan startup yang bergerak di bidang teknologi kecerdasan buatan (AI). Perusahaan ini didirikan oleh tiga orang lulusan perguruan tinggi ternama di Indonesia yang memiliki pengalaman di industri teknologi. Dalam lima tahun terakhir, perusahaan ini telah berkembang pesat dan mendapatkan investasi dari berbagai pihak.\nBeberapa fakta tentang PT Inovasi Digital:",
        passage_facts: [
            "1. Perusahaan memiliki lebih dari 200 karyawan yang sebagian besar merupakan insinyur perangkat lunak.",
            "2. Salah satu produknya adalah chatbot berbasis AI yang digunakan oleh banyak perusahaan e-commerce.",
            "3. PT Inovasi Digital mendapatkan pendanaan Seri B senilai 15 juta dolar dari investor asing.",
            "4. Perusahaan telah meraih penghargaan sebagai “Startup Terbaik” dalam ajang nasional selama dua tahun berturut-turut.",
            "5. Meskipun berkembang pesat, perusahaan tetap menghadapi tantangan dalam pengembangan teknologi karena keterbatasan tenaga ahli AI di Indonesia."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "PT Inovasi Digital telah mendapatkan penghargaan nasional sebagai startup terbaik selama dua tahun terakhir.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 4 secara eksplisit menyebutkan bahwa perusahaan telah meraih penghargaan sebagai 'Startup Terbaik' dalam ajang nasional selama dua tahun berturut-turut, sehingga simpulan tersebut didukung oleh data yang tersedia."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "PERUSAHAAN TEKNOLOGI STARTUP",
        passage_intro: "PT Inovasi Digital adalah perusahaan startup yang bergerak di bidang teknologi kecerdasan buatan (AI). Perusahaan ini didirikan oleh tiga orang lulusan perguruan tinggi ternama di Indonesia yang memiliki pengalaman di industri teknologi. Dalam lima tahun terakhir, perusahaan ini telah berkembang pesat dan mendapatkan investasi dari berbagai pihak.\nBeberapa fakta tentang PT Inovasi Digital:",
        passage_facts: [
            "1. Perusahaan memiliki lebih dari 200 karyawan yang sebagian besar merupakan insinyur perangkat lunak.",
            "2. Salah satu produknya adalah chatbot berbasis AI yang digunakan oleh banyak perusahaan e-commerce.",
            "3. PT Inovasi Digital mendapatkan pendanaan Seri B senilai 15 juta dolar dari investor asing.",
            "4. Perusahaan telah meraih penghargaan sebagai “Startup Terbaik” dalam ajang nasional selama dua tahun berturut-turut.",
            "5. Meskipun berkembang pesat, perusahaan tetap menghadapi tantangan dalam pengembangan teknologi karena keterbatasan tenaga ahli AI di Indonesia."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "PT Inovasi Digital tidak mengalami kendala apa pun dalam pengembangan teknologinya.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah salah",
        explanation: "Fakta nomor 5 menyebutkan bahwa perusahaan menghadapi tantangan dalam pengembangan teknologi karena keterbatasan tenaga ahli AI di Indonesia. Maka simpulan bahwa perusahaan tidak mengalami kendala adalah salah."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "BISNIS KEDAI KOPI REZA",
        passage_intro: "Reza adalah seorang pengusaha muda yang mendirikan kedai kopi kecil di dekat kampus universitas. Kedainya menawarkan berbagai jenis kopi dengan harga yang terjangkau bagi mahasiswa. Berkat strategi pemasaran yang efektif dan kualitas kopi yang baik, bisnisnya berkembang pesat dalam satu tahun terakhir.\nBeberapa fakta tentang kedai kopi Reza:",
        passage_facts: [
            "1. Kedai buka dari pukul 08.00 hingga 22.00 setiap hari.",
            "2. Rata-rata kedai menjual 120 gelas kopi per hari dengan harga rata-rata Rp15.000 per gelas.",
            "3. Biaya operasional harian kedai (sewa tempat, gaji pegawai, dan bahan baku) mencapai Rp1.200.000.",
            "4. Pada bulan tertentu, kedai memberikan diskon khusus sebesar 10% untuk mahasiswa.",
            "5. Keuntungan bersih dihitung dari total pendapatan dikurangi biaya operasional."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Kedai kopi Reza lebih banyak dikunjungi mahasiswa dibandingkan pelanggan umum.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Tidak dapat disimpulkan",
        explanation: "Meskipun kedai berada di dekat kampus dan menawarkan diskon untuk mahasiswa, tidak ada data kuantitatif atau perbandingan yang menyatakan bahwa mahasiswa lebih banyak dibandingkan pelanggan umum."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "PIETER BOTH - GUBERNUR JENDERAL PERTAMA HINDIA BELANDA",
        passage_intro: "Pieter Both adalah Gubernur Jenderal pertama dari Hindia Belanda yang menjabat pada tahun 1609 hingga 1614. Ia merupakan tokoh penting dalam sejarah awal kolonialisme Belanda di wilayah Nusantara. Pieter Both berperan besar dalam mendirikan dan memperkuat kedudukan Vereenigde Oostindische Compagnie (VOC) di Indonesia.\nBeberapa fakta tentang Pieter Both:",
        passage_facts: [
            "1. Pieter Both diangkat sebagai Gubernur Jenderal pertama VOC di Hindia Belanda pada tahun 1609.",
            "2. Ia berhasil menaklukkan beberapa wilayah penting seperti Ambon dan Banda.",
            "3. Pemerintahannya berfokus pada penguasaan perdagangan rempah-rempah.",
            "4. Pieter Both meninggal dalam pelayaran pulang ke Belanda pada tahun 1615 akibat kapalnya karam di Laut Jawa.",
            "5. Ia dikenal sebagai tokoh awal yang meletakkan dasar kekuasaan kolonial Belanda di Indonesia."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Pieter Both merupakan tokoh awal yang memperkuat kekuasaan kolonial Belanda di Indonesia.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 5 secara eksplisit menyatakan bahwa Pieter Both meletakkan dasar kekuasaan kolonial Belanda di Indonesia. Hal ini menunjukkan simpulan tersebut benar."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "JAN PIETERSZOON COEN - ARSITEK KOLONIALISME BELANDA",
        passage_intro: "Jan Pieterszoon Coen adalah salah satu tokoh penting dalam sejarah penjajahan Belanda di Indonesia. Ia dikenal sebagai pendiri Batavia dan tokoh yang memperkuat dominasi VOC di wilayah kepulauan Indonesia pada awal abad ke-17. Coen menjabat sebagai Gubernur Jenderal VOC sebanyak dua kali, dan terkenal karena kebijakan militernya yang keras.\nBeberapa fakta tentang Jan Pieterszoon Coen:",
        passage_facts: [
            "1. Jan Pieterszoon Coen pertama kali diangkat sebagai Gubernur Jenderal VOC pada tahun 1619.",
            "2. Ia memimpin penaklukan Jayakarta dan mengganti namanya menjadi Batavia, yang menjadi pusat kekuasaan VOC.",
            "3. Coen dikenal dengan kebijakan tangan besi dalam menaklukkan daerah-daerah penghasil rempah seperti Banda.",
            "4. Ia kembali menjabat sebagai Gubernur Jenderal pada tahun 1627 hingga wafatnya pada tahun 1629.",
            "5. Banyak kebijakannya yang menuai kontroversi karena dianggap terlalu kejam oleh sebagian pihak."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Jan Pieterszoon Coen berperan besar dalam memperkuat dominasi VOC di Indonesia melalui pendekatan militer.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 2 dan 3 menjelaskan tindakan Coen dalam menaklukkan Jayakarta dan Banda dengan kekuatan militer, serta penggantian nama menjadi Batavia. Ini menunjukkan peran pentingnya dalam memperkuat VOC."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "HERMAN WILLEM DAENDELS - GUBERNUR JENDERAL MASA PRANCIS",
        passage_intro: "Herman Willem Daendels diangkat sebagai Gubernur Jenderal Hindia Belanda oleh Raja Louis Bonaparte dari Belanda pada masa pengaruh Prancis (1808–1811). Ia dikenal sebagai tokoh yang membawa reformasi administrasi dan infrastruktur di wilayah kolonial, terutama dengan pembangunan jalan raya dari Anyer hingga Panarukan.\nBeberapa fakta tentang Daendels:",
        passage_facts: [
            "1. Daendels menjabat sebagai Gubernur Jenderal Hindia Belanda dari tahun 1808 hingga 1811.",
            "2. Ia membangun Jalan Raya Pos (Grote Postweg) sepanjang lebih dari 1.000 km dari Anyer hingga Panarukan.",
            "3. Daendels memperkuat pertahanan militer di wilayah Jawa karena ancaman Inggris.",
            "4. Ia melakukan reformasi sistem birokrasi dan peradilan di bawah pengaruh sistem pemerintahan Prancis.",
            "5. Masa pemerintahannya ditandai dengan kerja paksa yang menimbulkan penderitaan bagi rakyat."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Daendels memberikan kontribusi besar terhadap infrastruktur kolonial di Indonesia.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 2 secara jelas menyebutkan pembangunan Jalan Raya Pos oleh Daendels, yang merupakan proyek infrastruktur besar pada masa kolonial. Ini mendukung simpulan bahwa kontribusinya pada infrastruktur cukup signifikan."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "JOHANNES VAN DEN BOSCH - PENGGAGAS TANAM PAKSA",
        passage_intro: "Johannes van den Bosch adalah Gubernur Jenderal Hindia Belanda yang dikenal sebagai pencetus sistem tanam paksa atau Cultuurstelsel. Kebijakan ini diterapkan pada tahun 1830 sebagai cara untuk meningkatkan pendapatan pemerintah kolonial Belanda dari wilayah jajahannya di Indonesia. Meskipun menghasilkan keuntungan besar bagi Belanda, sistem ini menuai kritik karena menimbulkan penderitaan bagi rakyat pribumi.\nBeberapa fakta tentang Van den Bosch:",
        passage_facts: [
            "1. Van den Bosch menjabat sebagai Gubernur Jenderal Hindia Belanda mulai tahun 1830.",
            "2. Ia memperkenalkan sistem tanam paksa, mewajibkan petani menanam tanaman ekspor seperti kopi, gula, dan nila.",
            "3. Sistem ini menyebabkan kesengsaraan di kalangan petani karena pengambilan hasil panen oleh pemerintah kolonial.",
            "4. Belanda memperoleh keuntungan besar dari hasil tanam paksa yang dikirim ke Eropa.",
            "5. Sistem tanam paksa mendapat kritik dari tokoh-tokoh Belanda sendiri, termasuk dalam buku Max Havelaar karya Multatuli."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Van den Bosch menciptakan kebijakan yang menguntungkan Belanda namun merugikan rakyat Indonesia.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 2, 3, dan 4 menunjukkan bahwa kebijakan tanam paksa memberikan keuntungan bagi Belanda tetapi membawa penderitaan bagi rakyat. Maka, simpulan tersebut didukung oleh fakta yang tersedia."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "CORNELIS SPEELMAN - TOKOH KOLONIAL BELANDA",
        passage_intro: "Cornelis Speelman adalah seorang pejabat tinggi VOC yang memainkan peran penting dalam memperkuat kekuasaan Belanda di Indonesia pada abad ke-17. Ia dikenal karena keberhasilannya dalam menaklukkan berbagai wilayah, termasuk kerajaan-kerajaan di Jawa dan Sulawesi. Sebagai seorang pemimpin militer dan politik, Speelman berperan besar dalam perluasan kekuasaan VOC di Nusantara.\nBeberapa fakta tentang Cornelis Speelman:",
        passage_facts: [
            "1. Cornelis Speelman bergabung dengan VOC pada usia muda dan cepat meraih posisi penting.",
            "2. Ia terkenal karena keberhasilannya menaklukkan kerajaan Makassar di Sulawesi pada tahun 1667.",
            "3. Speelman juga berperan dalam menaklukkan kerajaan Mataram di Jawa pada masa pemerintahannya.",
            "4. Pada tahun 1674, Speelman diangkat menjadi Gubernur Jenderal VOC setelah berhasil memperluas wilayah jajahan Belanda.",
            "5. Di bawah kepemimpinannya, VOC berhasil menguasai sejumlah wilayah penting di Indonesia, meskipun dengan cara-cara yang sering kali menggunakan kekerasan."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Cornelis Speelman berperan besar dalam memperluas wilayah kekuasaan Belanda di Indonesia melalui strategi militer.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 3, 4, dan 5 menunjukkan bahwa Speelman menggunakan kekuatan militer untuk menaklukkan kerajaan-kerajaan besar di Indonesia, yang memperkuat kekuasaan VOC di Nusantara."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "VAN IMHOOF - TOKOH KOLONIAL BELANDA",
        passage_intro: "Van Imhoof adalah seorang tokoh penting dalam sejarah kolonialisme Belanda di Indonesia. Ia terkenal karena posisinya dalam administrasi pemerintahan kolonial dan kontribusinya terhadap kebijakan dan struktur pemerintahan yang diterapkan oleh Belanda di Nusantara pada abad ke-19. Sebagai seorang pejabat tinggi, Van Imhoof memiliki peran dalam mengawasi sistem tanam paksa serta mengelola hubungan antara Belanda dan kerajaan-kerajaan di Indonesia.\nBeberapa fakta tentang Van Imhoof:",
        passage_facts: [
            "1. Van Imhoof merupakan seorang pejabat tinggi Belanda yang bekerja di Hindia Belanda pada abad ke-19.",
            "2. Ia berperan penting dalam kebijakan pemerintahan kolonial dan administrasi di daerah-daerah jajahan Belanda.",
            "3. Van Imhoof mengawasi pelaksanaan sistem tanam paksa yang memberikan keuntungan besar bagi Belanda.",
            "4. Ia bekerja untuk memperkuat sistem birokrasi kolonial Belanda dan menjaga hubungan antara pemerintah Belanda dan kerajaan-kerajaan lokal.",
            "5. Van Imhoof dikenal sebagai tokoh yang mendukung kebijakan kolonial untuk meningkatkan pengaruh Belanda di Indonesia."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Van Imhoof berperan dalam memperkuat kebijakan kolonial Belanda di Indonesia, termasuk pelaksanaan sistem tanam paksa.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 3 dan 5 menyatakan bahwa Van Imhoof berperan dalam pelaksanaan sistem tanam paksa dan mendukung kebijakan kolonial untuk memperkuat pengaruh Belanda di Indonesia, yang mendukung simpulan tersebut."
    },
    {
        type: 'reading_comprehension',
        category: 'TKD',
        passage_title: "NICHOLAS HARTING - TOKOH KOLONIAL BELANDA",
        passage_intro: "Nicholas Harting adalah seorang pejabat Belanda yang dikenal karena perannya dalam administrasi kolonial di Indonesia pada abad ke-19. Ia berkontribusi dalam pengelolaan ekonomi kolonial, terutama dalam bidang pertanian dan pengelolaan sumber daya alam. Selain itu, Harting juga berperan dalam hubungan antara Belanda dan kerajaan-kerajaan lokal di Indonesia.\nBeberapa fakta tentang Nicholas Harting:",
        passage_facts: [
            "1. Nicholas Harting adalah pejabat Belanda yang bekerja di Hindia Belanda pada abad ke-19.",
            "2. Ia terlibat dalam kebijakan ekonomi kolonial yang bertujuan untuk memaksimalkan keuntungan bagi Belanda.",
            "3. Harting bekerja sama dengan pemerintah Belanda dalam mengelola sektor pertanian dan sumber daya alam di Indonesia.",
            "4. Ia juga berperan dalam menjaga hubungan diplomatik antara Belanda dan kerajaan-kerajaan lokal di Indonesia.",
            "5. Nicholas Harting dikenal sebagai tokoh yang mendukung kebijakan Belanda untuk memperkuat dominasi ekonomi dan politik di Indonesia."
        ],
        question: "Berdasarkan fakta-fakta di atas, evaluasilah simpulan berikut:",
        conclusion: "Nicholas Harting berperan dalam memperkuat dominasi kolonial Belanda di Indonesia melalui kebijakan ekonomi dan hubungan diplomatik.",
        options: ["Simpulan adalah benar", "Simpulan adalah salah", "Tidak dapat disimpulkan"],
        correctAnswer: "Simpulan adalah benar",
        explanation: "Fakta nomor 2, 3, dan 5 menyatakan bahwa Harting terlibat dalam kebijakan ekonomi yang menguntungkan Belanda dan berperan dalam memperkuat dominasi kolonial melalui hubungan diplomatik, yang mendukung simpulan tersebut."
    },
    {
        type: 'image_logic',
        question: "Perhatikan pola hubungan gambar berikut. Tentukan gambar yang tepat untuk mengisi tanda tanya.",
        category: "TKD",

        // BAGIAN 1: Gambar Fakta (Gunakan nama file)
        fact_images: [
            // berisi gambar gabungan kiri->kanan untuk fakta 1
            { image: 'images/fact_row_1_2.png', label: '1' },
            { image: 'images/fact_row_2_2.png', label: '2' },
            { image: 'images/fact_row_3_2.png', label: '3' },
            { image: 'images/fact_row_4_2.png', label: '4' },
            { image: 'images/fact_row_5_2.png', label: '5' },
        ],

        // BAGIAN 2: Gambar Soal Utama (Gunakan nama file tanpa _combined)
        // Pastikan file 'images/main_question.png' berisi gambar gabungan ?->kanan
        main_question_image: 'images/main_question_2.png',

        // BAGIAN 3: Gambar Pilihan Jawaban (Tetap Sama)
        options: [
            { id: 'A', image: 'images/opsi_a_2.png' },
            { id: 'B', image: 'images/opsi_b_2.png' },
            { id: 'C', image: 'images/opsi_c_2.png' },
            { id: 'D', image: 'images/opsi_d_2.png' },
            { id: 'E', image: 'images/opsi_e_2.png' }
        ],

        correctAnswer: 'C', // Sesuaikan
        explanation: "Cukup Jelas",
        // timeLimit: 60 // Opsional
    },
    
    // ... soal-soal lain ...

    // Tambahkan soal-soal RBB Anda di sini...
    // Contoh soal AKHLAK:
    // {
    //     question: "Menjaga nama baik sesama karyawan, pimpinan, BUMN, dan Negara termasuk pengamalan nilai AKHLAK...",
    //     options: ["Amanah", "Kompeten", "Harmonis", "Loyal"],
    //     correctAnswer: "Loyal",
    //     explanation: "Salah satu panduan perilaku Loyal adalah menjaga nama baik sesama."
    // }
];

const TIME_PER_QUESTION = 60; // Detik per soal (sesuaikan!)

// --- 2. VARIABEL GLOBAL & ELEMEN DOM ---
let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false; // Untuk menandai apakah jawaban sudah dipilih
let timerInterval; // Untuk menyimpan ID interval timer
let timeLeft;      // Untuk menyimpan sisa waktu soal saat ini
let currentQuizQuestions = []; // <-- BARU: Menyimpan soal untuk kuis saat ini

const quizContainerEl = document.getElementById('quiz-container');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsAreaEl = document.getElementById('options-area');
const nextButtonEl = document.getElementById('next-button');
const resultAreaEl = document.getElementById('result-area');
const feedbackEl = document.getElementById('feedback');
const explanationEl = document.getElementById('explanation');
const scoreEl = document.getElementById('score');
const totalQuestionsEl = document.getElementById('total-questions');
const timerDisplayEl = document.getElementById('timer');
const timerInfoEl = document.getElementById('timer-info'); // Untuk hide/show
// Elemen Pemilihan Kategori (BARU)
const categorySelectionEl = document.getElementById('category-selection');
const btnTkd = document.getElementById('btn-tkd');
const btnTwk = document.getElementById('btn-twk');
const backButtonEl = document.getElementById('back-button');

// --- 3. FUNGSI-FUNGSI ---


// Fungsi untuk mengacak array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    let shuffled = [...array]; // Buat salinan array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Indeks acak
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Tukar elemen
    }
    return shuffled;
}
// Fungsi untuk menampilkan soal berdasarkan index
function displayQuestion(index) {
    console.log("DISPLAY index:", index); // (Log untuk debug, bisa dihapus nanti)
    console.log("DISPLAY using array length:", currentQuizQuestions.length); // (Log untuk debug)
    answerSelected = false; // Reset status pemilihan jawaban
    resultAreaEl.style.display = 'none'; // Sembunyikan hasil sebelumnya
    nextButtonEl.style.display = 'block'; // Tampilkan lagi tombol next/selesai
    nextButtonEl.disabled = true; // Nonaktifkan tombol next awal
    timerInfoEl.style.display = 'block';
    clearInterval(timerInterval);
    timerDisplayEl.classList.remove('critical');

    // Area baru untuk deret visual
    const sequenceDisplayEl = document.getElementById('sequence-display');
    sequenceDisplayEl.innerHTML = ''; // Kosongkan dulu
    sequenceDisplayEl.style.display = 'none'; // Sembunyikan dulu
    const oldPuzzleArea = document.getElementById('image-puzzle-area');
    if (oldPuzzleArea) oldPuzzleArea.remove();
    // Kosongkan area opsi SEBELUM rendering spesifik tipe
    optionsAreaEl.innerHTML = '';
    // Sembunyikan/kosongkan area spesifik dari tipe lain
    sequenceDisplayEl.innerHTML = '';
    sequenceDisplayEl.style.display = 'none';
    if (oldPuzzleArea) oldPuzzleArea.remove();
    // Hapus area bacaan lama jika ada
    const oldPassageArea = document.getElementById('passage-area');
    if (oldPassageArea) oldPassageArea.remove();

    if (index >= currentQuizQuestions.length) {
        questionTextEl.textContent = "Latihan Selesai!";
        optionsAreaEl.innerHTML = '';
        nextButtonEl.style.display = 'none';
        timerInfoEl.style.display = 'none';
        resultAreaEl.style.display = 'block';
        // PERBAIKAN: Tampilkan total dari currentQuizQuestions
        feedbackEl.textContent = `Skor Akhir Anda: ${score} dari ${currentQuizQuestions.length}`;
        explanationEl.textContent = "Pilih kategori lain atau refresh halaman.";
        resultAreaEl.className = 'result-area';
        // TAMPILKAN TOMBOL KEMBALI
        backButtonEl.style.display = 'block'; // Atau 'inline-block' sesuai styling
        return;
    }

    const currentQuestion = currentQuizQuestions[index];
    console.log("DISPLAY question data:", currentQuestion); // Log data soal
    questionNumberEl.textContent = `Soal ${index + 1} dari ${currentQuizQuestions.length}`;
    questionTextEl.textContent = '';

    // --- RENDER SOAL & OPSI BERDASARKAN TIPE ---
    if (currentQuestion.type === 'image_logic') {
        const newImagePuzzleArea = document.createElement('div');
        newImagePuzzleArea.id = 'image-puzzle-area';
        const questionAreaEl = document.getElementById('question-area');
        questionAreaEl.appendChild(newImagePuzzleArea); // Tambahkan area puzzle

        // 1. Tampilkan Gambar Fakta
        const examplesContainer = document.createElement('div');
        examplesContainer.classList.add('image-examples-container');
        newImagePuzzleArea.appendChild(examplesContainer);
        currentQuestion.fact_images.forEach(fact => {
            // ... (kode render fakta - sudah benar) ...
             const factContainer = document.createElement('div');
            factContainer.classList.add('fact-image-container');
            const imgElement = document.createElement('img');
            imgElement.src = fact.image;
            imgElement.alt = `Fakta Pola ${fact.label}`;
            imgElement.classList.add('fact-image');
            factContainer.appendChild(imgElement);
            if (fact.label) {
                const labelSpan = document.createElement('span');
                labelSpan.classList.add('fact-image-label');
                labelSpan.textContent = fact.label;
                factContainer.appendChild(labelSpan);
            }
            examplesContainer.appendChild(factContainer);
        });

        // 2. Tampilkan Gambar Soal Utama
        const puzzleContainer = document.createElement('div');
        puzzleContainer.classList.add('main-question-image-container');
        newImagePuzzleArea.appendChild(puzzleContainer);
        const mainImgElement = document.createElement('img');
        mainImgElement.src = currentQuestion.main_question_image;
        mainImgElement.alt = "Soal Utama";
        mainImgElement.classList.add('main-question-image');
        puzzleContainer.appendChild(mainImgElement);

        // 3. Tampilkan Pilihan Jawaban Gambar
        // optionsAreaEl.innerHTML = ''; // Sudah dikosongkan di awal
        optionsAreaEl.classList.add('image-options-grid'); // Set styling
        const shuffledOptions = shuffleArray(currentQuestion.options);
        shuffledOptions.forEach(option => {
            const optionContainer = document.createElement('div');
            optionContainer.classList.add('image-option-container');
            optionContainer.dataset.optionId = option.id;
            optionContainer.innerHTML = `
                <span class="image-option-label">Opsi ${option.id}</span>
                <div class="image-box option-image-box">
                    <img src="${option.image}" alt="Opsi ${option.id}">
                </div>
            `;
            optionContainer.onclick = () => selectAnswer(optionContainer, option.id, currentQuestion.correctAnswer, currentQuestion.explanation);
            optionsAreaEl.appendChild(optionContainer);
        });

    } else if (currentQuestion.sequence) {
        // Tampilkan visual deret
        sequenceDisplayEl.style.display = 'flex';
        let sequenceHTML = '';
        // ... (kode render sequence display - sudah benar) ...
         if (currentQuestion.sequence.part1) { sequenceHTML += `<span class="sequence-part">${currentQuestion.sequence.part1}</span><span class="sequence-separator">|</span>`; }
         if (currentQuestion.sequence.letters && currentQuestion.sequence.numbers) { sequenceHTML += `<span class="sequence-part letter-group">`; currentQuestion.sequence.letters.forEach((letter, i) => { sequenceHTML += `<span class="letter-number-pair"><span class="letter">${letter}</span><span class="number">${currentQuestion.sequence.numbers[i]}</span></span>`; }); sequenceHTML += `</span>`; }
         if (currentQuestion.sequence.part3) { sequenceHTML += `<span class="sequence-separator">|</span><span class="sequence-part">${currentQuestion.sequence.part3}</span>`; }
        sequenceDisplayEl.innerHTML = sequenceHTML;

        // Tampilkan opsi berlabel untuk sequence
        // optionsAreaEl.innerHTML = ''; // Sudah dikosongkan di awal
        optionsAreaEl.classList.remove('image-options-grid'); // Hapus styling grid
        const shuffledSeqOptions = shuffleArray(currentQuestion.options);
        shuffledSeqOptions.forEach((optionValue, optionIndex) => {
            const optionContainer = document.createElement('div');
            optionContainer.classList.add('option-container', 'labeled-option');
            optionContainer.dataset.optionValue = optionValue;
             // ... (kode render opsi berlabel - sudah benar) ...
            const labelSpan = document.createElement('span'); labelSpan.classList.add('option-label'); labelSpan.textContent = `Option ${String.fromCharCode(65 + optionIndex)}`;
            const checkboxVisualSpan = document.createElement('span'); checkboxVisualSpan.classList.add('option-checkbox-visual');
            const valueSpan = document.createElement('span'); valueSpan.classList.add('option-value'); valueSpan.textContent = optionValue;
            optionContainer.appendChild(labelSpan); optionContainer.appendChild(checkboxVisualSpan); optionContainer.appendChild(valueSpan);
            optionContainer.onclick = () => selectAnswer(optionContainer, optionValue, currentQuestion.correctAnswer, currentQuestion.explanation);
            optionsAreaEl.appendChild(optionContainer);
        });

    } else if (currentQuestion.type === 'reading_comprehension') { // <<<=== BLOK BARU
        optionsAreaEl.classList.remove('image-options-grid'); // Hapus styling grid

        // 1. Buat Kontainer untuk Bacaan
        const passageArea = document.createElement('div');
        passageArea.id = 'passage-area'; // ID untuk styling
        // BENAR:
        const questionAreaEl = document.getElementById('question-area'); // Dapatkan div question-area
        questionAreaEl.appendChild(passageArea); // Tambahkan passageArea sebagai anak terakhirnya
        // 2. Tampilkan Judul Bacaan (jika ada)
        if (currentQuestion.passage_title) {
            const titleEl = document.createElement('h4'); // Atau h3
            titleEl.id = 'passage-title';
            titleEl.textContent = currentQuestion.passage_title;
            passageArea.appendChild(titleEl);
        }
        // 3. Tampilkan Intro Bacaan
        if (currentQuestion.passage_intro) {
            const introEl = document.createElement('p');
            introEl.id = 'passage-intro';
            introEl.textContent = currentQuestion.passage_intro;
            // introEl.style.whiteSpace = 'pre-line'; // Agar \n jadi baris baru
            passageArea.appendChild(introEl);
        }

        // 4. Tampilkan Fakta-fakta Bacaan
        if (currentQuestion.passage_facts && currentQuestion.passage_facts.length > 0) {
            const factsList = document.createElement('div'); // Atau <ol> jika ingin nomor otomatis
            factsList.id = 'passage-facts-list';
            currentQuestion.passage_facts.forEach(factText => {
                const factEl = document.createElement('p'); // Atau <li> jika pakai <ol>
                factEl.classList.add('passage-fact');
                factEl.textContent = factText;
                factsList.appendChild(factEl);
            });
            passageArea.appendChild(factsList);
        }

        // 5. Tampilkan Pertanyaan Eksplisit (jika ada)
        if (currentQuestion.question) {
             const questionReadingEl = document.createElement('p');
             questionReadingEl.id = 'reading-question-text';
             questionReadingEl.textContent = currentQuestion.question;
             passageArea.appendChild(questionReadingEl);
        }


        // 6. Tampilkan Kesimpulan yang Dievaluasi
        if (currentQuestion.conclusion) {
            const conclusionEl = document.createElement('blockquote'); // Blockquote cocok untuk kutipan/simpulan
            conclusionEl.id = 'conclusion-text';
            conclusionEl.textContent = currentQuestion.conclusion;
            passageArea.appendChild(conclusionEl);
        }

        // 7. Tampilkan Opsi Jawaban (Gunakan logika tombol standar)
        const shuffledOptions = shuffleArray(currentQuestion.options);
        shuffledOptions.forEach(textOption => {
            const button = document.createElement('button');
            button.textContent = textOption;
            button.classList.add('option-button'); // Pakai class tombol biasa
            // Pastikan selectAnswer dipanggil dengan benar
            button.onclick = () => selectAnswer(button, textOption, currentQuestion.correctAnswer, currentQuestion.explanation);
            optionsAreaEl.appendChild(button);
        });

    } else { // Untuk soal teks biasa (default)
        // ... (Kode rendering soal teks biasa - TIDAK BERUBAH) ...
        questionTextEl.textContent = currentQuestion.question; // Set teks pertanyaan default
        optionsAreaEl.classList.remove('image-options-grid'); // Hapus styling grid
        // Update total soal di score area
        // ... (render tombol opsi teks) ...
        const shuffledTextOptions = shuffleArray(currentQuestion.options);
        shuffledTextOptions.forEach(textOption => {
            const button = document.createElement('button');
            button.textContent = textOption;
            button.classList.add('option-button');
            button.onclick = () => selectAnswer(button, textOption, currentQuestion.correctAnswer, currentQuestion.explanation);
            optionsAreaEl.appendChild(button);
        });
    }
    // --- AKHIR BLOK RENDER SPESIFIK TIPE ---
    totalQuestionsEl.textContent = currentQuizQuestions.length;

    // Modifikasi teks tombol next (Ini boleh tetap di sini)
    nextButtonEl.textContent = (index === currentQuizQuestions.length - 1) ? "Selesai" : "Soal Berikutnya";

     // Mulai timer untuk soal baru (Ini boleh tetap di sini)
    const timeLimit = currentQuestion.timeLimit || TIME_PER_QUESTION; // Ambil time limit jika ada
    startTimer(timeLimit); // Gunakan timeLimit saat memulai timer
}

// Fungsi yang dijalankan saat pilihan jawaban diklik
function selectAnswer(clickedElement, selectedValue, correctAnswer, explanation) {
    if (answerSelected) return; // Jika sudah memilih, jangan proses lagi

    clearInterval(timerInterval);

    answerSelected = true; // Tandai sudah memilih
    nextButtonEl.disabled = false; // Aktifkan tombol next

    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    
    // Nonaktifkan semua tombol pilihan setelah memilih
    const allOptions = optionsAreaEl.querySelectorAll('.option-button, .option-container, .image-option-container');
    allOptions.forEach(optEl => {
        optEl.classList.add('disabled'); // Gunakan class 'disabled' untuk visual
        if (optEl.tagName === 'BUTTON') {
            optEl.disabled = true;
        }
    });


    // Tampilkan hasil dan penjelasan
    resultAreaEl.style.display = 'block';
    explanationEl.textContent = `Penjelasan: ${explanation}`;

    if (selectedValue === correctAnswer) {
        score++;
        scoreEl.textContent = score; // Update skor
        feedbackEl.textContent = "Jawaban Benar!";
        clickedElement.classList.add('correct');
        resultAreaEl.className = 'result-area correct'; // Tambah class untuk styling
    } else {
        // Tampilkan feedback yang sesuai untuk tipe gambar
        if (currentQuestion.type === 'image_logic') {
            feedbackEl.textContent = `Jawaban Salah. Yang benar adalah: Opsi ${correctAnswer}`;
        } else {
            feedbackEl.textContent = `Jawaban Salah. Yang benar adalah: ${correctAnswer}`;
        }
        clickedElement.classList.add('incorrect');
        resultAreaEl.className = 'result-area incorrect';

        // Tandai jawaban yang benar
        let correctOptionElement = null;
        if (currentQuestion.type === 'image_logic') {
             // Cari elemen kontainer gambar yang benar berdasarkan data-option-id
            correctOptionElement = optionsAreaEl.querySelector(`.image-option-container[data-option-id="${correctAnswer}"]`);
        } else if (currentQuestion.sequence) {
            // Cari elemen kontainer sequence yang benar berdasarkan data-option-value
             correctOptionElement = optionsAreaEl.querySelector(`.option-container[data-option-value="${correctAnswer}"]`);
        } else {
            // Cari tombol dengan teks yang cocok
            const buttons = optionsAreaEl.querySelectorAll('.option-button');
            buttons.forEach(btn => {
                if (btn.textContent.trim() === correctAnswer.trim()) { // Gunakan trim untuk amannya
                    correctOptionElement = btn;
                }
            });
        }

        if (correctOptionElement) {
            correctOptionElement.classList.add('correct');
            // Pastikan tetap terlihat jelas meskipun dinonaktifkan
             correctOptionElement.style.opacity = '1'; // Override opacity jika perlu
        }
    }
}

// Fungsi untuk pindah ke soal berikutnya
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
}

// INI DIA: Fungsi startQuiz HARUS didefinisikan di sini
function startQuiz(category) {
    console.log("Fungsi startQuiz dipanggil dengan kategori:", category);
    // SEMBUNYIKAN TOMBOL KEMBALI SAAT MULAI KUIS BARU
    backButtonEl.style.display = 'none';


    // Filter soal berdasarkan kategori
    if (category === 'ALL') {
        currentQuizQuestions = [...questions];
    } else {
         // VERIFIKASI FILTER DI SINI
        console.log("Memfilter dari:", questions);
        currentQuizQuestions = questions.filter(q => q.category === category);
        console.log(`Hasil filter untuk ${category}:`, currentQuizQuestions); 
    }

    console.log("Jumlah soal difilter:", currentQuizQuestions.length);

    if (currentQuizQuestions.length === 0) {
        alert(`Tidak ada soal yang ditemukan untuk kategori ${category}.`);
        return;
    }

    // --- ACAK URUTAN SOAL ---
    currentQuizQuestions = shuffleArray(currentQuizQuestions);
    console.log("Urutan soal setelah diacak (contoh):", currentQuizQuestions.slice(0, 3).map(q => q.question)); // Log soal pertama setelah acak
    // --- AKHIR ACAK URUTAN SOAL ---

    // Reset state kuis
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.textContent = score;
    nextButtonEl.style.display = 'block';

    console.log("Menyembunyikan kategori, menampilkan kuis...");
    console.log("categorySelectionEl:", categorySelectionEl);
    console.log("quizContainerEl:", quizContainerEl);

    // Sembunyikan pilihan kategori & tampilkan kontainer kuis
    categorySelectionEl.style.display = 'none';
    quizContainerEl.style.display = 'block';

    console.log("Index direset ke:", currentQuestionIndex);

    // Tampilkan soal pertama
    displayQuestion(currentQuestionIndex);
}

// --- FUNGSI BARU: Handler untuk Tombol Kembali ---
function goBackToCategories() {
    // Sembunyikan kontainer kuis
    quizContainerEl.style.display = 'none';
    // Sembunyikan tombol kembali itu sendiri
    backButtonEl.style.display = 'none';
     // Reset beberapa tampilan di kontainer kuis jika perlu (opsional)
     resultAreaEl.style.display = 'none';
    // Tampilkan lagi area pemilihan kategori
    categorySelectionEl.style.display = 'block';
}

// Fungsi untuk mengupdate tampilan timer
function updateTimerDisplay() {
    timerDisplayEl.textContent = timeLeft;
    // Tambahkan/hapus class 'critical' jika waktu <= 5 detik
    if (timeLeft <= 5) {
        timerDisplayEl.classList.add('critical');
    } else {
        timerDisplayEl.classList.remove('critical');
    }
}

// Fungsi yang dipanggil setiap detik oleh timer
function countdown() {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
        clearInterval(timerInterval); // Hentikan timer
        handleTimeout(); // Panggil fungsi untuk menangani waktu habis
    }
}

// Fungsi untuk memulai timer
function startTimer(duration = TIME_PER_QUESTION) {
    timeLeft = duration;
    updateTimerDisplay(); // Tampilkan waktu awal
    // Hapus interval lama jika ada (pencegahan)
    clearInterval(timerInterval);
    // Mulai interval baru
    timerInterval = setInterval(countdown, 1000); // Panggil countdown setiap 1 detik
}

// Fungsi untuk menangani kasus waktu habis
function handleTimeout() {
    if (answerSelected) return; // Jika sudah menjawab, abaikan timeout
    clearInterval(timerInterval); // Hentikan timer
    answerSelected = true; // Tandai seolah sudah 'menjawab' (habis waktu)
    nextButtonEl.disabled = false; // Aktifkan tombol next

    // Nonaktifkan semua tombol pilihan
    const allOptions = optionsAreaEl.querySelectorAll('.option-button');
    allOptions.forEach(btn => btn.disabled = true);

    // Tampilkan hasil dan penjelasan (menandakan salah karena waktu habis)
    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    resultAreaEl.style.display = 'block';
    explanationEl.textContent = `Penjelasan: ${currentQuestion.explanation}`;
    feedbackEl.textContent = `Waktu Habis! Jawaban yang benar: ${currentQuestion.correctAnswer}`;
    resultAreaEl.className = 'result-area incorrect'; // Style sebagai salah

    // Tandai jawaban yang benar agar user tahu
     allOptions.forEach(btn => {
        if(btn.textContent === currentQuestion.correctAnswer) {
            btn.classList.add('correct');
        }
     });
}

// Fungsi yang dijalankan saat pilihan jawaban diklik (MODIFIKASI)
function selectAnswer(clickedElement, selectedAnswer, correctAnswer, explanation) {
    if (answerSelected) return;

    // Hentikan timer segera setelah jawaban dipilih!
    clearInterval(timerInterval);

    answerSelected = true;
    nextButtonEl.disabled = false;

    const allOptions = optionsAreaEl.querySelectorAll('.option-button, .option-container');
    allOptions.forEach(optEl => {
        optEl.classList.add('disabled'); // Tambahkan class 'disabled'
        // Jika tombol, disable juga secara langsung
        if (optEl.tagName === 'BUTTON') {
             optEl.disabled = true;
        }
    });
    
    resultAreaEl.style.display = 'block';
    explanationEl.textContent = `Penjelasan: ${explanation}`;

    if (selectedAnswer === correctAnswer) {
        // --- Blok Jawaban Benar ---
        console.log("BENAR! Menambahkan .correct ke:", clickedElement); // <-- Tambahkan log ini
        score++;
        scoreEl.textContent = score;
        feedbackEl.textContent = "Jawaban Benar!";
        // Baris Kunci: Menambahkan class 'correct'
        clickedElement.classList.add('correct');
        console.log("Class setelah ditambah:", clickedElement.classList); // <-- Tambahkan log ini
        resultAreaEl.className = 'result-area correct';
    } else {
        // --- Blok Jawaban Salah ---
        console.log("SALAH! Menambahkan .incorrect ke:", clickedElement); // <-- Tambahkan log ini
        feedbackEl.textContent = `Jawaban Salah. Yang benar adalah: ${correctAnswer}`;
        // Baris Kunci: Menambahkan class 'incorrect'
        clickedElement.classList.add('incorrect');
        resultAreaEl.className = 'result-area incorrect';
        // Tandai jawaban yang benar menggunakan data attribute
         const allOptionContainers = optionsAreaEl.querySelectorAll('.option-container');
         allOptionContainers.forEach(container => {
            // Periksa data attribute
            if(container.dataset.optionValue === correctAnswer) {
                container.classList.add('correct');
                // Optional: Update visual checkbox untuk jawaban benar
                 const correctCheckbox = container.querySelector('.option-checkbox-visual');
                 if (correctCheckbox) {
                    // Bisa ubah background atau border
                     correctCheckbox.style.backgroundColor = '#5cb85c';
                     correctCheckbox.style.borderColor = '#4cae4c';
                 }
            }
         });
         // Tandai juga tombol biasa jika ada
         const allOptionButtons = optionsAreaEl.querySelectorAll('.option-button');
         allOptionButtons.forEach(btn => {
            if(btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
         });
    }
}

// Fungsi untuk pindah ke soal berikutnya (Tidak perlu diubah)
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
}

// --- 4. INISIALISASI ---
// Tambahkan event listener ke tombol kategori
btnTkd.onclick = () => startQuiz('TKD');
btnTwk.onclick = () => startQuiz('TWK');
// if (btnAll) { // Jika ada tombol 'Semua'
//     btnAll.onclick = () => startQuiz('ALL');
// }

nextButtonEl.onclick = nextQuestion; // Tambahkan event listener ke tombol next
// displayQuestion(currentQuestionIndex); // Tampilkan soal pertama saat halaman dimuat

// TAMBAHKAN EVENT LISTENER UNTUK TOMBOL KEMBALI
backButtonEl.onclick = goBackToCategories;