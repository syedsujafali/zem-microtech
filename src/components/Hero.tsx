import { motion } from 'framer-motion';
import { Monitor, Smartphone, Laptop, Tv, ArrowRight, Zap, ShieldCheck, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="blob absolute top-0 -left-1/4 opacity-40"></div>
      <div className="blob absolute bottom-0 -right-1/4 opacity-40 bg-pink-300"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-purple-100 shadow-sm"
            >
              <Zap className="text-yellow-500 w-4 h-4 fill-yellow-500" />
              <span className="text-sm font-semibold text-purple-700">Zen Repair Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              Buy - Sell - Repair<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-blue-600">
                Expert Tech Support
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Your one-stop destination for expert repairs, premium gadgets, and seamless tech solutions. We bring your devices back to life with a touch of Zen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                Book a Repair
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 glass border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Shop Refurbished
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-400"
            >
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm">Certified Techs</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-5 h-5" />
                <span className="text-sm">90-Day Warranty</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-float">
                  <Smartphone className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="font-bold text-slate-800">Phones</h3>
                  <p className="text-xs text-slate-500">Screen & Battery Experts</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-float animation-delay-500" style={{ animationDelay: '1s' }}>
                  <Tv className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="font-bold text-slate-800">TVs</h3>
                  <p className="text-xs text-slate-500">LED & Smart TV Repair</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Laptop className="w-12 h-12 text-pink-500 mb-4" />
                  <h3 className="font-bold text-slate-800">Laptops</h3>
                  <p className="text-xs text-slate-500">Software & Hardware</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Monitor className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-800">Desktops</h3>
                  <p className="text-xs text-slate-500">Custom Builds & Upgrades</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-r from-purple-100/50 to-blue-100/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
