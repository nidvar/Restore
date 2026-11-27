import './Button.css';

type ButtonType = {
  buttonText: string;
  fn: ()=> void;
}

function Button({buttonText, fn}: ButtonType) {
  return (
    <button className='button' onClick={fn}>{buttonText}</button>
  )
}

export default Button
