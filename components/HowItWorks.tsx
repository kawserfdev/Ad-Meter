
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGO } from '../constants';

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();
  const steps = [
    {
      title: "Sign Up",
      description: "Create your marketer account in seconds. No complex verification required for starting.",
      icon: "👤"
    },
    {
      title: "Add Balance",
      description: "Top up your wallet using bKash or Nagad. Your local currency is instantly converted to USD credits.",
      icon: "💳"
    },
    {
      title: "Connect Meta",
      description: "Authorize AdMeter to manage ads via official Meta OAuth. No passwords shared.",
      icon: "🔗"
    },
    {
      title: "Launch Campaigns",
      description: "Create campaigns directly or via Meta UI. We provide the Ad Account and Billing.",
      icon: "🚀"
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
                title="Go Back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <Link to="/" className="group">{LOGO}</Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-600">
              <Link to="/how-it-works" className="text-green-600">How it Works</Link>
              <Link to="/pricing" className="hover:text-green-600 transition-colors">Pricing</Link>
              <Link to="/faq" className="hover:text-green-600 transition-colors">FAQ</Link>
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all">Login</Link>
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all shadow-lg shadow-green-200/50">Get Started</Link>
            </div>
            <div className="md:hidden">
               <Link to="/login" className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium">Start</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-20 px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">How AdMeter Works</h1>
          <p className="text-slate-600 text-lg">We bridge the gap between local payments and global advertising.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm transition-transform hover:scale-[1.01]">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Step {idx + 1}: {step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[2rem] text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your first campaign?</h2>
          <p className="text-slate-400 mb-8">Join hundreds of successful marketers scaling their business today.</p>
          <Link to="/login" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all inline-block shadow-xl shadow-green-500/20">
            Get Started | $10 Minimum
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
