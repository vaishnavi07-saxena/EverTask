import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', path: '/#features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Analytics', path: '/analytics' },
      { name: 'Reports', path: '/reports' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Blog', path: '#' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Security', path: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-emerald-900 tracking-tight">EverTask</span>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              The professional standard for team project management. Simple for developers, 
              powerful for managers.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                        {link.name}
                        {link.path === '#' && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-emerald-400" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 leading-tight">Join our newsletter</h4>
              <p className="text-xs font-medium text-slate-500 leading-relaxed uppercase tracking-wider">Tips, updates & productivity hacks.</p>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
              <button className="btn-primary w-full shadow-sm">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400 font-medium">© 2026 EverTask Inc. Built with love for teams.</p>
          <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Systems Operational
            </span>
            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
