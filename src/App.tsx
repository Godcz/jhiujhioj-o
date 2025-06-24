import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Messaging from './pages/Messaging';
import Projects from './pages/Projects';
import CMS from './pages/CMS';
import Formations from './pages/Formations';
import Presentation from './pages/Presentation';
import Facultes from './pages/Facultes';
import Recherche from './pages/Recherche';
import VieEtudiante from './pages/VieEtudiante';
import International from './pages/International';
import Admission from './pages/Admission';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// Admin Route Component
const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  return isAuthenticated && user?.userType === 'admin' ? <>{children}</> : <Navigate to="/dashboard" />;
};

// Layout Component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header onMenuToggle={handleMenuToggle} isMobileMenuOpen={isMobileMenuOpen} />
      
      <div className="flex">
        {isAuthenticated && (
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        )}
        
        <main className={`flex-1 ${isAuthenticated ? 'lg:ml-64' : ''}`}>
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

// App Component
const AppContent: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Public Information Pages */}
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/facultes" element={<Facultes />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/vie-etudiante" element={<VieEtudiante />} />
          <Route path="/international" element={<International />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formations" element={<Formations />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/messaging" element={
            <ProtectedRoute>
              <Messaging />
            </ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/cms" element={
            <AdminRoute>
              <CMS />
            </AdminRoute>
          } />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;