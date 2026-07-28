import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const scheduleData = [
    { time: "13:00", title: "Apertura del Evento", description: "Arranca oficialmente el evento." },
    { time: "13:00 - 18:00", title: "HackerTech", description: "Horario central del evento con todas las actividades." },
    { time: "14:00 - 17:00", title: "Escape Room", description: "4 turnos disponibles: 14:00, 15:00, 16:00 y 17:00 hs." },
    { time: "18:30 - 20:30", title: "After + Cyber War", description: "Relajate en nuestro after acompañado de una Cyber War." }
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
                <div className="relative border-l-2 border-dashed border-[var(--color-neon-violet)]/30 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
                    {scheduleData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div 
                                className="absolute -left-[41px] sm:-left-[57px] top-1 w-4 h-4 rounded-full bg-[var(--color-dark-surface)] border-2 border-[var(--color-electric-blue)] shadow-[0_0_10px_var(--color-electric-blue)]"
                            />
                            
                            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-glow transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4">
                                    <div className="flex items-center gap-2 text-[var(--color-electric-blue)] font-mono text-lg sm:text-xl shrink-0">
                                        <Clock className="w-5 h-5" />
                                        <span>{item.time}</span>
                                    </div>
                                    <h3 
                                        className="text-xl sm:text-2xl font-bold"
                                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-[var(--color-muted-gray)] leading-relaxed text-base sm:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
