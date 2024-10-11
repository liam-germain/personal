
export default function ThisSitePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">This Website</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="mb-4">
                        This website.
                    </p>

                </div>

            </div>
            <a
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                href="https://github.com/liam-germain/personal"
                rel="noopener noreferrer"
                target="_blank"
            >
                See Code
            </a>

        </div>
    )
}
