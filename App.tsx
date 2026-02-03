
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import { AppRole, UserProfile } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);

  // Persistence check (simulated)
  useEffect(() => {
    const savedUser = localStorage.getItem('admeter_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('admeter_user', JSON.stringify(profile));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('admeter_user');
  };

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            user ? (
              <Navigate to={user.role === AppRole.ADMIN ? "/admin" : "/dashboard"} replace />
            ) : (
              <LandingPage />
            )
          } 
        />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route 
          path="/login" 
          element={user ? <Navigate to={user.role === AppRole.ADMIN ? "/admin" : "/dashboard"} replace /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/dashboard/*" 
          element={
            user ? (
              user.role === AppRole.CLIENT ? (
                <Dashboard user={user} onLogout={handleLogout} setUser={setUser} />
              ) : (
                <Navigate to="/admin" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/admin/*" 
          element={
            user ? (
              user.role === AppRole.ADMIN ? (
                <AdminPanel user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
