
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserProfile, Campaign, CampaignStatus, Transaction } from '../types';
import { LOGO } from '../constants';

const MOCK_CAMPAIGNS: Campaign[] = [
  { id: '1', name: 'Lead Gen - Dhaka Real Estate', status: CampaignStatus.ACTIVE, spend: 12.40, budget: 50, createdAt: '2024-01-10' },
  { id: '2', name: 'Traffic - E-commerce Store', status: CampaignStatus.PAUSED, spend: 45.20, budget: 100, createdAt: '2024-01-12' },
  { id: '3', name: 'Message - New Product Launch', status: CampaignStatus.ACTIVE, spend: 5.10, budget: 20, createdAt: '2024-01-15' },
];

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', date: '2024-01-01', type: 'Credit', amount: 50, balance: 50 },
  { id: 't2', date: '2024-01-05', type: 'Spend', amount: 5.20, balance: 44.80 },
  { id: 't3', date: '2024-01-15', type: 'Credit', amount: 25, balance: 69.80 },
];

interface DashboardProps {
  user: UserProfile;
  onLogout: () => void;
  setUser: (u: UserProfile) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, setUser }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'wallet' | 'settings'>('overview');
  const [campaigns, setCampaigns] = useState<Campaign[]>(MOCK_CAMPAIGNS);
  const [showAddBalance, setShowAddBalance] = useState(false);
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);
  const [newCampaignName, setNewCampaignName] = useState('');

  const toggleStatus = (id: string) => {
    setCampaigns(prev => prev.map(c => 
      c.id === id ? { ...c, status: c.status === CampaignStatus.ACTIVE ? CampaignStatus.PAUSED : CampaignStatus.ACTIVE } : c
    ));
  };

  const addBalance = () => {
    const updated = { ...user, balance: user.balance + 50 };
    setUser(updated);
    localStorage.setItem('admeter_user', JSON.stringify(updated));
    setShowAddBalance(false);
  };

  const createCampaign = () => {
    if (!newCampaignName) return;
    const newCamp: Campaign = {
      id: Math.random().toString(36).substr(2, 9),
      name: newCampaignName,
      status: CampaignStatus.ACTIVE,
      spend: 0,
      budget: 10,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setCampaigns([newCamp, ...campaigns]);
    setShowCreateCampaign(false);
    setNewCampaignName('');
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6">
          <Link to="/dashboard" className="hover:opacity-80 transition-opacity">
            {LOGO}
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 py-4">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-green-50 text-green-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <span>Overview</span>
          </button>
          <button 
            onClick={() => setActiveTab('campaigns')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'campaigns' ? 'bg-green-50 text-green-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <span>Campaigns</span>
          </button>
          <button 
            onClick={() => setActiveTab('wallet')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'wallet' ? 'bg-green-50 text-green-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <span>Wallet</span>
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-green-50 text-green-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <span>Settings</span>
          </button>
        </nav>
        <div className="p-4 border-t border-slate-200">
           <button onClick={onLogout} className="w-full text-left px-4 py-2 text-slate-500 hover:text-red-500 text-sm font-medium transition-colors">Log out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold text-slate-900 capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
             <div className="flex flex-col items-end">
                <span className="text-sm text-slate-500">Balance</span>
                <span className="text-lg font-bold text-green-600">${user.balance.toFixed(2)}</span>
             </div>
             <button onClick={() => setShowAddBalance(true)} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20">
               + Add Balance
             </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-sm text-slate-500 block mb-1">Spent Today</span>
                  <span className="text-3xl font-bold text-slate-900">$4.30</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-sm text-slate-500 block mb-1">Active Campaigns</span>
                  <span className="text-3xl font-bold text-slate-900">{campaigns.filter(c => c.status === CampaignStatus.ACTIVE).length}</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-sm text-slate-500 block mb-1">Status</span>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-green-600">Ads Running</span>
                  </div>
                </div>
              </div>

              {user.balance < 10 && (
                 <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center space-x-3 text-amber-800 animate-in fade-in duration-500">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                   <div>
                     <span className="font-bold">Low balance alert!</span> Your balance is under $10. Your ads might pause soon.
                   </div>
                 </div>
              )}

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                   <h3 className="font-bold text-slate-900">Active Campaigns</h3>
                   <button onClick={() => setActiveTab('campaigns')} className="text-sm text-green-600 font-bold hover:underline">View all</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                      <tr>
                        <th className="px-6 py-4">Campaign Name</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Spend</th>
                        <th className="px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {campaigns.slice(0, 3).map(campaign => (
                        <tr key={campaign.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">{campaign.name}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${campaign.status === CampaignStatus.ACTIVE ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-600 font-mono">${campaign.spend.toFixed(2)}</td>
                          <td className="px-6 py-4">
                             <button onClick={() => toggleStatus(campaign.id)} className="text-xs font-bold text-green-600 hover:text-green-700 transition-colors">
                               {campaign.status === CampaignStatus.ACTIVE ? 'Pause' : 'Resume'}
                             </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'campaigns' && (
             <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">Manage Campaigns</h3>
                  <button onClick={() => setShowCreateCampaign(true)} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">Create New Campaign</button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                   {campaigns.map(c => (
                     <div key={c.id} className="bg-white p-6 rounded-2xl border border-slate-200 flex justify-between items-center transition-all hover:border-green-200 shadow-sm">
                        <div>
                           <h4 className="font-bold text-slate-900">{c.name}</h4>
                           <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                              <span>Spend: <strong className="text-slate-900">${c.spend.toFixed(2)}</strong></span>
                              <span>Daily Budget: <strong className="text-slate-900">${c.budget}</strong></span>
                              <span>Started: {c.createdAt}</span>
                           </div>
                        </div>
                        <div className="flex items-center space-x-4">
                           <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.status === CampaignStatus.ACTIVE ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>{c.status}</span>
                           <button onClick={() => toggleStatus(c.id)} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${c.status === CampaignStatus.ACTIVE ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-green-500 text-white hover:bg-green-600'}`}>
                              {c.status === CampaignStatus.ACTIVE ? 'Pause' : 'Resume'}
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          )}

          {activeTab === 'wallet' && (
             <div className="space-y-8">
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                   <div className="relative z-10">
                      <span className="text-slate-400 text-sm">Available Balance</span>
                      <h3 className="text-5xl font-bold mt-2 mb-8">${user.balance.toFixed(2)}</h3>
                      <button onClick={() => setShowAddBalance(true)} className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20">
                        Add Funds via bKash/Nagad
                      </button>
                   </div>
                   <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                   <div className="p-6 border-b border-slate-200">
                      <h3 className="font-bold text-slate-900">Transaction History</h3>
                   </div>
                   <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                        <tr>
                          <th className="px-6 py-4">Date</th>
                          <th className="px-6 py-4">Type</th>
                          <th className="px-6 py-4">Amount</th>
                          <th className="px-6 py-4">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {MOCK_TRANSACTIONS.map(t => (
                          <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 text-slate-600">{t.date}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${t.type === 'Credit' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                                {t.type}
                              </span>
                            </td>
                            <td className={`px-6 py-4 font-mono font-bold ${t.type === 'Credit' ? 'text-green-600' : 'text-slate-900'}`}>
                              {t.type === 'Credit' ? '+' : '-'}${t.amount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm">${t.balance.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
             </div>
          )}

          {activeTab === 'settings' && (
             <div className="max-w-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                   <h3 className="text-lg font-bold mb-6">Connection Details</h3>
                   <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-slate-100">
                         <div>
                            <p className="text-slate-900 font-bold">Facebook Connectivity</p>
                            <p className="text-sm text-slate-500">Official Meta OAuth Connection</p>
                         </div>
                         <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Connected</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-slate-100">
                         <div>
                            <p className="text-slate-900 font-bold">Ad Account</p>
                            <p className="text-sm text-slate-500">Managed Account assigned by Admin</p>
                         </div>
                         <code className="bg-slate-100 px-3 py-1 rounded text-sm text-slate-600 font-mono">{user.adAccountId || 'act_48239011'}</code>
                      </div>
                      <div className="flex justify-between items-center py-4">
                         <div>
                            <p className="text-slate-900 font-bold">Connected Page</p>
                            <p className="text-sm text-slate-500">The Facebook page where ads will run</p>
                         </div>
                         <p className="font-bold text-slate-900">{user.connectedPage || 'Digital Solutions BD'}</p>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
                   <h3 className="text-lg font-bold mb-4 text-red-600">Danger Zone</h3>
                   <p className="text-sm text-slate-500 mb-6">Once you disconnect, all your active campaigns will stop immediately. This cannot be undone automatically.</p>
                   <button 
                    onClick={() => {if(confirm('Are you sure you want to disconnect?')) alert('Disconnected. Contact admin to re-enable.');}}
                    className="bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition-colors"
                  >
                    Disconnect Facebook Account
                  </button>
                </div>
             </div>
          )}
        </main>
      </div>

      {/* Modals */}
      {showAddBalance && (
         <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform animate-in zoom-in-95 duration-200">
               <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6">💰</div>
               <h3 className="text-xl font-bold mb-4">Add Balance</h3>
               <p className="text-slate-500 mb-6 text-sm">This is a simulation. In production, this would open a bKash/Nagad gateway. Clicking confirm will add $50 to your account.</p>
               <div className="flex gap-4">
                  <button onClick={() => setShowAddBalance(false)} className="flex-1 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">Cancel</button>
                  <button onClick={addBalance} className="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all">Confirm</button>
               </div>
            </div>
         </div>
      )}

      {showCreateCampaign && (
         <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform animate-in zoom-in-95 duration-200">
               <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🚀</div>
               <h3 className="text-xl font-bold mb-4">New Campaign</h3>
               <p className="text-sm text-slate-500 mb-4">Give your campaign a clear name for better reporting.</p>
               <input 
                  type="text" 
                  value={newCampaignName}
                  onChange={(e) => setNewCampaignName(e.target.value)}
                  placeholder="e.g. Dhaka Lead Gen - March" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl mb-6 outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  autoFocus
               />
               <div className="flex gap-4">
                  <button onClick={() => setShowCreateCampaign(false)} className="flex-1 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">Cancel</button>
                  <button onClick={createCampaign} className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">Create</button>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};

export default Dashboard;
