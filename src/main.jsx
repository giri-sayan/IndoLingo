import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Clear any legacy theme tokens
if (typeof window !== 'undefined') {
  if (localStorage.getItem('bhasha_theme') === 'saffron') {
    localStorage.removeItem('bhasha_theme');
  }
}

// Register Service Worker for 100% Free PWA & Offline Support
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      reg.update();
    }).catch((err) => {
      console.warn('Service worker registration failed:', err);
    });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
