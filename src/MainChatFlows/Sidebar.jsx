import { useState } from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoMdMore } from "react-icons/io";

const Sidebar = ({ setSelectedChat, chats, archiveChat, selectedChat }) => {
    const [search, setSearch] = useState("");

    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="w-full md:w-[350px] h-full flex flex-col overflow-hidden 
bg-white dark:bg-[#111b21] text-black dark:text-white">

            <div className="p-3 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Chats</h2>
                <div className="flex gap-3 text-xl">
                    <span><LuMessageSquarePlus /></span>
                    <span><IoMdMore /></span>
                </div>
            </div>

            <div className="px-3 pb-2">
                <input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white outline-none"
                />
            </div>

            {/* Filters */}
            <div className="flex gap-2 px-3 pb-2 overflow-x-auto">
                <button className="bg-green-100 dark:bg-green-600 text-green-600 dark:text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    All
                </button>
                <button className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    Unread
                </button>
                <button className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    Favourites
                </button>
            </div>

            {/* Chats list */}
            <div className="flex-1 overflow-y-auto">
                {
                    filteredChats.length === 0 && (
                        <p className="text-center text-gray-400 dark:text-gray-500 mt-4">
                            No chats found
                        </p>
                    )
                }

                {filteredChats.map((chat) => (
                    <div
                        key={chat.id}
                        onClick={() => {
                            console.log("clicked", chat);
                            setSelectedChat(chat);
                        }}
                        onDoubleClick={() => archiveChat(chat)}
                        className={`flex items-center gap-3 p-3 cursor-pointer
                        ${selectedChat?.id === chat.id
                                ? "bg-green-100 dark:bg-green-800 border-l-4 border-green-500"
                                : "hover:bg-gray-100 dark:hover:bg-gray-700"}
                    `}
                    >

                        {/* PROFILE + ONLINE DOT */}
                        <div className="relative">
                            <img
                                src={chat.img}
                                className="w-10 h-10 rounded-full"
                            />

                            {chat.online && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">
                                {chat.name}
                            </h3>

                            <p className="text-sm truncate">
                                {chat.typing ? (
                                    <span className="text-green-500 italic">Typing...</span>
                                ) : chat.online ? (
                                    <span className="text-green-500">Online</span>
                                ) : (
                                    <span className="text-gray-400 dark:text-gray-500">
                                        Last seen {chat.lastSeen}
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-400">{chat.time}</p>

                            {chat.unread > 0 && (
                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                    {chat.unread}
                                </span>
                            )}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}


export default Sidebar;