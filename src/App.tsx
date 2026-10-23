/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { getProfileData } from './data/portfolioData';
import { ProfileData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfileEditorModal } from './components/ProfileEditorModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(getProfileData());
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* 3-Zone Minimalist Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenEdit={() => setIsEditorOpen(true)}
      />

      <main className="flex-1">
        {/* Split-Screen Hero */}
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 01. Career Trajectory & Work Experience */}
        <Experience experiences={profile.experiences} />

        {/* 02. Featured Projects & Architecture */}
        <Projects projects={profile.projects} />

        {/* 03. Technical Matrix & Stack */}
        <Skills
          categories={profile.skillCategories}
          projects={profile.projects}
        />

        {/* 04. Academic Background & Certifications */}
        <Education
          education={profile.education}
          certifications={profile.certifications}
        />

        {/* 05. Philosophy & Core Principles */}
        <About profile={profile} />

        {/* 06. Initiate Contact & Collaboration */}
        <Contact profile={profile} />
      </main>

      {/* Minimalist Footer */}
      <Footer profile={profile} />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      {/* Interactive Profile Customizer */}
      <ProfileEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile}
        onUpdateProfile={(updated) => setProfile(updated)}
      />
    </div>
  );
}
