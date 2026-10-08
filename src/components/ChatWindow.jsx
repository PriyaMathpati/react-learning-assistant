import ChatMessage from "./ChatMessage";

function ChatWindow({ messages, loading }) {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <div className="welcome-message">
          <h2>👋 Hi! I'm your React Learning Assistant</h2>
          <p>
            Ask me anything about React.js or JavaScript.
          </p>
        </div>
      ) : (
        messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))
      )}

      {loading && (
        <div className="message assistant">
          <div className="message-content">
            <span className="message-sender">AI Assistant</span>
            <p>Thinking...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;