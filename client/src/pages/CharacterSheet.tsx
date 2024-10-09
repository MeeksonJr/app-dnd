// src/pages/CharacterSheet.tsx
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import CharacterCreation from '../components/CharacterCreation';
import { Character } from '../types/Character'; // Import the Character type
import '../styles/CharacterSheet.css';

const CharacterSheet = () => {
  const [characters, setCharacters] = useState<Character[]>([]); // Specify the type here

  const handleCharacterCreate = (newCharacter: Character) => { // Specify type for newCharacter
    setCharacters([...characters, newCharacter]);
  };

  return (
    <div className="character-sheet">
      <h2>Your Characters</h2>
      <CharacterCreation onCharacterCreate={handleCharacterCreate} />
      <div className="character-list">
        {characters.map((character, index) => (
          <Link key={index} to={`/character/${index}`} className="character-item">
            {character.name} (Race: {character.race}, Class: {character.classType})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterSheet;
