import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      className="group block border-t border-line py-7 first:border-t-0 sm:first:border-t sm:first:pt-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
        <div className="flex items-baseline gap-3 sm:w-40 shrink-0">
          <span className="font-mono text-[11px] text-muted">#{project.id}</span>
          <span className="font-mono text-[11px] text-accent">{project.status}</span>
        </div>

        <div className="flex-1 mt-2 sm:mt-0">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-medium text-xl text-ink group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
            />
          </div>
          <p className="text-inkSoft mt-2 max-w-prose leading-relaxed">{project.blurb}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] text-muted border border-line px-2 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <span className="hidden sm:block font-mono text-[11px] text-muted w-12 text-right shrink-0">
          {project.year}
        </span>
      </div>
    </a>
  );
}
