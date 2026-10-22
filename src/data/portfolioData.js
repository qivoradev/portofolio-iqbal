/**
 * DATA PORTOFOLIO TERPUSAT - DATA ANALYST
 * 
 * ATURAN KONTEN:
 * - Nama: "Iqbal Dwi Fathonah" (satu field `name` untuk seluruh aplikasi).
 * - Foto: `photo` bernilai kosong "", pengguna akan menaruh file foto sendiri.
 * - Teks Tentang Saya (about) memiliki versi ID dan EN yang disalin persis.
 * - Versi bilingual ID dan EN disinkronkan secara konsisten.
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
    id: "Terbuka untuk Bekerja",
    en: "Open to Work",
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

  // 1) DATA TENTANG SAYA (Dua bahasa)
  about: {
    highlight: {
      id: "Lulusan Teknologi Informasi dengan spesialisasi data storytelling, dashboard interaktif, dan analitik bisnis.",
      en: "Information Technology graduate specialized in data storytelling, interactive dashboards, and business analytics.",
    },
    id: [
      "Selama masa studi, aktif mendalami fondasi logika pemrograman web (HTML, CSS, JavaScript) serta perancangan antarmuka UI/UX, yang tervalidasi melalui sertifikasi profesi Web Developer (BNSP) dan Artificial Intelligence (Certiport).",
      "Berbekal fondasi teknis ini, saya fokus mengekstraksi data dari basis data relasional menggunakan SQL, merancang model spreadsheet dinamis di Microsoft Excel, dan mengubah metrik kompleks menjadi dashboard eksekutif yang informatif.",
      "Memiliki ketelitian tinggi dalam akurasi data dan pemikiran analitis yang kuat, serta siap berkontribusi secara profesional untuk mendukung pengambilan keputusan dan efisiensi operasional tim."
    ],
    en: [
      "During my studies, I actively explored the fundamentals of web programming logic (HTML, CSS, JavaScript) and UI/UX interface design, validated through professional certifications as a Web Developer (BNSP) and in Artificial Intelligence (Certiport).",
      "With this technical background, I focus on extracting data from relational databases using SQL, designing dynamic spreadsheet models in Microsoft Excel, and transforming complex metrics into clear executive dashboards.",
      "I have a high attention to data accuracy and strong analytical thinking, and I am ready to contribute professionally to support decision-making and team operational efficiency."
    ]
  },

  // Bento Grid 2x2 Mini-Cards di section About (Education, Location, Certifications, Status)
  aboutFacts: {
    id: [
      {
        id: "education",
        icon: "GraduationCap",
        label: "Pendidikan",
        value: "Teknologi Informasi",
        subtext: "Lulus 2026",
      },
      {
        id: "location",
        icon: "MapPin",
        label: "Lokasi",
        value: "Indonesia",
        subtext: "Remote / On-site",
      },
      {
        id: "certifications",
        icon: "BadgeCheck",
        label: "Sertifikasi",
        value: "BNSP & Certiport",
        subtext: "Tersertifikasi Web Dev & AI",
      },
      {
        id: "status",
        icon: "status",
        label: "Status",
        value: "Terbuka untuk Bekerja",
        subtext: "Posisi Data Analyst",
        isOpenToWork: true,
      },
    ],
    en: [
      {
        id: "education",
        icon: "GraduationCap",
        label: "Education",
        value: "Information Technology",
        subtext: "Graduating 2026",
      },
      {
        id: "location",
        icon: "MapPin",
        label: "Location",
        value: "Indonesia",
        subtext: "Remote / On-site",
      },
      {
        id: "certifications",
        icon: "BadgeCheck",
        label: "Certifications",
        value: "BNSP & Certiport",
        subtext: "Web Dev & AI Certified",
      },
      {
        id: "status",
        icon: "status",
        label: "Status",
        value: "Open to Work",
        subtext: "Data Analyst Roles",
        isOpenToWork: true,
      },
    ],
  },


  // Kamus terjemahan antarmuka (ID & EN)
  translations: {
    id: {
      role: "Data Analyst",
      nav: {
        home: "Beranda",
        about: "Tentang",
        skills: "Skills",
        projects: "Proyek",
        certifications: "Sertifikasi",
        contact: "Kontak",
        contactBtn: "Hubungi",
      },
      hero: {
        greeting: "Halo, saya",
        description: "Data Analyst berlatar belakang Teknologi Informasi yang berfokus menerjemahkan data kompleks menjadi dashboard interaktif dan insight yang dapat ditindaklanjuti. Terampil menggunakan Excel dan SQL untuk mendukung pengambilan keputusan bisnis yang strategis.",
        downloadCv: "Unduh CV",
        viewProjects: "Lihat Proyek",
        marqueeItems: "Pengolahan data · Pembersihan data · Analisis data · SQL · Python · Excel",
      },
      about: {
        title: "Tentang Saya",
      },
      skills: {
        title: "Keahlian & Tools",
        competenciesTitle: "Kompetensi Utama",
        competenciesDesc: "Pendekatan berbasis data untuk mengekstrak pola, memvalidasi integritas data, dan menyajikan insight bisnis yang terstruktur.",
        toolsTitle: "Tools & Teknologi",
      },
      projects: {
        tag: "Karya Terpilih",
        title: "Proyek",
        subtitle: "Studi kasus analisis data dan visualisasi dashboard interaktif.",
        description: "Showcase studi kasus analitis dengan area visualisasi dashboard, pemodelan metrik, dan eksplorasi dataset.",
        featuredBadge: "PROYEK ANDALAN • 01",
        caseStudy: "Studi Kasus",
        demoBtn: "Lihat Dashboard",
        codeBtn: "Dokumentasi / GitHub",
      },
      certifications: {
        title: "Sertifikasi",
        subtitle: "Kredensial profesi yang saya miliki.",
        viewCertBtn: "Lihat Sertifikat",
        issuedPrefix: "Diterbitkan",
        validUntilPrefix: "Berlaku hingga",
        credentialBtn: "Lihat kredensial",
        downloadPdfBtn: "Unduh PDF",
        placeholderImg: "[Foto sertifikat, diisi pemilik]",
        enlargeAriaPrefix: "Perbesar sertifikat",
        closeAria: "Tutup",
      },
      experience: {
        tag: "Jejak Karir",
        title: "Pengalaman & Riwayat",
        subtitle: "Rekam jejak profesional, peran analitis, dan pengalaman kerja terstruktur.",
        description: "Kronologi peran profesional, tanggung jawab analitis, dan pencapaian pada pengelolaan serta pengolahan data.",
        viewCredential: "Lihat Bukti / Kredensial",
        present: "Sekarang",
      },
      contact: {
        tag: "Komunikasi",
        title: "Hubungi Saya",
        subtitle: "Mari berdiskusi.",
        description: "Punya tawaran proyek, peluang karir, atau diskusi teknis? Silakan hubungi via WhatsApp atau formulir pesan.",
        directHeading: "Kontak Langsung",
        directDesc: "Untuk komunikasi instan atau pertanyaan cepat, hubungi langsung melalui WhatsApp atau email:",
        locationLabel: "Lokasi",
        waOfficial: "WhatsApp Resmi",
        waBtn: "Chat via WhatsApp",
        socialLabel: "Tautan Profil:",
        formHeading: "Kirim Pesan",
        formDesc: "Isi formulir berikut untuk mengirimkan pesan atau pertanyaan Anda:",
        nameLabel: "Nama Lengkap",
        namePlaceholder: "Nama Lengkap Anda",
        emailLabel: "Alamat Email Anda",
        emailPlaceholder: "name@domain.com",
        subjectLabel: "Subjek Diskusi",
        subjectPlaceholder: "Peluang Kerja / Kolaborasi",
        messageLabel: "Isi Pesan",
        messagePlaceholder: "Tuliskan pesan Anda di sini...",
        submitBtn: "Kirim Pesan",
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
        skills: "Skills",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
        contactBtn: "Contact",
      },
      hero: {
        greeting: "Hi, I'm",
        description: "Data Analyst with an Information Technology background, focused on turning complex data into interactive dashboards and actionable insights. Proficient in Excel and SQL to support strategic business decisions.",
        downloadCv: "Download CV",
        viewProjects: "View Projects",
        marqueeItems: "Data processing · Data cleaning · Data analysis · SQL · Python · Excel",
      },
      about: {
        title: "About Me",
      },
      skills: {
        title: "Skills & Tools",
        competenciesTitle: "Core Competencies",
        competenciesDesc: "Data-driven approach to uncovering patterns, validating data integrity, and delivering structured business insights.",
        toolsTitle: "Tools & Technologies",
      },
      projects: {
        tag: "Selected Works",
        title: "Projects",
        subtitle: "Data analysis case studies and interactive dashboard visualisations.",
        description: "Showcase of analytical case studies featuring dashboard visualizations, metric modeling, and dataset exploration.",
        featuredBadge: "FEATURED PROJECT • 01",
        caseStudy: "Case Study",
        demoBtn: "View Dashboard",
        codeBtn: "Documentation / GitHub",
      },
      certifications: {
        title: "Certifications",
        subtitle: "Professional credentials I hold.",
        viewCertBtn: "View Certificate",
        issuedPrefix: "Issued",
        validUntilPrefix: "Valid until",
        credentialBtn: "View credential",
        downloadPdfBtn: "Download PDF",
        placeholderImg: "[Certificate photo, provided by owner]",
        enlargeAriaPrefix: "Enlarge certificate",
        closeAria: "Close",
      },
      experience: {
        tag: "Career Path",
        title: "Experience & History",
        subtitle: "Professional track record, analytical roles, and structured work experience.",
        description: "Chronology of professional roles, analytical responsibilities, and data management achievements.",
        viewCredential: "View Credential / Proof",
        present: "Present",
      },
      contact: {
        tag: "Communication",
        title: "Contact",
        subtitle: "Let's talk.",
        directHeading: "Direct Channels",
        directDesc: "For instant communication or quick inquiries, reach out directly via WhatsApp or email:",
        locationLabel: "Location",
        waOfficial: "Official WhatsApp",
        waBtn: "Chat via WhatsApp",
        socialLabel: "Profile Links:",
        formHeading: "Send Message",
        formDesc: "Fill out the form below to send your message or inquiry directly:",
        nameLabel: "Full Name",
        namePlaceholder: "John Doe",
        emailLabel: "Email Address",
        emailPlaceholder: "name@domain.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project Collaboration / Job Opportunity",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        submitBtn: "Send Message",
        waSubmit: "Send via WhatsApp",
        emailSubmit: "Send via Email",
      },
      footer: {
        copyright: "All Rights Reserved.",
        subtitle: "Minimalist Editorial Design.",
        backToTop: "Back to Top",
      }
    }
  },

  // 3 Baris Berdasarkan Tahap Kerja: "Ambil Data", "Olah & Bersihkan", "Sajikan"
  workStages: [
    {
      id: "ambil-data",
      title: {
        id: "Ambil Data",
        en: "Data Ingestion",
      },
      competencies: [
        { id: "Analisis Data", en: "Data Analysis" },
      ],
      tools: [
        { name: "SQL", icon: "sql" },
        { name: "MySQL", icon: "mysql" },
      ],
    },
    {
      id: "olah-bersihkan",
      title: {
        id: "Olah & Bersihkan",
        en: "Process & Clean",
      },
      competencies: [
        { id: "Pembersihan Data", en: "Data Cleaning" },
        { id: "Validasi Data", en: "Data Validation" },
        { id: "Pengolahan Data", en: "Data Processing" },
      ],
      tools: [
        { name: "Python", icon: "python" },
        { name: "Excel", icon: "excel" },
        { name: "Google Sheets", icon: "google-sheets" },
      ],
    },
    {
      id: "sajikan",
      title: {
        id: "Sajikan",
        en: "Present",
      },
      competencies: [
        { id: "Visualisasi Data", en: "Data Visualization" },
        { id: "Pelaporan Terstruktur", en: "Structured Reporting" },
      ],
      tools: [
        { name: "Excel", icon: "excel" },
      ],
    },
  ],

  get stages() {
    return this.workStages;
  },

  // Tool Showcase (6 tool analitis aktif: Microsoft Excel, MySQL, Google Sheets, Figma, PowerPoint, GitHub)
  tools: [
    { name: "Microsoft Excel", icon: "excel", brandColor: "#107C41", enabled: true },
    { name: "MySQL", icon: "mysql", brandColor: "#4479A1", enabled: true },
    { name: "Google Sheets", icon: "google-sheets", brandColor: "#0F9D58", enabled: true },
    { name: "Figma", icon: "figma", brandColor: "#F24E1E", enabled: true },
    { name: "PowerPoint", icon: "powerpoint", brandColor: "#D24726", enabled: true },
    { name: "GitHub", icon: "github", brandColor: "#181717", enabled: true },
  ],

  // Kompetensi Utama Data Analyst (7 Kompetensi Proporsional: { id, en })
  coreCompetencies: [
    { name: { id: "Analisis Data", en: "Data Analysis" }, enabled: true },
    { name: { id: "Pembersihan Data", en: "Data Cleaning" }, enabled: true },
    { name: { id: "Validasi Data", en: "Data Validation" }, enabled: true },
    { name: { id: "Pemodelan Dashboard", en: "Dashboard Modeling" }, enabled: true },
    { name: { id: "Analisis Eksploratif", en: "Exploratory Data Analysis" }, enabled: true },
    { name: { id: "Storytelling Data", en: "Data Storytelling" }, enabled: true },
    { name: { id: "Pelaporan Bisnis & KPI", en: "Business Reporting" }, enabled: true },
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

  // Sertifikasi (Certificates Data)
  // Urut: Certiport dulu, lalu Web Developer
  certificates: [
    {
      slug: "ai-certiport",
      name: "Information Technology Specialist: Artificial Intelligence",
      issuer: "Certiport - A Pearson VUE Business",
      badge: "Certiport (Pearson VUE)",
      issued: { id: "Juni 2026", en: "June 2026" },
      validUntil: { id: "Juni 2031", en: "June 2031" },
      description: {
        id: "",
        en: "",
      },
      credentialUrl: "",
      pdf: "",
      image: "/certificates/ai-certiport.webp",
      imageAlt: {
        id: "Sertifikat Information Technology Specialist: Artificial Intelligence",
        en: "Information Technology Specialist: Artificial Intelligence Certificate",
      },
    },
    {
      slug: "web-developer",
      name: "Web Developer",
      issuer: "Lembaga Sertifikasi Profesi Informatika",
      badge: "BNSP (LSP Informatika)",
      issued: { id: "Maret 2026", en: "March 2026" },
      validUntil: { id: "Maret 2029", en: "March 2029" },
      description: {
        id: "",
        en: "",
      },
      credentialUrl: "",
      pdf: "",
      image: "/certificates/web-developer.webp",
      imageAlt: {
        id: "Sertifikat Web Developer",
        en: "Web Developer Certificate",
      },
    },
  ],
  // Alias backward-compatibility
  get certifications() {
    return this.certificates;
  },

  // Proyek Analisis Data (1 Featured Showcase + 2 Balanced Grid)
  projects: [
    {
      id: 1,
      featured: true,
      badge: {
        id: "PROYEK ANDALAN • 01",
        en: "FEATURED PROJECT • 01",
      },
      title: {
        id: "Executive Sales & Revenue Performance Dashboard",
        en: "Executive Sales & Revenue Performance Dashboard",
      },
      description: {
        id: "Analisis komprehensif atas performa penjualan multi-wilayah dan profitabilitas lini produk. Mengekstraksi 50.000+ baris data transaksi dengan SQL, merancang model spreadsheet dinamis di Microsoft Excel, dan menghasilkan visualisasi interaktif yang membantu manajemen mengidentifikasi penurunan margin sebesar 14% serta merumuskan strategi alokasi inventaris baru.",
        en: "Comprehensive analysis of multi-regional sales performance and product line profitability. Extracted 50,000+ transactional records using SQL, engineered dynamic spreadsheet models in Microsoft Excel, and delivered interactive visualizations identifying a 14% margin dip to optimize inventory allocation.",
      },
      image: "", // Siap diisi jalur file gambar screenshot dashboard (misal: /projects/sales-dashboard.webp)
      techStack: ["Microsoft Excel", "SQL", "Looker Studio", "Data Storytelling"],
      liveUrl: "https://lookerstudio.google.com",
      githubUrl: "https://github.com/qivoradev",
    },
    {
      id: 2,
      featured: false,
      badge: {
        id: "STUDI KASUS • 02",
        en: "CASE STUDY • 02",
      },
      title: {
        id: "Customer Churn & Retention Cohort Analysis",
        en: "Customer Churn & Retention Cohort Analysis",
      },
      description: {
        id: "Studi kasus retensi pelanggan berbasis analisis kohort berkala. Menggunakan kueri SQL lanjutan (Window Functions, CTE) untuk memetakan perilaku siklus hidup pengguna dan tingkat atrisi pada kuartal pertama pasca-onboarding.",
        en: "Customer retention case study utilizing cohort-based behavioral tracking. Leveraged advanced SQL queries (Window Functions, CTEs) to map user lifecycle patterns and reduce first-quarter onboarding attrition.",
      },
      image: "",
      techStack: ["SQL (PostgreSQL)", "Cohort Analysis", "Google Sheets", "PowerPoint"],
      liveUrl: "https://lookerstudio.google.com",
      githubUrl: "https://github.com/qivoradev",
    },
    {
      id: 3,
      featured: false,
      badge: {
        id: "STUDI KASUS • 03",
        en: "CASE STUDY • 03",
      },
      title: {
        id: "Supply Chain & Inventory Turnover Monitoring",
        en: "Supply Chain & Inventory Turnover Monitoring",
      },
      description: {
        id: "Visualisasi efisiensi perputaran persediaan dan estimasi lead-time logistik. Merancang matriks deteksi dini stok kritis (stock-out risk) di Excel guna mencegah keterlambatan pengiriman pesanan hingga 22%.",
        en: "Inventory turnover efficiency and logistics lead-time monitoring system. Engineered early-warning stock-out indicators in Excel & SQL, helping decrease order fulfillment delays by 22%.",
      },
      image: "",
      techStack: ["Microsoft Excel", "SQL", "Looker Studio", "Business Analytics"],
      liveUrl: "https://lookerstudio.google.com",
      githubUrl: "https://github.com/qivoradev",
    },
  ],

  // Pengalaman & Riwayat Analisis (Template / Skeleton Data Dinamis & Bilingual)
  experiences: [
    {
      id: "exp-1",
      role: {
        id: "UI/UX Designer",
        en: "UI/UX Designer",
      },
      company: "Direktorat Digital Informasi UMY",
      location: {
        id: "Yogyakarta, Indonesia",
        en: "Yogyakarta, Indonesia",
      },
      period: {
        id: "November 2025 – Januari 2026",
        en: "November 2025 – January 2026",
      },
      isCurrent: false,
      logoType: "building",
      highlights: {
        id: [
          "Merancang arsitektur antarmuka sistem persuratan terintegrasi untuk seluruh fakultas di lingkungan Universitas Muhammadiyah Yogyakarta.",
          "Mengumpulkan dan menganalisis data survei pengguna, mengolah data kualitatif dan kuantitatif untuk memetakan alur kerja administratif dan kendala operasional lintas fakultas.",
          "Mentransformasikan hasil temuan analitik data pengguna menjadi rekomendasi solusi sistem yang terukur, efisien, dan tepat sasaran."
        ],
        en: [
          "Designed the interface architecture for an integrated correspondence management system across all university faculties.",
          "Collected and analyzed qualitative and quantitative user survey data to identify administrative workflows and operational pain points.",
          "Transformed survey data insights into actionable system design specifications to improve operational efficiency."
        ]
      },
      tags: ["User Research", "Quantitative Analysis", "Data Synthesis", "Usability Testing", "Figma"],
      credentialUrl: "#",
      credentialLabel: {
        id: "Bukti Riwayat Pekerjaan",
        en: "Work Experience Proof",
      },
    },
    {
      id: "exp-2",
      role: {
        id: "Junior Data Specialist (Proyek / Freelance)",
        en: "Junior Data Specialist (Project / Freelance)",
      },
      company: "Inovasi Analitika Studio",
      location: {
        id: "Remote",
        en: "Remote",
      },
      period: {
        id: "Juli 2023 - Desember 2023",
        en: "July 2023 - December 2023",
      },
      isCurrent: false,
      logoType: "chart",
      highlights: {
        id: [
          "Menyusun model spreadsheet dinamis dengan fungsi kalkulasi lanjutan (INDEX-MATCH, XLOOKUP, Nested IF) untuk proyeksi bisnis.",
          "Menganalisis tren pola transaksi dari log basis data terstruktur guna menemukan rekomendasi efisiensi operasional.",
          "Menyajikan ringkasan visualisasi eksekutif berbasis bagan pivot dan format kondisional kepada stakeholder non-teknis."
        ],
        en: [
          "Built dynamic spreadsheet models utilizing advanced functions (INDEX-MATCH, XLOOKUP, Nested IF) for business projections.",
          "Analyzed transactional trends from structured database logs to identify operational efficiency opportunities.",
          "Presented executive visualization summaries featuring pivot charts and conditional formatting to non-technical stakeholders."
        ]
      },
      tags: ["Spreadsheet Modeling", "PostgreSQL", "Business Analytics", "Pivot Tables"],
      credentialUrl: "", // Kosong untuk contoh item tanpa tombol bukti
    },
    {
      id: "exp-3",
      role: {
        id: "Asisten Praktikum Basis Data & TI",
        en: "Database & IT Teaching Assistant",
      },
      company: "Laboratorium Komputasi & Sistem Informasi",
      location: {
        id: "Kampus (On-site)",
        en: "Campus (On-site)",
      },
      period: {
        id: "September 2022 - Juni 2023",
        en: "September 2022 - June 2023",
      },
      isCurrent: false,
      logoType: "academic",
      highlights: {
        id: [
          "Membimbing lebih dari 50 mahasiswa dalam sesi praktikum sintaks SQL (DDL, DML, agregasi, subquery, dan indexing).",
          "Membantu evaluasi normalisasi basis data, perancangan diagram ERD konseptual, dan verifikasi integritas relasi tabel.",
          "Menyusun modul praktikum dan studi kasus analisis data berbasis skenario bisnis nyata."
        ],
        en: [
          "Guided 50+ undergraduate students through hands-on SQL laboratory sessions covering DDL, DML, aggregations, and subqueries.",
          "Assisted in evaluating database normalization, conceptual ERD design, and relational integrity constraints.",
          "Authored hands-on lab modules and real-world business case studies for practical data querying exercises."
        ]
      },
      tags: ["Relational Database", "SQL Mentoring", "ERD Modeling", "Data Integrity"],
      credentialUrl: "https://example.com/credential-assistant",
    },
  ],
};

