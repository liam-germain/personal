
import type { JSX } from "react";

export const metadata = {
  title: 'About | Personal Site',
  description: 'Learn more about me.',
};

export default function About(): JSX.Element {
  return (
    <>
      <main className="p-8">
        <h1 className="text-3xl font-bold">About</h1>
        <p>Hello, my name is Liam Germain. I am originally from Ennis, MT.</p>
      </main>
    </>
  );
}