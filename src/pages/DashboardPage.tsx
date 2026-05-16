import React from 'react';
import { 
  Briefcase, 
  CheckSquare, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  User,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

export const DashboardPage = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Organization Overview</h1>
          <p className="text-slate-500">Welcome back, here's what's happening with your projects today.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-primary flex items-center gap-2">
            <Zap className="w-4 h-4" /> Quick Build
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Projects', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Pending Tasks', value: '64', icon: CheckSquare, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Completed', value: '192', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Productivity', value: '+12%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bento-card flex items-center gap-4"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart */}
        <div className="col-span-12 lg:col-span-8 bento-card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800">Weekly Task Velocity</h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button className="px-3 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm">WEEKLY</button>
              <button className="px-3 py-1 text-[10px] font-bold text-slate-500">MONTHLY</button>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={[
                { name: 'Mon', completed: 12, pending: 8 },
                { name: 'Tue', completed: 19, pending: 12 },
                { name: 'Wed', completed: 15, pending: 10 },
                { name: 'Thu', completed: 22, pending: 15 },
                { name: 'Fri', completed: 30, pending: 5 },
                { name: 'Sat', completed: 10, pending: 2 },
                { name: 'Sun', completed: 8, pending: 1 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip 
                   cursor={{ fill: '#f8fafc' }}
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="col-span-12 lg:col-span-4 bento-card overflow-hidden">
          <h3 className="font-bold text-slate-800 mb-6 font-sans">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { user: 'Sarah K.', action: 'completed task', target: 'API Integration', time: '2m ago' },
              { user: 'Mike R.', action: 'created project', target: 'Summer Launch', time: '15m ago' },
              { user: 'Elena V.', action: 'added comment', target: 'Design Review', time: '1h ago' },
              { user: 'System', action: 'backup success', target: 'Server #4', time: '2h ago' },
              { user: 'Jason D.', action: 'joined team', target: 'Marketing', time: '5h ago' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <User className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                </div>
                <div className="flex-1 border-b border-slate-50 pb-4 last:border-0 group-hover:translate-x-1 transition-transform">
                  <p className="text-sm text-slate-600">
                    <span className="font-bold text-slate-900">{activity.user}</span> {activity.action} {' '}
                    <span className="font-semibold text-emerald-600">{activity.target}</span>
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Table Preview */}
        <div className="col-span-12 lg:col-span-12 bento-card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800">Recent Projects</h3>
            <Link to="/projects" className="text-emerald-600 text-xs font-bold hover:underline">View All Projects</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project Name</th>
                  <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Team</th>
                  <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</th>
                  <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Aurora Platform', status: 'In Progress', team: 4, progress: 65, date: '12 May', color: 'text-emerald-600 bg-emerald-50' },
                  { name: 'Nexus Mobile', status: 'Review', team: 2, progress: 90, date: '18 May', color: 'text-blue-600 bg-blue-50' },
                  { name: 'Legacy Cleanup', status: 'Pending', team: 1, progress: 20, date: '22 May', color: 'text-slate-600 bg-slate-50' },
                  { name: 'Brand Expansion', status: 'In Progress', team: 5, progress: 45, date: '04 Jun', color: 'text-emerald-600 bg-emerald-50' },
                ].map((p, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4">
                      <p className="text-sm font-bold text-slate-900">{p.name}</p>
                    </td>
                    <td className="py-4">
                      <span className={cn("px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight", p.color)}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex -space-x-2">
                        {Array.from({ length: p.team }).map((_, j) => (
                          <div key={j} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 w-32">
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${p.progress}%` }}></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="text-xs font-bold text-slate-500">{p.date}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insight Special Card */}
        <div className="col-span-12 lg:col-span-12 bento-card bg-emerald-950 text-white border-none relative overflow-hidden">
           <div className="relative z-10 p-4 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                 <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center">
                    <Zap className="text-emerald-950 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">Smart Insights</h3>
                </div>
                <p className="text-emerald-100/80 mb-6 text-lg">
                  Based on your current speed, you are on track to complete <span className="text-emerald-400 font-bold">"Aurora Platform"</span> 
                  3 days earlier than projected. Consider pulling tasks from the iceberg.
                </p>
                <div className="flex gap-4">
                  <button className="btn-accent px-6">Apply Suggestion</button>
                  <button className="px-6 py-2 text-white font-bold opacity-60 hover:opacity-100">Dismiss</button>
                </div>
              </div>
              <div className="hidden md:block w-40 h-40 bg-emerald-900 rounded-full relative">
                 <div className="absolute inset-0 border-4 border-emerald-400/20 rounded-full border-t-emerald-400 animate-spin-slow"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-emerald-400" />
                 </div>
              </div>
           </div>
           <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-800 rounded-full blur-[100px] opacity-30"></div>
        </div>
      </div>
    </div>
  );
};
