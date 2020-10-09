import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';
import _ from 'lodash';

const Messages = ({ messages, name }) => {
  if (messages.length === 0) {
    return null;
  }
  
  return(
    <ScrollToBottom className="messages">
      <ul className="messages__list">
        {messages.map(message => 
          <li key={_.uniqueId()}>
            <Message message={message} name={name} />
          </li>
        )}
      </ul>
    </ScrollToBottom>
  );
};

export default Messages;