import { useState, useRef } from "react";
import { IoMdSend, IoMdSearch, IoMdMore } from "react-icons/io";
import { MdCall, MdInfo, MdBlock } from "react-icons/md";
import { FaFileAlt, FaImage, FaCamera, FaHeadphones, FaUser, FaTrash, FaFlag, FaRegClock } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { IoMdVolumeOff } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

const MenuItem = ({ icon, label }) => (
    <div className="
        flex items-center gap-3 px-3 py-2 
        hover:bg-gray-100 dark:hover:bg-[#202c33] 
        cursor-pointer rounded-lg
    ">
        <span className="text-lg text-gray-600 dark:text-gray-300">{icon}</span>
        <span className="text-black dark:text-white">{label}</span>
    </div>
);

const Chat = ({ selectedChat, chats, setChats, setSelectedChat, archivedChats, setArchivedChats }) => {
    const [input, setInput] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [showDotsMenu, setShowDotsMenu] = useState(false);

    const menuRef = useRef();
    const dotsRef = useRef();

    if (!selectedChat) {
        return (
            <div className="flex-1 h-full flex items-center justify-center bg-[#efeae2] dark:bg-[#0b141a]">

                <div className="text-center text-gray-400 max-w-md">
                    <h2 className="text-2xl font-light mb-2">
                        WhatsApp Web
                    </h2>

                    <p className="text-sm">
                        Send and receive messages without keeping your phone online.
                    </p>

                    <p className="text-xs mt-3">
                        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                    </p>
                </div>

            </div>
        );
    }
    const currentChat =
        chats.find((c) => c.id === selectedChat.id) ||
        archivedChats.find((c) => c.id === selectedChat.id);

    if (!currentChat) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <h2 className="text-gray-500">Chat not found</h2>
            </div>
        );
    }

    const sendMessage = () => {
        if (!input.trim()) return;

        // 🔹 check chat kaha hai
        const isMainChat = chats.some(c => c.id === selectedChat.id);

        if (isMainChat) {
            const updatedChats = chats.map((chat) => {
                if (chat.id === selectedChat.id) {
                    return {
                        ...chat,
                        messages: [...chat.messages, { text: input, sender: "me" }],
                    };
                }
                return chat;
            });

            setChats(updatedChats);
        } else {
            const updatedArchived = archivedChats.map((chat) => {
                if (chat.id === selectedChat.id) {
                    return {
                        ...chat,
                        messages: [...chat.messages, { text: input, sender: "me" }],
                    };
                }
                return chat;
            });

            setArchivedChats(updatedArchived); // 🔥 IMPORTANT
        }

        setInput("");
    };

    return (
        <div className="flex flex-col h-full bg-[#efeae2] dark:bg-[#0b141a] relative overflow-hidden">

            {/* Header */}
            <div className="p-2 sm:p-3 bg-gray-200 dark:bg-[#202c33] flex items-center justify-between shadow-sm text-black dark:text-white">

                <div className="flex items-center gap-2 sm:gap-3">

                    <span
                        className="text-xl cursor-pointer md:hidden"
                        onClick={() => setSelectedChat(null)}
                    >
                        <IoArrowBack />
                    </span>

                    <img src={selectedChat.img} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full" />

                    <div>
                        <h2 className="font-medium text-sm sm:text-base">{selectedChat.name}</h2>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">online</p>
                    </div>
                </div>

                <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                    <MdCall />
                    <IoMdSearch />

                    <span onClick={() => setShowDotsMenu(!showDotsMenu)} className="cursor-pointer">
                        <IoMdMore />
                    </span>
                </div>
            </div>

            {/* TOP MENU */}
            {showDotsMenu && (
                <div
                    ref={dotsRef}
                    className="absolute top-12 right-3 bg-white dark:bg-[#233138] rounded-2xl shadow-xl w-64 p-2 z-[999] text-sm text-black dark:text-white"
                >
                    <MenuItem icon={<MdInfo />} label="Contact info" />
                    <MenuItem icon={<IoMdSearch />} label="Search" />
                    <MenuItem icon={<BsList />} label="Select messages" />
                    <MenuItem icon={<IoMdVolumeOff />} label="Mute notifications" />
                    <MenuItem icon={<FaRegClock />} label="Disappearing messages" />
                    <MenuItem icon={<AiOutlineHeart />} label="Add to favourites" />
                    <MenuItem icon={<BsList />} label="Add to list" />
                    <MenuItem icon={<MdCall />} label="Close chat" />

                    <div className="border-t my-1"></div>

                    <MenuItem icon={<FaFlag />} label="Report" />
                    <MenuItem icon={<MdBlock />} label="Block" />
                    <MenuItem icon={<FaTrash />} label="Delete chat" />
                </div>
            )}

            {/* Messages */}
            <div className="flex-1 p-2 sm:p-4 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:bg-[#0b141a]">
                <div className="text-center my-3">
                    <span className="bg-gray-200 dark:bg-[#202c33] px-3 py-1 rounded-full text-xs text-black dark:text-white">
                        1 unread message
                    </span>
                </div>

                {currentChat.messages.map((msg, i) => (
                    <div key={i} className={`mb-3 flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`
            px-3 py-2 rounded-lg 
            max-w-[75%] sm:max-w-xs 
            text-sm shadow 
          ${msg.sender === "me"
                                    ? "bg-[#d9fdd3] dark:bg-[#005c4b] text-black dark:text-white"
                                    : "bg-white dark:bg-[#202c33] text-black dark:text-white"}
          `}
                        >
                            <div className="break-words">{msg.text}</div>
                            <div className="text-[10px] sm:text-xs text-right text-gray-500 mt-1">
                                10:25 am
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* BOTTOM MENU */}
            {showMenu && (
                <div
                    ref={menuRef}
                    className="absolute bottom-16 left-4 bg-white dark:bg-[#233138] rounded-2xl shadow-xl w-56 p-2 z-[999] text-black dark:text-white"
                >
                    <MenuItem icon={<FaFileAlt className="text-blue-500" />} label="Document" />
                    <MenuItem icon={<FaImage className="text-blue-400" />} label="Photos & videos" />
                    <MenuItem icon={<FaCamera className="text-pink-500" />} label="Camera" />
                    <MenuItem icon={<FaHeadphones className="text-orange-500" />} label="Audio" />
                    <MenuItem icon={<FaUser className="text-blue-600" />} label="Contact" />
                    <MenuItem icon={<BsList className="text-yellow-500" />} label="Poll" />
                    <MenuItem icon={<FaRegClock className="text-pink-400" />} label="Event" />
                    <MenuItem icon={<AiOutlineHeart className="text-green-500" />} label="New sticker" />
                </div>
            )}

            {/* Input */}
            <div className="p-2 sm:p-3 bg-gray-200 dark:bg-[#202c33] flex items-center gap-2 sm:gap-3 relative">
                <span
                    className="text-lg sm:text-xl cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    +
                </span>

                <span className="text-lg sm:text-xl">😊</span>

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    className="flex-1 p-2 text-sm sm:text-base rounded-full outline-none px-3 sm:px-4 bg-white dark:bg-[#2a3942] text-black dark:text-white"
                />

                <button
                    onClick={sendMessage}
                    className="bg-green-500 text-white p-2 rounded-full"
                >
                    <IoMdSend />
                </button>
            </div>

        </div>
    );
};

export default Chat;