import { experience } from "../data/projects";

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-12 py-28 border-t border-line max-w-4xl">
      <div className="grid sm:grid-cols-[100px_1fr] gap-6 sm:gap-10">
        <p className="font-mono text-xs text-muted pt-1">MY EXPERIENCE</p>
        <div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((e, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="font-mono text-[11px] text-muted sm:w-36 shrink-0 pt-1">
                  {e.period}
                </span>
                <div>
                  <h3 className="font-display font-medium text-lg text-ink">
                    {e.role}
                  </h3>
                  <p className="font-mono text-xs text-accent mt-1">{e.org}</p>
                  <p className="text-inkSoft mt-2 max-w-prose leading-relaxed">
                    {e.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
