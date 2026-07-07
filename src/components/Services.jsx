import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Monitor, Smartphone, Code2, Users, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Pixel-perfect, high-performance web experiences that load fast, rank well, and convert visitors into loyal customers.',
    icon: Monitor,
    accent: '#6366F1',
    glow: 'rgba(99, 102, 241, 0.15)',
    gradient: 'from-indigo-500/20 to-transparent',
    tag: 'React • Next.js • SEO',
  },
  {
    id: 'android-app-dev',
    title: 'Android App Dev',
    description: 'Native and cross-platform mobile apps with buttery-smooth UX, powerful offline support, and AI-enhanced features.',
    icon: Smartphone,
    accent: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.15)',
    gradient: 'from-cyan-500/20 to-transparent',
    tag: 'React Native • Kotlin',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Scalable, AI-powered backend systems, APIs, and automation pipelines that eliminate bottlenecks and drive growth.',
    icon: Code2,
    accent: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.15)',
    gradient: 'from-violet-500/20 to-transparent',
    tag: 'Python • Node • AI/ML',
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    description: 'Intelligent customer pipelines that automate lead scoring, outreach, and reporting — your always-on sales team.',
    icon: Users,
    accent: '#10B981',
    glow: 'rgba(16, 185, 129, 0.15)',
    gradient: 'from-emerald-500/20 to-transparent',
    tag: 'Automation • Analytics',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const ServiceCard = ({ service, onServiceClick }) => {
  const Icon = service.icon;
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    mouseX.set(nx - 0.5);
    mouseY.set(ny - 0.5);
    setSpotlight({ x: nx * 100, y: ny * 100, visible: true });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setSpotlight(s => ({ ...s, visible: false }));
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onServiceClick(service.id)}
      className="relative group rounded-3xl glass border border-white/5 p-8 overflow-hidden cursor-pointer shimmer-border select-none"
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, ${service.glow} 0%, transparent 65%)`,
        }}
      />

      {/* Top gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 relative"
        style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
      >
        <Icon size={24} style={{ color: service.accent }} />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: service.accent }}>
          <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: service.accent }} />
        </span>
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
        {service.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Explore link */}
      <div
        className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
        style={{ color: service.accent }}
      >
        Learn More <ArrowRight size={13} />
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-4/5 transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(to right, transparent, ${service.accent}, transparent)` }}
      />
    </motion.div>
  );
};

const Services = ({ onServiceClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">What We Build</span>
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-bold leading-[1.05] mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We leverage cutting-edge AI and modern frameworks to deliver solutions that put your business years ahead of the competition.
            <span className="block mt-2 text-sm text-gray-500">Click any service to explore it in depth →</span>
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} onServiceClick={onServiceClick} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
