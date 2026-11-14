import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Compass,
  Images,
  Layers,
  Palette,
  RotateCw,
  Sparkles,
} from 'lucide-react';
import { DesignHotspot, DesignProject } from '../types/portfolio';
import { EditorialImage } from './EditorialImage';
import { ProjectCard } from './ProjectCard';
import { SpinViewer360 } from './SpinViewer360';

interface CaseStudyViewProps {
  project: DesignProject;
  initialViewMode?: '360' | 'gallery';
  relatedProjects: DesignProject[];
  onBack: () => void;
  onOpenProject: (project: DesignProject, initialView?: '360' | 'gallery') => void;
  onNavigateContact: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  initialViewMode = '360',
  relatedProjects,
  onBack,
  onOpenProject,
  onNavigateContact,
}) => {
  const [viewMode, setViewMode] = useState<'360' | 'gallery'>(
    project.supports360 && initialViewMode === '360' ? '360' : 'gallery'
  );
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [focusedAngle, setFocusedAngle] = useState<number | null>(null);

  useEffect(() => {
    setViewMode(project.supports360 && initialViewMode === '360' ? '360' : 'gallery');
    setSelectedGalleryIndex(0);
    setFocusedAngle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id, project.supports360, initialViewMode]);

  const handleInspectHotspot = (spot: DesignHotspot) => {
    setViewMode('360');
    const mid =
      spot.minAngle <= spot.maxAngle
        ? Math.round((spot.minAngle + spot.maxAngle) / 2)
        : Math.round(((spot.minAngle + spot.maxAngle + 360) / 2) % 360);
    setFocusedAngle(mid);
    const stageEl = document.getElementById('case-study-stage');
    stageEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const activeImage = project.gallery[selectedGalleryIndex] || project.gallery[0] || '';

  return (
    <main className="flex-1 bg-[#F8F8F6] text-[#171717]">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#DDE0E4] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-[#171717] hover:text-[#62666D] transition-colors whitespace-nowrap shrink-0"
          >
            <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
            <span>العودة إلى الأعمال</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#62666D] truncate">
            <span>الأعمال</span>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#171717] font-medium truncate">
              {project.title}
            </span>
          </div>
        </div>
      </div>

      {/* Case Study Header */}
      <section className="border-b border-[#DDE0E4]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#62666D]">
                <span>الفئة: {project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.subCategory}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular text-[#171717] font-medium">
                  {project.year}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#171717] leading-tight">
                {project.title}
              </h1>

              <p className="text-base text-[#62666D] leading-relaxed max-w-2xl">
                {project.summary}
              </p>
            </div>

            <div className="lg:col-span-4 border border-[#DDE0E4] bg-white p-5 space-y-3">
              <div>
                <div className="text-[11px] font-medium text-[#62666D] mb-1">
                  دوري في المشروع
                </div>
                <div className="text-sm font-medium text-[#171717]">
                  {project.role}
                </div>
              </div>
              <div className="pt-3 border-t border-[#DDE0E4] flex items-center justify-between text-xs">
                <span className="text-[#62666D]">السنة</span>
                <span className="font-mono-tabular font-semibold text-[#171717]">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Presentation Stage (360° Decision Study + Static Gallery) */}
      <section id="case-study-stage" className="border-b border-[#DDE0E4] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <h2 className="font-display text-xl font-bold text-[#171717]">
                توثيق المشروع والقرارات التصميمية
              </h2>
              <p className="text-xs text-[#62666D]">
                {project.supports360
                  ? 'يمكنك التبديل بين العرض التفاعلي 360° لاستكشاف القرارات التصميمية على القطعة، أو استعراض صور المشروع.'
                  : 'توثيق فوتوغرافي يوضح بنية القطعة النهائية ونوع السطح.'}
              </p>
            </div>

            {project.supports360 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode('360')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                    viewMode === '360'
                      ? 'border-[#171717] bg-[#171717] text-[#F8F8F6]'
                      : 'border-[#DDE0E4] bg-[#F8F8F6] text-[#171717] hover:border-[#62666D]'
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5" strokeWidth={1.6} />
                  <span>عرض 360°</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('gallery')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                    viewMode === 'gallery'
                      ? 'border-[#171717] bg-[#171717] text-[#F8F8F6]'
                      : 'border-[#DDE0E4] bg-[#F8F8F6] text-[#171717] hover:border-[#62666D]'
                  }`}
                >
                  <Images className="w-3.5 h-3.5" strokeWidth={1.6} />
                  <span>صور المشروع</span>
                </button>
              </div>
            )}
          </div>

          {viewMode === '360' && project.supports360 && project.turntableFrames ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <SpinViewer360
                  projectTitle={project.title}
                  frames={project.turntableFrames}
                  hotspots={project.designHotspots || []}
                  defaultImage={project.gallery[0]}
                  externalAngle={focusedAngle}
                />
              </div>

              {/* Design Decisions Hotspots Index */}
              <div className="lg:col-span-4 space-y-3">
                <div className="pb-2 border-b border-[#DDE0E4]">
                  <h3 className="text-sm font-semibold text-[#171717]">
                    القرارات التصميمية على نموذج 360°
                  </h3>
                  <p className="text-xs text-[#62666D] mt-1">
                    اختر أي قرار لتوجيه زاوية العرض 360° مباشرة إلى موضعه.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {(project.designHotspots || []).map((spot, idx) => (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => handleInspectHotspot(spot)}
                      className="w-full text-right p-4 border border-[#DDE0E4] bg-[#F8F8F6] hover:border-[#171717] transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-[#171717]">
                          {spot.title}
                        </span>
                        <span className="text-[11px] font-mono-tabular text-[#62666D]">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-[#62666D] leading-relaxed">
                        {spot.detail}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-9 aspect-[16/11] bg-[#ECEEF0] border border-[#DDE0E4] overflow-hidden">
                <EditorialImage
                  src={activeImage}
                  alt={project.title}
                  loading="eager"
                  className="object-contain bg-[#ECEEF0]"
                />
              </div>

              {project.gallery.length > 1 && (
                <div className="lg:col-span-3 grid grid-cols-4 lg:grid-cols-2 gap-3">
                  {project.gallery.map((imgSrc, idx) => (
                    <button
                      key={imgSrc + idx}
                      type="button"
                      onClick={() => setSelectedGalleryIndex(idx)}
                      aria-label={`عرض الصورة رقم ${idx + 1}`}
                      className={`aspect-[3/4] border overflow-hidden bg-[#ECEEF0] transition-colors ${
                        selectedGalleryIndex === idx
                          ? 'border-[#171717] ring-1 ring-[#171717]'
                          : 'border-[#DDE0E4] hover:border-[#62666D]'
                      }`}
                    >
                      <EditorialImage
                        src={imgSrc}
                        alt={`${project.title} - صورة ${idx + 1}`}
                        loading="eager"
                        className="object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Concept & Problem Solved */}
      <section className="border-b border-[#DDE0E4]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white border border-[#DDE0E4] p-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#62666D]">
                <Compass className="w-4 h-4 text-[#171717]" strokeWidth={1.6} />
                <span>الفكرة التصميمية</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#171717]">
                نقطة الانطلاق
              </h2>
              <p className="text-sm text-[#62666D] leading-relaxed">
                {project.conceptAndProblem.concept}
              </p>
            </div>

            <div className="bg-white border border-[#DDE0E4] p-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#62666D]">
                <Sparkles className="w-4 h-4 text-[#171717]" strokeWidth={1.6} />
                <span>المشكلة التي يحلها التصميم</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#171717]">
                المعالجة الهندسية
              </h2>
              <p className="text-sm text-[#62666D] leading-relaxed">
                {project.conceptAndProblem.problemSolved}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration & 4 Stages: Sketch, Pattern, Sample, Final Result */}
      <section className="border-b border-[#DDE0E4] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 lg:py-16 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-medium text-[#62666D]">
              الإلهام ومراحل التصميم
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171717]">
              من السكتش إلى النتيجة النهائية
            </h2>
            <p className="text-sm sm:text-base text-[#62666D] leading-relaxed">
              {project.inspiration}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stages.map((stage) => (
              <div
                key={stage.step}
                className="border border-[#DDE0E4] bg-[#F8F8F6] p-6 space-y-3"
              >
                <span className="block font-mono-tabular text-xs font-semibold text-[#62666D]">
                  {stage.step}
                </span>
                <h3 className="font-display text-lg font-bold text-[#171717]">
                  {stage.title}
                </h3>
                <p className="text-sm text-[#62666D] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Techniques (Weight, Lining, Details) + Visual Color Palette */}
      <section className="border-b border-[#DDE0E4]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 bg-white border border-[#DDE0E4] p-7 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#62666D]">
                <Layers className="w-4 h-4 text-[#171717]" strokeWidth={1.6} />
                <span>الخامات والتقنيات</span>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#171717]">
                وزن القماش، التبطين، والتفاصيل
              </h2>

              <p className="text-sm text-[#62666D] leading-relaxed">
                {project.materialsAndTech.materials}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#DDE0E4] bg-[#F8F8F6] p-4 space-y-1">
                  <div className="text-[11px] font-medium text-[#62666D]">
                    وزن القماش / السماكة
                  </div>
                  <div className="text-xs font-semibold text-[#171717]">
                    {project.materialsAndTech.weight}
                  </div>
                </div>
                <div className="border border-[#DDE0E4] bg-[#F8F8F6] p-4 space-y-1">
                  <div className="text-[11px] font-medium text-[#62666D]">
                    نوع التبطين / البناء الداخلي
                  </div>
                  <div className="text-xs font-semibold text-[#171717]">
                    {project.materialsAndTech.lining}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 pt-2 border-t border-[#DDE0E4]">
                {project.materialsAndTech.techniques.map((tech, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-[#171717]"
                  >
                    <span className="font-mono-tabular text-xs text-[#62666D] pt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Color Palette Only (Not a Purchase Selector) */}
            <div className="lg:col-span-5 bg-white border border-[#DDE0E4] p-7 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#62666D]">
                <Palette className="w-4 h-4 text-[#171717]" strokeWidth={1.6} />
                <span>لوحة الألوان</span>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#171717]">
                الدراسة اللونية للمشروع
              </h2>

              <p className="text-xs text-[#62666D] leading-relaxed">
                عرض بصري للدرجات اللونية المعتمدة في هذا التصميم وسبب اختيار كل درجة، وليست خيارات تجارية.
              </p>

              <div className="space-y-3 pt-2">
                {project.colorPalette.map((swatch) => (
                  <div
                    key={swatch.hex + swatch.name}
                    className="flex items-start gap-3.5 p-3.5 border border-[#DDE0E4] bg-[#F8F8F6]"
                  >
                    <span
                      className="w-10 h-10 shrink-0 border border-[#171717]/15"
                      style={{ backgroundColor: swatch.hex }}
                      aria-hidden="true"
                    />
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#171717]">
                          {swatch.name}
                        </span>
                        <span className="text-xs font-mono-tabular text-[#62666D]">
                          {swatch.hex}
                        </span>
                      </div>
                      <p className="text-xs text-[#62666D] leading-relaxed">
                        {swatch.rationale}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects at the Bottom */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 lg:py-16 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DDE0E4]">
            <div>
              <p className="text-xs text-[#62666D] mb-1">استكشف المزيد</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                مشاريع أخرى
              </h2>
            </div>

            <button
              type="button"
              onClick={onNavigateContact}
              className="px-5 py-2.5 bg-[#171717] text-[#F8F8F6] text-xs font-semibold hover:bg-[#171717]/90 transition-colors whitespace-nowrap shrink-0"
            >
              هل لديك مشروع مماثل؟ لنعمل معاً
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.slice(0, 2).map((rel) => (
              <ProjectCard
                key={rel.id}
                project={rel}
                onOpenProject={onOpenProject}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
