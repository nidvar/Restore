import { useState } from 'react';
import { Link } from 'react-router';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

import './RegisterPage.css';

function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPwdError, setConfirmPwdError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setConfirmPwdError(false);

    console.log(email);
    console.log(password);

    if(email == ''){
      setEmailError(true);
    }
    if(password == ''){
      setPasswordError(true);
    }
    if(password != confirmPwd){
      setConfirmPwdError(true);
    }
  }

  return (
    <div className='page'>
      <div className='page-container'>
        <h1>Register</h1>
        <form className='register-form' onSubmit={handleSubmit}>
          <Input type="email" label="Email" errorMessage="Field cannot be empty" error={emailError} grabData={setEmail} />
          <Input type="password" label="Password" errorMessage="Field cannot be empty" error={passwordError} grabData={setPassword} />
          <Input type="password" label="Confirm password" errorMessage="Passwords do not match" error={confirmPwdError} grabData={setConfirmPwd} />
          <Button buttonText="Register"></Button>
        </form>
        <div className='mt-10 p-10'>
          Already have an account? <Link to='/login' className='link'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
