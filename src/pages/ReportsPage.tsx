import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Download, 
  FileBox, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Calendar,
  Filter,
  PieChart as PieIcon,
  Circle,
  Zap
} from 'lucide-react';
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Cell, 
  Pie
} from 'recharts';
import { cn } from '../utils/cn';

const productivityData = [
  { name: 'Mon', tasks: 12 },
  { name: 'Tue', tasks: 19 },
  { name: 'Wed', tasks: 15 },
  { name: 'Thu', tasks: 22 },
  { name: 'Fri', tasks: 30 },
  { name: 'Sat', tasks: 10 },
  { name: 'Sun', tasks: 8 },
];

const teamData = [
  { name: 'Engineering', completed: 45, pending: 12 },
  { name: 'Design', completed: 32, pending: 8 },
  { name: 'Marketing', completed: 28, pending: 15 },
  { name: 'QA', completed: 20, pending: 5 },
];

const statusData = [
  { name: 'Completed', value: 400, color: '#10b981' },
  { name: 'In Progress', value: 300, color: '#3b82f6' },
  { name: 'Pending', value: 200, color: '#94a3b8' },
  { name: 'Blocked', value: 50, color: '#ef4444' },
];

export const ReportsPage = () => {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Analytical Intelligence</h1>
          <p className="text-slate-500 font-medium text-lg">Synchronized performance metrics and cross-departmental velocity.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            <Filter className="w-4 h-4 text-emerald-600" /> Adjust Filters
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all active:scale-95">
            <Download className="w-4 h-4 text-emerald-400" /> Export Protocol
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Avg Productivity', value: '82%', trend: '+4%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Total Tasks', value: '1,482', trend: '+124', icon: CheckCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Weekly Velocity', value: '34 pts', trend: '+2', icon: BarChart, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Resource Load', value: '76%', trend: '-5%', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="premium-card flex items-center gap-5 group">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6", stat.bg)}>
              <stat.icon className={cn("w-7 h-7", stat.color)} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                <span className={cn("text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tight", 
                  stat.trend.startsWith('+') ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                )}>
                  {stat.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-12 gap-8">
        {/* Productivity Chart */}
        <div className="col-span-12 lg:col-span-8 premium-card p-10">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-slate-900 w-5 h-5" />
               </div>
               <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-emerald-500/30">Productivity Streams</h3>
            </div>
            <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200/50">
              <button className="px-5 py-2 bg-white rounded-lg text-[10px] font-black shadow-sm uppercase tracking-widest text-slate-900">WEEKLY</button>
              <button className="px-5 py-2 text-[10px] font-black text-slate-400 hover:text-slate-600 uppercase tracking-widest transition-colors">MONTHLY</button>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 900, dy: 10 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 900 }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', background: '#fff', padding: '1.5rem' }}
                  itemStyle={{ fontWeight: '900', color: '#111827', fontSize: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tasks" 
                  stroke="#10b981" 
                  strokeWidth={5} 
                  dot={{ r: 0 }}
                  activeDot={{ r: 8, fill: '#10b981', stroke: '#fff', strokeWidth: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Distribution */}
        <div className="col-span-12 lg:col-span-4 premium-card p-10">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <PieIcon className="text-slate-900 w-5 h-5" />
             </div>
             <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-indigo-500/30">Allocation Matrix</h3>
          </div>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={10}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">950</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Total Units</span>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            {statusData.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}50` }}></div>
                  <span className="text-xs font-black text-slate-600 uppercase tracking-widest">{item.name}</span>
                </div>
                <span className="text-sm font-black text-slate-900 tracking-tight">{Math.round((item.value / 950) * 100)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="col-span-12 lg:col-span-12 premium-card p-10">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Users className="text-slate-900 w-5 h-5" />
               </div>
               <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-blue-500/30">Department Synergies</h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Circle fill="#10b981" className="w-2 h-2 text-[#10b981] shadow-[0_0_8px_#10b981]" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Completed Nodes</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle fill="#e2e8f0" className="w-2 h-2 text-[#e2e8f0]" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Pending Sync</span>
              </div>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={teamData} barGap={12}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 900, dy: 10 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 900 }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc', radius: 10 }}
                  contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '1.5rem' }}
                />
                <Bar dataKey="completed" fill="#10b981" radius={[8, 8, 0, 0]} barSize={48} />
                <Bar dataKey="pending" fill="#e2e8f0" radius={[8, 8, 0, 0]} barSize={48} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent High-Impact Achievements */}
      <div className="premium-card bg-slate-950 text-white border-none relative overflow-hidden group">
        <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12 p-6 xl:p-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20 group-hover:rotate-6 transition-transform">
                <Zap className="text-slate-950 w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black tracking-tight uppercase italic">Neural Insight Engine</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
                <p className="text-slate-300 text-lg font-medium leading-relaxed flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
                  Velocity expansion detected: 15% surge in architectural deployment efficacy.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
                <p className="text-slate-300 text-lg font-medium leading-relaxed flex gap-4">
                  <Calendar className="w-6 h-6 text-emerald-400 shrink-0 rotate-12" />
                  3 critical synchronization points identified in the Nexus Mobile repository cluster.
                </p>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="w-64 h-64 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center relative border border-white/10 group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 border-[12px] border-emerald-500/20 rounded-full border-t-emerald-500 animate-spin-slow"></div>
              <div className="text-center">
                <p className="text-6xl font-black text-white tracking-tighter italic">92%</p>
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] mt-2">Core Efficiency</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute -right-32 -bottom-32 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      </div>
    </div>
  );
};
