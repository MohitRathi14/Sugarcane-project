import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add preload class to body for better initial load performance
document.body.classList.add('preload')

// Remove preload after a short delay to enable animations
setTimeout(() => {
  document.body.classList.remove('preload')
}, 100)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
