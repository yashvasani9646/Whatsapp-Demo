import React from "react";
import { FiVideo, FiLink, FiPhone, FiCalendar } from "react-icons/fi";
import { FiPhoneIncoming, FiPhoneOutgoing, FiPhoneMissed } from "react-icons/fi";

const CallsPage = () => {

    const calls = [
        { id: 1, name: "Rahul Sharma", type: "incoming", time: "2:30 PM" },
        { id: 2, name: "Priya Patel", type: "missed", time: "Yesterday" },
        { id: 3, name: "Amit Verma", type: "outgoing", time: "Monday" },
        { id: 4, name: "Sneha Joshi", type: "incoming", time: "Sunday" },
    ];

    return (
        <div className="flex flex-1 h-full">

            {/* LEFT SIDE */}
            <div className="
                w-full md:w-[350px] h-full flex flex-col 
                border-r border-gray-200 dark:border-gray-800 
                bg-white dark:bg-[#0b141a] 
                text-black dark:text-white
            ">

                {/* Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                    <h2 className="text-xl font-semibold">Calls</h2>
                </div>

                {/* Search */}
                <div className="p-3">
                    <input
                        placeholder="Search name or number"
                        className="
                            w-full p-2 rounded-lg 
                            bg-gray-100 dark:bg-[#202c33] 
                            text-black dark:text-white 
                            outline-none
                        "
                    />
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto px-3">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Recent
                    </h3>

                    {calls.map((chat, i) => (
                        <div
                            key={chat.id}
                            className="
                                flex items-center gap-3 py-2 px-2 rounded-lg 
                                cursor-pointer 
                                hover:bg-gray-100 dark:hover:bg-[#202c33] 
                                transition
                            "
                        >
                            <img
                                src={`https://i.pravatar.cc/40?img=${i + 1}`}
                                className="w-10 h-10 rounded-full"
                            />

                            <div className="flex-1">
                                <p className="font-medium">{chat.name}</p>

                                <p className="text-sm flex items-center gap-1">
                                    {chat.type === "incoming" && (
                                        <FiPhoneIncoming className="text-green-500" />
                                    )}
                                    {chat.type === "outgoing" && (
                                        <FiPhoneOutgoing className="text-gray-500 dark:text-gray-400" />
                                    )}
                                    {chat.type === "missed" && (
                                        <FiPhoneMissed className="text-red-500" />
                                    )}

                                    <span className="text-gray-400 dark:text-gray-500 capitalize">
                                        {chat.type}
                                    </span>
                                </p>
                            </div>

                            <div className="text-xs text-gray-400 dark:text-gray-500">
                                {chat.time}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="
                hidden md:flex flex-1 flex-col items-center justify-center 
                bg-[#efeae2] dark:bg-[#0b141a] 
                text-black dark:text-white
            ">

                <div className="grid grid-cols-2 gap-10">

                    <div className="flex flex-col items-center gap-2">
                        <div className="p-6 bg-white dark:bg-[#202c33] rounded-xl shadow">
                            <FiVideo size={24} />
                        </div>
                        <p>Start call</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="p-6 bg-white dark:bg-[#202c33] rounded-xl shadow">
                            <FiLink size={24} />
                        </div>
                        <p>New call link</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="p-6 bg-white dark:bg-[#202c33] rounded-xl shadow">
                            <FiPhone size={24} />
                        </div>
                        <p>Call a number</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="p-6 bg-white dark:bg-[#202c33] rounded-xl shadow">
                            <FiCalendar size={24} />
                        </div>
                        <p>Schedule call</p>
                    </div>

                </div>

                <p className="text-sm text-gray-400 dark:text-gray-500 mt-10">
                    🔒 Your personal calls are end-to-end encrypted
                </p>

            </div>
        </div>
    );
};

export default CallsPage;