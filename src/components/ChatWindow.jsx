import { useEffect, useRef, useState } from 'react';
import InputBar from './InputBar';
import MessageBubble from './MessageBubble';

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Namaste! 👋 I am your CodeSwitch Support Assistant. Aap English ya Hindi mein sawaal pooch sakte hain.',
    timestamp: new Date().toISOString(),
  },
];

function ChatWindow() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Thanks for your message! I'm a UI mock right now, but I'm ready for future Hindi-English customer support flows.",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen flex-col bg-slate-100">
      <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-lg font-semibold text-slate-800 sm:text-xl">CodeSwitch Support Assistant</h1>
          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
            Understands Hindi-English mixed queries
          </p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-3 py-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="animate-fadeInUp text-sm text-slate-500">Bot is typing...</div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <InputBar
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSend={handleSend}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default ChatWindow;
