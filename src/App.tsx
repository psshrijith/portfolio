import "./index.css";
import profilePic from "./assets/shrijith.jpg";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
                <h1 className="text-xl font-bold">Shrijith</h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </nav>
            </header>

            <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <img
                    src={profilePic}
                    alt="Shrijith"
                    className="w-40 h-40 rounded-full border-4 border-white mb-6 object-cover"
                />
                <h2 className="text-4xl font-bold mb-2">Hi, I'm Shrijith 👋</h2>
                <p className="text-xl max-w-xl">
                    Frontend Developer | React Enthusiast | QA Engineer.
                </p>
            </section>

            <section id="about" className="p-10 max-w-3xl mx-auto">
                <h3 className="text-3xl font-semibold mb-4">About Me</h3>
                <p className="mb-4">
                    My journey as an engineer hasn’t been conventional. In my first year of engineering,
                    I had very little interest in coding and struggled to understand the concepts. I even
                    disliked programming at first.
                </p>
                <p className="mb-4">
                    Over the years, my curiosity and persistence grew. By the final year, I began exploring
                    automation and testing, which led me to a QA Engineer role. During this time, I learned
                    tools like Selenium, Cypress, and Playwright, building practical skills in automation.
                </p>
                <p className="mb-4">
                    Today, I’m diving into frontend development with React and Tailwind CSS, combining my
                    attention to detail from QA with a passion for building interactive and clean UIs.
                    Every project is a step toward mastering modern web development and creating practical,
                    user-friendly applications.
                </p>
                <p>
                    My experience from struggling in my early years to learning QA and now exploring frontend development -
                    has taught me resilience, continuous learning, and the value of hands-on practice.
                </p>
            </section>

            <section id="skills" className="p-10 bg-gray-100">
                <h3 className="text-3xl font-semibold mb-6 text-center">Skills</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">JavaScript</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">TypeScript</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Core Java</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Python</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">React</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Tailwind CSS</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Git & GitHub</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Selenium</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Cypress</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Playwright</span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm">TestNG</span>

                </div>
            </section>

            <section id="projects" className="p-10 max-w-5xl mx-auto">
                <h3 className="text-3xl font-semibold mb-6 text-center">Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <h4 className="font-bold text-lg mb-2">YouTube Clone</h4>
                        <p className="text-sm mb-2">
                            A React + Tailwind clone of YouTube UI for practice.
                        </p>
                        <a
                            href="https://github.com/shrijithps/youtubeCloneApp"
                            className="text-blue-600 hover:underline"
                        >
                            View Project
                        </a>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <h4 className="font-bold text-lg mb-2">Color Box App</h4>
                        <p className="text-sm mb-2">
                            A React project exploring useState, props, and dynamic styling.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
                <p className="mb-2">
                    Email:{" "}
                    <a href="mailto:shrijithps89@gmail.com" className="text-blue-600">
                        shrijithps89@gmail.com
                    </a>
                </p>
                <p className="mb-2">
                    GitHub:{" "}
                    <a href="https://github.com/shrijithps" className="text-blue-600">
                        shrijithps
                    </a>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a href="https://www.linkedin.com/in/shrijithps" className="text-blue-600">
                        shrijithps
                    </a>
                </p>
            </section>

            <footer className="text-center py-6 bg-gray-200">
                © {new Date().getFullYear()} Shrijith. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
