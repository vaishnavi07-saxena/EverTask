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
  EyeOff
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-600">
    <h1 className="text-3xl font-bold text-emerald-900 mb-4">{title}</h1>
    <p>This page is under development in the current phase.</p>
  </div>
);

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Navbar */}
      <nav className="glass-header px-8 h-18 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-emerald-900 rounded-xl flex items-center justify-center">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-emerald-900 tracking-tight">EverTask</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Pricing</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">About</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Log in</Link>
          <Link to="/signup" className="btn-primary">Get Started</Link>
        </div>
      </nav>

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
            <h1 className="text-6xl md:text-7xl font-bold text-emerald-950 tracking-tight mb-8 leading-[1.1]">
              Manage tasks with <br />
              <span className="text-emerald-500">effortless precision.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              EverTask helps modern teams ship faster through collaborative Kanban boards, 
              deep analytics, and role-based workflows — all in one powerful Bento-style dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/dashboard')} className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
                Launch Dashboard <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
                Book a Demo
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
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000" 
              alt="Dashboard Preview" 
              className="rounded-3xl shadow-2xl border border-slate-200 w-full object-cover max-h-[600px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white border-y border-slate-200 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-emerald-950 mb-4">Everything you need to ship.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Stop juggling tools. EverTask brings your team under one roof with features designed for scale.</p>
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
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-50 text-emerald-600 mb-6 group-hover:bg-emerald-900 group-hover:text-white transition-all">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200 pt-12">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-900 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-emerald-900 tracking-tight">EverTask</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 EverTask Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-emerald-900 transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-emerald-900 transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-emerald-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
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
    <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[calc(100vh-160px)] min-h-[600px]">
      {/* Hero/Welcome Card */}
      <div className="col-span-12 lg:col-span-8 row-span-2 bg-emerald-900 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Alex!</h2>
          <p className="text-emerald-100/70 max-w-md">You have 4 tasks to review today and a project meeting in 2 hours. Your team's productivity is up by 12% this week.</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <button className="btn-accent">Create Project</button>
          <button className="px-6 py-2.5 bg-white/10 text-white border border-white/20 font-bold rounded-xl text-sm backdrop-blur-sm hover:bg-white/20 transition-all">View Reports</button>
        </div>
        {/* Abstract Shape Decor */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute right-12 top-8 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
      </div>

      {/* Stats Cards */}
      <div className="col-span-6 lg:col-span-4 row-span-1 bento-card flex flex-col justify-between">
        <div className="flex justify-between items-center text-slate-500">
          <span className="text-sm font-medium">Total Projects</span>
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          </div>
        </div>
        <div className="flex items-end gap-2 text-slate-900">
          <span className="text-3xl font-bold">24</span>
          <span className="text-emerald-500 text-xs font-bold mb-1">+2 new</span>
        </div>
      </div>

      <div className="col-span-6 lg:col-span-4 row-span-1 bento-card flex flex-col justify-between">
        <div className="flex justify-between items-center text-slate-500">
          <span className="text-sm font-medium">Active Tasks</span>
          <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
          </div>
        </div>
        <div className="flex items-end gap-2 text-slate-900">
          <span className="text-3xl font-bold">142</span>
          <span className="text-slate-400 text-xs font-bold mb-1">12 overdue</span>
        </div>
      </div>

      {/* Priority Tasks */}
      <div className="col-span-12 lg:col-span-5 row-span-4 bento-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-800">Priority Tasks</h3>
          <button className="text-emerald-600 text-xs font-bold hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { title: 'Auth System Refactor', project: 'Nexus API', time: '2h left', status: 'IN REVIEW', color: 'bg-red-400' },
            { title: 'UI Kit Documentation', project: 'Design System', time: 'Tomorrow', status: 'PROGRESS', color: 'bg-amber-400' },
            { title: 'DB Migration Strategy', project: 'Infrastructure', time: 'Friday', status: 'PENDING', color: 'bg-slate-400' },
            { title: 'AWS S3 Bucket Fix', project: 'Cloud', time: 'Urgent', status: 'BLOCKED', color: 'bg-red-400' },
          ].map((task, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-sm transition-all">
              <div className="flex gap-4">
                <div className={cn("w-1 h-10 rounded-full", task.color)}></div>
                <div>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{task.title}</p>
                  <p className="text-[11px] text-slate-500">{task.project} &bull; {task.time}</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-white border border-slate-100 text-slate-600 text-[10px] font-bold rounded-lg uppercase tracking-tight">{task.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Productivity Chart Placeholder */}
      <div className="col-span-12 lg:col-span-4 row-span-2 bento-card flex flex-col">
        <h3 className="font-bold text-slate-800 mb-4">Productivity Trends</h3>
        <div className="flex-1 flex items-end justify-between gap-2">
          {[24, 32, 48, 20, 40, 28, 36].map((h, i) => (
            <div key={i} className="w-full relative group">
              <div 
                className={cn(
                  "w-full rounded-t-lg transition-all duration-500",
                  i === 2 ? "bg-emerald-400 h-[80%]" : "bg-emerald-100 h-[40%]"
                )}
                style={{ height: `${h * 2}px` }}
              ></div>
              {i === 2 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-600">Peak</div>}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>

      {/* Team Activity */}
      <div className="col-span-12 lg:col-span-3 row-span-4 bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex flex-col shadow-inner">
        <h3 className="font-bold text-emerald-900 mb-4">Team Activity</h3>
        <div className="space-y-4">
          {[
            { name: 'John Doe', action: 'Updated 4 tasks', initial: 'JD' },
            { name: 'Sarah Meyer', action: 'Completed \'Bug #401\'', initial: 'SM' },
            { name: 'Mike Kim', action: 'Shared 2 attachments', initial: 'MK' },
          ].map((member, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-xs shadow-sm text-emerald-900 border border-emerald-100">
                {member.initial}
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-950">{member.name}</p>
                <p className="text-[10px] text-emerald-700/80">{member.action}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4">
           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-emerald-100">
              <p className="text-[10px] font-bold text-emerald-800 mb-2 uppercase tracking-wider">Quick Invite</p>
              <input type="text" placeholder="Email address" className="w-full text-xs p-2.5 bg-slate-50/50 rounded-xl border border-emerald-100 mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
              <button className="w-full py-2 bg-emerald-900 text-white text-xs font-bold rounded-xl hover:bg-emerald-950 shadow-lg shadow-emerald-900/10 active:scale-95 transition-all">Send Invite</button>
           </div>
        </div>
      </div>

      {/* Project Milestones */}
      <div className="col-span-12 lg:col-span-4 row-span-2 bento-card">
        <h3 className="font-bold text-slate-800 mb-4">Milestones</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-bold">22</div>
            <div className="border-b border-slate-50 pb-2 w-full">
              <p className="text-sm font-bold text-slate-800">V1.0 Live Release</p>
              <p className="text-xs text-slate-500">Production server push</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold">25</div>
            <div className="w-full">
              <p className="text-sm font-bold text-slate-800">Security Audit</p>
              <p className="text-xs text-slate-500">External compliance team</p>
            </div>
          </div>
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
