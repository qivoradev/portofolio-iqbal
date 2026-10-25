import React, { useState } from 'react';

export default function Hero({ language, profilePic: _profilePic }) {
  const [activeTab, setActiveTab] = useState('query');

  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Baris Atas: Persona & Avatar */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYS_STATUS: OPEN_FOR_WORK</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
            Iqbal Dwi Fathonah
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-4">
            DATA ANALYST • BUSINESS INTELLIGENCE & MODELING • YOGYAKARTA, ID
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            {language === 'en'
              ? 'Translating raw business data into structured SQL models, automated Excel dashboards, and executive insights.'
              : 'Menerjemahkan data mentah menjadi model SQL terstruktur, dashboard Excel otomatis, dan insight bisnis strategis.'}
          </p>
        </div>

        {/* The Data Console Mockup (Inspirasi Terminal edh.dev ala Data Analyst) */}
        <div className="max-w-3xl mx-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden font-mono text-xs">
          
          {/* Header Jendela Terminal */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-zinc-500 dark:text-zinc-400 text-[11px]">profile_query.sql</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('query')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeTab === 'query'
                    ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold'
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                SQL Editor
              </button>
              <button
                onClick={() => setActiveTab('output')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeTab === 'output'
                    ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold'
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                Output (1 row)
              </button>
            </div>
          </div>

          {/* Isi Konsol Terminal */}
          <div className="p-4 sm:p-6 overflow-x-auto min-h-[170px] flex flex-col justify-center bg-zinc-50/50 dark:bg-zinc-950">
            {activeTab === 'query' ? (
              <div className="space-y-1 text-zinc-700 dark:text-zinc-300">
                <p><span className="text-zinc-400 select-none mr-3">1</span><span className="text-purple-600 dark:text-purple-400 font-semibold">SELECT</span> candidate_name, role, primary_toolkit</p>
                <p><span className="text-zinc-400 select-none mr-3">2</span><span className="text-purple-600 dark:text-purple-400 font-semibold">FROM</span> talent_pool</p>
                <p><span className="text-zinc-400 select-none mr-3">3</span><span className="text-purple-600 dark:text-purple-400 font-semibold">WHERE</span> domain = <span className="text-emerald-600 dark:text-emerald-400">'Business Intelligence'</span></p>
                <p><span className="text-zinc-400 select-none mr-3">4</span>  <span className="text-purple-600 dark:text-purple-400 font-semibold">AND</span> base_location = <span className="text-emerald-600 dark:text-emerald-400">'Yogyakarta'</span></p>
                <p><span className="text-zinc-400 select-none mr-3">5</span><span className="text-purple-600 dark:text-purple-400 font-semibold">LIMIT</span> 1;</p>
              </div>
            ) : (
              <div className="text-zinc-700 dark:text-zinc-300">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-400">
                      <th className="pb-2 pr-4 font-medium">candidate_name</th>
                      <th className="pb-2 pr-4 font-medium">role</th>
                      <th className="pb-2 font-medium">primary_toolkit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-2 pr-4 font-semibold text-zinc-900 dark:text-white">Iqbal Dwi Fathonah</td>
                      <td className="pt-2 pr-4 text-emerald-600 dark:text-emerald-400">Data & BI Analyst</td>
                      <td className="pt-2 text-zinc-600 dark:text-zinc-400">Excel, SQL, Looker</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Footer Konsol */}
          <div className="px-4 py-2 bg-zinc-100/60 dark:bg-zinc-900/40 border-t border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-between">
            <span>Query executed successfully in 12ms</span>
            <span className="flex items-center gap-1.5 text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Connected: PostgreSQL / Cloud
            </span>
          </div>

        </div>

        {/* Indikator Halus ke Seksi Proyek */}
        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors group"
          >
            <span>-- EXPLORE SELECTED WORKS --</span>
            <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}