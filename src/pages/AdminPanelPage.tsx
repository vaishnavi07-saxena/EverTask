import React from 'react';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Shield, 
  Mail, 
  Calendar,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';
import { cn } from '../utils/cn';

const mockUsers = [
  { id: '1', name: 'Alex Sterling', email: 'alex@example.com', role: 'ADMIN', status: 'ACTIVE', joined: 'Jan 12, 2024', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { id: '2', name: 'Sarah Konor', email: 'sarah@example.com', role: 'MEMBER', status: 'ACTIVE', joined: 'Feb 05, 2024', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: '3', name: 'Mike Ross', email: 'mike@example.com', role: 'MEMBER', status: 'INACTIVE', joined: 'Mar 15, 2024', avatar: 'https://i.pravatar.cc/150?u=mike' },
  { id: '4', name: 'Elena Vance', email: 'elena@example.com', role: 'MEMBER', status: 'PENDING', joined: 'Apr 02, 2024', avatar: 'https://i.pravatar.cc/150?u=elena' },
  { id: '5', name: 'System Bot', email: 'bot@example.com', role: 'ADMIN', status: 'ACTIVE', joined: 'Jan 01, 2024', avatar: 'https://i.pravatar.cc/150?u=bot' },
];

export const AdminPanelPage = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">User Management</h1>
          <p className="text-slate-500">Manage your team members, roles, and permissions.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus className="w-4 h-4" /> Add User
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Users', value: '1,284', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Active Now', value: '432', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Pending Invites', value: '12', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bento-card flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table Card */}
      <div className="bento-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search users by name or email..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
              Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">User</th>
                <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role</th>
                <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Joined</th>
                <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((u) => (
                <tr key={u.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img src={u.avatar} alt="" className="w-10 h-10 rounded-xl border-2 border-white shadow-sm" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">{u.name}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {u.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Shield className={cn("w-3.5 h-3.5", u.role === 'ADMIN' ? 'text-purple-500' : 'text-slate-400')} />
                      <span className={cn("text-xs font-bold uppercase tracking-wider", u.role === 'ADMIN' ? 'text-purple-600' : 'text-slate-600')}>
                        {u.role}
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      u.status === 'ACTIVE' ? "bg-emerald-100 text-emerald-700" : 
                      u.status === 'PENDING' ? "bg-amber-100 text-amber-700" :
                      "bg-slate-100 text-slate-500"
                    )}>
                      {u.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {u.joined}
                    </p>
                  </td>
                  <td className="py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">Showing 1 to 5 of 1,284 users</p>
          <div className="flex gap-2">
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-400 disabled:opacity-50" disabled>Previous</button>
             <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/20">1</button>
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">2</button>
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
