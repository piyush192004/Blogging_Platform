import React, { useRef, useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const DashboardProfile = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${backendLink}/api/v1/getProfileData`, {
        withCredentials: true,
      });
      setUserData(res.data.data);
    };
    fetch();
  }, []);
  console.log(userData);
  const [Passwords, setPasswords] = useState({
    password: "",
    newPass: "",
    confirmNewPass: "",
  });

  const changePass = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...Passwords, [name]: value });
  };
  const [changeAvatar, setChangeAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const changeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setChangeAvatar(e.target.files[0]);
    }
  };

  const updateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append("image", changeAvatar);
      const res = await axios.put(
        `${backendLink}/api/v1/changeAvatar`,
        formData,
        { withCredentials: true }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Avatar update failed.");
    }
  };

  const handlePass = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `${backendLink}/api/v1/changeUserPassword`,
        Passwords,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setPasswords({ password: "", newPass: "", confirmNewPass: "" });
      setChangeAvatar(null);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {userData && (
        <div className="flex flex-col p-4 w-full max-w-3xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border overflow-hidden flex items-center justify-center">
                <label
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                  htmlFor="imgFile"
                >
                  {userData && userData.avatar ? (
                    <img
                      src={
                        changeAvatar
                          ? URL.createObjectURL(changeAvatar)
                          : `${userData.avatar}`
                      }
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <FaUser className="w-16 h-16 md:w-24 md:h-24 text-zinc-500" />
                  )}
                </label>
              </div>
              <input
                type="file"
                id="imgFile"
                accept=".jpeg, .jpg, .png"
                hidden
                ref={fileInputRef}
                onChange={changeImage}
              />
              <button
                type="button"
                className="bg-indigo-500 text-white hover:bg-indigo-700 px-4 py-2 rounded mt-4 text-sm md:text-base"
                onClick={updateAvatar}
              >
                Change Avatar
              </button>
            </div>
            {/* User Info */}
            <div className="text-center md:text-left">
              <p className="text-zinc-700 text-base break-all">
                {userData?.email}
              </p>
              <h1 className="text-xl md:text-3xl font-semibold mt-2">
                {userData?.username}
              </h1>
            </div>
          </div>

          <hr className="my-8 border-zinc-300" />

          {/* Change Password Section */}
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-semibold">
              Change Account's Password
            </h1>
            <form className="my-4 w-full" onSubmit={handlePass}>
              <div className="flex flex-col mb-4">
                <label htmlFor="curPass">Current Password</label>
                <input
                  type="password"
                  name="password"
                  className="mt-2 outline-none border px-4 py-2 rounded border-zinc-400 w-full md:w-2/3 lg:w-1/3"
                  placeholder="Current Password"
                  required
                  value={Passwords.password}
                  onChange={changePass}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="newPass">New Password</label>
                <input
                  type="password"
                  name="newPass"
                  className="mt-2 outline-none border px-4 py-2 rounded border-zinc-400 w-full md:w-2/3 lg:w-1/3"
                  placeholder="New Password"
                  required
                  value={Passwords.newPass}
                  onChange={changePass}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="confirmNewPass">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmNewPass"
                  className="mt-2 outline-none border px-4 py-2 rounded border-zinc-400 w-full md:w-2/3 lg:w-1/3"
                  placeholder="Confirm New Password"
                  required
                  value={Passwords.confirmNewPass}
                  onChange={changePass}
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white hover:bg-indigo-700 px-4 py-2 rounded"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardProfile;
