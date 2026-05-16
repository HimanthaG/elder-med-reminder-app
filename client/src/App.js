import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [medicines, setMedicines] = useState([]);

  const [formData, setFormData] = useState({
    patientName: "",
    medicineName: "",
    dosage: "",
    time: "",
    frequency: "",
    notes: "",
  });

  // Fetch Medicines
  const fetchMedicines = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/medicines"
      );

      setMedicines(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add Medicine
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/medicines",
        formData
      );

      fetchMedicines();

      setFormData({
        patientName: "",
        medicineName: "",
        dosage: "",
        time: "",
        frequency: "",
        notes: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Medicine
  const deleteMedicine = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/medicines/${id}`
      );

      fetchMedicines();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Elder Med Reminder App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="medicineName"
          placeholder="Medicine Name"
          value={formData.medicineName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="dosage"
          placeholder="Dosage"
          value={formData.dosage}
          onChange={handleChange}
        />

        <input
          type="text"
          name="time"
          placeholder="Time"
          value={formData.time}
          onChange={handleChange}
        />

        <input
          type="text"
          name="frequency"
          placeholder="Frequency"
          value={formData.frequency}
          onChange={handleChange}
        />

        <input
          type="text"
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">
          Add Medicine
        </button>
      </form>

      <div className="medicine-list">
        {medicines.map((medicine) => (
          <div className="card" key={medicine._id}>
            <h3>{medicine.medicineName}</h3>

            <p>
              <strong>Patient:</strong>{" "}
              {medicine.patientName}
            </p>

            <p>
              <strong>Dosage:</strong>{" "}
              {medicine.dosage}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {medicine.time}
            </p>

            <p>
              <strong>Frequency:</strong>{" "}
              {medicine.frequency}
            </p>

            <p>
              <strong>Notes:</strong>{" "}
              {medicine.notes}
            </p>

            <button
              onClick={() =>
                deleteMedicine(medicine._id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;