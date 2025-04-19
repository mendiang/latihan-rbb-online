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

        correctAnswer: 'C', // Sesuaikan
        explanation: "Penjelasan: [Jelaskan pola logikanya di sini.]",
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
    questionTextEl.textContent = currentQuestion.question;

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

    } else { // Untuk soal teks biasa
        // optionsAreaEl.innerHTML = ''; // Sudah dikosongkan di awal
        optionsAreaEl.classList.remove('image-options-grid'); // Hapus styling grid
        const shuffledTextOptions = shuffleArray(currentQuestion.options);
        shuffledTextOptions.forEach(textOption => {
            const button = document.createElement('button');
            button.textContent = textOption; // Benar untuk teks
            button.classList.add('option-button');
            button.onclick = () => selectAnswer(button, textOption, currentQuestion.correctAnswer, currentQuestion.explanation);
            optionsAreaEl.appendChild(button);
        });
    }
    
    // Update total soal di score area
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

    const currentQuestion = currentQuizQuestions[index]; // Ambil soal saat ini

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

    if (sselectedValue === correctAnswer) {
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
                if (btn.textContent === correctAnswer) {
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