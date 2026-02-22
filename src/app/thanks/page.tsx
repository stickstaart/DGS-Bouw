import React from 'react';
import Link from 'next/link';
import { Home, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtiele achtergrond glow om te matchen met je main site */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dgs-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative z-10">

        {/* Animated Icon Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-dgs-green/20 rounded-full blur-xl animate-pulse" />
            <div className="bg-slate-900 border-2 border-dgs-green/30 p-5 rounded-full relative">
              <CheckCircle2 className="w-12 h-12 text-dgs-green" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-white tracking-tighter">
            BEDANKT!
          </h1>
          <p className="text-slate-400 font-medium leading-relaxed">
            Je bericht is succesvol ontvangen. <br />
            We nemen binnen 24 uur contact met je op.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Link
            href="/"
            className="group flex items-center justify-center space-x-3 w-full bg-dgs-green text-slate-950 font-black py-4 rounded-xl hover:bg-green-400 transition-all duration-300 shadow-lg shadow-dgs-green/20 active:scale-[0.98]"
          >
            <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span>TERUG NAAR HOME</span>
          </Link>

          <Link
            href="/"
            className="mt-4 inline-flex items-center text-sm text-slate-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ga direct terug
          </Link>
        </div>

      </div>
    </main>
  );
}
