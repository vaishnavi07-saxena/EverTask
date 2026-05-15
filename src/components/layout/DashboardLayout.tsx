import React from 'react';
import { Sidebar } from './Sidebar';
import { Bell, Search, User } from 'lucide-react';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-y-auto">
        {/* Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-slate-800">Admin Overview</h1>
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">TEAM PLAN</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="bg-slate-100 rounded-lg px-4 py-1.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all border border-transparent focus:border-emerald-200"
              />
            </div>
            
            <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900">Alex Sterling</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Lead Architect</p>
              </div>
              <div className="w-10 h-10 bg-emerald-200 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-emerald-800 font-bold overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
