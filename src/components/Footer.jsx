import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-14 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} PromptSite. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#docs" className="hover:text-indigo-600 dark:hover:text-indigo-400">Docs</a>
            <a href="#support" className="hover:text-indigo-600 dark:hover:text-indigo-400">Support</a>
            <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy</a>
            <a href="#terms" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
