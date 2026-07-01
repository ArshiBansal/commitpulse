'use client';

import Link from 'next/link';
import { useTranslation } from '@/context/TranslationContext';
import { useState } from 'react';
import {
  Home,
  Zap,
  GitCompare,
  Sliders,
  Users,
  MessageCircle,
  BookOpen,
<<<<<<< HEAD
  HelpCircle,
  Mail, // ← Added for newsletter
=======
  GitBranch,
  HelpCircle,
>>>>>>> upstream/main
} from 'lucide-react';
import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
  icon: string;
}

function LinkComponent({
  href,
  isExternal,
  children,
  className = '',
  ariaLabel,
}: {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const baseClasses = `group inline-block px-1 rounded transition-all duration-300 hover:-translate-y-[2px] hover:font-medium hover:text-teal-800 dark:hover:text-violet-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-950 ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        aria-label={ariaLabel}
      >
        <span className="relative inline-block">
          {children}
          <span className="absolute left-0 -bottom-px h-px w-0 bg-slate-500 dark:bg-slate-400 transition-all duration-500 ease-out group-hover:w-full" />
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses} aria-label={ariaLabel}>
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 -bottom-px h-px w-0 bg-slate-500 dark:bg-slate-400 transition-all duration-500 ease-out group-hover:w-full" />
      </span>
    </Link>
  );
}

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  github: <FaGithub size={15} className="shrink-0" />,
  creator: <FaGithub size={15} className="shrink-0" />,
  discord: <FaDiscord size={15} className="shrink-0" />,
  twitter: <FaXTwitter size={15} className="shrink-0" />,
  linkedin: <FaLinkedin size={15} className="shrink-0" />,
};

const NAV_ICON_MAP: Record<string, React.ReactNode> = {
  '/': <Home size={15} className="shrink-0" />,
  '/generator': <Zap size={15} className="shrink-0" />,
  '/compare': <GitCompare size={15} className="shrink-0" />,
  '/customize': <Sliders size={15} className="shrink-0" />,
  '/contributors': <Users size={15} className="shrink-0" />,
  '/support': <MessageCircle size={15} className="shrink-0" />,
};

const RESOURCE_ICON_MAP: Record<string, React.ReactNode> = {
  documentation: <BookOpen size={15} className="shrink-0" />,
  github_repo: <GitBranch size={15} className="shrink-0" />,
  guidelines: <BookOpen size={15} className="shrink-0" />,
  faq: <HelpCircle size={15} className="shrink-0" />,
};

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Newsletter state
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const navigationLinks: FooterLink[] = [
    { label: t('footer.home'), href: '/', isExternal: false },
    { label: t('footer.generator'), href: '/generator', isExternal: false },
    { label: t('footer.compare'), href: '/compare', isExternal: false },
    { label: t('footer.customization'), href: '/customize', isExternal: false },
    { label: t('footer.contributors'), href: '/contributors', isExternal: false },
    { label: t('footer.support'), href: '/support', isExternal: false },
  ];

  const resourceLinks: FooterLink[] = [
    {
      label: t('footer.documentation'),
      href: 'https://github.com/JhaSourav07/commitpulse/blob/main/README.md',
      isExternal: true,
    },
    {
      label: t('footer.github_repo'),
      href: 'https://github.com/JhaSourav07/commitpulse',
      isExternal: true,
    },
    {
      label: t('footer.guidelines'),
      href: 'https://github.com/JhaSourav07/commitpulse/blob/main/CODE_OF_CONDUCT.md',
      isExternal: true,
    },
    {
      label: t('footer.faq'),
<<<<<<< HEAD
      href: '/faq',
=======
      href: '/support',
>>>>>>> upstream/main
      isExternal: false,
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      label: t('footer.github'),
      href: 'https://github.com/JhaSourav07/commitpulse',
      ariaLabel: 'CommitPulse on GitHub',
      icon: 'github',
    },
    {
      label: t('footer.creator_github'),
      href: 'https://github.com/jhasourav07',
      ariaLabel: 'Creator Sourav Jha on GitHub',
      icon: 'creator',
    },
    {
      label: t('footer.discord'),
      href: 'https://discord.gg/f84SDraEBH',
      ariaLabel: 'Join CommitPulse on Discord',
      icon: 'discord',
    },
    {
      label: t('footer.twitter'),
      href: 'https://x.com/JhaSourav07',
      ariaLabel: 'Creator on X',
      icon: 'twitter',
    },
    {
      label: t('footer.linkedin'),
      href: 'https://linkedin.com/in/souravjhahind',
      ariaLabel: 'Creator on LinkedIn',
      icon: 'linkedin',
    },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({
        type: 'error',
        text: t('footer.newsletter.error.empty') || 'Please enter your email address.',
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({
        type: 'error',
        text: t('footer.newsletter.error.invalid') || 'Please enter a valid email address.',
      });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    // Simulate API call (replace with real backend integration later)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setMessage({
        type: 'success',
        text:
          t('footer.newsletter.success') || "Thank you! You've been subscribed to project updates.",
      });
      setEmail('');
    } catch (error) {
      setMessage({
        type: 'error',
        text: t('footer.newsletter.error.failed') || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="mt-auto border-t border-black/5 bg-white/50 px-4 py-8 backdrop-blur dark:border-white/5 dark:bg-zinc-950/50 sm:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-5 mb-6">
          {/* Brand Section */}
          <div className="flex flex-col items-start lg:col-span-1">
            <h2 className="font-bold text-lg text-black dark:text-white">CommitPulse</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t('footer.tagline')}</p>

            {/* Newsletter Section - Moved inside brand for better visual hierarchy on smaller screens */}
            <div className="mt-6 w-full lg:mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} className="text-teal-600 dark:text-violet-400" />
                <h3 className="font-semibold text-sm text-black dark:text-white">
                  {t('footer.newsletter.title') || 'Stay Updated'}
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                {t('footer.newsletter.description') ||
                  'Get project updates, new features, and release notes.'}
              </p>

              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.newsletter.placeholder') || 'your@email.com'}
                    className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 dark:focus:ring-violet-500 placeholder:text-zinc-400"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-teal-600 hover:bg-teal-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white text-sm font-medium px-4 rounded-r-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[88px]"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                    ) : (
                      t('footer.newsletter.subscribe') || 'Subscribe'
                    )}
                  </button>
                </div>
              </form>

              {message && (
                <p
                  className={`text-xs mt-2 ${message.type === 'success' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}
                >
                  {message.text}
                </p>
              )}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-sm text-black dark:text-white mb-3">
              {t('footer.navigation')}
            </h3>
            <nav className="flex flex-col gap-2 text-center sm:text-left">
              {navigationLinks.map((link) => (
                <LinkComponent
                  key={link.href}
                  href={link.href}
                  isExternal={link.isExternal}
                  className="text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2">
                    {NAV_ICON_MAP[link.href as keyof typeof NAV_ICON_MAP]}
                    {link.label}
                  </span>
                </LinkComponent>
              ))}
            </nav>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-sm text-black dark:text-white mb-3">
              {t('footer.resources')}
            </h3>
            <nav className="flex flex-col gap-2 text-center sm:text-left">
              {resourceLinks.map((link) => {
                let iconKey: keyof typeof RESOURCE_ICON_MAP = 'github_repo';
                if (link.href.includes('README')) iconKey = 'documentation';
                else if (link.href.includes('CODE_OF_CONDUCT') || link.href.includes('guidelines'))
                  iconKey = 'guidelines';
                else if (link.href.includes('support') || link.href.includes('faq'))
                  iconKey = 'faq';

                return (
                  <LinkComponent
                    key={link.href}
                    href={link.href}
                    isExternal={link.isExternal}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="flex items-center gap-2">
                      {RESOURCE_ICON_MAP[iconKey]}
                      {link.label}
                    </span>
                  </LinkComponent>
                );
              })}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col items-center sm:items-start lg:col-span-2">
            <h3 className="font-semibold text-sm text-black dark:text-white mb-3">
              {t('footer.connect')}
            </h3>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              {socialLinks.map((link) => (
                <LinkComponent
                  key={link.href}
                  href={link.href}
                  isExternal
                  ariaLabel={link.ariaLabel}
                  className="text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2">
                    {SOCIAL_ICON_MAP[link.icon as keyof typeof SOCIAL_ICON_MAP]}
                    {link.label}
                  </span>
                </LinkComponent>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/5 dark:border-white/5" />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          <p>{t('footer.copyright', { year: currentYear.toString() })}</p>
          <p>{t('footer.made_with')}</p>
        </div>
      </div>
    </footer>
  );
}
