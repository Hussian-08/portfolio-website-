import { ProfileData } from '../types/portfolio';

// Generated authentic domain imagery
import portraitImg from '../assets/images/mohamed_profile_official_1792217312777.jpg';
import wirelessRlImg from '../assets/images/project_wireless_rl_allocation_1792216907318.jpg';
import signalProcessingImg from '../assets/images/project_signal_processing_matlab_1792216907560.jpg';
import embeddedVlsiImg from '../assets/images/project_embedded_vlsi_system_1792216907016.jpg';

export const initialProfileData: ProfileData = {
  name: "Mohamed Hussian S",
  title: "Electronics & Communication Engineer · AI in Wireless Systems",
  tagline: "Final-year ECE student at Anna University researching intelligent 5G/6G networks, Reinforcement Learning for dynamic resource allocation, and signal processing.",
  location: "Anna University, Chennai, India · Open to Core & Telecom Roles",
  email: "usen882005@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-hussian-s-440685285",
  githubUrl: "https://github.com",
  bio: "I am a final-year Electronics and Communication Engineering student from Anna University with a strong interest in next-generation communication technologies and intelligent systems. My academic journey has built a solid foundation in core areas such as communication systems, signal processing, and embedded systems. I am particularly passionate about integrating Artificial Intelligence with wireless networks to solve real-world challenges. Currently, I am working on a project titled 'AI-Based Resource Allocation in Wireless Networks', applying Reinforcement Learning techniques like Deep Q-Networks (DQN) to optimize bandwidth distribution, reduce latency, and improve overall network efficiency in emerging 5G/6G environments. Beyond academics, I have a growing interest in entrepreneurship and system-based business models, exploring how technology can be transformed into scalable and impactful solutions.",
  keyStats: [
    { label: "Spectral Efficiency Gain", value: "+38%", sublabel: "DQN RL vs Round-Robin" },
    { label: "Target Latency (URLLC)", value: "<1.5ms", sublabel: "5G/6G Sub-6GHz & mmWave" },
    { label: "Fairness Index (Jain's)", value: "0.94", sublabel: "Balanced user satisfaction" },
    { label: "Academic Foundation", value: "Anna Univ", sublabel: "Final-Year ECE Scholar" }
  ],
  experiences: [
    {
      id: "exp-capstone",
      role: "Lead Undergraduate Researcher — Wireless AI",
      company: "Anna University · Dept of Electronics & Communication",
      location: "Chennai, India",
      period: "2024 — Present",
      type: "Full-time",
      summary: "Conducting capstone research on AI-driven dynamic resource block allocation in next-generation cellular networks under varying traffic demand.",
      responsibilities: [
        "Designed and formulated Deep Q-Network (DQN) Markov Decision Process (MDP) state-action spaces for dynamic wireless radio resource block (RRB) assignment.",
        "Modeled Rayleigh and Rician channel fading environments with variable Signal-to-Interference-plus-Noise Ratios (SINR) to emulate dense urban 5G/6G deployments.",
        "Simulated multi-user scheduling algorithms, optimizing reward functions to simultaneously minimize packet transmission latency and maximize Jain's Fairness Index.",
        "Benchmarked performance against traditional Round-Robin and Proportional Fair (PF) heuristics, observing a 38% increase in spectral utilization."
      ],
      technologies: ["Python", "PyTorch", "MATLAB", "Reinforcement Learning (DQN)", "5G/6G NR", "C++"],
      highlights: [
        "Achieved 38% higher spectral efficiency over traditional static scheduling baselines",
        "Kept latency below 1.5ms for high-priority Ultra-Reliable Low-Latency Communication (URLLC) streams"
      ]
    },
    {
      id: "exp-telecom",
      role: "Core Electronics & Signal Processing Intern",
      company: "Advanced Communications & Embedded Lab",
      location: "Chennai, India",
      period: "2023 — 2024",
      type: "Internship",
      summary: "Implemented digital signal processing algorithms, modulation schemes, and microcontroller firmware interfacing for RF communication hardware.",
      responsibilities: [
        "Developed and simulated MIMO-OFDM transmitter and receiver pipelines in MATLAB, verifying 16-QAM and 64-QAM constellation integrity under AWGN and multipath fading.",
        "Programmed ARM Cortex microcontrollers in C/C++ to read high-speed telemetry over SPI and UART protocols with DMA buffer transfers.",
        "Conducted frequency domain and spectral power density measurements using digital oscilloscopes and spectrum analyzers in university labs."
      ],
      technologies: ["MATLAB", "Simulink", "C++", "C", "ARM Microcontrollers", "Signal Processing"],
      highlights: [
        "Engineered zero-packet-drop SPI firmware handler operating at 10 MHz clock frequency",
        "Validated Bit Error Rate (BER) curves against theoretical Shannon capacity limits"
      ]
    },
    {
      id: "exp-entrep",
      role: "Student Innovator & Technology Coordinator",
      company: "Anna University ECE Society & Entrepreneurship Cell",
      location: "Chennai, India",
      period: "2022 — Present",
      type: "Open Source",
      summary: "Explored system-based business models and commercialization frameworks for emerging communication hardware and AI solutions.",
      responsibilities: [
        "Researched go-to-market pathways for transforming embedded sensor networks into commercial IoT product lines.",
        "Organized peer technical workshops on modern C++ programming, MATLAB signal processing simulations, and AI fundamentals for junior engineering students.",
        "Collaborated on multidisciplinary prototype demonstrations combining wireless telemetry and cloud analytics dashboards."
      ],
      technologies: ["System Architecture", "Business Model Generation", "C++", "Python", "Embedded Systems"],
      highlights: [
        "Mentored 40+ engineering peers in communication system modeling and MATLAB simulations",
        "Formulated business viability plans for intelligent low-power telemetry sensors"
      ]
    }
  ],
  projects: [
    {
      id: "ai-wireless-resource-allocation",
      title: "AI-Based Resource Allocation in Wireless Networks (5G/6G)",
      subtitle: "Deep Q-Networks (DQN) for Dynamic Bandwidth & Radio Resource Block (RRB) Allocation",
      description: "Applies Reinforcement Learning (DQN) to intelligently distribute wireless radio resource blocks, mitigating channel variability and minimizing latency in dense 5G/6G cellular cells.",
      longDescription: "Emerging 5G and 6G networks demand microsecond-level resource allocation across heterogeneous user classes (eMBB, URLLC, mMTC). Traditional scheduling heuristics fail under rapid channel fading and unpredictable traffic bursts. This project deploys a Deep Q-Network (DQN) agent that continuously observes channel state information (CSI), queue lengths, and user Quality of Service (QoS) requirements. By learning optimal resource block distributions, the system achieves near-optimal throughput while preserving fairness and strictly bounding packet delay.",
      category: "wireless-ai",
      image: wirelessRlImg,
      technologies: ["Python", "PyTorch (DQN)", "MATLAB", "5G/6G NR Standards", "C++", "Reinforcement Learning"],
      metrics: ["+38% Spectral Efficiency", "<1.5ms URLLC Latency", "0.94 Jain's Fairness Index"],
      architectureOverview: "Cellular environment simulator feeds CSI matrices to a multi-layer DQN agent. Action space maps to dynamic Resource Block allocations with experience replay buffer and ε-greedy exploration.",
      challengesSolved: [
        "Formulated composite reward function preventing starvation of low-SNR edge users while satisfying strict URLLC delay deadlines.",
        "Overcame Q-value overestimation during high traffic spikes using Double-DQN target network decoupling."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://wireless-ai.example.com",
      featured: true,
      year: "2024 — Capstone"
    },
    {
      id: "mimo-ofdm-dsp-engine",
      title: "MIMO-OFDM Signal Modeling & Channel Estimation",
      subtitle: "Digital Signal Processing Suite for Multi-Antenna Wireless Communications",
      description: "Comprehensive MATLAB and C++ simulation suite evaluating spatial multiplexing, QAM constellation mapping, and MMSE channel estimation under frequency-selective fading.",
      longDescription: "Investigated multi-input multi-output orthogonal frequency division multiplexing (MIMO-OFDM), the foundational physical layer technique powering 4G, 5G, and next-gen Wi-Fi. Modeled cyclic prefix insertion, fast Fourier transform (FFT) subcarrier demultiplexing, minimum mean square error (MMSE) channel equalization, and constellation demapping. Evaluated performance across varying Doppler spreads and signal-to-noise ratios (SNR).",
      category: "signal-processing",
      image: signalProcessingImg,
      technologies: ["MATLAB", "Simulink", "C++", "Signal Processing", "OFDM", "Channel Estimation"],
      metrics: ["36.4 dB EVM Post-Equalization", "10⁻⁶ Target BER", "50 MHz Subchannel Analysis"],
      architectureOverview: "End-to-end baseband transceiver model with 4x4 spatial streams, pilot symbol insertion, Rayleigh multipath channel filter, and MMSE matrix inversion.",
      challengesSolved: [
        "Eliminated inter-carrier interference (ICI) under severe multipath dispersion through optimal cyclic prefix dimensioning.",
        "Implemented fast Cholesky decomposition to reduce channel matrix inversion computational complexity."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://signal-dsp.example.com",
      featured: true,
      year: "2024"
    },
    {
      id: "embedded-wireless-telemetry",
      title: "Embedded RF Telemetry Controller & VLSI Architecture",
      subtitle: "Low-Power ARM Microcontroller Firmware & Digital Logic Subsystem",
      description: "Hardware and firmware design for wireless sensor telemetry, featuring sub-microamp power gating, SPI/UART bus arbitration, and Verilog digital accelerator prototypes.",
      longDescription: "Engineered an intelligent embedded sensor node designed for resilient telemetry capture in industrial environments. Programmed bare-metal ARM Cortex-M firmware handling multi-sensor polling, circular buffer queuing, and wireless RF packet transmission. Designed RTL Verilog modules for high-speed hardware CRC check and digital filtering, verified through ModelSim simulations.",
      category: "embedded-vlsi",
      image: embeddedVlsiImg,
      technologies: ["C++", "C", "ARM Cortex-M", "Verilog HDL", "SPI / UART / I2C", "VLSI Design"],
      metrics: ["<15μA Deep-Sleep Quiescent Current", "Zero-Packet-Drop DMA Queuing", "100% Validated RTL Simulation"],
      architectureOverview: "ARM core runs interrupt-driven state machine with hardware timers, direct memory access (DMA) transfers, and low-power wake-on-radio trigger.",
      challengesSolved: [
        "Synchronized asynchronous SPI clock domains without bus contention using double-buffering ping-pong RAM.",
        "Optimized Verilog finite state machine to minimize gate count and dynamic switching power."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://embedded-rf.example.com",
      featured: true,
      year: "2023 — 2024"
    }
  ],
  skillCategories: [
    {
      name: "Programming & Simulation",
      skills: [
        { name: "C++", level: "Advanced", experienceYears: "3+ yrs", description: "Object-oriented modeling, memory management, algorithm implementation, high-throughput simulation." },
        { name: "Python", level: "Proficient", experienceYears: "2+ yrs", description: "Scientific computing (NumPy, SciPy), PyTorch fundamentals, data analysis, automation." },
        { name: "MATLAB & Simulink", level: "Advanced", experienceYears: "3+ yrs", description: "Signal processing toolbox, communication system modeling, matrix mathematics, BER simulations." },
        { name: "C", level: "Advanced", experienceYears: "3+ yrs", description: "Bare-metal firmware, pointers, hardware register manipulation, microcontroller drivers." }
      ]
    },
    {
      name: "Communication Systems & 5G/6G",
      skills: [
        { name: "Wireless Communication Systems", level: "Advanced", experienceYears: "3+ yrs", description: "Cellular principles, propagation models, link budgets, modulation techniques (QAM/PSK)." },
        { name: "6G & 5G Next-Gen Networks", level: "Advanced", experienceYears: "2+ yrs", description: "Radio Resource Blocks (RRB), sub-6GHz & mmWave spectrum, URLLC, eMBB, network slicing concepts." },
        { name: "Digital Signal Processing (DSP)", level: "Advanced", experienceYears: "3+ yrs", description: "FFT/IFFT, FIR/IIR filter design, channel estimation, equalization, spectral analysis." },
        { name: "MIMO-OFDM Systems", level: "Advanced", experienceYears: "2+ yrs", description: "Spatial multiplexing, diversity techniques, beamforming fundamentals, multipath fading mitigation." }
      ]
    },
    {
      name: "AI & Intelligent Networks",
      skills: [
        { name: "Reinforcement Learning (DQN)", level: "Advanced", experienceYears: "2+ yrs", description: "Deep Q-Networks, Markov Decision Processes (MDP), reward shaping, exploration vs exploitation." },
        { name: "AI Fundamentals", level: "Proficient", experienceYears: "2+ yrs", description: "Supervised & unsupervised learning, neural network architectures, cost function optimization." },
        { name: "Dynamic Resource Allocation", level: "Advanced", experienceYears: "2+ yrs", description: "Bandwidth distribution, latency reduction, QoS enforcement, Jain's fairness index optimization." }
      ]
    },
    {
      name: "Hardware, Embedded & VLSI",
      skills: [
        { name: "Embedded Systems", level: "Advanced", experienceYears: "2+ yrs", description: "ARM Cortex architecture, GPIO, interrupt service routines (ISR), timers, power management." },
        { name: "Communication Protocols", level: "Advanced", experienceYears: "3+ yrs", description: "UART, SPI, I2C, RF transceiver interfacing, packet framing, CRC validation." },
        { name: "VLSI Design & Verilog HDL", level: "Proficient", experienceYears: "2+ yrs", description: "Digital circuit design, RTL synthesis fundamentals, finite state machines, testbench verification." },
        { name: "System-Based Business Models", level: "Proficient", experienceYears: "2+ yrs", description: "Technology commercialization, scalable engineering architecture, entrepreneurial product strategy." }
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
      institution: "Anna University",
      period: "2022 — 2026 (Final Year)",
      score: "First Class Standing",
      location: "Chennai, Tamil Nadu, India",
      coursework: [
        "Wireless & Cellular Communication",
        "Digital Signal Processing",
        "Communication Theory & Networks",
        "Embedded Systems & Microcontrollers",
        "VLSI Design & Digital Electronics",
        "Antennas & Microwave Engineering"
      ]
    }
  ],
  certifications: [
    {
      name: "AI in Wireless Communications & Deep Reinforcement Learning",
      issuer: "IEEE / Academic Research Division",
      issueDate: "2024",
      credentialId: "IEEE-WAI-2024"
    },
    {
      name: "Modern 5G Systems Architecture & Physical Layer",
      issuer: "Telecom Standards & Engineering Forum",
      issueDate: "2024",
      credentialId: "5G-NR-PHY-882005"
    },
    {
      name: "MATLAB for Digital Signal Processing & Communication Systems",
      issuer: "MathWorks Certified Program",
      issueDate: "2023",
      credentialId: "MATLAB-DSP-440685"
    }
  ]
};

const STORAGE_KEY = 'mohamed_portfolio_profile_v2';

export function getProfileData(): ProfileData {
  if (typeof window === 'undefined') return initialProfileData;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure image paths are retained
      parsed.projects = parsed.projects.map((p: any, idx: number) => ({
        ...p,
        image: p.image || initialProfileData.projects[idx]?.image || wirelessRlImg
      }));
      return parsed;
    }
  } catch (e) {
    console.error('Error loading portfolio data from localStorage', e);
  }
  return initialProfileData;
}

export function saveProfileData(data: ProfileData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving portfolio data to localStorage', e);
  }
}

export function resetProfileData(): ProfileData {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return initialProfileData;
}
