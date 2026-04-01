import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Capabilities: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const items = [
    {
      title: 'Websites & Web Apps',
      short: 'Your business, online — fast and beautiful.',
      detail: 'Custom-built websites and web applications that load instantly, look stunning on every device, and convert visitors into customers.',
      icon: 'language',
      tags: ['Business Sites', 'Web Portals', 'Dashboards'],
      stat: '< 1s',
      statLabel: 'Load time',
    },
    {
      title: 'Online Stores',
      short: 'Sell anything, anywhere — seamlessly.',
      detail: 'E-commerce platforms that handle thousands of orders with smooth checkout, inventory management, and real-time analytics.',
      icon: 'storefront',
      tags: ['Product Catalogs', 'Payments', 'Order Tracking'],
      stat: '3x',
      statLabel: 'More sales',
    },
    {
      title: 'Business Software',
      short: 'Replace spreadsheets with real tools.',
      detail: 'Custom billing, CRM, ERP — tools tailored to how your team works, not the other way around. No more manual work.',
      icon: 'dashboard_customize',
      tags: ['Billing', 'CRM', 'ERP', 'Automation'],
      stat: '50%',
      statLabel: 'Time saved',
    },
    {
      title: 'Mobile Apps',
      short: 'Your business in your customer\'s pocket.',
      detail: 'Native-quality apps for iOS and Android that people actually want to use. Fast, intuitive, built to keep users coming back.',
      icon: 'smartphone',
      tags: ['iOS', 'Android', 'Cross-Platform'],
      stat: '4.8★',
      statLabel: 'Avg rating',
    },
  ];

  return (
    <section id="solutions" className="py-28 lg:py-40 px-6 lg:px-12 bg-black relative overflow-hidden">
      {/* Moving gradient blob */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with staggered reveal */}
        <div className="mb-20 lg:mb-28">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-white/25 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="size-1.5 rounded-full bg-white/30"
            />
            What we build
          </motion.p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-8 max-w-4xl">
            {['Software', 'that', 'solves'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {['real', 'problems.'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em] text-white/20"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed"
          >
            Every line of code we write is designed to save you time, cut costs, or make your customers happier.
          </motion.p>
        </div>

        {/* Interactive service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {items.map((item, idx) => {
            const isHovered = hovered === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  relative group rounded-3xl overflow-hidden cursor-default transition-all duration-700
                  ${isHovered ? 'bg-white' : 'bg-white/[0.03] hover:bg-white/[0.05]'}
                  border ${isHovered ? 'border-black/5' : 'border-white/5'}
                `}
              >
                <div className="p-8 lg:p-10 flex flex-col h-full min-h-[280px]">
                  {/* Top row: icon + stat */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`size-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                        isHovered ? 'bg-black text-white' : 'bg-white/5 text-white/30'
                      }`}
                    >
                      <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    </motion.div>

                    {/* Animated stat */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      className="text-right"
                    >
                      <span className="block text-2xl font-display font-black text-black tracking-tight">{item.stat}</span>
                      <span className="text-[10px] text-black/40 uppercase tracking-wider font-bold">{item.statLabel}</span>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl lg:text-3xl font-display font-bold tracking-tight mb-3 transition-colors duration-500 ${
                    isHovered ? 'text-black' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-base leading-relaxed mb-auto transition-colors duration-500 ${
                    isHovered ? 'text-black/50' : 'text-white/30'
                  }`}>
                    {isHovered ? item.detail : item.short}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.tags.map((tag, tIdx) => (
                      <motion.span
                        key={tag}
                        initial={false}
                        animate={isHovered 
                          ? { opacity: 1, y: 0, transition: { delay: tIdx * 0.05 } } 
                          : { opacity: 0.4, y: 0 }
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-500 ${
                          isHovered
                            ? 'bg-black/5 text-black/60 border border-black/10'
                            : 'bg-white/5 text-white/25 border border-white/5'
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover arrow indicator */}
                  <motion.div
                    initial={false}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    className="absolute bottom-8 right-8"
                  >
                    <div className="size-10 rounded-full bg-black flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-lg">arrow_forward</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;