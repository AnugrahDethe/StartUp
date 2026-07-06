import { useState, useEffect } from 'react';
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

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setCurrentPage(null);
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
      'privacy-policy': 'Privacy Policy — VivernLab',
      'terms-conditions': 'Terms & Conditions — VivernLab',
    };
    document.title = currentPage ? titles[currentPage] : 'VivernLab — Digital Agency';
  }, [currentPage]);

  if (currentPage && SERVICE_PAGES[currentPage]) {
    const PageComponent = SERVICE_PAGES[currentPage];
    return <PageComponent onBack={goHome} />;
  }

  return (
    <div className="min-h-screen bg-[#030305] text-gray-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services onServiceClick={navigateTo} />
        <Production />
        <About />
        <Contact />
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
