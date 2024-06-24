import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SubmittedLoan() {
  const location = useLocation();
  const [loanName, setLoanName] = useState("");

  useEffect(() => {
    if (location.state && location.state.loan) {
      setLoanName(location.state.loan);
    }
  }, [location.state]);

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div>
          <div className="flex flex-col  items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-28 w-28 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Thank You !</h1>
            <p className=" text-2xl font-semibold text-red-500 py-8">
              Thank you for applying Loan! Verification may take 2-3 business
              days!
            </p>

            <Link to={"/user/dashboard"}>
              <button className="font-medium px-10 text-lg hover:bg-blue-600 transition-all py-5 bg-blue-500 text-white rounded-xl">
                {" "}
                {"<"} Dashboard{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmittedLoan;
