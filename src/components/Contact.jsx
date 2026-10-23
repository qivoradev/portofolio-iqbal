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
      <div className="w-full rounded-3xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col relative">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Header Konsol Terminal */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-zinc-900/60 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 text-zinc-300 font-semibold flex items-center gap-1.5">
              contact-interface.sh
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SOCKET_OPEN</span>
          </div>
        </div>

        {/* 2. Body Grid Terpusat */}
        <div className="p-6 sm:p-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
          {/* Header Title */}
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
            <MailIcon size={24} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {isEn ? "Let's Collaborate on Data Solutions" : 'Mari Berkolaborasi'}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 max-w-md">
            {isEn
              ? 'Have an analytics opportunity, business intelligence project, or strategic inquiry? Connect directly via channels below.'
              : 'Punya tawaran analisis data, proyek business intelligence, atau peluang kerja? Hubungi saya secara langsung melalui kanal berikut.'}
          </p>

          {/* Kartu Kontak Langsung */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full text-left mb-6">
            
            {/* Email Card with Copy Button */}
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MailIcon size={14} className="text-orange-400" />
                  Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[11px] font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1 bg-zinc-800/60 hover:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700/60 cursor-pointer transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckIcon size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">{isEn ? 'Copied' : 'Tersalin'}</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={12} />
                      <span>{isEn ? 'Copy' : 'Salin'}</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                {emailAddress}
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 flex flex-col justify-between hover:border-sky-500/40 hover:bg-zinc-900/70 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <LinkedinIcon size={14} className="text-sky-400" />
                  LinkedIn
                </span>
                <span className="text-zinc-500 group-hover:text-sky-400 transition-colors">
                  <ExternalLinkIcon size={13} />
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                in/iqbaldwifathonah
              </p>
            </a>

            {/* WhatsApp Card */}
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <WhatsappIcon size={14} className="text-emerald-400" />
                  WhatsApp
                </span>
                <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  <ExternalLinkIcon size={13} />
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                +62 823-2223-1710
              </p>
            </a>

            {/* Location Card */}
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPinIcon size={14} className="text-orange-400" />
                  {isEn ? 'Location' : 'Lokasi'}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  UTC+7
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                Yogyakarta / South Jakarta, ID
              </p>
            </div>

          </div>

          {/* Quick Action Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/20"
          >
            <WhatsappIcon size={16} />
            <span>{isEn ? 'Start Conversation on WhatsApp' : 'Mulai Diskusi via WhatsApp'}</span>
          </a>
        </div>

        {/* 3. Footer Konsol Terminal */}
        <div className="px-5 py-2.5 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>CONNECTION_READY // PING: 18ms</span>
          <span>ENCRYPTED_TLS // PORT: 443</span>
        </div>
      </div>
    </section>
  );
}
