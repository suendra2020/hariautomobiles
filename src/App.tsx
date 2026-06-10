/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingButtons from "./components/FloatingButtons";
import SplashScreen from "./components/SplashScreen";

// Views
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ServicesView from "./views/ServicesView";
import TestimonialsView from "./views/TestimonialsView";
import ContactView from "./views/ContactView";

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<string>("home");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleNavigate = (viewId: string) => {
    setCurrentView(viewId);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div id="app-root" className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-x-clip selection:bg-[#e11d48] selection:text-white">
      
      {/* 1. Header component containing desktop & mobile layouts */}
      <Header 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        onOpenBooking={() => setIsBookingOpen(true)} 
      />

      {/* 2. Main content engine rendering view panels */}
      <main className="flex-grow">
        <div key={currentView} className="transition-opacity duration-300 ease-in-out">
          {currentView === "home" && (
            <HomeView 
              onNavigate={handleNavigate} 
              onOpenBooking={() => setIsBookingOpen(true)}
              onSelectService={handleSelectService}
            />
          )}
          {currentView === "about" && (
            <AboutView />
          )}
          {currentView === "services" && (
            <ServicesView 
              onOpenBooking={() => setIsBookingOpen(true)}
              selectedServiceId={selectedServiceId}
              setSelectedServiceId={setSelectedServiceId}
            />
          )}
          {currentView === "testimonials" && (
            <TestimonialsView />
          )}
          {currentView === "contact" && (
            <ContactView 
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}
        </div>
      </main>

      {/* 3. Footer component loaded with diagnostic keywords */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenBooking={() => setIsBookingOpen(true)} 
      />

      {/* 4. Booking Scheduler overlay modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedServiceId(undefined);
        }} 
        selectedServiceId={selectedServiceId}
      />

      {/* 5. Sticky float actions (WhatsApp + Calling support) */}
      <FloatingButtons onOpenBooking={() => setIsBookingOpen(true)} />

    </div>
    </>
  );
}
