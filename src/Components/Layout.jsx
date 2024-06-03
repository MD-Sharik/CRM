import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  // Initialize the isDashboard variable
  let isDashboard = false;

  // Check if the current path matches any of the dashboard paths
  if (
    // USER---------------------------------
    location.pathname === "/user/dashboard" ||
    location.pathname === "/user/status" ||
    location.pathname === "/user/profile" ||
    // LOAN---------------------------------
    location.pathname === "/user/loan1" ||
    location.pathname === "/user/loan2" ||
    location.pathname === "/user/loan3" ||
    location.pathname === "/user/loan4" ||
    location.pathname === "/user/loan5" ||
    location.pathname === "/user/loan6" ||
    // AGENT--------------------------------
    location.pathname === "/agent/dashboard" ||
    location.pathname === "/agent/profile" ||
    location.pathname === "/agent/application" ||
    // ADMIN--------------------------------
    location.pathname === "/admin/dashboard" ||
    location.pathname === "/admin/profile" ||
    location.pathname === "/admin/application" ||
    location.pathname === "/admin/agent"
  ) {
    isDashboard = true;
  }

  console.log("Current path:", location.pathname); // For debugging
  console.log("Is dashboard:", isDashboard); // For debugging

  return (
    <div>
      {!isDashboard && <Header />}
      <Outlet />
      {!isDashboard && <Footer />}
    </div>
  );
}

export default Layout;
