import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Lock, Unlock, Search, ShieldCheck, Swords,
    Bug, Microscope, Code2, TerminalSquare
} from 'lucide-react';

const rooms = [
    { name: 'OSINT', icon: Search, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.', color: '#eab308', color2: '#000000' },
    { name: 'SOC & SIEM', icon: ShieldCheck, desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', color: '#3b82f6' },
    { name: 'Red Team', icon: Swords, desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.', color: '#ef4444' },
    { name: 'Malware', icon: Bug, desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa.', color: 'rgb(24, 97, 22)', color2: 'rgb(91, 24, 97)' },
    { name: 'Forense', icon: Microscope, desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', color: '#8b5cf6' },
    { name: 'DevSecOps', icon: Code2, desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.', color: '#f59e0b' },
    { name: 'Prompt PWNed', icon: TerminalSquare, desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.', color: '#22c55e' },
];

function RoomCard({ room, index }) {
    const mainColor = room.color;
    // For dual-color elements like Malware or OSINT
    const gradient = room.color2
        ? `linear-gradient(135deg, ${room.color}, ${room.color2})`
        : mainColor;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, borderColor: mainColor, boxShadow: `0 0 20px ${mainColor}40` }}
            className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col gap-4 group cursor-default transition-all duration-300 relative overflow-hidden"
        >
            {/* Background full-card overlay */}
            <div
                className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                style={{ background: gradient }}
            ></div>

            <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <room.icon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" style={{ color: mainColor }} />
                    </div>
                    <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                    >
                        {room.name}
                    </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-gray)' }}>
                    {room.desc}
                </p>
            </div>
        </motion.div>
    );
}

function EscapeRoomCard() {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="glass-card rounded-2xl p-8 sm:p-10 col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center gap-6 cursor-pointer relative overflow-hidden"
            style={{
                borderColor: hovered ? 'rgba(147, 51, 234, 0.6)' : 'rgba(0, 212, 255, 0.1)',
                boxShadow: hovered ? '0 0 60px rgba(147, 51, 234, 0.3), inset 0 0 60px rgba(147, 51, 234, 0.05)' : 'none',
                transition: 'all 0.5s ease',
            }}
        >
            {/* Violet glow backdrop */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
                }}
            />

            <div className="relative z-10">
                <AnimatePresence mode="wait">
                    {!hovered ? (
                        <motion.div
                            key="locked"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: -15 }}
                            transition={{ duration: 0.3 }}
                            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                            style={{ background: 'rgba(147, 51, 234, 0.15)' }}
                        >
                            <Lock className="w-10 h-10" style={{ color: 'var(--color-neon-violet)' }} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="unlocked"
                            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                            style={{ background: 'rgba(147, 51, 234, 0.3)', boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                        >
                            <Unlock className="w-10 h-10" style={{ color: 'var(--color-violet-glow)' }} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <h3
                    className="text-2xl sm:text-3xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                >
                    Escape Room
                </h3>
                <p className="text-sm sm:text-base max-w-md" style={{ color: 'var(--color-muted-gray)' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. ¿Podrás escapar a tiempo?
                </p>
            </div>
        </motion.div>
    );
}

export default function Rooms() {
    return (
        <section id="rooms" className="relative py-24 sm:py-32 px-4" style={{ background: 'var(--color-deep-navy)' }}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-sm uppercase tracking-[0.3em] mb-4 block"
                        style={{ color: 'var(--color-electric-blue)', fontFamily: 'var(--font-jetbrains)' }}
                    >
                        {'// Salas'}
                    </span>
                    <h2
                        className="text-3xl sm:text-5xl font-bold"
                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                    >
                        Rooms
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {rooms.map((room, i) => (
                        <RoomCard key={room.name} room={room} index={i} />
                    ))}
                    <EscapeRoomCard />
                </div>
            </div>
        </section>
    );
}
