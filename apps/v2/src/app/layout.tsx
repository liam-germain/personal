import "@repo/ui/globals.css";
// import "tailwindcss/tailwind.css" // Ensure Tailwind is imported if not already
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from '../components/navbar';
import { ThemeProvider } from '../components/theme-provider';


// const inter = Inter({ subsets: ["latin"] });

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
    <html className="h-full" lang="en">
      <body className="flex flex-col h-full overflow-hidden">

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Navbar />
        <main className="flex-grow overflow-auto">
            {children}
          <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
