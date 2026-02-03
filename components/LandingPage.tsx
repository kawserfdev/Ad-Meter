
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../constants';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="group">{LOGO}</Link>
            <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-600">
              <Link to="/how-it-works" className="hover:text-green-600 transition-colors">How it Works</Link>
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

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-8 border border-green-100 animate-bounce">
            🚀 Trusted by 500+ Digital Marketers in Bangladesh
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Run Facebook Ads <br />
            <span className="text-green-500">Without an International Card</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            কার্ড ছাড়াই Facebook Ads চালান। Billing আমরা দেখি, Campaign কন্ট্রোল আপনার।
            Safe, managed, and scalable advertising solution for Bangladeshi marketers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login" className="w-full sm:w-auto px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-200/50">
              Get Started | From just $10
            </Link>
            <Link to="/how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all">
              Watch Demo
            </Link>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
             <div className="flex items-center justify-center font-bold text-slate-400">META API PARTNER</div>
             <div className="flex items-center justify-center font-bold text-slate-400">BKASH SUPPORTED</div>
             <div className="flex items-center justify-center font-bold text-slate-400">NAGAD SECURE</div>
             <div className="flex items-center justify-center font-bold text-slate-400">24/7 SUPPORT</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Card Problem in Bangladesh 🇧🇩</h2>
            <p className="text-slate-600">Thousands of skilled marketers can’t run Facebook Ads due to card restrictions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">No International Card</h3>
              <p className="text-slate-600">Dual currency cards are hard to get and manage for freelancers.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Account Ban Risk</h3>
              <p className="text-slate-600">Sharing cards or using unverified virtual cards often leads to permanent bans.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Banking Hassle</h3>
              <p className="text-slate-600">Long bank processes and limits slow down your business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">The Solution</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">We handle billing, <br /> You handle results.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Official Ad Accounts</h4>
                    <p className="text-slate-600">Get assigned pre-configured ad accounts verified by our agency.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Manage with bKash/Nagad</h4>
                    <p className="text-slate-600">Top up your USD balance instantly using local payment methods.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Auto-Pause Protection</h4>
                    <p className="text-slate-600">Campaigns pause automatically when credit hits zero. No overspending.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-slate-900 rounded-[2rem] p-8 shadow-2xl relative">
               <div className="absolute -top-4 -left-4 bg-green-500 text-white p-4 rounded-2xl font-bold">
                 $0 Card Fees
               </div>
               <div className="space-y-4">
                 <div className="h-4 w-3/4 bg-slate-800 rounded-full"></div>
                 <div className="h-4 w-1/2 bg-slate-800 rounded-full"></div>
                 <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                    <div className="flex justify-between mb-4">
                       <span className="text-slate-400">Total Spend</span>
                       <span className="text-green-400 font-bold">$1,240.00</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                       <div className="bg-green-500 h-full w-[65%]"></div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                       <div className="text-xs text-slate-400 mb-1">Clicks</div>
                       <div className="text-xl font-bold text-white">4.2k</div>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                       <div className="text-xs text-slate-400 mb-1">ROAS</div>
                       <div className="text-xl font-bold text-white">3.4x</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-24 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Security You Can Trust</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
               <div className="mb-4 text-green-200">
                 <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
               </div>
               <h4 className="font-bold text-xl mb-2">Meta API</h4>
               <p className="text-green-100">Official Marketing API integration.</p>
            </div>
            <div>
               <div className="mb-4 text-green-200">
                 <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
               </div>
               <h4 className="font-bold text-xl mb-2">No Passwords</h4>
               <p className="text-green-100">We never ask for your FB login info.</p>
            </div>
            <div>
               <div className="mb-4 text-green-200">
                 <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
               </div>
               <h4 className="font-bold text-xl mb-2">Page Ownership</h4>
               <p className="text-green-100">Your page stays under your control.</p>
            </div>
            <div>
               <div className="mb-4 text-green-200">
                 <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
               </div>
               <h4 className="font-bold text-xl mb-2">Real-time Spend</h4>
               <p className="text-green-100">See exactly where your money goes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to run ads without cards?</h2>
          <Link to="/login" className="inline-block px-12 py-5 rounded-full bg-slate-900 text-white font-bold text-xl hover:bg-slate-800 transition-all shadow-2xl">
            Get Started Now
          </Link>
          <p className="mt-8 text-slate-500 font-medium tracking-tight">
             Cardless ads • Transparent billing • Full control
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">{LOGO}</div>
          <p className="text-slate-500 text-sm">© 2024 AdMeter. All rights reserved. Dhaka, Bangladesh.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
