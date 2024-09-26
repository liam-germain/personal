import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Projects | Your Name',
  description: 'Explore my portfolio of projects and works.',
};

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-gray-700">
          Welcome to my projects page. Explore my latest works below.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="SimpliKeys"
          description="Enterprise Identity Access Management Monitoring Layer."
          link="/projects/simplikeys"
        />
        <ProjectCard
          title="4XP Collective"
          description="A partnership born in 233."
          link="/projects/4xp"
        />
        {/* Add more ProjectCard components as needed */}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Link href={link} className="block">
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-blue-600 hover:underline inline-flex items-center">
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default ProjectsPage;
