import { useParams } from 'react-router-dom';
import '../styles/CharacterDetail.css';

// Define the type for a character
interface Character {
  name: string;
  race: string;
  classType: string;
}

// Define the props type for CharacterDetail
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
    </div>
  );
};

export default CharacterDetail;
