import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tv, Camera, Wifi, Settings, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Phone Repair',
    desc: 'Screen replacement, battery upgrades, and software fixes.',
    color: 'bg-blue-50 text-blue-500',
    glow: 'glow-blue'
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: 'TV Repair',
    desc: 'LED, LCD, and Smart TV repairs for all major brands.',
    color: 'bg-purple-50 text-purple-500',
    glow: 'glow-purple'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Computer Repair',
    desc: 'Laptops, desktops, and custom PC maintenance.',
    color: 'bg-pink-50 text-pink-500',
    glow: 'glow-pink'
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'Networking',
    desc: 'Home & office networking solutions for seamless connectivity.',
    color: 'bg-indigo-50 text-indigo-500',
    glow: 'glow-purple'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Security Cameras',
    desc: 'CCTV and smart security camera installation and setup.',
    color: 'bg-emerald-50 text-emerald-500',
    glow: 'glow-blue'
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: 'Refurbished Sales',
    desc: 'Buy and sell high-quality, certified pre-owned gadgets.',
    color: 'bg-orange-50 text-orange-500',
    glow: 'glow-pink'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            From fixing your favorite gadget to setting up a high-speed network, our experts at Zen Microtech are here to provide fast, reliable, and friendly service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className={`p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl transition-all duration-300 group cursor-pointer ${service.glow}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <div className="flex items-center text-sm font-bold text-purple-600 group-hover:gap-2 transition-all">
                Learn more
                <Settings className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
