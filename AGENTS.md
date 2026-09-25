  # AGENTS.md — Portfolio Personalization & Redesign Guide

## Tujuan

Repository ini adalah website portfolio milik **Thariq Kemal Choiruddin** yang berasal dari hasil clone/template portfolio lain.

Tugas agent Codex adalah **mempersonalisasi seluruh isi website agar benar-benar menjadi portfolio Thariq**, mengganti identitas pemilik sebelumnya, merapikan konten, menyesuaikan pengalaman/proyek, serta melakukan penyegaran visual dengan tema **Modern Tech: Dark Navy + Blue + Cyan**.

Agent boleh membuat variasi desain selama tetap:
- clean,
- modern,
- profesional,
- responsif,
- mudah dibaca recruiter,
- tidak terlalu ramai,
- dan tetap konsisten dengan branding developer.

Jangan hanya mengganti teks. Lakukan audit seluruh repository dan pastikan tidak ada data, nama, email, nomor telepon, username, link, foto, CV, metadata, atau konten milik pemilik template lama yang tertinggal.

---

# 1. Profil Utama

Gunakan data berikut sebagai referensi utama.

## Identitas Publik untuk Portfolio

- Nama lengkap: **Thariq Kemal Choiruddin**
- Nama singkat / navbar: **Thariq.**
- Program Studi: **D4 Teknik Informatika**
- Institusi: **Politeknik Elektronika Negeri Surabaya (PENS)**
- Lokasi publik: **Surabaya / Sidoarjo, Jawa Timur, Indonesia**
- Profesi utama: **Frontend Web & Mobile Developer**
- Status: **Mahasiswa Teknik Informatika / Software Developer**
- Email publik: **thariqchoiruddin@gmail.com**
- LinkedIn: **https://www.linkedin.com/in/thariq-kemal-c**
- GitHub utama: gunakan akun/repository milik Thariq yang ditemukan dari source project. Jangan menggunakan akun pemilik template lama.

## Catatan Privasi

Data CV berikut **jangan otomatis ditampilkan di website publik** kecuali memang dibutuhkan:
- NRP
- tempat/tanggal lahir
- agama
- jenis kelamin
- alamat rumah lengkap
- nomor telepon pribadi

Untuk portfolio publik, prioritaskan hanya:
- nama,
- role,
- institusi,
- kota/region,
- email profesional,
- LinkedIn,
- GitHub,
- CV PDF jika tersedia.

Jika nomor telepon/WhatsApp ingin digunakan, pastikan memang milik Thariq dan tampilkan hanya pada bagian kontak bila diperlukan.

---

# 2. Personal Branding

Portfolio harus memberi kesan:

- modern,
- technology-oriented,
- clean,
- profesional,
- minimal,
- developer-focused,
- percaya diri tetapi tidak berlebihan.

Tone copywriting:
- profesional,
- singkat,
- natural,
- tidak kaku,
- tidak terlalu banyak jargon,
- fokus pada kontribusi nyata dan proses belajar.

Hindari klaim seperti:
- expert,
- senior,
- highly experienced,
- world class,
- master,

kecuali terdapat bukti nyata di repository.

---

# 3. Headline dan Positioning

Headline utama:

```text
Frontend Web & Mobile Developer
```

Alternatif bila layout membutuhkan versi lebih panjang:

```text
Frontend Developer • Mobile Developer • Informatics Engineering Student
```

Short tagline:

```text
Membangun pengalaman digital yang responsif, terstruktur, dan mudah digunakan melalui pengembangan web dan aplikasi mobile.
```

Versi lebih personal:

```text
Mahasiswa Teknik Informatika PENS yang berfokus pada frontend web, mobile development, dan implementasi UI yang bersih serta responsif.
```

---

# 4. Palet Warna Utama

Gunakan tema:

## Modern Tech

```css
:root {
  --background: #0F172A;
  --surface: #1E293B;
  --surface-soft: #172033;

  --primary: #3B82F6;
  --primary-hover: #2563EB;

  --accent: #22D3EE;
  --accent-soft: #67E8F9;

  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;

  --border: #334155;

  --light-background: #F8FAFC;
  --light-surface: #FFFFFF;

  --light-text-primary: #0F172A;
  --light-text-secondary: #64748B;
}
```

