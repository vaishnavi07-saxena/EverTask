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
    { label: 'Units Delivered', value: '1,284', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Temporal Precision', value: '98.2%', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Cluster Leads', value: '42', icon: Layout, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-24">
      {/* Cover and Avatar Header */}
      <div className="relative">
         <div className="h-64 w-full bg-slate-900 rounded-[3.5rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-indigo-900/40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            <div className="absolute bottom-10 right-10 flex gap-4">
               <button className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-2xl transition-all flex items-center gap-3 border border-white/10 shadow-2xl">
                  <Camera className="w-4 h-4 text-emerald-400" /> Update Topology
               </button>
            </div>
         </div>
         <div className="absolute -bottom-16 left-16 flex items-end gap-10">
            <div className="relative group">
               <div className="w-44 h-44 rounded-[3.5rem] border-[10px] border-slate-50 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <img src={user?.avatar || 'https://i.pravatar.cc/150'} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
               <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 text-white rounded-2xl border-4 border-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl hover:bg-slate-900 active:scale-95">
                  <PlusIcon className="w-5 h-5" />
               </button>
            </div>
            <div className="pb-6">
               <h1 className="text-5xl font-black text-slate-900 tracking-tight italic uppercase">{user?.name}</h1>
               <div className="flex items-center gap-4 mt-2">
                 <p className="text-slate-500 font-black flex items-center gap-2 uppercase tracking-[0.3em] text-[10px] bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200/50">
                   <Shield className="w-3.5 h-3.5 text-emerald-600" />
                   {user?.role} <span className="text-slate-300 mx-2">|</span> ID: 8824-A1
                 </p>
               </div>
            </div>
         </div>
      </div>

      <div className="pt-20 grid grid-cols-1 md:grid-cols-12 gap-10">
         {/* Left Column - Info */}
         <div className="md:col-span-4 space-y-8">
            <div className="premium-card p-10 space-y-10 group">
               <div>
                  <h3 className="font-black text-slate-400 uppercase tracking-[0.25em] text-[10px] mb-6 flex items-center gap-3">
                    <User className="w-3.5 h-3.5 text-emerald-600" /> Biographical Data
                  </h3>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed italic">
                     "Lead Product Architect at EverTask. Orchestrating high-performance neural clusters and modular design systems for the next generation of productivity."
                  </p>
               </div>
               
               <div className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-xs font-black text-slate-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                     <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                        <Mail className="w-4 h-4" />
                     </div>
                     {user?.email}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black text-slate-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform delay-75">
                     <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                        <MapPin className="w-4 h-4" />
                     </div>
                     Remote, Cluster-07
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black text-slate-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform delay-150">
                     <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                        <LinkIcon className="w-4 h-4" />
                     </div>
                     evertask.io/protocol
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black text-slate-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform delay-200">
                     <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                        <Calendar className="w-4 h-4" />
                     </div>
                     Cycle Start: March 2024
                  </div>
               </div>

               <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:scale-110 active:scale-95 cursor-pointer shadow-sm transition-all">
                     <Github className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:scale-110 active:scale-95 cursor-pointer shadow-sm transition-all">
                     <Twitter className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:scale-110 active:scale-95 cursor-pointer shadow-sm transition-all">
                     <Linkedin className="w-5 h-5" />
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="font-black text-emerald-500 text-[10px] uppercase tracking-[0.3em] mb-6">Synchronization Status</h3>
                  <p className="text-2xl font-black mb-8 leading-tight italic uppercase">Actively seeking high-velocity architectural initiatives.</p>
                  <button className="w-full bg-emerald-500 text-slate-950 font-black px-8 py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all hover:bg-emerald-400 active:scale-95 shadow-xl shadow-emerald-500/20">Establish Comms</button>
               </div>
               <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.04] bg-[size:30px_30px]"></div>
            </div>
         </div>

         {/* Right Column - Stats and Projects */}
         <div className="md:col-span-8 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               {stats.map((s, i) => (
                  <div key={i} className="premium-card p-8 group hover:border-emerald-500/30 transition-all duration-500">
                     <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 shadow-sm", s.bg)}>
                        <s.icon className={cn("w-7 h-7", s.color)} />
                     </div>
                     <p className="text-4xl font-black text-slate-900 tracking-tighter italic">{s.value}</p>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-3">{s.label}</p>
                  </div>
               ))}
            </div>

            <div className="premium-card p-10">
               <div className="flex items-center justify-between mb-12">
                  <h3 className="font-black text-slate-900 uppercase tracking-[0.25em] text-[10px] italic border-b-2 border-emerald-500 pb-2">Contribution Archive</h3>
                  <button className="text-emerald-600 text-[10px] font-black uppercase tracking-widest hover:text-slate-950 transition-colors">Inspect Clusters</button>
               </div>
               <div className="space-y-8">
                  {[
                    { commit: 'Structural integrity pass for Nexus Core', date: '2h ago', repo: 'evertask/architecture' },
                    { commit: 'Sync: Modular grid dynamics in Admin-X', date: '5h ago', repo: 'evertask/ui-labs' },
                    { commit: 'Protocol: Neural SSO handshake optimization', date: 'Yesterday', repo: 'evertask/security' },
                    { commit: 'Lifecycle: Repository migration to Cluster-V', date: '2 days ago', repo: 'evertask/devops' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group cursor-pointer">
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-2.5 shadow-[0_0_10px_#10b981] group-hover:scale-150 transition-transform"></div>
                       <div className="flex-1 pb-8 border-b border-slate-50 last:border-0 group-hover:translate-x-2 transition-transform">
                          <p className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors uppercase italic tracking-tight">{item.commit}</p>
                          <div className="flex items-center gap-5 mt-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                             <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {item.date}</span>
                             <span className="text-slate-200">/</span>
                             <span className="text-emerald-500 bg-emerald-50 px-3 py-1 rounded-lg">{item.repo}</span>
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
