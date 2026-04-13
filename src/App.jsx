import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Agenda from './components/Agenda';
import Recap from './components/Recap';
import Footer from './components/Footer';
import MatrixOverlay from './components/MatrixOverlay';
import SecretModal from './components/SecretModal';

import { initConsoleFlag, initKonamiCode, initHiddenFunction } from './easterEggs';

export default function App() {
    const [showMatrix, setShowMatrix] = useState(false);
    const [showSecret, setShowSecret] = useState(false);

    useEffect(() => {
        // Easter Egg 1: Console ASCII art
        initConsoleFlag();

        // Easter Egg 2: Konami Code → Matrix overlay
        const cleanupKonami = initKonamiCode(() => setShowMatrix(true));

        // Easter Egg 3: Hidden reverse-engineering function
        initHiddenFunction(() => setShowSecret(true));

        return () => {
            cleanupKonami();
            delete window.bypassFirewall;
        };
    }, []);

    return (
        <div className="min-h-screen" style={{ background: 'var(--color-deep-navy)' }}>
            <Hero />
            <About />
            <Rooms />
            <Agenda />
            <Recap />
            <Footer />

            <AnimatePresence>
                {showMatrix && <MatrixOverlay onDismiss={() => setShowMatrix(false)} />}
            </AnimatePresence>

            <AnimatePresence>
                {showSecret && <SecretModal onClose={() => setShowSecret(false)} />}
            </AnimatePresence>
        </div>
    );
}
