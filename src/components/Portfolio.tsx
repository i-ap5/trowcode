import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { projects, ProjectCategory } from './PortfolioData';

const categories: (ProjectCategory | 'All')[] = ['All', 'Website', 'Mobile App', 'Custom Software'];

// ── Global LRU Iframe Manager ──────────────────────────────────────
// Caps iframes safely but doesn't instantly destroy them on scroll.
// Keeps them loaded until the slot is needed by a newly visible card.
const getMaxIframes = () => {
  if (typeof window === 'undefined') return 2;
  return window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4;
};

const activeIframes: string[] = []; // LRU queue of mounted projectIds
const visibleIframes = new Set<string>();
const subscribers = new Map<string, (mounted: boolean) => void>();

function mountIframe(projectId: string) {
  if (!activeIframes.includes(projectId)) {
    activeIframes.push(projectId);
    
    if (activeIframes.length > getMaxIframes()) {
      // Find oldest non-visible iframe
      const oldestNonVisibleIdx = activeIframes.findIndex(id => !visibleIframes.has(id));
      let removedId: string;
      if (oldestNonVisibleIdx !== -1) {
        removedId = activeIframes.splice(oldestNonVisibleIdx, 1)[0];
      } else {
        removedId = activeIframes.shift()!; // remove oldest even if visible (fallback)
      }
      const notify = subscribers.get(removedId);
      if (notify) notify(false);
    }
    
    const notify = subscribers.get(projectId);
    if (notify) notify(true);
  } else {
    // If already active, move it to the end (most recently used)
    const idx = activeIframes.indexOf(projectId);
    activeIframes.splice(idx, 1);
    activeIframes.push(projectId);
  }
}

function handleCardVisibility(projectId: string, visible: boolean) {
  if (visible) {
    visibleIframes.add(projectId);
    mountIframe(projectId);
  } else {
    visibleIframes.delete(projectId);
  }
}
// ────────────────────────────────────────────────────────────────────

