import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Projects | Your Name',
  description: 'Explore my portfolio of projects and works.',
};

function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <p className="text-lg text-gray-700">
        Welcome to my projects page. Here you can find an overview of my work and explore individual projects in more detail.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="SimpliKeys"
          description="Enterprise Identity Access Managment Monitoring Layer."
          link="/projects/simplikeys"
        />
        <ProjectCard
          title="Project 2"
          description="A brief description of Project 2."
          link="/projects/project2"
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
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline">
        Learn more →
      </a>
    </div>
  );
}

export default ProjectsPage;
