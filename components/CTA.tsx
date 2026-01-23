
import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-12 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 tracking-[0.2em] uppercase">
          Enterprise Ready
        </div>
        <h2 className="text-5xl md:text-8xl font-display font-light text-white tracking-tight leading-[1.1]">
          Transform Your <br/> <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Digital Infrastructure</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl font-light">
          Partner with Trowcode to engineer custom solutions that scale. Built to work, designed to last. Let's discuss your vision.
        </p>
        <button className="group h-16 min-w-[280px] bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl transition-all shadow-glow hover:scale-[1.02] flex items-center justify-center gap-3">
          Book a Free Consultation
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
        <div className="flex gap-10 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
            Direct Senior Access
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">block</span>
            No Sales Agents
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
