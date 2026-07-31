import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Lock, Unlock, Search, ShieldCheck, Swords,
    Bug, Microscope, Code2, TerminalSquare, ShieldAlert,
    ChevronLeft, ChevronRight
} from 'lucide-react';

const rooms = [
    {
        name: 'OSINT',
        icon: Search,
        logo: '/assets/osint.png',
        desc: 'Sumergite en el centro de operaciones de HackerTech. Explorá el ecosistema de Telegram con técnicas avanzadas de recolección y análisis para rastrear amenazas en tiempo real. Utilizá nuestro arsenal de vanguardia, como OsintSearch, y participá en un CTF inmersivo para ensuciarte las manos con datos.',
        color: '#eab308',
        color2: '#000000',
        activities: [
            { title: 'Banners informativos', desc: 'Material educativo sobre OSINT y recolección de inteligencia.' },
            { title: 'Laboratorios de OSINT', desc: 'Ejercicios prácticos con premios para los mejores investigadores.' },
            { title: 'Geoguesser', desc: 'Poné a prueba tu capacidad de geolocalización.' },
            { title: 'CTF Inmersivo', desc: 'Competencia de captura de bandera. Requiere inscripción previa.' },
        ],
    },
    {
        name: 'SOC & SIEM',
        icon: ShieldCheck,
        logo: '/assets/soc_siem (1).png',
        desc: 'Convertite en un analista SOC. Operá estaciones con SIEM configurado y acceso a logs. Usá playbooks operativos para enfrentar amenazas desde nivel básico hasta extremo. Respondé a incidentes en tiempo real y aplicá herramientas de mitigación para defender el entorno.',
        color: '#3b82f6',
        activities: [
            { title: 'Simulador de SOC', desc: 'Juegos interactivos. Sentite parte de un equipo SOC.' },
            { title: 'Banners informativos', desc: 'Material educativo sobre operaciones de seguridad.' },
            { title: 'Empresas de ciberseguridad', desc: 'Conocé las empresas que refuerzan la ciberseguridad digital: nacional e internacional.' },
            { title: 'Experiencia real con SIEM', desc: 'Levantaremos un server expuesto a internet y lo monitoreamos en vivo.' },
        ],
    },
    {
        name: 'Red Team',
        icon: Swords,
        logo: '/assets/red_team.png',
        desc: 'Un espacio interactivo con demostraciones de ataques reales sobre aplicaciones web, dispositivos físicos y redes inalámbricas. Comprobá cómo la superficie de ataque va mucho más allá del código. Explorá técnicas ofensivas, explotá vulnerabilidades y aprendé a pensar como un atacante para defenderte mejor.',
        color: '#ef4444',
    },
    {
        name: 'Malware',
        icon: Bug,
        logo: '/assets/malware.png',
        desc: 'Olvidate de la teoría. Vení a ensuciarte las manos con malware real, estaciones de phishing con IA y laboratorios de infiltración. Te damos las herramientas ofensivas para que aprendas a pensar como un atacante. Una experiencia inmersiva explorando el lado más oscuro de la red.',
        color: 'rgb(24, 97, 22)',
        color2: 'rgb(91, 24, 97)',
        activities: [
            { title: 'Laboratorios', desc: 'Estaciones prácticas de ataque:', items: ['Phishing e instalación de malware', 'BadUSB', 'Remote Access Trojan (RAT)'] },
            { title: 'Museo del Malware', desc: 'Explorá la historia y evolución del malware.' },
            { title: 'CTF Malware Room', desc: 'Cumplí misiones de captura. No requiere conocimientos previos ni inscripción. Solo necesitás tu celular.' },
            { title: 'Ransomware as a Service', desc: 'Customizá tu ransomware. Activar o desactivar funcionalidades.' },
            { title: 'Juego de negociación', desc: 'Simulá una negociación ante un ataque de ransomware.' },
        ],
    },
    {
        name: 'Forense',
        icon: Microscope,
        logo: '/assets/forense.png',
        desc: 'Conocé una perspectiva 100% práctica sobre la respuesta a incidentes informáticos. Durante la jornada realizaremos demostraciones en vivo enfocadas en el análisis forense de navegadores, extracción de evidencia en memoria RAM y resolución de casos reales. ¡Vení a descubrir el rastro del atacante!',
        color: '#8b5cf6',
        activities: [
            { title: 'Ciclo de charlas educativas', desc: 'Introducción a forense, forensia en emails, navegadores, y detalles de roles en el área.' },
            { title: 'Lab de dumpeo de memoria', desc: 'Laboratorio práctico con Volatility para análisis de memoria RAM.' },
            { title: 'Tutoriales prácticos', desc: 'Analizá emails, memoria, navegadores y sistema operativo paso a paso.' },
        ],
    },
    {
        name: 'DevSecOps',
        icon: Code2,
        logo: '/assets/devsecops.png',
        desc: 'Entrá al corazón de DevSecOps y descubrí cómo proteger el software en tiempo real. Presenciá demostraciones en vivo de vulnerabilidades, controles de seguridad y defensa de la cadena de suministro en pipelines reales. Si querés aprender a atacar y prevenir, esta room es para vos.',
        color: '#f59e0b',
        activities: [
            { title: 'Operación Pipeline', desc: 'Recorrido tipo misión: FrandawosShop fue hackeada y tenés que asegurar cada etapa del pipeline.' },
            { title: 'Laboratorios', desc: 'Una PC por estación con desafíos prácticos:', items: ['Secretos filtrados en el repo (Gitleaks)', 'Dependencias vulnerables (npm audit / SCA)', 'Inyección SQL en el código (SAST / Semgrep)', 'Dockerfile inseguro (Trivy / hardening)', 'Infra y CI/CD inseguros (Terraform / Checkov)'] },
            { title: 'Pasaporte DevSecOps', desc: 'Sellás las 5 etapas con stickers.' },
            { title: 'Museo de hackeos reales', desc: 'Explorá casos reales de hackeos documentados.' },
            { title: 'Banners informativos', desc: 'Material educativo sobre DevSecOps.' },
        ],
    },
    {
        name: 'Prompt PWNed',
        icon: TerminalSquare,
        logo: '/assets/pwned.png',
        desc: 'Las inteligencias artificiales y LLMs revolucionan el mundo, pero no dejan de ser hackeables. Son sirvientes diligentes que, ante todo, quieren complacerte. Vení a comprobar cómo, en las manos de un atacante, manipular estos modelos y abusar de su poder puede ser extremadamente peligroso.',
        color: '#22c55e',
    },
    {
        name: 'Fraud War',
        icon: ShieldAlert,
        logo: '/assets/logo_png_transparente.png',
        desc: 'Ingresá a una simulación de war room antifraude. Investigá eventos que parecen aislados y descubrí la campaña coordinada detrás. Analizá logs, dispositivos e IPs, ejecutá consultas SQL y diseñá reglas defensivas mientras el atacante adapta su estrategia en tiempo real. Una experiencia donde la ciberseguridad, el análisis de datos y la toma de decisiones se ponen a prueba. Presentado por BANCOR',
        color: '#f97316',
        color2: '#16a34a',
    },
    {
        name: 'Escape Room',
        isEscapeRoom: true,
        icon: Lock,
        logo: null,
        desc: 'Poné a prueba tus habilidades en nuestro Escape Room. Superá desafíos contrarreloj vulnerando sistemas, explotando fallos de seguridad y aplicando técnicas de hardware hacking para avanzar. Solo tu ingenio y destreza técnica te permitirán resolver los acertijos y escapar a tiempo. ¿Podras hacerlo?',
        color: '#9333ea',
    },
];

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 200 : -200,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 200 : -200,
        opacity: 0,
    }),
};

