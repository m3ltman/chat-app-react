import React from 'react';
import closeIcon from '../../images/closeIcon.png';
import onlineIcon from '../../images/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room })  => (
  <div className="info-bar">
    <div className="info-bar__left-container">
      <img className="info-bar__online-icon" src={onlineIcon} alt="Иконка статуса"/>
      <h3>{room}</h3>
    </div>
    <div className="info-bar__right-container">
      <a href="/"><img src={closeIcon} alt="Иконка закрытия чата"/></a>
    </div>
  </div>
);

export default InfoBar;