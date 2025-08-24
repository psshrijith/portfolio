import { useState, useEffect } from "react";
import profilePic from "./assets/shrijith.jpg"; // replace with your photo

function App() {
    const colors = [
        "from-blue-400 via-indigo-500 to-purple-600",
        "from-pink-400 via-red-500 to-yellow-500",
        "from-green-400 via-teal-500 to-cyan-500",
        "from-orange-400 via-pink-500 to-purple-600",
    ];

    const [bg, setBg] = useState(colors[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBg((prev) => {
                const currentIndex = colors.indexOf(prev);
                const nextIndex = (currentIndex + 1) % colors.length;
                return colors[nextIndex];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`min-h-screen text-white font-sans transition-all duration-1000 bg-gradient-to-r ${bg}`}
        >

            <header className="flex justify-between items-center p-6 bg-white/80 text-gray-900 sticky top-0 z-50 backdrop-blur-md">
                <h1 className="text-xl font-bold">Shrijith</h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#skills" className="hover:text-blue-600">Skills</a>
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </nav>
            </header>

            <section className="flex flex-col items-center justify-center text-center py-20">
                <img
                    src={profilePic}
                    alt="Shrijith"
                    className="w-40 h-40 rounded-full border-4 border-white mb-6 object-cover"
                />
                <h2 className="text-4xl font-bold mb-2">Hi, I'm Shrijith 👋</h2>
                <p className="text-xl max-w-xl">
                    Frontend developer | Ex-QA Engineer | Still learning and building cool projects.
                </p>
            </section>

            <section id="about" className="p-10 max-w-3xl mx-auto bg-white/20 rounded-lg backdrop-blur-md mb-10">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">About Me</h3>
                <p className="mb-4 text-gray-900">
                    My journey as an engineer hasn’t been conventional. In my first year of engineering,
                    I had very little interest in coding and even disliked programming. Over time,
                    curiosity pushed me to learn more.
                </p>
                <p className="mb-4 text-gray-900">
                    After struggling in the early years, I found my footing in QA and automation testing,
                    learning tools like Selenium, Cypress, and Playwright. This role sharpened my problem-solving skills
                    and attention to detail.
                </p>
                <p className="mb-4 text-gray-900">
                    Today, I’m exploring frontend development with React and Tailwind CSS. I’m still learning and
                    far from a master, but every project helps me improve and understand the craft better.
                </p>
                <p className="text-gray-900">
                    My experience from struggling in the early years to learning QA and now frontend development has taught me resilience, patience, and the value of continuous learning.
                </p>
            </section>

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
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="p-10 max-w-5xl mx-auto mb-10">
                <h3 className="text-3xl font-semibold mb-6 text-center text-white">Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-md">
                        <h4 className="font-bold text-lg mb-2 text-gray-900">YouTube Clone</h4>
                        <p className="text-sm mb-2 text-gray-900">
                            A React + Tailwind clone of YouTube UI for practice.
                        </p>
                        <a href="#" className="text-blue-600 hover:underline">View Project</a>
                    </div>

                    <div className="p-6 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-md">
                        <h4 className="font-bold text-lg mb-2 text-gray-900">Color Box App</h4>
                        <p className="text-sm mb-2 text-gray-900">
                            A React project exploring useState, props, and dynamic styling.
                        </p>
                        <a href="#" className="text-blue-600 hover:underline">View Project</a>
                    </div>
                </div>
            </section>

            <section id="contact" className="p-10 text-center mb-10">
                <h3 className="text-3xl font-semibold mb-4 text-white">Contact Me</h3>
                <p className="mb-2">
                    Email:{" "}
                    <a href="mailto:shrijith89@gmail.com" className="text-blue-200 hover:underline">
                        shrijithps89@gmail.com
                    </a>
                </p>
                <p className="mb-2">
                    GitHub:{" "}
                    <a href="https://github.com/shrijithps" className="text-blue-200 hover:underline">
                        shrijithps
                    </a>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a href="https://www.linkedin.com/in/shrijithps" className="text-blue-200 hover:underline">
                        shrijithps
                    </a>
                </p>
            </section>

            <footer className="text-center py-6 bg-white/50 text-gray-900 backdrop-blur-md">
                © {new Date().getFullYear()} Shrijith. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
