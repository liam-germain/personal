
export default function SimplikeysPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Simplikeys</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="mb-4">
                        Simplikeys provides a next-gen solution for IAM that utilizes an abstraction layer that enables businesses of all sizes to get a better view of their security.
                    </p>

                </div>

            </div>
            <a
                href="https://simplikeys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Visit Simplikeys
            </a>

        </div>
    )
}
