import { motion, useInView } from 'framer-motion';
import AnugrahImg from '../assets/Anugrah.png';
import { Sparkles, Zap, Brain, Rocket } from 'lucide-react';
import { useRef } from 'react';

const founders = [
  {
    name: 'Anugrah',
    title: 'Founder & CEO',
    bio: 'Visionary leader with a passion for building AI systems that solve real-world problems and scale businesses to new heights.',
    accent: '#6366F1',
    gradient: 'from-indigo-500 to-violet-600',
    photo: AnugrahImg,
  },
  {
    name: 'Arkam',
    title: 'Co-Founder & CTO',
    bio: 'Technical architect specialising in high-performance systems, intelligent APIs, and beautiful, precision-crafted frontend experiences.',
    accent: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-600',
    photo: null,
    initial: 'K',
  },
];

const pillars = [
  { icon: Brain, label: 'AI-First Thinking', desc: 'Every line of code is designed with intelligence at its core.' },
  { icon: Zap, label: 'Performance Obsessed', desc: 'Sub-second load times and infinite scalability are non-negotiable.' },
  { icon: Rocket, label: 'Startup Velocity', desc: 'We ship fast, iterate faster, and iterate with purpose.' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">The Team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">US</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We're a tight-knit team of engineers and designers obsessed with crafting digital experiences that last.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group glass rounded-3xl p-8 border border-white/5 relative overflow-hidden shimmer-border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-indigo-400" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">{pillar.label}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-8 border border-white/5 relative overflow-hidden text-center shimmer-border"
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 right-0 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `linear-gradient(to bottom, ${founder.accent}, transparent)` }}
              />

              {/* Avatar */}
              <div className="relative mx-auto w-28 h-28 mb-6">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${founder.gradient} opacity-30 blur-xl group-hover:opacity-60 transition-opacity`} />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${founder.gradient} p-[2px]`}
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    {founder.photo ? (
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-4xl font-display font-bold text-white/80">{founder.initial}</span>
                    )}
                  </div>
                </motion.div>
                {/* Orbiting ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 rounded-full border border-dashed opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ borderColor: founder.accent }}
                />
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-2 border-background flex items-center justify-center"
                  style={{ background: `${founder.accent}20`, borderColor: '#030305' }}>
                  <Sparkles size={12} style={{ color: founder.accent }} />
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-1">{founder.name}</h4>
              <p className="text-sm font-medium mb-4" style={{ color: founder.accent }}>{founder.title}</p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
