import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='inner-navbar'>
        <div className='navbar-icon-container'>
          <img src='../../../images/c-sharp.png' />
          <p>ASP.NET Core</p>
        </div>
        <div className='toggle-theme-container'>
          <p>Dark/Light</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
