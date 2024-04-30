//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\server\controllers\prescriptions-controller.js
const Prescription = require("../models/Prescription");

const getAllPrescriptions = async (req, res, next) => {
  let prescriptions;
  try {
    prescriptions = await Prescription.find();
  } catch (err) {
    console.log(err);
  }

  if (!prescriptions) {
    return res.status(404).json({ message: "No prescriptions found" });
  }
  return res.status(200).json({ prescriptions });
};


const getById = async (req, res, next) => {
  const id = req.params.id;
  let prescription;
  try {
    prescription = await Prescription.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!prescription) {
    return res.status(404).json({ message: "No prescription found" });
  }
  return res.status(200).json({ prescription });
};


const addPrescription = async (req, res, next) => {
  const { Sphere, Cylinder,Axis,PupilDistance,Lence, Description,available} = req.body;
  let prescription;
  try {
    prescription = new Prescription({
      Sphere,
       Cylinder,
       Axis,
       PupilDistance,
       Lence,
       Description,
       available,
    });
    await prescription.save();
  } catch (err) {
    console.log(err);
  }

  if (!prescription) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ prescription });
};


const updatePrescription = async (req, res, next) => {
  const id = req.params.id;
  const { Sphere, Cylinder,Axis,PupilDistance,Lence, Description,available} = req.body;
  let prescription;
  try {
    prescription = await Prescription.findByIdAndUpdate(id, {
     Sphere,
       Cylinder,
       Axis,
       PupilDistance,
       Lence,
       Description,
       available,
    });
    prescription = await prescription.save();
  } catch (err) {
    console.log(err);
  }
  if (!prescription) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ prescription });
};


const deletePrescription = async (req, res, next) => {
  const id = req.params.id;
  try {
    const prescription = await Prescription.findByIdAndDelete(id);
    if (!prescription) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to delete prescription" });
  }
};





exports.getAllPrescriptions = getAllPrescriptions;
exports.addPrescription = addPrescription;
exports.getById = getById;
exports.updatePrescription = updatePrescription;
exports.deletePrescription = deletePrescription; 