// pages/EmployeeApplication.js
import React from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import EmployeeDashNavBar from "../../Components/EmployeeDashNavBar";
import EmployeeDashNavigator from "../../Components/EmployeeDashNavigator";
import UserFooter from "../../Components/UserFooter";

function EmployeeApplication() {
  const navigate = useNavigate();
  const data = useLoaderData();

  const getStatusColor = (loan) => {
    if (loan.isApproved) {
      return "bg-green-500";
    } else if (loan.isRejected) {
      return "bg-red-500";
    } else {
      return "bg-blue-500";
    }
  };

  const handleCheckClick = (userId) => {
    navigate(`/agent/user/${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <EmployeeDashNavigator />
      </aside>
      <div className="p-4 xl:ml-80">
        <EmployeeDashNavBar />
        <div className="min-h-screen">
          {data.length === 0 ? (
            <div className="text-2xl text-center mt-4">
              *NO APPLICATION FOUND*
            </div>
          ) : (
            <div className="mt-4">
              <h1 className="text-3xl mb-4">Loan Applications History</h1>
              <table className="min-w-full bg-white">
                <thead className="border-4">
                  <tr className="bg-zinc-100 uppercase">
                    <th className="py-2 border-r-4">Name</th>
                    <th className="py-2 border-r-4">Loan Type</th>
                    <th className="py-2 border-r-4">Amount</th>
                    <th className="py-2 border-r-4">Duration</th>
                    <th className="py-2 border-r-4">ID</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="shadow-xl">
                  {data.map((loan) => (
                    <tr
                      key={loan._id}
                      className={`mb-4 text-center font-semibold`}
                    >
                      <td className="py-2 border-r border-t-2">{loan.name}</td>
                      <td className="py-2 border-r border-t-2">
                        {loan.loanType}
                      </td>
                      <td className="py-2 border-r border-t-2">
                        {loan.amount}
                      </td>
                      <td className="py-2 border-r border-t-2">
                        {loan.duration} months
                      </td>
                      <td className="py-2 border-r border-t-2 ">{loan._id}</td>
                      <td
                        className={`py-2 ${getStatusColor(
                          loan
                        )} text-white transition-all border-slate-300 border-t-2`}
                      >
                        {loan.isApproved ? "Approved" : "Rejected"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <UserFooter />
      </div>
    </div>
  );
}

export default EmployeeApplication;