## Aturan penggunaan

- Dark Navy `#0F172A` → hero, navbar, contact, footer.
- Surface `#1E293B` → cards gelap.
- Blue `#3B82F6` → CTA utama, link aktif, highlight utama.
- Blue hover `#2563EB` → tombol hover.
- Cyan `#22D3EE` → accent kecil, underline, badge, icon highlight.
- White `#F8FAFC` → text utama pada section gelap.
- Slate `#94A3B8` → text sekunder pada section gelap.
- Light background `#F8FAFC` → section terang.
- White `#FFFFFF` → card pada section terang.
- Dark text `#0F172A` → heading section terang.
- Gray text `#64748B` → paragraph section terang.

Gunakan proporsi:

```text
70% neutral
20% blue
10% cyan
```

Jangan menggunakan terlalu banyak warna sekaligus.

---

# 5. Arah Variasi Desain

Boleh melakukan improvement terhadap layout saat ini.

Jangan mengubah website menjadi template yang terlalu berbeda.

Pertahankan identitas layout dasar tetapi tingkatkan kualitas visual.

## Variasi yang disarankan

### Navbar
- Sticky navbar.
- Semi-transparent dark background.
- `backdrop-blur`.
- Border bawah sangat tipis.
- Active section indicator.
- Smooth scroll.
- Mobile hamburger menu.

Contoh style:

```css
background: rgba(15, 23, 42, 0.82);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(148, 163, 184, 0.12);
```

### Hero
Boleh menggunakan:
- subtle radial gradient,
- grid background tipis,
- glowing blur sangat ringan,
- floating tech tags,
- circular profile frame,
- blue-cyan ring.

Jangan menggunakan glow neon berlebihan.

Contoh hero background:

```css
background:
  radial-gradient(circle at 80% 20%, rgba(59,130,246,.16), transparent 34%),
  radial-gradient(circle at 20% 80%, rgba(34,211,238,.08), transparent 28%),
  #0F172A;
```

### Card
Gunakan:
- border ringan,
- shadow halus,
- rounded corners,
- hover elevation,
- hover border blue/cyan,
- optional image zoom halus.

Contoh:

```css
transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
```

Hover:

```css
transform: translateY(-4px);
```

### Section
Gunakan pergantian ritme:
- dark hero,
- light about,
- white skills,
- light gray projects,
- white experience,
- white education,
- light achievements,
- dark contact.

---

# 6. Navbar

Gunakan menu:

```text
Tentang
Keahlian
Project
Pengalaman
Pendidikan
Penghargaan
Kontak
```

Jika navbar terlalu penuh pada desktop kecil, `Penghargaan` boleh dimasukkan ke section `Pengalaman`.

Logo:

```text
Thariq.
```

Tombol kanan:

```text
Unduh CV
```

Jika CV belum tersedia:
- jangan mengarah ke CV pemilik lama,
- disable secara elegan atau gunakan `#`,
- beri TODO pada code.

---

# 7. Hero Section

## Badge

Gunakan:

```text
● Terbuka untuk kolaborasi & peluang baru
```

## Nama

```text
Thariq Kemal Choiruddin
```

Pada desktop boleh split menjadi:

```text
Thariq Kemal
Choiruddin
```

## Role

```text
Frontend Web & Mobile Developer
```

## Hero description

Gunakan:

```text
Saya adalah mahasiswa D4 Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS) yang berfokus pada pengembangan frontend web dan aplikasi mobile. Saya membangun antarmuka yang responsif, terstruktur, dan mudah digunakan melalui project akademik, organisasi, kompetisi, dan kolaborasi tim.
```

Versi singkat:

```text
Mahasiswa Teknik Informatika PENS yang berfokus pada frontend web dan mobile development, dengan ketertarikan pada UI yang responsif dan pengalaman pengguna yang baik.
```

## CTA

