'use client';
import React, { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans text-slate-900">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-200">
        <div className="bg-blue-600 p-8 text-center text-white">
          <h1 className="text-3xl font-bold italic tracking-tight">BINUS TPKS Prep</h1>
          <p className="mt-2 opacity-90">Latihan Ujian Potensi Keberhasilan Studi</p>
        </div>
        
        <div className="p-8">
          <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
              Logika Verbal - Padanan Kata
            </h3>
            <p className="text-lg font-semibold mb-6 italic">Gergaji : Kayu = Pisau : ...</p>
            <div className="grid gap-3">
              <button className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-400 hover:bg-blue-50 transition-all font-medium">A. Tajam</button>
              <button className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-400 hover:bg-blue-50 transition-all font-medium">B. Dapur</button>
              <button className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-400 hover:bg-blue-50 transition-all font-medium">C. Daging</button>
              <button className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-400 hover:bg-blue-50 transition-all font-medium">D. Besi</button>
            </div>
          </div>

          <div className="text-center italic text-slate-400 text-sm">
            © 2026 Developed by Muhammad Azka Vatar
          </div>
        </div>
      </div>
    </div>
  );
}
