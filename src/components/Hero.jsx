import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NodesBackground from './NodesBackground';

function CountdownUnit({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <span
                className="digital-glow text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider"
                style={{ fontFamily: 'var(--font-digital)' }}
            >
                {String(value).padStart(2, '0')}
            </span>
            <span
                className="text-xs sm:text-sm uppercase tracking-[0.3em] mt-2"
                style={{ color: 'var(--color-muted-gray)' }}
            >
                {label}
            </span>
        </div>
    );
}

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-08-22T09:00:00-03:00').getTime();

        const tick = () => {
            const now = Date.now();
            const diff = Math.max(0, targetDate - now);

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
            style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0f1424 100%)' }}
        >
            <NodesBackground />

            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.08) 0%, transparent 70%)',
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
                {/* Pre-title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm sm:text-base uppercase tracking-[0.4em] mb-4"
                    style={{ color: 'var(--color-muted-gray)' }}
                >
                    UTN — 22 de Agosto 2026
                </motion.p>

                {/* Glitch Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="glitch gradient-title text-6xl sm:text-8xl md:text-9xl font-bold mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-chakra)' }}
                    data-text="HackerTech"
                >
                    HackerTech
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-base sm:text-lg mb-12"
                    style={{ color: 'var(--color-electric-blue)' }}
                >
                    3ra Edición · Evento de Ciberseguridad
                </motion.p>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex items-center gap-4 sm:gap-8 md:gap-12 mb-12"
                >
                    <CountdownUnit value={timeLeft.days} label="Días" />
                    <span className="text-3xl sm:text-5xl md:text-6xl" style={{ color: 'var(--color-neon-violet)', fontFamily: 'var(--font-jetbrains)' }}>:</span>
                    <CountdownUnit value={timeLeft.hours} label="Horas" />
                    <span className="text-3xl sm:text-5xl md:text-6xl" style={{ color: 'var(--color-neon-violet)', fontFamily: 'var(--font-jetbrains)' }}>:</span>
                    <CountdownUnit value={timeLeft.minutes} label="Min" />
                    <span className="text-3xl sm:text-5xl md:text-6xl" style={{ color: 'var(--color-neon-violet)', fontFamily: 'var(--font-jetbrains)' }}>:</span>
                    <CountdownUnit value={timeLeft.seconds} label="Seg" />
                </motion.div>

                {/* CTA Button */}
                <motion.a
                    href="https://app.hackertech.com.ar/register"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="glow-btn rounded-xl px-12 py-5 text-lg sm:text-xl font-bold uppercase tracking-wider cursor-pointer"
                    style={{
                        fontFamily: 'var(--font-orbitron)',
                        color: 'var(--color-soft-white)',
                    }}
                >
                    Registrarse
                </motion.a>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: 'var(--color-muted-gray)' }}>
                    <div className="w-1.5 h-3 rounded-full" style={{ background: 'var(--color-electric-blue)' }} />
                </div>
            </motion.div>
        </section>
    );
}
