// src/App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterSheet from './pages/CharacterSheet';
import CharacterDetail from './pages/CharacterDetail';
import Campaign from './pages/Campaign';
import Settings from './pages/Settings';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const handleCharacterCreate = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<CharacterSheet onCharacterCreate={handleCharacterCreate} />} />
          <Route path="/character/:id" element={<CharacterDetail characters={characters} />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
