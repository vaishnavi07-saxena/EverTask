import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { 
  LandingPage, LoginPage, SignupPage, ForgotPasswordPage, 
  DashboardPage, ProjectsPage, ProjectDetailPage, TasksPage, 
  KanbanPage, AnalyticsPage, NotificationsPage, TeamPage, 
  ProfilePage, SettingsPage, AdminPanelPage, NotFoundPage 
} from './pages';
import { useAuthStore } from './store/useAuthStore';
import { DashboardLayout } from './components/layout/DashboardLayout';

// Protected Route Wrapper
const ProtectedRoute = ({ adminOnly = false }: { adminOnly?: boolean }) => {
  const { isAuthenticated, user } = useAuthStore();
  
  // For development convenience, we're not strict yet. 
  // In production, uncomment the auth checks below.
  /*
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (adminOnly && user?.role !== 'ADMIN') {
    return <Navigate to="/dashboard" replace />;
  }
  */
  
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/kanban" element={<KanbanPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        
        {/* Admin Only */}
        <Route element={<ProtectedRoute adminOnly />}>
          <Route path="/admin" element={<AdminPanelPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
