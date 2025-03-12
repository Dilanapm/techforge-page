'use client';
import React, { useEffect, useState } from 'react';
import styles from './ChatbotModal.module.css';
import 'regenerator-runtime/runtime';

const ChatbotModal = ({ isOpen, onClose }) => {
  const [ChatWindow, setChatWindow] = useState(null);
  const projectID = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID || '';

  useEffect(() => {
    // Importación dinámica del componente ChatWindow
    import('@voiceflow/react-chat').then((module) => {
      setChatWindow(() => module.ChatWindow);
    }).catch(error => {
      console.error("Error loading Voiceflow chat:", error);
    });
  }, []);

  if (!isOpen) return null;
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h3>Chatbot Asistente</h3>
          <button onClick={onClose} className={styles.closeButton}>×</button>
        </div>
        <div className={styles.chatContainer}>
          {ChatWindow && projectID ? (
            <ChatWindow
              projectID={projectID}
              versionID="production"
              url="https://general-runtime.voiceflow.com"
              title="Asistente Virtual"
              userID={`user-${Math.random().toString(36).substring(7)}`}
              autostart
              styling={{
                height: '100%',
                width: '100%'
              }}
            />
          ) : (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              Cargando chatbot...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;