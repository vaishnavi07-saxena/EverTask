import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '../utils/cn';

const forgotSchema = z.object({
  email: z.string().email('Please enter a valid work email')
});

type ForgotInput = z.infer<typeof forgotSchema>;

export const ForgotPasswordPage = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ForgotInput>({
    resolver: zodResolver(forgotSchema)
  });

  const onSubmit = async (data: ForgotInput) => {
    // DUMMY FORGOT LOGIC
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Check your email</h1>
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">
            We've sent a password reset link to your email address. Please follow the instructions to reset your password.
          </p>
          <Link 
            to="/login" 
            className="btn-primary w-full py-4 text-base shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
          >
            Return to login
          </Link>
          <p className="mt-8 text-sm text-slate-400 font-bold uppercase tracking-widest">
            Didn't receive it? <button onClick={() => setIsSubmitted(false)} className="text-emerald-600 hover:underline">Try again</button>
          </p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Forgot password?</h1>
          <p className="text-slate-500 mt-2 font-medium">No worries, we'll send you reset instructions.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
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

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full py-4 text-base shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending link...
                </>
              ) : (
                'Reset password'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
