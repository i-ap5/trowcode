import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const stack = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'PosgreSQL', 'Redis'] },
    { name: 'Infrastructure', items: ['AWS', 'Docker', 'Vercel', 'Cloudflare'] }
  ];

  return (
    <section className="bg-[#f8f8f8] text-[#121212] py-28 px-6 lg:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Section Info */}
          <div className="lg:w-1/3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-12">The Toolkit</p>
            <h2 className="text-4xl lg:text-6xl font-display font-light tracking-tighter leading-tight mb-8">
              Modern <br />
              <span className="font-bold">Engineering.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              We use battle-tested technologies to ensure your product is fast, secure, and built to last.
            </p>
          </div>

          {/* Clean List */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
            {stack.map((group, i) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-6"
              >
                <h4 className="text-xs font-bold text-black uppercase tracking-[0.2em] pb-4 border-b border-black/5">{group.name}</h4>
                <div className="flex flex-col gap-3">
                  {group.items.map(item => (
                    <span key={item} className="text-lg text-gray-500 font-light">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;