import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects as defaultProjects } from '../data/projects';

export default function Projects({ language = 'id', projects: propProjects, openModal: propOpenModal } = {}) {
  const [internalModalProject, setInternalModalProject] = useState(null);

  const projects = propProjects || defaultProjects;
  const openModal = propOpenModal || ((project) => setInternalModalProject(project));

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0f0f11] text-zinc-900 dark:text-white transition-colors scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {language === 'en' ? 'Selected Projects' : 'Studi Kasus Proyek'}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {language === 'en' ? 'Showcasing real-world business problems solved through structured data architecture and interactive reporting.' : 'Menampilkan penyelesaian masalah bisnis nyata melalui arsitektur data terstruktur dan pelaporan interaktif.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-sm transition-shadow group-hover:shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4 font-mono text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-lime-400">
                {(project.tags || []).slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-lime-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                {project.description || project.shortDesc}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Case Study Preview */}
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
