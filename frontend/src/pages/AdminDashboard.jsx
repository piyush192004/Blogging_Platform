import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex px-12">
      <div className="w-1/5 h-screen sticky top-0">
        <AdminSidebar />
      </div>
      <div className="w-4/5 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
