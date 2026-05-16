import React from 'react';
import { 
  Plus, 
  Search, 
  LayoutGrid, 
  List as ListIcon, 
  MoreVertical,
  Calendar,
  Users,
  Target,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';
import { cn } from '../utils/cn';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const mockProjects = [
  { 
    id: '1', 
    name: 'Aurora Platform', 
    description: 'Cloud infrastructure modernization and SOC2 compliance automation.',
    status: 'ACTIVE',
    progress: 68,
    teamSize: 12,
    tasks: { total: 45, done: 31 },
    manager: 'Alex Sterling',
    deadline: 'May 30, 2024',
    tags: ['Cloud', 'DevOps']
  },
  { 
    id: '2', 
    name: 'Nexus Mobile v2', 
    description: 'Complete overhaul of the customer-facing mobile application using React Native.',
    status: 'DELAYED',
    progress: 35,
    teamSize: 8,
    tasks: { total: 112, done: 40 },
    manager: 'Sarah Konor',
    deadline: 'Jun 15, 2024',
    tags: ['Mobile', 'UX']
  },
  { 
    id: '3', 
    name: 'Apollo Brand Site', 
    description: 'Refreshing the corporate identity and launching the new developer portal.',
    status: 'COMPLETED',
    progress: 100,
    teamSize: 5,
    tasks: { total: 24, done: 24 },
    manager: 'Mike Ross',
    deadline: 'Apr 20, 2024',
    tags: ['Marketing', 'Brand']
  },
  { 
    id: '4', 
    name: 'Data Warehouse ETL', 
    description: 'Migrating internal analytical pipelines to the new Snowflake cluster.',
    status: 'ACTIVE',
    progress: 15,
    teamSize: 4,
    tasks: { total: 58, done: 9 },
    manager: 'Elena Vance',
    deadline: 'Jul 01, 2024',
    tags: ['Data', 'Security']
  }
];

export const ProjectsPage = () => {
  const [view, setView] = React.useState<'GRID' | 'LIST'>('GRID');

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Organization Projects</h1>
          <p className="text-slate-500 font-medium tracking-tight">Strategy, execution, and everything in between.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-slate-200/50 p-1 rounded-xl">
             <button 
               onClick={() => setView('GRID')}
               className={cn("p-2 rounded-lg transition-all", view === 'GRID' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}
             >
                <LayoutGrid className="w-4 h-4" />
             </button>
             <button 
               onClick={() => setView('LIST')}
               className={cn("p-2 rounded-lg transition-all", view === 'LIST' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}
             >
                <ListIcon className="w-4 h-4" />
             </button>
          </div>
          <button className="btn-primary flex items-center gap-2 shadow-lg shadow-emerald-900/10">
            <Plus className="w-4 h-4" /> Create Project
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
           { label: 'Total', value: '24', color: 'text-indigo-600', bg: 'bg-indigo-50' },
           { label: 'Active', value: '18', color: 'text-emerald-600', bg: 'bg-emerald-50' },
           { label: 'Delayed', value: '03', color: 'text-rose-600', bg: 'bg-rose-50' },
           { label: 'At Risk', value: '01', color: 'text-amber-600', bg: 'bg-amber-50' },
         ].map((s, i) => (
           <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm">
             <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
               <p className={cn("text-2xl font-black", s.color)}>{s.value}</p>
             </div>
             <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", s.bg)}>
                <Target className={cn("w-5 h-5", s.color)} />
             </div>
           </div>
         ))}
      </div>

      {/* Search and Filters */}
      <div className="relative">
         <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
         <input 
           type="text" 
           placeholder="Search projects by name, tags, or lead..." 
           className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none shadow-sm"
         />
      </div>

      {view === 'GRID' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {mockProjects.map((project, i) => (
            <motion.div 
               key={project.id}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all cursor-pointer relative"
            >
               <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                     <div className={cn(
                       "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl",
                       project.status === 'ACTIVE' ? "bg-emerald-50 text-emerald-600" :
                       project.status === 'DELAYED' ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"
                     )}>
                        {project.name.charAt(0)}
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">{project.name}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                          {project.status === 'DELAYED' && <ShieldAlert className="w-3 h-3 text-rose-500" />}
                          {project.status.replace('_', ' ')}
                        </p>
                     </div>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-xl">
                     <MoreVertical className="w-5 h-5" />
                  </button>
               </div>

               <p className="text-slate-500 font-medium mb-8 line-clamp-2 leading-relaxed">
                  {project.description}
               </p>

               <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-100">
                       {tag.toUpperCase()}
                    </span>
                  ))}
               </div>

               <div className="space-y-4 pt-6 border-t border-slate-50">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                     <span>Progress</span>
                     <span className="text-slate-900">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div 
                        className={cn("h-full rounded-full transition-all duration-1000", project.status === 'DELAYED' ? "bg-rose-500" : "bg-emerald-500")}
                        style={{ width: `${project.progress}%` }}
                     ></div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                     <div className="flex -space-x-2">
                        {Array.from({ length: 4 }).map((_, j) => (
                           <div key={j} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                           +{project.teamSize - 4}
                        </div>
                     </div>
                     <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.deadline}
                     </div>
                  </div>
               </div>

               <Link to={`/projects/${project.id}`} className="absolute top-6 right-16 p-2 text-slate-300 hover:text-emerald-600 opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-6 h-6" />
               </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
           <table className="w-full text-left">
              <thead>
                 <tr className="border-b border-slate-100">
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Project Name</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Team Size</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tasks</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Deadline</th>
                    <th></th>
                 </tr>
              </thead>
              <tbody>
                 {mockProjects.map(project => (
                    <tr key={project.id} className="group hover:bg-slate-50/50 border-b border-slate-50 last:border-0 transition-colors">
                       <td className="px-8 py-6">
                          <p className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{project.name}</p>
                          <p className="text-xs text-slate-400 font-medium">{project.manager}</p>
                       </td>
                       <td className="px-8 py-6">
                          <span className={cn(
                            "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight",
                            project.status === 'ACTIVE' ? "bg-emerald-50 text-emerald-600" :
                            project.status === 'DELAYED' ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"
                          )}>
                             {project.status}
                          </span>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                             <Users className="w-4 h-4 text-slate-300" />
                             <span className="text-sm font-bold text-slate-600">{project.teamSize}</span>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                             <span className="text-sm font-bold text-slate-900">{project.tasks.done}/{project.tasks.total}</span>
                             <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{ width: `${(project.tasks.done / project.tasks.total) * 100}%` }}></div>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{project.deadline}</p>
                       </td>
                       <td className="px-8 py-6 text-right">
                          <button className="p-2 text-slate-300 hover:text-slate-600 bg-transparent hover:bg-slate-100 rounded-lg">
                             <MoreVertical className="w-4 h-4" />
                          </button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      )}
    </div>
  );
};
