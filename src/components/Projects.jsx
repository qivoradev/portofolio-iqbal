import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import { LayoutDashboard, FileSpreadsheet, Maximize2, X } from 'lucide-react';
import { GithubIcon } from './Icons';

/**
 * Komponen Preview Dashboard 16:9 (aspect-video)
 * Menampilkan gambar jika file screenshot tersedia, lengkap dengan browser topbar dan trigger perbesar.
 * Jika tidak ada file gambar, menampilkan mockup dashboard vektor interaktif.
 */
function DashboardPreview({ image, title, badge, onEnlarge, language, fileName }) {
  const hasValidImage = image && typeof image === 'string' && image.trim() !== '' && !image.startsWith('[');
  const displayTabName = fileName || 'analytics.dashboard.live';

  return (
    <div className="project-image-container">
      {hasValidImage ? (
        <div className="project-image-wrapper">
          {/* Header Browser Window Bar */}
          <div className="project-mockup-topbar">
            <div className="mockup-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="mockup-address-bar">
              <span className="mockup-url-text">{displayTabName}</span>
            </div>
            <span className="mockup-ratio-badge">{badge?.split('•')[0]?.trim() || '16:9 HD'}</span>
          </div>

          {/* Area Gambar Interaktif */}
          <div
            className="project-image-interactive"
            onClick={onEnlarge}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onEnlarge?.();
              }
            }}
            title={title}
          >
            <img
              src={image}
              alt={title}
              className="project-preview-img"
              loading="lazy"
            />
            {onEnlarge && (
              <div className="project-image-zoom-overlay">
                <span className="project-image-zoom-btn">
                  <Maximize2 size={15} aria-hidden="true" />
                  <span>{language === 'en' ? 'Enlarge Dashboard' : 'Perbesar Dashboard'}</span>
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Mockup Frame Dashboard Vektor 16:9 yang Bersih */
        <div className="project-mockup-frame" aria-hidden="true">
          {/* Header Browser Window Bar */}
          <div className="project-mockup-topbar">
            <div className="mockup-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="mockup-address-bar">
              <span className="mockup-url-text">{displayTabName}</span>
            </div>
            <span className="mockup-ratio-badge">{badge?.split('•')[0]?.trim() || '16:9 HD'}</span>
          </div>

          {/* Area Konten Dashboard */}
          <div className="project-mockup-canvas">
            {/* Row 3 KPI Mini-Cards */}
            <div className="mockup-kpi-row">
              <div className="mockup-kpi-card">
                <span className="mockup-kpi-label">Total Revenue</span>
                <span className="mockup-kpi-val">$1.28M</span>
                <span className="mockup-kpi-trend">+14.2%</span>
              </div>
              <div className="mockup-kpi-card">
                <span className="mockup-kpi-label">Conversion Rate</span>
                <span className="mockup-kpi-val">4.85%</span>
                <span className="mockup-kpi-trend">+0.8%</span>
              </div>
              <div className="mockup-kpi-card">
                <span className="mockup-kpi-label">Avg Order Value</span>
                <span className="mockup-kpi-val">$84.50</span>
                <span className="mockup-kpi-trend">+6.1%</span>
              </div>
            </div>

            {/* Visualisasi Grafik Area & Garis */}
            <div className="mockup-chart-box">
              <svg viewBox="0 0 400 110" className="mockup-svg-chart" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`chart-grad-${badge?.replace(/[^a-zA-Z0-9]/g, '') || 'default'}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="20" x2="400" y2="20" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="55" x2="400" y2="55" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="90" x2="400" y2="90" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />

                <path
                  d="M0,90 Q40,75 80,55 T160,70 T240,35 T320,25 T400,12 L400,110 L0,110 Z"
                  fill={`url(#chart-grad-${badge?.replace(/[^a-zA-Z0-9]/g, '') || 'default'})`}
                />
                <path
                  d="M0,90 Q40,75 80,55 T160,70 T240,35 T320,25 T400,12"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="80" cy="55" r="3.5" fill="var(--accent)" />
                <circle cx="160" cy="70" r="3.5" fill="var(--accent)" />
                <circle cx="240" cy="35" r="3.5" fill="var(--accent)" />
                <circle cx="320" cy="25" r="3.5" fill="var(--accent)" />
                <circle cx="400" cy="12" r="4" fill="var(--accent)" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { language, t, portfolioData } = usePortfolio();
  const { projects = [] } = portfolioData;

  // State untuk modal perbesar gambar dashboard
  const [activePreview, setActivePreview] = useState(null);

  useEffect(() => {
    if (!activePreview) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePreview(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePreview]);

  if (projects.length === 0) return null;

  // Helper resolusi teks bilingual
  const resolveText = (field, fallback = '') => {
    if (!field) return fallback;
    if (typeof field === 'object') {
      return field[language] || field.id || fallback;
    }
    return field;
  };

  return (
    <section id="proyek" className="section projects-section py-12 md:py-16">
      <div className="container">
        
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        {/* Kontainer Full-Width Vertikal Bertumpuk (Horizontal 2 Kolom: 7 cols & 5 cols) */}
        <div className="projects-stack">
          {projects.map((project, idx) => {
            const badge = resolveText(
              project.badge,
              idx === 0
                ? (t.projects.featuredBadge || 'FEATURED CASE STUDY • SPREADSHEET ANALYTICS')
                : `${t.projects.caseStudy || 'STUDI KASUS'} • 0${idx + 1}`
            );
            const title = resolveText(project.title, `Project ${idx + 1}`);
            const desc = resolveText(project.description, '');

            // Aksi Utama
            const primaryUrl = project.primaryAction?.url || project.liveUrl || project.githubUrl;
            const primaryLabel = project.primaryAction
              ? resolveText(project.primaryAction.label, t.projects.githubBtn || 'Lihat di GitHub / Repositori')
              : (project.liveUrl
                ? (t.projects.demoBtn || (language === 'en' ? 'View Dashboard' : 'Lihat Dashboard'))
                : (t.projects.codeBtn || (language === 'en' ? 'Documentation / GitHub' : 'Dokumentasi / GitHub')));

            const isPrimaryGitHub = Boolean(
              project.primaryAction?.icon === 'github' ||
              (primaryUrl && primaryUrl.includes('github.com') && !project.liveUrl)
            );

            // Aksi Sekunder
            const secondaryUrl = project.secondaryAction?.url || project.downloadUrl || (project.liveUrl ? project.githubUrl : null);
            const secondaryLabel = project.secondaryAction
              ? resolveText(project.secondaryAction.label, t.projects.downloadBtn || 'Unduh Workbook')
              : (project.downloadUrl
                ? (t.projects.downloadBtn || (language === 'en' ? 'Download Workbook' : 'Unduh Workbook'))
                : (t.projects.codeBtn || (language === 'en' ? 'Documentation / GitHub' : 'Dokumentasi / GitHub')));

            const isSecondaryDownload = Boolean(
              project.secondaryAction?.icon === 'download' ||
              project.downloadUrl
            );

            return (
              <article key={project.id || idx} className="featured-project-card editorial-card">
                <div className="featured-project-grid">
                  
                  {/* Sisi Kiri (Desktop 7 cols): Mockup jendela browser/app dengan file screenshot dashboard */}
                  <div className="featured-project-media">
                    <DashboardPreview
                      image={project.image}
                      title={title}
                      badge={badge}
                      language={language}
                      fileName={project.fileName}
                      onEnlarge={project.image ? () => setActivePreview({
                        image: project.image,
                        title,
                        badge
                      }) : undefined}
                    />
                  </div>

                  {/* Sisi Kanan (Desktop 5 cols): Kategori badge, Judul, Deskripsi, Grid 4 KPI, Tag, dan Tombol Aksi */}
                  <div className="featured-project-content">
                    <span className="project-category-badge">
                      {badge}
                    </span>

                    <h3 className="featured-project-title">
                      {title}
                    </h3>

                    <p className="project-description">
                      {desc}
                    </p>

                    {/* Grid 4 Kartu KPI */}
                    {Array.isArray(project.metrics) && project.metrics.length > 0 && (
                      <div className="project-metrics-grid" role="group" aria-label="Key Performance Indicators">
                        {project.metrics.map((metric, mIdx) => {
                          const label = resolveText(metric.label, metric.name || '');
                          const isAlert = metric.isAlert || metric.negative;
                          return (
                            <div
                              key={mIdx}
                              className={`project-metric-card ${isAlert ? 'project-metric-card-alert' : ''}`}
                            >
                              <span className="project-metric-label">{label}</span>
                              <span className="project-metric-val">{metric.value}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Pill Tags */}
                    {Array.isArray(project.techStack) && project.techStack.length > 0 && (
                      <div className="project-tags-wrap">
                        {project.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="project-skill-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tombol Aksi */}
                    <div className="project-actions-row">
                      {/* Tombol Utama */}
                      {primaryUrl && (
                        <a
                          href={primaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary project-btn-primary"
                        >
                          {isPrimaryGitHub ? (
                            <GithubIcon size={16} />
                          ) : (
                            <LayoutDashboard size={16} aria-hidden="true" />
                          )}
                          <span>{primaryLabel}</span>
                        </a>
                      )}

                      {/* Tombol Sekunder / Unduh Workbook */}
                      {secondaryUrl && (
                        <a
                          href={secondaryUrl}
                          target={secondaryUrl === '#' ? undefined : "_blank"}
                          rel={secondaryUrl === '#' ? undefined : "noopener noreferrer"}
                          download={project.fileName || undefined}
                          className="btn btn-secondary project-btn-secondary"
                        >
                          {isSecondaryDownload ? (
                            <FileSpreadsheet size={16} aria-hidden="true" />
                          ) : (
                            <GithubIcon size={16} />
                          )}
                          <span>{secondaryLabel}</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal untuk Preview Dashboard Tajam & Besar */}
      {activePreview && (
        <div
          className="project-lightbox-backdrop"
          onClick={() => setActivePreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePreview.title}
        >
          <div className="project-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="project-lightbox-topbar">
              <div className="project-lightbox-info">
                <span className="project-category-badge">{activePreview.badge}</span>
                <h4 className="project-lightbox-heading">{activePreview.title}</h4>
              </div>
              <button
                type="button"
                className="project-lightbox-close-btn"
                onClick={() => setActivePreview(null)}
                aria-label={language === 'en' ? 'Close' : 'Tutup'}
              >
                <X size={20} />
              </button>
            </div>
            <div className="project-lightbox-img-wrapper">
              <img
                src={activePreview.image}
                alt={activePreview.title}
                className="project-lightbox-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
