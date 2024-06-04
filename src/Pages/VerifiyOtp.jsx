import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState(""); // This should ideally come from the signup response
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://crm-backend-jade.vercel.app/api/v1/user/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, otp }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Email verified successfully");
        navigate("/signin"); // Use navigate instead of history.push
      } else {
        setError(data.message);
      }
    } catch (e) {
      console.log("error: ", e);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen flex-wrap text-slate-800">
      <div className="flex w-full  flex-col">
        <div className="flex  justify-center py-4">
          <a href="/" className="text-2xl font-bold text-blue-600">
            FirstIndiaCredit.
          </a>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 py-8 rounded-lg items-center border  lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Verify Your Email
          </p>
          {error && <div className="mb-4 text-red-600">{error}</div>}
          <form
            onSubmit={handleOTPSubmit}
            className="flex flex-col items-stretch pt-3 md:pt-8"
          >
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="otp"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
