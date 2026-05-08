import type { Project } from "../../../types";
import ProjectStatusTab from "./ProjectStatusTab";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  projects: Project;
}

const ProjectCard = ({ projects }: ProjectCardProps) => {
  return (
    <div className="border-line bg-bg-1 group hover:border-line-bright relative m-6 border transition-colors duration-200">
      {/* Thumbnail */}
      <div className="border-line-bright h-40 w-full overflow-hidden border-b">
        {projects.thumbnailUrl ? (
          <img
            src={projects.thumbnailUrl}
            alt={projects.name}
            className="h-full w-full object-cover opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          />
        ) : (
          <div className="bg-bg-2 h-full w-full" />
        )}
      </div>

      {/* Top accent bar */}
      <div className="bg-bg-2 border-line-bright flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="bg-accent h-1.5 w-1.5" />
          <span className="text-ink-faint font-mono text-[10px] tracking-widest uppercase">
            {projects.featured ? "featured" : "project"}
          </span>
        </div>
        <ProjectStatusTab projectStatus={projects.status} />
      </div>

      {/* Main content */}
      <div className="p-6">
        {/* Title row */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 className="text-ink group-hover:text-accent font-serif text-2xl leading-tight transition-colors duration-200">
            {projects.name}
          </h2>

          {/* Links */}
          <div className="flex shrink-0 items-center gap-2 pt-1">
            {projects.githubUrl && (
              <a
                href={projects.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line hover:border-line-bright text-ink-faint hover:text-ink flex items-center gap-1 border px-2 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors duration-150"
              >
                <FiGithub size={11} />
                <span>UI</span>
              </a>
            )}
            {projects.githubUrlBackend && (
              <a
                href={projects.githubUrlBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line hover:border-line-bright text-ink-faint hover:text-ink flex items-center gap-1 border px-2 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors duration-150"
              >
                <FiGithub size={11} />
                <span>API</span>
              </a>
            )}
            {projects.livelinkUrl && (
              <a
                href={projects.livelinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 flex items-center gap-1 border px-2 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors duration-150"
              >
                <FiExternalLink size={11} />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-ink-dim mb-6 line-clamp-2 font-mono text-xs leading-relaxed">
          {projects.description}
        </p>

        {/* Divider */}
        <div className="border-line mb-4 border-t" />

        {/* Tech tags */}
        <ul className="flex flex-wrap gap-2">
          {projects.technologies.map((tech) => (
            <li
              key={tech.id}
              className="border-line text-ink-faint hover:border-line-bright hover:text-ink border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase transition-colors duration-150"
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom meta */}
      <div className="border-line flex items-center justify-between border-t px-6 py-2">
        <span className="text-ink-faint font-mono text-[10px]">
          {new Date(projects.createdAt).getFullYear()}
        </span>
        <span className="text-ink-faint font-mono text-[10px] tracking-widest uppercase">
          {projects.technologies.length} technologies
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
