import React from 'react';
import { Education as EducationType, Certification } from '../types/portfolio';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
  certifications: Certification[];
}

export const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="py-20 border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
              Foundations &amp; Accreditations
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              04. Academic Background &amp; Certifications
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Rigorous foundations in computer science theory, systems architecture, and industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Academic Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-white" />
              <span>Formal Education</span>
            </h3>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-neutral-400 tabular-nums">
                    {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-mono">
                  <span className="text-neutral-200">{edu.institution}</span>
                  <span aria-hidden="true">·</span>
                  <span>{edu.location}</span>
                  {edu.score && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-300 font-medium">{edu.score}</span>
                    </>
                  )}
                </div>

                {/* Coursework */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-neutral-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Curricular Focus Areas</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {edu.coursework.map((course, i) => (
                      <div key={i} className="flex items-center gap-2 py-1">
                        <span className="w-1 h-1 rounded-full bg-neutral-500" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-2">
              <Award className="w-4 h-4 text-white" />
              <span>Professional Credentials</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-neutral-100 font-sans">
                      {cert.name}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-500 tabular-nums shrink-0">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    <span className="text-neutral-300">{cert.issuer}</span>
                    {cert.credentialId && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-neutral-500">{cert.credentialId}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick summary guarantee */}
            <div className="p-4 rounded-xl border border-neutral-800/60 bg-neutral-950/40 text-xs text-neutral-400 space-y-1.5 font-mono">
              <div className="text-neutral-300 font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-neutral-400" />
                <span>Verification Ready</span>
              </div>
              <p className="font-sans text-neutral-400 text-xs leading-relaxed">
                All degree transcripts and credential validation hashes are verified and accessible upon formal interview request.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
