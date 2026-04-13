import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function About() {
    return (
        <section
            id="about"
            className="relative py-24 sm:py-32 px-4"
            style={{ background: 'var(--color-dark-surface)' }}
        >
            {/* Decorative top gradient line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, var(--color-electric-blue), var(--color-neon-violet), transparent)' }}
            />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Shield className="w-6 h-6" style={{ color: 'var(--color-electric-blue)' }} />
                        <span
                            className="text-sm uppercase tracking-[0.3em]"
                            style={{ color: 'var(--color-electric-blue)', fontFamily: 'var(--font-jetbrains)' }}
                        >
                            Sobre el Evento
                        </span>
                        <Shield className="w-6 h-6" style={{ color: 'var(--color-electric-blue)' }} />
                    </div>
                    <h2
                        className="text-3xl sm:text-5xl font-bold mb-6"
                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                    >
                        3ra Edición
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-card rounded-2xl p-8 sm:p-12"
                >
                    <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: 'var(--color-muted-gray)' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: 'var(--color-muted-gray)' }}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-muted-gray)' }}>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        {['CTF', 'Workshops', 'Networking', 'Charlas'].map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 rounded-full text-sm font-medium"
                                style={{
                                    background: 'rgba(0, 212, 255, 0.08)',
                                    border: '1px solid rgba(0, 212, 255, 0.2)',
                                    color: 'var(--color-electric-blue)',
                                    fontFamily: 'var(--font-jetbrains)',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
