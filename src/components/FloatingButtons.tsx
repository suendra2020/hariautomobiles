/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { SEO_DATA } from "../data";

interface FloatingButtonsProps {
  onOpenBooking: () => void;
}

export default function FloatingButtons({ onOpenBooking }: FloatingButtonsProps) {
  return (
    <div 
      id="floating-actions-container" 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 max-w-[280px]"
    >
      
      {/* Interactive Tooltip-Badges */}
      
      {/* 1. Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=Hi%20Hari%20Automobiles,%20I%20would%20like%20to%20book%20a%20car%20service%20via%20WhatsApp.`}
        target="_blank"
        rel="noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-xl shadow-emerald-600/30 text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer hover:bg-emerald-500"
        aria-label="Direct Chat on WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          💬 Chat on WhatsApp
        </span>
        <MessageSquare className="h-6.5 w-6.5 stroke-[2]" />
        {/* Glowing Pulse */}
        <span className="absolute -inset-0.5 -z-10 rounded-full bg-emerald-500 opacity-40 blur-sm animate-ping duration-1000" />
      </a>

      {/* 2. Sticky Call Button */}
      <a
        href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
        id="floating-call-btn"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 shadow-xl shadow-amber-500/30 text-slate-950 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer hover:bg-amber-400"
        aria-label="Call Hari Automobiles Workshop"
      >
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          📞 Call Workshop
        </span>
        <Phone className="h-6.5 w-6.5 stroke-[2.2]" />
        {/* Glowing Pulse */}
        <span className="absolute -inset-0.5 -z-10 rounded-full bg-amber-400 opacity-40 blur-sm animate-pulse" />
      </a>

      {/* 3. Sticky Quick Booking Button */}
      <button
        onClick={onOpenBooking}
        id="floating-quick-book-btn"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 border border-slate-800 shadow-xl shadow-black/80 text-amber-500 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer hover:text-amber-400"
        aria-label="Book Car Repair Service"
      >
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          📅 Swift Scheduler
        </span>
        <Calendar className="h-6.5 w-6.5 stroke-[2]" />
      </button>

    </div>
  );
}
