import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/chat?name=${name}&room=${room}`);
  };

  return (
    <section className="join">
      <div className="join__wrapper">
        <h1 className="join__header">Вход</h1>
        <form className="join__form" onSubmit={handleSubmit}>
          <input 
            placeholder="Ваше имя" 
            className="join__input" 
            type="text" 
            required
            onChange={e => setName(e.target.value)} 
          />
          <input 
            placeholder="Имя комнаты" 
            className="join__input mt-20" 
            type="text"
            required
            onChange={(e) => setRoom(e.target.value)} 
          />
          <button className="join__button mt-20" type="submit">Войти</button>
        </form>
      </div>
    </section>
  );
};

export default Join;