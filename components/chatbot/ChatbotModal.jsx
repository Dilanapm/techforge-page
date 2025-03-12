// components/chatbot/ChatbotModal.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ChatbotModal.module.css';
import { ChatWindow } from '@voiceflow/react-chat';

const ChatbotModal = ({ isOpen, onClose }) => {
  // Asegúrate de que estas variables estén definidas en tu .env.local
  const projectID = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_VOICEFLOW_API_KEY;

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h3>Chatbot Asistente</h3>
          <button onClick={onClose} className={styles.closeButton}>×</button>
        </div>
        <div className={styles.chatContainer}>
          {/* Aquí usamos el componente ChatWindow de Voiceflow */}
          <ChatWindow
            versionID="development"
            projectID={projectID}
            apiKey={apiKey}
            title="Asistente Virtual"
            userID="user123" // Puedes generar un ID único para cada usuario
            autostart
            styling={{
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;