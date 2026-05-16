import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Lead at Vercel',
    content: 'EverTask has completely transformed how our engineering team tracks sprints. The bento-style dashboard is a breath of fresh air compared to Jira.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'CEO at Flowbase',
    content: 'The ROI was immediate. We saved roughly 10 hours a week on project management meetings just by switching to EverTask\'s collaborative boards.',
    avatar: 'https://i.pravatar.cc/150?u=david',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Design Director',
    content: 'Finally, a task manager that doesn\'t feel like a spreadsheet. It\'s beautiful, fast, and remarkably intuitive for our creative team.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-950 mb-4 tracking-tight">Trusted by high-impact teams.</h2>
          <p className="text-slate-500 max-w-xl mx-auto italic">"EverTask is the secret weapon of modern engineering departments."</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative group cursor-default hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-50 group-hover:text-emerald-100 transition-colors" />
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 font-medium">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-50">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