Primary:

```text
Lihat Project
```

Secondary:

```text
Unduh CV
```

Text link:

```text
Hubungi Saya →
```

Semua CTA harus mengarah ke section/asset yang benar.

---

# 8. Foto Hero

Audit asset yang tersedia.

Cari file seperti:

```text
profile.*
me.*
avatar.*
hero.*
photo.*
thariq.*
```

Jika foto Thariq tersedia, gunakan foto tersebut.

Jika hanya terdapat foto pemilik template lama:
- jangan gunakan,
- hapus referensinya,
- gunakan placeholder elegan,
- beri TODO.

Style frame yang disarankan:
- circle atau rounded blob,
- outer ring blue,
- secondary cyan accent,
- subtle shadow,
- no yellow.

Floating technology badges boleh digunakan, contoh:

```text
React
Flutter
TypeScript
Laravel
```

Gunakan maksimal 2–3 badge agar tidak ramai.

---

# 9. Tentang Saya

Gunakan heading:

```text
Tentang Saya
```

Suggested copy:

```text
Saya adalah mahasiswa D4 Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS) yang berfokus pada pengembangan frontend web dan aplikasi mobile. Saya tertarik membangun antarmuka yang responsif, terstruktur, dan mudah digunakan.

Saya memiliki pengalaman mengembangkan aplikasi menggunakan React, TypeScript, Flutter, Laravel, ASP.NET, serta mengelola data dengan PostgreSQL dan MySQL. Dalam pengembangan project, saya terbiasa bekerja secara kolaboratif menggunakan GitHub dan pendekatan Agile seperti Scrum dan Kanban.

Di luar aktivitas pengembangan software, saya aktif dalam organisasi dan kepanitiaan kampus. Pengalaman tersebut membantu saya mengembangkan kemampuan komunikasi, koordinasi tim, kepemimpinan, dan manajemen project.
```

Optional paragraph:

```text
Bagi saya, produk digital yang baik bukan hanya terlihat menarik, tetapi juga harus memiliki struktur yang jelas, mudah dipahami, dan mampu membantu pengguna menyelesaikan kebutuhannya secara efisien.
```

## About badges

Gunakan badge seperti:

```text
D4 Teknik Informatika
PENS
Frontend Web
Mobile Development
Open to Collaboration
```

---

# 10. Informasi Kontak Pada About

Card kanan dapat berisi:

```text
Lokasi
Surabaya / Sidoarjo, Jawa Timur
```

```text
Email
thariqchoiruddin@gmail.com
```

```text
LinkedIn
linkedin.com/in/thariq-kemal-c
```

```text
Status
Terbuka untuk kolaborasi & peluang baru
```

GitHub:
- ambil dari repository milik Thariq yang valid;
- jangan menggunakan akun GitHub pemilik template lama.

Nomor HP/WhatsApp:
- hanya gunakan jika memang ingin ditampilkan secara publik;
- jika digunakan, gunakan nomor milik Thariq;
- jangan tampilkan nomor pemilik template lama.

---

# 11. Section Keahlian

Heading:

```text
Keahlian
```

Subheading:

```text
Teknologi dan tools yang saya gunakan dalam pengembangan web, mobile, database, UI/UX, dan kolaborasi project.
```

## Frontend Web

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Bootstrap
- Tailwind CSS

## Backend

- PHP
- Laravel
- Node.js
- C#
- ASP.NET

## Database

- PostgreSQL
- MySQL

## Mobile

- Dart
- Flutter

## UI/UX

- Figma

## Development Methodology

- Agile Methodology
- Scrum
- Kanban

## Version Control & Project Management

- Git
- GitHub
- GitHub Project Board

## Bahasa Pemrograman Lain

- C
- Java
- JavaScript
- Python

Gunakan ejaan `Python`, bukan `Phyton`.

## Design suggestion

Skill tidak harus hanya berupa pills.

Boleh dibuat dalam bentuk:
- icon + text cards,
- grouped pills,
- compact grid.

Gunakan blue untuk kategori utama dan cyan untuk highlight.

