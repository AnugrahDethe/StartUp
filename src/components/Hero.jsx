import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

/* ── Animated Counter (Original) ────────────────────────────────── */
const useCountUp = (target, duration = 1800) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, ref };
};

const stats = [
  { target: 9, suffix: '+', label: 'Projects Completed' },
  { target: 8, suffix: '+', label: 'Technologies' },
  { target: 100, suffix: '%', label: 'Custom Development' },
  { target: 24, suffix: '/7', label: 'Support' },
];

const StatCard = ({ target, suffix, label }) => {
  const { value, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center md:text-left group cursor-default">
      <div className="text-3xl md:text-4xl font-bold font-display text-white transition-all duration-300 group-hover:text-gradient">
        {value}{suffix}
      </div>
      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
};

/* ── Animated Terminal/Code Mockup ──────────────────────────────── */
const CodeMockup = () => {
  const codeLines = [
    '<span class="text-pink-500">import</span> { <span class="text-cyan-400">AI</span>, <span class="text-cyan-400">Analytics</span> } <span class="text-pink-500">from</span> <span class="text-green-400">"@vivernlab/core"</span>;',
    '',
    '<span class="text-blue-400">const</span> system = <span class="text-pink-500">new</span> <span class="text-yellow-300">VivernEngine</span>({',
    '  mode: <span class="text-green-400">"production"</span>,',
    '  scale: <span class="text-green-400">"auto"</span>,',
    '  intelligence: <span class="text-blue-400">true</span>',
    '});',
    '',
    '<span class="text-gray-500">// Initialize high-performance backend</span>',
    '<span class="text-pink-500">await</span> system.<span class="text-yellow-300">start</span>();',
    '',
    '<span class="text-cyan-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Systems nominal. Ready for scale."</span>);'
  ];

  return (
    <div className="rounded-xl overflow-hidden glass border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl">
      <div className="px-4 py-3 flex items-center gap-2 border-b border-white/5 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs font-mono text-gray-500">system-init.ts</div>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed text-gray-300">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            className="flex gap-4"
          >
            <span className="text-gray-600 select-none w-4 text-right">{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line || ' ' }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── Scroll indicator ───────────────────────────────────────────── */
const ScrollArrow = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="w-px h-12 bg-gradient-to-b from-transparent via-indigo-400/60 to-transparent" />
    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
  </motion.div>
);

/* ── Main Hero Component ────────────────────────────────────────── */
const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Simplified smooth parallax
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yMockup = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">

      {/* Ambient glows */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 30, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/8 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div style={{ opacity: opacityFade }} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 lg:mb-20">

            {/* Left Column: Original Copy + Parallax */}
            <motion.div style={{ y: yText }} className="text-center md:text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase px-4 py-2 glass rounded-full border border-cyan-500/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                IT Solution
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 text-white"
              >
                Building{' '}
                <span className="text-gradient">
                  Intelligent
                </span>
                <br className="hidden md:block" />
                Software for{' '}
                <br className="hidden md:block" />
                <span className="text-gradient">Modern Businesses.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed font-light mx-auto md:mx-0"
              >
                We help businesses grow by delivering smart, reliable, and future-ready digital
                solutions combining technology, creativity, and strategy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <a href="#contact" className="group relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="#services" className="px-8 py-3.5 rounded-full font-semibold text-gray-300 hover:text-white glass border border-white/10 transition-all hover:border-white/20">
                  View Services
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Clean Code Mockup */}
            <div className="relative hidden lg:flex flex-col gap-6 lg:gap-8 perspective-1000 mt-10 lg:mt-0 items-center justify-center">

              <motion.div
                style={{ y: yMockup }}
                initial={{ opacity: 0, rotateY: 15, rotateX: 5, x: 30 }}
                animate={{ opacity: 1, rotateY: -5, rotateX: 5, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative z-10 transform-style-3d w-full max-w-lg hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700"
              >
                <CodeMockup />
              </motion.div>

            </div>
          </div>

          {/* Original Stats Counter + Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
              {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 justify-center">
              {['100% Custom Code', 'No-Template Designs', 'Post-Launch Support'].map(text => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06] hover:border-indigo-500/40 transition-colors cursor-default"
                >
                  <CheckCircle size={13} className="text-indigo-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollArrow />
    </section>
  );
};

export default Hero;
