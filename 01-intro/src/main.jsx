import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'

// import './bases/01-const-let.js'
// import './bases/02-template-string.js'
// import './bases/03-objeto-literal.js'
// import './bases/04-arrays.js'
// import './bases/05-funciones.js'
// import './bases/06-deses-obj.js'
// import './bases/07-deses-arr.js'
// import './bases/08-imp-exp.js'
// import './bases/09-promesas.js'
// import './bases/10-fetch.js'
// import './bases/11-async-await.js'
import './bases/12-ternario.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
