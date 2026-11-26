import { useState } from 'react';
import { Link } from 'react-router';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';

import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    console.log(email);
    console.log(password);

    if(email == ''){
      setEmailError(true);
    }
    if(password == ''){
      setPasswordError(true);
    }
  }

  return (
    <div className='page'>
      <div className='page-container'>
        <h1>Login</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <Input type="email" label="Email" errorMessage="Email error" error={emailError} grabData={setEmail} />
          <Input type="password" label="Password" errorMessage="Field cannot be empty" error={passwordError} grabData={setPassword} />
          <Button buttonText="Login"></Button>
        </form>
        <div className='mt-10 p-10'>
          Don't have an account? <Link to='/register' className='link'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
