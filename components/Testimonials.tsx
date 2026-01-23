import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      quote: "Trowcode built our billing system from scratch. Now we spend half the time on paperwork and more time actually running our business. Best decision we made this year.",
      author: "Mark S.", role: "Small Business Owner", img: 'https://picsum.photos/seed/human1/100/100'
    },
    { 
      quote: "Our previous software was a nightmare. Trowcode fixed the bugs and simplified the UI. Our team finally enjoys using the dashboard. No more training manuals needed!",
      author: "Jane D.", role: "Operations Manager", img: 'https://picsum.photos/seed/human2/100/100'
    }
  ];

  return (
    <section className="py-40 px-6 lg:px-12 bg-background-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">People love <span className="text-primary">how it works.</span></h2>
          <p className="text-slate-400 text-lg font-light">Real feedback from real people using our systems every day.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[2.5rem] relative group"
            >
              <p className="text-xl md:text-2xl font-light text-slate-100 leading-relaxed mb-12 italic">"{rev.quote}"</p>
              
              <div className="flex items-center gap-5">
                <img src={rev.img} alt={rev.author} className="size-16 rounded-full border-2 border-primary/20" />
                <div>
                  <p className="text-lg font-bold text-white">{rev.author}</p>
                  <p className="text-sm text-slate-500">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;