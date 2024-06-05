import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const dashboardPaths = [
    // USER---------------------------------
    "/user/dashboard",
    "/user/status",
    "/user/profile",
    "/user/loan1",
    "/user/loan2",
    "/user/loan3",
    "/user/loan4",
    "/user/loan5",
    "/user/loan6",
    // AGENT--------------------------------
    "/agent/dashboard",
    "/agent/profile",
    "/agent/application",
    // ADMIN--------------------------------
    "/admin/dashboard",
    "/admin/profile",
    "/admin/application",
    "/admin/agent",
  ];

  // Check if the current path is in the dashboardPaths array
  const isDashboard = dashboardPaths.includes(location.pathname);

  // // Additional debugging information
  // console.log("Current path:", location.pathname); // For debugging
  // console.log("Dashboard paths:", dashboardPaths); // For debugging
  // console.log("Is dashboard:", isDashboard); // For debugging

  return (
    <div>
      {!isDashboard && <Header />}
      <Outlet />
      {!isDashboard && <Footer />}
    </div>
  );
}

export default Layout;