---

# 12. Project Section

Heading:

```text
Project & Produk
```

Subheading:

```text
Beberapa project yang pernah saya kerjakan secara individu maupun bersama tim.
```

## Featured Project 1 — WareHaus

Nama:

```text
WareHaus — Warehouse Management System
```

Role:

```text
Mobile Developer & Web Developer
```

Description:

```text
Sistem manajemen pergudangan yang dikembangkan untuk membantu proses pengelolaan inventaris dan operasional gudang secara lebih terstruktur. Saya berkontribusi pada pengembangan aplikasi mobile dan web, khususnya pada implementasi antarmuka, alur pengguna, dan integrasi dengan sistem backend.
```

Links:
- Google Play: `https://play.google.com/store/apps/details?id=com.warehaus&pcampaignid=web_share`
- GitHub Web: `https://github.com/pens-pbl/warehaus-web`

CTA yang dapat digunakan:

```text
Google Play →
GitHub →
```

Tampilkan kedua link hanya jika masih aktif.

## Featured Project 2 — WareHaus Web

Nama:

```text
WareHaus Web — Warehouse Management System
```

Role:

```text
Frontend Developer
```

Description:

```text
Frontend web untuk sistem WareHaus yang mendukung proses pengelolaan gudang. Fokus kontribusi saya adalah implementasi interface, responsive layout, integrasi data/API, serta memastikan alur pengguna berjalan dengan baik.
```

GitHub:
`https://github.com/pens-pbl/warehaus-web`

Jika project web dan mobile berada dalam satu ekosistem yang sama, boleh digabung menjadi satu featured project dengan dua platform:
- Web App
- Mobile App

Hal ini lebih disarankan agar section project tidak terasa repetitif.

## Featured Project 3 — SmartFootball / KickRank

Nama yang tampil:

```text
SmartFootball — Football Competition Management
```

atau jika nama repository/product final adalah KickRank:

```text
KickRank — Football Competition Management
```

Role:

```text
Full Stack Developer
```

Description:

```text
Website untuk membantu pengelolaan kompetisi sepak bola, termasuk kebutuhan administrasi dan pengelolaan data pertandingan. Saya berkontribusi pada pengembangan frontend sekaligus backend untuk mendukung alur utama aplikasi.
```

GitHub:
`https://github.com/KH-kemal/2026---KickRank---frontend`

Agent harus memeriksa repository/source yang tersedia untuk menentukan nama produk final yang paling tepat. Jangan menampilkan dua nama yang membingungkan jika salah satunya hanya nama repository sementara.

---

# 13. Project Lain yang Dapat Ditambahkan

Project yang pernah dikerjakan pengguna dan boleh dipertimbangkan jika ada asset / bukti di repository:

- PinTaR — Pinjam Tempat dan Ruangan
- Knowly LMS
- EEPIS NOC
- UniTrade
- Halte Mbako
- Remi
- Mealty
- Laras
- Countlotrie

Jangan otomatis memasukkan semuanya.

Prioritaskan 3–5 project terbaik yang memiliki:
- screenshot,
- source,
- deskripsi,
- atau bukti kontribusi yang cukup.

Jika data tidak lengkap, jangan mengarang.

---

# 14. Project Card Design

Project card boleh dibuat lebih modern.

Desktop layout:

```text
2 columns
```

Featured project dapat dibuat full-width.

Card harus memiliki:
- thumbnail,
- category,
- title,
- role,
- short description,
- tech stack,
- CTA.

Hover:
- image scale sedikit,
- card naik sedikit,
- border berubah ke blue,
- arrow bergerak kecil ke kanan.

Jangan gunakan animasi berlebihan.

---

# 15. Pengalaman Organisasi & Pelatihan

Heading:

```text
Pengalaman & Organisasi
```

Subheading:

```text
Pengalaman organisasi, kepanitiaan, pelatihan, dan kegiatan yang membantu saya berkembang dalam kolaborasi, kepemimpinan, komunikasi, serta kemampuan teknis.
```

Gunakan timeline atau vertical cards.

