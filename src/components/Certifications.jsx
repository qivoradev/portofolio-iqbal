import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

/**
 * Section Sertifikasi — Refactored Proportional 16:10 Grid with Balanced Layout
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
    <section id="sertifikasi" className="cert-section py-12 md:py-16 scroll-mt-24 pt-8 md:pt-16" ref={sectionRef}>
      <div className="container">
        
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.certifications.title} subtitle={t.certifications.subtitle} />

        {/* Grid Sertifikat (Desktop: 2 Kolom 1fr 1fr sejajar; Mobile: 1 Kolom) */}
        <div className="cert-grid">
          {certificates.map((cert, index) => {
            const hasError = !cert.image || imgErrors[cert.slug];
            const issuedVal = typeof cert.issued === 'object' ? (cert.issued[language] || cert.issued.id) : cert.issued;
            const validUntilVal = typeof cert.validUntil === 'object' ? (cert.validUntil[language] || cert.validUntil.id) : cert.validUntil;

            const issuerBadge = cert.badge || (
              cert.slug === 'ai-certiport'
                ? 'Certiport (Pearson VUE)'
                : cert.slug === 'web-developer'
                ? 'BNSP (LSP Informatika)'
                : cert.issuer
            );

            // Deskripsi HANYA dirender jika terisi dan tidak kosong
            const descRaw = typeof cert.description === 'object'
              ? (cert.description[language] || cert.description.id || '')
              : (cert.description || '');
            const descText = typeof descRaw === 'string' ? descRaw.trim() : '';
            const hasDesc = Boolean(descText.length > 0);

            const altText = typeof cert.imageAlt === 'object'
              ? (cert.imageAlt[language] || cert.imageAlt.id || cert.name)
              : (cert.imageAlt || cert.name);

            const enlargeAria = `${t.certifications.enlargeAriaPrefix || 'Perbesar sertifikat'} ${cert.name}`;

            return (
              <article
                key={cert.slug || index}
                className="cert-item"
                style={{ '--cert-idx': index }}
              >
                {/* 1. Container Gambar Sertifikat: Rasio Aspek Seragam 16:10 */}
                <div
                  className="cert-frame w-full aspect-[16/10] bg-zinc-950/70 rounded-xl overflow-hidden flex items-center justify-center p-3 border border-zinc-800/80 cursor-pointer"
                  onClick={(e) => {
                    if (!hasError) handleOpenLightbox(cert, e);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (!hasError) handleOpenLightbox(cert, e);
                    }
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
                      className="cert-img max-h-full max-w-full object-contain rounded shadow-md transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>

                {/* 2. Alignment & Keseimbangan Teks: flex flex-col justify-between (Mobile: Center, Desktop: Left) */}
                <div className="cert-info flex flex-col justify-between flex-1 mt-4 items-center md:items-start text-center md:text-left">
                  <div className="cert-info-top flex flex-col items-center md:items-start text-center md:text-left w-full">
                    {/* Pill badge penerbit */}
                    <span className="cert-badge bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full w-fit mb-2 mx-auto md:mx-0">
                      {issuerBadge}
                    </span>

                    {/* Judul sertifikat dengan min-height min-h-[3.25rem] */}
                    <h3 className="cert-name text-lg font-semibold text-zinc-100 min-h-[3.25rem] flex items-center justify-center md:justify-start text-center md:text-left w-full">
                      <span>{cert.name}</span>
                    </h3>

                    {/* Periode / Tanggal */}
                    <div className="cert-dates flex items-center justify-center md:justify-start gap-3 text-xs text-zinc-400 mt-2 flex-wrap w-full text-center md:text-left">
                      <div className="cert-date-col flex items-center gap-1.5">
                        <span className="cert-date-label">{t.certifications.issuedPrefix || (language === 'id' ? 'Diterbitkan' : 'Issued')}:</span>
                        <span className="cert-date-val font-medium text-zinc-300">{issuedVal}</span>
                      </div>
                      <span className="cert-date-separator text-zinc-600" aria-hidden="true">·</span>
                      <div className="cert-date-col flex items-center gap-1.5">
                        <span className="cert-date-label">{t.certifications.validUntilPrefix || (language === 'id' ? 'Berlaku hingga' : 'Valid until')}:</span>
                        <span className="cert-date-val font-medium text-zinc-300">{validUntilVal}</span>
                      </div>
                    </div>

                    {/* Deskripsi bila ada */}
                    {hasDesc && (
                      <p className="cert-desc text-sm text-zinc-400 mt-2 text-center md:text-left">{descText}</p>
                    )}
                  </div>

                  {/* 3. Tombol Outline Interaktif di bagian paling bawah (Lebar proporsional w-full di mobile) */}
                  <div className="cert-info-bottom mt-5 w-full">
                    <button
                      type="button"
                      className="cert-btn-outline w-full py-2 px-4 rounded-lg border border-orange-500/40 text-orange-400 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium flex items-center justify-center gap-2"
                      onClick={(e) => {
                        if (cert.credentialUrl) {
                          window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
                        } else if (!hasError) {
                          handleOpenLightbox(cert, e);
                        }
                      }}
                    >
                      <span>{t.certifications.viewCertBtn || (language === 'id' ? 'Lihat Sertifikat' : 'View Certificate')}</span>
                      <ExternalLink size={16} aria-hidden="true" />
                    </button>
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

        const activeBadge = activeCert.badge || (
          activeCert.slug === 'ai-certiport'
            ? 'Certiport (Pearson VUE)'
            : activeCert.slug === 'web-developer'
            ? 'BNSP (LSP Informatika)'
            : activeCert.issuer
        );

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
                <span className="cert-badge bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full w-fit mb-2">
                  {activeBadge}
                </span>
                <h3 className="cert-lightbox-name">{activeCert.name}</h3>
                <div className="cert-lightbox-issuer">{activeCert.issuer}</div>

                <div className="cert-divider" aria-hidden="true" />

                <div className="cert-dates">
                  <div className="cert-date-col">
                    <span className="cert-date-label">{t.certifications.issuedPrefix || (language === 'id' ? 'Diterbitkan' : 'Issued')}</span>
                    <span className="cert-date-val">{activeIssuedVal}</span>
                  </div>
                  <div className="cert-date-separator" aria-hidden="true" />
                  <div className="cert-date-col">
                    <span className="cert-date-label">{t.certifications.validUntilPrefix || (language === 'id' ? 'Berlaku hingga' : 'Valid until')}</span>
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
