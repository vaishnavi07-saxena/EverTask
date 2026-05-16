import React from 'react';
import { 
  Bell, 
  Lock, 
  User, 
  Globe, 
  Monitor, 
  Smartphone, 
  Zap, 
  CreditCard,
  ChevronRight,
  ShieldCheck,
  ToggleRight as ToggleIcon,
  Search,
  ExternalLink
} from 'lucide-react';
import { cn } from '../utils/cn';

export const SettingsPage = () => {
  const [activeSection, setActiveSection] = React.useState('General');

  const menuItems = [
    { name: 'General', icon: Monitor },
    { name: 'Account', icon: User },
    { name: 'Security', icon: Lock },
    { name: 'Notifications', icon: Bell },
    { name: 'Billing', icon: CreditCard },
    { name: 'Integrations', icon: Zap },
    { name: 'Accessibility', icon: Globe },
  ];

  return (
    <div className="space-y-12 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">System Architecture</h1>
          <p className="text-slate-500 font-medium text-lg">Calibrate your EverTask environment and node configurations.</p>
        </div>
        <div className="relative group">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
           <input 
             type="text" 
             placeholder="Search settings..." 
             className="bg-white border border-slate-200 rounded-2xl py-3 pl-11 pr-6 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none w-64 shadow-sm"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 premium-card p-4">
           <div className="space-y-2">
              {menuItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => setActiveSection(item.name)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group",
                    activeSection === item.name 
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 translate-x-2" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                     <item.icon className={cn("w-5 h-5 transition-colors", activeSection === item.name ? "text-emerald-400" : "text-slate-400 group-hover:text-emerald-600")} />
                     <span className="font-black text-sm tracking-tight">{item.name}</span>
                  </div>
                  {activeSection !== item.name && <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />}
                </button>
              ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-8">
           <div className="premium-card p-10 lg:p-14">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4 italic underline decoration-emerald-500/30">
                   {activeSection} Protocol
                   {activeSection === 'Security' && <ShieldCheck className="w-8 h-8 text-emerald-600" />}
                </h2>
                <div className="px-5 py-2 bg-slate-100 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-200/50">
                  Instance: V2.4.9
                </div>
              </div>

              <div className="space-y-16">
                 <section className="space-y-8">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">User Interface Variables</h3>
                    <div className="grid gap-2">
                       {[
                         { title: 'Appearance', desc: 'SaaS Aesthetic engine selection.', value: 'System Default' },
                         { title: 'Interface Language', desc: 'Localization package of the core network.', value: 'English (US)' },
                         { title: 'Automated Patches', desc: 'Continuous deployment of edge features.', type: 'TOGGLE' },
                         { title: 'Sensory Haptics', desc: 'Tactile interaction layers for mobile nodes.', type: 'TOGGLE' },
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between py-8 px-6 hover:bg-slate-50/50 rounded-2xl transition-all duration-300 cursor-pointer group">
                            <div className="max-w-md">
                               <p className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{item.title}</p>
                               <p className="text-sm text-slate-500 font-medium mt-1">{item.desc}</p>
                            </div>
                            {item.type === 'TOGGLE' ? (
                               <div className="w-14 h-7 bg-slate-200 rounded-full relative p-1 cursor-pointer overflow-hidden transition-colors hover:bg-emerald-100">
                                  <div className="absolute right-1 top-1 w-5 h-5 bg-emerald-600 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                               </div>
                            ) : (
                               <div className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest bg-white border border-slate-200 px-4 py-2 rounded-xl group-hover:border-emerald-500/30 transition-all">
                                  {item.value} <ChevronRight className="w-4 h-4" />
                                </div>
                            )}
                         </div>
                       ))}
                    </div>
                 </section>

                 <section className="space-y-8">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Linked Hardware Nodes</h3>
                    <div className="grid gap-6">
                      <div className="p-8 bg-slate-50/50 rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-emerald-500/20 transition-all duration-500">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                              <Monitor className="text-slate-400 w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                            </div>
                            <div>
                                <p className="text-xl font-black text-slate-900 uppercase tracking-tight">Mainframe Pro 16"</p>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">San Francisco Network • <span className="text-emerald-600">Active Node</span></p>
                            </div>
                        </div>
                        <span className="px-5 py-2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-emerald-500/20">CURRENT</span>
                      </div>

                      <div className="p-8 bg-white rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-slate-300 transition-all duration-500">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm group-hover:rotate-3 transition-transform">
                              <Smartphone className="text-slate-400 w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-xl font-black text-slate-900 uppercase tracking-tight">External Node (Mobile)</p>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Global Roaming • Last sync 2h ago</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 border border-red-200 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-red-50 transition-colors">DEAUTHORIZE</button>
                      </div>
                    </div>
                 </section>

                 <section className="p-10 bg-slate-950 rounded-[3rem] border-none relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
                       <div className="max-w-xl text-center xl:text-left">
                          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Enterprise Infrastructure</h3>
                          <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            Unlock dedicated computational shards, custom encryption protocols, and industrial-grade SSO integration for large scale operations.
                          </p>
                       </div>
                       <button className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5 shrink-0">
                          Upgrade Cluster <ExternalLink className="w-4 h-4 inline-block ml-2 mb-1" />
                       </button>
                    </div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>
                 </section>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
