import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
// Assuming Logo is your SVG component
import Logo from "@/assets/logo.svg?react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    // Check if it's a hash link
    if (href.startsWith('/#')) {
      const hash = href.substring(2); // remove '/#'
      if (location.pathname === '/') {
        // We are on home page, scroll to section
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We are on another page, navigate to home with hash is handled by browser if we use <a> or Link,
        // but react-router-dom Link with hash works.
        // However, standard scrollIntoView logic often needs a delay after navigation.
        // For simplicity, we can let the Link component handle the navigation, 
        // and add a useEffect in Layout or Home to list for hash changes?
        // Or just use native behavior.
      }
    }
  };

  const navLinks = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Methodology', href: '/#methodology' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-8 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="size-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Logo className="size-8" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tighter">Trowcode</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('/#');
              // If on home page and it's a hash link, use simple anchor scrolling or handled by Link

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[11px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            {/* FIXED DESKTOP BUTTON */}
            <button
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                else window.location.href = '/#contact';
              }}
              className="hidden sm:flex items-center justify-center h-11 px-8 rounded-full bg-white text-black text-xs font-bold transition-all hover:bg-primary hover:text-white active:scale-95 shadow-xl"
            >
              Talk to us
            </button>

            <button
              className="md:hidden flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] z-[120] bg-[#080808] border-l border-white/10 md:hidden flex flex-col p-10"
            >
              <div className="flex justify-end mb-16">
                <button onClick={() => setMobileMenuOpen(false)}>
                  <span className="material-symbols-outlined text-white text-2xl">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-4xl font-bold text-white uppercase tracking-tighter hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const contactEl = document.getElementById('contact');
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#contact';
                  }}
                  className="w-full h-16 rounded-2xl bg-white text-black text-lg font-bold shadow-2xl active:scale-95 transition-transform"
                >
                  Talk to us
                </button>
                <p className="mt-8 text-slate-600 text-[10px] text-center uppercase tracking-[0.5em] font-bold">Protocol Active</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;