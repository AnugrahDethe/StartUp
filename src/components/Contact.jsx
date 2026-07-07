import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Mail, label: 'Email Us', value: 'anugrahdethe10@gmail.com',
    accent: '#6366F1', gradient: 'from-indigo-500/20 to-transparent',
  },
  {
    icon: Phone, label: 'WhatsApp / Call', value: '8591207346',
    accent: '#06B6D4', gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    icon: MapPin, label: 'HQ', value: 'Navi Mumbai',
    accent: '#8B5CF6', gradient: 'from-violet-500/20 to-transparent',
  },
];

const formFields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', full: false },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@startup.com', full: false },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/anugrahdethe10@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', service: '', message: '' });
      } else {
        console.error("Form submission failed");
        setStatus('idle');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-32 relative border-t border-white/[0.03]">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Open for Projects</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Let's Build <br />
              <span className="text-gradient">Something</span> <br />
              Extraordinary.
            </h2>
            <p className="text-gray-400 text-lg mb-14 max-w-md leading-relaxed">
              Ready to transform your idea into a live, AI-powered product? Drop us a message — we respond within 24 hours.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-5 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                      <Icon size={20} style={{ color: method.accent }} className="relative z-10" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{method.label}</div>
                      <div className="font-medium text-white group-hover:text-gradient transition-all">{method.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden shimmer-border">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"
                    >
                      <CheckCircle size={40} className="text-emerald-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-gray-400 max-w-xs">We'll review your request and reach out within 24 hours.</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-full glass border border-white/10 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Send another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col gap-6"
                  >
                    {/* Name & Email row */}
                    <div className="grid grid-cols-2 gap-4">
                      {formFields.map(f => (
                        <div key={f.id} className="flex flex-col gap-2">
                          <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">{f.label}</label>
                          <div className="relative">
                            <input
                              type={f.type}
                              placeholder={f.placeholder}
                              value={formState[f.id]}
                              onChange={e => setFormState(p => ({ ...p, [f.id]: e.target.value }))}
                              onFocus={() => setFocused(f.id)}
                              onBlur={() => setFocused(null)}
                              className="w-full bg-black/40 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none placeholder:text-gray-600 transition-all"
                              style={{
                                borderColor: focused === f.id ? '#6366F1' : undefined,
                                boxShadow: focused === f.id ? '0 0 0 3px rgba(99,102,241,0.12)' : undefined,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Service dropdown */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Service Interested In</label>
                      <select
                        value={formState.service}
                        onChange={e => setFormState(p => ({ ...p, service: e.target.value }))}
                        onFocus={() => setFocused('service')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-black/40 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all appearance-none"
                        style={{
                          borderColor: focused === 'service' ? '#6366F1' : undefined,
                          boxShadow: focused === 'service' ? '0 0 0 3px rgba(99,102,241,0.12)' : undefined,
                        }}
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="web">Website Development</option>
                        <option value="android">Android App Development</option>
                        <option value="software">Software Development</option>
                        <option value="crm">CRM Solutions</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your project or idea..."
                        value={formState.message}
                        onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-black/40 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none resize-none placeholder:text-gray-600 transition-all"
                        style={{
                          borderColor: focused === 'message' ? '#6366F1' : undefined,
                          boxShadow: focused === 'message' ? '0 0 0 3px rgba(99,102,241,0.12)' : undefined,
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={status !== 'submitting' ? { scale: 1.02, boxShadow: '0 0 40px rgba(99,102,241,0.5)' } : {}}
                      whileTap={{ scale: 0.98 }}
                      className="relative group w-full py-4 rounded-xl font-semibold text-white overflow-hidden disabled:opacity-70"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === 'submitting' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <motion.span animate={{ x: [0, 4, 0], y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                              <Send size={18} />
                            </motion.span>
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
