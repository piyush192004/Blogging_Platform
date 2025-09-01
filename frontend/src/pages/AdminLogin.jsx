import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const history = useNavigate();
  const backendLink = useSelector((state) => state.prod.link);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendLink}/api/v1/adminLogin`, inputs, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      history("/admin-dashboard");
    } catch (error) {
      toast.error(error.response.data.error);
    }
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
          onSubmit={handleAdminLogin}
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
