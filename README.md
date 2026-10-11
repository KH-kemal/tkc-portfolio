# Portfolio Thariq Kemal Choiruddin

Website portfolio statis untuk menampilkan profil, keahlian, project, pengalaman, pendidikan, dan penghargaan Thariq sebagai Frontend Web & Mobile Developer.

## Menjalankan secara lokal

Buka `index.html` di browser, atau dari folder proyek jalankan:

```powershell
python -m http.server 5500
```

Lalu kunjungi `http://localhost:5500`. Jalankan server dari folder `C:\web_portofolio`, tempat `index.html` utama berada. Proyek menggunakan HTML, CSS, JavaScript, dan Tailwind CSS melalui CDN. Tidak ada proses build atau dependensi npm.

## Deployment GitHub Pages dan domain

Repository: https://github.com/KH-kemal/tkc-portfolio.
Domain tujuan: https://thariqkemalchoiruddin.my.id/.

1. Commit dan push perubahan ke branch `main`.
2. Buka repository → **Settings → Pages**.
3. Pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu **Save**.
4. Isi **Custom domain** dengan `thariqkemalchoiruddin.my.id`, lalu **Save**. File `CNAME` di repository sudah disiapkan untuk domain ini.
5. Setelah domain terpasang pada Pages, tambahkan record berikut di panel DNS penyedia domain:

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | KH-kemal.github.io |

Record `www` mengarah ke akun GitHub, tanpa nama repository. Ganti record A/AAAA/CNAME lama yang bertentangan pada host `@` atau `www`; pertahankan record layanan lain seperti MX email. Gunakan TTL default provider. Jika memakai Cloudflare, gunakan **DNS only** untuk konfigurasi awal.

6. Tunggu pemeriksaan DNS dan sertifikat selesai, lalu aktifkan **Enforce HTTPS** di Pages. Propagasi DNS dan tersedianya HTTPS dapat membutuhkan hingga 24 jam.
7. Buka domain dan periksa gambar, navigasi, serta unduhan CV. Deployment berikutnya berjalan otomatis ketika perubahan di-push ke `main`.

GitHub Pages pada paket GitHub Free membutuhkan repository publik. File `.nojekyll` memastikan website statis ini disajikan tanpa pemrosesan Jekyll. Tidak ada build/lint npm untuk proyek ini.

Referensi: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site.

## Struktur

- `index.html`: konten dan struktur halaman.
- `style.css`: gaya komponen dan responsivitas.
- `script.js`: navigasi mobile, indikator section aktif, dan animasi masuk.
- `project-image/foto-formal-baru.png`: foto profil yang digunakan pada hero dan metadata berbagi. Foto sebelumnya tetap disimpan sebagai asset sumber.
- `project-image/warehaus.png`: gambar project WareHaus.
- WareHaus Web: https://warehaus.web.app/.
- `project-image/Logo_PENS.png`: logo institusi pendidikan.
- `project-image/logo_sma.jpg`: logo SMA DU 1 Unggulan BPPT Jombang.
- `project-image/logo_navbar.png`: logo TKC di navbar dan footer.
- `CV-Thariq-Kemal.pdf`: CV yang dapat dipratinjau dan diunduh dari website.

## Data yang perlu dilengkapi

- Bukti dan gambar project KickRank/SmartFootball sebelum ditambahkan ke halaman.
- Konfirmasi tahun pelaksanaan kegiatan yang berbeda dari tahun pada nama acara.
- Verifikasi ejaan nama resmi Techomfest pada sertifikat.

Kontak yang tersedia di halaman: `thariqchoiruddin@gmail.com`, [LinkedIn](https://www.linkedin.com/in/thariq-kemal-c), [GitHub](https://github.com/KH-kemal), dan [Instagram](https://www.instagram.com/kmlz_13/).
