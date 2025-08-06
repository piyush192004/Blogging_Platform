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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="all-blogs" element={<Allblogs />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<DashboardProfile />} />
            <Route path="fav" element={<Favourites />} />
            <Route path="liked-blogs" element={<LikedBlogs />} />
          </Route>
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
