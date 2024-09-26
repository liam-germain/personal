
export default function collectivePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">4XP Collective</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="mb-4">
                        I started this project with my freshman year roommate, Nicholas Fleisher, in 2021 after our first venture together failed. It is our app studio where we try to build products people want to use and share with their friends.                     </p>

                </div>

            </div>
            <a
                href="https://4xp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Visit 4XP Collective
            </a>

        </div>
    )
}
