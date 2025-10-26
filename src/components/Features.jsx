import React from 'react';
import { Palette, FileCode, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Theme Intelligence',
    desc: 'Generate palettes and type scales. One-click apply across your project.'
  },
  {
    icon: FileCode,
    title: 'Production Exports',
    desc: 'Download a Vite + React + Tailwind scaffold with routed pages and components.'
  },
  {
    icon: Zap,
    title: 'Fast Iteration',
    desc: 'Streamed generations, section-level refine, and quick presets for common sites.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Keys',
    desc: 'Server-proxied provider calls. Keys never shipped to the client bundle.'
  }
];

const Features = () => {
  return (
    <section className="py-14" id="templates">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to build fast</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
            A professional builder and chat assistant that transforms your prompt into a complete, multi-page website.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/30 backdrop-blur">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 p-[2px] mb-3">
                <div className="h-full w-full rounded-[6px] bg-white dark:bg-black grid place-items-center">
                  <f.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-black/30">
            <div className="text-xs uppercase tracking-wider text-gray-500">Free</div>
            <div className="mt-2 text-3xl font-semibold">$0</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• 3 generations/day</li>
              <li>• Watermark on export</li>
              <li>• Basic templates</li>
            </ul>
            <button className="mt-6 w-full rounded-md border border-black/10 dark:border-white/10 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Start</button>
          </div>

          <div className="rounded-xl border-2 border-indigo-500/50 p-6 bg-gradient-to-b from-indigo-500/5 to-transparent">
            <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Pro</div>
            <div className="mt-2 text-3xl font-semibold">$19<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Unlimited generations</li>
              <li>• No watermark</li>
              <li>• Advanced templates</li>
            </ul>
            <button className="mt-6 w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-500 transition">Upgrade</button>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-black/30">
            <div className="text-xs uppercase tracking-wider text-gray-500">Enterprise</div>
            <div className="mt-2 text-3xl font-semibold">Custom</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Custom models</li>
              <li>• Audit logs & SSO</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-6 w-full rounded-md border border-black/10 dark:border-white/10 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
