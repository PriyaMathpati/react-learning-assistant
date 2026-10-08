
import ReactMarkdown from "react-markdown";

function ChatMessage({ message }) {
  return (
    <div className={`message ${message.role}`}>
      <div className="message-content">
        <span className="message-sender">
          {message.role === "user" ? "You" : "AI Assistant"}
        </span>

        {message.role === "assistant" ? (
          <ReactMarkdown>{message.content}</ReactMarkdown>
        ) : (
          <p>{message.content}</p>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
