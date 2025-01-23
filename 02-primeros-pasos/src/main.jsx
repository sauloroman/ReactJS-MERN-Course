import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp value={10} />
  </StrictMode>
)
