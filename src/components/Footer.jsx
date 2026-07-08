import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import logoImg from '../assets/logo2.jpeg';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/company/Vivernlab/', label: 'LinkedIn' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/Vivernlab?igsh=NGdtaGJ1eGIxdnY=', label: 'Instagram' },
];

const Footer = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] bg-black/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 pt-16 pb-10 relative z-10">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start justify-between mb-14 border-b border-white/5 pb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" className="flex items-center mb-5">
              <img src={logoImg} alt="Logo" className="h-24 sm:h-24 md:h-28 lg:h-32 w-auto -ml-2 md:-ml-4" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              Engineering the future of digital solutions with artificial intelligence one product at a time.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <div className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-5">Quick Links</div>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-3 h-px bg-gray-600 group-hover:w-5 group-hover:bg-indigo-400 transition-all duration-300" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-5">Connect</div>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass border border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div className="max-w-xs">
            <div className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-5">Start Building</div>
            <p className="text-sm text-gray-500 mb-5">Ready to launch your next AI-powered product?</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold"
            >
              Get Started
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {year} Vivernlab. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('privacy-policy')} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms-conditions')} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate('privacy-policy')} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
