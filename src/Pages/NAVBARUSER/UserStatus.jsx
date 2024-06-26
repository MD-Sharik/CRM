// import React, { useState, useEffect } from "react";
// import UserDashNavigator from "../../Components/UserDashNavigator";
// import UserDashNavBar from "../../Components/UserDashNavBar";
// import UserFooter from "../../Components/UserFooter";
// import { useLoaderData } from "react-router-dom";

// function UserStatus() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const loanApplications = useLoaderData();

//   const getStatusClassName = (loan) => {
//     if (loan.isApproved) return "bg-green-700 text-white";
//     if (loan.isRejected) return "bg-red-600 text-white";
//     return "bg-yellow-400"; // Pending
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
//         <UserDashNavigator />
//       </aside>
//       <div className="p-4 xl:ml-80">
//         <UserDashNavBar />
//         <div className="min-h-screen">
//           {loanApplications.length === 0 ? (
//             <div className="text-2xl text-center mt-4">
//               *NO APPLICATION FOUND*
//             </div>
//           ) : (
//             <div className="mt-4">
//               <h1 className="text-3xl mb-4">Loan Applications</h1>
//               <table className="min-w-full bg-white">
//                 <thead className="border-4">
//                   <tr className="bg-zinc-100 uppercase">
//                     <th className="py-2 border-r-4 ">Loan Type</th>
//                     <th className="py-2 border-r-4 ">Amount</th>
//                     <th className="py-2 border-r-4 ">Duration</th>
//                     <th className="py-2 border-r-4 ">ID</th>
//                     <th className="py-2">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="shadow-xl">
//                   {loanApplications.map((loan) => (
//                     <tr
//                       key={loan._id}
//                       className={`mb-4 text-center font-semibold`}
//                     >
//                       <td className="py-2 border-r border-t-2">
//                         {loan.loanType}
//                       </td>
//                       <td className="py-2 border-r border-t-2">
//                         {loan.amount}
//                       </td>
//                       <td className="py-2 border-r border-t-2">
//                         {loan.duration} months
//                       </td>
//                       <td className="py-2 border-r border-t-2">{loan._id}</td>
//                       <td
//                         className={`py-2 ${getStatusClassName(
//                           loan
//                         )} border-t-2 border-slate-300`}
//                       >
//                         {loan.isApproved
//                           ? "Approved"
//                           : loan.isRejected
//                           ? "Rejected"
//                           : "Pending"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//         <UserFooter />
//       </div>
//     </div>
//   );
// }

// export default UserStatus;

import React, { useState } from "react";
import UserDashNavigator from "../../Components/UserDashNavigator";
import UserDashNavBar from "../../Components/UserDashNavBar";
import UserFooter from "../../Components/UserFooter";
import { useLoaderData } from "react-router-dom";
import "./UserStatus.css";

function UserStatus() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loanApplications = useLoaderData();

  const getStatusClassName = (loan) => {
    if (loan.isApproved) return "bg-green-700 text-white";
    if (loan.isRejected) return "bg-red-600 text-white";
    return "bg-yellow-400"; // Pending
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <UserDashNavigator />
      </aside>
      <div className="p-4 xl:ml-80">
        <UserDashNavBar />
        <div className="min-h-screen">
          {loanApplications.length === 0 ? (
            <div className="text-2xl text-center mt-4">
              *NO APPLICATION FOUND*
            </div>
          ) : (
            <div className="mt-4">
              <h1 className="text-3xl mb-4">Loan Applications</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="border-4">
                    <tr className="bg-zinc-100 uppercase">
                      <th className="py-2 border-r-4">Loan Type</th>
                      <th className="py-2 border-r-4">Amount</th>
                      <th className="py-2 border-r-4">Duration</th>
                      <th className="py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="shadow-xl">
                    {loanApplications.map((loan) => (
                      <tr
                        key={loan._id}
                        className={`mb-4 text-center font-semibold`}
                      >
                        <td className="py-2 border-r border-t-2">
                          {loan.loanType}
                        </td>
                        <td className="py-2 border-r border-t-2">
                          {loan.amount}
                        </td>
                        <td className="py-2 border-r border-t-2">
                          {loan.duration} months
                        </td>
                        <td
                          className={`py-2 ${getStatusClassName(
                            loan
                          )} border-t-2 border-slate-300`}
                        >
                          {loan.isApproved
                            ? "Approved"
                            : loan.isRejected
                            ? "Rejected"
                            : "Pending"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <UserFooter />
      </div>
    </div>
  );
}

export default UserStatus;
