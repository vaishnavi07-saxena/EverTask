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
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Performance Reports</h1>
          <p className="text-slate-500">Track team productivity and project health analytics.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/10 hover:bg-emerald-950 transition-all">
            <Download className="w-4 h-4" /> Export Data
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Avg Productivity', value: '82%', trend: '+4%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Total Tasks', value: '1,482', trend: '+124', icon: CheckCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Weekly Velocity', value: '34 pts', trend: '+2', icon: BarChart, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Resource Load', value: '76%', trend: '-5%', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bento-card flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-md", 
                  stat.trend.startsWith('+') ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                )}>
                  {stat.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Productivity Chart */}
        <div className="col-span-12 lg:col-span-8 bento-card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800">Productivity Insights</h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button className="px-3 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm">WEEKLY</button>
              <button className="px-3 py-1 text-[10px] font-bold text-slate-500">MONTHLY</button>
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
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold', color: '#064e3b' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tasks" 
                  stroke="#10b981" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Distribution */}
        <div className="col-span-12 lg:col-span-4 bento-card">
          <h3 className="font-bold text-slate-800 mb-6">Task Distribution</h3>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-2xl font-bold text-slate-900">950</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</span>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            {statusData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{Math.round((item.value / 950) * 100)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="col-span-12 lg:col-span-12 bento-card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800">Department Performance</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Circle fill="#10b981" className="w-3 h-3 text-[#10b981]" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle fill="#e2e8f0" className="w-3 h-3 text-[#e2e8f0]" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pending</span>
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
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} 
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="completed" fill="#10b981" radius={[6, 6, 0, 0]} barSize={40} />
                <Bar dataKey="pending" fill="#e2e8f0" radius={[6, 6, 0, 0]} barSize={40} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent High-Impact Achievements */}
      <div className="bento-card bg-emerald-950 text-white border-none relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center">
                <Zap className="text-emerald-950 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">AI Generated Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-900/50 p-4 rounded-2xl border border-emerald-800">
                <p className="text-emerald-100 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  Team productivity increased 15% following the deployment of the new CI/CD pipeline.
                </p>
              </div>
              <div className="bg-emerald-900/50 p-4 rounded-2xl border border-emerald-800">
                <p className="text-emerald-100 flex gap-3">
                  <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                  3 high-priority deadlines are approaching in the next 48 hours for the Nexus Project.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-48 h-48 bg-emerald-800 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 border-8 border-emerald-400/20 rounded-full border-t-emerald-400 animate-spin-slow"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">92%</p>
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1">Efficiency</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
      </div>
    </div>
  );
};
