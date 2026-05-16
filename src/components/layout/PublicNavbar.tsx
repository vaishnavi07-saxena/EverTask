import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../store/useAuthStore';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/#features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PublicNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="glass-header w-full px-6 md:px-12 h-20 flex items-center justify-between transition-all duration-300">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
          <ShieldCheck className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold text-emerald-900 tracking-tight">EverTask</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              "text-sm font-semibold transition-colors hover:text-emerald-600",
              location.pathname === link.path ? "text-emerald-700" : "text-slate-600"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        {isAuthenticated ? (
          <Link to="/dashboard" className="btn-primary shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20">Go to Dashboard</Link>
        ) : (
          <Link to="/login" className="btn-primary shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 px-8">Quick access</Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 lg:hidden z-50 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-700 hover:text-emerald-600 border-b border-slate-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              {isAuthenticated ? (
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center py-4">Dashboard</Link>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center py-4">Get Started</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
