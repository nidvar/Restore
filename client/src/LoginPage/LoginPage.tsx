import './LoginPage.css';

function LoginPage() {
  return (
    <div className='page'>
      <div className='page-container'>
        <h1>Login</h1>
        <form className='login-form'>
          <input type='text' />
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
