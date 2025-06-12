import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CVMindscape",
  description: "Computer Vision Learning Guide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header */}
        <header className="w-full py-4 px-6 bg-blue-600 text-white text-xl font-semibold shadow-md">
          CVMindscape
        </header>

        {/* Main Content */}
        <main className="flex-grow px-6 py-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-4 px-6 bg-gray-100 text-center text-sm text-gray-600 dark:bg-neutral-900 dark:text-neutral-400">
          © {new Date().getFullYear()} CVMindscape. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
