import { useState, useEffect } from 'react';
import AboutMe from "./components/AboutMe";
import Skills from './components/Skills';
import ContactDetails from './components/ContactDetails';
import Headers from './components/Headers';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.title = "Shrijith | Portfolio";
    }, []);


    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="relative min-h-screen overflow-hidden
                    bg-gradient-to-br from-sky-400 via-indigo-400 to-purple-400
                    text-white font-sans">

            {/* 🌸 Soft glow blobs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
                <Headers />

                <section className="py-16 bg-white/20 backdrop-blur-md">
                    <AboutMe />
                </section>

                <section className="py-16 bg-white/10">
                    <Skills />
                </section>

                <section className="py-16 bg-white/20 backdrop-blur-md">
                    <Projects />
                </section>

                <section className="py-16 bg-white/10">
                    <ContactDetails />
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default App;
