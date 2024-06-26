import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function LoanDetailsCheck() {
  const navigate = useNavigate();

  const { _id } = useParams();
  const [loanDetails, setLoanDetails] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Fetched _id:", _id); // Add this line to log _id

    const fetchDetailLoan = async () => {
      try {
        const response = await axios.get(
          `https://crm-backend-jade.vercel.app/api/v2/agent/detailloan?_id=${_id}`
        );
        setLoanDetails(response.data);
      } catch (error) {
        setError(error.message || "Error fetching loan details");
      }
    };

    fetchDetailLoan();
  }, [_id]);

  const approveLoan = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/v2/agent/approveloan",
        { _id }
      );
      if (response.status === 200) {
        alert("Loan Approved Successfully");
      } else {
        alert("Error approving loan");
      }
    } catch (error) {
      console.error(error);
      alert("Error approving loan");
    }
  };

  const rejectLoan = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/v2/agent/rejectloan",
        { _id }
      );
      if (response.status === 200) {
        alert("Loan Rejected Successfully");
      } else {
        alert("Error rejecting loan");
      }
    } catch (error) {
      console.error(error);
      alert("Error rejecting loan");
    }
  };

  const renderDocument = (label, url) => (
    <tr className="border-b">
      <td className="p-2 font-bold">{label}:</td>
      <td className="p-2">
        {url ? (
          <PhotoProvider>
            <PhotoView src={url}>
              <img
                src={url}
                alt={label}
                className="w-32 h-32 object-cover mt-2 cursor-pointer"
              />
            </PhotoView>
          </PhotoProvider>
        ) : (
          <span className="text-gray-500">Not provided</span>
        )}
      </td>
    </tr>
  );

  const renderLoanDetails = (loan, loanType) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{loanType} Loan</h2>
      <table className=" m-auto w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
        <tbody>
          <tr className="border-b">
            <td className="p-2 font-bold">Name:</td>
            <td className="p-2">{loan.name}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-bold">Email:</td>
            <td className="p-2">{loan.email}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-bold">Amount:</td>
            <td className="p-2">{loan.amount}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-bold">Duration:</td>
            <td className="p-2">{loan.duration} months</td>
          </tr>
          {loanType === "Car" && (
            <>
              {renderDocument("Aadhaar", loan.aadhaar)}
              {renderDocument("Driving License", loan.drivingLicenseUrl)}
              {renderDocument("PAN Card", loan.panCardUrl)}
              {renderDocument("Other Document", loan.otherDocumentUrl)}
            </>
          )}
          {loanType === "Home" && (
            <>
              {renderDocument("Aadhaar", loan.aadhaarUrl)}
              {renderDocument("Driving License", loan.drivingLicenseUrl)}
              {renderDocument("PAN Card", loan.panCardUrl)}
              {renderDocument("Other Document", loan.otherDocumentUrl)}
            </>
          )}
          {loanType === "Personal" && (
            <>
              {renderDocument("Aadhaar", loan.aadhaar)}
              {renderDocument("PAN Card", loan.panCardUrl)}
              {renderDocument("Passport Size Photo", loan.passportSizePhotoUrl)}
              {renderDocument("Salary Slip", loan.salarySlipUrl)}
              {renderDocument("Bank Statement", loan.bankStatementUrl)}
              {renderDocument("Office ID", loan.officeIdUrl)}
            </>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate("/agent/dashboard")}
        className="bg-blue-500 mb-8 text-white px-8 rounded-xl py-2 text-xl"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-4">
        Loan Details for User: <span className="text-red-500">{_id}</span>
      </h1>

      {loanDetails ? (
        <div className="space-y-8">
          {loanDetails.car && renderLoanDetails(loanDetails.car, "Car")}
          {loanDetails.home && renderLoanDetails(loanDetails.home, "Home")}
          {loanDetails.personal &&
            renderLoanDetails(loanDetails.personal, "Personal")}

          <div className="flex gap-10 justify-center">
            <button
              onClick={approveLoan}
              className=" text-xl font-bold hover:bg-green-600 text-white px-9 py-2 rounded-xl hover:rounded-md shadow-lg shadow-green-400 transition-all bg-green-700"
            >
              Approved
            </button>
            <button
              onClick={rejectLoan}
              className=" text-xl font-bold hover:bg-red-600 text-white px-9 py-2 rounded-xl hover:rounded-md shadow-lg shadow-red-400 transition-all bg-red-700"
            >
              Reject
            </button>
          </div>
        </div>
      ) : (
        <p className="text-xl text-center">Loading loan details...</p>
      )}
    </div>
  );
}

export default LoanDetailsCheck;
