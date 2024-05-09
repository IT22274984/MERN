const express = require('express');
const {
  getAllUsers,
  updateUser,
  deleteUserByAdmin,
  deleteUser,
} = require('../controllers/user.controller.js');
const { verifyToken } = require('../utills/verifyUser.js');

const router = express.Router();

router.get('/get', getAllUsers);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.delete('/:id', deleteUserByAdmin);

module.exports = router;
