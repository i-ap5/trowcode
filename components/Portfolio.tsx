import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, ProjectCategory } from './PortfolioData';

const categories: (ProjectCategory | 'All')[] = ['All', 'Websites', 'Mobile apps', 'Custom software'];

const LaptopMockup: React.FC<{ image: string; title: string; link?: string; fit?: 'cover' | 'contain' | 'scale-down' }> = ({ image, title, link, fit }) => {
  const [isLiveReady, setIsLiveReady] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  React.useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const screenWidth = width - (window.innerWidth < 768 ? 12 : 20);
        setScale(screenWidth / 1280);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    // Timeout to ensure we don't wait for the live view forever (e.g. if blocked by X-Frame-Options)
    const timeout = setTimeout(() => {
      if (!isLiveReady) {
        // If it's still not ready after 8 seconds, we stay on the static image
        // but we don't have to do anything since isLiveReady is already false.
      }
    }, 8000);

    return () => {
      window.removeEventListener('resize', updateScale);
      clearTimeout(timeout);
    };
  }, [isLiveReady]);

  return (
    <div ref={containerRef} className="relative w-full aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-1000 ease-[0.16,1,0.3,1] perspective-1000">
      {/* authentic MacBook Pro Frame */}
      <div className="absolute inset-0 bg-[#0a0a0a] rounded-[1.2rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5),0_18px_36px_-18px_rgba(0,0,0,0.5)] border-[0.5px] border-white/20 p-[6px] md:p-[10px] flex flex-col">
        {/* Screen Bezel */}
        <div className="relative flex-1 bg-[#050505] rounded-[0.8rem] overflow-hidden border border-black">
          
          {/* Static High-Fidelity Snapshot (Initial View & Fail-safe fallback) */}
          <img
            src={image}
            alt={title}
            className={`absolute inset-0 w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-all duration-1000 z-10 ${isLiveReady ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />

          {/* Intelligent Live Iframe Layer */}
          {link && (
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 ${isLiveReady ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
              <iframe
                src={link}
                title={title}
                loading="lazy"
                onLoad={() => setIsLiveReady(true)}
                className="w-[1280px] h-[800px] border-none origin-top-left"
                style={{ transform: `scale(${scale})` }}
              />
            </div>
          )}

          {/* Precision Glass Reflection */}
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.03)_60%,rgba(255,255,255,0)_100%)] pointer-events-none z-20" />

          {/* MacBook Notch (Surgically Thinner) */}
          <div className="absolute top-0 left-0 right-0 h-2.5 md:h-3.5 z-30 flex justify-center pointer-events-none">
            <div className="w-16 md:w-28 h-full bg-[#0a0a0a] rounded-b-[8px] shadow-sm" />
          </div>
        </div>
      </div>

      {/* Aluminum 'Lip' (The bottom part of the Macbook Lid) */}
      <div className="absolute -bottom-[2px] left-[15%] right-[15%] h-1 bg-white/20 rounded-full blur-[1px] opacity-40 z-30" />

      {/* Floor Shadow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/30 blur-[40px] rounded-full pointer-events-none scale-y-50" />
    </div>
  );
};

interface PortfolioProps {
  limit?: number;
}

const Portfolio: React.FC<PortfolioProps> = ({ limit = 999 }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects.slice(0, limit)
    : projects.filter(p => p.categories.includes(activeCategory as ProjectCategory)).slice(0, limit);

  return (
    <section id="portfolio" className="bg-[#f5f5f5] text-black py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-32">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 selection:bg-black selection:text-white leading-[1.1]">Selected work</h2>
            <p className="text-xl text-gray-500 font-light max-w-lg">A gallery of digital infrastructure built for our global partners.</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative py-2 text-sm font-medium transition-all group ${activeCategory === cat
                  ? 'text-black'
                  : 'text-gray-400 hover:text-black'
                  }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {activeCategory !== cat && (
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black/20 transition-all duration-300 group-hover:w-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Updated Grid with Stealth Laptop Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 lg:gap-x-12 lg:gap-y-24">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
              onClick={() => {
                if (project.link) window.open(project.link, '_blank');
              }}
            >
              <div className="mb-8 p-4 bg-white/30 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                <LaptopMockup
                  image={project.image}
                  title={project.title}
                  link={project.link}
                  fit={project.imageFit}
                />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[12px] font-bold text-gray-400 group-hover:text-black transition-colors duration-500">
                  {project.categories.join(' & ')}
                </span>

                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl font-normal leading-tight tracking-tight">
                    <span className="font-medium">{project.title}:</span>
                    <span className="text-gray-500 ml-1 font-light group-hover:text-black transition-colors duration-500">
                      {project.shortDesc}
                    </span>
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sharp Rectangle View All Button */}
        <div className="mt-24 flex justify-center">
          <Link
            to="/portfolio"
            className="h-14 px-12 bg-transparent text-black border border-black text-sm font-bold tracking-widest flex items-center justify-center rounded-none hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
            onClick={() => window.scrollTo(0, 0)}
          >
            Explore All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;