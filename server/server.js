import express from 'express';
import { Character } from './models/character.js'; // Adjust import if necessary

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());

app.post('/characters', async (req, res) => {
  try {
    const characterData = req.body;
    const result = await Character.create(characterData);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create character' });
  }
});

app.get('/characters', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve characters' });
  }
});

app.get('/characters/:id', async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve character' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
