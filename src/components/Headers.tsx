import type { ReactElement } from "react";

const Headers = (): ReactElement => {
    return(
        <header className="flex justify-between items-center p-6 bg-white/80 text-gray-900 sticky top-0 z-50 backdrop-blur-md">
            <h1 className="text-xl font-bold">Shrijith</h1>
            <nav className="space-x-4">
                <a href="#about" className="hover:text-blue-600">About</a>
                <a href="#skills" className="hover:text-blue-600">Skills</a>
                <a href="#projects" className="hover:text-blue-600">Projects</a>
                <a href="#contact" className="hover:text-blue-600">Contact</a>
            </nav>
        </header>
    )
}

export default Headers;