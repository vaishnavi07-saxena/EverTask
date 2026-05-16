import React from 'react';
import { 
  User, 
  Mail, 
  Shield, 
  Calendar, 
  Camera, 
  MapPin, 
  Link as LinkIcon, 
  Twitter, 
  Github, 
  Linkedin,
  CheckCircle2,
  Clock,
  Layout
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { cn } from '../utils/cn';

export const ProfilePage = () => {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Tasks Done', value: '1,284', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'On Time', value: '98.2%', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Projects', value: '42', icon: Layout, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Cover and Avatar Header */}
      <div className="relative">
         <div className="h-48 w-full bg-emerald-900 rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute bottom-0 right-0 p-6">
               <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-2">
                  <Camera className="w-4 h-4" /> Change Cover
               </button>
            </div>
         </div>
         <div className="absolute -bottom-12 left-12 flex items-end gap-6">
            <div className="relative group">
               <div className="w-32 h-32 rounded-[2.5rem] border-4 border-white bg-white shadow-xl overflow-hidden">
                  <img src={user?.avatar || 'https://i.pravatar.cc/150'} alt="Profile" className="w-full h-full object-cover" />
               </div>
               <button className="absolute bottom-1 right-1 w-8 h-8 bg-emerald-600 text-white rounded-xl border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                  <PlusIcon className="w-4 h-4" />
               </button>
            </div>
            <div className="pb-4">
               <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{user?.name}</h1>
               <p className="text-slate-500 font-medium flex items-center gap-2 uppercase tracking-widest text-[10px] font-black mt-1">
                 <Shield className="w-3 h-3 text-emerald-600" />
                 {user?.role} • EVERTASK PARTNER
               </p>
            </div>
         </div>
      </div>

      <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
         {/* Left Column - Info */}
         <div className="md:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
               <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs">About Me</h3>
               <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Lead Product Architect at EverTask. Passionate about building high-performance teams and scalable design systems.
               </p>
               <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                     <Mail className="w-4 h-4 text-slate-400" /> {user?.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                     <MapPin className="w-4 h-4 text-slate-400" /> Remote, San Francisco
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                     <LinkIcon className="w-4 h-4 text-slate-400" /> evertask.io/alex
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                     <Calendar className="w-4 h-4 text-slate-400" /> Joined March 2024
                  </div>
               </div>
               <div className="flex gap-4 pt-4">
                  <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
               </div>
            </div>

            <div className="bg-emerald-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-4">Availability</h3>
                  <p className="text-xl font-bold mb-6">Open for collaboration on AI & Mobile projects.</p>
                  <button className="bg-white text-emerald-900 font-bold px-6 py-2 rounded-xl text-sm transition-transform group-hover:scale-105 active:scale-95">Send Message</button>
               </div>
               <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-800 rounded-full blur-3xl opacity-50 group-hover:bg-emerald-600 animate-pulse"></div>
            </div>
         </div>

         {/* Right Column - Stats and Projects */}
         <div className="md:col-span-8 space-y-6">
            <div className="grid grid-cols-3 gap-6">
               {stats.map((s, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm text-center group hover:border-emerald-100 transition-colors">
                     <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110", s.bg)}>
                        <s.icon className={cn("w-6 h-6", s.color)} />
                     </div>
                     <p className="text-2xl font-black text-slate-900 leading-none">{s.value}</p>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{s.label}</p>
                  </div>
               ))}
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Recent Contributions</h3>
                  <button className="text-emerald-600 text-xs font-bold hover:underline tracking-tighter">VIEW REPOSITORY</button>
               </div>
               <div className="space-y-6">
                  {[
                    { commit: 'Initial architecture for Q3 Roadmap', date: '2h ago', repo: 'evertask/core' },
                    { commit: 'Fix: Responsive grid spacing in Admin View', date: '5h ago', repo: 'evertask/ui-kit' },
                    { commit: 'Feature: New SSO authentication flow', date: 'Yesterday', repo: 'evertask/auth-service' },
                    { commit: 'Chore: Update dependencies for React 19', date: '2 days ago', repo: 'evertask/core' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></div>
                       <div className="flex-1 pb-6 border-b border-slate-50 group-hover:translate-x-1 transition-transform">
                          <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{item.commit}</p>
                          <div className="flex items-center gap-3 mt-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                             <span>{item.date}</span>
                             <span>•</span>
                             <span className="text-indigo-500">{item.repo}</span>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

function PlusIcon(props: any) {
  return (
    <svg 
      {...props}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
