import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-black text-white py-24 lg:py-48 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-normal tracking-wider text-gray-500 mb-8 block">Project inquiry</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter mb-8 selection:bg-white selection:text-black leading-tight">
            Get in touch
          </h2>
          <p className="text-lg text-slate-400 max-w-sm font-light leading-relaxed mb-16">
            Tell us about your project and we'll get back to you within 24 hours with a production-ready roadmap.
          </p>

          <div className="space-y-12">
            <div>
              <p className="text-xs font-normal tracking-wide text-gray-500 mb-4">Direct email</p>
              <a href="mailto:hello@trowcode.com" className="text-2xl md:text-3xl font-medium hover:text-gray-400 transition-all duration-300 underline underline-offset-8 decoration-gray-800 hover:decoration-white">
                hello@trowcode.com
              </a>
            </div>
            <div>
              <p className="text-xs font-normal tracking-wide text-gray-500 mb-4">Location</p>
              <p className="text-xl text-slate-400 font-light">Kerala, India · Remote worldwide</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col pt-4 lg:pt-0"
        >
          <form className="flex flex-col gap-10">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2 relative group">
                <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">First name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-lg font-light placeholder:text-slate-700"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 relative group">
                <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Last name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-lg font-light placeholder:text-slate-700"
                  />
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2 relative group">
                <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Phone number</label>
                <div className="relative">
                  <input
                    type="tel"
                    defaultValue="+91 "
                    placeholder="+91 "
                    maxLength={14}
                    className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-lg font-light"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 relative group">
                <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Email address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your corporate email"
                    className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-lg font-light placeholder:text-slate-700"
                  />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2 relative group">
              <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Project details</label>
              <div className="relative">
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-lg font-light placeholder:text-slate-700 resize-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="inline-flex items-center justify-center px-16 h-16 bg-white text-black rounded-none text-base font-bold transition-all hover:bg-gray-200 active:scale-95 shadow-2xl"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;