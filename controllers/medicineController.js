const Medicine = require("../models/Medicine");

// Add Medicine
const addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);

    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Medicines
const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();

    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addMedicine,
  getMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};


// Get Single Medicine
const getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    res.status(200).json(medicine);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Medicine
const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(medicine);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Medicine
const deleteMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Medicine deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};