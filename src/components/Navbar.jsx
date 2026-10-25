import React from 'react';

export default function Navbar({ language, toggleLanguage, darkMode, toggleTheme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0a0a0b]/90 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 font-bold tracking-tight group">
          <span className="w-2.5 h-2.5 rounded-full bg-lime-500 dark:bg-lime-400 group-hover:scale-125 transition-transform" />
          <span className="font-mono text-sm tracking-widest text-zinc-900 dark:text-zinc-100">IQBAL.DF</span>
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Capabilities</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer" title="Toggle Theme">
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            )}
          </button>

          <div className="w-px h-5 bg-zinc-300 dark:bg-white/20" />

          <button onClick={toggleLanguage} className="text-xs font-mono font-bold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer">
            {language === 'en' ? 'ID' : 'EN'}
          </button>
        </div>

      </div>
    </header>
  );
}
