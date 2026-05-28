export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-800 dark:bg-black dark:text-zinc-200">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">Last updated: May 28, 2026</p>

        <div className="mt-10 space-y-10 text-sm leading-7">
          {/* INTRODUCTION */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">1. Introduction</h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Welcome to CommitPulse ("we", "our", or "us"). We respect your privacy and are
              committed to protecting your personal information. This Privacy Policy explains how we
              collect, use, store, and protect your data when you use our platform, website, and
              related services.
            </p>
          </section>

          {/* INFORMATION COLLECTED */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              2. Information We Collect
            </h2>

            <div className="mt-3 space-y-4 text-zinc-600 dark:text-zinc-400">
              <div>
                <h3 className="font-medium text-black dark:text-white">a. Account Information</h3>

                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Name and username</li>
                  <li>Email address</li>
                  <li>GitHub profile information</li>
                  <li>Profile image and public repository data</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-black dark:text-white">b. Usage Information</h3>

                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Pages visited and actions performed</li>
                  <li>Session duration and interaction analytics</li>
                  <li>Feature usage and engagement metrics</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-black dark:text-white">c. Technical Information</h3>

                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Referral URLs and crash logs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* HOW INFORMATION IS USED */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              3. How We Use Your Information
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Provide and maintain CommitPulse services</li>
              <li>Authenticate users and secure accounts</li>
              <li>Improve platform functionality and user experience</li>
              <li>Analyze usage trends and platform performance</li>
              <li>Prevent abuse, fraud, and unauthorized access</li>
              <li>Communicate updates, announcements, or support messages</li>
            </ul>
          </section>

          {/* GITHUB DATA */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              4. GitHub Integration
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              CommitPulse may integrate with GitHub APIs to display repository, contribution, and
              profile-related information. We only access data that you authorize or that is already
              publicly available through GitHub.
            </p>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              CommitPulse is not affiliated with or endorsed by GitHub.
            </p>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              5. Cookies & Tracking Technologies
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              We may use cookies, local storage, and similar technologies to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Keep users signed in</li>
              <li>Remember preferences and settings</li>
              <li>Analyze website traffic and performance</li>
              <li>Improve overall user experience</li>
            </ul>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              You can disable cookies through your browser settings, although some features may not
              function properly.
            </p>
          </section>

          {/* DATA SHARING */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              6. Data Sharing & Third Parties
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              We do not sell your personal data. However, we may share limited information with
              trusted third-party providers for:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Hosting and infrastructure services</li>
              <li>Analytics and monitoring</li>
              <li>Authentication and security</li>
              <li>Error reporting and debugging</li>
            </ul>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              These providers only receive the minimum information necessary to perform their
              services.
            </p>
          </section>

          {/* DATA RETENTION */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">7. Data Retention</h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              We retain personal information only for as long as necessary to provide services,
              comply with legal obligations, resolve disputes, and enforce policies.
            </p>
          </section>

          {/* SECURITY */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">8. Data Security</h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              We implement industry-standard security measures to protect your data from
              unauthorized access, disclosure, alteration, or destruction. However, no online
              service can guarantee absolute security.
            </p>
          </section>

          {/* USER RIGHTS */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">9. Your Rights</h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Depending on your location and applicable laws, you may have the right to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent where applicable</li>
              <li>Request a copy of stored information</li>
            </ul>
          </section>

          {/* CHILDREN */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              10. Children's Privacy
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              CommitPulse is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          {/* INTERNATIONAL USERS */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              11. International Users
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              By using CommitPulse, you understand that your information may be processed and stored
              in countries where data protection laws may differ from your local jurisdiction.
            </p>
          </section>

          {/* CHANGES */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              12. Changes to This Privacy Policy
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              We may update this Privacy Policy periodically. Any changes will be posted on this
              page along with an updated revision date.
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">13. Contact Us</h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              If you have any questions regarding this Privacy Policy, you may contact us through
              the official CommitPulse GitHub repository or the creator profile linked in the
              footer.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
