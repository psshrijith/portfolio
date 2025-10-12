import AboutMe from "./components/AboutMe";
import Skills from './components/Skills';
import ContactDetails from './components/ContactDetails';
import Headers from './components/Headers';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div
            className={`min-h-screen text-white font-sans transition-all duration-1000 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600`}
        >
            <Headers/>
            <AboutMe />
            <Skills/>
            <Projects/>
            <ContactDetails/>
            <Footer/>
        </div>
    );
}

export default App;
