import React, { useState } from "react";
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
} from "react-icons/fi";

const ProfilePage = () => {
  const [active, setActive] = useState("Privacy");

  const menu = [
    { name: "General", desc: "Startup and close", icon: <FiSettings /> },
    { name: "Profile", desc: "Name, profile photo, username", icon: <FiUser /> },
    { name: "Account", desc: "Security notifications, account info", icon: <FiKey /> },
    { name: "Privacy", desc: "Blocked contacts, disappearing messages", icon: <FiLock /> },
    { name: "Chats", desc: "Theme, wallpaper, chat settings", icon: <FiMessageSquare /> },
    { name: "Video & voice", desc: "Camera, microphone & speakers", icon: <FiVideo /> },
    { name: "Notifications", desc: "Messages, groups, sounds", icon: <FiBell /> },
    { name: "Keyboard shortcuts", desc: "Quick actions", icon: <FiCommand /> }, // ✅ fixed
    { name: "Help and feedback", desc: "Help centre, contact us", icon: <FiHelpCircle /> },
  ];

  return (
    <div className="flex flex-1 h-full">

      {/* LEFT PANEL */}
      <div className="
        w-full md:w-[350px] 
        bg-white dark:bg-[#111b21]   /* ✅ FIXED */
        border-r border-gray-200 dark:border-gray-800 
        text-black dark:text-white
        flex flex-col
      ">

        {/* HEADER */}
        <div className="p-4">
          <h2 className="text-xl font-semibold">Yash Vasani. ™</h2>
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
            src="https://i.pravatar.cc/100"
            className="w-24 h-24 rounded-full"
          />
        </div>

        {/* MENU */}
        <div className="flex-1 overflow-y-auto px-2">
          {menu.map((item) => (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
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