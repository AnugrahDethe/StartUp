import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Production from './components/Production';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import AndroidAppDev from './pages/AndroidAppDev';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import CRMSolutions from './pages/CRMSolutions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

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

  // Handle browser back/forward button clicks
  useEffect(() => {
    const handlePopState = (event) => {
      const pageId = event.state?.pageId || null;
      setCurrentPage(pageId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check initial URL hash to restore page on direct load/refresh
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
    // Small delay to allow scroll reset before the home sections paint
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  // Update browser tab title based on page
  useEffect(() => {
    const titles = {
      'website-development': 'Website Development — Our Services',
      'android-app-dev': 'Android App Development — Our Services',
      'software-development': 'Software Development — Our Services',
      'crm-solutions': 'CRM Solutions — Our Services',
      'privacy-policy': 'Privacy Policy — Vivernlab',
      'terms-conditions': 'Terms & Conditions — Vivernlab',
    };
    document.title = currentPage ? titles[currentPage] : 'Vivernlab';
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#030305] text-gray-200 overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        {currentPage && SERVICE_PAGES[currentPage] ? (
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
              {/* <Production /> */}
              <About />
              <Contact />
            </main>
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
