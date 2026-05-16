import React from 'react';
import { NavLink } from 'react-router-dom';
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

export const Sidebar = () => {
  const { user, logout } = useAuthStore();
  const isAdmin = user?.role === 'ADMIN';

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-emerald-900 flex flex-col shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-8 h-8 bg-emerald-400 rounded-lg flex items-center justify-center text-emerald-900">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span>EverTask</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-xs font-semibold text-emerald-500/50 uppercase tracking-wider px-3 mb-2">Main Menu</div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                isActive 
                  ? "bg-emerald-800/50 text-emerald-100" 
                  : "text-emerald-300 hover:bg-emerald-800/30 hover:text-emerald-100"
              )
            }
          >
            <item.icon className="w-5 h-5 opacity-70" />
            {item.label}
          </NavLink>
        ))}

        {isAdmin && (
          <>
            <div className="text-xs font-semibold text-emerald-500/50 uppercase tracking-wider px-3 mt-6 mb-2">Admin Panel</div>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-emerald-800/50 text-emerald-100" 
                    : "text-emerald-300 hover:bg-emerald-800/30 hover:text-emerald-100"
                )
              }
            >
              <ShieldCheck className="w-5 h-5 opacity-70" />
              Administration
            </NavLink>
          </>
        )}
      </nav>

      <div className="p-4 border-t border-emerald-800 flex flex-col gap-1">
        {secondaryNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                isActive 
                  ? "bg-emerald-800/50 text-emerald-100" 
                  : "text-emerald-300 hover:bg-emerald-800/30"
              )
            }
          >
            <item.icon className="w-5 h-5 opacity-60" />
            {item.label}
          </NavLink>
        ))}
        <button
          onClick={() => logout()}
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-red-400 hover:bg-red-900/20 transition-colors mt-2"
        >
          <LogOut className="w-5 h-5 opacity-70" />
          Logout system
        </button>
      </div>
    </aside>
  );
};
