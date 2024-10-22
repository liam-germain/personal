import Link from 'next/link';
import { LinkPreview } from '../../../components/LinkPreview';

import type { JSX } from "react";

const coolWebsites = [
  { name: 'Energy and Humanity', url: 'https://energyandhumanity.com/', description: 'A site about the future of energy and how it will interact with humanity.' },
];

export const metadata = {
  title: 'Cool Websites | Random | Personal Site',
  description: 'A curated list of cool websites I think are worth checking out.',
};

export default function CoolWebsites(): JSX.Element {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Cool Websites</h1>
      <p className="mb-8">Here's a list of websites I think are really cool:</p>
      
      <ul className="space-y-8">
        {coolWebsites.map((site) => (
          <li key={site.url} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={site.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {site.name}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{site.description}</p>
            <LinkPreview url={site.url} />
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <Link href="/random" className="text-blue-500 hover:underline">
          ← Back to Random Topics
        </Link>
      </div>
    </main>
  );
}
