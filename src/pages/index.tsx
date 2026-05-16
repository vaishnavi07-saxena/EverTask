import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-600">
     <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
        <ShieldCheck className="w-8 h-8 text-emerald-600" />
     </div>
    <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h1>
    <p className="font-medium text-slate-500">This feature is currently under active development.</p>
  </div>
);

// Auth Pages
export * from './LoginPage';

// Public Pages
export * from './LandingPage';
export * from './AboutPage';
export * from './PricingPage';
export * from './ContactPage';

// App Pages
export * from './DashboardPage';
export * from './AdminPanelPage';
export * from './ReportsPage';
export * from './NotFoundPage';
export * from './ProjectsPage';
export * from './TasksPage';
export * from './ProfilePage';
export * from './SettingsPage';

// Placeholders for pending implementations
export const ProjectDetailPage = () => <PagePlaceholder title="Project Details" />;
export const KanbanPage = () => <PagePlaceholder title="Kanban Board" />;
export const AnalyticsPage = () => <PagePlaceholder title="Analytics & Reports" />;
export const NotificationsPage = () => <PagePlaceholder title="Notifications" />;
export const TeamPage = () => <PagePlaceholder title="Team Members" />;
export const ResetPasswordPage = () => <PagePlaceholder title="Reset Password" />;
export const UnauthorizedPage = () => <PagePlaceholder title="401 - Unauthorized Access" />;

export { Testimonials } from '../components/sections/Testimonials';
