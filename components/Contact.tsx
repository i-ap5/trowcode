import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white text-black py-24 lg:py-32 px-6 lg:px-12 border-b border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
            Get in touch
          </h2>
          <p className="text-lg text-gray-500 max-w-sm font-light mb-16">
            Tell us about your project and we'll get back to you within 24 hours with a roadmap and estimate.
          </p>

          <div className="space-y-10">
            <div>
               <p className="text-sm font-medium text-gray-400 mb-2">Email</p>
               <a href="mailto:hello@trowcode.com" className="text-2xl font-medium hover:text-gray-600 transition-colors">
                  hello@trowcode.com
               </a>
            </div>
            <div>
               <p className="text-sm font-medium text-gray-400 mb-2">Location</p>
               <p className="text-lg text-gray-600 font-light">Kerala, India · Remote Worldwide</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <form className="flex flex-col gap-10">
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full pb-4 bg-transparent border-b border-black/20 outline-none focus:border-black transition-colors text-base font-light placeholder:text-gray-400" 
            />
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full pb-4 bg-transparent border-b border-black/20 outline-none focus:border-black transition-colors text-base font-light placeholder:text-gray-400" 
            />
            <textarea 
              placeholder="Tell us about your project" 
              rows={4} 
              className="w-full pt-2 pb-4 bg-transparent border-b border-black/20 outline-none focus:border-black transition-colors text-base font-light placeholder:text-gray-400 resize-none" 
            />
            <button 
              type="button" 
              className="self-start px-8 h-14 bg-black text-white rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 active:scale-95 transition-all"
            >
              Send message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;