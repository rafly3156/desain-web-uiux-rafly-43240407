# Projek Tugas Praktikum UI/UX: Sistem E-Commerce & Edukasi Budidaya Lobster Air Tawar Nakhera Farm

---

## 📌 Identitas Mahasiswa & Proyek

* **Nama Mahasiswa** : Muhammad Rafly Putra Mulyana  
* **NIM**            : 43240407  
* **Mata Kuliah**    : Praktikum Perancangan UI/UX & Web Development  
* **Nama Proyek**    : **Sistem E-Commerce & Edukasi Budidaya Lobster Air Tawar Nakhera Farm**  
* **Repository Root** : `43240407_MuhammadRaflyPutraMulyana`

---

## 🦞 Deskripsi Sistem

**Sistem E-Commerce & Edukasi Budidaya Lobster Air Tawar Nakhera Farm** adalah platform web terintegrasi yang dirancang khusus untuk mendukung industri akuakultur modern, khususnya dalam komoditas Lobster Air Tawar (*Cherax quadricarinatus*). 

Platform ini menggabungkan layanan komersial **B2B (Business-to-Business)** untuk pemesanan lobster konsumsi dan bibit berkualitas tinggi, sekaligus menyediakan **Modul Edukasi Vertical Farming** berbasis teknologi *Recirculating Aquaculture System* (RAS). Dengan antarmuka yang ramah pengguna, modern, dan responsif, Nakhera Farm mempermudah kemitraan bisnis serta edukasi teknologi budidaya lobster hemat lahan di Indonesia.

---

## 🚀 Fitur Utama

1. **Katalog Lobster B2B Modern**:  
   Menampilkan daftar varian lobster (Konsumsi, Indukan Grade A, Burayak/Benih, serta Paket Starter Kit Vertical Farming) lengkap dengan detail spesifikasi, kisaran harga per kg/paket, dan status ketersediaan stok secara *real-time*.

2. **Modul Edukasi Vertical Farming**:  
   Panduan interaktif dan materi edukasi komprehensif mengenai teknik budidaya lobster sistem apartemen/vertical farming, manajemen kualitas air (pH, Suhu, DO), pemijahan, dan formulasi pakan nutrisi tinggi.

3. **Formulir Interaktif Purchase Order (PO)**:  
   Formulir pemesanan resmi bagi mitra B2B/restoran/pembudidaya untuk mengajukan pesanan secara langsung dengan kalkulasi estimasi otomatis.

4. **Tabel Data Transaksi & Status Pelacakan**:  
   Sistem pelacakan transparan yang menampilkan riwayat pesanan PO, status pemrosesan (*Disetujui*, *Dalam Pengolahan*, *Dalam Pengiriman*, *Selesai*), serta fitur filter interaktif.

5. **Responsivitas Lintas Perangkat**:  
   Antarmuka adaptif yang dioptimalkan untuk perangkat Desktop, Tablet, hingga Perangkat Seluler (Mobile-first navigation dengan hamburger menu).

---

## 🔗 Tautan Pendukung (Placeholders)

| Jenis Dokumen / Media | Tautan (URL) | Status |
| :--- | :--- | :--- |
| 🎥 **YouTube Rekam Layar UI/UX** | [https://youtu.be/dummy-nakhera-screen-recording](https://youtu.be/dummy-nakhera-screen-recording) | Placeholder |
| 📹 **Video Presentasi Proyek** | [https://youtu.be/dummy-nakhera-presentation](https://youtu.be/dummy-nakhera-presentation) | Placeholder |
| 🎨 **Tautan Berkas Figma** | [https://www.figma.com/design/NakheraFarmUIUX43240407/Sistem-E-Commerce-Edukasi-Lobster](https://www.figma.com/design/NakheraFarmUIUX43240407/Sistem-E-Commerce-Edukasi-Lobster) | Active Link |
| 🌐 **Live Preview GitHub Pages** | [https://raflymulyana.github.io/43240407_MuhammadRaflyPutraMulyana/source-code/](https://raflymulyana.github.io/43240407_MuhammadRaflyPutraMulyana/source-code/) | Live Demo |

---

## 💻 Panduan Menjalankan Sistem

Untuk menjalankan antarmuka web proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

### Metode 1: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder `43240407_MuhammadRaflyPutraMulyana` di editor **Visual Studio Code**.
2. Masuk ke direktori `source-code/`.
3. Klik kanan pada berkas `index.html`.
4. Pilih **"Open with Live Server"** (pastikan ekstensi *Live Server* oleh Ritwick Dey telah terpasang).
5. Peramban web akan terbuka otomatis di alamat `http://127.0.0.1:5500/source-code/index.html`.

### Metode 2: Membuka Berkas Langsung via Browser
1. Navigasi ke folder `43240407_MuhammadRaflyPutraMulyana/source-code/` pada File Explorer Anda.
2. Klik dua kali (*double click*) berkas `index.html`.
3. Berkas akan terbuka secara otomatis pada peramban default Anda (Chrome, Edge, Firefox, atau Safari).

---

## 🧪 Tabel Pengujian Fungsionalitas & Responsivitas

Hasil pengujian fungsionalitas dan uji keterbacaan antarmuka pada berbagai ukuran resolusi layar:

| ID Pengujian | Modul / Elemen UI | Deskripsi Skenario Pengujian | Ekspektasi Hasil | Hasil Uji (Desktop >1024px) | Hasil Uji (Tablet 768px-1024px) | Hasil Uji (Mobile <768px) | Status |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| **TC-01** | Navigasi Utama | Mengklik tautan menu (Beranda, Edukasi, Katalog, PO, Transaksi) | Layar melakukan *smooth scrolling* ke bagian section tujuan | Sesuai | Sesuai | Sesuai | **PASS** |
| **TC-02** | Menu Seluler | Mengklik tombol ikon hamburger di navigasi seluler | Dropdown menu navigasi muncul dan dapat ditutup | N/A (Hidden) | Sesuai | Sesuai | **PASS** |
| **TC-03** | Modul Edukasi | Membaca kartu informasi Vertical Farming & RAS | Kartu tersusun rapi dalam grid, teks terbaca jelas | Sesuai (Grid 4-Kolom) | Sesuai (Grid 2-Kolom) | Sesuai (Grid 1-Kolom) | **PASS** |
| **TC-04** | Katalog B2B | Menekan tombol "Tambah ke PO" pada kartu produk | Form PO terisi secara otomatis dengan produk terpilih | Sesuai | Sesuai | Sesuai | **PASS** |
| **TC-05** | Form Purchase Order | Memasukkan data pembeli, memilih produk, & mengirim form | Validasi input berhasil dan menambahkan baris baru pada Tabel Transaksi | Sesuai | Sesuai | Sesuai | **PASS** |
| **TC-06** | Tabel Transaksi | Melihat data pesanan & menyaring status (*All*, *Diproses*, *Dikirim*) | Tabel menampilkan status badge berwarna & baris menyesuaikan filter | Sesuai (Overflow Scroll) | Sesuai (Responsive Table) | Sesuai (Card/Scrollable) | **PASS** |
| **TC-07** | Footer & Kontak | Mengakses tautan sosial & informasi kontak di bagian paling bawah | Seluruh link dapat diklik & teks hak cipta muncul presisi | Sesuai | Sesuai | Sesuai | **PASS** |

---
*Dokumen README ini disusun untuk memenuhi acuan standar repositori Praktikum UI/UX 2026.*
