import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainApp } from './MainApp'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </StrictMode>,
)
