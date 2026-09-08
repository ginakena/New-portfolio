import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur border-b border-line flex items-center justify-between px-5 h-14">
        <a href="#hero" className="font-mono text-sm text-ink">
          RM<span className="text-accent">.</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="font-mono text-xs border border-line px-3 py-1.5 text-inkSoft"
        >
          {open ? "close" : "menu"}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-paper border-b border-line px-5 py-4 flex flex-col gap-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-inkSoft py-1"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col justify-between fixed left-0 top-0 h-screen w-64 border-r border-line px-8 py-10 z-30">
        <div>
          <a href="#hero" className="font-display font-semibold text-lg text-ink">
            Regina Makena
          </a>
          <p className="font-mono text-xs text-muted mt-1">software engineer</p>

          <nav className="mt-14 flex flex-col gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-3 py-2 font-mono text-sm text-inkSoft hover:text-ink transition-colors"
              >
                <span
                  className={`h-px transition-all ${
                    active === s.id ? "w-6 bg-accent" : "w-3 bg-line group-hover:bg-inkSoft"
                  }`}
                />
                <span className={active === s.id ? "text-ink" : ""}>{s.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 text-inkSoft">
            <a
              href="https://github.com/ginakena"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/regina-makena-a12731267"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:makenareginam@gmail.com"
              aria-label="Email"
              className="hover:text-accent transition-colors"
            >
              <Mail size={18} strokeWidth={1.6} />
            </a>
          </div>
          <p className="font-mono text-[11px] text-muted leading-relaxed">
            Nairobi, Kenya
            <br />
            available for work
          </p>
        </div>
      </aside>
    </>
  );
}
