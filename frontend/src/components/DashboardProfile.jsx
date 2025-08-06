import React, { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

const DashboardProfile = () => {
  const [changeAvatar, setChangeAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const changeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setChangeAvatar(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
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
              {changeAvatar ? (
                <img
                  src={URL.createObjectURL(changeAvatar)}
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
            onClick={handleButtonClick}
          >
            Change Avatar
          </button>
        </div>
        {/* User Info */}
        <div className="text-center md:text-left">
          <p className="text-zinc-700 text-base break-all">test@gmail.com</p>
          <h1 className="text-xl md:text-3xl font-semibold mt-2">Test_11</h1>
        </div>
      </div>

      <hr className="my-8 border-zinc-300" />

      {/* Change Password Section */}
      <div className="w-full">
        <h1 className="text-lg md:text-2xl font-semibold">
          Change Account's Password
        </h1>
        <form className="my-4 w-full">
          <div className="flex flex-col mb-4">
            <label htmlFor="curPass">Current Password</label>
            <input
              id="curPass"
              type="password"
              name="password"
              className="mt-2 outline-none border px-4 py-2 rounded border-zinc-400 w-full md:w-2/3 lg:w-1/3"
              placeholder="Current Password"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="newPass">New Password</label>
            <input
              id="newPass"
              type="password"
              name="newPassword"
              className="mt-2 outline-none border px-4 py-2 rounded border-zinc-400 w-full md:w-2/3 lg:w-1/3"
              placeholder="New Password"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="confirmNewPass">Confirm New Password</label>
            <input
              id="confirmNewPass"
              type="password"
              name="confirmNewPassword"
              className="mt-2 outline-none border px-4 py-2 rounded border-zinc-400 w-full md:w-2/3 lg:w-1/3"
              placeholder="Confirm New Password"
              required
            />
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="bg-indigo-500 text-white hover:bg-indigo-700 px-4 py-2 rounded"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardProfile;
