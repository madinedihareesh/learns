import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App1 } from './App1'
import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <BrowserRouter>
   <App1/>
   </BrowserRouter>
  </StrictMode>,
)
