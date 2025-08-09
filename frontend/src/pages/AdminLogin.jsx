import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login/authentication logic here
    // Example: call your API with inputs.username and inputs.password
    // Clear the form or redirect as needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-5xl font-semibold mb-8 shadow-xl text-center">
        Blogger's Heaven
      </h1>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-8 shadow-2xl flex flex-col rounded items-center justify-center bg-white">
        <div className="text-2xl flex gap-2 text-center mb-4">
          <h1 className="font-bold">Welcome Back Admin!</h1>
        </div>
        <form
          className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={inputs.username}
              className="mt-4 outline-none border px-4 py-2 rounded border-zinc-400 w-full"
              placeholder="Username"
              required
              onChange={change}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={inputs.password}
              className="mt-4 outline-none border px-4 py-2 rounded border-zinc-400 w-full"
              placeholder="********"
              required
              onChange={change}
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
