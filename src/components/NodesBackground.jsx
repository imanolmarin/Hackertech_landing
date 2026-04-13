import { useRef, useEffect, useCallback } from 'react';

export default function NodesBackground() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const nodesRef = useRef([]);
    const animRef = useRef(null);

    const initNodes = useCallback((width, height) => {
        const count = Math.floor((width * height) / 12000);
        const nodes = [];
        for (let i = 0; i < count; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
            });
        }
        return nodes;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            nodesRef.current = initNodes(canvas.width, canvas.height);
        };

        const handleMouse = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouse);

        const draw = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            nodesRef.current.forEach((node) => {
                // subtle mouse attraction
                const dx = mx - node.x;
                const dy = my - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    node.vx += dx * 0.00003;
                    node.vy += dy * 0.00003;
                }

                node.x += node.vx;
                node.y += node.vy;

                // bounce off edges
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // clamp position
                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));

                // draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
                ctx.fill();
            });

            // draw connections
            const connectionDist = 120;
            for (let i = 0; i < nodesRef.current.length; i++) {
                for (let j = i + 1; j < nodesRef.current.length; j++) {
                    const a = nodesRef.current[i];
                    const b = nodesRef.current[j];
                    const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
                    if (d < connectionDist) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - d / connectionDist)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, [initNodes]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
        />
    );
}
