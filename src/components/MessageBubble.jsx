function MessageBubble({ message }) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full animate-fadeInUp`}>
      <div className="max-w-[85%] sm:max-w-[70%]">
        <div
          className={`rounded-2xl px-4 py-2 shadow-sm ${
            isUser
              ? 'rounded-br-md bg-blue-500 text-white'
              : 'rounded-bl-md bg-slate-200 text-slate-900'
          }`}
        >
          <p className="text-sm sm:text-base leading-relaxed">{message.text}</p>
        </div>
        <p className="mt-1 px-1 text-[11px] text-slate-400">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;
