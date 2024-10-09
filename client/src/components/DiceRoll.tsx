// src/components/DiceRoll.tsx
import { useState } from 'react';
import '../styles/DiceRoll.css';

const DiceRoll = () => {
  const [result, setResult] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const diceValue = Math.floor(Math.random() * 20) + 1; // Random value between 1 and 20
      setResult(diceValue);
      setRolling(false);
    }, 2000);
  };

  return (
    <div className="dice-roll">
      <button onClick={rollDice}>Roll Dice</button>
      {rolling && <p>Dice is spinning...</p>}
      {result !== null && <p>Rolled: {result}</p>}
    </div>
  );
};

export default DiceRoll;
