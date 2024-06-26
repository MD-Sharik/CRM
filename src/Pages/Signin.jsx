import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://crm-backend-jade.vercel.app/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("mail", email);
        localStorage.setItem("TOKEN", data.token);
        navigate("/user/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log("error", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const emailLog = (e) => {
    setEmail(e.target.value);
  };
  const passwordLog = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div className="flex flex-wrap text-slate-800">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
              Welcome back <br />
              to <span className="text-blue-600">FIC</span>
            </p>
            <p className="mt-6 text-center font-medium md:text-left">
              Sign in to your account below.
            </p>
            <form
              className="flex flex-col items-stretch pt-3 md:pt-8"
              onSubmit={handleLogin}
            >
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="email"
                    id="login-email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={emailLog}
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={passwordLog}
                  />
                </div>
              </div>
              <a
                href="#"
                className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
              >
                Forgot password?
              </a>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
              >
                Sign in
              </button>
            </form>
            <div className="py-12 text-center">
              <p className="text-gray-600">
                Don't have an account?
                <Link
                  to="/signup"
                  className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
                >
                  Sign up for free.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden md:flex items-center justify-center text-center h-screen select-none bg-blue-600 bg-gradient-to-br md:w-1/2">
          <div className="py-16 px-8 text-white xl:w-[40rem]"></div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
