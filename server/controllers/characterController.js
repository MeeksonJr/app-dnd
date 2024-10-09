import { Character } from '../models/character.js';

export const createCharacter = async (req, res) => {
  try {
    const newCharacter = await Character.create(req.body);
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: 'Character not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
