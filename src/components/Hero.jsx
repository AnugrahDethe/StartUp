import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Calendar, Globe, Smartphone, Code2, Users } from 'lucide-react';


// Animated counter on scroll
import { useEffect, useRef, useState } from 'react';

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
      // Ease out
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

const services = [
  { icon: Globe,      label: 'Web Development' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Code2,      label: 'Custom Software' },
  { icon: Users,      label: 'CRM & ERP' },
];

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
  <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">

    {/* Background overlay to ensure text readability */}
    <div className="absolute inset-0 bg-[#030305]/60 pointer-events-none" />
    {/* Subtle grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_30%,transparent_100%)] pointer-events-none" />
    {/* Ambient glows */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/8 rounded-full blur-[130px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center md:justify-start mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-widest uppercase">
              Available for New Projects
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-[82px] font-bold leading-[1.05] mb-8 text-center md:text-left"
        >
          <span className="text-gradient-white block">We Build With</span>
          <span className="text-gradient block">AI-Powered Technologies.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed text-center md:text-left font-light"
        >
          We design and develop{' '}
          <span className="text-white font-medium">websites, mobile applications, AI solutions, CRM platforms, and custom software</span>{' '}
          that help businesses automate operations and increase revenue.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 justify-center md:justify-start mb-20"
        >
          {/* Primary */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden inline-flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500" />
            <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Calendar size={18} className="relative z-10" />
            <span className="relative z-10">Get Free Consultation</span>
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="#production"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full font-medium text-gray-300 hover:text-white glass glass-hover inline-flex items-center gap-2 transition-all"
          >
            View Our Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>


        {/* Divider */}
        <motion.div variants={item} className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Real Business Stats */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>

        {/* Trust line */}
        <motion.div
          variants={item}
          className="mt-14 flex flex-wrap items-center gap-3 text-sm text-gray-500 justify-center md:justify-start"
        >
          {[
            '100% Custom Code',
            'No-Template Designs',
            'Post-Launch Support',
          ].map(text => (
            <div key={text} className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
