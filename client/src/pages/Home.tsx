// src/pages/Home.tsx
import '../styles/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Dungeons & Dragons</h1>
      <p>Embark on your adventure, create your character, and let the story unfold!</p>
      <button className="start-button">
        <Link to="/campaign" className='link'>Start your adventure</Link>
      </button>
    </div>
  );
};

export default Home;
