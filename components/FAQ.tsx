
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGO } from '../constants';

const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    {
      q: "Do I need a dual currency card?",
      a: "No. You pay us in BDT via bKash/Nagad and we handle the USD billing with our agency cards.",
      bq: "আমার কি ডুয়াল কারেন্সি কার্ড লাগবে?",
      ba: "না। আপনি আমাদের বিকাশ/নগদে পেমেন্ট করবেন এবং আমরা আমাদের এজেন্সি কার্ড দিয়ে ডলার পেমেন্ট হ্যান্ডেল করব।"
    },
    {
      q: "Will my Facebook Page be safe?",
      a: "Absolutely. You add our Business ID as a Partner to your page. Ownership stays 100% with you.",
      bq: "আমার ফেসবুক পেজ কি নিরাপদ থাকবে?",
      ba: "অবশ্যই। আপনি আপনার পেজের পার্টনার হিসেবে আমাদের বিজনেস আইডি অ্যাড করবেন। ওনারশিপ সম্পূর্ণ আপনার কাছেই থাকবে।"
    },
    {
      q: "What happens if my balance runs out?",
      a: "Our API monitors your spend every 5-10 minutes. If credit reaches zero, all active campaigns are automatically paused.",
      bq: "ব্যালেন্স শেষ হলে কি হবে?",
      ba: "আমাদের এপিআই প্রতি ৫-১০ মিনিটে স্পেন্ড চেক করে। ক্রেডিট শেষ হলে সব ক্যাম্পেইন অটোমেটিক পজ হয়ে যাবে।"
    },
    {
      q: "Is there a minimum spend requirement?",
      a: "The minimum top-up starts from just $10. There are no monthly fixed commitments.",
      bq: "ন্যূনতম কত ডলার স্পেন্ড করতে হবে?",
      ba: "আপনি মাত্র ১০ ডলার টপ-আপ করে শুরু করতে পারেন। কোন মাসিক ফিক্সড খরচ নেই।"
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
              <Link to="/pricing" className="hover:text-green-600 transition-colors">Pricing</Link>
              <Link to="/faq" className="text-green-600">FAQ</Link>
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all">Login</Link>
              <Link to="/login" className="px-5 py-2.5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all shadow-lg shadow-green-200/50">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-20 px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-lg">Everything you need to know about AdMeter.</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <div>
                  <h4 className="font-bold text-slate-900">{item.q}</h4>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-tight font-medium">{item.bq}</p>
                </div>
                <span className={`text-2xl transition-transform duration-300 text-slate-400 ${openIdx === idx ? 'rotate-45 text-green-500' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="p-6 pt-0 border-t border-slate-50 bg-slate-50/30">
                  <p className="text-slate-600 mb-4 leading-relaxed">{item.a}</p>
                  <div className="p-4 bg-white rounded-xl border border-slate-100 text-slate-500 text-sm italic">
                    {item.ba}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-slate-500 mb-4">Still have questions?</p>
           <a href="mailto:support@admeter.com" className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all">
             Contact Support
             <span>→</span>
           </a>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
