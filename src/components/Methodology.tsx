import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Methodology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const steps = [
    { 
      num: '01', 
      title: 'We Listen', 
      desc: 'We sit down with you, understand your business, your customers, and what you actually need.',
      icon: 'hearing',
      accent: 'from-blue-500/20 to-transparent',
    },
    { 
      num: '02', 
      title: 'We Design', 
      desc: 'Before writing code, we map out exactly how everything works and looks. You approve every detail.',
      icon: 'draw',
      accent: 'from-violet-500/20 to-transparent',
    },
    { 
      num: '03', 
      title: 'We Build', 
      desc: 'Our engineers build with clean, fast, scalable code. Weekly updates so you always know the status.',
      icon: 'code',
      accent: 'from-emerald-500/20 to-transparent',
    },
    { 
      num: '04', 
      title: 'We Launch', 
      desc: 'We don\'t disappear after delivery. We launch, monitor, and keep it running. You focus on your business.',
      icon: 'rocket_launch',
      accent: 'from-amber-500/20 to-transparent',
    },
  ];

  // Progress line that fills as user scrolls
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%']);

  return (
    <section ref={sectionRef} id="methodology" className="py-28 lg:py-40 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Floating shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 size-[300px] border border-black/[0.03] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-10 size-[200px] border border-black/[0.03] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24 lg:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-black/25 uppercase tracking-[0.3em] mb-6"
          >
            How we work
          </motion.p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-black tracking-tight leading-[1.05] mb-8">
            {['Simple', 'process.'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 40 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {['Zero', 'surprises.'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 40 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em] text-black/12"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-black/40 max-w-xl mx-auto leading-relaxed"
          >
            From first call to final launch — no jargon, no hidden steps, no surprises.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Scroll-driven progress line */}
          <div className="absolute left-[29px] lg:left-[39px] top-0 bottom-0 w-px bg-black/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-black origin-top"
            />
          </div>

          <div className="space-y-6 lg:space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-8 lg:gap-12 group"
              >
                {/* Step circle */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                    className="size-[60px] lg:size-[80px] rounded-full bg-black flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:shadow-[0_12px_50px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-500"
                  >
                    <span className="material-symbols-outlined text-white text-2xl lg:text-3xl">{step.icon}</span>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`flex-1 p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-black/5 bg-gradient-to-br ${step.accent} group-hover:border-black/10 transition-all duration-500 group-hover:-translate-y-1`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-black/15 font-bold">{step.num}</span>
                    <div className="h-px flex-1 bg-black/5" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-black tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base lg:text-lg text-black/45 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 lg:mt-32 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12"
        >
          {[
            { icon: 'schedule', text: 'Average: 4–8 weeks' },
            { icon: 'chat', text: 'Weekly updates' },
            { icon: 'verified', text: 'No hidden costs' },
          ].map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2.5 text-sm text-black/25 hover:text-black/50 transition-colors cursor-default"
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              {item.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;