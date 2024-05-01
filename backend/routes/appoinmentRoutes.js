const express = require('express');
const router = express.Router();
const appoinmentController = require('../controllers/appoinmentController');

// CREATE a new appoinment
router.post('/Appoinments', appoinmentController.create);

// GET all appoinment 
router.get('/Appoinments', appoinmentController.findAll);

// GET a specific appoinment by ID
router.get('/Appoinments/:id', appoinmentController.findOne);

// UPDATE an existing appoinment
router.put('/Appoinments/:id', appoinmentController.update);

// DELETE an existing appoinment
router.delete('/Appoinments/:id', appoinmentController.delete);

module.exports = router;
