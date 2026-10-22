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
      className="site-footer py-12 md:py-16 pb-12"
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
          className="footer-contact-row flex flex-col md:flex-row items-center justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-800 w-full text-center md:text-left"
        >
          <div className="footer-email-col flex items-center justify-center md:justify-start gap-5 flex-wrap w-full md:w-auto">
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

          <div className="footer-actions-col flex items-center justify-center md:justify-end gap-3 flex-wrap w-full md:w-auto">
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
        <div className="footer-copyright-wrap w-full flex justify-center text-center">
          <p
            className="footer-copyright text-center w-full"
            style={{
              fontSize: '0.88rem',
              color: 'var(--text-2)',
              margin: 0,
              textAlign: 'center',
              width: '100%',
            }}
          >
            © {CURRENT_YEAR} <strong style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{portfolioData.name}</strong>. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
