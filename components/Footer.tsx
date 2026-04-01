import React from 'react';
import Logo from "@/assets/logo.svg?react"; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-6 lg:px-12 z-20 relative">
       <div className="max-w-7xl mx-auto flex flex-col">
          
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 mb-32">
             <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-8 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                   <Logo className="size-10 fill-white" />
                   <span className="text-4xl font-medium tracking-tight">Trowcode</span>
                </div>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
                   A software development agency building digital products for clients worldwide. Quality and simplicity.
                </p>
             </div>
             
             <div className="flex flex-wrap gap-16 lg:gap-32">
                <div className="flex flex-col gap-6">
                   <span className="text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Company</span>
                   <a href="#solutions" className="text-lg text-white hover:text-gray-300 transition-colors">Services</a>
                   <a href="#methodology" className="text-lg text-white hover:text-gray-300 transition-colors">Process</a>
                   <a href="#portfolio" className="text-lg text-white hover:text-gray-300 transition-colors">Work</a>
                </div>
                <div className="flex flex-col gap-6">
                   <span className="text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Connect</span>
                   <a href="#contact" className="text-lg text-white hover:text-gray-300 transition-colors">Contact</a>
                   <a href="mailto:hello@trowcode.com" className="text-lg text-white hover:text-gray-300 transition-colors">Email</a>
                   <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors">LinkedIn</a>
                </div>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between pt-12 border-t border-white/20 text-sm text-gray-400 font-light">
             <span>© 2026 Trowcode. All rights reserved.</span>
             <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             </div>
          </div>

       </div>
    </footer>
  );
};

export default Footer;