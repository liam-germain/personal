import Head from 'next/head';

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>About | Personal Site</title>
        <meta name="description" content="Learn more about me." />
      </Head>
      <main className="p-8">
        <h1 className="text-3xl font-bold">About</h1>
        <p>Welcome to the About page.</p>
      </main>
    </>
  );
}