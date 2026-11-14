import React, { useMemo, useState } from 'react';
import { DESIGN_PROJECTS } from './data/projects';
import { DesignProject } from './types/portfolio';
import { Header } from './components/Header';
import { HeroPortfolioSection } from './components/HeroPortfolioSection';
import { ProjectsGridSection } from './components/ProjectsGridSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyView } from './components/CaseStudyView';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<{
    project: DesignProject;
    initialViewMode: '360' | 'gallery';
  } | null>(null);

  const featuredHeroProjects = useMemo(
    () => DESIGN_PROJECTS.filter((p) => p.featuredInHero),
    []
  );

  const relatedProjects = useMemo(() => {
    if (!selectedCaseStudy) return [];
    const current = selectedCaseStudy.project;
    const sameCategory = DESIGN_PROJECTS.filter(
      (p) => p.id !== current.id && p.category === current.category
    );
    const others = DESIGN_PROJECTS.filter(
      (p) => p.id !== current.id && p.category !== current.category
    );
    return [...sameCategory, ...others].slice(0, 2);
  }, [selectedCaseStudy]);

  const handleNavigate = (sectionId: string) => {
    if (selectedCaseStudy) {
      setSelectedCaseStudy(null);
      window.setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenProject = (
    project: DesignProject,
    initialViewMode: '360' | 'gallery' = 'gallery'
  ) => {
    setSelectedCaseStudy({ project, initialViewMode });
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#171717]">
      <Header onNavigate={handleNavigate} />

      {selectedCaseStudy ? (
        <CaseStudyView
          project={selectedCaseStudy.project}
          initialViewMode={selectedCaseStudy.initialViewMode}
          relatedProjects={relatedProjects}
          onBack={() => setSelectedCaseStudy(null)}
          onOpenProject={handleOpenProject}
          onNavigateContact={() => handleNavigate('contact')}
        />
      ) : (
        <main className="flex-1">
          <HeroPortfolioSection
            featuredProjects={featuredHeroProjects}
            onOpenProject={handleOpenProject}
            onScrollToSection={handleNavigate}
          />

          <ProjectsGridSection
            projects={DESIGN_PROJECTS}
            onOpenProject={handleOpenProject}
          />

          <AboutSection />

          <ProcessSection />

          <ContactSection />
        </main>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
