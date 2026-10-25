import React, { useState } from 'react';

const EMAIL_ADDRESS = 'iqbalfathonah20@gmail.com';

export default function Contact({ language = 'id' } = {}) {
  const isEn = language === 'en';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#111110] text-[#E8E6DF] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12"
          style={{ borderBottom: '0.5px solid #252523' }}
        >
          <div>
            <span
              className="text-[11px] font-mono font-bold tracking-widest text-[#22C55E] uppercase block mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              [ 04 ] GET IN TOUCH
            </span>
            <h2
              className="font-extrabold uppercase text-[#E8E6DF]"
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
              }}
            >
              CONTACT
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#3E3E3B] uppercase tracking-wider">
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Big Newsprint Card Container: 12px radius, 56px padding */}
        <div
          className="rounded-[12px] bg-[#1A1A18] p-6 sm:p-10 lg:p-14 transition-colors"
          style={{ border: '0.5px solid #2E2E2C' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Info & Quick Channels (5 Kolom) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                {/* Ready to Discuss Badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-[4px] uppercase tracking-wider flex items-center gap-1.5"
                    style={{
                      backgroundColor: '#0E3D1F',
                      border: '0.5px solid #1A5230',
                      color: '#22C55E',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    <span>{isEn ? 'Ready to Discuss' : 'Siap Berdiskusi'}</span>
                  </span>
                </div>

                <h3
                  className="font-extrabold text-[#E8E6DF] tracking-tight mb-3"
                  style={{
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    lineHeight: 1.1,
                  }}
                >
                  {isEn ? "Let's Collaborate" : "Mari Berkolaborasi"}
                </h3>

                <p
                  className="text-[#8A8A86] mb-8"
                  style={{ fontSize: '15px', lineHeight: 1.7 }}
                >
                  {isEn
                    ? 'Have an analytics opportunity, contract, or full-time data role? Send a message directly or connect via instant channels below.'
                    : 'Memiliki proyek pengolahan data, peluang kontrak, atau posisi full-time? Kirimkan pesan langsung atau hubungi saluran cepat di bawah.'}
                </p>

                {/* Email Display Row with Copy button */}
                <div
                  className="p-3 rounded-[6px] bg-[#111110] flex items-center justify-between gap-3 mb-6"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="font-mono text-xs sm:text-sm text-[#E8E6DF] truncate">
                    {EMAIL_ADDRESS}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-[4px] bg-[#242422] text-[#8A8A86] hover:text-[#E8E6DF] transition-colors cursor-pointer shrink-0"
                    style={{
                      border: '0.5px solid #2E2E2C',
                      transitionDuration: '0.15s',
                    }}
                  >
                    {copied ? (isEn ? 'COPIED!' : 'TERSALIN!') : 'COPY'}
                  </button>
                </div>

                {/* Channel Buttons (Kotak 42px) */}
                <div className="flex items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6282322231710?text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Data%20Analyst%20Anda"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                    className="w-[42px] h-[42px] rounded-[4px] bg-[#242422] text-[#8A8A86] hover:text-[#22C55E] flex items-center justify-center transition-colors"
                    style={{
                      border: '0.5px solid #2E2E2C',
                      transitionDuration: '0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#22C55E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#2E2E2C';
                    }}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/iqbaldwifathonah"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="w-[42px] h-[42px] rounded-[4px] bg-[#242422] text-[#8A8A86] hover:text-[#22C55E] flex items-center justify-center transition-colors"
                    style={{
                      border: '0.5px solid #2E2E2C',
                      transitionDuration: '0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#22C55E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#2E2E2C';
                    }}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/iqbaldwifathonah"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="w-[42px] h-[42px] rounded-[4px] bg-[#242422] text-[#8A8A86] hover:text-[#22C55E] flex items-center justify-center transition-colors"
                    style={{
                      border: '0.5px solid #2E2E2C',
                      transitionDuration: '0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#22C55E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#2E2E2C';
                    }}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Location Tag */}
              <div className="font-mono text-xs text-[#3E3E3B]">
                <span>Yogyakarta, Indonesia · GMT+7</span>
              </div>
            </div>

            {/* Right Column: Interactive Form (7 Kolom) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-[#3E3E3B] uppercase mb-1.5">
                    {isEn ? 'FULL NAME' : 'NAMA LENGKAP'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isEn ? 'Your full name...' : 'Nama lengkap Anda...'}
                    className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#111110] text-sm text-[#E8E6DF] placeholder-[#3E3E3B] focus:outline-none transition-colors"
                    style={{
                      border: '0.5px solid #2E2E2C',
                      transitionDuration: '0.15s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22C55E';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2E2E2C';
                    }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-[#3E3E3B] uppercase mb-1.5">
                    {isEn ? 'EMAIL ADDRESS' : 'ALAMAT EMAIL'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={isEn ? 'your.email@example.com' : 'alamat.email@anda.com'}
                    className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#111110] text-sm text-[#E8E6DF] placeholder-[#3E3E3B] focus:outline-none transition-colors"
                    style={{
                      border: '0.5px solid #2E2E2C',
                      transitionDuration: '0.15s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22C55E';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2E2E2C';
                    }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-[#3E3E3B] uppercase mb-1.5">
                    {isEn ? 'MESSAGE' : 'PESAN'}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isEn ? 'Write your message or inquiry details...' : 'Tuliskan pesan atau detail kebutuhan Anda...'}
                    className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#111110] text-sm text-[#E8E6DF] placeholder-[#3E3E3B] focus:outline-none transition-colors resize-none"
                    style={{
                      border: '0.5px solid #2E2E2C',
                      transitionDuration: '0.15s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22C55E';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2E2E2C';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-[4px] bg-[#242422] text-[#E8E6DF] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center justify-center gap-2 mt-2"
                  style={{
                    border: '0.5px solid #2E2E2C',
                    transitionDuration: '0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22C55E';
                    e.currentTarget.style.color = '#22C55E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#2E2E2C';
                    e.currentTarget.style.color = '#E8E6DF';
                  }}
                >
                  <span>SEND MESSAGE VIA EMAIL ↗</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
