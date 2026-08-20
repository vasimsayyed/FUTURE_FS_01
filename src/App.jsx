import React, { Suspense } from 'react';
import FuturisticNavbar from './components/navigation/FuturisticNavbar';
import BackgroundCanvas3D from './components/3d/BackgroundCanvas3D';
import CustomCursor from './components/ui/CustomCursor';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import ProjectShowcase from './components/sections/ProjectShowcase';
import TechnologyUniverse from './components/sections/TechnologyUniverse';
import CertificatesSection from './components/sections/CertificatesSection';
import ContactExperience from './components/sections/ContactExperience';
import FuturisticFooter from './components/footer/FuturisticFooter';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Custom Trailing Spring Cursor (Desktop) */}
      <CustomCursor />

      {/* Ambient 3D Three.js Background with Parallax */}
      <Suspense fallback={null}>
        <BackgroundCanvas3D />
      </Suspense>

      {/* Floating Glass Navigation */}
      <FuturisticNavbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectShowcase />
        <TechnologyUniverse />
        <CertificatesSection />
        <ContactExperience />
      </main>

      {/* Footer */}
      <FuturisticFooter />
    </div>
  );
}

export default App;