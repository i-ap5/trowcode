import React, { useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const InteractiveBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Generate a fixed set of squares for performance
  const squares = useMemo(() => {
    const size = 15;
    return Array.from({ length: size * size }).map((_, i) => ({
      id: i,
      x: (i % size) * (100 / size),
      y: Math.floor(i / size) * (100 / size),
    }));
  }, []);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none"
    >
      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Main Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.1]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Interaction Spotlight Reveal */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08), transparent 70%)`
          ),
        }}
      />
    </div>
  );
};

export default InteractiveBackground;