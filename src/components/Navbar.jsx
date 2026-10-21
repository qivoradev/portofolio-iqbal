import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getWhatsAppLink } from '../data/portfolioData';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, theme, toggleTheme, t, portfolioData } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const { contacts } = portfolioData;
  const isWaDisabled = !contacts.whatsapp || contacts.whatsapp.trim() === '';
  const whatsappUrl = getWhatsAppLink(contacts.whatsapp, contacts.whatsappMessage, language);

  const navLinks = [
    { id: 'beranda', label: t.nav.home, href: '#beranda' },
    { id: 'tentang', label: t.nav.about, href: '#tentang' },
    { id: 'tools', label: t.nav.skills, href: '#tools' },
    { id: 'proyek', label: t.nav.projects, href: '#proyek' },
    { id: 'sertifikasi', label: t.nav.certifications, href: '#sertifikasi' },
    { id: 'kontak', label: t.nav.contact, href: '#kontak' },
  ];

  // Penentuan menu aktif secara deterministik dan langsung (pada mount & scroll)
  useEffect(() => {
    const determineActiveSection = () => {
      if (window.scrollY < 120) {
        return 'beranda';
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        return 'kontak';
      }
      const sectionIds = ['beranda', 'tentang', 'tools', 'proyek', 'sertifikasi', 'kontak'];
      const offset = 160;
      let current = 'beranda';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            current = id;
          }
        }
      }
      return current;
    };

    const update = () => {
      setIsScrolled(window.scrollY > 40);
      setActiveSection(determineActiveSection());
    };

    // Jalankan langsung saat mount
    update();

    // Jalankan kembali setelah rendering layout selesai
    const timer1 = setTimeout(update, 50);
    const timer2 = setTimeout(update, 200);

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Menutup menu mobile saat tombol Escape ditekan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        right: '16px',
        zIndex: 1000,
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
      }}
    >
      {/* Kapsul Melayang (Floating Pill) */}
      <div
        className="floating-capsule"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '8px 18px' : '10px 22px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--navbar-bg)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--navbar-shadow)',
          transition: 'padding var(--transition-fast)',
        }}
      >
        {/* Kiri: Titik kecil warna --accent + Nama */}
        <a
          href="#beranda"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.05rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            minHeight: '44px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span>{portfolioData.name}</span>
        </a>

        {/* Tengah (Desktop): Link Navigasi Beranda s/d Kontak */}
        <nav
          className="desktop-nav-links"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  padding: '0 6px',
                  minHeight: '44px',
                  minWidth: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'color var(--transition-fast), border-color var(--transition-fast)',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Kanan: Berurutan ID|EN, Tema, dan SATU tombol Hubungi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* 1. Tombol Bahasa ID | EN */}
          <button
            onClick={toggleLanguage}
            title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            aria-label="Toggle language"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              minHeight: '44px',
              minWidth: '44px',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: language === 'id' ? 'var(--accent)' : 'var(--text-muted)' }}>ID</span>
            <span style={{ color: 'var(--border-strong)' }}>|</span>
            <span style={{ color: language === 'en' ? 'var(--accent)' : 'var(--text-muted)' }}>EN</span>
          </button>

          {/* 2. Tombol Ganti Tema Terang / Gelap */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Gelap'}
            aria-label="Toggle color theme"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              minHeight: '44px',
              minWidth: '44px',
            }}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* 3. SATU Tombol Hubungi (warna solid --accent, tanpa gradasi & glow) */}
          <a
            href={isWaDisabled ? undefined : whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary desktop-hubungi-btn"
            style={{
              borderRadius: 'var(--radius-pill)',
              padding: '8px 18px',
              fontSize: '0.84rem',
              display: 'none',
              minHeight: '44px',
              ...(isWaDisabled ? { opacity: 0.45, cursor: 'not-allowed', pointerEvents: 'none' } : {}),
            }}
            aria-disabled={isWaDisabled}
          >
            <span>{t.nav.contactBtn}</span>
          </a>

          {/* Hamburger Toggle (<= 820px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka menu navigasi"
            className="mobile-hamburger-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '8px',
              minHeight: '44px',
              minWidth: '44px',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel dari Kapsul */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            marginTop: '10px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: 'var(--navbar-shadow)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? 'location' : undefined}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'var(--accent-subtle)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {link.label}
              </a>
            );
          })}

          {/* Tombol Hubungi di Mobile Panel */}
          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', marginTop: '4px' }}>
            <a
              href={isWaDisabled ? undefined : whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                width: '100%',
                borderRadius: 'var(--radius-pill)',
                minHeight: '44px',
                ...(isWaDisabled ? { opacity: 0.45, cursor: 'not-allowed', pointerEvents: 'none' } : {}),
              }}
              aria-disabled={isWaDisabled}
            >
              <span>{t.nav.contactBtn}</span>
            </a>
          </div>
        </div>
      )}

      {/* CSS Responsive Breakpoint untuk Desktop */}
      <style>{`
        @media (min-width: 821px) {
          .desktop-nav-links { display: flex !important; }
          .desktop-hubungi-btn { display: inline-flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .floating-capsule {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}
