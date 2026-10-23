import React from 'react';
import { ProfileData } from '../types/portfolio';
import { Radio, Cpu, Network, Lightbulb, Compass, Award } from 'lucide-react';

interface AboutProps {
  profile: ProfileData;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      icon: <Radio className="w-4 h-4 text-white" />,
      title: "AI in Wireless Communications",
      description: "Applying Deep Reinforcement Learning (DQN) to dynamic radio resource block (RRB) allocation, latency minimization, and spectrum optimization in emerging 5G/6G environments."
    },
    {
      icon: <Network className="w-4 h-4 text-white" />,
      title: "Signal Processing & Communication Theory",
      description: "Deep foundation in MIMO-OFDM, channel modeling under Rayleigh/Rician fading, modulation schemes (QAM/PSK), and digital signal processing algorithms."
    },
    {
      icon: <Cpu className="w-4 h-4 text-white" />,
      title: "Embedded Systems & VLSI Architecture",
      description: "Hands-on engineering with ARM Cortex microcontrollers, digital communication protocols (UART, SPI, I2C), and digital circuit design fundamentals in Verilog HDL."
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-white" />,
      title: "Entrepreneurship & System Models",
      description: "Passionate about transforming technical breakthroughs into scalable, real-world solutions and exploring sustainable, system-based commercial architectures."
    }
  ];

  const strengths = [
    { title: "Analytical Thinking", desc: "Deconstructing complex wireless channel states and mathematical communication theorems into computational models." },
    { title: "Problem-Solving", desc: "Formulating novel reinforcement learning reward functions to overcome latency and fair-share allocation bottlenecks." },
    { title: "Adaptability", desc: "Seamlessly bridging high-level Python AI frameworks with low-level C++ simulation engines and hardware registers." },
    { title: "Continuous Learning", desc: "Staying at the cutting edge of 3GPP 5G-NR standards, emerging 6G research, and modern intelligent network paradigms." }
  ];

  return (
    <section id="about" className="py-20 border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
              Background &amp; Vision
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              05. Academic Journey &amp; Engineering Ethos
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Electronics and Communication Engineering scholar with a dedicated focus on AI-driven wireless communications.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 mb-10 text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            {profile.bio}
          </p>
          <div className="text-xs font-mono text-neutral-400 pt-2 flex flex-wrap items-center gap-3">
            <span>Institution: Anna University</span>
            <span aria-hidden="true">·</span>
            <span>Program: B.E. Electronics &amp; Communication Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Year: Final-Year Scholar</span>
          </div>
        </div>

        {/* 4 Core Technical Pillars */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-4 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-neutral-400" />
            <span>Core Pillars &amp; Areas of Interest</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white font-display">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-4 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-neutral-400" />
            <span>Engineering Strengths</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strengths.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/60 space-y-1.5">
                <div className="text-xs font-semibold text-neutral-200 font-mono">
                  {s.title}
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
