import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getWhatsAppLink } from '../data/portfolioData';
import { Home, BarChart3, Award, Mail, Sun, Moon } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Navbar() {
  const { language, toggleLanguage, theme, toggleTheme, t, portfolioData } = usePortfolio();
  const [activeSection, setActiveSection] = useState('beranda');

  const { contacts } = portfolioData;
  const whatsappUrl = getWhatsAppLink(contacts.whatsapp, contacts.whatsappMessage, language);

  const navLinks = [
    {
      id: 'beranda',
      label: t.nav.home || (language === 'en' ? 'Home' : 'Beranda'),
      href: '#beranda',
      Icon: Home,
    },
    {
      id: 'proyek',
      label: t.nav.projects || (language === 'en' ? 'Projects' : 'Proyek'),
      href: '#proyek',
      Icon: BarChart3,
    },
    {
      id: 'sertifikasi',
      label: t.nav.certifications || (language === 'en' ? 'Certifications' : 'Sertifikasi'),
      href: '#sertifikasi',
      Icon: Award,
    },
    {
      id: 'kontak',
      label: t.nav.contact || (language === 'en' ? 'Contact' : 'Kontak'),
      href: '#kontak',
      Icon: Mail,
    },
  ];

  // Penentuan menu aktif secara dinamis saat scroll
  useEffect(() => {
    const sectionIds = ['beranda', 'proyek', 'sertifikasi', 'kontak'];

    const handleScroll = () => {
      // Jika sudah di paling bawah halaman
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('kontak');
        return;
      }

      // Deteksi posisi scroll dari bawah ke atas
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('beranda');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Handler smooth scroll ke anchor
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* 1. Tata Letak Desktop (md:flex): Floating Capsule / Island Navigation di Atas Tengah Layar */}
      <header className="navbar-desktop-wrapper fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="nav-capsule-desktop rounded-full px-5 py-2.5 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-xl shadow-black/30 flex items-center gap-4">
          
          {/* Logo / Inisial kecil dengan status dot oranye ("• Iqbal D.F") */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="nav-logo flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-orange-400 transition-colors"
            title="Iqbal D.F"
          >
            <span className="nav-status-dot w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.85)] animate-pulse inline-block flex-shrink-0" />
            <span className="font-heading tracking-tight whitespace-nowrap">Iqbal D.F</span>
          </a>

          {/* Pemisah Vertikal Tipis */}
          <div className="nav-divider h-4 w-px bg-zinc-700/60" aria-hidden="true" />

          {/* Navigasi Teks Ringkas (Beranda, Proyek, Sertifikasi, Kontak) */}
          <nav className="nav-links flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link-item relative text-xs font-medium tracking-wide transition-colors py-1 ${
                    isActive ? 'active text-orange-400 font-semibold' : 'text-zinc-400 hover:text-orange-400'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="active-indicator-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.9)]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Pemisah Vertikal Tipis */}
          <div className="nav-divider h-4 w-px bg-zinc-700/60" aria-hidden="true" />

          {/* Tombol Switch Bahasa (ID / EN) & Tombol Tema / Kontak Cepat */}
          <div className="nav-actions flex items-center gap-2">
            {/* Switch Bahasa */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="nav-lang-btn text-xs font-semibold px-2 py-1 rounded-md text-zinc-300 hover:text-orange-400 hover:bg-zinc-800/80 transition-all flex items-center gap-1 cursor-pointer"
              title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
              aria-label="Ganti bahasa"
            >
              <span className={language === 'id' ? 'text-orange-400 font-bold' : 'text-zinc-400'}>ID</span>
              <span className="text-zinc-600 text-[10px]">/</span>
              <span className={language === 'en' ? 'text-orange-400 font-bold' : 'text-zinc-400'}>EN</span>
            </button>

            {/* Tombol Ganti Tema */}
            <button
              type="button"
              onClick={toggleTheme}
              className="nav-theme-btn p-1.5 rounded-full text-zinc-300 hover:text-orange-400 hover:bg-zinc-800/80 transition-all flex items-center justify-center cursor-pointer"
              title={theme === 'dark' ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Gelap'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Tombol Kontak Cepat WhatsApp */}
            {contacts?.whatsapp && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-wa-btn p-1.5 rounded-full text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/80 transition-all flex items-center justify-center"
                title="Chat via WhatsApp"
                aria-label="Chat via WhatsApp"
              >
                <SiWhatsapp size={15} className="text-emerald-400 hover:scale-110 transition-transform" />
              </a>
            )}
          </div>

        </div>
      </header>

      {/* 2. Tata Letak Mobile (< 768px): Floating Bottom Dock di Bawah Layar */}
      <nav className="mobile-dock-wrapper fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="dock-capsule rounded-full px-4 py-2.5 bg-zinc-900/90 backdrop-blur-lg border border-zinc-800 shadow-2xl shadow-black/50 flex items-center gap-4">
          
          {/* Ikon Navigasi: Home, Proyek, Sertifikasi, Kontak */}
          <div className="flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const IconComponent = link.Icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-label={link.label}
                  title={link.label}
                  className={`dock-link-item relative p-1.5 rounded-full flex flex-col items-center justify-center transition-colors ${
                    isActive ? 'active text-orange-400' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <IconComponent size={20} aria-hidden="true" />
                  {isActive && (
                    <span
                      className="dock-active-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.9)]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Pemisah Vertikal Tipis */}
          <div className="h-4 w-px bg-zinc-700/60" aria-hidden="true" />

          {/* Tombol Teks Mini "ID | EN" */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="dock-lang-btn text-xs font-semibold px-1 py-1 text-zinc-300 flex items-center gap-1 active:scale-95 transition-transform cursor-pointer"
            title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            aria-label="Ganti bahasa"
          >
            <span className={language === 'id' ? 'text-orange-400 font-bold' : 'text-zinc-400'}>ID</span>
            <span className="text-zinc-600 text-[10px]">|</span>
            <span className={language === 'en' ? 'text-orange-400 font-bold' : 'text-zinc-400'}>EN</span>
          </button>

          {/* Tombol Tema Ringkas Mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className="dock-theme-btn p-1 text-zinc-400 hover:text-orange-400 active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
            title={theme === 'dark' ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Gelap'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

        </div>
      </nav>
    </>
  );
}
