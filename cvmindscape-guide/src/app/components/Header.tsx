'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <div className="text-xl font-semibold">CVMindscape</div>
        <nav className="flex gap-6 text-sm sm:text-base font-medium items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/theory" className="hover:underline">Theory</Link>
          <Link href="/practical" className="hover:underline">Practical</Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2 px-2 py-1 border rounded bg-white text-blue-600 dark:bg-neutral-800 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
          >
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}
