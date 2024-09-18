
export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* Brief description */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Liam Germain</h1>
        <p className="mt-4 text-lg">
          Welcome to my personal site. I'm currently working on several exciting projects and sharing my writings here.
        </p>
      </section>

      {/* List of previous projects */}
      <section className="w-full">
        <h2 className="text-2xl font-semibold mb-6">Current Projects</h2>
        <ul className="space-y-4">
          <li>Project One - Description of project one.</li>
          <li>Project Two - Description of project two.</li>
          <li>Project Three - Description of project three.</li>
        </ul>
      </section>
    </main>
  );
}
