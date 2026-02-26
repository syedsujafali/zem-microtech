import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="blob absolute top-1/2 -right-1/4 opacity-30 bg-blue-300"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Let's Get Your <br />
                <span className="text-pink-500">Tech Fixed!</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Ready to restore your peace of mind? Reach out to us today for a free estimate or to schedule your repair.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6" />, label: "Call Us", value: "+1 (555) 123-4567" },
                  { icon: <Mail className="w-6 h-6" />, label: "Email Us", value: "support@zenmicrotech.com" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Visit Us", value: "123 Tech Avenue, Silicon Valley, CA" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-2xl shadow-md text-pink-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-slate-800 font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-pink-100/50 border border-slate-100"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-pink-100 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-pink-100 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Device Model & Issue</label>
                  <input
                    type="text"
                    placeholder="iPhone 13 - Cracked Screen"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-pink-100 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your tech issue..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-pink-100 focus:bg-white transition-all duration-300"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-bold shadow-xl shadow-pink-200 hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    Send Zen Request
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