## Organisasi

### Departemen Riset dan Teknologi — HIMIT PENS

Role:

```text
Staff Muda
```

Periode:

```text
2026 — Sekarang
```

Description:

```text
Berpartisipasi dalam kegiatan Departemen Riset dan Teknologi Himpunan Mahasiswa Teknik Informatika PENS serta terlibat dalam aktivitas yang mendukung pengembangan kemampuan teknologi, kolaborasi, dan program kerja departemen.
```

### Departemen PSDM — UKKI PENS

Role:

```text
Ketua Departemen
```

Periode:

```text
2026 — Sekarang
```

Description:

```text
Mengkoordinasikan aktivitas Departemen PSDM, pembagian tanggung jawab, komunikasi antaranggota, serta pelaksanaan program kerja yang berfokus pada pengembangan sumber daya anggota.
```

## Pelatihan

### LKMM Pra-TD PENS
Status:
```text
Peserta
```
Tahun:
```text
2024
```

### LKMM TD PENS
Status:
```text
Peserta
```
Tahun:
```text
2025
```

### AWS Academy Cloud Foundations
Status:
```text
Peserta
```
Tahun:
```text
2026
```

### AWS Academy Cloud Architecting
Status:
```text
Peserta
```
Tahun:
```text
2026
```

### Miniclass x Ecode HIMIT
Status:
```text
Peserta
```
Tahun:
```text
2025
```

Catatan:
- bila terdapat sertifikat/logo/credential yang valid di repository, boleh ditampilkan;
- jangan membuat nomor credential palsu.

---

# 16. Pengalaman Kegiatan & Kepanitiaan

Buat sub-section:

```text
Kepanitiaan & Kegiatan
```

Gunakan data berikut.

## PKKMB x Technogear PENS 2025
Role:
```text
Divisi Liaison Officer (LO)
```
Tahun:
```text
2025
```

## ITDS Insight 2025
Role:
```text
Divisi Operasional
```
Tahun:
```text
2025
```

## Panitia Pemilihan Umum — Suksesi HIMIT PENS 2024
Role:
```text
Ketua Panitia
```
Tahun pelaksanaan berdasarkan CV:
```text
2025
```

Description:

```text
Memimpin koordinasi kepanitiaan, mengatur pembagian tugas, komunikasi antar divisi, serta memastikan rangkaian kegiatan berjalan sesuai perencanaan.
```

Catatan:
nama kegiatan memuat `2024`, sedangkan tahun pada CV tertulis `2025`. Jangan mengubah fakta tanpa konfirmasi. Tampilkan nama resmi kegiatan apa adanya dan gunakan tahun sesuai sumber data, atau tambahkan TODO untuk verifikasi.

## LKMM Pra-TD PENS 2025
Role:
```text
Divisi Liaison Officer (LO)
```
Tahun:
```text
2025
```

## DYNAMIC ITDS PENS 2025
Nama lengkap:
```text
Orientasi Pengenalan Program Studi — DYNAMIC ITDS PENS 2025
```

Role:
```text
Ketua Panitia
```

Tahun pelaksanaan berdasarkan CV:
```text
2026
```

Description:

```text
Memimpin koordinasi keseluruhan kepanitiaan, mengatur pembagian tanggung jawab, komunikasi antar divisi, dan pelaksanaan kegiatan dari tahap persiapan hingga evaluasi.
```

Catatan:
nama kegiatan memuat `2025`, sedangkan tahun pada CV tertulis `2026`. Jangan mengoreksi otomatis tanpa konfirmasi.

## Miniclass x Ecode HIMIT PENS 2025
Role:
```text
Koordinator Divisi Acara
```
Tahun:
```text
2026
```

## Intan 1 UKKI PENS 2025
Role:
```text
Koordinator Divisi Acara
```
Tahun:
```text
2025
```

## National Creativity Competitions 2024
Role:
```text
Koordinator Divisi Acara
```
Tahun:
```text
2024
```

Gunakan timeline berdasarkan tahun terbaru ke terlama.

