import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects as defaultProjects } from '../data/projects';

export default function Projects({ language = 'id', projects: propProjects, openModal: propOpenModal } = {}) {
  const [internalModalProject, setInternalModalProject] = useState(null);

  const projects = propProjects || defaultProjects;
  const openModal = propOpenModal || ((project) => setInternalModalProject(project));

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800/80 transition-colors scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {language === 'en' ? 'Selected Analytics Projects' : 'Studi Kasus & Dashboard'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            {projects.length} Verified Works
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-zinc-200 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-sans">
                  {project.description || project.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {(project.tags || []).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] border border-zinc-200 dark:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Open Case Study →
                </span>
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
