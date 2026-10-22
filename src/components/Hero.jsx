import React, { useEffect, useRef, useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { FileDown, ArrowRight } from 'lucide-react';
import { SiGithub, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { getWhatsAppLink } from '../data/portfolioData';
import HeroBackdrop from './HeroBackdrop';

/** Cek URL sosial valid (bukan placeholder "[...]") */
function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const t = url.trim();
  return t !== '' && !t.startsWith('[');
}

export default function Hero() {
  const { t, portfolioData, language } = usePortfolio();
  const { contacts, photo, name, cvUrl, availability } = portfolioData;

  const [imgSrc, setImgSrc] = useState(photo || '/foto-nobg.png');
  const [isFallback, setIsFallback] = useState(false);

  // Cek apakah halaman sudah pernah dimuat di sesi browser ini (mencegah animasi berulang saat refresh)
  const [hasLoadedBefore] = useState(() => {
    try {
      return sessionStorage.getItem('portfolio_has_loaded') === 'true';
    } catch {
      return false;
    }
  });

  const handleImgError = () => {
    if (imgSrc.endsWith('.webp')) {
      setImgSrc('/foto-nobg.png');
    } else if (!isFallback) {
      setImgSrc('/foto.jpg');
      setIsFallback(true);
    }
  };

  // Pisah nama menjadi dua baris: "Iqbal Dwi" / "Fathonah"
  const nameParts = (name || '').split(' ');
  const nameRow1 = nameParts.slice(0, 2).join(' ');
  const nameRow2 = nameParts.slice(2).join(' ');

  const availabilityText = availability ? (availability[language] || availability.id) : '';

  const waNumber = (contacts.whatsapp || '').replace(/[^0-9]/g, '');
  const isWaValid = waNumber.length >= 10;
  const whatsappUrl = isWaValid
    ? getWhatsAppLink(contacts.whatsapp, contacts.whatsappMessage, language)
    : null;

  const socials = [
    { key: 'github',    label: 'GitHub',    url: isValidUrl(contacts.github)    ? contacts.github    : null, Icon: SiGithub,    cls: 'hs-github'    },
    { key: 'linkedin',  label: 'LinkedIn',  url: isValidUrl(contacts.linkedin)  ? contacts.linkedin  : null, Icon: FaLinkedin,  cls: 'hs-linkedin'  },
    { key: 'instagram', label: 'Instagram', url: isValidUrl(contacts.instagram) ? contacts.instagram : null, Icon: SiInstagram, cls: 'hs-instagram' },
    { key: 'whatsapp',  label: 'WhatsApp',  url: whatsappUrl,                                                Icon: SiWhatsapp,   cls: 'hs-whatsapp'  },
  ].filter(s => s.url);

  // ── Entrance Motion: Hanya SATU KALI per sesi kunjungan browser ──
  const heroRef = useRef(null);
  useEffect(() => {
    // Jika user me-refresh (hasLoadedBefore = true), langsung tampil instan tanpa delay
    if (hasLoadedBefore) {
      const el = heroRef.current;
      if (!el) return;
      const items = el.querySelectorAll('[data-ha]');
      items.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'none';
        item.style.transition = 'none';
      });
      return;
    }

    // Kunjungan pertama di sesi ini: tandai di sessionStorage
    try {
      sessionStorage.setItem('portfolio_has_loaded', 'true');
    } catch {
      // Ignore storage error
    }

    const el = heroRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = el.querySelectorAll('[data-ha]');
    if (reduced) {
      items.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'none';
        item.style.transition = 'none';
      });
      return;
    }

    // Pangkas durasi transisi menjadi sangat cepat (< 0.25s) & subtle
    items.forEach((item, idx) => {
      const delay = Math.min(idx * 25, 120);
      item.style.transition = 'none';
      setTimeout(() => {
        item.style.transition = 'opacity 0.22s ease-out, transform 0.22s ease-out';
        item.style.opacity = '1';
        item.style.transform = 'none';
      }, delay);
    });
  }, [hasLoadedBefore]);

  const heroDescription = t.hero.description;

  // Nilai style awal: jika sudah pernah dimuat (refresh F5), tidak ada opacity: 0
  const initialAnimStyle = hasLoadedBefore
    ? undefined
    : { opacity: 0, transform: 'translateY(6px)' };

  return (
    <section id="beranda" className="hero-section pt-28 pb-12 md:pt-32 md:pb-16" ref={heroRef}>
      <div className="container" style={{ width: '100%' }}>
        {/* Panel Besar Tunggal */}
        <div className="hero-panel">
          {/* Latar Grid Halus di Dalam Panel */}
          <HeroBackdrop />

          {/* Siluet Garis Data (SVG Inline Dekoratif Sisi Kanan/Bawah Panel) */}
          <div className="hero-data-silhouette" aria-hidden="true">
            <svg viewBox="0 0 600 360" fill="none" preserveAspectRatio="none">
              {/* 5 batang outline */}
              <rect x="340" y="240" width="36" height="100" stroke="var(--accent)" strokeWidth="1" rx="4" />
              <rect x="390" y="180" width="36" height="160" stroke="var(--accent)" strokeWidth="1" rx="4" />
              <rect x="440" y="260" width="36" height="80" stroke="var(--accent)" strokeWidth="1" rx="4" />
              <rect x="490" y="140" width="36" height="200" stroke="var(--accent)" strokeWidth="1" rx="4" />
              <rect x="540" y="200" width="36" height="140" stroke="var(--accent)" strokeWidth="1" rx="4" />

              {/* Satu garis tren naik-turun */}
              <path
                d="M 140 280 C 220 230, 280 290, 360 210 C 410 160, 460 230, 510 120 L 580 180"
                stroke="var(--accent)"
                strokeWidth="1.5"
                className={`hero-trend-line ${hasLoadedBefore ? 'hero-trend-line--instant' : ''}`}
              />
            </svg>
          </div>

          {/* ══════════════════════════════════════════════════════
              KOLOM KIRI — Teks, Tombol, Sosial
              ══════════════════════════════════════════════════ */}
          <div className="hero-left">
            {/* 1. Salam kecil */}
            <p
              className="hero-greeting"
              data-ha="1"
              style={initialAnimStyle}
            >
              {t.hero.greeting}
            </p>

            {/* 2. Nama dua baris */}
            <h1
              className="hero-name"
              aria-label={name}
              data-ha="2"
              style={initialAnimStyle}
            >
              <span>{nameRow1}</span>
              <span>{nameRow2}</span>
            </h1>

            {/* 3. Role */}
            <div
              className="hero-role"
              data-ha="3"
              style={initialAnimStyle}
            >
              Data Analyst
            </div>

            {/* 4. Deskripsi singkat */}
            <p
              className="hero-bio"
              data-ha="4"
              style={initialAnimStyle}
            >
              {heroDescription}
            </p>

            {/* 5. Baris Tombol: Lihat Proyek (solid) & Unduh CV (outline) */}
            <div
              className="hero-actions"
              data-ha="5"
              style={initialAnimStyle}
            >
              <a href="#proyek" className="btn hero-btn-projects">
                <span>{t.hero.viewProjects || 'Lihat Proyek'}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href={cvUrl || '/cv.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-btn-cv"
              >
                <FileDown size={17} aria-hidden="true" />
                <span>{t.hero.downloadCv || 'Unduh CV'}</span>
              </a>
            </div>

            {/* 6. Ikon Sosial */}
            {socials.length > 0 && (
              <div
                className="hero-socials"
                data-ha="6"
                style={hasLoadedBefore ? undefined : { opacity: 0 }}
              >
                {socials.map(({ key, label, url, Icon, cls }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hero-social ${cls}`}
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════
              KOLOM KANAN — Wadah Foto + Foto + Kartu
              ══════════════════════════════════════════════════ */}
          <div className="hero-right">
            <div className={`hero-photo-wrap ${isFallback ? 'is-fallback' : ''}`}>
              {/* Rona di belakang foto */}
              <div className="hero-photo-glow" aria-hidden="true" />

              {/* Wadah crop foto */}
              <div className="hero-photo-frame">
                <img
                  src={imgSrc}
                  alt={`Foto ${name}`}
                  className="hero-photo-img"
                  onError={handleImgError}
                  data-ha="5"
                  style={initialAnimStyle}
                />
              </div>

              {/* Floating Badge (di bawah foto) */}
              <div
                className="hero-photo-card"
                data-ha="6"
                style={initialAnimStyle}
              >
                <div className="hero-card-status">
                  <span className="hero-status-dot" aria-hidden="true" />
                  <span>{availabilityText || 'Open to Work'}</span>
                </div>
                <div className="hero-card-role">
                  {portfolioData.role || 'Data Analyst'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
