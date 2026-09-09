import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const bootLines = [
  "checking dependencies ... ok",
  "loading profile: regina makena",
  "stack: react · node · solidity · python",
  "status: available for opportunities",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSkip(true);
      setVisibleLines(bootLines.length);
      setShowContent(true);
      return;
    }
    if (visibleLines < bootLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 220);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 pt-24 lg:pt-0 max-w-4xl"
    >
      {!skip && (
        <div
          className={`font-mono text-xs sm:text-sm text-muted space-y-1 mb-8 transition-opacity duration-500 ${
            showContent ? "opacity-0 h-0 overflow-hidden mb-0" : "opacity-100"
          }`}
          aria-hidden={showContent}
        >
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <p key={i}>
              <span className="text-accent">{">"}</span> {line}
            </p>
          ))}
        </div>
      )}

      <div
        className={`transition-all duration-700 ${
          showContent || skip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {/* <p className="font-mono text-xs text-amber mb-5 tracking-wide">
          available for opportunities
        </p> */}
        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-ink">
          Software engineer building things that hold up under real conditions.
        </h1>
        <p className="mt-6 text-inkSoft text-lg max-w-prose leading-relaxed">
          I'm Regina Makena — a full-stack developer working across web, blockchain,
          and systems diagnostics. BSc. Software Engineering, Murang'a
          University of Technology. Based in Nairobi, Kenya.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 font-mono text-sm hover:bg-accent transition-colors"
          >
            View projects
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm text-inkSoft hover:border-ink hover:text-ink transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
