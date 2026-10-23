import React, { useState } from 'react';
import { ProfileData } from '../types/portfolio';
import { X, Save, RotateCcw, Check } from 'lucide-react';
import { resetProfileData, saveProfileData } from '../data/portfolioData';

interface ProfileEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (updated: ProfileData) => void;
}

export const ProfileEditorModal: React.FC<ProfileEditorModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveProfileData(formData);
    onUpdateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (confirm('Reset portfolio to initial profile data?')) {
      const initial = resetProfileData();
      setFormData(initial);
      onUpdateProfile(initial);
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div className="space-y-0.5">
            <h3 className="text-sm font-bold text-white font-display">
              Portfolio Profile Customizer
            </h3>
            <p className="text-[11px] font-mono text-neutral-400">
              Synchronize or tweak content from your LinkedIn profile. Persisted in browser.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close editor"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto font-mono text-xs text-neutral-300">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-neutral-400 text-[11px]">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-neutral-400 text-[11px]">Primary Role Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-neutral-400 text-[11px]">Hero Elevator Pitch / Tagline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:border-neutral-600"
            />
          </div>

          <div className="space-y-1">
            <label className="text-neutral-400 text-[11px]">Detailed Bio</label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:border-neutral-600 resize-none font-sans"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-neutral-400 text-[11px]">Contact Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-neutral-400 text-[11px]">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-neutral-400 text-[11px]">LinkedIn Profile URL</label>
            <input
              type="url"
              value={formData.linkedinUrl}
              onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:border-neutral-600"
            />
          </div>

          {/* Quick Metrics Editor */}
          <div className="space-y-2 pt-2 border-t border-neutral-800">
            <label className="text-neutral-400 text-[11px] block">Key Metrics &amp; Benchmarks</label>
            <div className="grid grid-cols-2 gap-2">
              {formData.keyStats.map((stat, idx) => (
                <div key={idx} className="p-2.5 rounded bg-neutral-950 border border-neutral-800 space-y-1">
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const updatedStats = [...formData.keyStats];
                      updatedStats[idx].value = e.target.value;
                      setFormData({ ...formData, keyStats: updatedStats });
                    }}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-white text-xs font-bold"
                  />
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const updatedStats = [...formData.keyStats];
                      updatedStats[idx].label = e.target.value;
                      setFormData({ ...formData, keyStats: updatedStats });
                    }}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-0.5 text-neutral-400 text-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-neutral-400 hover:text-red-400 text-xs flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-200 rounded-md transition-colors flex items-center gap-1.5"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
