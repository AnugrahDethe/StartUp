import { motion, useInView } from 'framer-motion';
import { Brain, Globe, Lightbulb, Link, Shield, Sparkles, Target } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react';
import AnugrahImg from '../assets/Anugrah.png';
import ArkamImg from '../assets/Arkam.png';

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
    initial: 'A',
  },
  {
    name: 'Arkam',
    title: 'Co-Founder & Data Scientist',
    bio: 'Technical architect specialising in high performance systems, intelligent APIs, and beautiful, precision-crafted frontend experiences.',
    accent: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-600',
    photo: ArkamImg,
    linkedin: 'https://www.linkedin.com/in/arkamdayanji/',
    initial: 'A',
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const About = () => {
  const refStory = useRef(null);
  const inViewStory = useInView(refStory, { once: true, amount: 0.2 });

  const refCards = useRef(null);
  const inViewCards = useInView(refCards, { once: true, amount: 0.2 });

  const refFounders = useRef(null);
  const inViewFounders = useInView(refFounders, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-[#030305]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Us</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          ref={refStory}
          initial="hidden"
          animate={inViewStory ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start mb-16 lg:mb-24"
        >
          <motion.div variants={slideInLeftVariant} className="lg:col-span-5 lg:sticky top-32">
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inViewStory ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Mission and Vision <br className="hidden lg:block" /> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Road Ahead</span>
            </motion.h3>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              animate={inViewStory ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.div variants={fadeUpVariant} className="lg:col-span-7 space-y-6 text-gray-400 text-lg leading-relaxed">
            {[
              'Vivernlab was founded with a singular, uncompromising goal: to help businesses adopt modern, transformative technology without the unnecessary complexity that usually accompanies it.',
              'We believe that software shouldn\'t just be a collection of features; it should solve real-world problems, drastically improve operational efficiency, and create measurable, sustainable business value. Our journey started when we noticed a massive gap between high-end technological capabilities like AI, advanced data science, and scalable cloud architectures and the everyday businesses that needed them the most.',
              'Today, we bridge that gap. We build intuitive, robust, and powerful digital solutions that empower our partners to thrive in an ever-evolving digital landscape. Our story is built not on grand promises, but on relentlessly delivering technology that simply works.'
            ].map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={refCards}
          initial="hidden"
          animate={inViewCards ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 mb-16 lg:mb-32"
        >
          <motion.div
            variants={scaleInVariant}
            whileHover={{
              y: -12,
              boxShadow: '0 40px 80px rgba(99, 102, 241, 0.2)',
              borderColor: 'rgba(99, 102, 241, 0.5)',
              transition: { duration: 0.3 },
            }}
            className="glass rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Brain size={26} className="text-blue-400" />
            </motion.div>
            <motion.h4
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Mission
            </motion.h4>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base relative z-10">
              To democratise advanced software solutions by empowering businesses to harness their data, optimize operational workflows, and accelerate productivity through intelligent, accessible engineering.
            </p>
          </motion.div>

          <motion.div
            variants={scaleInVariant}
            whileHover={{
              y: -12,
              boxShadow: '0 40px 80px rgba(79, 70, 229, 0.2)',
              borderColor: 'rgba(79, 70, 229, 0.5)',
              transition: { duration: 0.3 },
            }}
            className="glass rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Target size={26} className="text-indigo-400" />
            </motion.div>
            <motion.h4
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our Vision
            </motion.h4>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base relative z-10">
              To revolutionize industries across the globe by embedding intelligent technology and seamless automation at the core of every modern business operation, setting new standards for digital excellence.
            </p>
          </motion.div>

          <motion.div
            variants={scaleInVariant}
            whileHover={{
              y: -12,
              boxShadow: '0 40px 80px rgba(6, 182, 212, 0.2)',
              borderColor: 'rgba(6, 182, 212, 0.5)',
              transition: { duration: 0.3 },
            }}
            className="glass rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Shield size={26} className="text-cyan-400" />
            </motion.div>
            <motion.h4
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Why Us?
            </motion.h4>
            <ul className="space-y-5 relative z-10">
              {[
                { icon: Lightbulb, text: 'Innovation-Driven', color: 'text-cyan-400' },
                { icon: Shield, text: 'Ethical Intelligence', color: 'text-emerald-400' },
                { icon: Globe, text: 'Accessibility & Inclusion', color: 'text-blue-400' },
              ].map((item, i) => (
                <motion.li
                  key={item.text}
                  className="flex items-center gap-3 text-gray-300 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ x: 8 }}
                >
                  <item.icon size={20} className={item.color} />
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        <motion.div
          ref={refFounders}
          initial="hidden"
          animate={inViewFounders ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h3
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Founders</span>
          </motion.h3>
          <motion.p
            variants={fadeUpVariant}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            The architects behind Vivernlab's vision.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inViewFounders ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              variants={slideInLeftVariant}
              whileHover={{
                y: -12,
                transition: { duration: 0.4 },
              }}
              className="group glass rounded-3xl p-8 border border-white/5 relative overflow-hidden text-center shimmer-border"
            >
              {/* Hover gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${founder.accent}10, transparent)`,
                }}
              />

              <div
                className="absolute top-0 left-0 right-0 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `linear-gradient(to bottom, ${founder.accent}, transparent)` }}
              />

              <motion.div
                className="relative mx-auto w-28 h-28 mb-6 mt-4"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: idx * 0.2 + 0.3 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 20px ${founder.accent}40`,
                      `0 0 40px ${founder.accent}60`,
                      `0 0 20px ${founder.accent}40`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                />

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${founder.gradient} p-[2px]`}
                >
                  <div className="w-full h-full rounded-full bg-[#030305] flex items-center justify-center overflow-hidden">
                    {founder.photo ? (
                      <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <span className="text-4xl font-bold text-white/80">{founder.initial}</span>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 rounded-full border border-dashed opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ borderColor: founder.accent }}
                />

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-2 border-[#030305] flex items-center justify-center"
                  style={{ background: `${founder.accent}20`, borderColor: '#030305' }}
                >
                  <Sparkles size={12} style={{ color: founder.accent }} />
                </motion.div>
              </motion.div>

              <motion.h4
                className="text-2xl font-bold text-white mb-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 + 0.5 }}
              >
                {founder.name}
              </motion.h4>

              <motion.p
                className="text-sm font-medium mb-5"
                style={{ color: founder.accent }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 + 0.6 }}
              >
                {founder.title}
              </motion.p>

              <motion.p
                className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 + 0.7 }}
              >
                {founder.bio}
              </motion.p>

              {(founder.linkedin || founder.portfolio) && (
                <motion.div
                  className="flex items-center justify-center gap-4 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.8 }}
                >
                  {founder.linkedin && (
                    <motion.a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-all"
                      whileHover={{ y: -4, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                  )}
                  {founder.portfolio && (
                    <motion.a
                      href={founder.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-all"
                      whileHover={{ y: -4, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link size={20} />
                    </motion.a>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
