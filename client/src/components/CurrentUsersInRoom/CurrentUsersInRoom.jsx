import React from 'react';
import './CurrentUsersInRoom.css';
import _ from 'lodash';

const CurrentUsersInRoom = ({ users })  => (
  <div className="users-online">
    <p className="users-online__header">Сейчас online:</p>
    <ul className="users-online__list">
      {users.map(user => 
        <li className="users-online__user" key={_.uniqueId()}>
          {user.name}
        </li>
      )}
    </ul>
  </div>
);

export default CurrentUsersInRoom;