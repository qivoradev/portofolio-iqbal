import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';

/**
 * Section Sertifikasi — Revised Side-by-Side (2 Kolom 1fr 1fr) Layout & Lightbox
 *
 * 1) Desktop (>= 901px):
 *    - Grid 2 kolom sama lebar (1fr 1fr), gap 48px, align-items: start.
 *    - Satu border-top 1px var(--border) di atas grid, padding atas 48px, padding bawah 64px.
 *    - Tiap item:
 *      a) Tombol foto: bingkai 100%, tinggi tetap 340px, padding 8px, radius 16px, border 1px var(--border), latar var(--surface-2).
 *         Gambar contain di tengah, max-width 100%, max-height 100%. Hover/focus naik 4px, border var(--accent), 180ms.
 *      b) Jarak 20px ke teks: nama clamp(22px, 2vw, 28px) 700 --text, penerbit 16px --text-2, periode 14px --text-2. Jarak baris 8-12px.
 *      c) Deskripsi 16px line-height 1.7 maks 56ch HANYA bila terisi.
 *      d) Tombol "Lihat kredensial" / "Unduh PDF" HANYA bila credentialUrl / pdf terisi.
 *    - Jarak judul ke grid maks 40px.
 *
 * 2) Lightbox:
 *    - Dialog role="dialog" aria-modal="true", aria-label nama sertifikat.
 *    - Foto besar di atas (maks 90vw x 70svh, contain), keterangan di bawahnya rata kiri pada panel solid var(--surface) maks 720px.
 *    - Focus trap, Esc dan backdrop close, restore focus, body overflow lock, tombol tutup 44x44px.
 *    - Scroll vertikal di layar pendek (1366x768).
 *
 * 3) Mobile (<= 900px):
 *    - 1 kolom, gap antar item 40px, rata kiri.
 *    - Foto: lebar penuh, tinggi bingkai 260px. Nama clamp(20px, 5.5vw, 24px), penerbit 15px, periode 14px.
 *    - Lightbox mobile: foto maks 92vw x 55svh, scroll bila perlu, tanpa scroll horizontal di 360px.
 *    - Judul section proporsional, garis aksen tetap di sebelahnya dan tidak turun baris di 360px.
 *
 * 4) Animasi:
 *    - Fade + naik 16px, stagger 80ms, hormati prefers-reduced-motion.
 */
