import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Monitor, Smartphone, Code2, Users, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Pixel-perfect, high-performance web experiences that load fast, rank well, and convert visitors into loyal customers.',
    icon: Monitor,
    accent: '#6366F1',
    glow: 'rgba(99, 102, 241, 0.2)',
    gradient: 'from-indigo-500/25 via-indigo-500/5 to-transparent',
    border: 'rgba(99,102,241,0.3)',
    tag: 'React • Next.js • SEO',
  },
  {
    id: 'android-app-dev',
    title: 'Android App Dev',
    description: 'Native and cross-platform mobile apps with buttery-smooth UX, powerful offline support, and AI-enhanced features.',
    icon: Smartphone,
    accent: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.2)',
    gradient: 'from-cyan-500/25 via-cyan-500/5 to-transparent',
    border: 'rgba(6,182,212,0.3)',
    tag: 'React Native • Kotlin',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Scalable, AI-powered backend systems, APIs, and automation pipelines that eliminate bottlenecks and drive growth.',
    icon: Code2,
    accent: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.2)',
    gradient: 'from-violet-500/25 via-violet-500/5 to-transparent',
    border: 'rgba(139,92,246,0.3)',
    tag: 'Python • Node • AI/ML',
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    description: 'Intelligent customer pipelines that automate lead scoring, outreach, and reporting your always-on sales team.',
    icon: Users,
    accent: '#10B981',
    glow: 'rgba(16, 185, 129, 0.2)',
    gradient: 'from-emerald-500/25 via-emerald-500/5 to-transparent',
    border: 'rgba(16,185,129,0.3)',
    tag: 'Automation • Analytics',
  },
];

const ServiceCard = ({ service, onServiceClick, index, scrollYProgress }) => {
  const Icon = service.icon;
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });
  const [hovered, setHovered] = useState(false);


  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

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
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX, rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
        boxShadow: hovered
          ? `0 35px 70px -15px ${service.glow}, 0 0 0 1px ${service.border}`
          : '0 10px 30px rgba(0,0,0,0.5)',
        transition: 'box-shadow 0.4s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      onClick={() => onServiceClick(service.id)}
      className="relative group rounded-3xl border border-white/5 p-8 overflow-hidden cursor-pointer select-none bg-black/20 backdrop-blur-md h-full min-h-[400px] flex flex-col items-start"
    >
      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, ${service.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

      {/* Content (lifted via translateZ for 3D depth) */}
      <div className="relative z-20 flex flex-col flex-1" style={{ transform: 'translateZ(30px)' }}>
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 relative"
          style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}40` }}
        >
          <Icon size={24} style={{ color: service.accent }} />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: service.accent }}>
            <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: service.accent }} />
          </span>
        </motion.div>

        {/* Tag */}
        <div className="text-[10px] font-mono tracking-widest mb-3 px-2 py-1 rounded-md inline-block"
          style={{ color: service.accent, background: `${service.accent}15`, border: `1px solid ${service.accent}25` }}>
          {service.tag}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
          {service.description}
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 mt-auto"
          style={{ color: service.accent }}
        >
          Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const Services = ({ onServiceClick }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yHeader = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      {/* Section ambient glow */}
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header with Parallax */}
        <motion.div
          style={{ y: yHeader, opacity: opacityHeader }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            We leverage cutting-edge AI and modern frameworks to deliver solutions that put your
            business years ahead of the competition.
            <span className="block mt-4 text-sm text-indigo-400/80 font-medium tracking-wide uppercase">Click any service to explore it in depth →</span>
          </p>
        </motion.div>

        {/* Cards Grid with individual Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch" style={{ gridAutoRows: '1fr' }}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onServiceClick={onServiceClick}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
