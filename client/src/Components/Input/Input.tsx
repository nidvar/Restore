import { useState } from 'react';
import './Input.css';

type InputPropsType = {
    type: string;
    label: string;
    errorMessage: string;
    error: boolean;
    grabData: (e:string)=> void;
}

function Input({type, errorMessage, label, error, grabData}:InputPropsType) {

  const [text, setText] = useState('');

  return (
    <div className='input-container'>
        <label>{label}</label>
        <input 
            className='input'
            type={type}
            value={text}
            onChange={function(e){grabData(e.target.value); setText(e.target.value)}}
        />
        {error?<p className='error-message'>{errorMessage}</p>:null}
    </div>
  )
}

export default Input
