import React from 'react'
import { FaMessage } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdOutlineArchive } from "react-icons/md";

const SidebarIcons = ({ setActiveTab }) => {
    return (
        <div className="
            w-[50px] sm:w-[60px] 
            bg-white flex flex-col items-center 
            py-3 sm:py-4 
            border-r
        ">

            {/* Chat */}
            <div className="relative group mb-4 sm:mb-6">
                <div
                    className="text-xl sm:text-2xl cursor-pointer"
                    onClick={() => setActiveTab("chat")}
                >
                    <FaMessage />
                </div>
                <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Chats
                </span>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6 text-gray-500 text-lg sm:text-xl">

                {/* Status */}
                <div className="relative group">
                    <span
                        className="text-black cursor-pointer"
                        onClick={() => setActiveTab("status")}
                    >
                        <GiWorld />
                    </span>
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Status
                    </span>
                </div>

                {/* Archive */}
                <div className="relative group">
                    <span
                        className="text-black cursor-pointer"
                        onClick={() => setActiveTab("archive")}
                    >
                        <MdOutlineArchive />
                    </span>
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Archive
                    </span>
                </div>

                {/* Call */}
                <div className="relative group">
                    <span
                        className="text-black cursor-pointer"
                        onClick={() => setActiveTab("call")}
                    >
                        <MdCall />
                    </span>
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Calls
                    </span>
                </div>

                {/* Settings */}
                <div className="relative group">
                    <span className="text-black cursor-pointer">
                        <CiSettings />
                    </span>
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Settings
                    </span>
                </div>
            </div>

            {/* Profile */}
            <div className="mt-auto relative group">
                <img
                    src="https://i.pravatar.cc/40"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
                />
                <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Profile
                </span>
            </div>

        </div>
    );
}

export default SidebarIcons;