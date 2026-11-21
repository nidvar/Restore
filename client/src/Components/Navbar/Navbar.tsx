import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router';

import './Navbar.css';

function Navbar() {
    const [theme, setTheme] = useState<string>(() => {
      return localStorage.getItem('theme') || 'light';
    });

  const toggle = ()=>{
    const theme = document.documentElement.getAttribute('data-theme');
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if(document.documentElement.getAttribute('data-theme') === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }

  return (
    <div className="navbar">
      <div className='inner-navbar'>
        <div className='navbar-icon-container'>
          <Link to="/"><img src='../../../images/c-sharp.png' /></Link>
          <Link to="/">ASP.NET Core</Link>
        </div>
        <div className='nav-items-container'>
          <Link to="/login">LOGIN</Link>
          <Link to="/catalog">CATALOG</Link>
          <div className='toggle-theme-container' onClick={toggle}>
            {
              theme != "light"?
              <Sun />:
              <Moon />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
