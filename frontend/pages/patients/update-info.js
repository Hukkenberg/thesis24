
import React, { useState } from "react";
import styles from "../../styles/UpdateInfo.module.css";

const UpdateInfo = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    contact_info: "",
    clinical_info: "",
  });

  const handleChange = (e) => {
    setPatientInfo({ ...patientInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/patients/update-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patientInfo),
    })
      .then((res) => res.json())
      .then((data) => alert("Info updated successfully"))
      .catch((err) => alert("Error updating info"));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Update Patient Information</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={patientInfo.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={patientInfo.dob}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={patientInfo.gender}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={patientInfo.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="contact_info"
        placeholder="Contact Info"
        value={patientInfo.contact_info}
        onChange={handleChange}
      />
      <textarea
        name="clinical_info"
        placeholder="Clinical Information"
        value={patientInfo.clinical_info}
        onChange={handleChange}
      />
      <button type="submit">Save Information</button>
    </form>
  );
};

export default UpdateInfo;
