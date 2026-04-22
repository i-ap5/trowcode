import React from 'react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  const offerings = [
    { title: 'Web & Mobile Apps', desc: 'High-performance user-facing applications for iOS, Android, and the Web.' },
    { title: 'Custom Software', desc: 'Tailor-made software platforms designed exactly for your specific business logic.' },
    { title: 'Custom ERP', desc: 'Enterprise resource planning systems to unify and manage your entire operation.' },
    { title: 'AI & Automation', desc: 'Integrate machine learning and LLMs to automate repetitive corporate workflows.' },
    { title: 'Data Science & Analytics', desc: 'Transform raw data into actionable dashboards, pipelines, and predictive models.' }
  ];

  return (
    <section id="solutions" className="bg-white text-black py-24 lg:py-32 selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

        {/* Sticky Title Column */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-auto mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[40px] md:text-5xl lg:text-6xl font-medium tracking-tight leading-none mb-8 text-black">
              Services
            </h2>
            <div className="w-12 h-[2px] bg-black mb-8" />
            <p className="text-lg text-black/50 font-light max-w-[280px] leading-relaxed">
              We build functional, high-quality digital products designed to help your business grow.
            </p>
          </motion.div>
        </div>

        {/* Scrolling Services List */}
        <div className="lg:w-2/3 flex flex-col">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group py-12 md:py-16 border-t border-black/10 flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-500 items-start hover:bg-black/[0.01] cursor-default relative overflow-hidden"
            >
              {/* Title Column */}
              <div className="flex-1 max-w-sm">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-3 transition-transform duration-500 ease-out flex items-center gap-3 text-black">
                  {item.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="flex-1">
                <p className="text-base md:text-lg text-black/40 leading-relaxed font-light group-hover:text-black/70 transition-colors duration-500 pr-12">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Arrow Indicator */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-500 hidden md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-black/30 group-hover:text-black transition-colors">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-black/10 w-full" />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
