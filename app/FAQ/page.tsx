'use client';

import { useState } from 'react';
import { useTranslation } from '@/context/TranslationContext';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglefaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: t('faq.q1') || 'What is CommitPulse?',
      answer:
        t('faq.a1') ||
        'CommitPulse is an intelligent AI-powered commit message generator that helps developers write clear, consistent, and professional commit messages following conventional commit standards.',
    },
    {
      question: t('faq.q2') || 'How does CommitPulse work?',
      answer:
        t('faq.a2') ||
        'Simply paste your code changes or describe what you did, and our AI will generate multiple high-quality commit message options for you instantly.',
    },
    {
      question: t('faq.q3') || 'Is CommitPulse free to use?',
      answer:
        t('faq.a3') ||
        'Yes! CommitPulse is completely free for personal and commercial use. We also offer optional premium features for power users in the future.',
    },
    {
      question: t('faq.q4') || 'What commit conventions does it support?',
      answer:
        t('faq.a4') ||
        'We primarily follow the Conventional Commits specification (feat, fix, docs, style, refactor, perf, test, build, ci, chore, etc.) and also support Angular, Semantic Versioning, and Gitmoji conventions.',
    },
    {
      question: t('faq.q5') || 'Can I customize the generated messages?',
      answer:
        t('faq.a5') ||
        'Absolutely! Go to the Customization page to set your preferred commit style, tone, emoji usage, length preferences, and more.',
    },
    {
      question: t('faq.q6') || 'Does it support multiple languages?',
      answer:
        t('faq.a6') ||
        'Yes. CommitPulse supports commit messages in many languages including English, Spanish, French, German, Hindi, Portuguese, Chinese, and more.',
    },
    {
      question: t('faq.q7') || 'How accurate is the AI?',
      answer:
        t('faq.a7') ||
        'Our AI is trained specifically on thousands of high-quality commits from popular open-source repositories. It produces context-aware, professional messages with very high accuracy.',
    },
    {
      question: t('faq.q8') || 'Can I use CommitPulse with VS Code?',
      answer:
        t('faq.a8') ||
        'Yes! We provide a VS Code extension that brings CommitPulse directly into your editor. You can also copy messages and use them anywhere.',
    },
    {
      question: t('faq.q9') || 'Is my code/data private?',
      answer:
        t('faq.a9') ||
        'Yes. We do not store your code or commit messages. Everything is processed securely and deleted immediately after generation.',
    },
    {
      question: t('faq.q10') || 'How can I contribute to the project?',
      answer:
        t('faq.a10') ||
        'We welcome contributions! Check out our GitHub repository for issues, feature requests, and contribution guidelines.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            {t('faq.title') || 'Frequently Asked Questions'}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            {t('faq.subtitle') || 'Everything you need to know about CommitPulse'}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-lg text-black dark:text-white pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-violet-400 transition-colors">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="px-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-10">
          <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
            {t('faq.still_question') || 'Still have questions?'}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {t('faq.contact_us') || 'Our team is happy to help you.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/JhaSourav07/commitpulse/issues"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:scale-105 transition-transform"
            >
              Open GitHub Issue
            </Link>

            <a
              href="https://discord.gg/Cb73bS79j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-xl transition-all"
            >
              Join Discord Community
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-teal-600 dark:text-violet-400 hover:underline inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
