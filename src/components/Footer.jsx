import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getWhatsAppLink } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { language, t, portfolioData } = usePortfolio();
  const { contacts } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waUrl = getWhatsAppLink(contacts.whatsapp, contacts.whatsappMessage, language);

  return (
    <footer
      className="site-footer py-12 md:py-16"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Quick Contact Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {contacts.email && (
              <a
                href={`mailto:${contacts.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-2)',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  minHeight: '44px',
                }}
              >
                <Mail size={16} style={{ color: 'var(--accent)' }} />
                <span>{contacts.email}</span>
              </a>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {contacts.whatsapp && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: '8px 16px',
                  fontSize: '0.84rem',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <SiWhatsapp size={16} color="#25D366" />
                <span>Chat via WhatsApp</span>
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.84rem', minHeight: '44px' }}
              title={t.footer.backToTop}
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', margin: 0 }}>
            © {CURRENT_YEAR} <strong style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{portfolioData.name}</strong>. {t.footer.copyright}
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: 0 }}>
            {t.footer.subtitle}
          </p>
        </div>
      </div>
    </footer>
  );
}
