import { stack } from "../data/projects";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-12 py-28 border-t border-line max-w-4xl">
      <div className="grid sm:grid-cols-[100px_1fr] gap-6 sm:gap-10">
        <p className="font-mono text-xs text-muted pt-1">01 / about</p>
        <div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-6">
            From boot logs to blockchains
          </h2>
          <div className="text-inkSoft leading-relaxed space-y-4 max-w-prose">
            <p>
              I hold a BSc. in Software Engineering from Murang'a University
              of Technology, and I've spent the years since building across a
              wider range than most — REST APIs and React frontends,
              Solidity smart contracts, and hands-on systems diagnostics.
            </p>
            <p>
              I care about the parts of engineering that don't show up in a
              demo: clean commit history, a codebase someone else can pick
              up, and understanding a system well enough to know exactly
              where it broke. That shows up in how I work — leading an AI
              hackathon team under deadline, organizing events as Project
              Management Club secretary, and documenting my own debugging
              process instead of hiding it.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs text-muted mb-4">stack</p>
            <div className="space-y-3">
              {Object.entries(stack).map(([group, items]) => (
                <div key={group} className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <span className="font-mono text-xs text-muted w-32 shrink-0">
                    {group}
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs text-inkSoft border border-line px-2 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