Jangan menampilkan seluruh kegiatan secara terlalu padat pada homepage. Prioritaskan pengalaman yang paling kuat:
- Ketua Departemen PSDM UKKI PENS
- Staff Muda RISTEK HIMIT PENS
- Ketua Panitia DYNAMIC
- Ketua Panitia Suksesi HIMIT
- Koordinator Divisi Acara
- AWS Academy

Pengalaman lain dapat dimasukkan dalam modal/detail atau section tambahan jika desain mendukung.

---

# 17. Design Pengalaman

Gunakan timeline modern.

Contoh struktur:

```text
[2026]
DYNAMIC ITDS PENS 2025
Ketua Panitia
deskripsi
```

```text
[2026]
Departemen PSDM — UKKI PENS
Ketua Departemen
deskripsi
```

```text
[2026]
Departemen Riset dan Teknologi — HIMIT PENS
Staff Muda
deskripsi
```

```text
[2025]
Suksesi HIMIT PENS 2024
Ketua Panitia
deskripsi
```

Gunakan:
- blue timeline line,
- cyan dot,
- white cards,
- hover subtle.

---

# 18. Riwayat Pendidikan

Heading:

```text
Riwayat Pendidikan
```

## Politeknik Elektronika Negeri Surabaya (PENS)

Program:

```text
D4 Teknik Informatika
```

Periode:

```text
2024 — Sekarang
```

Status:

```text
Mahasiswa Aktif
```

## SMA DU 1 Unggulan BPPT Jombang

Jurusan:

```text
IPA
```

Periode:

```text
2021 — 2024
```

Tampilkan education sebagai timeline atau dua card.

Utamakan PENS sebagai card pertama.

Jika logo sekolah/PENS tersedia dan legal digunakan, boleh ditampilkan.

---

# 19. Penghargaan

Tambahkan section kecil:

```text
Penghargaan
```

Data:

## Best Teamwork — Techomfest POLINES 2025

Pemberi:

```text
Politeknik Negeri Semarang
```

Tahun:

```text
2025
```

Deskripsi:

```text
Penghargaan Best Teamwork pada Techomfest POLINES 2025 sebagai apresiasi terhadap kolaborasi dan kerja sama tim selama kompetisi.
```

Jika nama resmi kompetisi di sumber ternyata berbeda (`Techomfest` / `Techcomfest` / variasi lain), gunakan nama resmi dari sertifikat atau asset yang tersedia.

Design:
- compact award card,
- icon trophy/medal,
- accent cyan/blue,
- jangan menggunakan gold besar yang bentrok dengan theme utama.

---

# 20. Contact Section

Gunakan heading:

```text
Mari Terhubung
```

Copy:

```text
Terbuka untuk berdiskusi mengenai project, pengembangan web dan mobile, kolaborasi, maupun peluang untuk belajar dan berkembang bersama.
```

Card contact:

```text
Email
thariqchoiruddin@gmail.com
```

```text
LinkedIn
linkedin.com/in/thariq-kemal-c
```

```text
GitHub
gunakan akun GitHub Thariq yang valid
```

```text
CV
Unduh CV (PDF)
```

WhatsApp/nomor telepon hanya ditampilkan jika diputuskan untuk dipublikasikan.

Jangan gunakan data kontak pemilik lama.

---

# 21. Footer

Gunakan:

```text
© 2026 Thariq Kemal Choiruddin. All rights reserved.
```

atau:

```text
© 2026 Thariq Kemal Choiruddin.
```

Link:

```text
GitHub
LinkedIn
Email
```

Pastikan tidak ada nama pemilik lama.

---

# 22. SEO & Metadata

Audit:

```html
<title>
<meta name="description">
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<link rel="icon">
```

Gunakan:

```text
Thariq Kemal Choiruddin | Frontend Web & Mobile Developer
```

Description:

```text
Portfolio Thariq Kemal Choiruddin, mahasiswa D4 Teknik Informatika PENS dan Frontend Web & Mobile Developer yang berfokus pada pengembangan website, aplikasi mobile, UI implementation, dan software development.
```

