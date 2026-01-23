// import React from 'react';
// import { motion } from 'framer-motion';

// const Methodology: React.FC = () => {
//   const phases = [
//     { num: '01', title: 'Design', icon: 'architecture', desc: 'We architect intuitive blueprints that bridge the gap between complex logic and human interaction.', seed: 'blueprint-sketch' },
//     { num: '02', title: 'Develop', icon: 'terminal', desc: 'Our engineering team translates vision into high-concurrency code built for speed and reliability.', seed: 'code-editor' },
//     { num: '03', title: 'Deploy', icon: 'rocket_launch', desc: 'Seamless integration into your infrastructure with zero downtime and automated scaling.', seed: 'cloud-deployment' },
//     { num: '04', title: 'Dominate', icon: 'monitoring', desc: 'Ongoing optimization and intelligence gathering to ensure your system leads the market.', seed: 'analytics-dashboard' },
//   ];

//   return (
//     <section id="methodology" className="py-40 px-6 lg:px-12 bg-background relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-28">
//           <div className="flex items-center gap-4 mb-6">
//             <span className="h-px w-12 bg-primary"></span>
//             <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Proprietary Protocol</span>
//           </div>
//           <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-10">
//             The 4D <span className="text-slate-800">Framework.</span>
//           </h2>
//           <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-normal leading-relaxed">
//             Our systematic approach to engineering excellence. Four dimensions of performance, one goal: Systems that just work.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-32">
//           {phases.map((phase, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
//             >
//               <div className="w-full lg:w-1/2">
//                 <div className="flex items-center gap-6 mb-8">
//                   <span className="text-6xl font-display font-bold text-white/10">{phase.num}</span>
//                   <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
//                     <span className="material-symbols-outlined">{phase.icon}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-4xl sm:text-5xl font-display font-bold text-white mb-8 tracking-tight">{phase.title}</h3>
//                 <p className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed mb-10">{phase.desc}</p>
//                 <div className="h-1 w-24 bg-primary rounded-full"></div>
//               </div>

//               <div className="w-full lg:w-1/2">
//                 <div className="aspect-video rounded-[2.5rem] overflow-hidden glass group border border-white/10">
//                   <img 
//                     src={`https://picsum.photos/seed/${phase.seed}/1000/600`} 
//                     alt={phase.title} 
//                     className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Methodology;


import React from 'react';
import { motion } from 'framer-motion';

