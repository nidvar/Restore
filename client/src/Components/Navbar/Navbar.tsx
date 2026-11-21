import { useState } from 'react';
import './Navbar.css';
import { Moon, Sun } from 'lucide-react';

function Navbar() {
  const [theme, setTheme] = useState<string>('');
  
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
          <a href="/"><img src='../../../images/c-sharp.png' /></a>
          <a href="/">ASP.NET Core</a>
        </div>
        <div className='nav-items-container'>
          <a href="/catalog">Catalog</a>
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
