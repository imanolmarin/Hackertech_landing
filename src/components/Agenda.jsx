import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';

const scheduleData = [
    {
        time: '13:00',
        title: 'Apertura del Evento',
        description: 'Arranca oficialmente el evento.',
    },
    {
        time: '13:00 - 18:00',
        title: 'HackerTech',
        description: 'Horario central del evento con todas las actividades.',
        subItems: [
            { title: 'Rooms', desc: 'Recorré las 8 salas temáticas del evento.' },
            { title: 'CTF', desc: 'Competencias de captura de bandera en distintas rooms.' },
            { title: 'Laboratorios', desc: 'Estaciones prácticas con ejercicios hands-on.' },
            { title: 'Actividades de Criptografía', desc: 'Desafíos y ejercicios prácticos de criptografía.' },
            { title: 'Juegos', desc: 'Mini-juegos interactivos a lo largo del evento.' },
            { title: 'Stands de Investigaciones', desc: 'Stands con proyectos e investigaciones en ciberseguridad.' },
            { title: 'Password Less', desc: 'Explorá alternativas modernas a las contraseñas tradicionales.' },
            { title: 'Técnicas de Hacking Avanzado', desc: 'Demostraciones y prácticas de técnicas ofensivas avanzadas.' },
        ],
    },
    {
        time: '14:00 - 17:00',
        title: 'Escape Room',
        description: '4 turnos disponibles: 14:00, 15:00, 16:00 y 17:00 hs.',
    },
    {
        time: '18:30 - 20:30',
        title: 'After + Cyber War',
        description: 'Relajate en nuestro after acompañado de una Cyber War.',
    },
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
                style={{
                    background:
                        'linear-gradient(to right, transparent, var(--color-neon-violet), var(--color-electric-blue), transparent)',
                }}
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
                        style={{
                            color: 'var(--color-neon-violet)',
                            fontFamily: 'var(--font-jetbrains)',
                        }}
                    >
                        {'// Agenda'}
                    </span>
                    <h2
                        className="text-3xl sm:text-5xl font-bold"
                        style={{
                            fontFamily: 'var(--font-orbitron)',
                            color: 'var(--color-soft-white)',
                        }}
                    >
                        Cronograma
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l-2 border-dashed ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12" style={{ borderColor: 'rgba(57, 255, 20, 0.2)' }}>
                    {scheduleData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div
                                className="absolute -left-[41px] sm:-left-[57px] top-1 w-4 h-4 rounded-full border-2"
                                style={{
                                    background: 'var(--color-dark-surface)',
                                    borderColor: 'var(--color-electric-blue)',
                                    boxShadow: '0 0 10px var(--color-electric-blue)',
                                }}
                            />

                            <div
                                className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4">
                                    <div
                                        className="flex items-center gap-2 text-lg sm:text-xl shrink-0"
                                        style={{
                                            color: 'var(--color-electric-blue)',
                                            fontFamily: 'var(--font-jetbrains)',
                                        }}
                                    >
                                        <Clock className="w-5 h-5" />
                                        <span>{item.time}</span>
                                    </div>
                                    <h3
                                        className="text-xl sm:text-2xl font-bold"
                                        style={{
                                            fontFamily: 'var(--font-orbitron)',
                                            color: 'var(--color-soft-white)',
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                                <p
                                    className="leading-relaxed text-base sm:text-lg"
                                    style={{ color: 'var(--color-muted-gray)' }}
                                >
                                    {item.description}
                                </p>

                                {/* Sub-items (activities grouped under HackerTech) */}
                                {item.subItems && (
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {item.subItems.map((sub, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                                                className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm cursor-default transition-all duration-300 hover:scale-[1.03]"
                                                style={{
                                                    background: 'rgba(0, 255, 0, 0.05)',
                                                    border: '1px solid rgba(0, 255, 0, 0.12)',
                                                    color: 'var(--color-soft-white)',
                                                    fontFamily: 'var(--font-inter)',
                                                }}
                                                title={sub.desc}
                                            >
                                                <Sparkles
                                                    className="w-3.5 h-3.5 shrink-0 transition-colors duration-300"
                                                    style={{ color: 'var(--color-electric-blue)' }}
                                                />
                                                <span>{sub.title}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
