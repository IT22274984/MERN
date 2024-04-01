const Prescription = require("../model/prescription");

const getAllprescriptions = async (req, res, next) => {
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
    if (!prescription) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ prescription });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to fetch prescription" });
  }
  
};

const addPrescription = async (req, res, next) => {
  const { Sphere, Cylinder,Axis,PupilDistance,Lence, Description} = req.body;
  let prescription;
  try {
    prescription = new Prescription({
      Sphere,
       Cylinder,
       Axis,
       PupilDistance,
       Lence,
       Description,
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
  const { Sphere, Cylinder,Axis,PupilDistance,Lence, Description } = req.body;
  let prescription;
  try {
    prescription = await Prescription.findByIdAndUpdate(id, {
      Sphere, 
      Cylinder,
      Axis,
      PupilDistance,
      Lence, 
      Description,
    });
    if (!prescription) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    prescription = await prescription.save();
    return res.status(200).json({ prescription });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to update prescription" });
  }
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





exports.getAllprescriptions = getAllprescriptions;
exports.addPrescription = addPrescription;
exports.getById = getById;
exports.updatePrescription = updatePrescription;
exports.deletePrescription = deletePrescription; 