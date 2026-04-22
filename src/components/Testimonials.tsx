import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      quote: "Trowcode delivered our platform on time and exactly to our specifications. Highly recommended.",
      author: "Mark S.", 
      role: "SaaS Founder",
    },
    { 
      quote: "A very professional team. They understood our business needs and built a solid application.",
      author: "Jane D.", 
      role: "Operations Lead",
    },
    { 
      quote: "Communication was clear, and the quality of code was excellent. We launched four weeks early.",
      author: "Alex R.", 
      role: "Startup Founder",
    }
  ];

  return (
    <section className="bg-white text-black py-24 lg:py-32 px-6 lg:px-12 border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-medium tracking-tight">Client Feedback</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
           {reviews.map((r, i) => (
             <motion.div
               key={r.author}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               className="flex flex-col"
             >
                <div className="mb-6 opacity-20">
                   {/* Minimal SVG Quote Icon */}
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L8 15H11V17H5V11L7 7H10L10 11ZM19 11L17 15H20V17H14V11L16 7H19L19 11Z" fill="currentColor"/>
                   </svg>
                </div>

                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                   "{r.quote}"
                </p>

                <div>
                   <h4 className="text-sm font-medium text-black">{r.author}</h4>
                   <p className="text-sm text-gray-500 font-light">{r.role}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;