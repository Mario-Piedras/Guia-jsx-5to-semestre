import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
