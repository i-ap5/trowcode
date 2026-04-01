import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from "@/assets/logo.svg?react";

const Navbar: React.FC = () => {
   const [scrolled, setScrolled] = useState(false);
   const [isOnWhite, setIsOnWhite] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const { scrollY } = useScroll();
   const location = useLocation();

   useMotionValueEvent(scrollY, "change", (latest) => {
      setScrolled(latest > 50);

      const impactEl = document.getElementById('impact');
      const contactEl = document.getElementById('contact');

      const impactPos = impactEl?.getBoundingClientRect();
      const contactPos = contactEl?.getBoundingClientRect();

      const isOverImpact = impactPos && impactPos.top <= 80 && impactPos.bottom >= 80;
      const isOverContact = contactPos && contactPos.top <= 80 && contactPos.bottom >= 80;
      const isOverHero = latest < window.innerHeight;

      // Dark mode if over Hero, Impact, or Contact (which are all bg-black)
      setIsOnWhite(!(isOverHero || isOverImpact || isOverContact));
   });

   const handleNavClick = (href: string) => {
      setMobileMenuOpen(false);
      if (href.startsWith('/#')) {
         const hash = href.substring(2);
         if (location.pathname === '/') {
            const element = document.getElementById(hash);
            if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
            }
         }
      }
   };

   const navLinks = [
      { name: 'Services', href: '/#solutions' },
      { name: 'Process', href: '/#methodology' },
      { name: 'Portfolio', href: '/portfolio' },
   ];

   const isDark = !isOnWhite;

   return (
      <>
         <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 
            ${scrolled ? (isOnWhite ? 'bg-white/80 border-b border-black/10' : 'bg-black/10 border-b border-white/5') : 'bg-transparent'} 
            ${scrolled ? 'h-20 backdrop-blur-md' : 'h-24'}`}
         >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
               <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
                  <Logo
                     className={`size-6 transition-all duration-300 ${isDark ? 'text-white' : 'text-black'}`}
                  />
                  <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
                     Trowcode
                  </span>
               </Link>

               <nav className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                     <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`text-sm font-medium transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                     >
                        {link.name}
                     </Link>
                  ))}
                  <button
                     onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                     className={`px-8 h-12 rounded-none text-[14px] font-bold transition-all duration-300 active:scale-95 
                    ${isDark 
                      ? 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white hover:text-black' 
                      : 'bg-black text-white hover:bg-gray-800 shadow-sm'}`}
                  >
                     Contact Us
                  </button>
               </nav>

               <button
                  className={`md:hidden flex items-center justify-center p-2 rounded transition-colors ${isDark ? 'text-white' : 'text-black'}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  <span className="material-symbols-outlined">
                     {mobileMenuOpen ? 'close' : 'menu'}
                  </span>
               </button>
            </div>
         </header>

         {/* Mobile Menu */}
         {mobileMenuOpen && (
            <div className="fixed inset-0 z-[120] bg-black flex flex-col p-6 md:hidden">
               <div className="h-20 flex justify-between items-center mb-8 border-b border-white/10">
                  <div className="flex items-center gap-2">
                     <Logo className="size-6 fill-white text-white" />
                     <span className="text-lg font-bold text-white tracking-tight uppercase">Trowcode</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)}>
                     <span className="material-symbols-outlined text-white">close</span>
                  </button>
               </div>

               <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                     <Link key={link.name} to={link.href} onClick={() => handleNavClick(link.href)} className="text-4xl font-light text-white tracking-tight">
                        {link.name}
                     </Link>
                  ))}
               </div>

               <div className="mt-auto pb-8">
                  <button onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full h-16 rounded-full bg-white text-black text-sm font-bold uppercase tracking-widest">
                     Contact Us
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Navbar;