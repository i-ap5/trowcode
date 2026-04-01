import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';

/* ── Animated Counter ─────────────────────────────────────────── */
const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2200;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Word-by-word Reveal ──────────────────────────────────────── */
const RevealLine = ({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) => (
  <span className={className}>
    {text.split(' ').map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
        <motion.span
          initial={{ y: '110%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </span>
    ))}
  </span>
);

/* ── Marquee ──────────────────────────────────────────────────── */
const Marquee = ({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) => (
  <div className="overflow-hidden whitespace-nowrap">
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      className="inline-flex"
    >
      {children}
      {children}
    </motion.div>
  </div>
);

/* ── Section ──────────────────────────────────────────────────── */
const Ecosystem: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const stats = [
    { value: 30, suffix: '+', label: 'Projects Shipped' },
    { value: 99, suffix: '%', label: 'Client Retention' },
    { value: 3, suffix: 'x', label: 'Faster Delivery' },
    { value: 24, suffix: '/7', label: 'Support' },
  ];

  const marqueeItems = [
    'Web Apps', '•', 'E-Commerce', '•', 'Custom Software', '•', 'Mobile Apps', '•', 
    'SaaS Platforms', '•', 'Business Tools', '•', 'Billing Systems', '•', 'Dashboards', '•',
  ];

  return (
    <section ref={sectionRef} className="relative bg-white py-28 lg:py-36 overflow-hidden">
      {/* Parallax background accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-black/[0.02] blur-[100px] pointer-events-none"
      />

      {/* ── Marquee ticker ────────────────────────────────── */}
      <div className="mb-20 border-y border-black/5 py-5">
        <Marquee speed={40}>
          {marqueeItems.map((item, i) => (
            <span key={i} className={`mx-4 text-sm font-medium tracking-wide ${item === '•' ? 'text-black/10' : 'text-black/25 uppercase'}`}>
              {item}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Big Statement ───────────────────────────────── */}
        <div className="mb-24 max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold text-black tracking-tight leading-[1.08]">
            <RevealLine text="We build software that" />
            <br />
            <RevealLine text="actually works." className="text-black/15" delay={0.3} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-black/40 max-w-xl mt-8 leading-relaxed"
          >
            Not just pretty websites — real tools that help your business grow, save time, and make more money.
          </motion.p>
        </div>

        {/* ── Stats ───────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-8 lg:p-10 rounded-3xl border border-black/5 bg-gradient-to-b from-black/[0.01] to-black/[0.03] hover:border-black/15 transition-colors duration-500 cursor-default"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl font-display font-black text-black tracking-tighter leading-none mb-3">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-black/35 font-medium">{stat.label}</span>

              {/* Hover shine effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-12 group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;