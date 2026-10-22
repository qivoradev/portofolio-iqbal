import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import { ExternalLink, LayoutDashboard } from 'lucide-react';
import { GithubIcon } from './Icons';

/**
 * Komponen Preview Dashboard 16:9 (aspect-video)
 * Menampilkan gambar jika file screenshot tersedia, atau mockup dashboard vektor interaktif yang bersih.
 */
function DashboardPreview({ image, title, badge }) {
  const hasValidImage = image && typeof image === 'string' && image.trim() !== '' && !image.startsWith('[');

  return (
    <div className="project-image-container">
      {hasValidImage ? (
        <img
          src={image}
          alt={title}
          className="project-preview-img"
          loading="lazy"
        />
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
              <span className="mockup-url-text">analytics.dashboard.live</span>
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
                {/* Horizontal Guide Lines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="55" x2="400" y2="55" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="90" x2="400" y2="90" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />

                {/* Shaded Area */}
                <path
                  d="M0,90 Q40,75 80,55 T160,70 T240,35 T320,25 T400,12 L400,110 L0,110 Z"
                  fill={`url(#chart-grad-${badge?.replace(/[^a-zA-Z0-9]/g, '') || 'default'})`}
                />
                {/* Trend Stroke */}
                <path
                  d="M0,90 Q40,75 80,55 T160,70 T240,35 T320,25 T400,12"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Data Points */}
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

  if (projects.length === 0) return null;

  // Proyek 1: Featured Project (Andalan)
  const featuredProject = projects[0];
  // Proyek 2 & 3: Balanced Grid Bawah
  const gridProjects = projects.slice(1, 3);

  // Helper resolusi teks bilingual
  const resolveText = (field, fallback = '') => {
    if (!field) return fallback;
    if (typeof field === 'object') {
      return field[language] || field.id || fallback;
    }
    return field;
  };

  const featuredBadge = resolveText(featuredProject.badge, t.projects.featuredBadge || 'FEATURED PROJECT • 01');
  const featuredTitle = resolveText(featuredProject.title, 'Executive Analytics Dashboard');
  const featuredDesc = resolveText(featuredProject.description, '');

  return (
    <section id="proyek" className="section projects-section py-12 md:py-16">
      <div className="container">
        
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        {/* 1. Proyek 1: Featured Project Showcase (Horizontal 2 Kolom: 7 cols & 5 cols) */}
        {featuredProject && (
          <article className="featured-project-card editorial-card">
            <div className="featured-project-grid">
              
              {/* Kolom Kiri (7 Cols): Wadah Preview Gambar Dashboard 16:9 */}
              <div className="featured-project-media">
                <DashboardPreview
                  image={featuredProject.image}
                  title={featuredTitle}
                  badge={featuredBadge}
                />
              </div>

              {/* Kolom Kanan (5 Cols): Informasi & Aksi */}
              <div className="featured-project-content">
                <span className="project-category-badge">
                  {featuredBadge}
                </span>

                <h3 className="featured-project-title">
                  {featuredTitle}
                </h3>

                <p className="project-description">
                  {featuredDesc}
                </p>

                {/* Pill Tags */}
                {Array.isArray(featuredProject.techStack) && featuredProject.techStack.length > 0 && (
                  <div className="project-tags-wrap">
                    {featuredProject.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="project-skill-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* 2 Tombol Aksi: Lihat Dashboard (Aksen) & Dokumentasi/GitHub (Outline) */}
                <div className="project-actions-row">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-btn-primary"
                    >
                      <LayoutDashboard size={16} aria-hidden="true" />
                      <span>{t.projects.demoBtn || (language === 'en' ? 'View Dashboard' : 'Lihat Dashboard')}</span>
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary project-btn-secondary"
                    >
                      <GithubIcon size={16} />
                      <span>{t.projects.codeBtn || (language === 'en' ? 'Documentation / GitHub' : 'Dokumentasi / GitHub')}</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </article>
        )}

        {/* 2. Proyek 2 & 3: Balanced 2-Column Grid di Bawah Proyek 1 */}
        {gridProjects.length > 0 && (
          <div className="projects-bottom-grid">
            {gridProjects.map((project, idx) => {
              const badge = resolveText(
                project.badge,
                `${t.projects.caseStudy || 'STUDI KASUS'} • 0${idx + 2}`
              );
              const title = resolveText(project.title, `Project ${idx + 2}`);
              const desc = resolveText(project.description, '');

              return (
                <article key={project.id || idx} className="grid-project-card editorial-card">
                  {/* Container Gambar Dashboard 16:9 Bagian Atas */}
                  <div className="grid-project-media">
                    <DashboardPreview
                      image={project.image}
                      title={title}
                      badge={badge}
                    />
                  </div>

                  {/* Teks Detail Studi Kasus Bagian Bawah */}
                  <div className="grid-project-content">
                    <span className="project-category-badge">
                      {badge}
                    </span>

                    <h3 className="grid-project-title">
                      {title}
                    </h3>

                    <p className="project-description">
                      {desc}
                    </p>

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
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary project-btn-primary"
                        >
                          <ExternalLink size={15} aria-hidden="true" />
                          <span>{t.projects.demoBtn || (language === 'en' ? 'View Dashboard' : 'Lihat Dashboard')}</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary project-btn-secondary"
                        >
                          <GithubIcon size={15} />
                          <span>{t.projects.codeBtn || (language === 'en' ? 'Documentation / GitHub' : 'Dokumentasi / GitHub')}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
