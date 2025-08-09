import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AdminLayout = () => {
  return (
    <div className="px-12 md:px-32 lg:px-64">
      <main className="my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
