import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { ServicesSection } from './components/ServicesSection';
import { WhyPrimeSol } from './components/WhyPrimeSol';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechnologySection } from './components/TechnologySection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookCallModal } from './components/BookCallModal';
import { CareersModal } from './components/CareersModal';

export default function App() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('AI Automation');

  const handleSelectService = (serviceName: string) => {
    setPrefilledService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForContact = (projectName: string) => {
    setPrefilledService(`Similar to ${projectName}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030308] text-[#F8FAFC] flex flex-col font-sans selection:bg-purple-500/30 selection:text-cyan-200">
      {/* Sticky Premium Clean Navbar with Home, About Us, Services, Projects, Careers, Contact Us */}
      <Navbar
        onBookCall={() => setIsBookCallOpen(true)}
        onOpenCareers={() => setIsCareersOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onBookCall={() => setIsBookCallOpen(true)} />

        {/* 2. Trust / Metrics Section */}
        <Metrics />

        {/* 3. Services Section (20 services grouped into 5 categories) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onBookCall={() => setIsBookCallOpen(true)}
        />

        {/* 4. Why PrimeSol (4 core pillars split-layout) */}
        <WhyPrimeSol onBookCall={() => setIsBookCallOpen(true)} />

        {/* 5. Featured Projects (18 case studies with filtering & modal inspection) */}
        <ProjectsSection onSelectProjectForContact={handleSelectProjectForContact} />

        {/* 6. Process Section (4-step horizontal sprint lifecycle) */}
        <ProcessSection onBookCall={() => setIsBookCallOpen(true)} />

        {/* 7. About PrimeSol ("From a Hostel Room to PrimeSol" company story) */}
        <AboutSection />

        {/* 8. Team Section (Usman, Basit, Ehtisham, Arslan) */}
        <TeamSection />

        {/* 9. Testimonials (Junko Bodie, Marissa Song, Salaam, David Reeves, Priya Anand) */}
        <TestimonialsSection />

        {/* 10. Technology Section (Technical ecosystem visualization) */}
        <TechnologySection />

        {/* 11. FAQ Section (Accordion of authentic queries) */}
        <FAQSection onBookCall={() => setIsBookCallOpen(true)} />

        {/* 12. Final CTA */}
        <FinalCTA
          onStartProject={handleStartProject}
          onBookCall={() => setIsBookCallOpen(true)}
        />

        {/* 13. Contact Section (Direct channels & specification form) */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* 14. Footer */}
      <Footer
        onOpenCareers={() => setIsCareersOpen(true)}
        onBookCall={() => setIsBookCallOpen(true)}
      />

      {/* Interactive Modals */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />

      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => setIsCareersOpen(false)}
      />
    </div>
  );
}
