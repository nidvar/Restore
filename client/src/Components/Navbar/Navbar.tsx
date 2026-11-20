import './Navbar.css';

type toggleThemeType = {
  toggleTheme: ()=> void;
}

function Navbar({toggleTheme}: toggleThemeType) {
  return (
    <div className="navbar">
      <div className='inner-navbar'>
        <div className='navbar-icon-container'>
          <img src='../../../images/c-sharp.png' />
          <p>ASP.NET Core</p>
        </div>
        <div className='toggle-theme-container'>
          <p onClick={toggleTheme}>Dark/Light</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
