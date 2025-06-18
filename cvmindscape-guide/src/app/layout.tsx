import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header"; // this component is client-side

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header /> {/* this stays client-side */}
          <main className="flex-grow px-6 py-4">{children}</main>
          <footer className="w-full py-4 px-6 bg-gray-100 text-center text-sm text-gray-600 dark:bg-neutral-900 dark:text-neutral-400">
            © {new Date().getFullYear()} CVMindscape. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
