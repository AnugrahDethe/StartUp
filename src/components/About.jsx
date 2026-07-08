import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Target, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const values = [
  {
    title: 'Precision',
    description: 'We write clean, efficient, and scalable code that works flawlessly under pressure.',
    icon: Target,
    color: '#6366f1'
  },
  {
    title: 'Innovation',
    description: 'We leverage AI and modern frameworks to solve complex problems simply.',
    icon: Lightbulb,
    color: '#06b6d4'
  },
  {
    title: 'Craftsmanship',
    description: 'Every interface is polished, every API is optimized. We care about the details.',
    icon: Code2,
    color: '#8b5cf6'
  },
  {
    title: 'Velocity',
    description: 'Fast delivery without compromising on quality or long-term maintainability.',
    icon: Rocket,
    color: '#10b981'
  }
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms based on section scroll
  const yTitle = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yText = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const yCards = useTransform(scrollYProgress, [0, 1], [250, -100]);
  const scaleGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient glows linked to scroll */}
      <motion.div 
        style={{ scale: scaleGlow }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" 
      />
      <motion.div 
        style={{ scale: scaleGlow }}
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content with Parallax */}
          <div className="relative">
            <motion.h2 
              style={{ y: yTitle }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-8"
            >
              Mission and <br />
              Vision <br />
              <span className="text-gray-500">the </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Road <br /> Ahead
              </span>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mt-6 rounded-full" />
            </motion.h2>

            <motion.div style={{ y: yText }} className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Vivernlab was founded with a singular, uncompromising goal: to help businesses adopt modern, transformative technology without the unnecessary complexity that usually accompanies it.
              </p>
              <p>
                We believe that software shouldn't just be a collection of features; it should solve real-world problems, drastically improve operational efficiency, and create measurable, sustainable business value. Our journey started when we noticed a massive gap between high end technological capabilities like AI, advanced data science, and scalable cloud architectures and the everyday businesses that needed them the most.
              </p>
              <p>
                Today, we bridge that gap. We build intuitive, robust, and beautiful digital experiences that empower our clients to scale faster and smarter.
              </p>
            </motion.div>
          </div>

          {/* Right: Values Grid with Parallax */}
          <motion.div style={{ y: yCards }} className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div 
                    className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
