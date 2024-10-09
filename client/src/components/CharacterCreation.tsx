// src/components/CharacterCreation.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CharacterCreation.css';

const CharacterCreation = ({ onCharacterCreate }) => {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [classType, setClassType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCharacter = { name, race, classType };
    onCharacterCreate(newCharacter);
    navigate('/character'); // Navigate to character sheet after creation
  };

  return (
    <form className="character-creation" onSubmit={handleSubmit}>
      <h2>Create Your Character</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Race"
        value={race}
        onChange={(e) => setRace(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Class"
        value={classType}
        onChange={(e) => setClassType(e.target.value)}
        required
      />
      <button type="submit">Create Character</button>
    </form>
  );
};

export default CharacterCreation;