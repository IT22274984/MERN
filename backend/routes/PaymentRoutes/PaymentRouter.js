const express = require('express')

const { CreateDetails, getAllDetails, updateDetailsById, deleteDetailsById, getOneDetails } = require('../../controllers/payment/paymentController.js');

const router = express.Router();

router.post('/staffpayment', CreateDetails);
router.get('/staffpaymentgetall', getAllDetails);
router.get('/staffpaymentgetOneDetails/:id', getOneDetails);
router.put('/staffpaymentupdate/:id', updateDetailsById);
router.delete('/staffpaymentdelete/:id', deleteDetailsById);

module.exports = router
