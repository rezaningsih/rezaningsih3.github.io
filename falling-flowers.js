// Fungsi untuk membuat bunga jatuh secara acak
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
  