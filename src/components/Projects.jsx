import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects as defaultProjects } from '../data/projects';

export default function Projects({ language = 'id', projects: propProjects, openModal: propOpenModal } = {}) {
  const [internalModalProject, setInternalModalProject] = useState(null);

  const projects = propProjects || defaultProjects;
  const openModal = propOpenModal || ((project) => setInternalModalProject(project));

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0a0a0d] text-white border-t border-white/[0.08] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header ala Sawad */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-lime-400 font-bold block mb-2">
              RECENT WORKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              {language === 'en' ? 'Selected Projects' : 'Studi Kasus Analisis'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase">
            {projects.length} CASE STUDIES DOCUMENTED
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group p-6 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/[0.08] hover:border-lime-400/40 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Mockup Preview Gambar */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-zinc-950 border border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-lime-400 font-mono text-[10px] font-bold">
                    BI DASHBOARD
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold group-hover:text-lime-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                  {project.description || project.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {(project.tags || []).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 text-[10px] border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-lime-400 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Case Study →
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
