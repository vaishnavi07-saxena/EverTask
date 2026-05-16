import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  CheckSquare, 
  Kanban, 
  BarChart3, 
  Users, 
  Bell, 
  User, 
  Settings, 
  ShieldCheck,
  LogOut,
  FileText,
  CreditCard
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../store/useAuthStore';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Briefcase, label: 'Projects', path: '/projects' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: Kanban, label: 'Kanban', path: '/kanban' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Users, label: 'Team', path: '/team' },
];

const secondaryNavItems = [
  { icon: CreditCard, label: 'Manage Plan', path: '/pricing' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = ({ onAction }: { onAction?: () => void }) => {
  const { user, logout } = useAuthStore();
  const isAdmin = user?.role === 'ADMIN';

  const handleClick = () => {
    if (onAction) onAction();
  };

  return (
    <aside className="h-full w-64 bg-slate-900 flex flex-col shrink-0 border-r border-slate-800/50">
      <div className="p-8">
        <Link to="/" className="flex items-center gap-3 text-white font-bold text-xl group" onClick={handleClick}>
          <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-slate-900 transition-transform group-hover:scale-110 duration-500">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="tracking-tight font-display">EverTask</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4 mb-4">Workspace</div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group",
                isActive 
                  ? "bg-emerald-500/10 text-emerald-400 shadow-[inset_0_0_10px_rgba(16,185,129,0.05)]" 
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              )
            }
          >
            <item.icon className={cn("w-5 h-5 transition-colors", "group-hover:text-emerald-400")} />
            {item.label}
          </NavLink>
        ))}

        {isAdmin && (
          <>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4 mt-8 mb-4">Management</div>
            <NavLink
              to="/admin"
              onClick={handleClick}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group",
                  isActive 
                    ? "bg-emerald-500/10 text-emerald-400 shadow-[inset_0_0_10px_rgba(16,185,129,0.05)]" 
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                )
              }
            >
              <ShieldCheck className="w-5 h-5 group-hover:text-emerald-400" />
              Administration
            </NavLink>
          </>
        )}
      </nav>

      <div className="p-6 border-t border-slate-800/50 flex flex-col gap-1">
        {secondaryNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                isActive 
                  ? "text-emerald-400" 
                  : "text-slate-400 hover:text-slate-200"
              )
            }
          >
            <item.icon className="w-4.5 h-4.5 opacity-60" />
            {item.label}
          </NavLink>
        ))}
        <button
          onClick={() => { logout(); handleClick(); }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-400/80 hover:bg-rose-500/5 hover:text-rose-400 transition-all mt-4 border border-transparent hover:border-rose-500/10"
        >
          <LogOut className="w-5 h-5 opacity-70" />
          Log out
        </button>
      </div>
    </aside>
  );
};
