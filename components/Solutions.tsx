import React from 'react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  const offerings = [
    { title: 'Web & Mobile Apps', desc: 'High-performance user-facing applications for iOS, Android, and the Web.' },
    { title: 'Custom Software', desc: 'Tailor-made software platforms designed exactly for your specific business logic.' },
    { title: 'Custom ERP', desc: 'Enterprise resource planning systems to unify and manage your entire operation.' },
    { title: 'AI & Automation', desc: 'Integrate machine learning and LLMs to automate repetitive corporate workflows.' },
    { title: 'Data Science & Analytics', desc: 'Transform raw data into actionable dashboards, pipelines, and predictive models.' }
  ];

  return (
    <section id="solutions" className="bg-white text-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

        {/* Sticky Title Column */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-auto mb-8 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">Services</h2>
          <p className="text-lg text-gray-500 font-light max-w-xs">
            Our core engineering capabilities delivered continuously.
          </p>
        </div>

        {/* Scrolling Services List */}
        <div className="lg:w-2/3 flex flex-col">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="py-12 border-t border-black/10 flex flex-col md:flex-row gap-4 md:gap-16 group hover:pl-6 transition-all duration-500 items-start hover:bg-black/[0.02] cursor-default"
            >
              <h3 className="text-xl md:text-2xl font-medium tracking-tight w-64 md:w-72 shrink-0 group-hover:text-gray-900 transition-colors">
                {item.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed font-light mt-1 md:mt-0">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Beautiful Minimal Section Ending Line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-4 lg:mt-8 flex justify-center">
        <div className="w-48 h-px bg-black/5" />
      </div>
    </section>
  );
};

export default Solutions;
