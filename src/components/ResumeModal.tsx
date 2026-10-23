import React from 'react';
import { ProfileData } from '../types/portfolio';
import { X, Printer, Download, ExternalLink, Mail, MapPin, Linkedin, Briefcase } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-white font-medium">Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>{profile.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-neutral-950 text-neutral-200">
          
          {/* Resume Header */}
          <div className="border-b border-neutral-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-bold text-white font-display tracking-tight">
                {profile.name}
              </h1>
              <div className="text-xs font-mono text-neutral-400">
                {profile.title}
              </div>
            </div>

            <p className="text-xs text-neutral-300 font-sans max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-1">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>{profile.email}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{profile.location}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                <a 
                  href={profile.linkedinUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="underline text-neutral-300"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Core Technical Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 border-b border-neutral-800 pb-1">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {profile.skillCategories.map((cat) => (
                <div key={cat.name} className="space-y-1">
                  <span className="font-semibold text-neutral-300 font-mono text-[11px] block">
                    {cat.name}:
                  </span>
                  <p className="text-neutral-400 font-mono">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 border-b border-neutral-800 pb-1">
              Work History &amp; Experience
            </h2>
            <div className="space-y-6">
              {profile.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-sm font-bold text-white font-sans">
                      {exp.role} <span className="font-normal text-neutral-400">· {exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-neutral-400 tabular-nums">
                      {exp.period} | {exp.location}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-neutral-300 pl-4 list-disc font-sans leading-relaxed">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-neutral-500 pt-1">
                    Environment: {exp.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 border-b border-neutral-800 pb-1">
              Selected Software Projects
            </h2>
            <div className="space-y-4">
              {profile.projects.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-neutral-100 font-sans">{proj.title}</span>
                    <span className="font-mono text-neutral-500 tabular-nums">{proj.year}</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{proj.description}</p>
                  <div className="text-[11px] font-mono text-neutral-400">
                    Stack: {proj.technologies.join(', ')} | Metrics: {proj.metrics.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 border-b border-neutral-800 pb-1">
              Education &amp; Credentials
            </h2>
            <div className="space-y-3 text-xs">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="flex flex-wrap items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-neutral-100">{edu.degree}</span>
                    <span className="text-neutral-400"> — {edu.institution}</span>
                  </div>
                  <span className="font-mono text-neutral-400 tabular-nums">{edu.period}</span>
                </div>
              ))}

              <div className="pt-2 text-[11px] font-mono text-neutral-400 space-y-1">
                <span className="font-semibold text-neutral-300 block">Certifications:</span>
                {profile.certifications.map((c, i) => (
                  <div key={i}>• {c.name} ({c.issuer}, {c.issueDate})</div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
