import React from "react";

const ArchivePage = ({ chats, unarchiveChat, setSelectedChat }) => {
  return (
    <div className="w-full md:w-[350px] h-full flex flex-col border-r 
bg-white dark:bg-[#0b141a] 
border-gray-200 dark:border-gray-800
text-black dark:text-white">

      {/* LEFT SIDE */}
      <div className="w-full md:w-[350px] h-full flex flex-col border-r 
bg-white dark:bg-[#0b141a] 
border-gray-200 dark:border-gray-800
text-black dark:text-white">

        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold">Archived</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            These chats stay archived when new messages are received.
          </p>
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">

          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              onDoubleClick={() => unarchiveChat(chat)}
              className="flex items-center gap-3 p-3 
hover:bg-gray-100 dark:hover:bg-[#202c33] 
cursor-pointer"
            >
              <img src={chat.img} className="w-10 h-10 rounded-full" />

              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{chat.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {chat.message}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400 dark:text-gray-500" />
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

      {/* RIGHT SIDE (empty like WhatsApp) */}

    </div>
  );
};

export default ArchivePage;