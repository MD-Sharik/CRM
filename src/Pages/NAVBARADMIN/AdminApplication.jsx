import React from "react";
import AdminDashNavBar from "../../Components/AdminDashNavBar";
import AdminDashNavigator from "../../Components/AdminDashNavigator";
import UserFooter from "../../Components/UserFooter";
function AdminApplication() {
  return (
    <div>
      <div>
        <div className="min-h-screen bg-gray-50/50">
          <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <AdminDashNavigator />
          </aside>
          <div className="p-4 xl:ml-80">
            {/* Navbar */}
            <AdminDashNavBar />
            {/* content */}
            <div className="min-h-screen">
              <div className="bg-red-500 text-center text-white font-semibold text-5xl">
                APPLICATION HISTORY
              </div>
              <div className="text-2xl text-center">*NO APPLICATION FOUND*</div>

              <div className="text-blue-gray-600"></div>
            </div>
            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminApplication;
