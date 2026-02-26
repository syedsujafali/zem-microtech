import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Graphic Designer",
    comment: "Fixed my cracked iPhone screen in under an hour! The team was super friendly and the price was very fair. Best service in town!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "Local Business Owner",
    comment: "Zen Microtech handled our entire office networking setup. Everything works perfectly, and their support is top-notch.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    comment: "I bought a refurbished MacBook from them. It looks and works like brand new! Highly recommend for anyone on a budget.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-linear-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-purple-100 rounded-2xl mb-4"
          >
            <Quote className="text-purple-600 w-6 h-6 fill-purple-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            Happy Customers
          </motion.h2>
          <p className="text-slate-600">Don't just take our word for it, here is what our clients say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-purple-100/50 border border-slate-100 relative"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8">"{testimonial.comment}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
