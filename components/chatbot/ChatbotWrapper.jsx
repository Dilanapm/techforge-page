'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ChatBubble from './ChatBubble';

// Carga dinámica del componente ChatbotModal
const ChatbotModal = dynamic(() => import('./ChatbotModal'), {
  ssr: false, // Deshabilita el renderizado en el servidor
  loading: () => <div>Cargando chatbot...</div>
});

const VoiceflowWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67d0aba888a3f48649db3a87' }, // Tu projectID de Voiceflow
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: 'https://runtime-api.voiceflow.com',
        },
      });
    };
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

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
      {/* Cargar el widget de Voiceflow */}
      <VoiceflowWidget />
    </>
  );
}
