import React, { useState } from "react";
import axios from "axios";

function PersonalLoanForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    amount: "",
    duration: "",
    documents: [],
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
      documents: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("date", formData.date);
      data.append("amount", formData.amount);
      data.append("duration", formData.duration);
      for (let i = 0; i < formData.documents.length; i++) {
        data.append("documents", formData.documents[i]);
      }
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
      // Handle success (redirect or display confirmation)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (display error message)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
      <div className="mx-auto min-h-[40rem] max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Personal Loan Application</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="name"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Enter name
            </label>
          </div>
          {/* Add similar input fields for other form fields */}
          <div className="relative z-0 w-full mb-5">
            <input
              type="file"
              name="documents"
              multiple
              onChange={handleFileChange}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="documents"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Upload documents
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonalLoanForm;
