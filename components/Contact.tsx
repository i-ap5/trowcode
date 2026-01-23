import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative min-h-screen bg-black flex items-center justify-center py-32 px-6 lg:px-12 overflow-hidden">
      
      {/* --- STRUCTURAL GRID (Fills the "Empty" feeling) --- */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff20 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 items-end">
        
        {/* --- LEFT: MONUMENTAL BLOCK (Span 5) --- */}
        <div className="lg:col-span-5 flex flex-col justify-end pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="size-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-[10px] font-mono font-bold tracking-[0.5em] uppercase">Inquiry Protocol</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-10">
            Let’s build <br />
            <span className="text-white/10 italic">something real.</span>
          </h2>
          
          <div className="border-l border-white/10 pl-8 space-y-12">
            <p className="text-slate-500 text-lg md:text-xl font-normal leading-relaxed max-w-sm">
              Architecture over fluff. Send your system requirements for a technical brief.
            </p>
            
            <div className="space-y-6 font-mono">
              <div className="group">
                <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-1">Electronic_Mail</p>
                <p className="text-lg text-white group-hover:text-primary transition-colors italic">hello@trowcode.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- MIDDLE: SPACING DIVIDER (Span 1) --- */}
        <div className="hidden lg:col-span-1 lg:flex justify-center h-full items-end pb-12">
          <div className="w-px h-64 bg-gradient-to-t from-white/20 to-transparent" />
        </div>

        {/* --- RIGHT: THE INTERFACE (Span 6) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative bg-[#080808] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl shadow-2xl">
            {/* Form Title for Structure */}
            <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
               <span className="text-[10px] font-mono text-slate-500 uppercase">System_Entry_Form</span>
               <span className="text-[10px] font-mono text-primary animate-pulse">Ready_to_Initialize</span>
            </div>

            <form className="space-y-10">
              <div className="relative border-b border-white/10 pb-4 focus-within:border-primary transition-colors">
                <label className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-2">01 // Identity</label>
                <input type="text" placeholder="Full Name" className="w-full bg-transparent text-white text-lg outline-none placeholder:text-white/5" />
              </div>

              <div className="relative border-b border-white/10 pb-4 focus-within:border-primary transition-colors">
                <label className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-2">02 // Electronic Mail</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-transparent text-white text-lg outline-none placeholder:text-white/5" />
              </div>

              <div>
                <label className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-6">03 // Service Intent</label>
                <div className="flex flex-wrap gap-2">
                  {['Web System', 'SaaS', 'ERP', 'E-com'].map(type => (
                    <button key={type} type="button" className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] text-slate-400 hover:border-primary transition-all">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative border-b border-white/10 pb-4 focus-within:border-primary transition-colors">
                <label className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-2">04 // Briefing</label>
                <textarea rows={2} placeholder="Vision details..." className="w-full bg-transparent text-white text-lg outline-none placeholder:text-white/5 resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full h-16 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3"
              >
                Initiate Project
                <span className="material-symbols-outlined text-sm">north_east</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-white/5 hidden xl:block" />
      <div className="absolute bottom-20 right-12 opacity-20 font-mono text-[8px] text-white tracking-[1em] uppercase rotate-90 origin-right">
        Fidelity_Verified
      </div>
    </section>
  );
};

export default Contact;