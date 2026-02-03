
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRole, UserProfile } from '../types';
import { LOGO } from '../constants';

interface LoginProps {
  onLogin: (profile: UserProfile) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDevLogin = (role: AppRole) => {
    const mockProfile: UserProfile = {
      id: role === AppRole.CLIENT ? 'u123' : 'admin1',
      name: role === AppRole.CLIENT ? 'Tanvir Hossain' : 'Super Admin',
      email: role === AppRole.CLIENT ? 'client@test.com' : 'admin@admeter.com',
      role: role,
      balance: role === AppRole.CLIENT ? 45.20 : 0,
      isFacebookConnected: role === AppRole.CLIENT,
      connectedPage: role === AppRole.CLIENT ? 'Digital Solutions BD' : undefined,
      adAccountId: role === AppRole.CLIENT ? 'act_48239011' : undefined,
    };
    onLogin(mockProfile);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                title="Go Back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <Link to="/" className="group">{LOGO}</Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-600">
              <Link to="/how-it-works" className="hover:text-green-600 transition-colors">How it Works</Link>
              <Link to="/pricing" className="hover:text-green-600 transition-colors">Pricing</Link>
              <Link to="/faq" className="hover:text-green-600 transition-colors">FAQ</Link>
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-slate-900 text-white shadow-lg transition-all">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <div className="p-8 text-center border-b border-slate-100">
             <div className="flex justify-center mb-4">{LOGO}</div>
             <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
             <p className="text-slate-500 mt-1">Manage your card-less ads safely.</p>
          </div>
          <div className="p-8 space-y-4">
             <div>
               <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
               <input 
                 type="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                 placeholder="name@example.com"
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
               <input 
                 type="password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                 placeholder="••••••••"
               />
             </div>
             <button className="w-full py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20">
               Sign In
             </button>
             
             <div className="relative my-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold tracking-widest">Quick Demo Login</span></div>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <button 
                 onClick={() => handleDevLogin(AppRole.CLIENT)}
                 className="py-3 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
               >
                 Marketer Login
               </button>
               <button 
                 onClick={() => handleDevLogin(AppRole.ADMIN)}
                 className="py-3 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
               >
                 Admin Login
               </button>
             </div>
          </div>
          <div className="p-4 bg-slate-50 text-center text-xs text-slate-400">
            Secure Meta Marketing API Integration • TLS 1.3 Encryption
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
