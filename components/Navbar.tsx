import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
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
      const portfolioEl = document.getElementById('portfolio');

      const impactPos = impactEl?.getBoundingClientRect();
      const contactPos = contactEl?.getBoundingClientRect();
      const portfolioPos = portfolioEl?.getBoundingClientRect();

      // Detection logic for black background sections
      const isOverImpact = impactPos && impactPos.top <= 80 && impactPos.bottom >= 80;
      const isOverContact = contactPos && contactPos.top <= 80 && contactPos.bottom >= 80;
      
      // Hero section on Home page is black
      const isOverHero = latest < window.innerHeight && location.pathname === '/';

      // Switch colors based on background
      // Black background sections: Hero, Impact, Contact
      // White background sections: Portfolio Page, Solutions, Methodology
      const shouldBeLight = isOverHero || isOverImpact || isOverContact;
      
      // Special case: Portfolio route starts white. If we're at the top of /portfolio, we MUST be in "black text" mode.
      if (location.pathname === '/portfolio' && latest < 100) {
         setIsOnWhite(true);
      } else {
         setIsOnWhite(!shouldBeLight);
      }
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
            className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 
            ${scrolled ? (isOnWhite ? 'bg-white/90 border-b border-black/5' : 'bg-black/90 border-b border-white/5') : 'bg-transparent'} 
            ${scrolled ? 'h-16 md:h-20 backdrop-blur-xl' : 'h-20 md:h-24'}`}
         >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
               <Link to="/" className="flex items-center gap-2.5 group relative z-[160]" onClick={() => window.scrollTo(0, 0)}>
                  <Logo
                     className={`size-5 transition-all duration-300 ${mobileMenuOpen ? 'text-black' : (isDark ? 'text-white' : 'text-black')}`}
                  />
                  <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${mobileMenuOpen ? 'text-black' : (isDark ? 'text-white' : 'text-black')}`}>
                     Trowcode
                  </span>
               </Link>

               {/* Desktop Nav */}
               <nav className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                     <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`text-sm font-medium transition-colors ${mobileMenuOpen ? 'text-black' : (isDark ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-black')}`}
                     >
                        {link.name}
                     </Link>
                  ))}
                  <button
                     onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                     className={`px-8 h-11 rounded-none text-[13px] font-bold transition-all duration-300 active:scale-95 
                    ${mobileMenuOpen 
                      ? 'bg-black text-white' 
                      : (isDark 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-black text-white hover:bg-gray-800')}`}
                  >
                     Contact Us
                  </button>
               </nav>

               {/* Toggle Icon - HIGHEST Z-INDEX */}
               <button
                  className={`md:hidden relative z-[160] flex items-center justify-center size-10 rounded-full transition-all duration-300 active:scale-90 ${mobileMenuOpen ? 'text-black' : (isDark ? 'text-white bg-white/10' : 'text-black bg-black/5')}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  <div className="relative size-5">
                    <motion.span
                      animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                      className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rounded-full"
                    />
                    <motion.span
                      animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                      className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rounded-full"
                    />
                    <motion.span
                      animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                      className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rounded-full"
                    />
                  </div>
               </button>
            </div>
         </header>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {mobileMenuOpen && (
               <motion.div 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="fixed inset-0 z-[140] bg-white flex flex-col pt-24 md:hidden"
               >
                  <nav className="flex flex-col gap-2 p-8 pt-12">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 px-2">Navigation</span>
                     {navLinks.map((link, i) => (
                        <motion.div
                           key={link.name}
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ delay: 0.15 + (i * 0.08) }}
                        >
                           <Link 
                              to={link.href} 
                              onClick={() => handleNavClick(link.href)} 
                              className="text-4xl font-medium text-black tracking-tighter hover:pl-2 transition-all block py-3 border-b border-black/[0.05]"
                           >
                              {link.name}
                           </Link>
                        </motion.div>
                     ))}
                  </nav>

                  <div className="mt-auto p-8 pb-16 flex flex-col gap-8">
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-2 px-2 border-l-2 border-black/5"
                     >
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Quick Contact</span>
                        <a href="mailto:hello@trowcode.com" className="text-xl font-medium text-black tracking-tight underline underline-offset-4 decoration-black/10">hello@trowcode.com</a>
                     </motion.div>
                     <motion.button 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} 
                        className="w-full h-16 bg-black text-white text-[14px] font-bold uppercase tracking-widest active:scale-95 flex items-center justify-center"
                     >
                        Contact Us
                     </motion.button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default Navbar;