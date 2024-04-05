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
  const { name, description, price, available, additional_information, image } = req.body;
  try {
    const optical = new Optical({
      name,
      description,
      price,
      available,
      additional_information,
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
  const { name, description, price, available, additional_information, image } = req.body;
  try {
    const optical = await Optical.findByIdAndUpdate(id, {
      name,
      description,
      price,
      available,
      additional_information,
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


exports.getAllOpticals = getAllOpticals;
exports.addOptical = addOptical;
exports.getById = getById;
exports.updateOptical = updateOptical;
exports.deleteOptical = deleteOptical;
