// routes/alumniRoutes.js

const express = require('express');
const alumniController = require('../controllers/alumniController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/', authenticateToken, alumniController.index);
router.post('/', authenticateToken, alumniController.store);
router.put('/:id', authenticateToken, alumniController.update);
router.delete('/:id', authenticateToken, alumniController.destroy);
router.get('/:id', authenticateToken, alumniController.show);
router.get('/search/:name', authenticateToken, alumniController.search);
router.get('/status/:status', authenticateToken, alumniController.findByStatus);

module.exports = router;
