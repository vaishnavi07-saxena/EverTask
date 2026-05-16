import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MoreHorizontal,
  Calendar,
  User as UserIcon,
  Tag
} from 'lucide-react';
import { cn } from '../utils/cn';
import { motion } from 'motion/react';

const mockTasks = [
  { id: '1', title: 'Implement Auth Middleware', status: 'IN_PROGRESS', priority: 'HIGH', assignee: 'Alex Sterling', due: 'Tomorrow', category: 'Backend' },
  { id: '2', title: 'Design System Update', status: 'TODO', priority: 'MEDIUM', assignee: 'Sarah Konor', due: 'May 20', category: 'Design' },
  { id: '3', title: 'Fix Dashboard Chart Resize', status: 'COMPLETED', priority: 'LOW', assignee: 'Alex Sterling', due: 'Yesterday', category: 'Frontend' },
  { id: '4', title: 'Q3 Product Roadmap', status: 'IN_PROGRESS', priority: 'HIGH', assignee: 'Mike Ross', due: 'May 18', category: 'Planning' },
  { id: '5', title: 'API Documentation Site', status: 'TODO', priority: 'MEDIUM', assignee: 'Elena Vance', due: 'May 25', category: 'Docs' },
];

const priorityColors = {
  HIGH: 'text-rose-600 bg-rose-50',
  MEDIUM: 'text-amber-600 bg-amber-50',
  LOW: 'text-emerald-600 bg-emerald-50',
};

const statusIcons = {
  TODO: CircleIcon,
  IN_PROGRESS: Clock,
  COMPLETED: CheckCircle2,
};

function CircleIcon(props: any) {
  return (
    <svg 
      {...props}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export const TasksPage = () => {
  const [activeTab, setActiveTab] = React.useState<'LIST' | 'BOARD'>('LIST');

  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2 italic">Operation Hub</h1>
          <p className="text-slate-500 font-medium text-lg">Granular objective tracking and resource distribution dynamics.</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50">
             <button 
               onClick={() => setActiveTab('LIST')}
               className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", activeTab === 'LIST' ? "bg-white text-slate-900 shadow-xl shadow-slate-200/50" : "text-slate-400 hover:text-slate-600")}
             >
                LIST
             </button>
             <button 
               onClick={() => setActiveTab('BOARD')}
               className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", activeTab === 'BOARD' ? "bg-white text-slate-900 shadow-xl shadow-slate-200/50" : "text-slate-400 hover:text-slate-600")}
             >
                BOARD
             </button>
          </div>
          <button className="flex items-center gap-3 px-8 py-3.5 bg-emerald-500 text-white rounded-2xl text-xs font-black uppercase tracking-[0.1em] shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95">
            <Plus className="w-5 h-5 shadow-[0_0_10px_rgba(255,255,255,0.5)]" /> Initialize Objective
          </button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="grid md:grid-cols-12 gap-5 items-stretch">
         <div className="md:col-span-8 relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Query task by title, hash, or deployment lead..." 
              className="w-full bg-white border border-slate-200 rounded-[2rem] py-5 pl-14 pr-6 text-base font-black tracking-tight focus:outline-none focus:ring-8 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all outline-none shadow-sm"
            />
         </div>
         <div className="md:col-span-4 flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-3 px-6 py-5 bg-white border border-slate-200 rounded-[2rem] text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
               <Filter className="w-4 h-4 text-emerald-500" /> Filter
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 px-6 py-5 bg-white border border-slate-200 rounded-[2rem] text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
               Sort: Recent
            </button>
         </div>
      </div>

      {activeTab === 'LIST' ? (
        <div className="space-y-4">
          {mockTasks.map((task, i) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group premium-card p-8 flex items-center gap-8 relative overflow-hidden"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm",
                task.status === 'COMPLETED' ? "bg-emerald-500 text-white shadow-emerald-500/20" : "bg-slate-100 text-slate-400 group-hover:bg-slate-900 group-hover:text-white"
              )}>
                {task.status === 'COMPLETED' ? <CheckCircle2 className="w-7 h-7" /> : task.status === 'IN_PROGRESS' ? <Clock className="w-7 h-7" /> : <AlertCircle className="w-7 h-7" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4 mb-2">
                   <h3 className={cn("text-xl font-black tracking-tight truncate uppercase leading-none", task.status === 'COMPLETED' ? 'text-slate-400' : 'text-slate-900')}>
                      {task.title}
                   </h3>
                   <span className={cn("px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest", priorityColors[task.priority as keyof typeof priorityColors])}>
                      {task.priority}
                   </span>
                </div>
                <div className="flex items-center gap-6">
                   <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Tag className="w-3.5 h-3.5 text-emerald-500" /> {task.category}</span>
                   <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Calendar className="w-3.5 h-3.5 text-emerald-500" /> {task.due}</span>
                   <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><UserIcon className="w-3.5 h-3.5 text-emerald-500" /> {task.assignee}</span>
                </div>
              </div>

              <div className="flex -space-x-3 mr-6 hidden xl:flex">
                 {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="w-10 h-10 rounded-2xl border-4 border-white bg-slate-200 group-hover:translate-x-1 transition-transform"></div>
                 ))}
              </div>

              <button className="p-3 text-slate-300 hover:text-slate-900 bg-transparent hover:bg-slate-100 rounded-2xl transition-all">
                <MoreHorizontal className="w-6 h-6" />
              </button>
              
              <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 items-start">
           {['TODO', 'IN_PROGRESS', 'COMPLETED'].map((status) => (
             <div key={status} className="bg-slate-100/40 p-6 rounded-[3rem] border border-slate-200/50 backdrop-blur-sm min-h-[600px]">
                <div className="flex items-center justify-between px-4 mb-8">
                   <div className="flex items-center gap-4">
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.25em] italic">{status.replace('_', ' ')}</h4>
                      <span className="px-3 py-1 bg-white text-slate-900 border border-slate-200 rounded-full text-[10px] font-black shadow-sm">
                        {mockTasks.filter(t => t.status === status).length}
                      </span>
                   </div>
                   <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all"><Plus className="w-4 h-4" /></button>
                </div>
                <div className="space-y-6">
                   {mockTasks.filter(t => t.status === status).map((task) => (
                      <motion.div 
                        key={task.id} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="premium-card p-8 group relative overflow-hidden"
                      >
                         <div className="flex items-center justify-between mb-6">
                            <span className={cn("px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest", priorityColors[task.priority as keyof typeof priorityColors])}>
                               {task.priority}
                            </span>
                            <button className="text-slate-300 hover:text-slate-900 transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                         </div>
                         <h5 className="font-black text-slate-900 text-lg mb-6 leading-tight uppercase italic">{task.title}</h5>
                         <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                               <Clock className="w-4 h-4 text-emerald-500" />
                               {task.due}
                            </div>
                            <div className="w-10 h-10 rounded-2xl border-4 border-white overflow-hidden shadow-premium">
                               <img src={`https://i.pravatar.cc/150?u=${task.assignee}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
                            </div>
                         </div>
                         <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </motion.div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};
