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
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Settings</h1>
          <p className="text-slate-500 font-medium">Fine-tune your EverTask experience and workspace configurations.</p>
        </div>
        <div className="relative">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
           <input 
             type="text" 
             placeholder="Search settings..." 
             className="bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="md:col-span-3 bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm">
           <div className="space-y-1">
              {menuItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => setActiveSection(item.name)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
                    activeSection === item.name 
                      ? "bg-emerald-900 text-white shadow-lg shadow-emerald-900/10" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-3">
                     <item.icon className={cn("w-5 h-5", activeSection === item.name ? "text-emerald-400" : "text-slate-400 group-hover:text-emerald-600")} />
                     <span className="font-bold text-sm tracking-tight">{item.name}</span>
                  </div>
                  {activeSection !== item.name && <ChevronRight className="w-4 h-4 text-slate-300" />}
                </button>
              ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-9 space-y-6">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8 flex items-center gap-3">
                 {activeSection} Settings
                 {activeSection === 'Security' && <ShieldCheck className="w-6 h-6 text-emerald-600" />}
              </h2>

              <div className="space-y-12">
                 <section className="space-y-6">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Preference Controls</h3>
                    <div className="space-y-4">
                       {[
                         { title: 'Appearance', desc: 'Customize how EverTask looks on your device.', value: 'System Default' },
                         { title: 'Language', desc: 'Select your preferred language for the interface.', value: 'English (US)' },
                         { title: 'Automatic Updates', desc: 'Keep your dashboard always on the bleeding edge.', type: 'TOGGLE' },
                         { title: 'Haptic Feedback', desc: 'Enable tactile feedback for critical actions on mobile.', type: 'TOGGLE' },
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between py-6 border-b border-slate-50 last:border-0 group cursor-pointer">
                            <div>
                               <p className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.title}</p>
                               <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                            </div>
                            {item.type === 'TOGGLE' ? (
                               <div className="w-12 h-6 bg-emerald-100 rounded-full relative p-0.5 cursor-pointer">
                                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-emerald-600 rounded-full shadow-sm"></div>
                               </div>
                            ) : (
                               <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                                  {item.value} <ChevronRight className="w-4 h-4" />
                               </div>
                            )}
                         </div>
                       ))}
                    </div>
                 </section>

                 <section className="space-y-6">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Device Management</h3>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-200">
                             <Monitor className="text-slate-400 w-6 h-6" />
                          </div>
                          <div>
                             <p className="font-bold text-slate-900">MacBook Pro 16"</p>
                             <p className="text-xs font-medium text-slate-500">San Francisco, CA • Current Device</p>
                          </div>
                       </div>
                       <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-lg">ACTIVE</span>
                    </div>

                    <div className="p-6 bg-white rounded-3xl border border-slate-100 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-200">
                             <Smartphone className="text-slate-400 w-6 h-6" />
                          </div>
                          <div>
                             <p className="font-bold text-slate-900">iPhone 15 Pro</p>
                             <p className="text-xs font-medium text-slate-500">San Francisco, CA • Last active 2h ago</p>
                          </div>
                       </div>
                       <button className="text-red-500 text-xs font-bold hover:underline">Revoke Access</button>
                    </div>
                 </section>

                 <section className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                       <div>
                          <h3 className="text-xl font-bold text-emerald-900 mb-2">Need a custom plan?</h3>
                          <p className="text-emerald-700/80 font-medium leading-relaxed">Our enterprise edition includes dedicated support, custom data retention, and SAML/SSO integration.</p>
                       </div>
                       <button className="btn-primary px-8 py-3 shrink-0 flex items-center gap-2">
                          Talk to Sales <ExternalLink className="w-4 h-4" />
                       </button>
                    </div>
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                 </section>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
