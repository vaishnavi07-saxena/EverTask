import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg text-center">
        <div className="relative mb-12 flex justify-center">
           <div className="text-[12rem] font-black text-slate-200 leading-none select-none">404</div>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 rotate-12">
                 <Search className="w-10 h-10 text-emerald-600" />
              </div>
           </div>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Lost in the Taskverse?</h1>
        <p className="text-slate-500 font-medium mb-12 max-w-sm mx-auto leading-relaxed">
          The page you are looking for doesn't exist or has been moved to another quadrant of the workspace.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2">
            <Home className="w-5 h-5" /> Back to Home
          </Link>
          <Link to="/contact" className="btn-secondary w-full sm:w-auto px-8 py-4">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};
