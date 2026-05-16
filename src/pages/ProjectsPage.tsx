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
    <div className="space-y-12 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Project Topology</h1>
          <p className="text-slate-500 font-medium text-lg">Orchestrate complex workflows and active computational nodes.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex bg-slate-100/50 p-1.5 rounded-xl border border-slate-200/50">
             <button 
               onClick={() => setView('GRID')}
               className={cn("p-2 rounded-lg transition-all duration-300", view === 'GRID' ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600")}
             >
                <LayoutGrid className="w-5 h-5" />
             </button>
             <button 
               onClick={() => setView('LIST')}
               className={cn("p-2 rounded-lg transition-all duration-300", view === 'LIST' ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600")}
             >
                <ListIcon className="w-5 h-5" />
             </button>
          </div>
          <button className="btn-primary flex items-center gap-2 px-8">
            <Plus className="w-4 h-4" /> Initialize Deployment
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
         {[
           { label: 'Total Nodes', value: '24', color: 'text-indigo-600', bg: 'bg-indigo-50' },
           { label: 'Synchronized', value: '18', color: 'text-emerald-600', bg: 'bg-emerald-50' },
           { label: 'Late Phase', value: '03', color: 'text-rose-600', bg: 'bg-rose-50' },
           { label: 'Critical Risk', value: '01', color: 'text-amber-600', bg: 'bg-amber-50' },
         ].map((s, i) => (
           <div key={i} className="premium-card flex flex-col gap-4 group">
             <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6", s.bg)}>
                <Target className={cn("w-6 h-6", s.color)} />
             </div>
             <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{s.label}</p>
               <p className={cn("text-4xl font-black tracking-tight", s.color)}>{s.value}</p>
             </div>
           </div>
         ))}
      </div>

      {/* Search and Filters */}
      <div className="relative group">
         <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
         <input 
           type="text" 
           placeholder="Locate deployment by designation, hash, or lead..." 
           className="w-full bg-white border border-slate-200 rounded-3xl py-5 pl-14 pr-6 text-base font-black tracking-tight focus:outline-none focus:ring-8 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all outline-none shadow-sm"
         />
      </div>

      {view === 'GRID' ? (
        <div className="grid md:grid-cols-2 gap-8">
          {mockProjects.map((project, i) => (
            <motion.div 
               key={project.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="group premium-card p-10 relative overflow-hidden flex flex-col h-full"
            >
               <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-5">
                     <div className={cn(
                       "w-16 h-16 rounded-[1.5rem] flex items-center justify-center font-black text-2xl transition-transform group-hover:rotate-6 shadow-sm",
                       project.status === 'ACTIVE' ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" :
                       project.status === 'DELAYED' ? "bg-rose-500/10 text-rose-600 border border-rose-500/20" : "bg-indigo-500/10 text-indigo-600 border border-indigo-500/20"
                     )}>
                        {project.name.charAt(0)}
                     </div>
                     <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors uppercase italic">{project.name}</h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5 mt-1">
                          {project.status === 'DELAYED' && <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />}
                          Status: <span className={cn(project.status === 'DELAYED' ? "text-rose-600" : "text-emerald-600")}>{project.status}</span>
                        </p>
                     </div>
                  </div>
                  <button className="p-3 text-slate-300 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all">
                     <MoreVertical className="w-6 h-6" />
                  </button>
               </div>

               <p className="text-slate-500 font-medium text-lg mb-10 line-clamp-2 leading-relaxed flex-grow">
                  {project.description}
               </p>

               <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200/50">
                       {tag}
                    </span>
                  ))}
               </div>

               <div className="space-y-6 pt-8 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                     <span>Computational Progress</span>
                     <span className="text-slate-900">{project.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                     <div 
                        className={cn("h-full rounded-full transition-all duration-1000", project.status === 'DELAYED' ? "bg-rose-500" : "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]")}
                        style={{ width: `${project.progress}%` }}
                     ></div>
                  </div>
                  <div className="flex items-center justify-between pt-6">
                     <div className="flex -space-x-3">
                        {Array.from({ length: 4 }).map((_, j) => (
                           <div key={j} className="w-10 h-10 rounded-2xl border-4 border-white bg-slate-200 shadow-sm transition-transform group-hover:translate-x-1"></div>
                        ))}
                        <div className="w-10 h-10 rounded-2xl border-4 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">
                           +{project.teamSize - 4}
                        </div>
                     </div>
                     <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        {project.deadline}
                     </div>
                  </div>
               </div>

               <Link to={`/projects/${project.id}`} className="absolute top-8 right-20 p-3 text-slate-300 hover:text-emerald-600 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-8 h-8" />
               </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="premium-card overflow-hidden text-sm">
           <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Designation</th>
                  <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Aura</th>
                  <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contributor Count</th>
                  <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Efficiency Metric</th>
                  <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Cutoff</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                 {mockProjects.map(project => (
                    <tr key={project.id} className="group hover:bg-slate-50/50 transition-all duration-300">
                       <td className="px-10 py-8">
                          <p className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight italic">{project.name}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Lead: <span className="text-slate-600">{project.manager}</span></p>
                       </td>
                       <td className="px-10 py-8">
                          <span className={cn(
                            "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]",
                            project.status === 'ACTIVE' ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" :
                            project.status === 'DELAYED' ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20" : "bg-indigo-500 text-white"
                          )}>
                             {project.status}
                          </span>
                       </td>
                       <td className="px-10 py-8">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                                <Users className="w-5 h-5 text-slate-400" />
                             </div>
                             <span className="text-sm font-black text-slate-900 tracking-tight">{project.teamSize} Entities</span>
                          </div>
                       </td>
                       <td className="px-10 py-8">
                          <div className="flex items-center gap-4">
                             <span className="text-sm font-black text-slate-900 tracking-tight">{Math.round((project.tasks.done / project.tasks.total) * 100)}%</span>
                             <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(project.tasks.done / project.tasks.total) * 100}%` }}></div>
                             </div>
                          </div>
                       </td>
                       <td className="px-10 py-8">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em]">{project.deadline}</p>
                       </td>
                       <td className="px-10 py-8 text-right">
                          <button className="p-3 text-slate-300 hover:text-slate-900 bg-transparent hover:bg-slate-100 rounded-xl transition-all">
                             <MoreVertical className="w-5 h-5" />
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
