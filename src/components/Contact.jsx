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
    <section id="contact" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
              INQUIRIES & COLLABORATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {isEn ? 'Direct Communication' : 'Komunikasi Langsung'}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isEn ? 'READY TO DISCUSS' : 'SIAP BERDISKUSI'}</span>
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Links & Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                  {isEn ? "Let's Connect" : "Mari Terhubung"}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-sans">
                  {isEn
                    ? 'Have an analytics opportunity, contract, or full-time data role? Send a message directly or connect via channels below.'
                    : 'Tertarik mendiskusikan pengolahan data atau peluang kerja sama? Kirimkan pesan langsung atau hubungi saluran di bawah.'}
                </p>

                {/* Email Copy Card */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 truncate">
                    {EMAIL_ADDRESS}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer border-0 shrink-0"
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
                    className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-emerald-500 text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    WHATSAPP ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/iqbaldwifathonah"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-emerald-500 text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    LINKEDIN ↗
                  </a>
                  <a
                    href="https://github.com/iqbaldwifathonah"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-emerald-500 text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    GITHUB ↗
                  </a>
                </div>
              </div>

              <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
                <span>📍 Yogyakarta, Indonesia • GMT+7</span>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                    {isEn ? 'FULL NAME' : 'NAMA LENGKAP'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isEn ? 'Your full name...' : 'Nama lengkap Anda...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                    {isEn ? 'EMAIL ADDRESS' : 'ALAMAT EMAIL'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={isEn ? 'your.email@example.com' : 'alamat.email@anda.com'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                    {isEn ? 'MESSAGE' : 'PESAN'}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isEn ? 'Write your message or inquiry details...' : 'Tuliskan pesan atau detail kebutuhan Anda...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-zinc-900 hover:text-white dark:hover:text-black font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer border-0 shadow-xs mt-2"
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
