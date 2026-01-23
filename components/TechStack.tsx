
import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const techs = [
    { name: 'React', type: 'Frontend', icon: 'data_object', color: 'group-hover:text-cyan-400' },
    { name: 'Next.js', type: 'Framework', icon: 'terminal', color: 'group-hover:text-white' },
    { name: 'Tailwind', type: 'Styling', icon: 'style', color: 'group-hover:text-sky-400' },
    { name: 'Node.js', type: 'Runtime', icon: 'dns', color: 'group-hover:text-green-400' },
    { name: 'Python', type: 'AI/Backend', icon: 'code_blocks', color: 'group-hover:text-yellow-400' },
    { name: 'PostgreSQL', type: 'Database', icon: 'storage', color: 'group-hover:text-blue-400' },
    { name: 'AWS', type: 'Cloud', icon: 'cloud', color: 'group-hover:text-orange-400' },
    { name: 'Docker', type: 'Infrastructure', icon: 'deployed_code', color: 'group-hover:text-blue-500' },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary-glow text-[10px] font-bold tracking-[0.3em] uppercase">Digital Core</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">The Trowcode <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-cyan-400">Engine</span></h2>
        <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed mb-20">Leveraging neural-scale frameworks and resilient digital infrastructure. Every component is engineered for performance and intelligence.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {techs.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(99, 102, 241, 0.3)" 
              }}
              className="glass p-10 rounded-3xl flex flex-col items-center gap-8 group cursor-default transition-all duration-300"
            >
              <div className={`size-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 transition-all duration-500 ${t.color} group-hover:scale-110 group-hover:shadow-[0_0_20px_-5px_currentColor]`}>
                <span className="material-symbols-outlined text-4xl">{t.icon}</span>
              </div>
              <div className="text-center">
                <h3 className="text-white text-xl font-bold tracking-tight">{t.name}</h3>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2 group-hover:text-primary transition-colors">{t.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
