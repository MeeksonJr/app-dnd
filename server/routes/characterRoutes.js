import express from 'express';
import { createCharacter, getCharacters, getCharacterById } from '../controllers/characterController.js';

const router = express.Router();

router.post('/', createCharacter);
router.get('/', getCharacters);
router.get('/:id', getCharacterById);

export default router;
