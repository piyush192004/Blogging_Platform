import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", to: "/admin-dashboard" },
    { name: "Add Blogs", to: "/admin-dashboard/add-blog" },
    { name: "Edit Blogs", to: "/admin-dashboard/edit-blog" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/admin-login");
  };

  return (
    <div className="flex fixed flex-col min-h-60 w-60 border-r border-zinc-200 py-8 px-4 bg-white gap-1">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {links.map((item, i) => (
        <Link
          key={i}
          to={item.to}
          className="py-2 px-2 rounded text-left w-full font-medium hover:font-semibold hover:scale-105 transition-all duration-300"
        >
          {item.name}
        </Link>
      ))}
      <button
        className="mt-6 px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-800 transition w-full font-semibold"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
