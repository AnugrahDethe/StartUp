import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/* ── Custom cursor ───────────────────────────────────────────────── */
function initCursor() {
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = 0, my = 0;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = `${mx}px`;
    dot.style.top   = `${my}px`;
    ring.style.left = `${mx}px`;
    ring.style.top  = `${my}px`;
  });

  // Scale ring on interactive elements
  const hoverEl = 'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverEl)) {
      dot.style.transform  = 'translate(-50%,-50%) scale(1.8)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
      ring.style.borderColor = 'rgba(99,102,241,0.9)';
      ring.style.background  = 'rgba(99,102,241,0.06)';
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverEl)) {
      dot.style.transform  = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.borderColor = 'rgba(99,102,241,0.5)';
      ring.style.background  = 'transparent';
    }
  });

  // Restore default cursor for text inputs
  document.querySelectorAll('input, textarea').forEach(el => {
    el.style.cursor = 'text';
  });
}

initCursor();

createRoot(document.getElementById('root')).render(<App />);
