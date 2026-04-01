import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    { title: 'Design', desc: 'We blueprint the software architecture and user experience to map exactly to your business strategy.' },
    { title: 'Develop', desc: 'Our engineers build your product in fast cycles using modern, high-performance technology stacks.' },
    { title: 'Deploy', desc: 'We launch your system onto secure, high-availability cloud infrastructure designed to never crash.' },
    { title: 'Dominate', desc: 'You scale your operations with reliable custom software that out-performs your competition.' }
  ];

  return (
    <section id="methodology" className="bg-white text-black py-24 lg:py-40 px-6 lg:px-12 border-b border-black/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 lg:max-w-2xl">
            Design. Develop. Deploy. Dominate.
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-lg">
             A structured, repeatable engineering process.
          </p>
        </div>

        {/* Optimised 4-Stage Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 group">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative flex flex-col pt-8 border-t-2 border-black/10 hover:border-black transition-colors duration-500 cursor-default"
            >
              {/* Massive Structural Number */}
              <span className="absolute -top-[4.5rem] left-0 text-[100px] leading-none font-bold text-black/[0.03] -z-10 select-none">
                 0{i+1}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
                 {step.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed font-light pr-4">
                 {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
