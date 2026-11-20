import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar.tsx'
import App from './App.tsx'

import './index.css'
import './Dark.css'
import './Light.css'

const toggleTheme = ()=>{
  const theme = document.documentElement.getAttribute('data-theme');
  if(theme === "light"){
    document.documentElement.setAttribute('data-theme', "dark");
  }else{
    document.documentElement.setAttribute('data-theme', "light");
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar toggleTheme={toggleTheme}/>
    <App />
  </StrictMode>,
)