const Methodology: React.FC = () => {
  const phases = [
    { 
      num: '01', 
      title: 'Design', 
      icon: 'architecture', 
      desc: 'Architecting intuitive blueprints that bridge complex logic and human interaction through high-fidelity wireframing.',
      visual: (
        <div className="relative size-full bg-black flex items-center justify-center">
          {/* Layered Blueprint Effect */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff20 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute size-[300px] border border-white/5 rounded-full" 
          />
          <div className="relative z-10 glass-card p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="size-2 rounded-full bg-primary" />
              <div className="size-2 rounded-full bg-white/20" />
              <div className="size-2 rounded-full bg-white/20" />
            </div>
            <div className="space-y-3">
              <div className="h-2 w-32 bg-white/20 rounded-full" />
              <div className="h-2 w-24 bg-white/10 rounded-full" />
              <div className="h-8 w-full border border-primary/30 rounded-lg flex items-center px-3">
                <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 2 }} className="h-full w-1/2 bg-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 font-mono text-[8px] text-slate-500 uppercase tracking-[0.5em]">Auth_Sequence_Active</div>
        </div>
      )
    },
    { 
      num: '02', 
      title: 'Develop', 
      icon: 'terminal', 
      desc: 'Translating vision into high-concurrency code designed for extreme vertical scale and zero technical debt.',
      visual: (
        <div className="relative size-full bg-[#050505] p-8 font-mono">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <div className="size-3 rounded-full bg-primary/20" />
            <span className="text-[10px] text-slate-400">ENGINE://STAGING_DEPLOY</span>
          </div>
          <div className="space-y-3 text-[11px]">
            <div className="flex justify-between">
              <span className="text-primary">BUILD_OPTIMIZATION</span>
              <span className="text-white/40">98%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '98%' }} transition={{ duration: 1.5 }} className="h-full bg-primary shadow-[0_0_10px_#dbe890]" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-3 border border-white/5 rounded-lg bg-white/[0.02]">
                <div className="text-[8px] text-slate-500 mb-1">LATENCY</div>
                <div className="text-lg font-bold text-white">12<span className="text-primary text-[10px] ml-1">ms</span></div>
              </div>
              <div className="p-3 border border-white/5 rounded-lg bg-white/[0.02]">
                <div className="text-[8px] text-slate-500 mb-1">UPTIME</div>
                <div className="text-lg font-bold text-white">99.99<span className="text-primary text-[10px] ml-1">%</span></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      num: '03', 
      title: 'Deploy', 
      icon: 'rocket_launch', 
      desc: 'Orchestrating seamless infrastructure integration with automated failovers and global CDN edge delivery.',
      visual: (
        <div className="relative size-full bg-black flex flex-col items-center justify-center p-8">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="size-32 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center relative z-10"
          >
            <span className="material-symbols-outlined text-primary text-4xl animate-pulse">public</span>
          </motion.div>
          <div className="mt-8 w-full space-y-2 relative z-10">
            <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
              <span>Traffic Distribution</span>
              <span className="text-white">Active</span>
            </div>
            <div className="flex gap-1 h-1">
              {[1,2,3,4,5,6,7,8].map(i => <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, delay: i*0.1 }} className="flex-1 bg-primary" />)}
            </div>
          </div>
        </div>
      )
    },
    { 
  num: '04', 
  title: 'Dominate', 
  icon: 'trending_up', 
  desc: 'Leveraging behavioral analytics and ongoing intelligence to ensure your system sustains market-leading performance.',
  visual: (
    <div className="relative size-full bg-[#050505] p-8 flex flex-col justify-between font-mono">
      {/* 1. Header with Status */}
      <div className="flex justify-between items-start relative z-10">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-tight">
          System_Intelligence<br/>
          <span className="text-primary font-bold">Priority: High</span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white tracking-tighter animate-pulse">+284%</div>
          <div className="text-[8px] text-primary uppercase font-bold">Conversion_Yield</div>
        </div>
      </div>

      {/* 2. Kinetic Growth Chart (Fixed Rendering) */}
      <div className="flex items-end gap-1.5 h-24 mb-4 relative z-10">
         {[30, 50, 45, 80, 60, 90, 100].map((h, i) => (
           <motion.div 
             key={i} 
             initial={{ height: 0 }} 
             whileInView={{ height: `${h}%` }} 
             transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
             className="flex-1 bg-gradient-to-t from-primary/10 to-primary rounded-t-[2px] shadow-[0_0_15px_rgba(219,232,144,0.1)]" 
           />
         ))}
      </div>

      {/* 3. Metrics Scrim (Glass Effect) */}
      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 relative z-10">
         <div className="flex flex-col">
            <span className="text-[8px] text-slate-600 uppercase mb-1">Market_Position</span>
            <span className="text-white font-bold text-lg">Rank_#1</span>
         </div>
         <div className="flex flex-col items-end">
            <span className="text-[8px] text-slate-600 uppercase mb-1">Load_Capacity</span>
            <span className="text-white font-bold text-lg">Unlimited</span>
         </div>
      </div>

      {/* 4. Subtle Blueprint Overlay (Prevents "Empty" feel) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff20 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </div>
  )
}
  ];

  return (
    <section id="methodology" className="py-40 px-6 lg:px-12 bg-black overflow-hidden relative">
      {/* Decorative Blur background */}
      <div className="absolute top-0 right-0 size-[600px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-40 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="size-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-[10px] font-mono font-black tracking-[0.6em] uppercase">Engineering Standards // 04</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-12">
            The 4D <br /><span className="text-white/10 italic">Framework.</span>
          </h2>
          
          <p className="text-slate-500 text-xl md:text-2xl max-w-2xl font-normal leading-relaxed border-l-2 border-white/5 pl-8 mt-12">
            Our systematic approach to engineering excellence. We convert business vision into a high-performance, scalable reality.
          </p>
        </div>

        {/* --- PHASES --- */}
        <div className="space-y-64">
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-8xl font-black text-white/5 font-display leading-none">{phase.num}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter flex items-center gap-6">
                  <span className="material-symbols-outlined text-primary text-4xl">{phase.icon}</span>
                  {phase.title}
                </h3>
                
                <p className="text-slate-400 text-xl md:text-2xl font-normal leading-relaxed mb-12 max-w-lg">
                  {phase.desc}
                </p>
                
                <div className="flex gap-3">
                  {["Verified", "Cloud_Native", "High_Perf"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[9px] text-slate-600 font-bold uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative group">
                {/* Decorative border glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative aspect-video rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] group-hover:border-primary/30 group-hover:translate-y-[-10px] transition-all duration-700">
                   {phase.visual}
                   
                   {/* Meta Overlay */}
                   <div className="absolute top-6 left-6 font-mono text-[8px] text-slate-700 uppercase tracking-[0.4em]">Node_Instance // STABLE</div>
                   <div className="absolute bottom-6 right-6 font-mono text-[8px] text-slate-700 uppercase tracking-[0.4em]">Fidelity_Core_v4.1</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;