
export default function LocolPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Locol</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="mb-4">
                        I co-founded this company with three of my best friends from college at the start of our Junior Year in 2020. It was a social commerce platform for small businesses.
                    </p>
                </div>

            </div>
            <a
                className="inline-block bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                href="https://4xp.org/locol"
                rel="noopener noreferrer"
                target="_blank"
            >
                Visit 4xp.org to learn more.
            </a>

        </div>
    )
}
