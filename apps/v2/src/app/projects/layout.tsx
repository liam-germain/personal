'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation'; // Import usePathname

const projects = [
  { name: 'Simplikeys', href: '/projects/simplikeys' },
  { name: '4XP Collective', href: '/projects/4xp' },
  { name: 'Red Lodge Mountain', href: '/projects/red-lodge-mountain' },
  { name: 'Locol', href: '/projects/locol' },
  // Add more projects here
];

function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname(); // Get current path
  const isHome = pathname === '/projects'; // Check if on home page

  return (
    <div className="flex h-screen">
     {!isHome && ( // Render sidebar only if not on home page
        <aside
          className={`bg-gray-50 transition-all duration-300 ease-in-out ${
            isCollapsed ? 'w-16' : 'w-64'
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <Link href="/projects">
              {!isCollapsed && <h2 className="text-lg font-semibold">Projects</h2>}
            </Link>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </button>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.href}>
                  <Link
                    href={project.href}
                    className={`block px-4 py-2 hover:bg-gray-200 ${
                      isCollapsed ? 'text-center' : ''
                    }`}
                  >
                    {isCollapsed ? project.name[0] : project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
     )}
      <main className="flex-1 p-4 overflow-auto">{children}</main>
    </div>
  );
}

export default ProjectsLayout;