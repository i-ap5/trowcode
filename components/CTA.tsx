import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6 lg:px-12 border-b border-black/10 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8"
        >
          Ready to start?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 mb-10 font-light max-w-lg mx-auto"
        >
          Tell us about your project and we'll get back to you within 24 hours with an estimate and timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 h-14 bg-black text-white rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
          >
            Start a project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;