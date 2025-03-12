'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ChatBubble from './ChatBubble';

// Carga dinámica del componente ChatbotModal
const ChatbotModal = dynamic(() => import('./ChatbotModal'), {
  ssr: false, // Deshabilita el renderizado en el servidor
  loading: () => <div>Cargando chatbot...</div>
});

export default function ChatbotWrapper() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openChatbot = () => setIsChatbotOpen(true);
  const closeChatbot = () => setIsChatbotOpen(false);

  if (!isClient) return <ChatBubble onClick={() => {}} />;

  return (
    <>
      <ChatBubble onClick={openChatbot} />
      {isChatbotOpen && (
        <Suspense fallback={<div>Cargando chatbot...</div>}>
          <ChatbotModal isOpen={isChatbotOpen} onClose={closeChatbot} />
        </Suspense>
      )}
    </>
  );
}