// Ambil semua gambar dalam slider
const slides = document.querySelectorAll('.slides img');

// Indeks slide saat ini
let index = 0;

// Sembunyikan semua slide & tampilkan satu dengan efek fade
function showSlide(n) {
    slides.forEach((slide, i) => {
        if (i === n) {
            slide.style.opacity = "1";
            slide.style.zIndex = "1";
        } else {
            slide.style.opacity = "0";
            slide.style.zIndex = "0";
        }
    });
}

// Tampilkan slide pertama saat load
showSlide(index);

// Fungsi untuk slide berikutnya
function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}

// Ganti slide setiap 4 detik
setInterval(nextSlide, 4000);

const formPesan = document.getElementById("formPesan");

if (formPesan) {
    formPesan.addEventListener("submit", function(e) {
        e.preventDefault();

        // Ambil data dari input
        let nama = document.getElementById("nama").value;
        let tiket = document.getElementById("tiket").value;
        let tanggal = document.getElementById("tanggal").value;

        // Nomor WhatsApp admin (ubah sesuai nomor desa)
        let noWa = "6285608464407";

        // Buat pesan otomatis
        let pesan = `Halo, saya mau pesan ${tiket} tiket untuk tanggal ${tanggal} atas nama ${nama}.`;

        // Encode ke URL
        let url = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`;

        // Arahkan ke WhatsApp
        window.open(url, "_blank");
    });
}

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}