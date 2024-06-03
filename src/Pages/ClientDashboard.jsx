import React from "react";
import LOANBUTTON from "../Components/LOANBUTTON";
import UserDashNavigator from "../Components/UserDashNavigator";
import UserDashNavBar from "../Components/UserDashNavBar";
import UserFooter from "../Components/UserFooter";
function ClientDashboard() {
  return (
    <>
      <div>
        {/* component */}

        <div className="min-h-screen bg-gray-50/50">
          <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <UserDashNavigator />
          </aside>
          <div className="p-4 xl:ml-80">
            {/* Navbar */}
            <UserDashNavBar />
            {/* content */}
            <div className="px-12 py-5 min-h-screen">
              <div className="text-2xl font-bold text-zinc-700">Loans</div>
              <div className="mt-12 flex gap-8 min-h-52 items-center justify-start flex-wrap ">
                <LOANBUTTON
                  title={"L1"}
                  link={"/user/loan1"}
                  color={"blue"}
                  shadow={"blue"}
                />
                <LOANBUTTON
                  title={"L2"}
                  link={"/user/loan2"}
                  color={"green"}
                  shadow={"green"}
                />
                <LOANBUTTON
                  title={"L3"}
                  link={"/user/loan3"}
                  color={"red"}
                  shadow={"red"}
                />
                <LOANBUTTON
                  title={"L4"}
                  link={"/user/loan4"}
                  color={"orange"}
                  shadow={"orange"}
                />
                <LOANBUTTON
                  title={"L5"}
                  link={"/user/loan5"}
                  color={"violet"}
                  shadow={"violet"}
                />
                <LOANBUTTON
                  title={"L6"}
                  link={"/user/loan6"}
                  color={"yellow"}
                  shadow={"yellow"}
                />
              </div>
            </div>

            <div className="text-blue-gray-600">
              <UserFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientDashboard;
