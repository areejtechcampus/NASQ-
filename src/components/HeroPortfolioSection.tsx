import React, { useState } from 'react';
import { ArrowLeft, Layers, RotateCw } from 'lucide-react';
import { DesignProject } from '../types/portfolio';
import { SpinViewer360 } from './SpinViewer360';

interface HeroPortfolioSectionProps {
  featuredProjects: DesignProject[];
  onOpenProject: (project: DesignProject, initialView?: '360' | 'gallery') => void;
  onScrollToSection: (id: string) => void;
}

export const HeroPortfolioSection: React.FC<HeroPortfolioSectionProps> = ({
  featuredProjects,
  onOpenProject,
  onScrollToSection,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = featuredProjects[activeIndex] || featuredProjects[0];

  if (!currentProject) return null;

  return (
    <section
      id="hero"
      className="border-b border-[#DDE0E4] bg-[#F8F8F6]"
    >
      {/* Designer Portfolio Intro */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 pb-8 lg:pt-14 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs font-medium text-[#62666D] tracking-wide">
              استوديو نَسَق | NASQ · مصمم منتجات وأزياء
            </p>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#171717] leading-[1.15]">
              أصمّم قطعاً تبدأ من البنية والخامة
            </h1>
            <p className="text-sm sm:text-base text-[#62666D] max-w-2xl leading-relaxed">
              أنا مصمم منتجات وأزياء أركّز على التفاصيل الخفية، هندسة الباترون، وجودة الخامات قبل الشكل الظاهري. هنا أستعرض مشاريعي من الفكرة والسكتش حتى العينة النهائية.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <button
              type="button"
              onClick={() => onScrollToSection('projects')}
              className="px-6 py-3 bg-[#171717] text-[#F8F8F6] text-xs font-semibold hover:bg-[#171717]/90 transition-colors whitespace-nowrap shrink-0"
            >
              شاهد الأعمال
            </button>
            <button
              type="button"
              onClick={() => onScrollToSection('contact')}
              className="px-6 py-3 border border-[#171717] text-[#171717] text-xs font-semibold hover:bg-[#DDE0E4]/40 transition-colors whitespace-nowrap shrink-0"
            >
              لنعمل معاً
            </button>
          </div>
        </div>
      </div>

      {/* Featured Project 360° Case Study Preview */}
      <div
        id="spin-studio"
        className="max-w-[1440px] mx-auto px-4 sm:px-8 pb-12 lg:pb-16 scroll-mt-20"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#DDE0E4]">
          <div className="flex items-center gap-2 text-xs text-[#171717] font-medium">
            <RotateCw className="w-4 h-4" strokeWidth={1.5} />
            <span>معاينة 360° لأقوى المشاريع</span>
          </div>

          {featuredProjects.length > 1 && (
            <div className="flex items-center gap-2">
              {featuredProjects.map((proj, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'border-[#171717] bg-[#171717] text-[#F8F8F6]'
                        : 'border-[#DDE0E4] bg-white text-[#62666D] hover:text-[#171717] hover:border-[#62666D]'
                    }`}
                  >
                    {proj.title}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 360 Stage + Project Case Study Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            <SpinViewer360
              projectTitle={currentProject.title}
              frames={currentProject.turntableFrames || []}
              hotspots={currentProject.designHotspots || []}
              defaultImage={currentProject.gallery[0]}
            />
          </div>

          <aside className="lg:col-span-5 bg-white border border-[#DDE0E4] p-6 sm:p-8 flex flex-col gap-6">
            <div className="space-y-2 border-b border-[#DDE0E4] pb-5">
              <div className="flex items-center justify-between gap-4 text-xs text-[#62666D]">
                <span>
                  {currentProject.category} · {currentProject.subCategory}
                </span>
                <span className="font-mono-tabular text-[#171717]">
                  {currentProject.year}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                {currentProject.title}
              </h2>
              <p className="text-xs text-[#62666D]">
                دوري: {currentProject.role}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-[#171717]">
                الفكرة والمشكلة التي يحلها التصميم
              </h3>
              <p className="text-sm text-[#62666D] leading-relaxed">
                {currentProject.conceptAndProblem.concept}
              </p>
              <p className="text-xs text-[#62666D] leading-relaxed pt-1">
                {currentProject.conceptAndProblem.problemSolved}
              </p>
            </div>

            <div className="space-y-2 border-t border-[#DDE0E4] pt-5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#171717]">
                <Layers className="w-3.5 h-3.5" strokeWidth={1.6} />
                <span>الخامة والوزن</span>
              </div>
              <p className="text-xs text-[#62666D] leading-relaxed">
                {currentProject.materialsAndTech.materials} · {currentProject.materialsAndTech.weight}
              </p>
            </div>

            {/* Visual Color Palette Only (Non-Commercial) */}
            <div className="space-y-3 border-t border-[#DDE0E4] pt-5">
              <h3 className="text-xs font-semibold text-[#171717]">
                لوحة الألوان (عرض بصري)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {currentProject.colorPalette.map((swatch) => (
                  <div
                    key={swatch.hex + swatch.name}
                    className="border border-[#DDE0E4] bg-[#F8F8F6] p-2.5 flex items-center gap-2.5"
                  >
                    <span
                      className="w-6 h-6 shrink-0 border border-[#171717]/15"
                      style={{ backgroundColor: swatch.hex }}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium text-[#171717] truncate">
                        {swatch.name}
                      </div>
                      <div className="text-[10px] font-mono-tabular text-[#62666D]">
                        {swatch.hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenProject(currentProject, '360')}
                className="w-full py-3.5 px-5 bg-[#171717] text-[#F8F8F6] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#171717]/90 transition-colors"
              >
                <span>اطّلع على المشروع</span>
                <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
