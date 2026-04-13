import { motion } from 'framer-motion';

const images = [
    { src: '/assets/recap/20250822_140256.jpg', h: 'h-52' },
    { src: '/assets/recap/20250822_140317.jpg', h: 'h-80' },
    { src: '/assets/recap/20250822_141752.jpg', h: 'h-64' },
    { src: '/assets/recap/whatsapp_image.jpeg', h: 'h-72' },
    { src: '/assets/recap/_IMG3776.jpg', h: 'h-56' },
    { src: '/assets/recap/_IMG3783.jpg', h: 'h-68' },
    { src: '/assets/recap/_IMG3785.jpg', h: 'h-48' },
    { src: '/assets/recap/_IMG3791.jpg', h: 'h-60' },
    { src: '/assets/recap/_IMG3793.jpg', h: 'h-80' },
];

export default function Recap() {
    return (
        <section id="recap" className="relative py-24 sm:py-32 px-4" style={{ background: 'var(--color-deep-navy)' }}>
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
                        {'// Recap'}
                    </span>
                    <h2
                        className="text-3xl sm:text-5xl font-bold"
                        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-soft-white)' }}
                    >
                        HackerTech 2025
                    </h2>
                </motion.div>

                {/* Masonry Grid using CSS columns */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                            className="break-inside-avoid group"
                        >
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={img.src}
                                    alt={`HackerTech 2025 - Foto ${index + 1}`}
                                    className={`w-full ${img.h} object-cover transition-transform duration-500 group-hover:scale-105`}
                                    loading="lazy"
                                />
                                {/* Overlay on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(147, 51, 234, 0.4), transparent)',
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom gradient line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, var(--color-electric-blue), var(--color-neon-violet), transparent)' }}
            />
        </section>
    );
}
