/**
 * DATA PORTOFOLIO TERPUSAT - DATA ANALYST
 * 
 * ATURAN KONTEN:
 * - Nama: "Iqbal Dwi Fathonah" (satu field `name` untuk seluruh aplikasi).
 * - Foto: `photo` bernilai kosong "", pengguna akan menaruh file foto sendiri.
 * - Teks Tentang Saya (about) memiliki versi ID dan EN yang disalin persis.
 * - Teks tanpa versi EN resmi diberi placeholder "[EN]".
 * - Seluruh kontak tersimpan di objek `contacts` tanpa API key.
 * - File CV mengarah ke: public/cv.pdf
 */

export const getWhatsAppLink = (number, message, lang = 'id') => {
  const cleanNumber = (number || '').replace(/[^0-9]/g, '');
  if (!cleanNumber) return '';
  let text = '';
  if (typeof message === 'string') {
    text = message;
  } else if (message && typeof message === 'object') {
    text = message[lang] || message.id || message.en || '';
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
};

export const portfolioData = {
  // Field name tunggal untuk seluruh komponen & metadata
  name: "Iqbal Dwi Fathonah",

  // Foto profil (PNG no-bg)
  photo: "/foto-nobg.png",

  // File CV
  cvUrl: "/cv.pdf",

  // Role
  role: "Data Analyst",
  roleEn: "Data Analyst",

  // Jurusan (caption di bawah foto profil)
  major: {
    id: "Teknologi Informasi",
    en: "Information Technology",
  },

  // Status Ketersediaan Pekerjaan (Kartu Foto Hero)
  showAvailability: true,
  availability: {
    id: "Terbuka untuk pekerjaan",
    en: "Open to work",
  },

  // Kontak & Tautan Sosial
  contacts: {
    whatsapp: "6282322231710",
    whatsappMessage: {
      id: "Halo Iqbal, saya melihat portofolio Anda dan ingin berdiskusi.",
      en: "Hello Iqbal, I saw your portfolio and would like to discuss.",
    },
    email: "iqbalfathonah20@gmail.com",
    github: "https://github.com/qivoradev",
    linkedin: "https://www.linkedin.com/in/iqbal-dwi-fathonah-56ba2a3b0",
    instagram: "https://www.instagram.com/iqbaldwf_",
    location: "Indonesia",
  },

  // 1) DATA TENTANG SAYA (Dua bahasa, disalin PERSIS sesuai instruksi)
  about: {
    id: [
      "Fresh graduate program studi Teknologi Informasi yang berfokus pada pengolahan, pembersihan, dan analisis data. Selama masa studi, aktif mendalami fondasi logika pemrograman web (HTML, CSS, JavaScript) serta perancangan antarmuka UI/UX, yang tervalidasi melalui sertifikasi profesi Web Developer (BNSP) dan Artificial Intelligence (Certiport).",
      "Berbekal latar belakang teknis tersebut, terbiasa mengelola dan mengekstraksi basis data relasional menggunakan SQL, menganalisis dataset dengan Python, serta menyusun validasi dan pelaporan terstruktur melalui Microsoft Excel. Memiliki ketelitian tinggi dalam akurasi data dan pemikiran analitis yang kuat, serta siap berkontribusi secara profesional untuk mendukung pengambilan keputusan dan efisiensi operasional tim."
    ],
    en: [
      "Information Technology fresh graduate focused on data processing, cleaning, and analysis. During my studies, I actively explored the fundamentals of web programming logic (HTML, CSS, JavaScript) and UI/UX interface design, validated through professional certifications as a Web Developer (BNSP) and in Artificial Intelligence (Certiport).",
      "With this technical background, I am experienced in managing and extracting data from relational databases using SQL, analyzing datasets with Python, and building structured validation and reporting in Microsoft Excel. I have a high attention to data accuracy and strong analytical thinking, and I am ready to contribute professionally to support decision-making and team operational efficiency."
    ]
  },

  // Fakta ringkas di section About (3 fakta, dua bahasa)
  aboutFacts: {
    id: [
      { label: "Fokus",        value: "Pengolahan, pembersihan, dan analisis data" },
      { label: "Sertifikasi",  value: "Web Developer (BNSP), Artificial Intelligence (Certiport)" },
      { label: "Tools",        value: "SQL, Python, Excel" },
    ],
    en: [
      { label: "Focus",           value: "Data processing, cleaning, and analysis" },
      { label: "Certifications",  value: "Web Developer (BNSP), Artificial Intelligence (Certiport)" },
      { label: "Tools",           value: "SQL, Python, Excel" },
    ],
  },


  // Kamus terjemahan antarmuka (ID & EN)
  translations: {
    id: {
      role: "Data Analyst",
      nav: {
        home: "Beranda",
        about: "Tentang",
        skills: "Tools",
        projects: "Proyek",
        certifications: "Sertifikasi",
        contact: "Kontak",
        contactBtn: "Hubungi",
      },
      hero: {
        greeting: "Halo, saya",
        description: "Data Analyst dengan latar belakang Teknologi Informasi yang berfokus pada pengolahan, pembersihan, dan analisis data. Terbiasa memakai SQL, Python, dan Excel untuk menyusun laporan yang akurat dan mendukung pengambilan keputusan.",
        downloadCv: "Unduh CV",
        viewProjects: "Lihat Proyek",
        marqueeItems: "Pengolahan data · Pembersihan data · Analisis data · SQL · Python · Excel",
      },
      about: {
        title: "Tentang Saya",
      },
      skills: {
        title: "Tools",
      },
      projects: {
        tag: "Karya Terpilih",
        title: "Proyek Analisis Data",
        description: "Showcase 4 studi kasus analitis dengan area visualisasi dashboard, pemodelan metrik, dan eksplorasi dataset.",
        caseStudy: "Studi Kasus",
        demoBtn: "Dashboard Demo",
        codeBtn: "Kueri & Analisis",
      },
      certifications: {
        tag: "Kualifikasi",
        title: "Sertifikasi",
        description: "Sertifikasi profesi dan kredensial teknis yang tervalidasi.",
        credentialBtn: "Lihat Kredensial",
      },
      experience: {
        tag: "Jejak Karir",
        title: "Pengalaman & Riwayat",
        description: "Kronologi peran profesional, tanggung jawab analitis, dan pencapaian pada pengelolaan serta pengolahan data.",
      },
      contact: {
        tag: "Komunikasi",
        title: "Kontak & Diskusi",
        description: "Punya tawaran proyek, peluang karir, atau diskusi teknis? Silakan hubungi via WhatsApp atau formulir pesan.",
        directHeading: "Saluran Langsung",
        directDesc: "Untuk komunikasi instan, silakan hubungi langsung melalui WhatsApp atau email:",
        waOfficial: "WhatsApp Resmi",
        waBtn: "Chat via WhatsApp",
        socialLabel: "Tautan Profil:",
        formHeading: "Kirim Pesan",
        formDesc: "Isi formulir berikut, lalu pilih untuk mengirim via WhatsApp (wa.me) atau Email (mailto:).",
        nameLabel: "Nama Lengkap",
        namePlaceholder: "Masukkan nama Anda",
        emailLabel: "Alamat Email Anda",
        emailPlaceholder: "nama@domain.com",
        subjectLabel: "Subjek Diskusi",
        subjectPlaceholder: "Contoh: Diskusi Proyek Web / Analisis",
        messageLabel: "Isi Pesan",
        messagePlaceholder: "Tuliskan pertanyaan atau kebutuhan Anda...",
        waSubmit: "Kirim via WhatsApp",
        emailSubmit: "Kirim via Email",
      },
      footer: {
        copyright: "Hak Cipta Dilindungi.",
        subtitle: "Desain Editorial Minimalis.",
        backToTop: "Ke Atas",
      }
    },
    en: {
      role: "Data Analyst",
      nav: {
        home: "Home",
        about: "About",
        skills: "Tools",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
        contactBtn: "Contact",
      },
      hero: {
        greeting: "Hi, I'm",
        description: "Data Analyst with an Information Technology background, focused on data processing, cleaning, and analysis. Experienced with SQL, Python, and Excel to build accurate reports that support decision-making.",
        downloadCv: "Download CV",
        viewProjects: "View Projects",
        marqueeItems: "Data processing · Data cleaning · Data analysis · SQL · Python · Excel",
      },
      about: {
        title: "About Me",
      },
      skills: {
        title: "Tools",
      },
      projects: {
        tag: "Selected Works",
        title: "Data Analytics Projects",
        description: "[EN]",
        caseStudy: "Case Study",
        demoBtn: "Dashboard Demo",
        codeBtn: "Queries & Analysis",
      },
      certifications: {
        tag: "Qualifications",
        title: "Certifications",
        description: "[EN]",
        credentialBtn: "View Credential",
      },
      experience: {
        tag: "Career Path",
        title: "Experience & History",
        description: "[EN]",
      },
      contact: {
        tag: "Communication",
        title: "Contact & Discussion",
        description: "[EN]",
        directHeading: "Direct Channels",
        directDesc: "[EN]",
        waOfficial: "Official WhatsApp",
        waBtn: "Chat via WhatsApp",
        socialLabel: "Profile Links:",
        formHeading: "Send Message",
        formDesc: "[EN]",
        nameLabel: "Full Name",
        namePlaceholder: "[EN]",
        emailLabel: "Your Email Address",
        emailPlaceholder: "name@domain.com",
        subjectLabel: "Discussion Subject",
        subjectPlaceholder: "[EN]",
        messageLabel: "Message",
        messagePlaceholder: "[EN]",
        waSubmit: "Send via WhatsApp",
        emailSubmit: "Send via Email",
      },
      footer: {
        copyright: "All Rights Reserved.",
        subtitle: "[EN]",
        backToTop: "Back to Top",
      }
    }
  },

  // Tool Showcase (7 item: Figma, Excel, Google Sheets, Looker Studio, Laravel, PostgreSQL, PowerPoint)
  // Field icon → kunci ke iconMap di Skills.jsx (react-icons/si)
  // brandColor → warna merek resmi, dipakai untuk border hover kartu
  tools: [
    { name: "Figma",         icon: "figma",        brandColor: "multicolor" },
    { name: "Excel",         icon: "excel",        brandColor: "#217346" },
    { name: "Google Sheets", icon: "google-sheets", brandColor: "#0F9D58" },
    { name: "Looker Studio", icon: "looker",        brandColor: "#4285F4" },
    { name: "Laravel",       icon: "laravel",       brandColor: "#FF2D20" },
    { name: "PostgreSQL",    icon: "postgresql",    brandColor: "#4169E1" },
    { name: "PowerPoint",    icon: "powerpoint",    brandColor: "#D24726" },
  ],

  // Kelompok Kemampuan Analitik (4 Kelompok Placeholder Teks)
  skillGroups: [
    {
      title: "[Kelompok 1]",
      items: ["[Kemampuan 1]", "[Kemampuan 2]", "[Kemampuan 3]"],
    },
    {
      title: "[Kelompok 2]",
      items: ["[Kemampuan 1]", "[Kemampuan 2]", "[Kemampuan 3]"],
    },
    {
      title: "[Kelompok 3]",
      items: ["[Kemampuan 1]", "[Kemampuan 2]", "[Kemampuan 3]"],
    },
    {
      title: "[Kelompok 4]",
      items: ["[Kemampuan 1]", "[Kemampuan 2]", "[Kemampuan 3]"],
    },
  ],

  // Sertifikasi (Placeholder untuk seksi Sertifikasi)
  certifications: [
    {
      id: 1,
      title: "Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "[Tahun / Periode]",
      credentialUrl: "[Tautan Kredensial / File]",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      issuer: "Certiport",
      period: "[Tahun / Periode]",
      credentialUrl: "[Tautan Kredensial / File]",
    },
  ],

  // Proyek Analisis Data (4 Item Placeholder)
  projects: [
    {
      id: 1,
      title: "[Judul Proyek Analisis 1]",
      description: "[Deskripsi singkat proyek analisis 1 - rumusan masalah bisnis, pembersihan data, analisis eksploratif, dan temuan utama yang dihasilkan]",
      imagePlaceholder: "[Dashboard / Visualisasi Proyek 1]",
      techStack: ["[Tool A]", "[Tool B]", "[Metode C]"],
      liveUrl: "[Tautan Live Demo / Dashboard]",
      githubUrl: "[Tautan Source Code / Analisis]",
    },
    {
      id: 2,
      title: "[Judul Proyek Analisis 2]",
      description: "[Deskripsi singkat proyek analisis 2 - sumber dataset, pemodelan metrik, dan visualisasi interaktif untuk pemangku kepentingan]",
      imagePlaceholder: "[Dashboard / Visualisasi Proyek 2]",
      techStack: ["[Tool A]", "[Tool B]", "[Metode C]"],
      liveUrl: "[Tautan Live Demo / Dashboard]",
      githubUrl: "[Tautan Source Code / Analisis]",
    },
    {
      id: 3,
      title: "[Judul Proyek Analisis 3]",
      description: "[Deskripsi singkat proyek analisis 3 - proses otomatisasi pelaporan, kueri data terstruktur, dan wawasan efisiensi]",
      imagePlaceholder: "[Dashboard / Visualisasi Proyek 3]",
      techStack: ["[Tool A]", "[Tool B]", "[Metode C]"],
      liveUrl: "[Tautan Live Demo / Dashboard]",
      githubUrl: "[Tautan Source Code / Analisis]",
    },
    {
      id: 4,
      title: "[Judul Proyek Analisis 4]",
      description: "[Deskripsi singkat proyek analisis 4 - analisis tren berkala, perbandingan metrik kinerja, dan rekomendasi strategis]",
      imagePlaceholder: "[Dashboard / Visualisasi Proyek 4]",
      techStack: ["[Tool A]", "[Tool B]", "[Metode C]"],
      liveUrl: "[Tautan Live Demo / Dashboard]",
      githubUrl: "[Tautan Source Code / Analisis]",
    },
  ],

  // Pengalaman & Riwayat Analisis (4 Item Placeholder)
  experiences: [
    {
      period: "[Tahun 2023 - Sekarang]",
      role: "[Peran / Posisi Analisis Data 1]",
      company: "[Nama Perusahaan / Organisasi 1]",
      description: "[Deskripsi lingkup kerja analitik, pengelolaan pipeline data, serta kontribusi dalam pembuatan laporan berkala]",
    },
    {
      period: "[Tahun 2022 - 2023]",
      role: "[Peran / Posisi Analisis Data 2]",
      company: "[Nama Perusahaan / Organisasi 2]",
      description: "[Deskripsi evaluasi data operasional, validasi akurasi metrik, dan kolaborasi dengan tim lintas divisi]",
    },
    {
      period: "[Tahun 2020 - 2022]",
      role: "[Peran / Posisi Analisis Data 3]",
      company: "[Nama Perusahaan / Organisasi 3]",
      description: "[Deskripsi penyusunan kueri data rutin, pengujian konsistensi data, dan dokumentasi kamus data]",
    },
    {
      period: "[Tahun 2018 - 2020]",
      role: "[Pendidikan / Riset Kuantitatif 4]",
      company: "[Nama Institusi Pendidikan / Organisasi 4]",
      description: "[Deskripsi fokus studi kuantitatif, proyek riset akhir berbasis dataset, atau pencapaian akademik terkait]",
    },
  ],
};

