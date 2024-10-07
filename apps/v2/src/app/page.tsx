import { Timeline } from '../components/Timeline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
// import { Button } from './components/ui/Button';
import { ModeToggle } from '../components/mode-toggle';

//import { Button } from '../components/button';

import { Button } from '@repo/ui/components/ui/button';

import Link from 'next/link';

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8 max-w-3xl mx-auto">
      {/* Brief description */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Liam Germain</h1>
        <p className="text-lg max-w-xl mb-6">
          Welcome to my personal site. I'm currently working on several exciting projects. I am employed at Red Lodge Mountain and working on a startup called SimpliKeys.
        </p>
        <p className="text-xl font-bold max-w-xl mb-6">* This site is under construction. *</p>

        {/* Social links */}
        <div className="flex justify-center space-x-4">
          <a href="https://x.com/liamail" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a href="https://github.com/liam-germain" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/liamgermain" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Current projects timeline */}
      <section className="w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Current Projects</h2>
        <Timeline
          items={[
            { title: 'Red Lodge Mountain', description: 'Current employment', link: '/projects/red-lodge-mountain' },
            { title: 'SimpliKeys', description: 'Startup project', link: '/projects/simplikeys' },
          ]}
        />
      </section>

    </div>
  );
}
