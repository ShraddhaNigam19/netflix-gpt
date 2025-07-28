import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Auth Form */}
      <form className="absolute bg-black bg-opacity-80 text-white p-8 rounded-lg w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-700 rounded outline-none"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-700 rounded outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded outline-none"
        />

        <button className="p-3 my-4 w-full bg-red-600 hover:bg-red-700 rounded font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm text-gray-400 text-center">
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span
                className="text-white underline cursor-pointer"
                onClick={toggleSignInForm}>
                Sign up now
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-white underline cursor-pointer"
                onClick={toggleSignInForm}>
                Sign in now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
