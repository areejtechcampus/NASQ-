import React from 'react';
import { ArrowLeft, RotateCw } from 'lucide-react';
import { DesignProject } from '../types/portfolio';
import { EditorialImage } from './EditorialImage';

interface ProjectCardProps {
  project: DesignProject;
  onOpenProject: (project: DesignProject, initialView?: '360' | 'gallery') => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenProject,
}) => {
  const coverImage = project.gallery[0] || '';

  return (
    <article className="group bg-white border border-[#DDE0E4] flex flex-col transition-colors duration-300 hover:border-[#171717]/40">
      {/* Wide Project Image */}
      <div
        onClick={() => onOpenProject(project, project.supports360 ? '360' : 'gallery')}
        className="relative w-full aspect-[16/11] bg-[#ECEEF0] overflow-hidden cursor-pointer"
      >
        <EditorialImage
          src={coverImage}
          alt={project.title}
          loading="eager"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {project.supports360 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenProject(project, '360');
            }}
            className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-[#171717]/90 text-[#F8F8F6] text-xs font-medium hover:bg-[#171717] transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5" strokeWidth={1.6} />
            <span>عرض 360°</span>
          </button>
        )}
      </div>

      {/* Project Card Content: Name, Category, Year */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-3 text-xs text-[#62666D]">
            <span>
              {project.category} · {project.subCategory}
            </span>
            <span className="font-mono-tabular text-[#171717] font-medium">
              {project.year}
            </span>
          </div>

          <h3
            onClick={() => onOpenProject(project, project.supports360 ? '360' : 'gallery')}
            className="font-display text-xl sm:text-2xl font-bold text-[#171717] cursor-pointer group-hover:text-[#62666D] transition-colors"
          >
            {project.title}
          </h3>

          <p className="text-sm text-[#62666D] leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-[#DDE0E4] flex items-center justify-between gap-4">
          <span className="text-xs text-[#62666D] truncate">
            {project.role}
          </span>

          <button
            type="button"
            onClick={() => onOpenProject(project, 'gallery')}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#62666D] transition-colors whitespace-nowrap shrink-0"
          >
            <span>اطّلع على المشروع</span>
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </article>
  );
};
