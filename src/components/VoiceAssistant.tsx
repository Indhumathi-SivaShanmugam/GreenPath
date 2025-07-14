import React, { useEffect, useRef, useState } from 'react';

const getReply = (userSaid: string) => {
  const text = userSaid.toLowerCase();
  if (text.includes('good') || text.includes('fine') || text.includes('well') || text.includes('great')) {
    return "I'm glad to hear that!";
  } else if (text.includes('not') || text.includes('bad') || text.includes('sad') || text.includes('tired')) {
    return "I'm sorry to hear that. If you need anything, I'm here to help!";
  } else if (text.trim() === '') {
    return "I didn't catch that. Could you say it again?";
  } else {
    return "Thank you for sharing!";
  }
};

const VoiceAssistant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [userSaid, setUserSaid] = useState<string | null>(null);
  const [assistantReply, setAssistantReply] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Handle click outside to close
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Voice interaction
  useEffect(() => {
    if (!open) return;
    setUserSaid(null);
    setAssistantReply(null);
    // Speak "How are you?"
    const utterance = new window.SpeechSynthesisUtterance('How can I help you today?');
    window.speechSynthesis.speak(utterance);

    // Listen for a response (if supported)
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onresult = (event: any) => {
        console.log('You said:', event.results[0][0].transcript);
        setUserSaid(event.results[0][0].transcript);
      };
      recognition.onerror = (event: any) => {
        console.error('Recognition error:', event.error);
      };
      recognition.start();
    }
  }, [open]);

  // Stop recognition when widget closes
  useEffect(() => {
    if (!open && recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
    }
  }, [open]);

  return (
    <div ref={widgetRef} style={{ position: 'relative', zIndex: 1000 }}>
      {/* Widget Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#43a047',
            color: '#fff',
            border: 'none',
            boxShadow: '0 2px 8px rgba(67,160,71,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: 28,
          }}
          aria-label="Activate voice assistant"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22"/><rect x="9" y="5" width="6" height="11" rx="3"/></svg>
        </button>
      )}
      {/* Assistant UI */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            right: 0,
            width: 280,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(67,160,71,0.18)',
            padding: '1.5rem 1rem 1rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'all 0.2s',
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'none',
              border: 'none',
              color: '#888',
              fontSize: 20,
              cursor: 'pointer',
            }}
            aria-label="Close voice assistant"
          >
            ×
          </button>
          <h2 style={{ margin: '0 0 0.5rem 0', fontSize: 20, color: '#43a047' }}>Voice Assistant</h2>
          <p style={{ margin: 0, fontSize: 16 }}>Asking: How can I help you today?</p>
          {userSaid !== null && (
            <div style={{ marginTop: 16, width: '100%' }}>
              <div style={{ fontWeight: 600, color: '#222', marginBottom: 4 }}>You said:</div>
              <div style={{ background: '#f1f8e9', borderRadius: 8, padding: '8px 12px', color: '#222' }}>{userSaid || <em>(no response)</em>}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
