// src/pages/CharacterDetail.tsx
import { useParams } from 'react-router-dom';
import '../styles/CharacterDetail.css';


interface Character {
  name: string;
  race: string;
  classType: string;
}

interface CharacterDetailProps {
  characters: Character[];
}
const CharacterDetail: React.FC<CharacterDetailProps> = ({ characters }) => {
  const { id } = useParams<{ id: string }>();
  const character = characters[parseInt(id ?? '', 10)];

  if (!character) {
    return <h2>Character not found</h2>;
  }

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>Race: {character.race}</p>
      <p>Class: {character.classType}</p>
      {/* Add more character details as needed */}
    </div>
  );
};

export default CharacterDetail;
