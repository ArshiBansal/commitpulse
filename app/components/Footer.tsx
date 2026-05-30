import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-14 border-t border-black/15 dark:border-white/10 bg-transparent pt-10 pb-24 md:pb-6 text-sm transition-colors">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center  justify-between gap-8 px-6 md:flex-row md:items-start md:text-left">
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-black dark:text-white">CommitPulse</span>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Designed for the elite builder community.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-start gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href="/contributors"
            className="transition-colors duration-200 hover:text-black dark:hover:text-white"
          >
            Contributors
          </Link>
          <a
            href="https://github.com/JhaSourav07/commitpulse/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-black dark:hover:text-white"
          >
            Documentation
          </a>
          <a
            href="https://github.com/jhasourav07"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-black dark:hover:text-white"
          >
            Creator
          </a>

          {/* NEW PRIVACY POLICY LINK */}
          <Link
            href="/components/privacy-policy"
            className="transition-colors duration-200 hover:text-black dark:hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-6 border-t border-black/5 pt-3 text-center text-xs text-zinc-400 dark:border-white/5 dark:text-white/60">
        © 2026 CommitPulse. All rights reserved.
      </div>
    </footer>
  );
}
