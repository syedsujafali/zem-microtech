import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Cpu, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-linear-to-br from-purple-500 to-pink-500 p-2 rounded-xl shadow-lg">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400 tracking-tight">
                Zen Microtech
              </span>
            </div>
            <p className="text-slate-400">
              Expert repairs and high-quality tech solutions for your digital lifestyle. We make tech simple and stress-free.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="bg-slate-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              {['Phone Repairs', 'Computer Maintenance', 'Smart TV Solutions', 'Networking', 'Security Systems'].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-purple-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Get the latest tech tips and exclusive discounts!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 text-white px-4 py-3 rounded-l-xl focus:outline-none w-full"
              />
              <button className="bg-purple-600 px-4 py-3 rounded-r-xl font-bold hover:bg-purple-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Zen Microtech. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="bg-slate-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
