
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGO } from '../constants';

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const plans = [
    {
      name: "Starter",
      price: "$10",
      description: "Perfect for testing small campaigns.",
      features: ["1 Managed Ad Account", "bKash/Nagad Top-up", "Auto-Pause Control", "24/7 Monitoring"],
      color: "bg-slate-50"
    },
    {
      name: "Professional",
      price: "$25",
      description: "Best for growing businesses.",
      features: ["3 Managed Ad Accounts", "Priority Support", "Advanced Analytics", "Page Partner Access"],
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Agency",
      price: "Custom",
      description: "Unlimited scale for agencies.",
      features: ["Unlimited Accounts", "Dedicated Manager", "White-label Dashboard", "Custom API Integration"],
      color: "bg-slate-900 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <Link to="/" className="group">{LOGO}</Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-600">
              <Link to="/how-it-works" className="hover:text-green-600 transition-colors">How it Works</Link>
              <Link to="/pricing" className="text-green-600">Pricing</Link>
              <Link to="/faq" className="hover:text-green-600 transition-colors">FAQ</Link>
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all">Login</Link>
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all shadow-lg shadow-green-200/50">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-20 px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-slate-600 text-lg">Pay only for what you spend + a small service fee.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`p-10 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 ${plan.color}`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm ml-2 opacity-60">min. top-up</span>
              </div>
              <p className="mb-8 opacity-80">{plan.description}</p>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm opacity-90">{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/login" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${idx === 2 ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-[2rem] border border-slate-200 text-center shadow-sm">
          <h3 className="text-xl font-bold mb-4">Frequently asked about billing:</h3>
          <p className="text-slate-600 mb-0">Our service fee is a flat 10% on top of your ad spend. No monthly fixed costs.</p>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
