import { useEffect, useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import { sendMessageToAI } from "./services/openaiService";
import "./App.css";


function App() {
  const [messages, setMessages] = useState(() => {
  const savedMessages = localStorage.getItem("chatMessages");

  return savedMessages ? JSON.parse(savedMessages) : [];
});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  localStorage.setItem("chatMessages", JSON.stringify(messages));
}, [messages]);


  const handleSendMessage = async (text) => {
  const userMessage = {
    role: "user",
    content: text,
  };

  setMessages((prevMessages) => [...prevMessages, userMessage]);
  setLoading(true);

  try {
    const aiResponse = await sendMessageToAI(text);

    const aiMessage = {
      role: "assistant",
      content: aiResponse,
    };

    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  } catch (error) {
    const errorMessage = {
      role: "assistant",
      content: "Sorry, I couldn't get a response. Please try again.",
    };

    setMessages((prevMessages) => [...prevMessages, errorMessage]);
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="app">
      <header className="header">
        <h1>🤖 React Learning Assistant</h1>
        <p>Ask me anything about React.js and JavaScript</p>
      </header>

      <main className="chat-container">
        <ChatWindow messages={messages} loading={loading} />

        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={loading}
        />
      </main>
    </div>
  );
}

export default App;