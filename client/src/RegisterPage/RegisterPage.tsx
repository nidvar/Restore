import { Link } from 'react-router';
import './RegisterPage.css';

function RegisterPage() {

  return (
    <div className='page'>
      <div className='page-container'>
        <h1>Register</h1>
        <form className='register-form'>
          <label>Email</label>
          <input type='email' />
          <label>Password</label>
          <input type='password' />
          <label>Confirm Password</label>
          <input type='password' />
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have an account? <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default RegisterPage
