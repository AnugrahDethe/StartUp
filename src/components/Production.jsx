import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Globe, Smartphone, Cpu, Users } from 'lucide-react';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'Church Connect Portal',
    description: 'A modern community platform for a local church — managing events, donations, sermons, and live-stream scheduling in one seamless hub.',
    tags: ['Web Dev', 'React'],
    Icon: Globe,
    accent: '#6366F1',
    gradient: 'from-indigo-500/30 via-violet-600/20 to-transparent',
    stats: { label: 'Active Members', value: '2.4k+' },
  },
  {
    title: 'AI Sales CRM',
    description: 'An intelligent CRM that predicts lead conversion probability, auto-segments contacts, and fires personalised follow-up emails.',
    tags: ['Software', 'AI', 'CRM'],
    Icon: Users,
    accent: '#06B6D4',
    gradient: 'from-cyan-500/30 via-sky-600/20 to-transparent',
    stats: { label: 'Leads Managed', value: '12k+' },
  },
  {
    title: 'FitAI Android App',
    description: 'Native Android fitness tracker with real-time workout analysis, AI-generated training plans, and nutritional coaching.',
    tags: ['Android', 'AI', 'Mobile'],
    Icon: Smartphone,
    accent: '#10B981',
    gradient: 'from-emerald-500/30 via-green-600/20 to-transparent',
    stats: { label: 'Daily Users', value: '800+' },
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = project.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-3xl overflow-hidden glass border border-white/5 cursor-pointer"
      whileHover={{ y: -8 }}
    >
      {/* Thumbnail Area */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        
        {/* Animated grid inside thumbnail */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={hovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            className="w-20 h-20 rounded-3xl flex items-center justify-center"
            style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}
          >
            <Icon size={36} style={{ color: project.accent }} />
          </motion.div>
        </div>

        {/* Stat overlay */}
        <motion.div
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="absolute bottom-4 left-4 glass px-4 py-2 rounded-xl border border-white/10"
        >
          <div className="text-xs text-gray-400">{project.stats.label}</div>
          <div className="text-lg font-bold text-white font-display" style={{ color: project.accent }}>
            {project.stats.value}
          </div>
        </motion.div>

        {/* View project button overlay */}
        <motion.div
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <motion.div
            animate={hovered ? { scale: 1, y: 0 } : { scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 rounded-full glass border border-white/20 flex items-center gap-2 text-white font-semibold text-sm shadow-xl"
          >
            View Case Study <ArrowUpRight size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Card Footer */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2.5 py-1 rounded-full border"
              style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, transparent, ${project.accent}60, transparent)`, opacity: hovered ? 1 : 0, transition: 'opacity 0.4s' }}
      />
    </motion.div>
  );
};

const Production = () => (
  <section id="production" className="py-20 md:py-32 relative bg-black/20 border-t border-white/[0.03]">
    <div className="container mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Case Studies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            In <span className="text-gradient">Production</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-sm leading-relaxed"
        >
          A curated look at the digital experiences we've shipped — each built with precision and engineered to scale.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Production;
