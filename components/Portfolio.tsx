import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from './PortfolioData';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-12 px-6 lg:px-12 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-4 mb-6"
            >
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">Our Creation</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none"
            >
              Selected <span className="text-white/20 italic">Works.</span>
            </motion.h2>
          </div>
        </div>

        {/* Projects Grid - Always shows all */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 bg-[#080808]"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-[#050505]">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                <div className="absolute top-8 right-8 size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">arrow_outward</span>
                </div>

                <span className="inline-block px-3 py-1 rounded-md bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4 border border-primary/20 backdrop-blur-sm">
                  {project.category}
                </span>
                <h3 className="text-3xl font-display font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-3 mb-6 group-hover:text-slate-300 transition-colors whitespace-pre-line">
                  {project.shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tags?.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] text-slate-500 font-mono border border-white/10 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={selectedProject.id}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 size-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative bg-[#050505]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`w-full h-full ${selectedProject.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  {selectedProject.stats?.map((stat, idx) => (
                    <span key={idx} className="text-[10px] text-slate-500 font-mono font-bold border-l border-white/10 pl-3">
                      {stat.label}: <span className="text-white">{stat.value}</span>
                    </span>
                  ))}
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  {selectedProject.title}
                </h2>

                <div className="text-slate-400 text-lg leading-relaxed mb-10 font-light whitespace-pre-line">
                  {selectedProject.fullDesc}
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 opacity-50">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags?.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link && (
                  <button
                    onClick={() => window.open(selectedProject.link, '_blank')}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    Visit Live Site
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;