import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { FakeApi } from './FakeApi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FakeApi />
  </StrictMode>,
)
