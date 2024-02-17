import React, { useState } from 'react';
import './Input.css';

function Input(props) {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    props.onSave(text);
    setText('');
    setMessage('GESPEICHERT');

    setTimeout(() => {
      setMessage('');
    }, 1000);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="input-container">
      <input type="text" value={text} onChange={handleChange} onKeyPress={handleKeyPress} className="input-field" placeholder='hier eingeben und' />
      <p className='char__counter' style={{ fontSize: '16px' }}>{text.length}</p>
      <button onClick={handleSave} className="save-button">Speichern</button>
      {message && <p className='saved'>{message}</p>}
    </div>
  );
}

export default Input;