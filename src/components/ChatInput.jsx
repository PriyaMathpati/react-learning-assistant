import { useState } from "react";

function ChatInput({ onSendMessage, disabled }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onSendMessage(input);
    setInput("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask about React or JavaScript..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
      />

      <button type="submit" disabled={disabled || !input.trim()}>
        Send
      </button>
    </form>
  );
}

export default ChatInput;