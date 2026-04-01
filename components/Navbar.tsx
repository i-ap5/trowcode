import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from "@/assets/logo.svg?react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
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
    { name: 'Work', href: '/#portfolio' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${scrolled ? 'bg-white border-b border-black/10' : 'bg-transparent'}`}>
         <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
               {/* Logo transitions from white (over Hero) to black (when scrolled) */}
               <Logo className={`size-6 transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'}`} />
               <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>Trowcode</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
               {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} onClick={() => handleNavClick(link.href)} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-500 hover:text-black' : 'text-white/70 hover:text-white'}`}>
                     {link.name}
                  </Link>
               ))}
               <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className={`px-6 h-10 rounded-full text-sm font-medium transition-colors ${scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}>
                  Contact Us
               </button>
            </nav>

            <button
               className={`md:hidden flex items-center justify-center p-2 rounded transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               <span className="material-symbols-outlined">
                  {mobileMenuOpen ? 'close' : 'menu'}
               </span>
            </button>
         </div>
      </header>

      {/* Basic Mobile Menu */}
      {mobileMenuOpen && (
         <div className="fixed inset-0 z-[120] bg-white flex flex-col p-6 md:hidden">
            <div className="h-20 flex justify-between items-center mb-8 border-b border-black/10">
               <div className="flex items-center gap-2">
                 <Logo className="size-6 fill-black" />
                 <span className="text-lg font-medium text-black tracking-tight">Trowcode</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)}>
                  <span className="material-symbols-outlined text-black">close</span>
               </button>
            </div>

            <div className="flex flex-col gap-6">
               {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} onClick={() => handleNavClick(link.href)} className="text-2xl font-medium text-black">
                     {link.name}
                  </Link>
               ))}
            </div>

            <div className="mt-auto pb-8">
               <button onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full h-14 rounded-full bg-black text-white text-base font-medium">
                  Contact Us
               </button>
            </div>
         </div>
      )}
    </>
  );
};

export default Navbar;