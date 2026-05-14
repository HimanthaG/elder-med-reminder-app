const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },

  medicineName: {
    type: String,
    required: true,
  },

  dosage: String,

  time: String,

  frequency: String,

  notes: String,
});

module.exports = mongoose.model("Medicine", medicineSchema);