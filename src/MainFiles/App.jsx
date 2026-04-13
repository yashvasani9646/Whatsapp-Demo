import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../MainChatFlows/Sidebar";
import Chat from "../MainChatFlows/Chat";
import SidebarIcons from "../SidebarControls/SidebarIcons";
import StatusPage from "../SidebarControls/StatusPage";
import ArchivePage from "../SidebarControls/Archivepage";
import CallsPage from "../SidebarControls/CallPage";

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  const [chats, setChats] = useState([
    // 🔹 SAME DATA (unchanged)
  ]);

  const [archivedChats, setArchivedChats] = useState([
    // 🔹 SAME DATA (unchanged)
  ]);

  const archiveChat = (chat) => {
    setChats(prev => prev.filter(c => c.id !== chat.id));
    setArchivedChats(prev => [chat, ...prev]);
    setSelectedChat(null);
  };

  const unarchiveChat = (chat) => {
    setArchivedChats(prev => prev.filter(c => c.id !== chat.id));
    setChats(prev => [chat, ...prev]);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar Icons */}
      <SidebarIcons />

      {/* ROUTES */}
      <Routes>

        {/* ✅ CHAT */}
        <Route
          path="/"
          element={
            <div className="flex flex-1 h-full">

              <div
                className={`
                ${selectedChat ? "hidden md:block" : "block"}
                w-full md:w-[350px] h-full flex flex-col
              `}
              >
                <Sidebar
                  chats={chats}
                  setSelectedChat={setSelectedChat}
                  archiveChat={archiveChat}
                />
              </div>

              <div
                className={`
                ${selectedChat ? "block" : "hidden md:block"}
                flex-1 h-full flex flex-col
              `}
              >
                <Chat
                  selectedChat={selectedChat}
                  chats={chats}
                  archivedChats={archivedChats}
                  setChats={setChats}
                  setSelectedChat={setSelectedChat}
                />
              </div>

            </div>
          }
        />

        {/* ✅ STATUS */}
        <Route path="/status" element={<StatusPage />} />

        {/* ✅ ARCHIVE */}
        <Route
          path="/archive"
          element={
            <div className="flex flex-1 h-full">

              <div
                className={`
                ${selectedChat ? "hidden md:block" : "block"}
                w-full md:w-[350px] h-full
              `}
              >
                <ArchivePage
                  chats={archivedChats}
                  unarchiveChat={unarchiveChat}
                  setSelectedChat={setSelectedChat}
                />
              </div>

              <div
                className={`
                ${selectedChat ? "block" : "hidden md:flex"}
                flex-1 h-full
              `}
              >
                {!selectedChat ? (
                  <div className="flex flex-1 items-center justify-center bg-[#efeae2]">
                    <div className="text-center text-gray-400">
                      <h2 className="text-xl">Select archived chat</h2>
                      <p className="text-sm mt-2">
                        Messages you archive will appear here
                      </p>
                    </div>
                  </div>
                ) : (
                  <Chat
                    selectedChat={selectedChat}
                    chats={chats}
                    archivedChats={archivedChats}
                    setChats={setChats}
                    setArchivedChats={setArchivedChats}
                    setSelectedChat={setSelectedChat}
                  />
                )}
              </div>

            </div>
          }
        />

        {/* ✅ CALL */}
        <Route
          path="/call"
          element={
            <div className="flex flex-1 h-full">
              <CallsPage />
            </div>
          }
        />

      </Routes>
    </div>
  );
}

export default App;