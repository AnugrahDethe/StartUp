import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo2.jpeg';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 bg-black/30 backdrop-blur-2xl border-b border-white/[0.05]'
          : 'py-6 bg-transparent'
        }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Inner ambient glow when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-transparent pointer-events-none" />
      )}

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <motion.a
            href="#home"
            className="inline-flex items-center z-50 group"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logoImg} alt="Logo" className="h-24 sm:h-24 md:h-28 lg:h-32 w-auto -ml-2 md:-ml-4" />
          </motion.a>
        </div>

        {/* Desktop Nav */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.07]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors"
              >
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: 'inset 0 0 12px rgba(99,102,241,0.2)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                  }`}>
                  {link.name}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/20"
          >
            Get Started
          </motion.a>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden z-50 w-10 h-10 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.07] flex items-center justify-center text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/60 backdrop-blur-2xl border-t border-white/[0.05]"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-2 py-3 px-4 text-center text-white font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
