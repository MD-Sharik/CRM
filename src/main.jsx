import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/Signup.jsx";
import "./index.css";
import Layout from "./Components/Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./Pages/Signin.jsx";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      {/* -----------------------------USER--------------------------------- */}
      <Route path="/user/dashboard" element={<ClientDashboard />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/status" element={<UserStatus />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<App />} />
      <Route path="/user/Loan1" element={<L1 />} />
      <Route path="/user/Loan2" element={<L2 />} />
      <Route path="/user/Loan3" element={<L3 />} />
      <Route path="/user/Loan4" element={<L4 />} />
      <Route path="/user/Loan5" element={<L5 />} />
      <Route path="/user/Loan6" element={<L6 />} />

      {/* ---------------------------EMPLOYEE------------------------------- */}
      <Route path="/agent" element={<EmployeeLogin />} />
      <Route path="/agent/dashboard" element={<EmployeeDashboard />} />
      <Route path="/agent/profile" element={<EmployeeProfile />} />
      <Route path="/agent/application" element={<EmployeeApplication />} />
      {/* -----------------------------ADMIN-------------------------------- */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/agent" element={<AdminAgent />} />
      <Route path="/admin/application" element={<AdminApplication />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
