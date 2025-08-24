import "./index.css";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Navbar */}
            <header className="flex justify-between items-center p-6 bg-white shadow-md">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </nav>
            </header>

            {/* Hero */}
            <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h2 className="text-4xl font-bold mb-4">Hi, I'm Shrijith 👋</h2>
                <p className="max-w-xl">
                    A frontend developer passionate about React and building clean UIs.
                </p>
            </section>

            {/* About */}
            <section id="about" className="p-10 max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">About Me</h3>
                <p>
                    I'm an engineer transitioning from QA to frontend development.
                    I enjoy learning JavaScript, React, and experimenting with design systems.
                </p>
            </section>

            {/* Projects */}
            <section id="projects" className="p-10 bg-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-md">
                        <h4 className="font-bold text-lg">YouTube Clone</h4>
                        <p className="text-sm mt-2">A simple clone UI built with React + Tailwind.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md">
                        <h4 className="font-bold text-lg">Color Box App</h4>
                        <p className="text-sm mt-2">A React app exploring useState and props.</p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="p-10 text-center">
                <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                <p>
                    Email: <a href="mailto:shrijith@example.com" className="text-blue-600">
                    shrijith@example.com
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
