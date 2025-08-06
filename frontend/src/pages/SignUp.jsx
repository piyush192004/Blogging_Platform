import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-5xl font-semibold mb-8 shadow-xl text-center">
        Blogger's Heaven
      </h1>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-8 shadow-2xl flex flex-col rounded items-center justify-center bg-white">
        <div className="text-2xl flex gap-2 text-center mb-4">
          <h1 className="font-bold">Welcome!</h1>
          <span>SignUp as New User</span>
        </div>
        <form
          action=""
          className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-5"
        >
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={Inputs.username}
              onChange={change}
              className="mt-4 outline-none border px-4 py-2 rounded border-zinc-400 w-full"
              placeholder="Username"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={Inputs.email}
              onChange={change}
              className="mt-4 outline-none border px-4 py-2 rounded border-zinc-400 w-full"
              placeholder="test@example.com"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={Inputs.password}
              onChange={change}
              className="mt-4 outline-none border px-4 py-2 rounded border-zinc-400 w-full"
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-center justify-center text-center mb-4">
            Familiar to this world?&nbsp;
            <Link className="text-blue-500" to="/login">
              Click Here!
            </Link>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-125 transition-transform duration-300 w-full sm:w-auto">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
