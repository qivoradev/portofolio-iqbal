import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const { t, portfolioData } = usePortfolio();
  const { projects } = portfolioData;

  return (
    <section id="proyek" className="section">
      <div className="container">
        
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        {/* Projects Grid: 4 Item Placeholder (Mobile-friendly minmax 280px) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
              }}
            >
              <div>
                {/* Mockup Placeholder Box */}
                <div
                  style={{
                    height: '150px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '18px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <ImageIcon size={22} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>
                    {project.imagePlaceholder}
                  </span>
                </div>

                {/* Project Number & Title */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    {t.projects.caseStudy} 0{project.id}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '18px' }}>
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.76rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons (flexWrap for mobile) */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '16px',
                }}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: '1 1 120px', padding: '8px 12px', fontSize: '0.82rem' }}
                >
                  <ExternalLink size={14} />
                  <span>{t.projects.demoBtn}</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: '1 1 120px', padding: '8px 12px', fontSize: '0.82rem' }}
                >
                  <GithubIcon size={14} />
                  <span>{t.projects.codeBtn}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
