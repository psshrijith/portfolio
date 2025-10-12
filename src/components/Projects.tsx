import {type ReactElement} from 'react';

const Projects=(): ReactElement => {
    return (
    <section id="projects" className="p-10 max-w-5xl mx-auto mb-10">
        <h3 className="text-3xl font-semibold mb-6 text-center text-white">Projects</h3>
        <div className="flex justify-center gap-6">
            <div className="w-80 p-6 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-md">
                <h4 className="font-bold text-lg mb-2 text-gray-900">YouTube Clone</h4>
                <p className="text-sm mb-2 text-gray-900">
                    A React + Tailwind clone of YouTube UI for practice.
                </p>
                <a href="https://github.com/psshrijith/youtubeCloneApp" className="text-blue-600 hover:underline">View Project</a>
            </div>
            <div className="w-80 p-6 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-md">
                <h4 className="font-bold text-lg mb-2 text-gray-900">Bankist App</h4>
                <p className="text-sm mb-2 text-gray-900">
                    A minimalistic banking application built using vanilla JavaScript to demonstrate key web development concepts like DOM manipulation, event handling, and working with arrays and timers.
                </p>
                <a href="https://github.com/psshrijith/bankist_app" className="text-blue-600 hover:underline">View Project</a>
            </div>
        </div>
    </section>
    )
}

export default Projects;