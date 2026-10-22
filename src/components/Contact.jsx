import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import { getWhatsAppLink } from '../data/portfolioData';
import { Mail, MapPin, Send } from 'lucide-react';
import { SiGithub, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

/** Cek URL sosial valid */
function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const t = url.trim();
  return t !== '' && !t.startsWith('[');
}

export default function Contact() {
  const { language, t, portfolioData } = usePortfolio();
  const { contacts } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const defaultWaUrl = getWhatsAppLink(contacts.whatsapp, contacts.whatsappMessage, language);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Kirim Form via Mailto (Aplikasi Email)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatusMessage(
        language === 'en'
          ? 'Please enter your name and message first.'
          : 'Silakan lengkapi nama dan pesan terlebih dahulu.'
      );
      return;
    }
    const subjectEncoded = encodeURIComponent(
      formData.subject || (language === 'en' ? `Portfolio Inquiry from ${formData.name}` : `Pesan Portofolio dari ${formData.name}`)
    );
    const bodyEncoded = encodeURIComponent(
      language === 'en'
        ? `Sender Name: ${formData.name}\nSender Email: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message}`
        : `Nama Pengirim: ${formData.name}\nEmail Pengirim: ${formData.email || 'Tidak dicantumkan'}\n\nPesan:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${contacts.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setStatusMessage(
      language === 'en' ? 'Opening email client...' : 'Membuka aplikasi email...'
    );
    window.location.href = mailtoUrl;
  };

  const socials = [
    { key: 'github', label: 'GitHub', url: isValidUrl(contacts.github) ? contacts.github : null, Icon: SiGithub },
    { key: 'linkedin', label: 'LinkedIn', url: isValidUrl(contacts.linkedin) ? contacts.linkedin : null, Icon: FaLinkedin },
    { key: 'instagram', label: 'Instagram', url: isValidUrl(contacts.instagram) ? contacts.instagram : null, Icon: SiInstagram },
  ].filter(s => s.url);

  return (
    <section id="kontak" className="section contact-section py-12 md:py-16">
      <div className="container">
        
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Card Kiri: Kontak Langsung (Direct Channels) */}
          <div className="editorial-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
              {t.contact.directHeading}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95rem' }}>
              {t.contact.directDesc}
            </p>

            {/* Direct WhatsApp Box */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <SiWhatsapp size={18} color="#25D366" />
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{t.contact.waOfficial}</strong>
              </div>
              <a
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.88rem', padding: '10px 16px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <SiWhatsapp size={16} />
                <span>{t.contact.waBtn || 'Chat via WhatsApp'}</span>
              </a>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Email</span>
                  <a
                    href={`mailto:${contacts.email}`}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    {contacts.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                    {t.contact.locationLabel || (language === 'en' ? 'Location' : 'Lokasi')}
                  </span>
                  <strong style={{ fontSize: '0.92rem' }}>{contacts.location}</strong>
                </div>
              </div>
            </div>

            {/* Social Links */}
            {socials.length > 0 && (
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '18px', marginTop: '24px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                  {t.contact.socialLabel}
                </span>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {socials.map(({ key, label, url, Icon }) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-tag"
                      aria-label={label}
                      style={{ minHeight: '44px', minWidth: '44px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Card Kanan: Form Kirim Pesan (Send Message) */}
          <div className="editorial-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
              {t.contact.formHeading}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '22px' }}>
              {t.contact.formDesc}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  className="contact-input border border-zinc-300 dark:border-zinc-800 focus:border-orange-500"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.emailPlaceholder}
                  className="contact-input border border-zinc-300 dark:border-zinc-800 focus:border-orange-500"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.subjectPlaceholder}
                  className="contact-input border border-zinc-300 dark:border-zinc-800 focus:border-orange-500"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.contact.messageLabel}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="contact-textarea border border-zinc-300 dark:border-zinc-800 focus:border-orange-500"
                />
              </div>

              {/* Single Main Submit Button */}
              <button
                type="submit"
                className="btn btn-primary contact-submit-btn"
                style={{
                  width: '100%',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  marginTop: '6px',
                }}
              >
                <Send size={16} aria-hidden="true" />
                <span>{t.contact.submitBtn || (language === 'en' ? 'Send Message' : 'Kirim Pesan')}</span>
              </button>

              {statusMessage && (
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--accent-subtle)',
                    border: '1px solid var(--accent)',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    textAlign: 'center',
                    marginTop: '6px',
                  }}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
