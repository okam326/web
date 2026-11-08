import React, { useState } from 'react';
import { SiteConfig, EmergencyRequest, WinchService, CoverageArea } from './types';
import { DEFAULT_CONFIG } from './data/defaultConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CoverageMapSection } from './components/CoverageMapSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EmergencyModal } from './components/EmergencyModal';
import { FloatingEmergencyBar } from './components/FloatingEmergencyBar';

const STORAGE_KEY = 'al_rowad_winch_config_v8';

export default function App() {
  const [config] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load saved config:', e);
    }
    return DEFAULT_CONFIG;
  });

  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<Partial<EmergencyRequest> | undefined>(undefined);

  const handleOpenEmergencyModal = (initialData?: Partial<EmergencyRequest>) => {
    setModalInitialData(initialData);
    setIsEmergencyModalOpen(true);
  };

  const handleSelectService = (service: WinchService) => {
    const text = encodeURIComponent(
      `السلام عليكم، أود طلب خدمة: ${service.title} من ${config.brandName}.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleSelectArea = (area: CoverageArea) => {
    handleOpenEmergencyModal({
      fromLocation: area.name,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Bar with 3-Zone Contract */}
      <Navbar
        config={config}
        onRequestEmergency={() => handleOpenEmergencyModal()}
      />

      <main className="flex-1">
        {/* Hero Section with Quick Rescue Request Form */}
        <Hero config={config} />

        {/* Core Services Section */}
        <ServicesSection
          config={config}
          onSelectService={handleSelectService}
        />

        {/* Cairo Coverage Districts */}
        <CoverageMapSection
          config={config}
          onSelectArea={handleSelectArea}
        />

        {/* Verified Driver Testimonials */}
        <Testimonials config={config} />

        {/* FAQs */}
        <FaqSection config={config} />
      </main>

      {/* Footer */}
      <Footer
        config={config}
      />

      {/* Persistent Floating Emergency Contact Bar (Mobile & Desktop) */}
      <FloatingEmergencyBar
        config={config}
        onRequestEmergency={() => handleOpenEmergencyModal()}
      />

      {/* Emergency Request Modal */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        config={config}
        initialData={modalInitialData}
      />
    </div>
  );
}
