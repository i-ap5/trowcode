import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={`${className} inline`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.15em] last:mr-0 pb-[0.2em] -mb-[0.2em]">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: (delay / 1000) + (i * 0.05),
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block"
            >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const Process: React.FC = () => {
  const steps = [
    { title: 'Design', desc: 'We blueprint the software architecture and user experience to map exactly to your business strategy.' },
    { title: 'Develop', desc: 'Our engineers build your product in fast cycles using modern, high-performance technology stacks.' },
    { title: 'Deploy', desc: 'We launch your system onto secure, high-availability cloud infrastructure designed to never crash.' },
    { title: 'Dominate', desc: 'You scale your operations with reliable custom software that out-performs your competition.' }
  ];

  return (
    <section
      id="methodology"
      className="bg-white text-black py-20 lg:py-40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter selection:bg-black selection:text-white leading-[1.05]">
              <SplitText text="Design. Develop." delay={200} />
              <br />
              <SplitText text="Deploy. Dominate." delay={600} />
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl text-gray-400 font-light max-w-sm leading-relaxed"
          >
            A structured, repeatable engineering process tailored for high-stakes business infrastructure.
          </motion.p>
        </div>

        {/* Interactive 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black/5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 + 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col p-8 lg:p-12 border-b border-black/5 md:border-r last:border-r-0 cursor-default transition-colors duration-700 hover:bg-black overflow-hidden min-h-[320px] lg:min-h-[400px]"
            >
              {/* Background Number Accent */}
              <span className="text-[8rem] font-bold text-black/[0.02] group-hover:text-white/[0.05] absolute -right-4 -top-8 transition-colors duration-700 pointer-events-none select-none tracking-tighter">
                0{i + 1}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 group-hover:text-white/40 transition-colors duration-500 mb-12 lg:mb-20 block">
                  0{i + 1}
                </span>

                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 lg:mb-8 group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                  {step.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-500 leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-500">
                  {step.desc}
                </p>
                
                <div className="mt-auto pt-8">
                  {/* Pushing content line to bottom proportionally */}
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-4 w-0 group-hover:w-full h-px bg-white/20 transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
