import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '../utils/cn';
import { loginSchema, type LoginInput } from '../utils/schemas';
import { useAuthStore } from '../store/useAuthStore';
import { UserRole } from '../types';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = React.useState(false);
  const [authError, setAuthError] = React.useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginInput) => {
    setAuthError(null);
    try {
      // DUMMY AUTH LOGIC
      if (data.email === 'admin@gmail.com' && data.password === 'admin123') {
        login({
          id: '1',
          name: 'Alex Sterling',
          email: 'admin@gmail.com',
          role: UserRole.ADMIN,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }, 'fake-admin-jwt-token');
        navigate('/dashboard');
      } else if (data.email === 'user@gmail.com' && data.password === 'user123') {
        login({
          id: '2',
          name: 'Sarah User',
          email: 'user@gmail.com',
          role: UserRole.MEMBER,
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }, 'fake-user-jwt-token');
        navigate('/dashboard');
      } else {
        setAuthError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setAuthError('An error occurred during sign in.');
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
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back</h1>
          <p className="text-slate-500 mt-2 font-medium">Please enter your details to sign in.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
          {authError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">!</span>
              </div>
              <p className="text-sm text-red-700 font-medium">{authError}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input 
                  {...register('email')}
                  type="email" 
                  placeholder="name@company.com" 
                  className={cn(
                    "w-full bg-slate-50 border rounded-xl py-3 pl-11 pr-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none",
                    errors.email ? "border-red-300" : "border-slate-200"
                  )}
                />
              </div>
              {errors.email && <p className="mt-2 text-xs text-red-500 font-medium">{errors.email.message}</p>}
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <Link to="/forgot-password" title="Forgot password?" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input 
                  {...register('password')}
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className={cn(
                    "w-full bg-slate-50 border rounded-xl py-3 pl-11 pr-12 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none",
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

            <div className="flex items-center gap-2 py-1">
              <input 
                {...register('remember')}
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" 
              />
              <label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer select-none">Remember me for 30 days</label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full py-4 text-base shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                'Sign in to EverTask'
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-slate-600">
            Don't have an account? {' '}
            <Link to="/signup" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Create one free</Link>
          </p>
          
          <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-center">Demo Credentials</p>
             <div className="flex justify-between text-[11px]">
               <p><span className="font-bold">Admin:</span> admin@gmail.com / admin123</p>
               <p><span className="font-bold">User:</span> user@gmail.com / user123</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
