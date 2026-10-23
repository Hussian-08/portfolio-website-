import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Layers } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'all' | 'wireless-ai' | 'signal-processing' | 'embedded-vlsi'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header with Functional Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
              Research &amp; Engineering Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              02. Featured Projects &amp; Research
            </h2>
          </div>

          {/* Interactive Filter Segmented Control (Functional buttons) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-900/80 border border-neutral-800 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('wireless-ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                filter === 'wireless-ai'
                  ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              AI in 5G/6G Networks
            </button>
            <button
              onClick={() => setFilter('signal-processing')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                filter === 'signal-processing'
                  ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Signal Processing &amp; DSP
            </button>
            <button
              onClick={() => setFilter('embedded-vlsi')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                filter === 'embedded-vlsi'
                  ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Embedded &amp; VLSI
            </button>
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, index) => {
            // First item gets wide showcase prominence in the bento grid
            const isHeroCard = index === 0 && filter === 'all';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isHeroCard ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden bg-neutral-950 ${isHeroCard ? 'aspect-[21/9]' : 'aspect-video'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                  
                  {/* Category tag & year as clean unboxed text */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                    <span className="bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                      {project.category}
                    </span>
                    <span className="bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 tabular-nums">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors font-display">
                        {project.title}
                      </h3>
                      <div className="p-2 rounded-lg bg-neutral-800/80 text-neutral-300 group-hover:text-white group-hover:bg-neutral-700 transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Quantitative Metrics preview */}
                  <div className="pt-2 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                    {project.metrics.slice(0, isHeroCard ? 3 : 2).map((m, idx) => (
                      <div key={idx} className="text-neutral-300 truncate">
                        <span className="text-neutral-500 block text-[10px]">Benchmark</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack footer */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs font-mono text-neutral-400">
                    {project.technologies.slice(0, 5).map((t, idx) => (
                      <span key={t} className="text-neutral-400">
                        {t}{idx < 4 && idx < project.technologies.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-neutral-600">+{project.technologies.length - 5}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Inspector */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
