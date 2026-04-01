import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hyperspeed from './Hyperspeed';

const SplitText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: (delay / 1000) + (i * 0.08),
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 pt-32 pb-24 overflow-hidden bg-black">
      {/* High-fidelity Hyperspeed Three.js Implementation */}
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => { },
          onSlowDown: () => { },
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 3,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2.5,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 50,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [80, 120],
          movingCloserSpeed: [-150, -200],
          carLightsLength: [12, 80],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xffffff, 0x999999, 0x444444],
            rightCars: [0xffffff, 0xcccccc, 0x777777],
            sticks: 0xffffff
          }
        }}
      />

      {/* Gradient vignette to ground the typography */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />

      <motion.div
        style={{ opacity: opacityFade, y: contentY }}
        className="max-w-7xl mx-auto text-center flex flex-col items-center relative z-10 w-full"
      >
        <h1 className="text-[clamp(3.5rem,15vw,10.5rem)] font-display font-bold leading-[0.82] tracking-tighter text-white mb-10 selection:bg-white selection:text-black">
          <SplitText text="Build to" delay={300} />
          <br />
          <SplitText text="work." className=" text-white/60" delay={700} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-2xl text-lg sm:text-2xl text-slate-400 font-normal leading-relaxed mb-16 px-4"
        >
          No fluff. No overhead. We engineer high-performance business infrastructure designed for absolute efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="h-16 px-12 rounded-full bg-white text-black text-lg font-bold transition-all shadow-2xl flex items-center justify-center gap-3"
          >
            Start project
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>

          <motion.button
            onClick={() => navigate('/portfolio')}
            whileHover={{ scale: 1.05, borderColor: '#fff' }}
            className="h-16 px-12 rounded-full border border-white/20 text-white text-lg font-bold backdrop-blur-sm transition-all"
          >
            Portfolio
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;