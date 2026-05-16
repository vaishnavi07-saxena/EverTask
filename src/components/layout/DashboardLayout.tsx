import React from 'react';
import { Sidebar } from './Sidebar';
import { Bell, Search, User, Menu, X } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { cn } from '../../utils/cn';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-neutral-bg)] flex">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 transform transition-transform duration-500 lg:relative lg:translate-x-0 w-64",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Sidebar onAction={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-y-auto relative">
        {/* Navbar */}
        <header className="h-20 glass-header flex items-center justify-between px-6 lg:px-10 shrink-0">
          <div className="flex items-center gap-6">
            <button 
              className="lg:hidden p-2.5 text-slate-500 hover:bg-slate-100/50 rounded-xl transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                {user?.role === 'ADMIN' ? 'Control Center' : 'Workspace'}
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                 <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                   {user?.role === 'ADMIN' ? 'Enterprise Node' : 'Global Network'}
                 </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-8">
            <div className="relative hidden md:block group">
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-slate-200/40 rounded-2xl px-5 py-2.5 text-sm w-48 lg:w-72 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all border border-transparent focus:border-emerald-500/20 placeholder:text-slate-400"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>
            
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200/60">
              <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 rounded-xl transition-all relative">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 border-2 border-white rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 bg-white/40 p-1.5 pr-4 rounded-2xl border border-white/40 hover:bg-white/60 transition-colors cursor-pointer group">
                <div className="w-9 h-9 bg-slate-200 rounded-xl border-2 border-white shadow-sm flex items-center justify-center text-emerald-800 font-bold overflow-hidden transition-transform group-hover:scale-105">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt="Avatar"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{user?.name || 'User'}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{user?.role}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 lg:p-12">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
