import React from 'react';
import './Input.css';

const Input = ({ message, sendMessage, setMessage })  => (
  <form className="chat__form">
    <input
      className="chat__input"
      type="text"
      placeholder="Введите сообщение"
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
    />
    <button className="chat__submit-btn" onClick={e => sendMessage(e)}>Отправить</button>
  </form>
);

export default Input;