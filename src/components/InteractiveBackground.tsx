import React, { useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Grid for the floating ambient squares
  const squares = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
    }));
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-0 overflow-hidden bg-[#050505] pointer-events-none selection:bg-white selection:text-black"
    >
      {/* 1. GRAIN OVERLAY - For that cinematic texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

      {/* 2. INFINITE MESH GRID */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* 3. AMBIENT FLOATING PARTICLES - Very slow and subtle */}
      <div className="absolute inset-0 overflow-hidden">
        {squares.map((sq) => (
          <motion.div
            key={sq.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -100, 0],
              x: [0, 50, 0]
            }}
            transition={{ 
              duration: sq.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: sq.delay
            }}
            style={{
                position: 'absolute',
                left: sq.left,
                top: sq.top,
                width: `${sq.size}px`,
                height: `${sq.size}px`,
                backgroundColor: 'white',
                borderRadius: '50%',
                filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* 4. DYNAMIC SPOTLIGHT - The "Unique" touch: High-end radial lens flare effect */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `
              radial-gradient(1000px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.04), transparent 80%),
              radial-gradient(400px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.02), transparent 60%),
              radial-gradient(150px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 40%)
            `
          ),
        }}
      />

      {/* 5. VIGNETTE - Focuses the eye to the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default InteractiveBackground;