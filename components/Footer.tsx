import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-32 pb-16 px-6 lg:px-12 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="size-12 rounded-full bg-white flex items-center justify-center text-black">
                <span className="material-symbols-outlined text-2xl font-bold">bolt</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white tracking-tighter uppercase">TROWCODE</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-normal mb-10 max-w-sm">
              Engineering high-performance business infrastructure. Built to work, designed to lead.
            </p>
            <div className="flex gap-4">
              {['terminal', 'hub', 'rocket_launch'].map((icon) => (
                <a 
                  key={icon}
                  href="#" 
                  className="size-14 rounded-full glass flex items-center justify-center text-slate-400 hover:text-black hover:bg-white transition-all duration-500 border border-white/10"
                >
                  <span className="material-symbols-outlined text-2xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
            <div className="flex flex-col gap-8">
              <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.4em]">Protocol</h3>
              <ul className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
                <li><a href="#methodology" className="hover:text-white transition-colors">Design Logic</a></li>
                <li><a href="#methodology" className="hover:text-white transition-colors">Core Development</a></li>
                <li><a href="#methodology" className="hover:text-white transition-colors">Deployment Flow</a></li>
                <li><a href="#methodology" className="hover:text-white transition-colors">Dominance Index</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.4em]">Systems</h3>
              <ul className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Aibillo Suite</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Custom ERP</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Predictive AI</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Fleet Logic</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.4em]">Company</h3>
              <ul className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Talk to us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Vault</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 Trowcode Engineering Collective</p>
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5">
              <span className="size-1.5 rounded-full bg-white shadow-[0_0_8px_white]"></span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Protocol Active v4.5.1</span>
            </div>
          </div>
          <div className="text-[10px] font-bold text-slate-700 uppercase tracking-[1em] font-display">Systems that work</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;