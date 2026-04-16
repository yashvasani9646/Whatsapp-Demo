import React, { useState, useEffect } from "react"; // ✅ useEffect added
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

const ProfilePage = () => {
  const [active, setActive] = useState("Privacy");

  // ✅ NEW: user state
  const [user, setUser] = useState(null);

  // ✅ NEW: API call
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  // ✅ logout function
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
    <div className="flex flex-1 h-full">

      {/* LEFT PANEL */}
      <div className="
        w-full md:w-[350px] 
        bg-white dark:bg-[#111b21]
        border-r border-gray-200 dark:border-gray-800 
        text-black dark:text-white
        flex flex-col
      ">

        {/* HEADER */}
        <div className="p-4">
          {/* ✅ dynamic name */}
          <h2 className="text-xl font-semibold">
            {user?.name || "Loading..."}
          </h2>

          {/* ✅ email (optional) */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>

        {/* SEARCH */}
        <div className="px-3 pb-3">
          <input
            placeholder="Search"
            className="
              w-full p-2 rounded-full 
              bg-gray-100 dark:bg-[#202c33] 
              text-black dark:text-white
              outline-none
            "
          />
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center py-4">
          <img
            src={user?.avatar || "https://i.pravatar.cc/100"} // ✅ dynamic image
            className="w-24 h-24 rounded-full"
          />
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
              className={`
                flex items-start gap-3 p-3 rounded-lg cursor-pointer transition
                ${active === item.name 
                  ? "bg-gray-100 dark:bg-[#202c33]" 
                  : "hover:bg-gray-100 dark:hover:bg-[#202c33]"}
              `}
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
      <div className="
        hidden md:flex flex-1 
        items-center justify-center 
        bg-[#efeae2] dark:bg-[#0b141a]
      ">
        <div className="text-gray-500 dark:text-gray-400">
          Select a setting to view details
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;