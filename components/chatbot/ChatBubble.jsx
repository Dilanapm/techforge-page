// components/chatbot/ChatBubble.jsx
'use client';  // Esta directiva es crucial para indicar que es un Client Component
import React from 'react';
import styles from './ChatBubble.module.css';

const ChatBubble = ({ onClick }) => {
  return (
    <button 
      className={styles.chatBubble} 
      onClick={onClick}
      aria-label="Abrir chatbot"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 0 1-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-8 8c0 1.335.326 2.618.94 3.766l.35.654-.656 2.954 2.954-.654.654.35A7.963 7.963 0 0 0 12 20a8 8 0 0 0 0-16zm1 3v5h4v2h-6V7h2z" fill="currentColor"/>
      </svg>
    </button>
  );
};

export default ChatBubble;
