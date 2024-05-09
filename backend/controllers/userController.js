const User = require("../models/userData");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const data = new User(req.body);
    await data.save();
    res.json({ success: true, message: "Data saved successfully", data: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    console.log(rest);
    const data = await User.findByIdAndUpdate(
      { _id },
      { ...rest },
      { new: true }
    );
    res.json({
      success: true,
      message: "Data updated successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Data deleted successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
