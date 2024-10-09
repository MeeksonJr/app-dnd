// src/pages/Campaign.tsx
import '../styles/Campaign.css';
import ChatInterface from '../components/ChatInterface';
import DiceRoll from '../components/DiceRoll';

const Campaign = () => {
  return (
    <div className="campaign">
      <h2>Current Campaign</h2>
      <ChatInterface />
      <DiceRoll />
    </div>
  );
};

export default Campaign;
