import './Button.css';

function Button({buttonText}: {buttonText: string}) {
  return (
    <button className='button'>{buttonText}</button>
  )
}

export default Button
