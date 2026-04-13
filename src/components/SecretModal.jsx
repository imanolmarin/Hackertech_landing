import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function SecretModal({ onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            style={{ background: 'rgba(0, 0, 0, 0.9)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative max-w-lg w-full rounded-2xl p-8 sm:p-10 text-center"
                style={{
                    background: 'linear-gradient(135deg, rgba(19, 24, 48, 0.95), rgba(10, 14, 26, 0.98))',
                    border: '2px solid var(--color-neon-violet)',
                    boxShadow: '0 0 60px rgba(147, 51, 234, 0.4), 0 0 120px rgba(147, 51, 234, 0.15)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-6 flex justify-center">
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                            background: 'rgba(147, 51, 234, 0.2)',
                            boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
                        }}
                    >
                        <Terminal className="w-8 h-8" style={{ color: 'var(--color-violet-glow)' }} />
                    </div>
                </div>

                <h3
                    className="text-2xl sm:text-3xl font-black mb-4"
                    style={{
                        fontFamily: 'var(--font-orbitron)',
                        color: 'var(--color-violet-glow)',
                        textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
                    }}
                >
                    ¡Reverse Engineer!
                </h3>

                <div
                    className="rounded-xl p-4 mb-6"
                    style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(147, 51, 234, 0.3)',
                        fontFamily: 'var(--font-jetbrains)',
                    }}
                >
                    <p className="text-sm sm:text-base" style={{ color: 'var(--color-accent-green)' }}>
                        Flag{'{'}R3V3RS3_3NG1N33R_M4ST3R{'}'}
                    </p>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted-gray)' }}>
                    Mostrá esto en acreditaciones para un <strong style={{ color: 'var(--color-violet-glow)' }}>sticker VIP</strong>
                </p>

                <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider cursor-pointer transition-all hover:brightness-110"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-neon-violet), var(--color-cyber-purple))',
                        color: 'var(--color-soft-white)',
                        fontFamily: 'var(--font-orbitron)',
                    }}
                >
                    Cerrar
                </button>
            </motion.div>
        </motion.div>
    );
}
