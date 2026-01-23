import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Capabilities from './components/Capabilities';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import Contact from './components/Contact';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative flex flex-col min-h-screen bg-black text-slate-200 font-body selection:bg-white/10 selection:text-white">
      {/* Precision Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-white z-[200] origin-left mix-blend-difference"
        style={{ scaleX }}
      />

      <InteractiveBackground />

      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Ecosystem />
        <Capabilities />
        <Methodology />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <Contact />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;