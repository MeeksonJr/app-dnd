import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import CharacterCreation from '../components/CharacterCreation';
import { Character } from '../types/Character'; // Import the Character type
import '../styles/CharacterSheet.css';

const CharacterSheet: React.FC = () => {
  // State to manage the list of characters
  const [characters, setCharacters] = useState<Character[]>([]); 

  // Handler to add a new character to the list
  const handleCharacterCreate = (newCharacter: Character) => {
    setCharacters([...characters, newCharacter]); // Add the new character to the existing list
  };

  return (
    <div className="character-sheet">
      <h2>Your Characters</h2>
      
      {/* Component for creating a new character */}
      <CharacterCreation onCharacterCreate={handleCharacterCreate} />
      
      {/* List of created characters */}
      <div className="character-list">
        {characters.map((character, index) => (
          <Link
            key={index} // Use index as the key, consider unique IDs for real-world apps
            to={`/character/${index}`} // Route to the character details page
            className="character-item"
          >
            {character.name} (Race: {character.race}, Class: {character.classType})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterSheet;
