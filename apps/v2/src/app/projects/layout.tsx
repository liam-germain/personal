import Link from 'next/link';

function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <aside className="w-1/4 bg-gray-100 p-4">
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/projects/project1">Project 1</Link>
                        </li>
                        <li>
                            <Link href="/projects/project2">Project 2</Link>
                        </li>
                        {/* Add more project links here */}
                    </ul>
                </nav>
            </aside>
            <main className="w-3/4 p-4">
                {children}
            </main>
        </div>
    );
}

export default ProjectsLayout;