Hapus metadata pemilik sebelumnya.

---

# 23. Audit Identitas Lama

Search seluruh project untuk:

- nama pemilik lama,
- initials/logo lama,
- email lama,
- nomor telepon lama,
- username GitHub lama,
- LinkedIn lama,
- Instagram lama,
- URL lama,
- domain lama,
- foto lama,
- CV lama,
- copyright lama.

Gunakan search repository.

Contoh:

```bash
grep -Rni "nama-lama" .
grep -Rni "@gmail.com" .
grep -Rni "linkedin" .
grep -Rni "github" .
```

Lakukan audit juga pada:
- source file,
- public folder,
- JSON,
- constants,
- config,
- assets,
- static data,
- HTML metadata.

---

# 24. Responsive Design

Wajib diperiksa pada:

```text
360px
390px
768px
1024px
1280px
1440px
```

Pastikan:
- navbar mobile bekerja,
- text hero tidak overflow,
- profile image tidak terlalu besar,
- buttons wrap dengan baik,
- project cards menjadi 1 column pada mobile,
- contact cards responsive,
- timeline tetap terbaca,
- tidak ada horizontal scrolling.

---

# 25. Typography

Gunakan font yang sudah ada jika kualitasnya baik.

Jika repository menggunakan Google Fonts dan aman untuk diganti, prioritaskan:

```text
Inter
```

atau:

```text
Plus Jakarta Sans
```

Jangan menggunakan terlalu banyak font.

Ideal:

```text
1 font family
```

Heading:
- 600–700

Body:
- 400–500

---

# 26. Spacing

Gunakan spacing yang konsisten.

Section desktop:

```text
80px – 120px vertical padding
```

Mobile:

```text
56px – 72px vertical padding
```

Container:

```text
max-width: 1120px – 1200px
```

Gunakan whitespace cukup.

---

# 27. Border Radius

Rekomendasi:

```text
small controls: 8–10px
cards: 16–20px
large media: 20–24px
pill: 9999px
```

Jangan mencampur terlalu banyak radius.

---

# 28. Shadow

Gunakan shadow ringan.

Contoh:

```css
box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
```

Dark section:

```css
box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
```

---

# 29. Animasi

Boleh menambahkan animasi ringan:

- fade up ketika section masuk viewport,
- hover card,
- button arrow shift,
- nav active indicator,
- image hover scale.

Animation duration:

```text
200ms – 500ms
```

Hormati:

```css
@media (prefers-reduced-motion: reduce)
```

Jangan gunakan animasi yang mengganggu.

---

# 30. Accessibility

Wajib:
- semantic HTML,
- alt text pada image,
- button/link jelas,
- contrast cukup,
- keyboard navigation,
- visible focus state,
- `aria-label` pada icon-only button,
- `aria-expanded` untuk mobile menu jika diperlukan.

---

# 31. Link Behaviour

Internal section:

```text
smooth scroll
```

External link:

```html
target="_blank"
rel="noopener noreferrer"
```

CV:
- download jika file PDF benar-benar tersedia.

Jangan membuat dummy link seolah aktif.

---

# 32. Code Quality

Sebelum edit:

1. Identifikasi stack.
2. Baca struktur directory.
3. Temukan file entry point.
4. Temukan component utama.
5. Temukan styling system.
6. Temukan data source portfolio.
7. Temukan public assets.

Jangan melakukan rewrite total jika tidak diperlukan.

Prioritaskan:
- reusable components,
- data-driven content,
- clean structure,
- consistency.

Jika data portfolio hardcoded berulang, refactor menjadi data object/array bila masuk akal.

Contoh:

```ts
const projects = [
  {
    title: 'WareHaus',
    role: 'Mobile Developer & Web Developer',
    description: '...',
    technologies: ['Flutter', 'TypeScript'],
  },
]
```

---

# 33. Jangan Mengubah Stack Tanpa Alasan

Jika project menggunakan:
- plain HTML/CSS/JS → lanjutkan dengan itu,
- React → gunakan React,
- Next.js → gunakan Next.js,
- Tailwind → gunakan Tailwind.

