import React from 'react';
import { ProfileData } from '../types/portfolio';
import { ArrowDown, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';


interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quiet 1-line metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs tracking-wider uppercase text-neutral-400 font-mono font-medium">
              <span>Anna University</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Electronics &amp; Communication</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>AI in 5G/6G Networks</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08] text-balance">
              Intelligent radio systems &amp; next-generation wireless communications.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
              Hi, I’m <span className="text-white font-medium">{profile.name}</span>. Final-year ECE student at Anna University researching Reinforcement Learning (DQN) for dynamic resource allocation, signal processing, and embedded systems.
            </p>

            {/* Open to Opportunities Callout */}
            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-1">
              <div className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Seeking Opportunities &amp; Collaborations</span>
              </div>
              <p className="text-neutral-400 font-sans text-xs">
                Open to internships, entry-level engineering roles, and research collaborations in AI, telecom, 5G/6G networks, and core electronics.
              </p>
            </div>

            {/* Location & Quick Meta */}
            <div className="text-xs text-neutral-400 flex flex-wrap items-center gap-2 pt-1">
              <span>{profile.location}</span>
              <span aria-hidden="true">·</span>
              <a 
                href={`mailto:${profile.email}`} 
                className="hover:text-neutral-200 transition-colors underline decoration-neutral-700 underline-offset-4 font-mono"
              >
                {profile.email}
              </a>
            </div>

            {/* Action Buttons & Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-200 rounded-md transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-neutral-400" />
                <span>Curriculum Vitae</span>
              </button>

              <div className="flex items-center gap-2 ml-auto sm:ml-0 border-l border-neutral-800 pl-4 py-1">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send direct email"
                  className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Container (Portrait with sleek minimal frame) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="assets/images/WhatsApp%20Image%202026-10-10%20at%208.29.17%20AM.jpeg"
                alt={`${profile.name} - Electronics & Communication Engineer`}
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 pointer-events-none font-mono">
                <span className="bg-neutral-950/90 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 text-white font-medium">
                  Mohamed Hussian S
                </span>
                <span className="bg-neutral-950/90 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 text-neutral-400">
                  Anna University
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Metrics Strip below the split */}
        <div className="mt-16 pt-10 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {profile.keyStats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-neutral-300">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
