import React from 'react';
import { Rocket, Bot } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 p-[2px]">
            <div className="h-full w-full rounded-[6px] bg-white dark:bg-black grid place-items-center">
              <Rocket className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <span className="font-semibold tracking-tight">PromptSite</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#builder" className="hover:text-indigo-600 dark:hover:text-indigo-400">Builder</a>
          <a href="#templates" className="hover:text-indigo-600 dark:hover:text-indigo-400">Templates</a>
          <a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400">Pricing</a>
          <a href="#docs" className="hover:text-indigo-600 dark:hover:text-indigo-400">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition">
            <Bot className="h-4 w-4" />
            Chat
          </button>
          <button className="inline-flex h-9 items-center rounded-md bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-orange-500 px-4 text-sm font-medium text-white shadow-sm hover:brightness-110 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
