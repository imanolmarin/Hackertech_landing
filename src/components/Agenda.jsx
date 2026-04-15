import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

// El cronograma se anunciará próximamente

export default function Agenda() {
    return (
        <section
            id="agenda"
            className="relative py-24 sm:py-32 px-4"
            style={{ background: 'var(--color-dark-surface)' }}
        >
            {/* Top line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, var(--color-neon-violet), var(--color-electric-blue), transparent)' }}
            />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-sm uppercase tracking-[0.3em] mb-4 block"
                        style={{ color: 'var(--color-neon-violet)', fontFamily: 'var(--font-jetbrains)' }}
                    >
                        {'// Agenda'}
                    </span>
                    <h2
                        className="text-3xl sm:text-5xl font-bold"
                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                    >
                        Cronograma
                    </h2>
                </motion.div>

                {/* Coming Soon Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card rounded-2xl p-10 sm:p-16 text-center max-w-2xl mx-auto flex flex-col items-center justify-center border-dashed"
                    style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }}
                >
                    <Clock className="w-12 h-12 mb-6" style={{ color: 'var(--color-neon-violet)' }} />
                    <h3
                        className="text-2xl sm:text-3xl font-bold mb-4"
                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                    >
                        Próximamente
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-muted-gray)' }}>
                        Estamos preparando un cronograma increíble. Estate atento para más novedades!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
