import Head from 'next/head';

export default function About(): JSX.Element {
    return (
        <>
            <Head>
                <title>About | Personal Site</title>
                <meta content="Just Random Stuff." name="description" />
            </Head>
            <main className="p-8">
                <h1 className="text-3xl font-bold">Random</h1>
                <p>Welcome to the Random page.</p>
            </main>
        </>
    );
}