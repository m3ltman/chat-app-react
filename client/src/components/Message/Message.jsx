import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';


const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase();

  let isSentByCurrentUser = false;

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
     isSentByCurrentUser
      ? (
        <div className="message message_sent">
          <p className="message__author message__author_sender">{trimmedName}</p>
          <div className="message__wrapper message__wrapper_sent">
            <p className="message__text message__text_sent">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="message message_received">
            <div className="message__wrapper message__wrapper_received">
              <p className="message__text message__text_received">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="message__author message__author_receiver">{user}</p>
          </div>
        )
  )     
};

export default Message;