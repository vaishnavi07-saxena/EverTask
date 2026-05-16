import React from 'react';
import { cn } from '../utils/cn';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Clock,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Briefcase,
  CheckSquare,
  TrendingUp,
  BarChart,
  Circle
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
  Line
} from 'recharts';
import { Link, useNavigate } from 'react-router-dom';

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-600">
    <h1 className="text-3xl font-bold text-emerald-900 mb-4">{title}</h1>
    <p>This page is under development in the current phase.</p>
  </div>
);

import { Testimonials } from '../components/sections/Testimonials';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
              Scale your team efficiency
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-emerald-950 tracking-tight mb-8 leading-[1.1]">
              Manage tasks with <br />
              <span className="text-emerald-500">effortless precision.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              EverTask helps modern teams ship faster through collaborative Kanban boards, 
              deep analytics, and role-based workflows — all in one powerful Bento-style dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/dashboard')} className="btn-primary flex items-center gap-2 text-lg px-8 py-4 shadow-xl shadow-emerald-900/10">
                Launch Dashboard <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => navigate('/pricing')} className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
                View Pricing
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full -z-10 transform scale-75 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2000" 
              alt="Dashboard Preview" 
              className="rounded-3xl shadow-2xl border border-slate-200 w-full object-cover max-h-[650px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white border-y border-slate-100 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by 500+ hyper-growth companies</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {['VOLKSWAGEN', 'DROPBOX', 'INTERCOM', 'VERCEL', 'STRIPE'].map(logo => (
              <span key={logo} className="text-2xl font-black text-slate-900 tracking-tighter italic">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-emerald-950 mb-4 tracking-tight">Everything you need to ship.</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">Stop juggling tools. EverTask brings your team under one roof with features designed for scale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Ultra Fast", desc: "Built with speed in mind. Our dashboard is highly responsive and smooth." },
              { icon: BarChart3, title: "Analytics", desc: "Track performance with deep insights and productivity trends." },
              { icon: Users, title: "Team Sync", desc: "Collaborate in real-time with your team members across projects." },
              { icon: CheckCircle2, title: "Kanban", desc: "Drag and drop tasks through custom workflows with ease." },
              { icon: Clock, title: "Deadlines", desc: "Never miss a release with smart reminders and project milestones." },
              { icon: ShieldCheck, title: "Secure", desc: "Role-based access control keeps your sensitive data protected." },
            ].map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 group transition-all shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-900 group-hover:text-white transition-all shadow-sm">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to reclaim your time?</h2>
              <p className="text-emerald-100/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands of teams already scaling their engineering efficiency with EverTask. 
                Start your 14-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => navigate('/signup')} className="btn-accent px-10 py-4 shadow-xl shadow-emerald-400/20">Create My Free Account</button>
                <button className="px-10 py-4 text-white font-bold hover:bg-white/5 rounded-xl border border-white/20 transition-all">Contact Sales</button>
              </div>
           </div>
           {/* Abstract Shape */}
           <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-800 rounded-full blur-[120px] opacity-30 -translate-y-1/2 -translate-x-1/2"></div>
           <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400 rounded-full blur-[100px] opacity-10 translate-y-1/2 translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Sidebar pattern */}
      <div className="hidden lg:flex bg-emerald-950 p-16 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-emerald-950 w-7 h-7" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">EverTask</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-8 leading-[1.2]">
            Reclaim your team's <br /> 
            <span className="text-emerald-400">productivity today.</span>
          </h2>
          <p className="text-emerald-100/60 text-lg max-w-md">
            Join 5,000+ teams that use EverTask to manage their high-impact projects.
          </p>
        </div>
        
        <div className="relative z-10 flex gap-12 items-center">
           <div className="flex -space-x-3">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-950 overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
             ))}
           </div>
           <p className="text-emerald-100 font-medium">+800 developers online</p>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-[80px] opacity-30 translate-y-1/3 -translate-x-1/4"></div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-900 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-emerald-900 tracking-tight">EverTask</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
          <p className="text-slate-500 mb-8">Enter your credentials to access your workspace.</p>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email address</label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <Link to="/forgot-password" title="Forgot password?" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-12 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 py-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
              <label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer select-none">Remember me for 30 days</label>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-base shadow-lg shadow-emerald-900/10">
              Sign in to EverTask
            </button>
          </form>

          <p className="mt-10 text-center text-slate-600">
            Don't have an account? {' '}
            <Link to="/signup" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Create one free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export const SignupPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState<'ADMIN' | 'MEMBER'>('MEMBER');

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Stats/Info */}
      <div className="hidden lg:flex bg-emerald-900 p-16 flex-col justify-center relative overflow-hidden">
        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-emerald-950 w-7 h-7" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">EverTask</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Start building your dream team.</h2>
          <div className="space-y-6 mt-12">
            {[
              "Free 14-day trial, no credit card required.",
              "Unlimited projects and team members.",
              "Deep analytics and custom Kanban workflows."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-emerald-100/80 text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-emerald-400 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 border border-emerald-400 rounded-full"></div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md py-12">
          <div className="mb-10 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-900 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-emerald-900 tracking-tight">EverTask</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create an account</h1>
          <p className="text-slate-500 mb-8">Join thousands of teams already using EverTask.</p>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Work Email</label>
              <input 
                type="email" 
                placeholder="john@company.com" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                onClick={() => setRole('MEMBER')}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all text-left",
                  role === 'MEMBER' 
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm" 
                    : "border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200"
                )}
              >
                <Users className={cn("w-6 h-6 mb-2", role === 'MEMBER' ? "text-emerald-600" : "text-slate-400")} />
                <p className="font-bold text-sm">Team Member</p>
                <p className="text-[10px] opacity-70">Collaborate on tasks</p>
              </button>
              <button 
                type="button" 
                onClick={() => setRole('ADMIN')}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all text-left",
                  role === 'ADMIN' 
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm" 
                    : "border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200"
                )}
              >
                <ShieldCheck className={cn("w-6 h-6 mb-2", role === 'ADMIN' ? "text-emerald-600" : "text-slate-400")} />
                <p className="font-bold text-sm">System Admin</p>
                <p className="text-[10px] opacity-70">Manage everything</p>
              </button>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                required
              />
              <p className="mt-2 text-[11px] text-slate-500">Must be at least 8 characters long with a mix of letters and numbers.</p>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-base shadow-lg shadow-emerald-900/10 mt-4">
              Create free account
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600">
            Already have an account? {' '}
            <Link to="/login" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export const ForgotPasswordPage = () => <PagePlaceholder title="Reset Password" />;
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

export const ProjectsPage = () => <PagePlaceholder title="All Projects" />;
export const ProjectDetailPage = () => <PagePlaceholder title="Project Details" />;
export const TasksPage = () => <PagePlaceholder title="My Tasks" />;
export const KanbanPage = () => <PagePlaceholder title="Kanban Board" />;
export const AnalyticsPage = () => <PagePlaceholder title="Analytics & Reports" />;
export const NotificationsPage = () => <PagePlaceholder title="Notifications" />;
export const TeamPage = () => <PagePlaceholder title="Team Members" />;
export const ProfilePage = () => <PagePlaceholder title="User Profile" />;
export const SettingsPage = () => <PagePlaceholder title="Settings" />;
export const AdminPanelPage = () => <PagePlaceholder title="Administration Panel" />;
export const NotFoundPage = () => <PagePlaceholder title="404 - Page Not Found" />;
