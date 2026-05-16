import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Users, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '../utils/cn';
import { signupSchema, type SignupInput } from '../utils/schemas';
import { useAuthStore } from '../store/useAuthStore';
import { UserRole } from '../types';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = React.useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: 'MEMBER'
    }
  });

  const role = watch('role');

  const onSubmit = async (data: SignupInput) => {
    try {
      // DUMMY REGISTRATION LOGIC
      login({
        id: Math.random().toString(36).substr(2, 9),
        name: data.name,
        email: data.email,
        role: data.role as UserRole,
        avatar: `https://i.pravatar.cc/150?u=${data.email}`
      }, 'fake-jwt-token-new-user');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Stats/Info */}
      <div className="hidden lg:flex bg-emerald-900 p-16 flex-col justify-center relative overflow-hidden">
        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-2 mb-12">
            <Link to="/" className="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-emerald-950 w-7 h-7" />
            </Link>
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
             <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-900 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-emerald-900 tracking-tight">EverTask</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create an account</h1>
          <p className="text-slate-500 mb-8 font-medium">Join thousands of teams already using EverTask.</p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input 
                {...register('name')}
                type="text" 
                placeholder="John Doe" 
                className={cn(
                  "w-full bg-slate-50 border rounded-xl py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none",
                    errors.name ? "border-red-300" : "border-slate-200"
                )}
              />
              {errors.name && <p className="mt-2 text-xs text-red-500 font-medium">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
              <input 
                {...register('email')}
                type="email" 
                placeholder="john@company.com" 
                className={cn(
                  "w-full bg-slate-50 border rounded-xl py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none",
                    errors.email ? "border-red-300" : "border-slate-200"
                )}
              />
              {errors.email && <p className="mt-2 text-xs text-red-500 font-medium">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                onClick={() => setValue('role', 'MEMBER')}
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
                onClick={() => setValue('role', 'ADMIN')}
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative group">
                <input 
                  {...register('password')}
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className={cn(
                    "w-full bg-slate-50 border rounded-xl py-3 pl-4 pr-12 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none",
                    errors.password ? "border-red-300" : "border-slate-200"
                  )}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-xs text-red-500 font-medium">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Confirm Password</label>
              <input 
                {...register('confirmPassword')}
                type="password" 
                placeholder="••••••••" 
                className={cn(
                  "w-full bg-slate-50 border rounded-xl py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none",
                  errors.confirmPassword ? "border-red-300" : "border-slate-200"
                )}
              />
              {errors.confirmPassword && <p className="mt-2 text-xs text-red-500 font-medium">{errors.confirmPassword.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full py-4 text-base shadow-lg shadow-emerald-900/10 mt-4 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating account...
                </>
              ) : (
                'Create free account'
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600 font-medium">
            Already have an account? {' '}
            <Link to="/login" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
