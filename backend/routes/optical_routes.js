const express =require("express");
const router = express.Router();
const Optical = require("../models/optical");
const opticalController = require("../controllers/optical_controller");


router.get("/", opticalController.getAllOpticals);
router.post("/", opticalController.addOptical);
router.get("/:id",opticalController.getById);
router.put("/:id",opticalController.updateOptical);
router.delete("/:id",opticalController.deleteOptical);

module. exports = router;