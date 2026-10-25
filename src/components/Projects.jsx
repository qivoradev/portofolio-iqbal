import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects as defaultProjects } from '../data/projects';

export default function Projects({ language = 'id', projects: propProjects, openModal: propOpenModal } = {}) {
  const [internalModalProject, setInternalModalProject] = useState(null);

  const projects = propProjects || defaultProjects;
  const openModal = propOpenModal || ((project) => setInternalModalProject(project));

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
              {language === 'en' ? 'CASE STUDIES & REPORTING' : 'STUDI KASUS & PELAPORAN'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {language === 'en' ? 'Selected Analytics Works' : 'Proyek Pilihan'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {projects.length} Works Documented
          </span>
        </div>

        {/* Structured Projects List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  [ 0{idx + 1} // CASE STUDY ]
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {(project.tags || []).join(' • ')}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-sans">
                {project.description || project.shortDesc}
              </p>

              {/* Minimal Problem & Deliverables Structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 mb-6 text-xs">
                <div>
                  <span className="font-mono font-bold text-zinc-400 uppercase block mb-1">
                    Problem Statement
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.id === 'nyc-collisions'
                      ? 'Mengevaluasi titik rawan kecelakaan di 5 borough NYC, mengidentifikasi faktor utama kelalaian, dan merumuskan pola jam rawan insiden lalu lintas.'
                      : 'Menganalisis anomali rasio keuntungan, mengidentifikasi kebocoran margin diskon, dan memetakan performa produk rugi.'}
                  </p>
                </div>
                <div>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase block mb-1">
                    Deliverables & Output
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.id === 'nyc-collisions' ? (
                      <>
                        • Analisis 238K+ Insiden Tabrakan<br />
                        • Evaluasi Tingkat Cedera (Injury Rate 48.7%)<br />
                        • Pemetaan Borough Terparah (Brooklyn & Queens 60%)
                      </>
                    ) : (
                      <>
                        • Pemodelan Total Sales ($2.29M)<br />
                        • Multi-Slicer Dynamic Pivot Cards<br />
                        • Analisis 5 Wilayah Kerugian Terbesar
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => openModal(project)}
                  className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-zinc-900 hover:text-white dark:hover:text-black text-xs font-mono font-semibold transition-all cursor-pointer inline-flex items-center gap-2 border-0"
                >
                  <span>Open Detailed Analysis</span>
                  <span>↗</span>
                </button>
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
