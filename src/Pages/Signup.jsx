import { Link } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ref, setRef] = useState("");
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passHandle = (e) => {
    setPassword(e.target.value);
  };
  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const refHandle = (e) => {
    setRef(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://256-crypto-backend.vercel.app/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            name,
            ref,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("signup successfull");
      } else {
        console.log("signup Failed", data.message);
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <>
      <div className="flex w-screen flex-wrap text-slate-800">
        <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
          <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
              First India Credit
            </span>
            <p className="my-6 text-3xl font-semibold leading-10">
              Best Way to{" "}
              <span className="mx-auto block w-72 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">
                Approve your loan
              </span>
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              necessitatibus nostrum repellendus ab totam.
            </p>
            <a
              href="https://firstindiacredit.com/"
              target="_blank"
              className="font-semibold tracking-wide text-white underline underline-offset-4"
            >
              Learn More
            </a>
          </div>
          {/* <img class="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" /> */}
        </div>
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <a href="#" className="text-2xl font-bold text-blue-600">
              {" "}
              FirstIndiaCredit.{" "}
            </a>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
              Create your free account
            </p>
            <p className="mt-6 text-center font-medium md:text-left">
              Already using FIC?
              <Link
                to="/signin"
                className="whitespace-nowrap font-semibold text-blue-700"
              >
                Login here
              </Link>
            </p>
            <form
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col items-stretch pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="text"
                    id="login-name"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Name"
                    value={name}
                    onChange={nameHandle}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="email"
                    id="login-email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={emailHandle}
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password (minimum 8 characters)"
                    value={password}
                    onChange={passHandle}
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="type"
                    id="refer ID"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Refer ID"
                    value={ref}
                    onChange={refHandle}
                  />
                </div>
              </div>
              <div className="block">
                <input
                  className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
                  type="checkbox"
                  id="remember-me"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3e%3cpath fill="none" stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10l3 3l6-6"/%3e%3c/svg%3e")',
                  }}
                  defaultChecked
                />
                <label className="inline-block" htmlFor="remember-me">
                  {" "}
                  I agree to the{" "}
                  <a className="underline" href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
