import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { UsersApp } from './UsersApp'
import { FakeApi } from './FakeApi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp/>
    <FakeApi />
  </StrictMode>,
)