function ActivityList({ activities, color }) {
    if (!activities || activities.length === 0) return null;

    return (
        <div className="space-y-5">
            <h4
                className="text-xs uppercase tracking-[0.2em] mb-2"
                style={{ color, fontFamily: 'var(--font-jetbrains)' }}
            >
                ¿Qué vas a encontrar?
            </h4>
            {activities.map((activity, i) => (
                <div key={i} className="flex gap-3">
                    <div
                        className="w-1.5 shrink-0 rounded-full self-stretch"
                        style={{ background: color, opacity: 0.5 }}
                    />
                    <div>
                        <p
                            className="font-semibold text-sm"
                            style={{ color: 'var(--color-soft-white)' }}
                        >
                            {activity.title}
                        </p>
                        <p
                            className="text-xs mt-0.5 leading-relaxed"
                            style={{ color: 'var(--color-muted-gray)' }}
                        >
                            {activity.desc}
                        </p>
                        {activity.items && (
                            <ul className="mt-2 space-y-1">
                                {activity.items.map((item, j) => (
                                    <li
                                        key={j}
                                        className="text-xs flex items-start gap-2"
                                        style={{ color: 'var(--color-muted-gray)' }}
                                    >
                                        <span style={{ color }} className="mt-0.5 shrink-0">▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

function RoomSlide({ room }) {
    const mainColor = room.color;
    const hasActivities = room.activities && room.activities.length > 0;
    const gradient = room.color2
        ? `linear-gradient(90deg, ${room.color}, ${room.color2})`
        : mainColor;

    return (
        <div
            className="glass-card rounded-2xl overflow-hidden"
            style={{ borderColor: `${mainColor}33` }}
        >
            {/* Color accent top bar */}
            <div className="h-1" style={{ background: gradient }} />

            <div
                className={`p-6 sm:p-10 ${
                    hasActivities
                        ? 'grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12'
                        : ''
                }`}
            >
                {/* Left column: Room info */}
                <div className={hasActivities ? 'lg:col-span-2' : 'text-center max-w-2xl mx-auto'}>
                    <div
                        className={`flex items-center gap-4 mb-6 ${
                            !hasActivities ? 'justify-center' : ''
                        }`}
                    >
                        {room.logo ? (
                            <img
                                src={room.logo}
                                alt={`${room.name} logo`}
                                className="w-16 h-16 object-contain"
                            />
                        ) : (
                            <room.icon
                                className="w-12 h-12"
                                style={{ color: mainColor }}
                            />
                        )}
                        <h3
                            className="text-2xl sm:text-3xl font-bold"
                            style={{
                                fontFamily: 'var(--font-orbitron)',
                                color: 'var(--color-soft-white)',
                            }}
                        >
                            {room.name}
                        </h3>
                    </div>
                    <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: 'var(--color-muted-gray)' }}
                    >
                        {room.desc}
                    </p>
                </div>

                {/* Right column: Activities */}
                {hasActivities && (
                    <div className="lg:col-span-3 lg:border-l lg:pl-8" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                        <ActivityList
                            activities={room.activities}
                            color={mainColor}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

function EscapeRoomSlide({ room }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="glass-card rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                borderColor: hovered
                    ? 'rgba(147, 51, 234, 0.6)'
                    : 'rgba(147, 51, 234, 0.15)',
                boxShadow: hovered
                    ? '0 0 60px rgba(147, 51, 234, 0.3)'
                    : 'none',
                transition: 'all 0.5s ease',
            }}
        >
            <div
                className="h-1"
                style={{
                    background:
                        'linear-gradient(90deg, #9333ea, #00d4ff)',
                }}
            />

            <div className="p-10 sm:p-16 flex flex-col items-center text-center relative">
                {/* Glow backdrop */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        background:
                            'radial-gradient(circle at center, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
                    }}
                />

                <div className="relative z-10">
                    <AnimatePresence mode="wait">
                        {!hovered ? (
                            <motion.div
                                key="locked"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.5,
                                    rotate: -15,
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                style={{
                                    background: 'rgba(147, 51, 234, 0.15)',
                                }}
                            >
                                <Lock
                                    className="w-10 h-10"
                                    style={{
                                        color: 'var(--color-neon-violet)',
                                    }}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="unlocked"
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    rotate: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{
                                    duration: 0.3,
                                    type: 'spring',
                                    stiffness: 300,
                                }}
                                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                style={{
                                    background: 'rgba(147, 51, 234, 0.3)',
                                    boxShadow:
                                        '0 0 30px rgba(168, 85, 247, 0.5)',
                                }}
                            >
                                <Unlock
                                    className="w-10 h-10"
                                    style={{
                                        color: 'var(--color-violet-glow)',
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <h3
                        className="text-2xl sm:text-3xl font-bold mb-4"
                        style={{
                            fontFamily: 'var(--font-orbitron)',
                            color: 'var(--color-soft-white)',
                        }}
                    >
                        Escape Room
                    </h3>
                    <p
                        className="text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed"
                        style={{ color: 'var(--color-muted-gray)' }}
                    >
                        {room.desc}
                    </p>

                    {/* Time slots */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['14:00', '15:00', '16:00', '17:00'].map((t) => (
                            <span
                                key={t}
                                className="px-4 py-2 rounded-full text-sm font-mono"
                                style={{
                                    background: 'rgba(147, 51, 234, 0.15)',
                                    border: '1px solid rgba(147, 51, 234, 0.3)',
                                    color: '#a855f7',
                                }}
                            >
                                {t} hs
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Rooms() {
    const [[activeIndex, direction], setPage] = useState([0, 0]);

    const paginate = useCallback((newDirection) => {
        setPage(([prev]) => {
            const next = prev + newDirection;
            if (next < 0 || next >= rooms.length) return [prev, 0];
            return [next, newDirection];
        });
    }, []);

    const goTo = useCallback((index) => {
        setPage(([prev]) => [index, index > prev ? 1 : -1]);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowLeft') paginate(-1);
            if (e.key === 'ArrowRight') paginate(1);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [paginate]);

    const currentRoom = rooms[activeIndex];

    return (
        <section
            id="rooms"
            className="relative py-24 sm:py-32 px-4"
            style={{ background: 'var(--color-deep-navy)' }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section title */}
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
                            color: 'var(--color-electric-blue)',
                            fontFamily: 'var(--font-jetbrains)',
                        }}
                    >
                        {'// Salas'}
                    </span>
                    <h2
                        className="text-3xl sm:text-5xl font-bold"
                        style={{
                            fontFamily: 'var(--font-orbitron)',
                            color: 'var(--color-soft-white)',
                        }}
                    >
                        Rooms
                    </h2>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    {/* Previous Arrow */}
                    <button
                        onClick={() => paginate(-1)}
                        disabled={activeIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110"
                        style={{
                            background: 'rgba(10, 10, 10, 0.9)',
                            border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        aria-label="Room anterior"
                    >
                        <ChevronLeft
                            className="w-5 h-5"
                            style={{ color: 'var(--color-soft-white)' }}
                        />
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={() => paginate(1)}
                        disabled={activeIndex === rooms.length - 1}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110"
                        style={{
                            background: 'rgba(10, 10, 10, 0.9)',
                            border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        aria-label="Room siguiente"
                    >
                        <ChevronRight
                            className="w-5 h-5"
                            style={{ color: 'var(--color-soft-white)' }}
                        />
                    </button>

                    {/* Slide area */}
                    <div className="overflow-hidden px-6 sm:px-10">
                        <AnimatePresence
                            initial={false}
                            custom={direction}
                            mode="wait"
                        >
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.35,
                                    ease: 'easeInOut',
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                onDragEnd={(e, { offset }) => {
                                    if (offset.x < -80) paginate(1);
                                    else if (offset.x > 80) paginate(-1);
                                }}
                            >
                                {currentRoom.isEscapeRoom ? (
                                    <EscapeRoomSlide room={currentRoom} />
                                ) : (
                                    <RoomSlide room={currentRoom} />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Counter */}
                <div className="text-center mt-8 mb-4">
                    <span
                        className="text-xs"
                        style={{
                            color: 'var(--color-muted-gray)',
                            fontFamily: 'var(--font-jetbrains)',
                        }}
                    >
                        {activeIndex + 1} / {rooms.length}
                    </span>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2">
                    {rooms.map((room, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className="h-2 rounded-full transition-all duration-300"
                            style={{
                                width: i === activeIndex ? '24px' : '8px',
                                background:
                                    i === activeIndex
                                        ? room.color
                                        : 'rgba(255,255,255,0.15)',
                                boxShadow:
                                    i === activeIndex
                                        ? `0 0 8px ${room.color}60`
                                        : 'none',
                            }}
                            aria-label={`Ir a ${room.name}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
