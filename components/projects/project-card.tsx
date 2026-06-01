import Image from "next/image";

import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasCategories = project.category.length > 0;

  return (
    <div className="relative flex h-full w-full flex-col rounded-[18px] border border-[#e0e0e0] bg-white p-4">
      <div className="relative h-[132px] w-full flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f5f7] md:h-[148px]">
        {project.companyLogoImg && (
          <Image
            className="object-cover"
            src={project.companyLogoImg}
            alt={project.companyName}
            fill
          />
        )}
      </div>
      <div className="flex flex-grow flex-col space-y-2 pt-4">
        <h5 className="min-h-[22px] text-[18px] font-semibold leading-[1.19] tracking-[0.231px] text-[#1d1d1f]">
          {project.companyName || "\u00a0"}
        </h5>
        <p className="min-h-[54px] flex-grow text-[13px] font-normal leading-[1.35] tracking-normal text-[#333333]">
          {project.shortDescription || "\u00a0"}
        </p>
        <div className="min-h-[26px] flex flex-wrap gap-1.5">
          {hasCategories && <ChipContainer textArr={project.category} />}
        </div>
      </div>
    </div>
  );
}
