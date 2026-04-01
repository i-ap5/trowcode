import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-12 text-center border-t border-black/5">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
        >
          Ready to start?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 mb-8 font-light max-w-lg mx-auto leading-relaxed"
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
            className="inline-flex items-center justify-center px-12 h-14 bg-black text-white rounded-none text-base font-bold transition-all hover:bg-gray-800 active:scale-95 shadow-lg"
          >
            Start a project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;