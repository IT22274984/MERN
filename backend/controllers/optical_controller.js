const Optical = require("../models/optical");
const getAllOpticals = async (req, res, next) => {
  try {
    const opticals = await Optical.find();
    if (!opticals || opticals.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ opticals });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const optical = await Optical.findById(id);
    if (!optical) {
      return res.status(404).json({ message: "No Optical found" });
    }
    return res.status(200).json({ optical });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addOptical = async (req, res, next) => {
  const { name, description, price, available, additional_information,availableQuantity, image } = req.body;
  try {
    const optical = new Optical({
      name,
      description,
      price,
      available,
      additional_information,
      availableQuantity,
      image,
    });
    await optical.save();
    return res.status(201).json({ optical });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
 };

const updateOptical = async (req, res, next) => {
  const id = req.params.id;
  const { name, description, price, available, additional_information,availableQuantity, image } = req.body;
  try {
    const optical = await Optical.findByIdAndUpdate(id, {
      name,
      description,
      price,
      available,
      additional_information,
      availableQuantity,
      image,
    }, { new: true });
    if (!optical) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ optical });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteOptical = async (req, res, next) => {
  const id = req.params.id;
  try {
    const optical = await Optical.findByIdAndDelete(id);
    if (!optical) {
      return res.status(404).json({ message: "Unable to delete by this ID" });
    }
    return res.status(200).json({ message: "Product successfully deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
// Function to check if product quantity is low and send notification to manager
const checkLowProductQuantity = (optical) => {
  if (optical.availableQuantity < 200) {
    sendNotificationToManager(`Low quantity alert: ${optical.name}`, `Product "${optical.name}" has a low quantity (${optical.availableQuantity}). Please restock.`);
  }
};

// Mock function to simulate sending notification to manager
const sendNotificationToManager = (subject, message) => {
  console.log(`Notification to Manager: ${subject} - ${message}`);
  // Here you can implement the actual logic to send notification to manager (e.g., via email, SMS, or push notification)
};


exports.getAllOpticals = getAllOpticals;
exports.addOptical = addOptical;
exports.getById = getById;
exports.updateOptical = updateOptical;
exports.deleteOptical = deleteOptical;
