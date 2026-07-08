import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

// Lazy load page components
const WebsiteDevelopment = lazy(() => import('./pages/WebsiteDevelopment'));
const AndroidAppDev = lazy(() => import('./pages/AndroidAppDev'));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment'));
const CRMSolutions = lazy(() => import('./pages/CRMSolutions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

// Fallback component while lazy component loads
const LoadingFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-screen h-screen flex items-center justify-center bg-[#030305]"
  >
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-indigo-500 animate-spin" />
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  </motion.div>
);

const SERVICE_PAGES = {
  'website-development': WebsiteDevelopment,
  'android-app-dev': AndroidAppDev,
  'software-development': SoftwareDevelopment,
  'crm-solutions': CRMSolutions,
  'privacy-policy': PrivacyPolicy,
  'terms-conditions': TermsConditions,
};

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    const handlePopState = (event) => {
      const pageId = event.state?.pageId || null;
      setCurrentPage(pageId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && SERVICE_PAGES[hash]) {
      setCurrentPage(hash);
      window.history.replaceState({ pageId: hash }, '', `#${hash}`);
    } else {
      window.history.replaceState({ pageId: null }, '', '#');
    }
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.history.pushState({ pageId }, '', `#${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setCurrentPage(null);
    window.history.pushState({ pageId: null }, '', '#');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  useEffect(() => {
    const titles = {
      'website-development':  'Website Development — Our Services',
      'android-app-dev':      'Android App Development — Our Services',
      'software-development': 'Software Development — Our Services',
      'crm-solutions':        'CRM Solutions — Our Services',
      'privacy-policy':       'Privacy Policy — Vivernlab',
      'terms-conditions':     'Terms & Conditions — Vivernlab',
    };

    const descriptions = {
      'website-development': 'Explore Vivernlab’s modern website development services for fast, SEO-ready, conversion-focused experiences.',
      'android-app-dev': 'Build polished Android apps with Vivernlab — from product strategy to launch and performance optimization.',
      'software-development': 'Get custom software solutions from Vivernlab, including APIs, automation, and scalable business systems.',
      'crm-solutions': 'Transform your sales and operations with Vivernlab’s AI-driven CRM solutions and automation workflows.',
      'privacy-policy': 'Read Vivernlab’s privacy policy to understand how we collect, use, and protect your information.',
      'terms-conditions': 'Review Vivernlab’s terms and conditions for using our services and website.',
    };

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const setPropertyMeta = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const title = currentPage ? titles[currentPage] : 'Vivernlab — Websites, Apps & CRM Solutions';
    const description = currentPage ? descriptions[currentPage] : 'Vivernlab builds websites, Android apps, custom software, and AI-driven CRM solutions for growing businesses.';
    const canonicalUrl = currentPage ? `https://vivernlab.com/#${currentPage}` : 'https://vivernlab.com/';

    document.title = title;
    setMeta('description', description);
    setPropertyMeta('og:title', title);
    setPropertyMeta('og:description', description);
    setPropertyMeta('og:url', canonicalUrl);
    setPropertyMeta('twitter:title', title);
    setPropertyMeta('twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [currentPage]);

  return (
    <div
      className="min-h-screen text-gray-200 overflow-x-hidden"
      style={{ background: '#030305' }}
    >
      {/* Global Three.js background — fixed, z-0 */}
      <ThreeBackground />

      {/* All site content above the Three.js canvas */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        <AnimatePresence mode="wait">
          {currentPage && SERVICE_PAGES[currentPage] ? (
            <Suspense fallback={<LoadingFallback />}>
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {(() => {
                  const PageComponent = SERVICE_PAGES[currentPage];
                  return <PageComponent onBack={goHome} />;
                })()}
              </motion.div>
            </Suspense>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <main>
                <Hero />
                <Services onServiceClick={navigateTo} />
                <About />
                <Contact />
              </main>
              <Footer onNavigate={navigateTo} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
