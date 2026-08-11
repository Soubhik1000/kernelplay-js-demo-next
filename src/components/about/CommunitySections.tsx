import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { SITE } from "@/lib/constants";

export function CreatorSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect rounded-2xl p-8 sm:p-12 border border-indigo-200 shadow-lg text-center">
          <div className="inline-block p-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-6">
            <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">Soubhik Mukherjee</h2>
          <p className="text-lg text-gray-600 mb-6">Creator &amp; Lead Developer</p>

          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            A passionate game developer and JavaScript enthusiast dedicated to making game
            development accessible to everyone. Building KernelPlay.js with love and coffee ☕
          </p>

          <a
            href="https://github.com/Soubhik1000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <GitHubIcon />
            <span>Follow on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const CONTRIBUTE_WAYS = [
  {
    title: "Code",
    description: "Submit PRs for bug fixes and new features",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Docs",
    description: "Help improve documentation and examples",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Feedback",
    description: "Share ideas and report issues",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    path: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  },
] as const;

export function ContributingSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect rounded-2xl p-8 sm:p-12 border border-indigo-200 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contributing</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            KernelPlay.js is open source and welcomes contributions from developers of all skill
            levels. Whether you want to fix bugs, add features, improve documentation, or share
            feedback, your input is valuable!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTRIBUTE_WAYS.map((way) => (
              <div key={way.title} className="p-6 rounded-xl bg-white border border-gray-200 text-center">
                <div className={`inline-block p-3 rounded-lg ${way.iconBg} mb-4`}>
                  <svg className={`w-8 h-8 ${way.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={way.path} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{way.title}</h3>
                <p className="text-sm text-gray-600">{way.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl transition-all"
            >
              <span>Start Contributing</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LicenseSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 mb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect rounded-2xl p-8 border border-indigo-200 shadow-lg text-center">
          <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">Open Source License</h2>
          <p className="text-gray-600 mb-6">
            KernelPlay.js is licensed under the MIT License, which means you&apos;re free to use
            it in personal and commercial projects.
          </p>

          <a
            href={SITE.licenseUrl}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Read Full License →
          </a>
        </div>
      </div>
    </section>
  );
}
