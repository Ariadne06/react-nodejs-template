import express from 'express';
import * as exampleController from './example.controller.js';
// import { authenticate, authorize } from '../../middleware/auth.js';

const router = express.Router();

// Get all examples
router.get('/', exampleController.getAll);

// Get example by ID
router.get('/:id', exampleController.getById);

// Create new example
router.post('/', exampleController.create);

// Update example
router.put('/:id', exampleController.update);

// Delete example
router.delete('/:id', exampleController.remove);

export default router;
