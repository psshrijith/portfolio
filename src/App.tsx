import { useEffect, useRef, useState, type MutableRefObject } from 'react';
import AboutMe from "./components/AboutMe";
import Skills from './components/Skills';
import ContactDetails from './components/ContactDetails';
import Headers from './components/Headers';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Loading from './components/Loading';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme';

const playThemeSwitchSound = async (nextTheme: ThemeMode, audioContextRef: MutableRefObject<AudioContext | null>) => {
    if (typeof window === 'undefined') {
        return;
    }

    const AudioContextClass =
        window.AudioContext ??
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) {
        return;
    }

    const audioContext = audioContextRef.current ?? new AudioContextClass();
    audioContextRef.current = audioContext;

    if (audioContext.state === 'suspended') {
        await audioContext.resume().catch(() => undefined);
    }

    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(nextTheme === 'dark' ? 392 : 523.25, now);
    oscillator.frequency.exponentialRampToValueAtTime(nextTheme === 'dark' ? 196 : 659.25, now + 0.14);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.06, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.22);
};

const getInitialTheme = (): ThemeMode => {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setIsLoading(false);
        }, 4500);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch {
            // Ignore storage failures and keep the theme in memory.
        }
    }, [theme]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
                <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-slate-500/10 blur-3xl" />
                <div className="absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 pb-12 sm:pb-16">
                <Headers
                    theme={theme}
                    onToggleTheme={() => {
                        const nextTheme = theme === 'light' ? 'dark' : 'light';
                        setTheme(nextTheme);
                        void playThemeSwitchSound(nextTheme, audioContextRef);
                    }}
                />

                <main className="space-y-8 sm:space-y-10 pt-6 sm:pt-8">
                    <AboutMe />
                    <Skills />
                    <Projects />
                    <ContactDetails />
                </main>

                <Footer />
            </div>
        </div>
    );
}
export default App;
