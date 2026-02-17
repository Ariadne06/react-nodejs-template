const express = require('express');
const router = express.Router();
const exampleController = require('./example.controller');
// const { authenticate, authorize } = require('../../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Examples
 *   description: Example module API endpoints
 */

/**
 * @swagger
 * /api/examples:
 *   get:
 *     summary: Get all examples
 *     tags: [Examples]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', exampleController.getAll);

/**
 * @swagger
 * /api/examples/{id}:
 *   get:
 *     summary: Get example by ID
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', exampleController.getById);

/**
 * @swagger
 * /api/examples:
 *   post:
 *     summary: Create new example
 *     tags: [Examples]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', exampleController.create);

/**
 * @swagger
 * /api/examples/{id}:
 *   put:
 *     summary: Update example
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', exampleController.update);

/**
 * @swagger
 * /api/examples/{id}:
 *   delete:
 *     summary: Delete example
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.delete('/:id', exampleController.delete);

module.exports = router;
