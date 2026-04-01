import React from 'react';
import { motion } from 'framer-motion';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="bg-white text-black py-24 lg:py-32 px-6 lg:px-12 border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              We are a software development agency.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              We build custom applications, websites, and digital products for clients worldwide.
              Our focus is on clean code, simple design, and launching products that actually work for your business.
            </p>
          </motion.div>
        </div>

        {/* Minimal Stats Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
          {[
            { value: '150+', label: 'Products built' },
            { value: '4 Weeks', label: 'Average launch time' },
            { value: '100%', label: 'In-house team' },
            { value: '24/7', label: 'Client support' },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 border-r border-b border-black/10 flex flex-col justify-between min-h-[160px]"
            >
              <span className="text-4xl font-light tracking-tight text-black mb-4">
                {m.value}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
