
export default function RLMpage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Red Lodge Mountain</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="mb-4">
                        Red Lodge Mountain is a ski area located in Red Lodge, Montana.
                    </p>

                </div>

            </div>
            <a
                href="https://redlodgemountain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Visit Red Lodge Mountain
            </a>

        </div>
    )
}