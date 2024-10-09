// src/pages/CharacterDetail.tsx
import { useParams } from 'react-router-dom';
import '../styles/CharacterDetail.css';

const CharacterDetail = ({ characters }) => {
  const { id } = useParams();
  const character = characters[id];

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
