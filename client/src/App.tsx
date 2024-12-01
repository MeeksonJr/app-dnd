import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterSheet from './pages/CharacterSheet';
import CharacterDetail from './pages/CharacterDetail';
import Campaign from './pages/Campaign';
import Settings from './pages/Settings';
import './App.css';

// Define the type for a character
interface Character {
  name: string;
  race: string;
  classType: string;
}

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleCharacterCreate = (newCharacter: Character) => {
    setCharacters([...characters, newCharacter]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/character"
            element={<CharacterSheet onCharacterCreate={handleCharacterCreate} />}
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail characters={characters} />}
          />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
