import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, Terminal, CheckCircle, ArrowRight, Play, RefreshCw } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'simulation'>('overview');
  const [simulatedLog, setSimulatedLog] = useState<string[]>([]);
  const [isRunningSim, setIsRunningSim] = useState(false);

  if (!project) return null;

  const runSimulation = () => {
    setIsRunningSim(true);
    if (project.category === 'wireless-ai') {
      setSimulatedLog([
        `[INIT] Booting 5G/6G Cellular Environment (12 UEs, 3 GNB Sectors, 50 MHz Bandwidth)...`,
        `[STATE] Sampling Channel State Information (CSI): Rayleigh fading index σ=0.82, SNR range: 12-28 dB.`,
        `[DQN AGENT] Forward pass on Deep Q-Network: evaluating Q(s, a) for 256 Radio Resource Blocks (RRBs)...`,
        `[ACTION] Selected optimal subband allocation. Offloading URLLC traffic to low-delay carrier.`,
        `[METRICS] Jain's Fairness Index: 0.942 · Instantaneous Spectral Gain: +38.6% · URLLC Delay: 1.28ms`,
        `[CONVERGENCE] Loss decreased to 0.0024. Exploration rate ε=0.05. Target network synchronized.`
      ]);
    } else if (project.category === 'signal-processing') {
      setSimulatedLog([
        `[INIT] Initializing 4x4 MIMO-OFDM Baseband Transceiver Pipeline...`,
        `[MODULATION] Mapping 64-QAM symbol constellation across 1024 IFFT subcarriers.`,
        `[CHANNEL] Injecting frequency-selective multipath channel profile with AWGN (SNR = 22 dB).`,
        `[EQUALIZATION] Executing MMSE matrix inversion and pilot-aided channel estimation H(f)...`,
        `[DSP REPORT] EVM = -36.4 dB · Symbol Error Rate = 1.2e-5 · Spectral Occupancy = 98.4%.`
      ]);
    } else {
      setSimulatedLog([
        `[INIT] Microcontroller hardware simulation: ARM Cortex-M architecture @ 120 MHz...`,
        `[BUS] Initializing SPI bus arbitration @ 10 MHz with DMA circular buffer.`,
        `[POWER] Testing power-gating state machine: Deep Sleep current = 12.8 μA.`,
        `[RTL TESTBENCH] ModelSim Verilog simulation: 1,000 packet frames processed with zero CRC errors.`,
        `[STATUS] All hardware interrupts verified. 100% throughput validated.`
      ]);
    }
    setTimeout(() => {
      setIsRunningSim(false);
    }, 700);
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
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/50">
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="text-white font-medium">{project.title}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Main Visual Asset Banner */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  {project.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                activeTab === 'overview'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              System Overview
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Architecture &amp; Challenges
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                activeTab === 'simulation'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Interactive Console &amp; Test
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                  Project Narrative
                </h4>
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Quantifiable Metrics */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-3">
                  Key Production Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono">
                      <span className="text-white font-semibold block">{metric}</span>
                      <span className="text-neutral-500 text-[11px]">Performance milestone</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                  Full Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-neutral-950 text-neutral-300 rounded border border-neutral-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture & Challenges */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-neutral-300 font-mono flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-white" />
                  <span>Architecture Model</span>
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {project.architectureOverview}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Critical Engineering Challenges Solved
                </h4>
                <div className="space-y-2.5">
                  {project.challengesSolved.map((chal, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{chal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Interactive Simulation */}
          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-300 font-mono">
                    Live Telemetry &amp; Node Simulator
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Execute a simulated health and stress test against the service contract.
                  </p>
                </div>

                <button
                  onClick={runSimulation}
                  disabled={isRunningSim}
                  className="px-3.5 py-2 text-xs font-mono font-medium text-neutral-950 bg-white hover:bg-neutral-200 rounded-md transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isRunningSim ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Simulating...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Execute Test</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-black border border-neutral-800 font-mono text-xs text-neutral-300 min-h-[160px] space-y-1.5 overflow-x-auto">
                {simulatedLog.length === 0 ? (
                  <div className="text-neutral-500 italic py-6 text-center">
                    Click &quot;Execute Test&quot; to probe mock cluster endpoints and measure latency stream.
                  </div>
                ) : (
                  simulatedLog.map((log, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-neutral-500 font-mono">
              Designed &amp; Authored by Mohamed Hussian S
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-mono text-neutral-950 bg-white hover:bg-neutral-200 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <span>Production Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