Jangan migrasi framework hanya demi redesign.

---

# 34. Aturan Data yang Belum Diketahui

Jangan menebak:
- URL GitHub profile jika belum ditemukan,
- file CV,
- foto profile,
- periode organisasi di luar data yang diberikan,
- detail kontribusi teknis project yang tidak dapat diverifikasi,
- credential AWS,
- nilai/IPK.

Jika belum tersedia:

```text
TODO
```

atau hide dari UI.

Jangan tampilkan string `TODO` ke user akhir jika bisa disembunyikan secara aman.

---

# 35. Data CV yang Tidak Perlu Masuk Homepage

Informasi berikut berasal dari CV tetapi tidak perlu ditampilkan pada homepage portfolio:

```text
NRP
Tempat/tanggal lahir
Jenis kelamin
Agama
Alamat rumah lengkap
```

Tujuan utama portfolio adalah menunjukkan:
- identitas profesional,
- kemampuan,
- project,
- pengalaman,
- pendidikan,
- penghargaan,
- kontak profesional.

Jangan membuat section biodata seperti formulir administrasi.

---

# 36. Prioritas Pengerjaan

Kerjakan dalam urutan:

## Phase 1 — Audit
- stack
- file structure
- old identity
- assets
- existing content
- links

## Phase 2 — Branding
- color palette
- typography
- navbar
- hero

## Phase 3 — Content
- About
- Skills
- Projects
- Experience
- Education
- Awards
- Contact

## Phase 4 — UI Improvement
- card layout
- timeline
- buttons
- subtle animation
- responsive behaviour

## Phase 5 — Cleanup
- old data
- console errors
- dead CSS
- unused assets jika aman
- broken links

## Phase 6 — Verification
- build
- lint
- responsive
- accessibility
- navigation
- links

---

# 37. Acceptance Criteria

Pekerjaan dianggap selesai jika:

- tidak ada nama pemilik template lama;
- tidak ada email/nomor/social pemilik lama;
- branding berubah menjadi Thariq;
- warna utama menjadi dark navy + blue + cyan;
- hero menggunakan profil Thariq;
- About relevan;
- Skills sesuai data CV;
- WareHaus tampil sebagai featured project;
- SmartFootball/KickRank tampil bila asset memadai;
- pengalaman organisasi tersedia;
- pengalaman kepanitiaan tersedia;
- pendidikan PENS dan SMA tersedia;
- penghargaan Best Teamwork tersedia;
- semua link valid atau disembunyikan;
- mobile responsive;
- tidak ada console error penting;
- build project berhasil;
- tidak ada layout overflow;
- design terasa lebih modern daripada template awal.

---

# 38. Final Visual Direction

Target tampilan:

```text
Professional Developer Portfolio
+
Modern SaaS Landing Page
+
Personal Branding
```

Bukan:

```text
gaming website
cyberpunk
neon-heavy
overly animated
corporate banking website
```

Kesan akhir yang diinginkan:

```text
clean
modern
calm
technical
credible
friendly
professional
```

---

# 39. Final Instruction untuk Codex

Lakukan perubahan langsung pada repository berdasarkan panduan ini.

Sebelum mulai:
- inspect repository,
- pahami stack,
- catat file yang akan diubah,
- identifikasi semua data pemilik template lama.

Setelah implementasi:
- jalankan build/lint/test yang tersedia;
- perbaiki error yang muncul;
- laporkan file yang diubah;
- jelaskan perubahan utama;
- sebutkan data yang masih membutuhkan input dari Thariq.

Jika menemukan konflik antara panduan ini dan struktur project:
- pertahankan fungsi project;
- adaptasikan implementasi;
- jangan memaksakan struktur baru yang merusak aplikasi.

Jika terdapat perbedaan tahun antara nama kegiatan dan tahun pada CV, jangan mengoreksi otomatis. Gunakan data yang diberikan atau tandai untuk verifikasi.

Utamakan hasil yang stabil, bersih, maintainable, dan layak digunakan sebagai portfolio profesional.
