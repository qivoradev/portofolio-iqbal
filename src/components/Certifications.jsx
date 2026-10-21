import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { t, portfolioData } = usePortfolio();
  const { certifications } = portfolioData;

  return (
    <section id="sertifikasi" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.certifications.tag}</span>
          <h2 className="section-title">{t.certifications.title}</h2>
          <p className="section-description">{t.certifications.description}</p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="editorial-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {cert.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {cert.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '20px' }}>
                  {cert.issuer}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.84rem', padding: '8px 14px' }}
                >
                  <ExternalLink size={14} />
                  <span>{t.certifications.credentialBtn}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
