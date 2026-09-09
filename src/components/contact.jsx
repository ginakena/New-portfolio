import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-12 py-28 border-t border-line max-w-4xl">
      <div className="grid sm:grid-cols-[100px_1fr] gap-6 sm:gap-10">
        <p className="font-mono text-xs text-muted pt-1">GET IN TOUCH</p>
        <div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-5 max-w-md leading-tight">
            Open to opportunities and collaborations.
          </h2>
          <p className="text-inkSoft max-w-prose leading-relaxed mb-8">
            If you're building something and think I'd be useful on the
            team, or just want to talk through a technical problem — reach
            out.
          </p>

          <a
            href="mailto:makenareginam@gmail.com"
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 font-mono text-sm hover:bg-accent transition-colors"
          >
            makenareginam@gmail.com
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>

          <div className="flex items-center gap-5 mt-10 text-inkSoft">
            <a
              href="https://github.com/ginakena"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs hover:text-accent transition-colors"
            >
              <GithubIcon size={16} /> github
            </a>
            <a
              href="https://www.linkedin.com/in/regina-makena-a12731267"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs hover:text-accent transition-colors"
            >
              <LinkedinIcon size={16} /> linkedin
            </a>
            <a
              href="tel:+254742575643"
              className="flex items-center gap-2 font-mono text-xs hover:text-accent transition-colors"
            >
              <Mail size={16} strokeWidth={1.6} /> +254 742 575 643
            </a>
          </div>
        </div>
      </div>

      <p className="font-mono text-[11px] text-muted mt-24 pt-6 border-t border-line">
        © 2026 Regina Makena. Built with Love.
      </p>
    </section>
  );
}
