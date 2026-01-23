import React from 'react';
import { motion } from 'framer-motion';

const Methodology: React.FC = () => {
  const phases = [
    { num: '01', title: 'Design', icon: 'architecture', desc: 'We architect intuitive blueprints that bridge the gap between complex logic and human interaction.', seed: 'blueprint-sketch' },
    { num: '02', title: 'Develop', icon: 'terminal', desc: 'Our engineering team translates vision into high-concurrency code built for speed and reliability.', seed: 'code-editor' },
    { num: '03', title: 'Deploy', icon: 'rocket_launch', desc: 'Seamless integration into your infrastructure with zero downtime and automated scaling.', seed: 'cloud-deployment' },
    { num: '04', title: 'Dominate', icon: 'monitoring', desc: 'Ongoing optimization and intelligence gathering to ensure your system leads the market.', seed: 'analytics-dashboard' },
  ];

  return (
    <section id="methodology" className="py-40 px-6 lg:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Proprietary Protocol</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-10">
            The 4D <span className="text-slate-800">Framework.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-normal leading-relaxed">
            Our systematic approach to engineering excellence. Four dimensions of performance, one goal: Systems that just work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-6xl font-display font-bold text-white/10">{phase.num}</span>
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{phase.icon}</span>
                  </div>
                </div>
                <h3 className="text-4xl sm:text-5xl font-display font-bold text-white mb-8 tracking-tight">{phase.title}</h3>
                <p className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed mb-10">{phase.desc}</p>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden glass group border border-white/10">
                  <img 
                    src={`https://picsum.photos/seed/${phase.seed}/1000/600`} 
                    alt={phase.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;