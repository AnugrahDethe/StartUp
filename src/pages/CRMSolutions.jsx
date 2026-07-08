import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft, ArrowRight, Shield,
  Layers, Zap, Search, Globe, Smartphone,
  BarChart3, Layout, Send, Grid, Server,
  Code2, Cloud, Rocket, Sparkles, PieChart, Users, Link, Database, Settings
} from 'lucide-react';

const stats = [
  { target: 1, suffix: '+', label: 'Leads Managed' },
  { target: 45, suffix: '+', label: 'Efficiency Gain' },
  { target: 2, suffix: '+', label: 'API Integrations' },
  { target: 1, suffix: '+', label: 'Custom Workflows' },
];

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

const StatCard = ({ target, suffix, label }) => {
  const { value, ref } = useCountUp(target);
  return (
    <motion.div variants={fadeUpVariant} ref={ref} className="text-center px-4">
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
      >
        {value}{suffix}
      </motion.div>
      <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

const whyChooseUs = [
  {
    title: 'Automated Workflows',
    desc: 'Eliminate manual data entry. We build smart triggers that automatically assign leads, send emails, and update statuses.',
    icon: Zap,
    accent: '#D946EF'
  },
  {
    title: 'Advanced Analytics',
    desc: 'Custom dashboards displaying real-time pipeline metrics, revenue forecasts, and team performance KPIs.',
    icon: BarChart3,
    accent: '#A855F7'
  },
  {
    title: 'Seamless Integrations',
    desc: 'Connect your CRM directly with your website, billing software (Stripe), email providers, and marketing tools.',
    icon: Link,
    accent: '#3B82F6'
  },
  {
    title: 'Role-Based Access',
    desc: 'Granular permission controls ensuring your sales, marketing, and executive teams only see what they need to see.',
    icon: Users,
    accent: '#EC4899'
  }
];

const process = [
  {
    step: '01',
    title: 'Process Audit',
    desc: 'Analyzing your current sales & operational pipeline.',
    icon: Search
  },
  {
    step: '02',
    title: 'Custom Configuration',
    desc: 'Building custom data models and automation rules.',
    icon: Settings
  },
  {
    step: '03',
    title: 'Data Migration',
    desc: 'Safely transferring historical data from old systems.',
    icon: Database
  },
  {
    step: '04',
    title: 'Training & Handoff',
    desc: 'Onboarding your team to ensure high adoption rates.',
    icon: Users
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const popInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};



const CRMSolutions = ({ onBack }) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const refOverview = useRef(null);
  const inViewOverview = useInView(refOverview, { once: true, amount: 0.2 });

  const refMethodology = useRef(null);
  const inViewMethodology = useInView(refMethodology, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen text-gray-200 overflow-x-hidden selection:bg-purple-500/30">

      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 md:px-12">

            <div className="flex items-center justify-between mb-12">
              <motion.button
                onClick={onBack}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back
              </motion.button>


            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 bg-purple-500/5 mb-8">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-semibold text-purple-300 tracking-wider uppercase">Business Management</span>
                </motion.div>

                <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                  CRM & ERP <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Solutions</span>
                </motion.h1>

                <motion.p variants={fadeUpVariant} className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                  Intelligent systems that align your sales, marketing, and operations into a single source of truth. Close deals faster and operate smoother.
                </motion.p>

                <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    onClick={onBack}
                    className="relative group overflow-hidden px-8 py-3.5 rounded-full font-semibold text-white bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Get a Free Quote
                    </span>
                  </a>
                  <button
                    onClick={onBack}
                    className="px-8 py-3.5 rounded-full font-semibold text-gray-300 glass border border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Grid size={18} className="group-hover:rotate-90 transition-transform duration-500" /> All Services
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="relative hidden lg:block">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative glass border border-white/10 rounded-[2rem] p-4 overflow-hidden shadow-2xl z-10">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                      alt="CRM Dashboard Analytics"
                      className="w-full h-auto rounded-xl object-cover mix-blend-luminosity opacity-90 transition-opacity hover:opacity-100"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 glass border border-white/10 p-4 rounded-2xl z-20 flex items-center gap-4 backdrop-blur-xl shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <PieChart size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-mono">Revenue</div>
                      <div className="text-sm font-bold text-white">+42% This Quarter</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-white/5 bg-white/[0.01]">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5"
            >
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Overview */}
        <section ref={refOverview} className="py-24 lg:py-32 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                animate={inViewOverview ? { opacity: 1, x: 0, rotate: 0 } : {}}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                className="relative order-2 lg:order-1 group"
              >
                <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-purple-500/30 transition-colors duration-700" />
                <motion.div
                  style={{ y: yParallax }}
                  className="relative rounded-3xl overflow-hidden glass border border-white/10 p-2 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    alt="Business Strategy"
                    className="w-full h-auto rounded-2xl object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={staggerContainer} initial="hidden" animate={inViewOverview ? "visible" : "hidden"} className="order-1 lg:order-2">
                <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 mb-4">
                  <Sparkles size={16} className="text-purple-400" />
                  <h3 className="text-purple-400 font-semibold tracking-wider text-sm uppercase">Service Overview</h3>
                </motion.div>

                <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Turn Data into Revenue
                </motion.h2>

                <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                  <motion.p variants={fadeUpVariant}>
                    Whether you need a bespoke CRM built from the ground up or an implementation of Salesforce or HubSpot tailored to your exact workflows, we provide the architecture for growth.
                  </motion.p>
                  <motion.p variants={fadeUpVariant}>
                    We unify siloed departments by connecting sales, marketing, and customer support into a single dashboard. Your teams get immediate context on every client interaction, reducing friction and closing deals faster.
                  </motion.p>
                  <motion.p variants={fadeUpVariant}>
                    By automating repetitive data entry and follow-ups, we free up your talent to do what they do best: building relationships and driving strategy.
                  </motion.p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white/[0.02] border-t border-white/5 relative backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-12">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer} className="mb-16">
              <motion.h3 variants={fadeUpVariant} className="text-purple-400 font-semibold tracking-wider text-sm uppercase mb-4">Why Choose Us</motion.h3>
              <div className="grid lg:grid-cols-2 gap-8 items-end">
                <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Features that empower your entire workforce.
                </motion.h2>
                <motion.p variants={fadeUpVariant} className="text-gray-400 text-lg pb-2">
                  Stop wrestling with spreadsheets. Our systems bring clarity, accountability, and velocity to your operations.
                </motion.p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={idx} variants={popInVariant} whileHover={{ y: -10, transition: { duration: 0.2 } }} className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors group relative overflow-hidden">
                    <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${feature.accent}, transparent 70%)` }} />
                    <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${feature.accent}, transparent)` }} />
                    <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${feature.accent}15`, color: feature.accent }}>
                      <Icon size={28} strokeWidth={1.5} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>

          </div>
        </section>

        {/* Methodology */}
        <section ref={refMethodology} className="py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div initial="hidden" animate={inViewMethodology ? "visible" : "hidden"} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">
              <motion.h3 variants={fadeUpVariant} className="text-cyan-400 font-semibold tracking-wider text-sm uppercase mb-4">Our Methodology</motion.h3>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold mb-6">Seamless Implementation</motion.h2>
              <motion.p variants={fadeUpVariant} className="text-gray-400 text-lg">We ensure a smooth transition with zero data loss and maximum team adoption.</motion.p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/10" />
              <motion.div
                className="hidden md:block absolute top-12 left-0 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                initial={{ width: 0 }}
                animate={inViewMethodology ? { width: '100%' } : {}}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />

              <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                {process.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div key={idx} initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={inViewMethodology ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ delay: 0.5 + (idx * 0.2), type: "spring", stiffness: 100, damping: 12 }} className="flex flex-col items-center text-center group">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-24 h-24 rounded-full glass border-2 border-white/10 flex items-center justify-center bg-black/50 mb-6 relative group-hover:border-purple-500/50 transition-colors shadow-xl">
                        <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">{step.step}</span>
                        <motion.div initial={{ scale: 0 }} animate={inViewMethodology ? { scale: 1 } : { scale: 0 }} transition={{ delay: 1 + (idx * 0.2), type: "spring", bounce: 0.5 }} className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white border-4 border-[#030305] group-hover:animate-pulse">
                          <Icon size={18} />
                        </motion.div>
                      </motion.div>
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{step.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#160A18]" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-1/2 -left-1/4 w-full aspect-square bg-purple-900/40 rounded-full blur-[120px] pointer-events-none" />
          <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -top-1/2 -right-1/4 w-full aspect-square bg-pink-900/30 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto text-center">
              <motion.h3 variants={fadeUpVariant} className="text-purple-400 font-semibold tracking-wider text-sm uppercase mb-4">Unify Your Business</motion.h3>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">Ready to Automate <br className="hidden md:block" /> Your Operations?</motion.h2>
              <motion.p variants={fadeUpVariant} className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">Partner with StartUp to transform your Ideas into Reality. Our experts are ready to audit your business processes.</motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" onClick={onBack} className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-black hover:bg-gray-900 border border-white/10 transition-colors flex items-center justify-center gap-2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-1 transition-transform" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  Book a Consultation
                </motion.a>
                <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,211,102,0.5)" }} whileTap={{ scale: 0.95 }} href="#" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] group">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  Chat on WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CRMSolutions;
