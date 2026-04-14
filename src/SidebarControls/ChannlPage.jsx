import React from "react";
import { IoMdAdd } from "react-icons/io";

const ChannelPage = () => {

    const channels = [
        {
            id: 1,
            name: "Gujarat Information",
            followers: "107K followers",
            img: "https://i.pravatar.cc/40?img=11",
        },
        {
            id: 2,
            name: "JKBose",
            followers: "111K followers",
            img: "https://i.pravatar.cc/40?img=12",
        },
        {
            id: 3,
            name: "WhatsApp",
            followers: "230.9M followers",
            img: "https://i.pravatar.cc/40?img=13",
        },
    ];

    return (
        <div className="flex flex-1 h-full">

            {/* LEFT SIDE */}
            <div className="
                w-full md:w-[350px] 
                border-r border-gray-200 dark:border-gray-800 
                bg-white dark:bg-[#0b141a] 
                text-black dark:text-white
                flex flex-col
            ">

                {/* HEADER */}
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Channels</h2>
                    <IoMdAdd className="text-xl cursor-pointer" />
                </div>

                {/* SEARCH */}
                <div className="px-3 pb-2">
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

                {/* CHANNEL LIST */}
                <div className="flex-1 overflow-y-auto px-2">

                    <p className="text-sm text-gray-500 dark:text-gray-400 px-2 py-2">
                        Find channels to follow
                    </p>

                    {channels.map((c) => (
                        <div
                            key={c.id}
                            className="
                                flex items-center gap-3 p-2 rounded-lg 
                                hover:bg-gray-100 dark:hover:bg-[#202c33] 
                                cursor-pointer
                            "
                        >
                            <img src={c.img} className="w-10 h-10 rounded-full" />

                            <div className="flex-1">
                                <h3 className="font-medium text-sm">{c.name}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {c.followers}
                                </p>
                            </div>

                            <button className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                                Follow
                            </button>
                        </div>
                    ))}

                </div>

                {/* BOTTOM BUTTONS */}
                <div className="p-3 space-y-2">
                    <button className="w-full border border-gray-300 dark:border-gray-700 rounded-full py-2">
                        Discover more
                    </button>

                    <button className="w-full border border-gray-300 dark:border-gray-700 rounded-full py-2">
                        + Create channel
                    </button>
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="
                hidden md:flex flex-1 
                items-center justify-center 
                bg-[#efeae2] dark:bg-[#0b141a]
                text-black dark:text-white
            ">
                <div className="text-center max-w-md">
                    <h1 className="text-2xl mb-2">Discover channels</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Entertainment, sports, news, lifestyle, people and more. 
                        Follow the channels that interest you
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ChannelPage;