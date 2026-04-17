/**
 * HackerTech — Easter Eggs Module
 * Three hidden challenges for the curious hacker.
 */

// ═══════════════════════════════════════════════════════
// EASTER EGG 1: Console ASCII Art Flag
// ═══════════════════════════════════════════════════════
export function initConsoleFlag() {
    const art = `
%c
  ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ ████████╗███████╗ ██████╗██╗  ██╗
  ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔════╝██║  ██║
  ███████║███████║██║     █████╔╝ █████╗  ██████╔╝   ██║   █████╗  ██║     ███████║
  ██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗   ██║   ██╔══╝  ██║     ██╔══██║
  ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║   ██║   ███████╗╚██████╗██║  ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
  
       ░░░░░░░░░░░░░░░░▒▒▓▓██  ¡Bienvenido, Hacker!  ██▓▓▒▒░░░░░░░░░░░░░░░░
  
       > Nivel 1 completado.
       > Obtener logro: https://app.hackertech.com.ar/achievements/d7h2qgnle0vc73bl6seg
       > Flag{UTN_H4CK_2026}
  
       ¿Podés encontrar los otros easter eggs? 👀
`;

    console.log(art, 'color: #9333ea; font-family: monospace; font-size: 10px;');
}

// ═══════════════════════════════════════════════════════
// EASTER EGG 2: Konami Code Listener
// ═══════════════════════════════════════════════════════
export function initKonamiCode(onActivate) {
    const sequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA',
    ];
    let position = 0;

    const handler = (e) => {
        if (e.code === sequence[position]) {
            position++;
            if (position === sequence.length) {
                position = 0;
                onActivate();
            }
        } else {
            position = 0;
        }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
}

// ═══════════════════════════════════════════════════════
// EASTER EGG 3: Hidden JS Logic (Reverse Engineering)
// ═══════════════════════════════════════════════════════
export function initHiddenFunction(showModal) {
    // Obfuscated/minified function on window.
    // The user must inspect the source, understand the logic,
    // and call: window.bypassFirewall("HACKERTECH")
    // The check: the argument must equal the XOR decryption of the stored key.

    const _0x4f = [72, 65, 67, 75, 69, 82, 84, 69, 67, 72]; // "HACKERTECH" char codes
    const _0xk3y = _0x4f.map((c) => c ^ 0x42); // XOR with 0x42

    window.bypassFirewall = function (p) {
        if (!p || typeof p !== 'string') {
            console.log(
                '%c[FIREWALL] Access denied. Parámetro inválido. Hint: inspeccionar _0xk3y en el source...',
                'color: #ef4444; font-family: monospace;'
            );
            return false;
        }
        const decoded = _0xk3y.map((c) => String.fromCharCode(c ^ 0x42)).join('');
        if (p === decoded) {
            showModal();
            return true;
        } else {
            console.log(
                '%c[FIREWALL] Access denied. La clave no es correcta. Seguí investigando el código...',
                'color: #ef4444; font-family: monospace;'
            );
            return false;
        }
    };

    // Leave a breadcrumb in the DOM for truly curious hackers
    const comment = document.createComment(
        ' 🔓 window.bypassFirewall(key) — Decodificá _0xk3y con XOR 0x42 para obtener la clave '
    );
    document.body.appendChild(comment);
}
