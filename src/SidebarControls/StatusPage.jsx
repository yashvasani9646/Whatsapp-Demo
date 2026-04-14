import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdMore } from "react-icons/io";

const StatusPage = () => {

    const statuses = [
        { id: 1, name: "Arjun Mehta", time: "Today at 2:37 pm", img: "https://i.pravatar.cc/40?img=30" },
        { id: 2, name: "Kavya Shah", time: "Today at 2:19 pm", img: "https://i.pravatar.cc/40?img=31" },
        { id: 3, name: "Rohan Patel", time: "Today at 1:32 pm", img: "https://i.pravatar.cc/40?img=32" },
        { id: 4, name: "Meera Joshi", time: "Today at 11:57 am", img: "https://i.pravatar.cc/40?img=33" },
        { id: 5, name: "Yash Desai", time: "Today at 10:54 am", img: "https://i.pravatar.cc/40?img=34" },
        { id: 6, name: "Ankit Sharma", time: "Today at 9:32 am", img: "https://i.pravatar.cc/40?img=35" },
        { id: 7, name: "Pooja Verma", time: "Today at 9:17 am", img: "https://i.pravatar.cc/40?img=36" },
        { id: 8, name: "Rahul Singh", time: "Today at 9:13 am", img: "https://i.pravatar.cc/40?img=37" },
        { id: 9, name: "Neha Gupta", time: "Yesterday at 10:45 pm", img: "https://i.pravatar.cc/40?img=38" },
        { id: 10, name: "Aman Jain", time: "Yesterday at 8:20 pm", img: "https://i.pravatar.cc/40?img=39" },
        { id: 11, name: "Simran Kaur", time: "Yesterday at 6:10 pm", img: "https://i.pravatar.cc/40?img=40" },
        { id: 12, name: "Dev Patel", time: "Yesterday at 4:05 pm", img: "https://i.pravatar.cc/40?img=41" },
    ];

    return (
        <div className="flex flex-1 h-screen overflow-hidden">

            {/* LEFT SIDE */}
            <div className="
                w-full 
                sm:w-[40%] 
                md:w-[30%] 
                bg-white dark:bg-[#0b141a] 
                border-r border-gray-200 dark:border-gray-800 
                flex flex-col h-full
                text-black dark:text-white
            ">

                {/* Header */}
                <div className="
                    p-3 flex justify-between items-center sticky top-0 
                    bg-white dark:bg-[#202c33] 
                    z-10 border-b border-gray-200 dark:border-gray-800
                ">
                    <h2 className="text-lg sm:text-xl font-semibold">Status</h2>
                    <div className="flex gap-4 text-lg sm:text-xl">
                        <HiOutlinePlus className="cursor-pointer" />
                        <IoMdMore className="cursor-pointer" />
                    </div>
                </div>

                {/* My Status */}
                <div className="
                    flex items-center gap-3 p-3 
                    hover:bg-gray-100 dark:hover:bg-[#202c33] 
                    cursor-pointer
                ">
                    <img
                        src="https://i.pravatar.cc/40"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-500 p-[2px]"
                    />
                    <div>
                        <h3 className="font-medium text-sm sm:text-base">My status</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Today at 12:03 am
                        </p>
                    </div>
                </div>

                {/* Recent */}
                <p className="
                    px-3 py-1 text-gray-500 dark:text-gray-400 
                    text-xs sm:text-sm 
                    bg-white dark:bg-[#0b141a] 
                    sticky top-[60px] z-10
                ">
                    Recent
                </p>

                {/* Status List */}
                <div className="flex-1 overflow-y-auto">
                    {statuses.map((s) => (
                        <div
                            key={s.id}
                            className="
                                flex items-center gap-3 p-3 
                                hover:bg-gray-100 dark:hover:bg-[#202c33] 
                                cursor-pointer
                            "
                        >
                            <img
                                src={s.img}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-500 p-[2px]"
                            />
                            <div>
                                <h3 className="font-medium text-sm sm:text-base">
                                    {s.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    {s.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="
                hidden sm:flex 
                flex-1 items-center justify-center 
                bg-[#efeae2] dark:bg-[#0b141a]
                text-black dark:text-white
            ">
                <div className="text-center px-4">
                    <h1 className="text-xl sm:text-2xl">Share status updates</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                        Share photos, videos and text that disappear after 24 hours.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default StatusPage;