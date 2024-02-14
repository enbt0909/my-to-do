import React, { useState } from 'react';
import './Input.css';

function Input(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    props.onSave(text);
    setText('');
  };

  return (
    <div className="input-container">
      <input type="text" value={text} onChange={handleChange} className="input-field" placeholder='hier eingeben und' />
      <p className='char__counter' style={{ fontSize: '16px' }}>{text.length}</p>
      <button onClick={handleSave} className="save-button">Speichern</button>
    </div>
  );
}

export default Input;