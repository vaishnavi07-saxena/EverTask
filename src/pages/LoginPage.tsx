import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, User, Users } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 group mb-8">
            <div className="w-12 h-12 bg-emerald-900 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <span className="text-2xl font-bold text-emerald-900 tracking-tight">EverTask</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Quick Access</h1>
          <p className="text-slate-500 mt-2 font-medium">Enter your name and role to start managing tasks.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <div className="relative group">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input 
                  {...register('name')}
                  type="text" 
                  placeholder="Alex Sterling" 
                  className={cn(
                    "w-full bg-slate-50 border rounded-xl py-3 pl-11 pr-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none text-sm font-medium",
                    errors.name ? "border-red-300" : "border-slate-200"
                  )}
                />
              </div>
              {errors.name && <p className="mt-2 text-xs text-red-500 font-medium">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4 text-center uppercase tracking-widest text-[10px]">Select Role</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  onClick={() => setValue('role', 'MEMBER')}
                  className={cn(
                    "p-4 rounded-2xl border-2 transition-all text-left group",
                    role === 'MEMBER' 
                      ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm" 
                      : "border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200"
                  )}
                >
                  <Users className={cn("w-6 h-6 mb-2 transition-colors", role === 'MEMBER' ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-500")} />
                  <p className="font-bold text-sm">Team Member</p>
                  <p className="text-[10px] opacity-70">Collaborate on tasks</p>
                </button>
                <button 
                  type="button" 
                  onClick={() => setValue('role', 'ADMIN')}
                  className={cn(
                    "p-4 rounded-2xl border-2 transition-all text-left group",
                    role === 'ADMIN' 
                      ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm" 
                      : "border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200"
                  )}
                >
                  <ShieldCheck className={cn("w-6 h-6 mb-2 transition-colors", role === 'ADMIN' ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-500")} />
                  <p className="font-bold text-sm">System Admin</p>
                  <p className="text-[10px] opacity-70">Manage everything</p>
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full py-4 text-base shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Initializing...
                </>
              ) : (
                'Access Dashboard'
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-400 text-xs font-medium">
             By entering, you agree to our <Link to="/terms" className="underline hover:text-emerald-600">Terms</Link> and <Link to="/privacy" className="underline hover:text-emerald-600">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};
