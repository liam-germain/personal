import Link from 'next/link';

import type { JSX } from "react";

const randomTopics = [
  { title: 'Cool Websites', href: '/random/cool-websites' },
  { title: 'Site Inspiration', href: '/random/site-inspiration' },
//   { title: 'Quirky Inventions', href: '/random/quirky-inventions' },
//   { title: 'Unusual Hobbies', href: '/random/unusual-hobbies' },
];

export const metadata = {
  title: 'Random | Personal Site',
  description: 'Explore a collection of random and interesting topics.',
};

export default function Random(): JSX.Element {
    return (
        <>
            <main className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6">Random Stuff</h1>
                <p className="mb-8">Random things I find interesting.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {randomTopics.map((topic) => (
                        <Link
                            key={topic.href}
                            href={topic.href}
                            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{topic.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300">Click to explore {topic.title.toLowerCase()}</p>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
}
