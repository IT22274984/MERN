
const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
 
router.get("/", userController.getAllUsers);

router.post("/create", userController.createUser);

router.put("/update", userController.updateUser);

router.delete("/delete/:id", userController.deleteUser);
 
module.exports = router;
