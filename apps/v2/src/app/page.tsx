import { Timeline } from '../components/Timeline';

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8 max-w-3xl mx-auto">
      {/* Brief description */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Liam Germain</h1>
        <p className="text-lg max-w-xl">
          Welcome to my personal site. I'm currently working on several exciting projects. I am employed at Red Lodge Mountain and working on a startup called SimpliKeys.
        </p>
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
