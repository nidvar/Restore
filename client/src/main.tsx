import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar.tsx'
import App from './App.tsx'

import './index.css'
import './Dark.css'
import './Light.css'

document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || "light");

const toggleTheme = ()=>{
  const theme = document.documentElement.getAttribute('data-theme');
  const next = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar toggleTheme={toggleTheme} />
    <App />
  </StrictMode>,
)
