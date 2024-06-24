import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout.jsx";
import Signin from "./Pages/Signin.jsx";
import Signup from "./Pages/Signup.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import ClientDashboard from "./Pages/ClientDashboard.jsx";
import EmployeeDashboard from "./Pages/EmployeeDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import EmployeeLogin from "./Pages/EmployeeLogin.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import UserProfile from "./Pages/NAVBARUSER/UserProfile.jsx";
import UserStatus from "./Pages/NAVBARUSER/UserStatus.jsx";
import EmployeeApplication from "./Pages/NAVBAREMPLOYEE/EmployeeApplication.jsx";
import EmployeeProfile from "./Pages/NAVBAREMPLOYEE/EmployeeProfile.jsx";
import AdminProfile from "./Pages/NAVBARADMIN/AdminProfile.jsx";
import AdminApplication from "./Pages/NAVBARADMIN/AdminApplication.jsx";
import AdminAgent from "./Pages/NAVBARADMIN/AdminAgent.jsx";
import L1 from "./Pages/LOANFORMS/L1.jsx";
import L2 from "./Pages/LOANFORMS/L2.jsx";
import L3 from "./Pages/LOANFORMS/L3.jsx";
import L4 from "./Pages/LOANFORMS/L4.jsx";
import L5 from "./Pages/LOANFORMS/L5.jsx";
import L6 from "./Pages/LOANFORMS/L6.jsx";
import ProtectedRoute from "./Components/AdminProtectedRoute.jsx";
import AgentProtectedRoute from "./Components/AgentProtectedRoute.jsx";
import UserProtectedRoute from "./Components/UserProtectedRoute.jsx";
import VerifyOTP from "./Pages/VerifiyOtp.jsx";
import Page404 from "./Pages/Page404.jsx";
import SubmittedLoan from "./Pages/SubmittedLoan.jsx";
import LoanDetailsCheck from "./Pages/LoanDetailsCheck.jsx";
import ApplyLoanAgent from "./Pages/ApplyLoanAgent.jsx";
import {
  loanApplicationsLoader,
  loanApplicationsList,
  loanStatusClient,
} from "./Utils/LaonApplicationHistory.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "*", element: <Page404 /> },
      {
        path: "user",
        children: [
          {
            path: "dashboard",
            element: <UserProtectedRoute element={<ClientDashboard />} />,
          },
          {
            path: "profile",
            element: <UserProtectedRoute element={<UserProfile />} />,
          },
          {
            path: "status",
            loader: loanStatusClient,
            element: <UserProtectedRoute element={<UserStatus />} />,
          },
          { path: "Loan1", element: <UserProtectedRoute element={<L1 />} /> },
          { path: "Loan2", element: <UserProtectedRoute element={<L2 />} /> },
          { path: "Loan3", element: <UserProtectedRoute element={<L3 />} /> },
          { path: "Loan4", element: <UserProtectedRoute element={<L4 />} /> },
          { path: "Loan5", element: <UserProtectedRoute element={<L5 />} /> },
          { path: "Loan6", element: <UserProtectedRoute element={<L6 />} /> },
          {
            path: "LoanSubmitted",
            element: <UserProtectedRoute element={<SubmittedLoan />} />,
          },
        ],
      },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "verify", element: <VerifyOTP /> },
      {
        path: "agent",
        children: [
          { path: "login", element: <EmployeeLogin /> },
          {
            path: "/agent/dashboard",
            loader: loanApplicationsList,
            element: <AgentProtectedRoute element={<EmployeeDashboard />} />,
          },
          {
            path: "/agent/profile",
            element: <AgentProtectedRoute element={<EmployeeProfile />} />,
          },

          {
            path: "/agent/user/:_id",
            element: <AgentProtectedRoute element={<LoanDetailsCheck />} />,
          },
          {
            path: "/agent/application",
            loader: loanApplicationsLoader,
            element: <AgentProtectedRoute element={<EmployeeApplication />} />,
          },
        ],
      },
      {
        path: "admin",
        children: [
          { path: "login", element: <AdminLogin /> },
          {
            path: "dashboard",
            element: <ProtectedRoute element={<AdminDashboard />} />,
          },
          {
            path: "profile",
            element: <ProtectedRoute element={<AdminProfile />} />,
          },
          {
            path: "agent",
            element: <ProtectedRoute element={<AdminAgent />} />,
          },
          {
            path: "application",
            element: <ProtectedRoute element={<AdminApplication />} />,
          },
        ],
      },
    ],
  },
]);

const Main = () => <RouterProvider router={router} />;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
