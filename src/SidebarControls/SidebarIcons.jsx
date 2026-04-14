import React from 'react'
import { BsChatLeftText } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineArchive, MdCall, MdOutlineCampaign } from "react-icons/md";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const SidebarIcons = ({ setActiveTab, activeTab, darkMode, setDarkMode }) => {

    const iconClass = (tab) =>
        `relative cursor-pointer p-2 rounded-xl transition group
        ${activeTab === tab
            ? "bg-green-100 text-green-600 dark:bg-[#202c33]"
            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#202c33]"}`;

    const tooltip = (text) => (
        <span className="absolute left-14 top-1/2 -translate-y-1/2 
        bg-black text-white dark:bg-gray-700 
        text-xs px-2 py-1 rounded 
        opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
            {text}
        </span>
    );

    return (
        <div className="
            w-[60px] 
            bg-white dark:bg-[#0b141a] 
            flex flex-col items-center 
            py-4 gap-5
            border-r border-gray-200 dark:border-gray-800
        ">

            {/* CHAT */}
            <div className={iconClass("chat")} onClick={() => setActiveTab("chat")}>
                <BsChatLeftText size={22} />
                {tooltip("Chats")}
            </div>

            {/* STATUS */}
            <div className={iconClass("status")} onClick={() => setActiveTab("status")}>
                <HiOutlineStatusOnline size={22} />
                <span className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                {tooltip("Status")}
            </div>

            {/* ARCHIVE */}
            <div className={iconClass("archive")} onClick={() => setActiveTab("archive")}>
                <MdOutlineArchive size={22} />

                {tooltip("Archive")}
            </div>

            {/* CALL */}
            <div className={iconClass("call")} onClick={() => setActiveTab("call")}>
                <MdCall size={22} />
                {tooltip("Calls")}
            </div>

            {/* CHANNEL */}
            <div className={iconClass("channel")} onClick={() => setActiveTab("channel")}>
                <MdOutlineCampaign size={22} />
                {tooltip("Channels")}
            </div>

            {/* DARK MODE */}
            <div
                className="relative group cursor-pointer p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#202c33]"
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
                {tooltip("Theme")}
            </div>

            {/* PROFILE */}
            <div className="mt-auto relative group">
                <img
                    src="https://i.pravatar.cc/40"
                    className="w-9 h-9 rounded-full cursor-pointer"
                />
                {tooltip("Profile")}
            </div>

        </div>
    );
}

export default SidebarIcons;