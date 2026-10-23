import React, { useState } from 'react';
import { ProfileData } from '../types/portfolio';
import { Mail, Linkedin, Copy, Check, Send, ExternalLink, MapPin } from 'lucide-react';

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Build mailto query
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Inquiry from ${name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(`Hi Mohamed,\n\n${message}\n\nFrom: ${name || 'Anonymous'}`)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
              Communication Channel
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              05. Initiate Contact &amp; Collaboration
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Open to internships, entry-level engineering opportunities, and research collaborations in AI, telecom, 5G/6G networks, and core electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Credentials & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-5">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white font-display">
                  Let’s build something durable.
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Whether you have an engineering opening, an architecture question, or a collaborative venture, my inbox is always open.
                </p>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-mono text-neutral-200 hover:text-white transition-colors truncate"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-neutral-200" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Direct Link */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  Professional Network
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-neutral-200 truncate">
                    linkedin.com/in/mohamed-hussian-s-440685285
                  </span>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded transition-colors shrink-0"
                    title="Open LinkedIn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Location & Availability Status */}
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{profile.location}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-semibold text-white font-display">
              Send a Direct Note
            </h3>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-neutral-400">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 font-mono transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-neutral-400">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Engineering role / Architecture inquiry"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-neutral-400">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your team, problem space, or system scope..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 font-mono transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-neutral-500 font-mono">
                  Transfers directly to mail client
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-200 rounded-md transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-700 text-xs text-neutral-200 font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>Mail client dispatched. Thank you for reaching out!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
