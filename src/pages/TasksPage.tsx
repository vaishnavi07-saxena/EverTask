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
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Active Tasks</h1>
          <p className="text-slate-500 font-medium">Keep track of your team's progress and stay on schedule.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-slate-200/50 p-1 rounded-xl">
             <button 
               onClick={() => setActiveTab('LIST')}
               className={cn("px-4 py-2 rounded-lg text-xs font-bold transition-all", activeTab === 'LIST' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}
             >
                LIST
             </button>
             <button 
               onClick={() => setActiveTab('BOARD')}
               className={cn("px-4 py-2 rounded-lg text-xs font-bold transition-all", activeTab === 'BOARD' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}
             >
                BOARD
             </button>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Task
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
         <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search tasks by title, category, or assignee..." 
              className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none shadow-sm"
            />
         </div>
         <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
               <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm text-nowrap">
               Sort: Newest
            </button>
         </div>
      </div>

      {activeTab === 'LIST' ? (
        <div className="space-y-3">
          {mockTasks.map((task, i) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer flex items-center gap-6"
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                task.status === 'COMPLETED' ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
              )}>
                {task.status === 'COMPLETED' ? <CheckCircle2 className="w-5 h-5" /> : task.status === 'IN_PROGRESS' ? <Clock className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                   <h3 className={cn("text-base font-bold tracking-tight truncate", task.status === 'COMPLETED' ? 'text-slate-400' : 'text-slate-900')}>
                      {task.title}
                   </h3>
                   <span className={cn("px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-tight", priorityColors[task.priority as keyof typeof priorityColors])}>
                      {task.priority}
                   </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                   <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {task.category}</span>
                   <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {task.due}</span>
                   <span className="flex items-center gap-1"><UserIcon className="w-3 h-3" /> {task.assignee}</span>
                </div>
              </div>

              <div className="flex -space-x-2 mr-4 hidden sm:flex">
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-black">{task.assignee.charAt(0)}</div>
              </div>

              <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-lg">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 items-start">
           {['TODO', 'IN_PROGRESS', 'COMPLETED'].map((status) => (
             <div key={status} className="bg-slate-100/50 p-4 rounded-[2rem] min-h-[500px]">
                <div className="flex items-center justify-between px-3 mb-6">
                   <div className="flex items-center gap-2">
                      <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">{status.replace('_', ' ')}</h4>
                      <span className="w-5 h-5 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                        {mockTasks.filter(t => t.status === status).length}
                      </span>
                   </div>
                   <button className="p-1 text-slate-400 hover:text-slate-600"><Plus className="w-4 h-4" /></button>
                </div>
                <div className="space-y-4">
                   {mockTasks.filter(t => t.status === status).map((task) => (
                      <div key={task.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:border-emerald-400 transition-all cursor-grab active:cursor-grabbing">
                         <div className="flex items-center justify-between mb-4">
                            <span className={cn("px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-tight", priorityColors[task.priority as keyof typeof priorityColors])}>
                               {task.priority}
                            </span>
                            <button className="text-slate-300 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></button>
                         </div>
                         <h5 className="font-bold text-slate-900 mb-4 leading-tight">{task.title}</h5>
                         <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                               <Clock className="w-3.5 h-3.5" />
                               {task.due}
                            </div>
                            <img src={`https://i.pravatar.cc/150?u=${task.assignee}`} className="w-6 h-6 rounded-full grayscale hover:grayscale-0 transition-all border-2 border-white shadow-sm" alt="" />
                         </div>
                      </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};
