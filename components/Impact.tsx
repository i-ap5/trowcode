import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
              duration: 1,
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

const Impact: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  return (
    <section 
      id="impact" 
      ref={containerRef}
      className="relative h-[150vh] lg:h-[180vh] bg-black"
    >
      {/* Sticky container that keeps the section in viewport for a while */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden border-t border-white/5">
        <motion.div 
          style={{ width: lineWidth }}
          className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start mb-16 lg:mb-32">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white selection:bg-white selection:text-black">
                <SplitText text="We are a software development agency." delay={100} />
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg text-slate-400 leading-relaxed">
                We build custom applications, websites, and digital products for clients worldwide.
                Our focus is on clean code, simple design, and launching products that actually work for your business.
              </p>
            </motion.div>
          </div>

          {/* Minimal Stats Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5">
            {[
              { value: '150+', label: 'Products built' },
              { value: '4 Weeks', label: 'Average launch time' },
              { value: '100%', label: 'In-house team' },
              { value: '24/7', label: 'Client support' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 border-r border-b border-white/5 flex flex-col justify-between min-h-[140px] lg:min-h-[160px] group transition-colors"
              >
                <span className="text-4xl font-light tracking-tight text-white mb-4">
                  {m.value}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
