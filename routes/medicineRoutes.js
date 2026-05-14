const express = require("express");

const router = express.Router();

const {
  addMedicine,
  getMedicines,
} = require("../controllers/medicineController");

// Add medicine
router.post("/", addMedicine);

// Get all medicines
router.get("/", getMedicines);

module.exports = router;