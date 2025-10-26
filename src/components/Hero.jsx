import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full blur-3xl bg-indigo-500/20 dark:bg-indigo-600/20" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full blur-3xl bg-orange-400/20 dark:bg-orange-500/20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs text-gray-600 dark:text-gray-300 mb-4">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Live builder demo
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Build complete websites from a single prompt
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
              Pick a model. Describe your idea. Ship a site in minutes. Supports SambaNova and Longcat models with a professional chat workflow.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#builder" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500 transition">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#templates" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">
                <Download className="h-4 w-4" />
                Explore Templates
              </a>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              Models: DeepSeek, Llama, Qwen, GPT-OSS via SambaNova; plus Longcat chat.
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-orange-400/10" />
            <iframe
              title="Spline Hero Animation"
              className="absolute inset-0 h-full w-full"
              src="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </div>
      </div>

      <div id="builder" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 sm:p-6 bg-white/60 dark:bg-black/30 backdrop-blur">
          <div className="flex flex-col md:flex-row gap-4">
            <textarea
              placeholder="Describe your site: e.g. SaaS landing for an AI note-taking app…"
              className="flex-1 min-h-[120px] rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 p-3 outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <div className="w-full md:w-64 space-y-3">
              <select className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 p-2 text-sm">
                <option>SambaNova • Meta-Llama-3.3-70B-Instruct</option>
                <option>SambaNova • DeepSeek-V3.1</option>
                <option>SambaNova • DeepSeek-R1-0528</option>
                <option>SambaNova • Qwen3-32B</option>
                <option>Longcat • longcat-chat</option>
              </select>
              <button className="w-full rounded-md bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-orange-500 py-2 text-white font-medium shadow hover:brightness-110 transition">
                Generate
              </button>
              <button className="w-full rounded-md border border-black/10 dark:border-white/10 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">
                Regenerate Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
