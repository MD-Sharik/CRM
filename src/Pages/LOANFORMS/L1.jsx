import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function L1() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    duration: "",
    referralId: "",
    aadhaar: null,
    panCardUrl: null,
    drivingLicenseUrl: null,
    otherDocumentUrl: null,
  });

  const [update, setUpdate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId"); // Retrieve userId from local storage
      if (!userId) {
        alert("User not logged in");
        setLoading(false);
        return;
      }

      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("amount", formData.amount);
      data.append("duration", formData.duration);
      data.append("aadhaar", formData.aadhaar);
      data.append("panCardUrl", formData.panCardUrl);
      data.append("drivingLicenseUrl", formData.drivingLicenseUrl);
      data.append("otherDocumentUrl", formData.otherDocumentUrl);
      data.append("userId", userId); // Include userId in the form data
      data.append("referralId", formData.referralId); // Include referralId in the form data

      const response = await axios.post(
        "http://localhost:3000/api/v2/loan/car",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setUpdate(response.data.message);

      if (response.status === 200) {
        navigate("/user/LoanSubmitted", { state: { loan: "Car Loan" } });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .-z-1 {\n    z-index: -1;\n  }\n\n  .origin-0 {\n    transform-origin: 0%;\n  }\n\n  input:focus ~ label,\n  input:not(:placeholder-shown) ~ label,\n  textarea:focus ~ label,\n  textarea:not(:placeholder-shown) ~ label,\n  select:focus ~ label,\n  select:not([value='']):valid ~ label {\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    --tw-scale-x: 0.75;\n    --tw-scale-y: 0.75;\n    --tw-translate-y: -1.5rem;\n  }\n\n  input:focus ~ label,\n  select:focus ~ label {\n    color: rgba(0, 0, 0, var(--tw-text-opacity));\n    left: 0px;\n  }\n",
        }}
      />
      <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-8 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Car Loan</h1>
          <div>{update}</div>
          <form
            id="loanForm"
            noValidate=""
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required=""
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Full Name
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Name is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Email
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Email address is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="referralId"
                value={formData.referralId}
                onChange={handleChange}
                placeholder=""
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="referralId"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Refferal Id
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Referral Id is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder=" "
                className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">
                ₹
              </div>
              <label
                htmlFor="amount"
                className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
              >
                Amount
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Amount is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder=" "
                className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <div className="absolute top-0 right-0 mt-3 mr-4 text-gray-400">
                months
              </div>
              <label
                htmlFor="duration"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Duration
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Duration is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="file"
                name="aadhaar"
                onChange={handleFileChange}
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="aadhaar"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Aadhaar Card
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Aadhaar card is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="file"
                name="panCardUrl"
                onChange={handleFileChange}
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="panCardUrl"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                PAN Card
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                PAN card is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="file"
                name="drivingLicenseUrl"
                onChange={handleFileChange}
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="drivingLicenseUrl"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Driving License
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Driving License is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="file"
                name="otherDocumentUrl"
                onChange={handleFileChange}
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="otherDocumentUrl"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Other Document
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Other document is required
              </span>
            </div>

            <button
              id="button"
              type="submit"
              className={`w-full px-6 py-3 mt-3 text-lg text-white bg-blue-500 transition-all duration-150 ease-linear rounded-lg shadow outline-none hover:bg-gray-800 hover:shadow-lg focus:outline-none ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Submiting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default L1;
