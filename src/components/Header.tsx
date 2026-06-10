/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Wrench, Phone, MessageSquare, Calendar, Menu, X } from "lucide-react";
import { SEO_DATA } from "../data";
import HariLogo from "./HariLogo";

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentView, onNavigate, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header id="site-header" className="sticky top-0 z-50 w-full border-b border-gray-500/20 bg-black/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.6)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div 
          id="brand-logo" 
          className="flex cursor-pointer items-center gap-1"
          onClick={() => handleNavClick("home")}
          role="button"
          tabIndex={0}
        >
          <img src='/images/hari-logo.png' alt="Hari Logo" className="h-20 w-auto" />
          {/* <HariLogo className="h-14 w-auto" showSlogan={false} lightText={true} /> */}
        </div>

        {/* Desktop Navigation Link Items */}
        <nav id="desktop-nav" className="hidden md:flex md:items-center md:gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1.5 font-sans text-sm font-semibold tracking-wide transition-all duration-200 outline-none hover:text-[#e11d48] ${
                currentView === item.id 
                  ? "text-[#e11d48] font-bold" 
                  : "text-slate-300"
              }`}
            >
              {item.label}
              {currentView === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#e11d48]" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
            id="header-call-btn"
            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-sans text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-[#e11d48] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#e11d48]" />
            <span>Call Workshop</span>
          </a>
          <button
            onClick={onOpenBooking}
            id="header-book-btn"
            className="flex items-center gap-1.5 rounded-lg bg-[#e11d48] px-4 py-2 font-sans text-xs font-bold text-white shadow-md shadow-rose-900/10 hover:bg-rose-700 transition-all cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Service</span>
          </button>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBooking}
            id="mobile-action-book-btn"
            className="rounded-lg bg-[#e11d48] p-2 text-white hover:bg-rose-700"
            title="Book a Car Service"
          >
            <Calendar className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay and Navigation Menu */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="absolute top-[100%] left-0 z-40 w-full border-b border-slate-900 bg-slate-950/98 py-5 px-6 shadow-2xl backdrop-blur-lg transition-transform duration-300 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 text-left font-sans text-base font-bold tracking-wide border-b border-slate-900 ${
                  currentView === item.id ? "text-[#e11d48] font-extrabold" : "text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
                id="mobile-call-link"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900 py-3 text-center font-sans text-sm font-semibold text-slate-300"
              >
                <Phone className="h-4 w-4 text-[#e11d48]" />
                <span>Call {SEO_DATA.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                id="mobile-book-link"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-[#e11d48] py-3 text-center font-sans text-sm font-bold text-white shadow-lg shadow-rose-900/10 hover:bg-rose-700 transition"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Service Online</span>
              </button>
              <a
                href={`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=Hi%20Hari%20Automobiles,%20I%20would%20like%20to%20inquire%20about%20a%20car%20service.`}
                target="_blank"
                rel="noreferrer"
                id="mobile-whatsapp-link"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 py-3 text-center font-sans text-sm font-bold text-white shadow-lg shadow-emerald-500/10"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
