import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects as defaultProjects } from '../data/projects';

export default function Projects({ language = 'id', projects: propProjects, openModal: propOpenModal } = {}) {
  const [internalModalProject, setInternalModalProject] = useState(null);

  const projects = propProjects || defaultProjects;
  const handleOpenModal = propOpenModal || ((project) => setInternalModalProject(project));

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-semibold block mb-1">
              APPLICATIONS &amp; CASE STUDIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {language === 'en' ? 'Featured Analytics Works' : 'Proyek & Studi Kasus'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">2 Items</span>
        </div>

        {/* Project Windows List */}
        <div className="space-y-10 sm:space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xl overflow-hidden group transition-all"
            >
              {/* macOS Window Topbar per Project */}
              <div className="px-4 py-2.5 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                    {project.title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.xlsx
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  READ_ONLY
                </span>
              </div>

              {/* Window Content: Gambar & Deskripsi */}
              <div className="p-5 sm:p-6">
                <div 
                  onClick={() => handleOpenModal(project)}
                  className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-5 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-white/90 text-zinc-900 font-mono text-xs font-bold shadow-lg">
                      Open Dashboard Preview ↗
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {project.description || project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {(project.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenModal(project)}
                    className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 font-semibold text-xs font-mono shrink-0 transition-all cursor-pointer border-0"
                  >
                    View Analysis ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Dashboard */}
        {internalModalProject && (
          <ProjectModal
            project={internalModalProject}
            onClose={() => setInternalModalProject(null)}
            language={language}
          />
        )}

      </div>
    </section>
  );
}
