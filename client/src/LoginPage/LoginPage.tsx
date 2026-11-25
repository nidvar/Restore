import { Link } from 'react-router';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='page'>
      <div className='page-container'>
        <h1>Login</h1>
        <form className='login-form'>
          <label>Email</label>
          <input type='email' />
          <label>Password</label>
          <input type='password' />
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have an account? <Link to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default LoginPage
