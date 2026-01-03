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

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="relative min-h-screen bg-gray-50 text-gray-900 font-sans">

            <div className="relative z-10">
                <Headers />

                <section className="py-16 bg-white">
                    <AboutMe />
                </section>

                <section className="py-16 bg-gray-50">
                    <Skills />
                </section>

                <section className="py-16 bg-white">
                    <Projects />
                </section>

                <section className="py-16 bg-gray-50">
                    <ContactDetails />
                </section>

                <Footer />
            </div>
        </div>
    );
}
export default App;