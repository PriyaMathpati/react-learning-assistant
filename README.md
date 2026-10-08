# React Learning Assistant AI Chatbot

A responsive AI-powered chatbot built using React.js and Node.js to help users learn React.js and JavaScript concepts in simple language, with explanations and code examples.

## Features

- AI-powered answers to React.js and JavaScript questions
- Responsive chat interface
- Reusable React functional components
- State management using React Hooks
- Loading indicator while generating responses
- Error handling for API failures
- Chat history stored in browser localStorage
- Markdown formatting for AI responses

## Technologies Used

**Frontend:** React.js, JavaScript, HTML, CSS, Vite

**Backend:** Node.js, Express.js

**AI Integration:** Google Gemini API

**Other:** Git, GitHub, React Markdown

## Project Structure

```text
react-learning-assistant/
├── server/
│   └── server.js
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx
│   │   ├── ChatMessage.jsx
│   │   └── ChatWindow.jsx
│   ├── services/
│   │   └── openaiService.js
│   ├── App.jsx
│   └── App.css
├── .env
└── package.json
```

## How to Run the Project

**1. Clone the repository**

```bash
git clone https://github.com/PriyaMathpati/react-learning-assistant.git
cd react-learning-assistant
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure the Gemini API key**

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Never upload your real API key to GitHub.

**4. Start the backend server**

```bash
node server/server.js
```

**5. Start the React frontend in another terminal**

```bash
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173/`.

## React Concepts Demonstrated

- Functional components and props
- `useState` and `useEffect`
- Event handling
- Conditional rendering
- API integration using `fetch`
- Asynchronous programming with `async/await`
- Error handling and loading states
- Browser localStorage
- Responsive CSS design

## AI Integration Note

The application uses the Google Gemini API to generate responses. Gemini was selected as an alternative AI provider after OpenAI API credits were unavailable.

## Project Purpose

Developed as an internship assignment to demonstrate React.js fundamentals, AI API integration, responsive user interface development, and GitHub version control.