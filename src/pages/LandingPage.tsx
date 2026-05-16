import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Clock 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import { Testimonials } from '../components/sections/Testimonials';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
              Scale your team efficiency
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight mb-8 leading-[0.9]">
              The workspace for <br />
              <span className="text-emerald-600">elite teams.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              EverTask is the professional project management platform built for modern organizations. Track, manage, and scale with ease.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login" className="btn-primary w-full sm:w-auto text-lg px-10 py-5 shadow-2xl shadow-emerald-900/20">
                Start for Free
              </Link>
              <Link to="/pricing" className="btn-secondary w-full sm:w-auto text-lg px-10 py-5">
                View Pricing
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-slate-400">
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                 <span className="text-sm font-bold uppercase tracking-wider">No credit card</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                 <span className="text-sm font-bold uppercase tracking-wider">Cancel anytime</span>
               </div>
            </div>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative px-4"
          >
            <div className="relative z-10 bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden lg:max-w-6xl mx-auto">
              {/* Fake Browser Top Bar */}
              <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-200"></div>
                <div className="w-3 h-3 rounded-full bg-amber-200"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Mesh Gradient background behind screenshot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-emerald-200 opacity-20 blur-[120px] rounded-full pointer-events-none -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-8">
           <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Trusted by world class organizations</p>
           <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale contrast-200">
              <span className="text-2xl font-black tracking-tighter">APPLE</span>
              <span className="text-2xl font-black tracking-tighter">STRIPE</span>
              <span className="text-2xl font-black tracking-tighter">LINEAR</span>
              <span className="text-2xl font-black tracking-tighter">VERCEL</span>
              <span className="text-2xl font-black tracking-tighter">GITHUB</span>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:sticky md:top-32 max-w-sm">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">Designed for the future of work.</h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                Every detail in EverTask is crafted to eliminate friction and empower your team to focus on what matters.
              </p>
              <Link to="/login" className="flex items-center gap-2 text-emerald-600 font-bold group">
                Exploration of features <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex-1 grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Deep Analytics', 
                  desc: 'Real-time visibility into every project metric and team velocity.', 
                  icon: BarChart3, 
                  color: 'text-indigo-600', 
                  bg: 'bg-indigo-50' 
                },
                { 
                  title: 'Multi-user Collaboration', 
                  desc: 'Sync effortlessly across continents with millisecond latency.', 
                  icon: Users, 
                  color: 'text-emerald-600', 
                  bg: 'bg-emerald-50' 
                },
                { 
                  title: 'Bank-level Security', 
                  desc: 'SOC2 compliant infrastructure with end-to-end data encryption.', 
                  icon: ShieldCheck, 
                  color: 'text-amber-600', 
                  bg: 'bg-amber-50' 
                },
                { 
                  title: 'Lightning Performance', 
                  desc: 'Vite-powered interface that responds under 100ms globally.', 
                  icon: Zap, 
                  color: 'text-rose-600', 
                  bg: 'bg-rose-50' 
                },
              ].map((feature, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feature.bg)}>
                    <feature.icon className={cn("w-7 h-7", feature.color)} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-900 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Ready to transform your <br/> workflows?</h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/login" className="btn-primary-light w-full sm:w-auto text-lg px-10 py-5">
                    Start Your Trial
                  </Link>
                  <Link to="/contact" className="text-white font-bold px-10 py-5 hover:bg-white/10 rounded-2xl transition-colors">
                    Talk to Sales
                  </Link>
               </div>
             </div>
             {/* Decorative Background circles */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 opacity-20 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 opacity-40 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-emerald-600 w-6 h-6" />
            <span className="text-xl font-bold text-slate-900">EverTask</span>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2024 EverTask Industrial. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link to="#" className="text-sm font-bold text-slate-500 hover:text-emerald-600 uppercase tracking-tighter">Privacy</Link>
            <Link to="#" className="text-sm font-bold text-slate-500 hover:text-emerald-600 uppercase tracking-tighter">Terms</Link>
            <Link to="#" className="text-sm font-bold text-slate-500 hover:text-emerald-600 uppercase tracking-tighter">Security</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
