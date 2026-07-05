import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Production from './components/Production';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030305] text-gray-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Production />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