const SimpleMockup: React.FC<{ image: string; title: string; subtitle: string; link?: string; fit?: 'cover' | 'contain' | 'scale-down'; isMobile?: boolean; projectId: string }> = ({ image, title, subtitle, link, fit, isMobile, projectId }) => {
  const [isLiveReady, setIsLiveReady] = useState(false);
  const [scale, setScale] = useState(0.25);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ── Scale calculator ──
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const screenWidth = width - 12; 
        setScale(screenWidth / 1280);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // ── Register with LRU Manager ──
  useEffect(() => {
    if (isMobile || !link) return;
    
    subscribers.set(projectId, (mounted: boolean) => {
      setIsMounted(mounted);
      if (!mounted) setIsLiveReady(false);
    });

    return () => {
      subscribers.delete(projectId);
      visibleIframes.delete(projectId);
      const idx = activeIframes.indexOf(projectId);
      if (idx !== -1) activeIframes.splice(idx, 1);
    };
  }, [projectId, isMobile, link]);

  // ── IntersectionObserver: delayed mount when visible ──
  useEffect(() => {
    const el = cardRef.current;
    if (!el || isMobile || !link) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay load to ignore fast scrolling
          timeoutRef.current = setTimeout(() => {
            handleCardVisibility(projectId, true);
          }, 400); 
        } else {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          handleCardVisibility(projectId, false);
        }
      },
      { rootMargin: '0px 0px', threshold: 0.1 } // triggers when 10% is visible
    );

    observer.observe(el);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      observer.disconnect();
    };
  }, [projectId, isMobile, link]);

  const shouldRenderIframe = !isMobile && link && isMounted;

  return (
    <div ref={cardRef} className="relative w-full h-full flex flex-col items-center pt-2 group/item">
      {/* 
          UPPERCASE BOLD Minimal Title 
          - Shifted top padding to h-[12%] to ensure text is never hit by frame.
      */}
      <div className="h-[12%] flex flex-col justify-center text-center pointer-events-none px-4 flex-shrink-0">
        <h4 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.25em] leading-tight mb-0.5 text-black/80">
          {title}
        </h4>
        <p className="text-[9px] text-gray-400 font-light lowercase tracking-widest">
          {subtitle}
        </p>
      </div>

      {/* 
          Frame aligned to the ABSOLUTE BOTTOM - NO BOTTOW OVERLAP 
          - container covers remaining 88% height.
      */}
      <div className="relative h-[88%] w-full flex items-end justify-center overflow-hidden" ref={containerRef}>
        <div
          className={`
              ${isMobile ? 'h-[90%] aspect-[1/2]' : 'w-[96%] aspect-[16/10] max-h-[85%]'} 
              bg-[#0a0a0a] rounded-t-[1.4rem] md:rounded-t-[1.6rem] rounded-b-none 
              border-x-[4px] border-t-[4px] md:border-x-[6px] md:border-t-[6px] 
              border-[#1a1a1a] shadow-2xl relative transition-all duration-700 
              translate-y-4 group-hover/item:translate-y-1 flex flex-col
            `}
        >

          {/* The Notch/Island */}
          <div className="absolute top-0 left-0 right-0 flex justify-center z-30 pointer-events-none">
            <div className={`${isMobile ? 'w-8 h-1' : 'w-14 h-1.5 md:h-2'} bg-[#0a0a0a] rounded-b-md shadow-sm border-x border-b border-white/10`} />
          </div>

          <div className="relative flex-1 w-full bg-black rounded-t-[0.6rem] md:rounded-t-[0.8rem] overflow-hidden border border-white/5">
            <img
              src={image}
              alt={title}
              className={`absolute inset-0 w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-1000 z-10 ${isLiveReady ? 'opacity-0' : 'opacity-100'}`}
            />
            {shouldRenderIframe && (
              <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 ${isLiveReady ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
                <iframe
                  src={link}
                  title={title}
                  onLoad={() => setIsLiveReady(true)}
                  className="w-[1280px] h-[800px] border-none origin-top-left"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>
            )}
            {/* Loading indicator — visible while iframe is loading */}
            {shouldRenderIframe && !isLiveReady && (
              <div className="absolute inset-0 z-15 flex flex-col items-center justify-center gap-2 pointer-events-none">
                <div className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-[8px] md:text-[10px] text-white/50 font-light tracking-[0.2em] uppercase">Loading live preview</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface PortfolioProps {
  limit?: number;
  showExploreButton?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ limit = 999, showExploreButton }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const location = useLocation();

  const filteredProjects = activeCategory === 'All'
    ? projects.slice(0, limit)
    : projects.filter(p => p.categories.includes(activeCategory as ProjectCategory)).slice(0, limit);

  const shouldShowButton = showExploreButton !== undefined ? showExploreButton : location.pathname === '/';

  return (
    <section id="portfolio" className="bg-[#f5f5f5] text-black py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-32">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter mb-6 selection:bg-black selection:text-white leading-[1.1]">Selected work</h2>
            <p className="text-base text-gray-500 font-light max-w-lg">A gallery of digital infrastructure built for our global partners.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative py-2 text-xs md:text-sm font-medium transition-all group ${activeCategory === cat ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 md:gap-y-16 lg:gap-x-16 lg:gap-y-24">
          {filteredProjects.map((project, idx) => {
            const isMobileApp = project.categories.includes('Mobile App') && !project.categories.includes('Website');
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                {/* 
                    MOBILE HEIGHT FIX: 
                    Consistent height for all devices.
                */}
                <div className="mb-0 flex items-end justify-center overflow-hidden h-[300px] md:h-[280px] lg:h-[280px] relative border-b border-black/[0.04]">
                  <SimpleMockup
                    image={project.image}
                    title={project.title}
                    subtitle={project.categories.join(' & ')}
                    link={project.link}
                    fit={project.imageFit}
                    isMobile={isMobileApp}
                    projectId={project.id}
                  />
                </div>

                <div className="flex flex-col gap-3 mt-6 px-0 items-start text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-normal leading-tight tracking-tight">
                    <span className="font-medium">{project.title}:</span>
                    <span className="text-gray-400 md:text-gray-500 ml-1 font-light group-hover:text-black transition-colors duration-500">
                      {project.shortDesc}
                    </span>
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>

        {shouldShowButton && (
          <div className="mt-24 flex justify-center">
            <Link to="/portfolio" className="h-12 md:h-14 px-10 md:px-12 bg-transparent text-black border border-black text-xs md:text-sm font-bold tracking-widest flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 active:scale-95">
              Explore All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;