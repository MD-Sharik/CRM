import React from "react";
import EmployeeDashNavigator from "../../Components/EmployeeDashNavigator";
import EmployeeDashNavBar from "../../Components/EmployeeDashNavBar";
import UserFooter from "../../Components/UserFooter";

function EmployeeProfile() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50/50">
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
          <EmployeeDashNavigator />
        </aside>
        <div className="p-4 xl:ml-80">
          {/* Navbar */}
          <EmployeeDashNavBar />
          {/* content */}
          <div class="w-full flex gap-5 px-3 md:px-16 lg:px-28 text-[#161931]">
            <div class="p-2 md:p-4 flex m-auto  w-full ">
              <div class="w-full mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">
                  Public Profile
                </h2>
                <div class="max-w-2xl mx-auto items-center flex mt-8">
                  <img
                    class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Bordered avatar"
                  />

                  <div class="flex flex-col w-full space-y-5 sm:ml-8">
                    <button
                      type="button"
                      class="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      Change picture
                    </button>
                    <button
                      type="button"
                      class="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      Delete picture
                    </button>
                  </div>
                </div>
                <div class="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div class="w-full">
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Your first name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your first name"
                        value="Jane"
                        required
                      />
                    </div>

                    <div class="w-full">
                      <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Your last name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your last name"
                        value="Ferguson"
                        required
                      />
                    </div>
                  </div>

                  <div class="mb-2 sm:mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="your.email@mail.com"
                      required
                    />
                  </div>

                  <div class="mb-2 sm:mb-6">
                    <label
                      for="profession"
                      class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Profession
                    </label>
                    <input
                      type="text"
                      id="profession"
                      class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="your profession"
                      required
                    />
                  </div>

                  <div class="mb-6">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Bio
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                      placeholder="Write your bio here..."
                    ></textarea>
                  </div>

                  <div class="flex justify-end">
                    <button
                      type="submit"
                      class="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      Save
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="font-medium my-5 text-xl">Danger Zone</div>
                <div>
                  <button className="bg-red-500 rounded-lg text-white px-11 py-2">
                    Request Account Deletion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-blue-gray-600">
        <UserFooter />
      </div>
    </div>
  );
}

export default EmployeeProfile;
