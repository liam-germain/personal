import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liam Germain's Personal Site",
  description: "My personal site that I use to share my projects and ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col h-full overflow-hidden`}>
        <nav className="py-4 bg-gray-100 dark:bg-gray-800">
          <ul className="flex justify-center space-x-6">
            <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="/writings" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Writings</a></li>
            <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
        <main className="flex-grow overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
