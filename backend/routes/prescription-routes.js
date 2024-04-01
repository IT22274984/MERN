const express = require("express");
const router = express.Router();
const prescription = require("../model/prescription");
const prescriptionsController = require("../controllers/prescriptions-controller");



router.get("/",prescriptionsController.getAllprescriptions);
router.post("/",prescriptionsController.addPrescription);
router.get("/:id", prescriptionsController.getById);
router.put("/:id", prescriptionsController.updatePrescription);
router.delete("/:id", prescriptionsController.deletePrescription);

module.exports = router;