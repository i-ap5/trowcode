import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    { 
      name: 'Aibillo', 
      cat: 'FinTech', 
      desc: 'A smart billing software designed to take the stress out of invoicing. Simple, clean, and fast.', 
      img: 'https://picsum.photos/seed/billing-software/800/600', 
      span: 'lg:col-span-8',
      link: 'https://aibillo.com'
    },
    { 
      name: 'Retail Prediction', 
      cat: 'AI Modeling', 
      desc: 'Purchase prediction model helping retailers stock the right products at the exact right time.', 
      img: 'https://picsum.photos/seed/retail-data/600/600', 
      span: 'lg:col-span-4' 
    },
    { 
      name: 'Industrial ERP', 
      cat: 'Manufacturing', 
      desc: 'Full-scale project management ERP designed specifically for high-output manufacturers.', 
      img: 'https://picsum.photos/seed/factory-erp/600/600', 
      span: 'lg:col-span-6' 
    },
    { 
      name: 'Smart Logistics', 
      cat: 'Dashboard', 
      desc: 'Live tracking and routing system for local delivery fleets and warehouses.', 
      img: 'https://picsum.photos/seed/logistics/800/600', 
      span: 'lg:col-span-6' 
    },
  ];

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="portfolio" className="py-40 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight leading-none">
            Future ready <span className="text-slate-800">work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleProjectClick(p.link)}
              className={`group relative overflow-hidden rounded-[2.5rem] glass h-[500px] cursor-pointer ${p.span}`}
            >
              <img 
                src={p.img} 
                alt={p.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-[1000ms] group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 p-10 lg:p-12 flex flex-col justify-end">
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4">{p.cat}</span>
                <h3 className="text-4xl font-display font-bold text-white mb-4 tracking-tight">{p.name}</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md group-hover:text-white transition-colors">{p.desc}</p>
                
                {p.link && (
                  <div className="mt-8 inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                    Visit Website <span className="material-symbols-outlined text-lg">open_in_new</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;