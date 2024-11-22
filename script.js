// Referensi Elemen
const btnReveal = document.getElementById("reveal-btn");
const playMusicBtn = document.getElementById("play-music-btn");
const confessionText = document.getElementById("confession-text");
const musicStatus = document.getElementById("music-status");
const bgMusic = document.getElementById("bg-music");

// Data Confession
const messages = [
  "Selamat ulang tahun, cintaku. Terima kasih sudah menjadi pelangi dalam hidup Abang.",
  "Semoga panjang umur dan murah rezeki ya sayang.",
  "Semoga cita-cita yang sayang impikan ini bisa tercapai.",
  "Dan juga cita-cita kita berdua untuk menjadi halal akan segera terwujud ya sayang.",
  "Abang akan terus berusaha sayang buat mimpi kita berdua segera terwujud.",
  "Selamat ulang tahun sayangku, cinta ku, cengeng nya abang.",
  "Cuma ini yang ucapan yang bisa abang sampaikan sayang.",
  "Ucapan ini dari, Akang, Abang, Sayang, (Ayah inshaallah).",
];

// Status Musik
let isPlaying = false;
let currentMessageIndex = 0; // Menambahkan variabel untuk melacak pesan yang ditampilkan

// Fungsi untuk Menampilkan Confession (Secara Berturut-turut)
btnReveal.addEventListener("click", () => {
  if (currentMessageIndex < messages.length) {
    confessionText.textContent = messages[currentMessageIndex];
    currentMessageIndex++; // Menambah indeks setiap kali pesan ditampilkan
  } else {
    confessionText.textContent = "Sayanggggg adekkkkk"; // Pesan jika sudah semua
    btnReveal.disabled = true; // Nonaktifkan tombol jika semua pesan sudah ditampilkan
  }
});

// Fungsi untuk Memutar/Menjeda Musik
playMusicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicStatus.textContent = "Putar Musik";
    playMusicBtn.querySelector(".icon").textContent = "🎵";
  } else {
    bgMusic.play()
      .then(() => {
        musicStatus.textContent = "Jeda Musik";
        playMusicBtn.querySelector(".icon").textContent = "⏸️";
      })
      .catch((error) => {
        console.error("Gagal memutar musik:", error);
      });
  }
  isPlaying = !isPlaying;
});

// Atur Volume Awal Musik
bgMusic.volume = 0.5;

function createFallingFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  
  // Menentukan posisi acak di bagian atas layar
  flower.style.left = Math.random() * window.innerWidth + 'px';

  // Durasi acak untuk animasi bunga jatuh
  const fallDuration = Math.random() * 5 + 5; // antara 5-10 detik
  flower.style.animationDuration = fallDuration + 's';

  // Menambahkan bunga ke dalam elemen #falling-flowers
  document.getElementById('falling-flowers').appendChild(flower);

  // Menghapus bunga setelah animasi selesai
  setTimeout(() => {
    flower.remove();
  }, fallDuration * 1000);
}

// Membuat bunga jatuh setiap 0.5 detik
setInterval(createFallingFlower, 500);
