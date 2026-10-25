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
    <section id="contact" className="py-20 bg-[#0a0a0c] text-white border-t border-zinc-800/80 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-lime-400 font-bold block mb-2">
              LET'S COLLABORATE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              {isEn ? 'Get In Touch' : 'Hubungi Saya'}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>{isEn ? 'READY TO DISCUSS' : 'SIAP BERDISKUSI'}</span>
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Links & Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
                  {isEn ? "Have a Project or Role in Mind?" : "Punya Peluang Proyek atau Karir?"}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                  {isEn
                    ? 'Interested in discussing data modeling, SQL pipelines, or interactive dashboards? Send a message directly or connect via channels below.'
                    : 'Tertarik mendiskusikan pemodelan data, query SQL, atau otomasi dashboard bisnis? Kirimkan pesan langsung atau hubungi saluran di bawah.'}
                </p>

                {/* Email Copy Card */}
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-xs sm:text-sm text-zinc-200 truncate">
                    {EMAIL_ADDRESS}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 text-xs font-mono font-bold rounded-xl bg-lime-400 text-black hover:bg-lime-300 transition-colors cursor-pointer border-0 shrink-0"
                  >
                    {copied ? (isEn ? 'Copied!' : 'Tersalin!') : (isEn ? 'Copy' : 'Salin')}
                  </button>
                </div>

                {/* Instant Channels */}
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <a
                    href="https://wa.me/6282322231710?text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Data%20Analyst%20Anda"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-lime-400 text-zinc-300 hover:text-lime-400 transition-colors"
                  >
                    WHATSAPP ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/iqbaldwifathonah"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-lime-400 text-zinc-300 hover:text-lime-400 transition-colors"
                  >
                    LINKEDIN ↗
                  </a>
                  <a
                    href="https://github.com/iqbaldwifathonah"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-lime-400 text-zinc-300 hover:text-lime-400 transition-colors"
                  >
                    GITHUB ↗
                  </a>
                </div>
              </div>

              <div className="font-mono text-xs text-zinc-500 pt-4 border-t border-zinc-800">
                <span>📍 Yogyakarta, Indonesia • GMT+7</span>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-400 mb-1.5 uppercase">
                    {isEn ? 'FULL NAME' : 'NAMA LENGKAP'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isEn ? 'Your full name...' : 'Nama lengkap Anda...'}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-400 mb-1.5 uppercase">
                    {isEn ? 'EMAIL ADDRESS' : 'ALAMAT EMAIL'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={isEn ? 'your.email@example.com' : 'alamat.email@anda.com'}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-400 mb-1.5 uppercase">
                    {isEn ? 'MESSAGE' : 'PESAN'}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isEn ? 'Write your project details or inquiry...' : 'Tuliskan detail proyek atau kebutuhan Anda...'}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer border-0 shadow-lg hover:shadow-lime-400/20 mt-2"
                >
                  <span>SEND MESSAGE →</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
