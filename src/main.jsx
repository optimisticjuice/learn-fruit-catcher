import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/* import the index.css file affects the global styles */
import "./index.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
