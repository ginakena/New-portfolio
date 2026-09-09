import { projects } from "../data/projects";
import ProjectCard from "./projectscard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-12 py-28 border-t border-line max-w-4xl">
      <div className="grid sm:grid-cols-[100px_1fr] gap-6 sm:gap-10">
        <p className="font-mono text-xs text-muted pt-1">SELECTED PROJECTS</p>
        <div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-2">
            Selected work
          </h2>
          <p className="text-muted mb-4 max-w-prose">
            Six projects spanning blockchain, data, and infrastructure —
            each linked straight to its repo.
          </p>
          <div>
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
