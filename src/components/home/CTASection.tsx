import Link from "next/link";
import { SITE } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Build Your Game?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join developers creating amazing games with KernelPlay.js
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/docs"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Read Documentation
          </Link>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent text-white font-semibold text-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
