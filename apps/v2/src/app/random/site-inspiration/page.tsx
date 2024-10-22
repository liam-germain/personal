import Link from 'next/link';
import { LinkPreview } from '../../../components/LinkPreview';

import type { JSX } from "react";

const coolWebsites = [
  { name: 'Jace', url: 'https://ja.mt/', description: '' },
  { name: 'Colin Eckert', url: 'https://www.colineckert.dev', description: '' },
  { name: 'Proskua', url: 'https://proskua.com/', description: '' },
  { name: 'Kuntz', url: 'http://kuntz.io/', description: '' },
  { name: "Bilgi Karan", url: 'https://www.bilgikaran.com/', description: '' },
];

export const metadata = {
  title: 'Site Inspiration | Random | Personal Site',
  description: 'Websites that inspired this one..',
};

export default function SiteInspiration(): JSX.Element {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Site Inspiration</h1>
      <p className="mb-8">I really admire when someone else puts in the time to create a beautiful website. I think they are often times one of the best reflections of an individual's creativity and personality. This is a list of websites that have inspired me.</p>
      
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
