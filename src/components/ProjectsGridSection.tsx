import React, { useMemo, useState } from 'react';
import { DesignProject, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridSectionProps {
  projects: DesignProject[];
  onOpenProject: (project: DesignProject, initialView?: '360' | 'gallery') => void;
}

type CategoryFilter = 'الكل' | ProjectCategory;

const FILTERS: CategoryFilter[] = [
  'الكل',
  'جاكيتات',
  'معاطف',
  'هوديز',
  'كنزات',
  'تيشيرتات',
];

export const ProjectsGridSection: React.FC<ProjectsGridSectionProps> = ({
  projects,
  onOpenProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('الكل');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'الكل') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <section
      id="projects"
      className="border-b border-[#DDE0E4] bg-[#F8F8F6] scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 lg:py-20">
        {/* Portfolio Works Header + Project Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#DDE0E4]">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-medium text-[#62666D]">
              أرشيف المشاريع
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171717]">
              الأعمال
            </h2>
            <p className="text-sm text-[#62666D] leading-relaxed">
              مشاريع تصميم منتجات وأزياء أتناول فيها بنية القطعة، وزن القماش، وقرارات التفصيل من السكتش حتى العينة النهائية.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'border-[#171717] bg-[#171717] text-[#F8F8F6]'
                      : 'border-[#DDE0E4] bg-white text-[#62666D] hover:text-[#171717] hover:border-[#62666D]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
            <span className="text-xs font-mono-tabular text-[#62666D] pr-2">
              ({filteredProjects.length})
            </span>
          </div>
        </div>

        {/* Large 2-Column Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
