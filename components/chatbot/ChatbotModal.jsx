// 'use client';
// import React, { useEffect, useState, useRef } from 'react';
// import styles from './ChatbotModal.module.css';

// const ChatbotModal = ({ isOpen, onClose }) => {
//   const ChatWindowRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const projectID = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID || '';

//   useEffect(() => {
//     let isMounted = true;

//     if (!ChatWindowRef.current) {
//       import('@voiceflow/react-chat')
//         .then((module) => {
//           if (isMounted) {
//             ChatWindowRef.current = module.ChatWindow;
//             setIsLoaded(true);
//           }
//         })
//         .catch(error => console.error("Error loading Voiceflow chat:", error));
//     }

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContainer}>
//         <div className={styles.modalHeader}>
//           <h3>Chatbot Asistente</h3>
//           <button onClick={onClose} className={styles.closeButton}>×</button>
//         </div>
//         <div className={styles.chatContainer}>
//           {isLoaded && ChatWindowRef.current && projectID ? (
//             <ChatWindowRef.current
//               projectID={projectID}
//               versionID="production"
//               url="https://general-runtime.voiceflow.com"
//               title="Asistente Virtual"
//               userID={`user-${Math.random().toString(36).substring(7)}`}
//               autostart
//               styling={{
//                 height: '100%',
//                 width: '100%'
//               }}
//             />
//           ) : (
//             <div style={{ padding: '20px', textAlign: 'center' }}>
//               Cargando chatbot...
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatbotModal;
