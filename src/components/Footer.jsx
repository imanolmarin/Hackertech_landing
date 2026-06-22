import { Heart, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            className="relative py-12 px-4 text-center"
            style={{ background: 'var(--color-dark-surface)' }}
        >
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, var(--color-electric-blue), var(--color-neon-violet), transparent)' }}
            />

            {/* Institutional logos */}
            <div className="flex items-center justify-center gap-10 mb-8">
                <a
                    href="https://www.frc.utn.edu.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="UTN – Facultad Regional Córdoba"
                    style={{ opacity: 0.75, transition: 'opacity 0.3s, filter 0.3s', filter: 'grayscale(40%)' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = 0.75; e.currentTarget.style.filter = 'grayscale(40%)'; }}
                >
                    <img
                        src="/assets/UTN_logo.jpg"
                        alt="UTN Facultad Regional Córdoba"
                        style={{ height: '52px', width: 'auto', objectFit: 'contain', borderRadius: '6px' }}
                    />
                </a>

                <div
                    style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, transparent, var(--color-electric-blue), transparent)',
                    }}
                />

                <a
                    href="https://gissic.frc.utn.edu.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GISSIC"
                    style={{ opacity: 0.75, transition: 'opacity 0.3s, filter 0.3s', filter: 'grayscale(40%)' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = 0.75; e.currentTarget.style.filter = 'grayscale(40%)'; }}
                >
                    <img
                        src="/assets/gissic-b1s.png"
                        alt="GISSIC"
                        style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                    />
                </a>
            </div>

            <p
                className="text-sm flex items-center justify-center gap-2 mb-4"
                style={{ color: 'var(--color-muted-gray)', fontFamily: 'var(--font-jetbrains)' }}
            >
                {'<'} HackerTech 2026 — UTN-FRC
                <Heart className="w-4 h-4 inline" style={{ color: 'var(--color-neon-violet)' }} />
                {' />'}
            </p>
            <div className="flex justify-center">
                <a
                    href="https://www.instagram.com/_hackertech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-electric-blue)' }}
                >
                    <Instagram className="w-5 h-5" />
                    <span style={{ fontFamily: 'var(--font-jetbrains)' }}>Seguinos en Instagram</span>
                </a>
            </div>
        </footer>
    );
}
