import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenEdit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenEdit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-base font-semibold tracking-tight text-neutral-100 hover:text-white transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
        >
          <span>Mohamed Hussian S</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-normal text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-100 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-neutral-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEdit}
            title="Edit profile information"
            className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors px-2 py-1.5 rounded hover:bg-neutral-900"
          >
            Customize
          </button>
          <button
            onClick={onOpenResume}
            className="px-4 py-2 text-xs font-medium text-neutral-950 bg-neutral-100 hover:bg-white rounded-md transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-medium text-neutral-950 bg-neutral-100 rounded-md"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-900 bg-neutral-950 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-900 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEdit();
              }}
              className="text-xs text-neutral-400 hover:text-neutral-200"
            >
              Customize Profile
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-neutral-200 hover:underline"
            >
              usen882005@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
