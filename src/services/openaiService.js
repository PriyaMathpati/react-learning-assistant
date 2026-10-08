const API_URL = "http://localhost:5000/api/chat";

export const sendMessageToAI = async (message) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to get AI response");
  }

  return data.reply;
};