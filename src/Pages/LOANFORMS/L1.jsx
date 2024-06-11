import React, { useState } from "react";
import axios from "axios";

function PersonalLoanForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    duration: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      document: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("amount", formData.amount);
      data.append("duration", formData.duration);
      data.append("document", formData.document);

      const response = await axios.post(
        "https://crm-backend-jade.vercel.app/api/v2/user/loan/personalloan",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h1>Personal Loan Application Form</h1>{" "}
      <form id="loanForm" encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <label htmlFor="name">Full Name:</label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          required=""
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>{" "}
        <input
          type="email"
          id="email"
          name="email"
          required=""
          onChange={handleChange}
        />
        <br />
        <label htmlFor="amount">Loan Amount (₹):</label>{" "}
        <input
          type="number"
          id="amount"
          name="amount"
          required=""
          onChange={handleChange}
        />
        <br />
        <label htmlFor="duration">Loan Duration (in months):</label>{" "}
        <input
          type="number"
          id="duration"
          name="duration"
          required=""
          onChange={handleChange}
        />
        <br />
        {/* Document Upload */}
        <label htmlFor="document">Upload ID Photograph:</label>{" "}
        <input
          type="file"
          id="document"
          name="document"
          accept="image/*"
          required=""
          onChange={handleFileChange}
        />
        <br />
        {/* Submit button */}
        <button type="submit">Submit Application</button>{" "}
      </form>{" "}
    </>
  );
}

export default PersonalLoanForm;
