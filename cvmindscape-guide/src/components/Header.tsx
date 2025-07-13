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
    <header className="w-full bg-blue-900 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <Link href="/" className="text-xl font-semibold">CVMindscape</Link>
        <nav className="flex gap-6 text-sm sm:text-base font-medium items-center">
          <Link href="/theory" className="hover:underline">Theory</Link>
          <Link href="/practical" className="hover:underline">Practical</Link>
        </nav>
      </div>
    </header>
  );
}
