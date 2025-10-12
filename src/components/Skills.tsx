import {type ReactElement} from 'react';

const Skills = (): ReactElement => {
    return (
    <section id="skills" className="p-10 mb-10">
        <h3 className="text-3xl font-semibold mb-6 text-center text-white">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">JavaScript</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">TypeScript</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">React</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Tailwind CSS</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Redux-Saga</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Git & GitHub</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Selenium</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Cypress</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Playwright</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Java</span>
            <span className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm">Python</span>
        </div>
    </section>
    )
}

export default Skills;