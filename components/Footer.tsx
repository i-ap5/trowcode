import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-40 pb-16 px-6 lg:px-12 mt-auto relative z-10 overflow-hidden">
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          
          {/* --- LEFT: MONUMENTAL BRANDING --- */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="size-10 rounded-full bg-white flex items-center justify-center text-black">
                  <span className="material-symbols-outlined text-xl font-black">bolt</span>
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tighter uppercase ">TROWCODE</h2>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none mb-8 max-w-md">
                Architecting the <br />
                <span className="text-white/10 
                
                ">Digital Standard.</span>
              </h3>
            </div>

            {/* Social / Terminal Links */}
            <div className="flex gap-3 mt-12">
              {['terminal', 'data_object', 'public'].map((icon) => (
                <a 
                  key={icon}
                  href="#" 
                  className="size-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/20 transition-all duration-500 group"
                >
                  <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT: MINIMAL PROTOCOLS (Packed Links) --- */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-12 lg:gap-8">
            <div className="flex flex-col gap-10">
              <div className="space-y-1">
                <h4 className="text-primary font-mono text-[9px] font-bold uppercase tracking-[0.4em]">Protocol_ID</h4>
                <p className="text-white font-bold text-lg tracking-tight">System Navigation</p>
              </div>
              <ul className="flex flex-col gap-5 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                <li><a href="#solutions" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#methodology" className="hover:text-white transition-colors">Framework</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Inquiry</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-10">
              <div className="space-y-1">
                <h4 className="text-slate-600 font-mono text-[9px] font-bold uppercase tracking-[0.4em]">Global_HQ</h4>
                <p className="text-white font-bold text-lg tracking-tight">Kerala, India</p>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-loose">
                  Available for worldwide <br /> 
                  remote engineering <br /> 
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR: TECHNICAL ANNOTATIONS --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-slate-700 text-[9px] font-mono font-bold uppercase tracking-[0.2em]">
              © 2026 Trowcode. All rights reserved. Registered_Internal_Protocol
            </p>
            <div className="flex items-center gap-6">
              {/* <div className="flex items-center gap-2">
                <div className="size-1 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Server_Status: Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Latency: 12ms</span>
              </div> */}
            </div>
          </div>
          
          <div className="text-[10px] font-bold text-white/5 uppercase tracking-[1.5em] font-display hidden md:block">
            BUILT TO WORK
          </div>
        </div>
      </div>
    </footer>);
};

export default Footer;