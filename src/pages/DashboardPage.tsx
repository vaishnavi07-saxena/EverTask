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
    <div className="space-y-12 pb-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Organization Pulse</h1>
          <p className="text-slate-500 font-medium text-lg">Real-time intelligence from your operational network.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary px-6 flex items-center gap-2 group">
             System Logs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="btn-primary flex items-center gap-2 px-8">
            <Zap className="w-4 h-4" /> Deploy New Project
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Active Projects', value: '12', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Network Tasks', value: '64', icon: CheckSquare, color: 'text-slate-600', bg: 'bg-slate-100' },
          { label: 'Resolved', value: '192', icon: CheckCircle2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Yield Rate', value: '+12%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="premium-card flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <p className="text-4xl font-black text-slate-900 tracking-tight">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Main Chart */}
        <div className="col-span-12 lg:col-span-8 premium-card">
          <div className="flex items-center justify-between mb-10">
            <div>
               <h3 className="text-xl font-black text-slate-900 tracking-tight">Activity Velocity</h3>
               <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Operational Throughput Over 7 Days</p>
            </div>
            <div className="flex bg-slate-100/50 p-1.5 rounded-xl border border-slate-200/50">
              <button className="px-5 py-2 bg-white rounded-lg text-[10px] font-black tracking-widest shadow-sm">WEEKLY</button>
              <button className="px-5 py-2 text-[10px] font-black tracking-widest text-slate-500 hover:text-slate-900 transition-colors">MONTHLY</button>
            </div>
          </div>
          <div className="h-80 w-full px-2">
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
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b', fontWeight: 600 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b', fontWeight: 600 }} />
                <Tooltip 
                   cursor={{ fill: '#f1f5f9', radius: 10 }}
                   contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '16px' }}
                />
                <Bar dataKey="completed" fill="#10b981" radius={[8, 8, 8, 8]} barSize={24} />
                <Bar dataKey="pending" fill="#cbd5e1" radius={[8, 8, 8, 8]} barSize={24} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="col-span-12 lg:col-span-4 premium-card flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Live Network</h3>
            <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Real-Time Team Streams</p>
          </div>
          <div className="space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {[
              { user: 'Sarah K.', action: 'completed task', target: 'API Integration', time: '2m ago' },
              { user: 'Mike R.', action: 'created project', target: 'Summer Launch', time: '15m ago' },
              { user: 'Elena V.', action: 'added comment', target: 'Design Review', time: '1h ago' },
              { user: 'Jason D.', action: 'joined team', target: 'Marketing', time: '5h ago' },
              { user: 'System', action: 'backup success', target: 'Internal DB', time: '8h ago' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-5 group cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:rotate-6 transition-all duration-500">
                  <User className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 border-b border-slate-100 pb-5 last:border-0 group-hover:translate-x-2 transition-transform duration-500">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-black text-slate-900">{activity.user}</span> {activity.action} {' '}
                    <span className="font-bold text-emerald-600 block sm:inline">{activity.target}</span>
                  </p>
                  <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Preview */}
        <div className="col-span-12 premium-card">
          <div className="flex items-center justify-between mb-10">
            <div>
               <h3 className="text-xl font-black text-slate-900 tracking-tight">Strategic Portfolios</h3>
               <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Active High-Impact Initiatives</p>
            </div>
            <Link to="/projects" className="btn-secondary px-5 py-2 text-[10px] font-black tracking-widest">VIEW ALL NODES</Link>
          </div>
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Designation</th>
                  <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                  <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contributors</th>
                  <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Efficiency</th>
                  <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Aurora Platform', status: 'Optimal', team: 4, progress: 65, date: '12 May', color: 'text-emerald-700 bg-emerald-500/10' },
                  { name: 'Nexus Mobile', status: 'Warning', team: 2, progress: 90, date: '18 May', color: 'text-amber-700 bg-amber-500/10' },
                  { name: 'Legacy Cleanup', status: 'Idle', team: 1, progress: 20, date: '22 May', color: 'text-slate-500 bg-slate-100' },
                  { name: 'Brand Expansion', status: 'Optimal', team: 5, progress: 45, date: '04 Jun', color: 'text-emerald-700 bg-emerald-500/10' },
                ].map((p, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-all duration-300">
                    <td className="py-6">
                      <p className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{p.name}</p>
                    </td>
                    <td className="py-6">
                      <span className={cn("px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest", p.color)}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-6">
                      <div className="flex -space-x-3">
                        {Array.from({ length: p.team }).map((_, j) => (
                          <div key={j} className="w-8 h-8 rounded-xl border-2 border-white bg-slate-200 shadow-sm transition-transform group-hover:translate-x-1"></div>
                        ))}
                      </div>
                    </td>
                    <td className="py-6 w-48">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000 group-hover:scale-x-105 origin-left" style={{ width: `${p.progress}%` }}></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-900">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="py-6 text-right">
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{p.date}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="col-span-12 premium-card bg-slate-900 text-white border-none relative overflow-hidden group">
           <div className="relative z-10 p-6 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                 <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-all duration-500">
                    <Zap className="text-slate-900 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-white uppercase">Predictive Engine</h3>
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">Module V4.2 active</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-8 text-xl leading-relaxed font-medium">
                  Analysis indicates <span className="text-white font-bold italic underline decoration-emerald-500/50">"Aurora Platform"</span> is proceeding at 140% velocity. 
                  Optimization suggested: Reallocate 2 frontend resources to "Nexus Mobile" to maintain horizontal stability.
                </p>
                <div className="flex gap-6">
                  <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-emerald-500/20">Authorize Switch</button>
                  <button className="px-8 py-3 text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white transition-colors border border-slate-700 rounded-xl hover:border-slate-600">Simulate Impact</button>
                </div>
              </div>
              <div className="hidden lg:block w-56 h-56 rounded-full relative">
                 <div className="absolute inset-0 border-2 border-emerald-500/10 rounded-full animate-spin-slow"></div>
                 <div className="absolute inset-4 border border-emerald-500/20 rounded-full animate-reverse-spin"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                       <TrendingUp className="w-12 h-12 text-emerald-500 mb-2" />
                       <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">+18.5%</span>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
        </div>
      </div>
    </div>
  );
};
