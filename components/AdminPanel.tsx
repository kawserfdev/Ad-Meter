
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserProfile, AppRole } from '../types';
import { LOGO } from '../constants';

const MOCK_CLIENTS = [
  { id: 'u1', name: 'Karim Ahmed', email: 'karim@test.com', balance: 12.50, adAccount: 'act_101', status: 'Active' },
  { id: 'u2', name: 'Sara Khan', email: 'sara@test.com', balance: -2.10, adAccount: 'act_102', status: 'Locked' },
  { id: 'u3', name: 'Tanvir Hossain', email: 'tanvir@test.com', balance: 145.00, adAccount: 'act_103', status: 'Active' },
];

const MOCK_POOL = [
  { id: 'act_101', status: 'Used', assigned: 'Karim Ahmed' },
  { id: 'act_102', status: 'Used', assigned: 'Sara Khan' },
  { id: 'act_104', status: 'Free', assigned: '-' },
  { id: 'act_105', status: 'Free', assigned: '-' },
];

interface AdminPanelProps {
  user: UserProfile;
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'clients' | 'pool'>('overview');

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 brightness-200 contrast-200">
          <Link to="/admin" className="hover:opacity-80 transition-opacity">
            {LOGO}
          </Link>
        </div>
        <div className="px-4 py-2 mb-4">
           <span className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4">Admin Control</span>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-white/10 text-green-400 font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <span>Overview</span>
          </button>
          <button 
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'clients' ? 'bg-white/10 text-green-400 font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <span>Client Management</span>
          </button>
          <button 
            onClick={() => setActiveTab('pool')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'pool' ? 'bg-white/10 text-green-400 font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <span>Ad Account Pool</span>
          </button>
        </nav>
        <div className="p-6 border-t border-slate-800">
           <button onClick={onLogout} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Log out Admin</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold text-slate-900 capitalize">{activeTab.replace('-', ' ')}</h2>
          <div className="bg-slate-100 px-4 py-2 rounded-lg flex items-center space-x-3">
             <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">A</div>
             <span className="text-sm font-bold text-slate-700">Master Admin</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                   <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total Clients</span>
                   <p className="text-3xl font-bold text-slate-900 mt-2">42</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                   <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Active Spend</span>
                   <p className="text-3xl font-bold text-green-600 mt-2">$620.40</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                   <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Accounts Free</span>
                   <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                   <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Alerts</span>
                   <p className="text-3xl font-bold text-red-600 mt-2">3</p>
                 </div>
               </div>

               <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-6">Recent Activity Log</h3>
                  <div className="space-y-4">
                     {[1,2,3].map(i => (
                        <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 px-2 rounded-lg transition-colors">
                           <div className="flex items-center space-x-3">
                              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-sm shadow-blue-200"></div>
                              <p className="text-sm text-slate-600">
                                <span className="font-bold text-slate-900">Karim Ahmed</span> added <span className="font-mono text-green-600 font-bold">$50</span> credit via bKash
                              </p>
                           </div>
                           <span className="text-xs text-slate-400 font-medium">10 mins ago</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'clients' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in duration-500">
                <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
                   <h3 className="font-bold text-slate-900">Client Management</h3>
                   <div className="relative w-full sm:w-auto">
                      <input type="text" placeholder="Search name or ID..." className="w-full sm:w-64 pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none transition-all" />
                      <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                   </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
                        <tr>
                          <th className="px-6 py-4">Client</th>
                          <th className="px-6 py-4">Balance</th>
                          <th className="px-6 py-4">Ad Account</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {MOCK_CLIENTS.map(client => (
                          <tr key={client.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                               <div className="font-bold text-slate-900">{client.name}</div>
                               <div className="text-xs text-slate-500">{client.email}</div>
                            </td>
                            <td className={`px-6 py-4 font-mono font-bold ${client.balance < 0 ? 'text-red-600' : 'text-slate-900'}`}>
                              ${client.balance.toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                               <code className="bg-slate-100 px-2 py-1 rounded text-xs text-slate-600 font-mono">{client.adAccount}</code>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${client.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {client.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 space-x-4">
                               <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">Edit</button>
                               <button className="text-xs font-bold text-red-600 hover:text-red-800 transition-colors">Lock</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
             </div>
          )}

          {activeTab === 'pool' && (
             <div className="space-y-6 animate-in fade-in duration-500">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                   <h3 className="text-lg font-bold">Ad Account Pool</h3>
                   <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20">
                    + Add New Business Account
                   </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {MOCK_POOL.map(acc => (
                      <div key={acc.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-green-300 hover:shadow-md">
                         <div className="flex justify-between items-start mb-4">
                            <span className="text-xs text-slate-400 font-mono font-bold">{acc.id}</span>
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${acc.status === 'Free' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                               {acc.status}
                            </span>
                         </div>
                         <h4 className="font-bold text-slate-900 mb-4">Meta Agency Account</h4>
                         <div className="text-sm text-slate-500 mb-6">
                            Assigned to: <span className="text-slate-900 font-bold">{acc.assigned}</span>
                         </div>
                         <button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-all">Manage Credentials</button>
                      </div>
                   ))}
                </div>
             </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
