import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Calendar, Globe, Smartphone, Code2, Users, Activity } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Animated counter on scroll
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
  { target: 20, suffix: '+', label: 'Projects Completed' },
  { target: 8,  suffix: '+', label: 'Technologies' },
  { target: 100, suffix: '%', label: 'Custom Development' },
  { target: 24, suffix: '/7', label: 'Support' },
];

const StatCard = ({ target, suffix, label }) => {
  const { value, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-bold font-display text-white">
        {value}{suffix}
      </div>
      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
};

// Stagger container
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#030305]">

    {/* Background grids and glows */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] pointer-events-none" />
    <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column: Text & CTA */}
          <div className="text-center md:text-left">
            <motion.div variants={item} className="mb-6 inline-block">
              <span className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase">
                IT Solution
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white"
            >
              Building Intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Software</span> for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Modern Businesses.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed font-light mx-auto md:mx-0"
            >
              We help businesses grow by delivering smart, reliable, and future-ready digital solutions. Our expertise combines technology, creativity, and strategy to transform ideas into impactful digital experiences.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#seo"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full font-medium text-gray-300 hover:text-white glass glass-hover inline-flex items-center gap-2 transition-all border border-white/10 group"
              >
                SEO Analyser
                <Activity size={18} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Image Collage */}
          <motion.div variants={item} className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-5 h-[500px]">
              
              {/* Left side of collage (2 stacked items) */}
              <div className="flex flex-col gap-5 h-full">
                {/* Top Image */}
                <div className="flex-1 rounded-3xl overflow-hidden glass border border-white/10 relative group shadow-2xl">
                  <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Developer coding" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                {/* Bottom Info Card */}
                <div className="flex-1 rounded-3xl p-6 relative overflow-hidden group shadow-2xl bg-cyan-500/10 border border-cyan-500/20 flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Strategic IT</h3>
                    <p className="text-sm text-cyan-100/70 leading-relaxed mb-4">
                      Solutions designed for your brand growth in a digital-first world.
                    </p>
                    <a href="#services" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side of collage (1 tall image) */}
              <div className="h-full rounded-3xl overflow-hidden glass border border-white/10 relative group shadow-2xl">
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>

            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={item} className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Stats & Trust */}
        <motion.div variants={item} className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 justify-center">
            {[
              '100% Custom Code',
              'No-Template Designs',
              'Post-Launch Support',
            ].map(text => (
              <div key={text} className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <CheckCircle size={14} className="text-cyan-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  </section>
);

export default Hero;
