import React from 'react';
import { motion } from 'framer-motion';

const Ecosystem: React.FC = () => {
  const stats = [
    { label: 'Uptime', value: '99.9%' },
    { label: 'Global Nodes', value: '20+' },
    { label: 'Performance', value: '10x' },
    { label: 'Security', value: 'Vault' },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 border-y border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-3"
            >
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
              <span className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tighter">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm font-light uppercase tracking-[0.3em]">Built for growth & simplicity</p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;