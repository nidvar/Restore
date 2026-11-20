import { useState } from 'react';
import './Navbar.css';
import { Moon, Sun } from 'lucide-react';

type navbarPropsType = {
  toggleTheme: ()=> void;
}

function Navbar({toggleTheme}: navbarPropsType) {

  const [theme, setTheme] = useState<string>('');

  const toggle = ()=>{
    toggleTheme();
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
          <img src='../../../images/c-sharp.png' />
          <p>ASP.NET Core</p>
        </div>
        <div className='toggle-theme-container' onClick={toggle}>
          {
            theme != "light"?
            <Sun />:
            <Moon />
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
