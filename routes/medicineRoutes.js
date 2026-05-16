const express = require("express");

const router = express.Router();

const {
  addMedicine,
  getMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} = require("../controllers/medicineController");

// Add medicine
router.post("/", addMedicine);

// Get all medicines
router.get("/", getMedicines);

// Get single medicine
router.get("/:id", getMedicineById);

// Update medicine
router.put("/:id", updateMedicine);

// Delete medicine
router.delete("/:id", deleteMedicine);

module.exports = router;