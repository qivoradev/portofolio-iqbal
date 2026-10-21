import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { t, portfolioData } = usePortfolio();
  const { experiences } = portfolioData;

  return (
    <section id="pengalaman" className="section">
      <div className="container">
        
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle || t.experience.description} />

        {/* Minimalist Editorial Timeline */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="editorial-card"
              style={{
                padding: '24px 28px',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '10px',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {exp.role}
                  </h3>
                  <span style={{ fontSize: '0.92rem', color: 'var(--accent)', fontWeight: 600 }}>
                    {exp.company}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
