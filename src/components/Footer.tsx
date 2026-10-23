import React from 'react';
import { ArrowUp, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-neutral-950 text-neutral-400 border-t border-neutral-900 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity and copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-neutral-200 font-semibold font-display">
            {profile.name}
          </div>
          <div className="text-neutral-500 font-mono text-[11px]">
            Designed with precision &amp; minimalist discipline · {new Date().getFullYear()}
          </div>
        </div>

        {/* Center/Right: Links & Back to top */}
        <div className="flex items-center gap-6">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors font-mono"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-neutral-200 transition-colors font-mono"
          >
            Email
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors font-mono"
          >
            GitHub
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
