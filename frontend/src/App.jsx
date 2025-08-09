import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import OtherLayout from "./Layout/OtherLayout.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import Allblogs from "./pages/Allblogs";
import DashboardProfile from "./components/DashboardProfile.jsx";
import Favourites from "./components/Favourites.jsx";
import LikedBlogs from "./components/LikedBlogs.jsx";
import Description from "./pages/Description.jsx";
import Categories from "./pages/Categories.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import AdminDashboardProfile from "./components/AdminDashboardProfile.jsx";
import AddBlogs from "./components/AddBlogs.jsx";
import EditBlogs from "./components/EditBlogs.jsx";
import UpdateBlogs from "./components/UpdateBlogs.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="all-blogs" element={<Allblogs />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/cat/:id" element={<Categories />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<DashboardProfile />} />
            <Route path="fav" element={<Favourites />} />
            <Route path="liked-blogs" element={<LikedBlogs />} />
          </Route>
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<AdminDashboardProfile />} />
            <Route path="/admin-dashboard/add-blog" element={<AddBlogs />} />
            <Route path="/admin-dashboard/edit-blog" element={<EditBlogs />} />
            <Route
              path="/admin-dashboard/update-blog/:id"
              element={<UpdateBlogs />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
