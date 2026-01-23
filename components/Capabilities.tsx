import React from 'react';
import { motion } from 'framer-motion';

const Capabilities: React.FC = () => {
  const items = [
    {
      title: 'Simple Billing',
      desc: 'Clean software that handles your invoices and payments without the clutter.',
      icon: 'receipt_long',
    },
    {
      title: 'Better UX',
      desc: 'Interfaces that actually make sense to the people who use them every day.',
      icon: 'touch_app',
    },
    {
      title: 'Fast Commerce',
      desc: 'Online stores built to handle massive traffic while staying lightning fast.',
      icon: 'shopping_cart',
    },
    {
      title: 'Custom ERP',
      desc: 'Business management tools tailored exactly to how your team operates.',
      icon: 'dashboard_customize',
    }
  ];

  return (
    <section id="solutions" className="py-40 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1] tracking-tight mb-8">
            Solutions that make your <br/> life <span className="text-primary italic">easier.</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed">
            We don't build tech for tech's sake. We build tools that save you time, reduce stress, and help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 lg:p-14 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500 reveal-card relative overflow-hidden flex flex-col items-start"
            >
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-lg font-normal leading-relaxed mb-4">{item.desc}</p>
              
              <div className="mt-auto pt-6 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;