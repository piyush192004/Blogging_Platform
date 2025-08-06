import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="mb-4 py-4 flex items-start justify-between gap-8">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 min-h-screen max-h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
