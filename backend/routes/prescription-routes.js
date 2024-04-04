const express = require("express");
const router = express.Router();
const Prescription = require("../model/Prescription");
const prescriptionsController = require("../controllers/prescriptions-controller");



router.get("/",prescriptionsController.getAllPrescriptions);
router.post("/",prescriptionsController.addPrescription);
router.get("/:id", prescriptionsController.getById);
router.put("/:id", prescriptionsController.updatePrescription);
router.delete("/:id", prescriptionsController.deletePrescription);

module.exports = router;