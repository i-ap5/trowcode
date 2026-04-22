import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        details: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-24 lg:py-48 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-normal tracking-wider text-gray-500 mb-8 block">Project inquiry</span>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tighter mb-8 selection:bg-white selection:text-black leading-tight">
            Get in touch
          </h2>
          <p className="text-base text-slate-400 max-w-sm font-light leading-relaxed mb-16">
            Tell us about your project and we'll get back to you within 24 hours with a production-ready roadmap.
          </p>

          <div className="space-y-12">
            <div>
              <p className="text-xs font-normal tracking-wide text-gray-500 mb-4">Direct email</p>
              <a href="mailto:hello@trowcode.com" className="text-xl md:text-2xl font-medium hover:text-gray-400 transition-all duration-300 underline underline-offset-8 decoration-gray-800 hover:decoration-white">
                hello@trowcode.com
              </a>
            </div>
            <div>
              <p className="text-xs font-normal tracking-wide text-gray-500 mb-4">Location</p>
              <p className="text-lg text-slate-400 font-light">Kerala, India · Remote worldwide</p>
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
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center min-h-[400px] text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8"
                  >
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">Message received</h3>
                  <p className="text-slate-400 font-light max-w-xs mx-auto leading-relaxed">
                    Thank you for reaching out. Our team will review your project and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-10 text-xs font-medium tracking-widest uppercase hover:text-white text-gray-500 transition-colors"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-10" 
                  onSubmit={handleSubmit}
                >
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-2 relative group">
                      <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">First name</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your first name"
                          className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-base font-light placeholder:text-slate-700"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 relative group">
                      <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Last name</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your last name"
                          className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-base font-light placeholder:text-slate-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-2 relative group">
                      <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Phone number</label>
                      <div className="relative phone-input-container">
                        <PhoneInput
                          country={'in'}
                          value={formData.phone}
                          onChange={(phone) => setFormData(prev => ({ ...prev, phone: '+' + phone }))}
                          enableSearch={true}
                          searchPlaceholder="Search country..."
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 relative group">
                      <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Email address</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your corporate email"
                          className={`w-full py-4 bg-transparent border-b ${emailError ? 'border-red-500' : 'border-white/10 focus:border-white'} outline-none focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-base font-light placeholder:text-slate-700`}
                        />
                        {emailError && (
                          <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 uppercase tracking-widest">{emailError}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-xs text-gray-500 font-medium tracking-wide transition-colors duration-500 group-focus-within:text-white">Project details</label>
                    <div className="relative">
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project"
                        rows={4}
                        className="w-full py-4 bg-transparent border-b border-white/10 outline-none focus:border-white focus:bg-white/[0.02] px-3 -mx-3 transition-all duration-500 text-lg font-light placeholder:text-slate-700 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group relative inline-flex items-center justify-center bg-white text-black px-12 py-5 overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 font-medium tracking-tight text-lg">
                        {status === 'submitting' ? 'Sending...' : 'Send enquiry'}
                      </span>
                      <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                    {status === 'error' && (
                      <p className="mt-4 text-xs text-red-500 tracking-wide">Something went wrong. Please try again or email us directly.</p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;