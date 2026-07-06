import { motion, useInView } from 'framer-motion';
import AnugrahImg from '../assets/Anugrah.png';
import { Sparkles, Brain, Target, Globe, Shield, Lightbulb, Users, Linkedin, Link } from 'lucide-react';
import { useRef } from 'react';

const founders = [
  {
    name: 'Anugrah',
    title: 'Co-Founder & Software Engineer',
    bio: 'Full Stack Developer with experience in web applications, API integration, and real-world software workflows. Passionate about software engineering, Machine Learning, and Generative AI.',
    accent: '#6366F1',
    gradient: 'from-indigo-500 to-violet-600',
    photo: AnugrahImg,
    linkedin: 'https://www.linkedin.com/in/anugrah-dethe-4b79422b6/',
    portfolio: 'https://anugrah-dethe.vercel.app/',
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const About = () => {
  const refStory = useRef(null);
  const inViewStory = useInView(refStory, { once: true, amount: 0.2 });

  const refCards = useRef(null);
  const inViewCards = useInView(refCards, { once: true, amount: 0.2 });

  const refFounders = useRef(null);
  const inViewFounders = useInView(refFounders, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#030305]">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Vivernlabs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Us</span>
          </h2>
        </motion.div>

        {/* Story Split Layout */}
        <motion.div
          ref={refStory}
          initial="hidden"
          animate={inViewStory ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24"
        >
          <motion.div variants={fadeUpVariant} className="lg:col-span-5 sticky top-32">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
              Mission, Vision & <br className="hidden lg:block" /> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Road Ahead</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </motion.div>

          <motion.div variants={fadeUpVariant} className="lg:col-span-7 space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Vivernlabs was founded with a singular, uncompromising goal: to help businesses adopt modern, transformative technology without the unnecessary complexity that usually accompanies it.
            </p>
            <p>
              We believe that software shouldn't just be a collection of features; it should solve real-world problems, drastically improve operational efficiency, and create measurable, sustainable business value. Our journey started when we noticed a massive gap between high-end technological capabilities—like AI, advanced data science, and scalable cloud architectures—and the everyday businesses that needed them the most.
            </p>
            <p>
              Today, we bridge that gap. We build intuitive, robust, and powerful digital solutions that empower our partners to thrive in an ever-evolving digital landscape. Our story is built not on grand promises, but on relentlessly delivering technology that simply works.
            </p>
          </motion.div>
        </motion.div>

        {/* 3 Info Cards (Mission, Vision, Why Us) */}
        <motion.div
          ref={refCards}
          initial="hidden"
          animate={inViewCards ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 mb-32"
        >
          {/* Mission Card */}
          <motion.div variants={fadeUpVariant} className="glass rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <Brain size={26} className="text-blue-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base relative z-10">
              To democratise advanced software solutions by empowering businesses to harness their data, optimize operational workflows, and accelerate productivity through intelligent, accessible engineering.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeUpVariant} className="glass rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <Target size={26} className="text-indigo-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base relative z-10">
              To revolutionize industries across the globe by embedding intelligent technology and seamless automation at the core of every modern business operation, setting new standards for digital excellence.
            </p>
          </motion.div>

          {/* Why Us Card */}
          <motion.div variants={fadeUpVariant} className="glass rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
              <Shield size={26} className="text-cyan-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-6">Why Us?</h4>
            <ul className="space-y-5 relative z-10">
              <li className="flex items-center gap-3 text-gray-300 font-medium">
                <Lightbulb size={20} className="text-cyan-400" />
                Innovation-Driven
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium">
                <Shield size={20} className="text-emerald-400" />
                Ethical Intelligence
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium">
                <Globe size={20} className="text-blue-400" />
                Accessibility & Inclusion
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* Founders Section */}
        <motion.div
          ref={refFounders}
          initial="hidden"
          animate={inViewFounders ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-4">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Founders</span></motion.h3>
          <motion.p variants={fadeUpVariant} className="text-gray-400 max-w-2xl mx-auto">The architects behind Vivernlabs's vision.</motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inViewFounders ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-8 border border-white/5 relative overflow-hidden text-center shimmer-border"
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 right-0 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `linear-gradient(to bottom, ${founder.accent}, transparent)` }}
              />

              {/* Avatar */}
              <div className="relative mx-auto w-28 h-28 mb-6 mt-4">
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
              <p className="text-sm font-medium mb-5" style={{ color: founder.accent }}>{founder.title}</p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto mb-6">{founder.bio}</p>

              {/* Social Links */}
              {(founder.linkedin || founder.portfolio) && (
                <div className="flex items-center justify-center gap-4 pt-2">
                  {founder.linkedin && (
                    <a href={founder.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:-translate-y-1">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {founder.portfolio && (
                    <a href={founder.portfolio} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:-translate-y-1">
                      <Link size={20} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
