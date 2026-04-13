import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const agendaItems = [
    { time: '09:00', title: 'Acreditación y Bienvenida', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { time: '09:30', title: 'Keynote: El Futuro del Hacking Ético', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { time: '10:30', title: 'Workshop: OSINT Avanzado', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    { time: '12:00', title: 'Break & Networking', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
    { time: '13:00', title: 'CTF: Captura la Bandera', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
    { time: '15:00', title: 'Panel: Blue Team vs Red Team', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
    { time: '16:30', title: 'Escape Room Challenge', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.' },
    { time: '18:00', title: 'Cierre y Premios', desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus.' },
];

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

                {/* Timeline */}
                <div className="relative">
                    {/* Central line */}
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line" />

                    {agendaItems.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-start mb-8 sm:mb-12 ${isLeft
                                        ? 'sm:flex-row sm:pr-[50%]'
                                        : 'sm:flex-row-reverse sm:pl-[50%]'
                                    } flex-row pl-12 sm:pl-0`}
                            >
                                {/* Dot on line */}
                                <div
                                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 mt-2"
                                    style={{
                                        background: index % 2 === 0 ? 'var(--color-electric-blue)' : 'var(--color-neon-violet)',
                                        boxShadow: `0 0 12px ${index % 2 === 0 ? 'rgba(0, 212, 255, 0.5)' : 'rgba(147, 51, 234, 0.5)'}`,
                                    }}
                                />

                                {/* Card */}
                                <div className={`glass-card rounded-xl p-5 sm:p-6 max-w-sm w-full ${isLeft ? 'sm:mr-8' : 'sm:ml-8'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-4 h-4" style={{ color: 'var(--color-electric-blue)' }} />
                                        <span
                                            className="text-sm font-bold"
                                            style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--color-electric-blue)' }}
                                        >
                                            {item.time}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-base sm:text-lg font-bold mb-2"
                                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: 'var(--color-muted-gray)' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
