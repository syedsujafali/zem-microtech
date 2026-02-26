import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e92c859?auto=format&fit=crop&q=80&w=800"
                alt="Tech repair"
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="absolute -bottom-10 right-10 glass p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl">
                    <Star className="text-white w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">4.9/5</p>
                    <p className="text-sm text-slate-500">Customer Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Who We Are & <br />
                <span className="text-purple-600">Why We’re Different</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Zen Microtech, we believe tech should be <span className="text-purple-600 font-bold bg-purple-50 px-2 py-1 rounded">stress-free</span>. Our mission is to provide high-quality repairs and tech solutions with a cheerful attitude and absolute transparency.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Fast & Reliable', desc: 'Most repairs done within 24 hours.' },
                  { title: 'Certified Experts', desc: 'Our technicians are highly skilled and certified.' },
                  { title: 'Genuine Parts', desc: 'We only use top-tier, original equipment manufacturer parts.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-linear-to-r from-purple-100 to-pink-100 border border-purple-200">
                  <Sparkles className="text-purple-600 w-5 h-5" />
                  <span className="text-purple-800 font-semibold italic">"The Zen Touch for every device!"</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
