import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function MatrixOverlay({ onDismiss }) {
    const columns = useMemo(() => {
        const count = Math.floor(window.innerWidth / 20);
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            chars: Array.from({ length: 30 + Math.floor(Math.random() * 20) }, () =>
                String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
            ).join(''),
            left: `${(i / count) * 100}%`,
            duration: 4 + Math.random() * 8,
            delay: Math.random() * 3,
            fontSize: 10 + Math.floor(Math.random() * 8),
        }));
    }, []);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer"
            style={{ background: 'rgba(0, 0, 0, 0.95)' }}
            onClick={onDismiss}
        >
            {/* Matrix rain columns */}
            {columns.map((col) => (
                <div
                    key={col.id}
                    className="matrix-column"
                    style={{
                        left: col.left,
                        animationDuration: `${col.duration}s`,
                        animationDelay: `${col.delay}s`,
                        fontSize: `${col.fontSize}px`,
                    }}
                >
                    {col.chars}
                </div>
            ))}

            {/* ACCESS GRANTED text */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="relative z-10 text-center"
            >
                <div
                    className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 tracking-wider"
                    style={{
                        fontFamily: 'var(--font-orbitron)',
                        color: 'var(--color-neon-violet)',
                        textShadow: '0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.4)',
                    }}
                >
                    ACCESS
                    <br />
                    GRANTED
                </div>
                <p className="text-sm" style={{ color: 'var(--color-muted-gray)', fontFamily: 'var(--font-jetbrains)' }}>
                    [click para cerrar]
                </p>
            </motion.div>
        </motion.div>
    );
}
