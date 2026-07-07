import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      // Detect active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass border-b border-white/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <motion.a
            href="#home"
            className="inline-flex items-center z-50 group"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logoImg} alt="Logo" className="h-24 md:h-28 w-auto -ml-4" />
          </motion.a>
        </div>

        {/* Desktop Nav */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center gap-1 p-1 glass rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors"
            >
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                />
              )}
              <span className={`relative z-10 transition-colors ${
                activeSection === link.href.slice(1) ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}>
                {link.name}
              </span>
            </a>
          ))}
          </nav>
        </div>

        {/* Mobile Toggle */}
        <div className="flex-1 flex justify-end">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden z-50 w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-300"
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
            className="md:hidden overflow-hidden glass border-t border-white/5"
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
                  className="py-3 px-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
