'use client';

import { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';

const VoiceflowWidget = () => {
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (scriptAdded.current) return; // Evita cargar el script múltiples veces
    scriptAdded.current = true;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.async = true;
    script.onload = () => {
      window.voiceflow?.chat?.load?.({
        verify: { projectID: '67d0aba888a3f48649db3a87' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: 'https://runtime-api.voiceflow.com',
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default function ChatbotWrapper() {
  return (
    <>
      <ChatBubble onClick={() => window.voiceflow?.chat?.open()} />
      <VoiceflowWidget />
    </>
  );
}
