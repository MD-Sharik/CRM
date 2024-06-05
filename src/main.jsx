// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ProtectedRoute from "./Components/AdminProtectedRoute.jsx"; // Import the ProtectedRoute component
import AgentProtectedRoute from "./Components/AgentProtectedRoute.jsx";
import UserProtectedRoute from "./Components/UserProtectedRoute.jsx";
import VerifyOTP from "./Pages/VerifiyOtp.jsx";
import Page404 from "./Pages/Page404.jsx";

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="*" element={<Page404 />} />
        {/* -----------------------------USER--------------------------------- */}
        <Route
          path="/user/dashboard"
          element={<UserProtectedRoute element={<ClientDashboard />} />}
        />
        <Route
          path="/user/profile"
          element={<UserProtectedRoute element={<UserProfile />} />}
        />
        <Route
          path="/user/status"
          element={<UserProtectedRoute element={<UserStatus />} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route
          path="/user/Loan1"
          element={<UserProtectedRoute element={<L1 />} />}
        />
        <Route
          path="/user/Loan2"
          element={<UserProtectedRoute element={<L2 />} />}
        />
        <Route
          path="/user/Loan3"
          element={<UserProtectedRoute element={<L3 />} />}
        />
        <Route
          path="/user/Loan4"
          element={<UserProtectedRoute element={<L4 />} />}
        />
        <Route
          path="/user/Loan5"
          element={<UserProtectedRoute element={<L5 />} />}
        />
        <Route
          path="/user/Loan6"
          element={<UserProtectedRoute element={<L6 />} />}
        />

        {/* ---------------------------EMPLOYEE------------------------------- */}
        <Route path="/agent/login" element={<EmployeeLogin />} />
        <Route
          path="/agent/dashboard"
          element={<AgentProtectedRoute element={<EmployeeDashboard />} />}
        />
        <Route
          path="/agent/profile"
          element={<AgentProtectedRoute element={<EmployeeProfile />} />}
        />
        <Route
          path="/agent/application"
          element={<AgentProtectedRoute element={<EmployeeApplication />} />}
        />

        {/* -----------------------------ADMIN-------------------------------- */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/admin/profile"
          element={<ProtectedRoute element={<AdminProfile />} />}
        />
        <Route
          path="/admin/agent"
          element={<ProtectedRoute element={<AdminAgent />} />}
        />
        <Route
          path="/admin/application"
          element={<ProtectedRoute element={<AdminApplication />} />}
        />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
