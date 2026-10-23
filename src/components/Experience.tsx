import React, { useState } from 'react';
import { Experience as ExperienceType } from '../types/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [selectedId, setSelectedId] = useState<string>(experiences[0]?.id || '');
  const activeExp = experiences.find((e) => e.id === selectedId) || experiences[0];

  return (
    <section id="experience" className="py-20 border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
              Career Trajectory
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              01. Professional Experience &amp; Highlights
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Interactive breakdown of engineering roles, production deliveries, and backend infrastructure milestones.
          </p>
        </div>

        {/* Interactive Experience Layout: Master-Detail on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Selector / Timeline List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-neutral-400 mb-2 px-1">
              Select Position ({experiences.length})
            </div>

            <div className="space-y-2">
              {experiences.map((exp) => {
                const isSelected = exp.id === activeExp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedId(exp.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-neutral-900 border-neutral-700 text-white shadow-sm'
                        : 'bg-neutral-950/60 border-neutral-900 text-neutral-400 hover:text-neutral-200 hover:border-neutral-800'
                    }`}
                  >
                    <div className="space-y-1 pr-3">
                      <div className="text-sm font-semibold text-neutral-100 group-hover:text-white">
                        {exp.role}
                      </div>
                      <div className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono">
                        <span>{exp.company}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-neutral-400 tabular-nums">{exp.period}</span>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-white translate-x-0.5' : 'text-neutral-600 group-hover:text-neutral-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Quick Summary Box */}
            <div className="mt-6 p-4 rounded-xl border border-neutral-900 bg-neutral-950/40 text-xs text-neutral-400 space-y-2 font-mono">
              <div className="text-neutral-300 font-semibold uppercase text-[11px] tracking-wider">
                Engineering &amp; Research Focus
              </div>
              <p className="font-sans leading-relaxed text-neutral-400">
                Specialized in Deep Q-Networks (DQN) for 5G/6G radio resource block allocation, MATLAB signal processing simulations, and low-power embedded firmware.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed View of Selected Position */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div className="space-y-3 pb-6 border-b border-neutral-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {activeExp.role}
                </h3>
                <span className="text-xs font-mono text-neutral-300 px-2.5 py-1 bg-neutral-800/80 rounded border border-neutral-700/60">
                  {activeExp.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{activeExp.company}</span>
                </div>
                <span aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="tabular-nums">{activeExp.period}</span>
                </div>
                <span aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{activeExp.location}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-sans pt-1">
                {activeExp.summary}
              </p>
            </div>

            {/* Key Deliverables & System Impact */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                Key Contributions &amp; Architectural Impact
              </h4>
              <ul className="space-y-2.5">
                {activeExp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantifiable Highlights Strip */}
            {activeExp.highlights && activeExp.highlights.length > 0 && (
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-2">
                <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Quantified Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                  {activeExp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-neutral-500 font-mono">[{i + 1}]</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stack used in this role */}
            <div className="pt-2">
              <div className="text-xs font-mono text-neutral-400 mb-2">
                Technologies Deployed
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-mono">
                {activeExp.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="text-neutral-300 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      {tech}
                    </span>
                    {idx < activeExp.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-neutral-700">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
