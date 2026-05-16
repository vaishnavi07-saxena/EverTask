import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, User, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '../utils/cn';
import { quickAccessSchema, type QuickAccessInput } from '../utils/schemas';
import { useAuthStore } from '../store/useAuthStore';
import { UserRole } from '../types';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<QuickAccessInput>({
    resolver: zodResolver(quickAccessSchema),
    defaultValues: {
      role: 'MEMBER'
    }
  });

  const role = watch('role');

  const onSubmit = async (data: QuickAccessInput) => {
    try {
      login({
        id: Math.random().toString(36).substr(2, 9),
        name: data.name,
        email: `${data.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
        role: data.role as UserRole,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=10b981&color=fff`
      }, 'fake-session-token');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF2F7] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-slate-200/40 rounded-full dashed-border opacity-20"></div>
      </div>

      <div className="w-full max-w-xl relative z-10">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center gap-3 group mb-8">
            <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-slate-900/20">
              <ShieldCheck className="text-emerald-400 w-9 h-9" />
            </div>
            <span className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">EverTask</span>
          </Link>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">Identity Authentication</h1>
          <p className="text-slate-500 mt-4 font-medium text-lg max-w-md mx-auto">Authorize your node access by defining your operational designation.</p>
        </div>

        <div className="premium-card p-12 md:p-16 border-none">
          <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Credential Input</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                <input 
                  {...register('name')}
                  type="text" 
                  placeholder="Designate Full Name" 
                  className={cn(
                    "w-full bg-slate-50/50 border-2 rounded-[1.5rem] py-5 pl-14 pr-6 text-slate-900 focus:outline-none focus:ring-8 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all outline-none text-base font-black tracking-tight",
                    errors.name ? "border-red-300" : "border-slate-100"
                  )}
                />
              </div>
              {errors.name && <p className="mt-3 text-xs text-red-500 font-black uppercase tracking-widest">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 text-center">Protocol Level</label>
              <div className="grid grid-cols-2 gap-6">
                <button 
                  type="button" 
                  onClick={() => setValue('role', 'MEMBER')}
                  className={cn(
                    "p-8 rounded-[2rem] border-2 transition-all duration-500 text-left group relative overflow-hidden",
                    role === 'MEMBER' 
                      ? "border-emerald-500 bg-white text-slate-900 shadow-2xl shadow-emerald-500/10" 
                      : "border-slate-100 bg-slate-50/50 text-slate-500 hover:border-slate-200"
                  )}
                >
                  <Users className={cn("w-8 h-8 mb-4 transition-all duration-500", role === 'MEMBER' ? "text-emerald-500 scale-110" : "text-slate-400 group-hover:text-slate-500")} />
                  <p className="font-black text-lg tracking-tight uppercase">Collab Unit</p>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1">L1 Designation</p>
                  {role === 'MEMBER' && <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/10 rounded-bl-full"></div>}
                </button>
                <button 
                  type="button" 
                  onClick={() => setValue('role', 'ADMIN')}
                  className={cn(
                    "p-8 rounded-[2rem] border-2 transition-all duration-500 text-left group relative overflow-hidden",
                    role === 'ADMIN' 
                      ? "border-slate-900 bg-slate-900 text-white shadow-2xl shadow-slate-900/40" 
                      : "border-slate-100 bg-slate-50/50 text-slate-500 hover:border-slate-200"
                  )}
                >
                  <ShieldCheck className={cn("w-8 h-8 mb-4 transition-all duration-500", role === 'ADMIN' ? "text-emerald-400 scale-110" : "text-slate-400 group-hover:text-slate-500")} />
                  <p className="font-black text-lg tracking-tight uppercase">System Admin</p>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1">L2 Designation</p>
                  {role === 'ADMIN' && <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-bl-full"></div>}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-[1.5rem] text-sm font-black uppercase tracking-[0.3em] shadow-2xl shadow-slate-900/30 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Initializing Network...
                </>
              ) : (
                <>Initialize Access <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
             <div className="flex gap-4">
                <Link to="/terms" className="hover:text-emerald-600 transition-colors">Compliance</Link>
                <Link to="/privacy" className="hover:text-emerald-600 transition-colors">Privacy</Link>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                Secure Connection
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
