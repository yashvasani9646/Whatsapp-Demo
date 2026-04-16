import React, { useState, useEffect } from "react";
import {
  FiSettings,
  FiUser,
  FiKey,
  FiLock,
  FiMessageSquare,
  FiVideo,
  FiBell,
  FiHelpCircle,
  FiCommand,
  FiLogOut,
} from "react-icons/fi";
import ProfileDetails from "../Profile/ProfileDetails";
import { FiArrowLeft } from "react-icons/fi";

const ProfilePage = () => {
  const [active, setActive] = useState("");
  const [user, setUser] = useState(null);

  // 🔥 NEW: image state
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  // 🔥 NEW: image change function
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const menu = [
    { name: "General", desc: "Startup and close", icon: <FiSettings /> },
    { name: "Profile", desc: "Name, profile photo, username", icon: <FiUser /> },
    { name: "Account", desc: "Security notifications, account info", icon: <FiKey /> },
    { name: "Privacy", desc: "Blocked contacts, disappearing messages", icon: <FiLock /> },
    { name: "Chats", desc: "Theme, wallpaper, chat settings", icon: <FiMessageSquare /> },
    { name: "Video & voice", desc: "Camera, microphone & speakers", icon: <FiVideo /> },
    { name: "Notifications", desc: "Messages, groups, sounds", icon: <FiBell /> },
    { name: "Keyboard shortcuts", desc: "Quick actions", icon: <FiCommand /> },
    { name: "Help and feedback", desc: "Help centre, contact us", icon: <FiHelpCircle /> },
    { name: "Logout", desc: "Sign out from account", icon: <FiLogOut />, isLogout: true },
  ];

  return (
    <div className="flex w-full h-screen">

      {/* LEFT PANEL */}
      <div className={`w-full md:w-[350px] 
        ${active === "Profile" ? "hidden md:flex" : "flex"} 
        bg-white dark:bg-[#111b21] 
        border-r border-gray-200 dark:border-gray-800 
        text-black dark:text-white 
        flex-col`}>

        {/* HEADER */}
        <div className="p-4">
          <h2 className="text-xl font-semibold">
            {user?.name || "Loading..."}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>

        {/* SEARCH */}
        <div className="px-3 pb-3">
          <input
            placeholder="Search"
            className="w-full p-2 rounded-full bg-gray-100 dark:bg-[#202c33] text-black dark:text-white outline-none"
          />
        </div>

        {/* 🔥 PROFILE IMAGE (CLICKABLE) */}
        <div className="flex flex-col items-center py-4">
          <label className="cursor-pointer">
            <img
              src={image || user?.avatar || "https://i.pravatar.cc/100"}
              className="w-24 h-24 rounded-full border-2 border-green-500 hover:opacity-80 transition"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* MENU */}
        <div className="flex-1 overflow-y-auto px-2">
          {menu.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                if (item.isLogout) {
                  handleLogout();
                } else {
                  setActive(item.name);
                }
              }}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition ${active === item.name
                  ? "bg-gray-100 dark:bg-[#202c33]"
                  : "hover:bg-gray-100 dark:hover:bg-[#202c33]"
                }`}
            >
              <div className="text-lg text-gray-500 dark:text-gray-400 mt-1">
                {item.icon}
              </div>

              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={`${active === "Profile" ? "flex" : "hidden md:flex"} flex-1 bg-[#efeae2] dark:bg-[#0b141a]`}>

        {active === "Profile" ? (
          <div className="w-full">

            {/* BACK HEADER */}
            <div className="flex items-center gap-3 p-4 bg-[#202c33] text-white md:hidden">
              <button onClick={() => setActive("")}>
                <FiArrowLeft size={20} />
              </button>
              <span className="font-medium">Profile</span>
            </div>

            <ProfileDetails user={user} />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400">
            Select a setting to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;