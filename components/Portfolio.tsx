import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, ProjectCategory } from './PortfolioData';

const categories: (ProjectCategory | 'All')[] = ['All', 'Web & E-Commerce', 'Mobile App', 'Custom Software'];

interface PortfolioProps {
  limit?: number;
}

const Portfolio: React.FC<PortfolioProps> = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = activeCategory === 'All'
    ? (limit ? projects.slice(0, limit) : projects)
    : (limit ? projects.filter(p => p.category === activeCategory).slice(0, limit) : projects.filter(p => p.category === activeCategory));

  return (
    <section id="portfolio" className="bg-[#FAFAFA] text-black py-24 lg:py-32 px-6 lg:px-12 border-b border-black/10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">Selected Work</h2>
            <p className="text-lg text-gray-500 font-light">Recent projects we've launched for our clients.</p>
          </div>

          {/* Minimal Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${activeCategory === cat ? 'bg-black text-white' : 'bg-gray-200/50 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Crisp Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => {
                if (project.link) window.open(project.link, '_blank');
              }}
            >
              <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain scale-75' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                />
                {project.link && (
                  <div className="absolute top-4 right-4 size-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-medium tracking-tight mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 font-light">{project.category}</p>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-20 flex justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 h-12 border border-black text-black rounded-full text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              View all projects
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;