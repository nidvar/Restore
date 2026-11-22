import './LoginPage.css';

function LoginPage() {
  return (
    <div className='login-page page'> 
      <h1 className='text-center'>Login</h1>
      <form className='login-form'>
        <input type='text' />
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
