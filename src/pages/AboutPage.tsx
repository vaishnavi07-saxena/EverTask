import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  Heart, 
  Globe, 
  Code2, 
  CheckCircle2,
  Twitter,
  Github,
  Linkedin
} from 'lucide-react';
import { cn } from '../utils/cn';

const stats = [
  { label: 'Tasks Managed', value: '100K+' },
  { label: 'Active Users', value: '10K+' },
  { label: 'Happy Teams', value: '500+' },
  { label: 'Uptime', value: '99.9%' },
];

const team = [
  { name: 'Marcus Sterling', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80', social: true },
  { name: 'Aria Chen', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80', social: true },
  { name: 'David Miller', role: 'Lead Architect', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80', social: true },
];

const tech = [
  { name: 'React', color: 'text-blue-500' },
  { name: 'TypeScript', color: 'text-blue-600' },
  { name: 'Tailwind', color: 'text-cyan-500' },
  { name: 'Framer Motion', color: 'text-purple-500' },
  { name: 'Lucide Icons', color: 'text-emerald-500' },
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden bg-emerald-950">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-emerald-400 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-400/20"
          >
            <ShieldCheck className="text-emerald-950 w-12 h-12" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Helping teams <br /> <span className="text-emerald-400">work smarter.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            At EverTask, we believe that clarity is the foundation of great work. 
            We build tools that simplify complex workflows so you can focus on building the future.
          </motion.p>
          <div className="flex justify-center gap-4">
            <button className="btn-accent px-10">Get Started</button>
            <button className="px-10 py-3 text-white font-bold hover:bg-white/5 rounded-xl transition-all border border-white/20">Contact Us</button>
          </div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[100px] opacity-10 pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To empower every professional with intuitive, high-performance project management 
              software that removes friction and fosters unparalleled collaboration.
            </p>
          </div>
          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Vision</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To become the global standard for team productivity, where planning 
              is effortless and execution is inevitable for teams of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-bold text-emerald-600 mb-2">{stat.value}</p>
              <p className="text-slate-500 font-semibold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Built with modern tech for modern teams</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {tech.map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <Code2 className={cn("w-6 h-6", t.color)} />
                <span className="text-lg font-bold text-slate-700">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet the creators</h2>
            <p className="text-slate-500">The people behind the pixels of EverTask.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm text-center group cursor-pointer hover:shadow-xl transition-all">
                <div className="w-32 h-32 rounded-3xl overflow-hidden mx-auto mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-slate-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-emerald-600 font-semibold text-sm mb-6">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
                  <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 transition-colors" />
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Our values reflect <br /> <span className="text-emerald-600">how we build.</span></h2>
              <div className="space-y-8">
                {[
                  { icon: Heart, title: 'User Empathy', desc: 'We build for real people with real problems.' },
                  { icon: Globe, title: 'Open Collaboration', desc: 'Transparency is our default mode of operation.' },
                  { icon: CheckCircle2, title: 'Quality Obsessed', desc: 'The last 5% of polish is what defines us.' },
                ].map((val, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 text-emerald-600">
                      <val.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{val.title}</h4>
                      <p className="text-slate-500">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Culture" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
