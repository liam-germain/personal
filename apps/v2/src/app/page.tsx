import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { experiences } from '../data/experience';

import type { JSX } from "react";

export default function Page(): JSX.Element {

    return (
        <div className="flex flex-col items-center justify-center min-h-full p-8 max-w-3xl mx-auto">
            {/* Brief description */}
            <section className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Liam Germain</h1>
                <p className="text-lg max-w-xl mb-6">
                    Welcome to my personal site. I am currently working on several exciting projects. I am employed at Red Lodge Mountain and working on a startup called SimpliKeys.
                </p>
                <p className="text-xl font-bold max-w-xl mb-6">* This site is under construction. *</p>

                {/* Social links */}
                <div className="flex justify-center space-x-4">
                    <a className="text-gray-600 hover:text-gray-800 transition-colors" href="https://x.com/liamail" rel="noopener noreferrer" target="_blank">
                        <FaXTwitter className="w-6 h-6" />
                    </a>
                    <a className="text-gray-600 hover:text-gray-800 transition-colors" href="https://github.com/liam-germain" rel="noopener noreferrer" target="_blank">
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a className="text-gray-600 hover:text-gray-800 transition-colors" href="https://www.linkedin.com/in/liamgermain" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </div>
            </section>

        </div>
    );
}