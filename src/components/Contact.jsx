import React, { useState } from 'react';
import {
  MailIcon,
  LinkedinIcon,
  WhatsappIcon,
  MapPinIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
} from './Icons';

export default function Contact({ language = 'en' } = {}) {
  const isEn = language === 'en';
  const [copied, setCopied] = useState(false);

  const emailAddress = 'iqbaldwifathonah@gmail.com';
  const waUrl =
    'https://wa.me/6282322231710?text=Halo%20Iqbal%2C%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi.';
  const linkedinUrl = 'https://linkedin.com/in/iqbaldwifathonah';

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full max-w-4xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-950/80 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col transition-colors duration-300 relative">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Bar Header Konsol */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 select-none text-zinc-600 dark:text-zinc-400 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 font-semibold flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
              contact-interface.sh
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>SOCKET_OPEN</span>
          </div>
        </div>

        {/* 2. Body Grid Terpusat */}
        <div className="p-6 sm:p-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
          {/* Icon Pembungkus */}
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-3">
            <MailIcon size={24} />
          </div>

          {/* Judul Utama */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
            {isEn ? "Let's Collaborate on Data Solutions" : 'Mari Berkolaborasi'}
          </h2>

          {/* Sub-deskripsi */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-6 leading-relaxed">
            {isEn
              ? 'Have an analytics opportunity, business intelligence project, or strategic inquiry? Connect directly via channels below.'
              : 'Punya tawaran analisis data, proyek spreadsheet, atau peluang kerja? Hubungi saya secara langsung melalui kanal berikut.'}
          </p>

          {/* 4 Kartu Informasi Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 w-full text-left">
            
            {/* 1. Email Card - Klik kartu atau tombol untuk Salin */}
            <div
              onClick={handleCopyEmail}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCopyEmail();
                }
              }}
              className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/90 dark:hover:bg-zinc-900/80 transition-all flex items-center justify-between shadow-xs cursor-pointer group select-none"
              title={isEn ? 'Click to copy email' : 'Klik untuk menyalin email'}
            >
              <div className="min-w-0 pr-2">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-1 flex items-center gap-1.5">
                  <MailIcon size={14} className="text-orange-500" />
                  Email
                </span>
                <p className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-200 break-all sm:break-normal">
                  {emailAddress}
                </p>
              </div>
              <div
                className="px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 text-xs font-mono group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors shrink-0 shadow-xs inline-flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <CheckIcon size={12} className="text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? 'Copied!' : 'Tersalin!'}</span>
                  </>
                ) : (
                  <>
                    <CopyIcon size={12} />
                    <span>{isEn ? 'Copy' : 'Salin'}</span>
                  </>
                )}
              </div>
            </div>

            {/* 2. LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/90 dark:hover:bg-zinc-900/80 transition-all flex items-center justify-between shadow-xs group"
            >
              <div className="min-w-0 pr-2">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-1 flex items-center gap-1.5">
                  <LinkedinIcon size={14} className="text-[#0A66C2]" />
                  LinkedIn
                </span>
                <p className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-200">
                  in/iqbaldwifathonah
                </p>
              </div>
              <span className="px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 text-xs font-mono group-hover:border-[#0A66C2]/50 group-hover:text-[#0A66C2] transition-colors shrink-0 shadow-xs inline-flex items-center gap-1.5">
                <span>{isEn ? 'Connect' : 'Buka'}</span>
                <ExternalLinkIcon size={12} />
              </span>
            </a>

            {/* 3. WhatsApp Card */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/90 dark:hover:bg-zinc-900/80 transition-all flex items-center justify-between shadow-xs group"
            >
              <div className="min-w-0 pr-2">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-1 flex items-center gap-1.5">
                  <WhatsappIcon size={14} className="text-emerald-500" />
                  WhatsApp
                </span>
                <p className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-200">
                  +62 823-2223-1710
                </p>
              </div>
              <span className="px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 text-xs font-mono group-hover:border-emerald-500/50 group-hover:text-emerald-500 transition-colors shrink-0 shadow-xs inline-flex items-center gap-1.5">
                <span>Chat</span>
                <ExternalLinkIcon size={12} />
              </span>
            </a>

            {/* 4. Location Card */}
            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/90 dark:hover:bg-zinc-900/80 transition-all flex items-center justify-between shadow-xs">
              <div className="min-w-0 pr-2">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-1 flex items-center gap-1.5">
                  <MapPinIcon size={14} className="text-orange-500" />
                  {isEn ? 'Location' : 'Lokasi'}
                </span>
                <p className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-200">
                  Yogyakarta / Jakarta, ID
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 text-xs font-mono shrink-0 shadow-xs">
                UTC+7
              </span>
            </div>

          </div>
        </div>

        {/* 3. Bar Footer Konsol */}
        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/90 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          <span>CONNECTION_READY // PING: 18ms</span>
          <span>ENCRYPTED_TLS // PORT: 443</span>
        </div>
      </div>
    </section>
  );
}
