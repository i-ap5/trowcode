import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-40 px-6 lg:px-12 relative overflow-hidden text-center bg-black">
      {/* --- ENRICHED BACKGROUND: Depth Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* Grid Pattern to fill the "empty" space */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center gap-12">
        {/* Modern Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-slate-400 tracking-[0.4em] uppercase">
          <span className="size-1 bg-primary rounded-full animate-pulse" />
          Enterprise Ready
        </div>

        {/* --- FIXED TITLE: Guaranteed Visibility --- */}
        <h2 className="text-5xl md:text-8xl font-display font-light text-white tracking-tighter leading-[0.95]">
          Transform Your <br/> 
          <span 
            className="font-bold text-white"
            style={{
              background: 'linear-gradient(to right, #ffffff, #64748b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block', // Crucial for visibility
              paddingBottom: '0.1em'   // Prevents descenders from clipping
            }}
          >
            Digital Infrastructure
          </span>
        </h2>

        <p className="text-xl text-slate-500 max-w-2xl font-normal leading-relaxed">
          Partner with <span className="text-white">Trowcode</span> to engineer custom systems that scale. <br className="hidden md:block"/> 
          Built to work, designed to last. Let's discuss your vision.
        </p>

        {/* Action Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group h-16 min-w-[300px] bg-white text-black font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          Book a Free Consultation
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </motion.button>

        {/* Trust Markers */}
        <div className="flex flex-wrap justify-center gap-10 text-[10px] font-mono font-bold text-slate-600 uppercase tracking-[0.2em] pt-8">
          <span className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-primary text-sm group-hover:scale-120 transition-transform">verified_user</span>
            Direct Senior Access
          </span>
          <span className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-primary text-sm group-hover:scale-120 transition-transform">block</span>
            No Sales Agents
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;