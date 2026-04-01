import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, ProjectCategory } from './PortfolioData';

const categories: (ProjectCategory | 'All')[] = ['All', 'Websites', 'Mobile apps', 'Custom software'];

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

        {/* 3x2 Grid Implementation */}
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
              <div className="bg-white aspect-square overflow-hidden mb-8 relative rounded-none hover:shadow-2xl transition-all duration-700 border border-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain scale-75' : 'object-cover'} transition-transform duration-1000 group-hover:scale-110`}
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