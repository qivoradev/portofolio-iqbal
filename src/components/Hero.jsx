import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";
import { SiPostgresql, SiMicrosoftexcel } from "react-icons/si";
import { MdOutlineAnalytics } from "react-icons/md";

const profile = {
  name: "Iqbal Dwi Fathonah",
  role: "Data Analyst",
  photo: "/profile.png", // Jalur foto di folder public
  socials: [
    { label: "GitHub", href: "https://github.com/qivoradev", icon: FiGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/iqbaldwifathonah", icon: FiLinkedin },
    { label: "Instagram", href: "https://instagram.com", icon: FiInstagram },
  ],
  tools: [
    { name: "SQL", icon: FaDatabase, color: "text-emerald-400" },
    { name: "Excel (Pivot/VLOOKUP)", icon: SiMicrosoftexcel, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
  ],
  domains: ["Sales Analytics", "Customer Churn"],
  certifications: [
    { title: "Web Developer", issuer: "BNSP" },
    { title: "Artificial Intelligence", issuer: "Certiport" },
  ],
};

function BentoCard({ className = "", children }) {
  return (
    <div
      className={
        "group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 " +
        "transition-all duration-300 ease-out " +
        "hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-zinc-900/80 " +
        className
      }
    >
      {children}
    </div>
  );
}

function CardLabel({ children }) {
  return (
    <p className="mb-3 text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
      {children}
    </p>
  );
}

export default function Hero({ setActiveTab, language = "en" }) {
  const isEn = language === "en";
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-4 flex flex-col justify-center items-center my-auto">

      {/* Background Glow Halus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-5 items-stretch">

        {/* KOLOM KIRI: Identitas Profil (lg:col-span-2) */}
        <div className="flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div>
            {/* Foto Profil Bulat dengan Warna Aksen */}
            <div className="relative mb-5 flex justify-center lg:justify-start">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-b from-teal-400 to-emerald-600 border-2 border-emerald-300/40 shadow-[0_8px_20px_rgba(20,184,166,0.25)] flex items-center justify-center">
                {!photoError ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover object-[center_25%] scale-[1.65] -translate-y-1 select-none pointer-events-none drop-shadow-md"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <span className="text-3xl font-bold text-white">IDF</span>
                )}
              </div>
            </div>

            {/* Badge Status Ketersediaan */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isEn ? "Available for Work" : "Terbuka untuk Kerja"}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {profile.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-orange-500 mb-4">
              {profile.role}
            </p>

            {/* Tautan Sosial Media */}
            <div className="flex items-center gap-2 mb-6">
              {profile.socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi Tab */}
          <button
            type="button"
            onClick={() => setActiveTab && setActiveTab("projects")}
            className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 shadow-md shadow-orange-500/20 active:scale-95"
          >
            <span>{isEn ? "View Projects" : "Lihat Proyek"}</span>
            <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
          </button>
        </div>

        {/* KOLOM KANAN: Bento Grid Data Analyst (lg:col-span-3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-3">

          {/* 1. Core Tools (Lebar Penuh) */}
          <BentoCard className="sm:col-span-2">
            <CardLabel>Core Tools</CardLabel>
            <ul className="flex flex-wrap gap-2">
              {profile.tools.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs sm:text-sm text-zinc-200"
                >
                  <Icon className={`h-4 w-4 ${color}`} />
                  {name}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* 2. Domain Focus */}
          <BentoCard>
            <CardLabel>Domain Focus</CardLabel>
            <div className="flex flex-col gap-2">
              {profile.domains.map((domain) => (
                <span
                  key={domain}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-200"
                >
                  <MdOutlineAnalytics className="h-4 w-4 text-orange-400 shrink-0" />
                  {domain}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 3. Sertifikasi */}
          <BentoCard>
            <CardLabel>{isEn ? "Certifications" : "Sertifikasi"}</CardLabel>
            <ul className="space-y-2">
              {profile.certifications.map(({ title, issuer }) => (
                <li key={title} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <FiCheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    {title}{" "}
                    <span className="text-[10px] uppercase font-bold text-zinc-400 border border-zinc-700/60 px-1 py-0.5 rounded">
                      {issuer}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* 4. Ringkasan Profil (Lebar Penuh) */}
          <BentoCard className="sm:col-span-2">
            <CardLabel>{isEn ? "About Approach" : "Pendekatan Kerja"}</CardLabel>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
              {isEn
                ? "Information Technology graduate with professional certifications in AI and Web Development. Focused on extracting actionable business value through Excel and SQL analytics."
                : "Lulusan Teknologi Informasi dengan sertifikasi BNSP dan AI Certiport. Berfokus menerjemahkan data mentah menjadi keputusan bisnis strategis menggunakan analisis Excel dan SQL."}
            </p>
          </BentoCard>

        </div>

      </div>
    </section>
  );
}