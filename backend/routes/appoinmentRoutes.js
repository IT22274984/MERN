const express = require('express');
const router = express.Router();
const appoinmentController = require('../controllers/appoinmentController');

// CREATE a new appoinment
router.post('/', appoinmentController.create);

// GET all appoinment 
router.get('/', appoinmentController.findAll);

// GET a specific appoinment by ID
router.get('/:id', appoinmentController.findOne);

// UPDATE an existing appoinment
router.put('/:id', appoinmentController.update);

// DELETE an existing appoinment
router.delete('/:id', appoinmentController.delete);

module.exports = router;