export default function Certifications() {
  const { t, portfolioData, language } = usePortfolio();
  const certificates = portfolioData.certificates || portfolioData.certifications || [];

  const [imgErrors, setImgErrors] = useState({});
  const [activeCert, setActiveCert] = useState(null);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);

  // Fallback image error handler
  const handleImgError = (slug) => {
    setImgErrors((prev) => ({ ...prev, [slug]: true }));
  };

  // Buka Lightbox
  const handleOpenLightbox = (cert, e) => {
    triggerRef.current = e?.currentTarget || document.activeElement;
    setActiveCert(cert);
  };

  // Tutup Lightbox
  const handleCloseLightbox = () => {
    setActiveCert(null);
  };

  // Lightbox Focus Trap & Accessibility
  useEffect(() => {
    if (!activeCert) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Fokus awal ke tombol tutup
    const focusTimer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseLightbox();
        return;
      }

      if (e.key === 'Tab') {
        if (!dialogRef.current) return;
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      // Kembalikan fokus ke tombol pemicu
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus();
      }
    };
  }, [activeCert]);

  // Entrance Animation (Stagger 80ms)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      const header = el.querySelector('.cert-header');
      if (header) header.classList.add('cert-animate--visible');
      el.querySelectorAll('.cert-item').forEach((item) => {
        item.classList.add('cert-item--visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const header = el.querySelector('.cert-header');
          if (header) {
            header.classList.add('cert-animate--visible');
          }

          const items = el.querySelectorAll('.cert-item');
          items.forEach((item, i) => {
            item.style.setProperty('--cert-idx', i);
            item.classList.add('cert-item--visible');
          });

          observer.disconnect();
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [certificates.length]);

  return (
    <section id="sertifikasi" className="cert-section" ref={sectionRef}>
      <div className="container">
        
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.certifications.title} subtitle={t.certifications.subtitle} />

        {/* Grid Sertifikat (Desktop: 2 Kolom 1fr 1fr sejajar; Mobile: 1 Kolom) */}
        <div className="cert-grid">
          {certificates.map((cert, index) => {
            const hasError = !cert.image || imgErrors[cert.slug];
            const issuedVal = typeof cert.issued === 'object' ? (cert.issued[language] || cert.issued.id) : cert.issued;
            const validUntilVal = typeof cert.validUntil === 'object' ? (cert.validUntil[language] || cert.validUntil.id) : cert.validUntil;
            const periodText = `${t.certifications.issuedPrefix} ${issuedVal} · ${t.certifications.validUntilPrefix} ${validUntilVal}`;

            // Deskripsi HANYA dirender jika terisi dan tidak kosong
            const descRaw = typeof cert.description === 'object'
              ? (cert.description[language] || cert.description.id || '')
              : (cert.description || '');
            const descText = typeof descRaw === 'string' ? descRaw.trim() : '';
            const hasDesc = Boolean(descText.length > 0);

            const altText = typeof cert.imageAlt === 'object'
              ? (cert.imageAlt[language] || cert.imageAlt.id || cert.name)
              : (cert.imageAlt || cert.name);

            const enlargeAria = `${t.certifications.enlargeAriaPrefix} ${cert.name}`;

            // Tombol kredensial dan unduh PDF hanya bila terisi
            const hasCredential = Boolean(cert.credentialUrl && cert.credentialUrl.trim() !== "");
            const hasPdf = Boolean(cert.pdf && cert.pdf.trim() !== "");
            const hasActions = hasCredential || hasPdf;

            return (
              <article
                key={cert.slug || index}
                className="cert-item"
                style={{ '--cert-idx': index }}
              >
                {/* a) Tombol Foto (Bingkai penuh kolom, tinggi tetap) */}
                <button
                  type="button"
                  className="cert-frame"
                  onClick={(e) => {
                    if (!hasError) handleOpenLightbox(cert, e);
                  }}
                  aria-label={enlargeAria}
                >
                  {hasError ? (
                    <div className="cert-frame-placeholder">
                      {t.certifications.placeholderImg}
                    </div>
                  ) : (
                    <img
                      src={cert.image}
                      alt={altText}
                      loading="lazy"
                      onError={() => handleImgError(cert.slug)}
                      className="cert-img"
                    />
                  )}
                </button>

                {/* Blok teks di bawah foto: rata tengah horizontal, jarak foto ke teks 20px */}
                <div className="cert-info">
                  {/* a) Nama: clamp(18px, 1.6vw, 22px), bobot 600, min-height 2 baris */}
                  <h3 className="cert-name"><span>{cert.name}</span></h3>

                  {/* b) Penerbit: 15px, bobot 500, --text-2, margin-top 6px */}
                  <div className="cert-issuer">{cert.issuer}</div>

                  {/* c) Garis pemisah tipis 1px var(--border), lebar 40px, rata tengah, margin 16px auto */}
                  <div className="cert-divider" aria-hidden="true" />

                  {/* d) Periode sebagai dua pasangan sejajar di tengah, jarak antar pasangan 32px */}
                  <div className="cert-dates">
                    <div className="cert-date-col">
                      <span className="cert-date-label">{t.certifications.issuedPrefix}</span>
                      <span className="cert-date-val">{issuedVal}</span>
                    </div>
                    <div className="cert-date-separator" aria-hidden="true" />
                    <div className="cert-date-col">
                      <span className="cert-date-label">{t.certifications.validUntilPrefix}</span>
                      <span className="cert-date-val">{validUntilVal}</span>
                    </div>
                  </div>

                  {/* e) Deskripsi (bila terisi): 15px, line-height 1.7, --text-2, maks 52ch, margin-inline auto, margin-top 16px */}
                  {hasDesc && (
                    <p className="cert-desc">{descText}</p>
                  )}

                  {/* f) Tautan teks "Lihat sertifikat" / "View certificate" (<button> bergaya teks, 15px, warna var(--accent), garis bawah saat hover/focus, tinggi tap 44px, margin-top 8px). Tombol kredensial / Unduh PDF ditaruh sebaris */}
                  <div className="cert-actions">
                    <button
                      type="button"
                      className="cert-link-btn"
                      onClick={(e) => {
                        if (!hasError) handleOpenLightbox(cert, e);
                      }}
                    >
                      {t.certifications.viewCertBtn || (language === 'en' ? 'View certificate' : 'Lihat sertifikat')}
                    </button>

                    {hasCredential && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn cert-btn--outline"
                      >
                        {t.certifications.credentialBtn}
                      </a>
                    )}
                    {hasPdf && (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn cert-btn--outline"
                      >
                        {t.certifications.downloadPdfBtn}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Lightbox Dialog Modal: Foto di atas + Keterangan di bawah */}
      {activeCert && (() => {
        const activeIssuedVal = typeof activeCert.issued === 'object'
          ? (activeCert.issued[language] || activeCert.issued.id)
          : activeCert.issued;
        const activeValidUntilVal = typeof activeCert.validUntil === 'object'
          ? (activeCert.validUntil[language] || activeCert.validUntil.id)
          : activeCert.validUntil;

        const activeDescRaw = typeof activeCert.description === 'object'
          ? (activeCert.description[language] || activeCert.description.id || '')
          : (activeCert.description || '');
        const activeDescText = typeof activeDescRaw === 'string' ? activeDescRaw.trim() : '';
        const hasActiveDesc = Boolean(activeDescText.length > 0);

        const hasActiveCred = Boolean(activeCert.credentialUrl && activeCert.credentialUrl.trim() !== "");
        const hasActivePdf = Boolean(activeCert.pdf && activeCert.pdf.trim() !== "");
        const hasActiveActions = hasActiveCred || hasActivePdf;

        const activeAltText = typeof activeCert.imageAlt === 'object'
          ? (activeCert.imageAlt[language] || activeCert.imageAlt.id || activeCert.name)
          : (activeCert.imageAlt || activeCert.name);

        return (
          <div
            className="cert-lightbox-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                handleCloseLightbox();
              }
            }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={activeCert.name}
              className="cert-lightbox-dialog"
            >
              {/* Tombol Tutup 44x44px */}
              <button
                ref={closeBtnRef}
                type="button"
                className="cert-lightbox-close"
                aria-label={t.certifications.closeAria}
                onClick={handleCloseLightbox}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* 1. Foto besar di atas (maks 90vw x 70svh, contain) */}
              <div className="cert-lightbox-media">
                <img
                  src={activeCert.image}
                  alt={activeAltText}
                  className="cert-lightbox-img"
                />
              </div>

              {/* 2. Keterangan di bawahnya (panel solid var(--surface), struktur teks sama) */}
              <div className="cert-lightbox-meta">
                <h3 className="cert-lightbox-name">{activeCert.name}</h3>
                <div className="cert-lightbox-issuer">{activeCert.issuer}</div>

                <div className="cert-divider" aria-hidden="true" />

                <div className="cert-dates">
                  <div className="cert-date-col">
                    <span className="cert-date-label">{t.certifications.issuedPrefix}</span>
                    <span className="cert-date-val">{activeIssuedVal}</span>
                  </div>
                  <div className="cert-date-separator" aria-hidden="true" />
                  <div className="cert-date-col">
                    <span className="cert-date-label">{t.certifications.validUntilPrefix}</span>
                    <span className="cert-date-val">{activeValidUntilVal}</span>
                  </div>
                </div>

                {hasActiveDesc && (
                  <p className="cert-lightbox-desc">{activeDescText}</p>
                )}

                {hasActiveActions && (
                  <div className="cert-lightbox-actions">
                    {hasActiveCred && (
                      <a
                        href={activeCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn cert-btn--outline"
                      >
                        {t.certifications.credentialBtn}
                      </a>
                    )}
                    {hasActivePdf && (
                      <a
                        href={activeCert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn cert-btn--outline"
                      >
                        {t.certifications.downloadPdfBtn}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
