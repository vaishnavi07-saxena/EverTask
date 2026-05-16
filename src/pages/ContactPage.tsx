import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Twitter, 
  Github, 
  Linkedin,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const ContactPage = () => {
  const [formState, setFormState] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! Our team will get back to you within 24 hours.');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-950 mb-6 tracking-tight">
              Get in <span className="text-emerald-500">touch.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Have a question about our features, pricing, or enterprise solutions? 
              Our team is ready to help you scale your productivity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bento-card p-10 space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 text-emerald-600 shadow-sm border border-emerald-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email us</p>
                  <p className="text-lg font-bold text-slate-900">support@evertask.io</p>
                  <p className="text-sm text-slate-500">24/7 Priority support for customers.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 text-emerald-600 shadow-sm border border-emerald-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call us</p>
                  <p className="text-lg font-bold text-slate-900">+1 (888) EVER-TASK</p>
                  <p className="text-sm text-slate-500">Mon-Fri from 9am to 6pm EST.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 text-emerald-600 shadow-sm border border-emerald-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit us</p>
                  <p className="text-lg font-bold text-slate-900">123 Tech Square, SF</p>
                  <p className="text-sm text-slate-500">California, CA 94105, USA.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
               <div className="relative z-10">
                  <div className="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center mb-6">
                    <MessageCircle className="text-emerald-950 w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Quick Chat?</h4>
                  <p className="text-emerald-100/70 mb-8 leading-relaxed">
                    Need instant answers? Our team is live on chat during business hours. 
                    Typical response time is under 5 minutes.
                  </p>
                  <button className="btn-accent w-full flex items-center justify-center gap-2">
                    Start Live Chat <Send className="w-4 h-4" />
                  </button>
               </div>
               <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-sm">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h3>
              <p className="text-slate-500 mb-10">We'll get back to you within one business day, guaranteed.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Cooper"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  >
                    <option value="">Select a reason</option>
                    <option value="Sales">Sales Inquiry</option>
                    <option value="Support">Technical Support</option>
                    <option value="Demo">Request a Demo</option>
                    <option value="Other">General Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your team and what you're looking for..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none resize-none"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-lg disabled:opacity-50 shadow-xl shadow-emerald-900/10"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Location" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
          />
          <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-2xl animate-bounce">
                <MapPin className="text-emerald-600 w-8 h-8" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
