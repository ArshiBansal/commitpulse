import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-white/50 px-6 py-8 backdrop-blur dark:border-white/5 dark:bg-zinc-950/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm md:flex-row md:items-start md:gap-0">
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-black dark:text-white">CommitPulse</span>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Designed for the elite builder community.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap justify-center flex-col items-center gap-5">
          {/* NAV LINKS */}
          <div className="flex flex-wrap items-center gap-6 font-medium text-zinc-600 dark:text-zinc-400">
            <Link
              href="/contributors"
              className="transition-colors duration-200 hover:text-black dark:hover:text-white"
            >
              Contributors
            </Link>
            <a
              href="https://github.com/JhaSourav07/commitpulse/blob/main/README.md"
              target="_blank"
              rel="noopener noopener noreferrer"
              className="transition-colors duration-200 hover:text-black dark:hover:text-white"
            >
              Documentation
            </a>
            <a
              href="https://github.com/jhasourav07"
              target="_blank"
              rel="noopener noopener noreferrer"
              className="transition-colors duration-200 hover:text-black dark:hover:text-white"
            >
              Creator
            </a>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/jhasourav07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 transition-all duration-200 hover:-translate-y-1 hover:text-black dark:hover:text-white"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition-all duration-200 hover:-translate-y-1 hover:text-black dark:hover:text-white"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="rounded-full p-2 transition-all duration-200 hover:-translate-y-1 hover:text-black dark:hover:text-white"
            >
              <Twitter size={18} />
            </a>

            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="rounded-full p-2 transition-all duration-200 hover:-translate-y-1 hover:text-black dark:hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-6 border-t border-black/5 pt-3 text-center text-xs text-zinc-400 dark:border-white/5 dark:text-white/60">
        © 2026 CommitPulse. All rights reserved.
      </div>
    </footer>
  );
}
