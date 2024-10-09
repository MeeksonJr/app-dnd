// src/components/ChatInterface.tsx
import{ useState } from 'react';
import '../styles/ChatInterface.css';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSend = () => {
    setChatHistory([...chatHistory, `User: ${input}`, `ChatGPT: [Response]`]); // Replace with actual response
    setInput('');
  };

  return (
    <div className="chat-interface">
      <h2>Chat with the Dungeon Master</h2>
      <div className="chat-box">
        {chatHistory.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type your action..." 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInterface;
