import { useState } from "react";
import Sidebar from "../MainChatFlows/Sidebar";
import Chat from "../MainChatFlows/Chat";
import SidebarIcons from "../SidebarControls/SidebarIcons";
import StatusPage from "../SidebarControls/StatusPage";
import ArchivePage from "../SidebarControls/Archivepage";
import CallsPage from "../SidebarControls/CallPage";
import ChannelPage from "../SidebarControls/ChannlPage";

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      message: "Kal milte hai",
      time: "9:45 am",
      img: "https://i.pravatar.cc/40?img=11",
      unread: 2,
      online: true,
      lastSeen: "2:30 PM",
      typing: false,
      messages: [
        { text: "Kal milte hai", sender: "other" },
        { text: "Haan bhai 👍", sender: "me" },
      ],
    },
    {
      id: 2,
      name: "Priya Patel",
      message: "Okay 👍",
      time: "9:30 am",
      img: "https://i.pravatar.cc/40?img=12",
      unread: 0,
      online: false,
      lastSeen: "Yesterday",
      messages: [
        { text: "Okay 👍", sender: "other" },
        { text: "Thanks 😄", sender: "me" },
      ],
    },
    {
      id: 3,
      name: "Amit Verma",
      message: "Photo",
      time: "Yesterday",
      img: "https://i.pravatar.cc/40?img=13",
      unread: 1,
      online: true,
      lastSeen: "1:10 PM",
      typing: false,
      messages: [
        { text: "Photo bheji hai", sender: "other" },
        { text: "Nice 👌", sender: "me" },
      ],
    },
    {
      id: 4,
      name: "Sneha Joshi",
      message: "Call karna",
      time: "Yesterday",
      img: "https://i.pravatar.cc/40?img=14",
      unread: 0,
      online: false,
      lastSeen: "Today 10:00 AM",
      typing: true,
      messages: [
        { text: "Call karna", sender: "other" },
        { text: "Abhi karta hu", sender: "me" },
      ],
    },
    {
      id: 5,
      name: "Vikas Yadav",
      message: "Message seen",
      time: "Yesterday",
      img: "https://i.pravatar.cc/40?img=15",
      unread: 3,
      online: true,
      lastSeen: "5:45 PM",
      typing: false,
      messages: [
        { text: "Message seen", sender: "other" },
        { text: "Reply karo 😅", sender: "me" },
      ],
    },
    {
      id: 6,
      name: "Neha Gupta",
      message: "Typing...",
      time: "Saturday",
      img: "https://i.pravatar.cc/40?img=16",
      unread: 0,
      online: false,
      lastSeen: "Saturday 6:20 PM",
      typing: true,
      messages: [
        { text: "Typing...", sender: "other" },
        { text: "Kya likh rahi ho? 😄", sender: "me" },
      ],
    },
    {
      id: 7,
      name: "Rohit Singh",
      message: "😂😂😂",
      time: "Saturday",
      img: "https://i.pravatar.cc/40?img=17",
      unread: 0,
      online: true,
      lastSeen: "3:00 PM",
      typing: false,
      messages: [
        { text: "😂😂😂", sender: "other" },
        { text: "Kya hua? 😂", sender: "me" },
      ],
    },
    {
      id: 8,
      name: "Anjali Mehta",
      message: "Voice note",
      time: "Friday",
      img: "https://i.pravatar.cc/40?img=18",
      unread: 2,
      online: false,
      lastSeen: "Friday 8:00 PM",
      typing: true,
      messages: [
        { text: "Voice note bheja", sender: "other" },
        { text: "Sun liya 👍", sender: "me" },
      ],
    },
    {
      id: 9,
      name: "Karan Malhotra",
      message: "Let's go",
      time: "Friday",
      img: "https://i.pravatar.cc/40?img=19",
      unread: 0,
      online: true,
      lastSeen: "1:15 PM",
      typing: false,
      messages: [
        { text: "Let's go", sender: "other" },
        { text: "Ready 😎", sender: "me" },
      ],
    },
    {
      id: 10,
      name: "Pooja Shah",
      message: "Good morning",
      time: "Thursday",
      img: "https://i.pravatar.cc/40?img=20",
      unread: 1,
      online: false,
      lastSeen: "Thursday 9:00 AM",
      typing: false,
      messages: [
        { text: "Good morning ☀️", sender: "other" },
        { text: "Morning 😊", sender: "me" },
      ],
    },
    {
      id: 11,
      name: "Manish Kumar",
      message: "File bheji hai",
      time: "Thursday",
      img: "https://i.pravatar.cc/40?img=21",
      unread: 0,
      online: true,
      lastSeen: "4:30 PM",
      typing: false,
      messages: [
        { text: "File bheji hai", sender: "other" },
        { text: "Check kar li 👍", sender: "me" },
      ],
    },
    {
      id: 12,
      name: "Riya Desai",
      message: "👍",
      time: "Wednesday",
      img: "https://i.pravatar.cc/40?img=22",
      unread: 4,
      online: false,
      lastSeen: "Wednesday 7:45 PM",
      typing: false,
      messages: [
        { text: "👍", sender: "other" },
        { text: "👌", sender: "me" },
      ],
    },
    {
      id: 13,
      name: "Akash Jain",
      message: "Meeting at 5",
      time: "Wednesday",
      img: "https://i.pravatar.cc/40?img=23",
      unread: 0,
      online: true,
      lastSeen: "5:00 PM",
      typing: true,
      messages: [
        { text: "Meeting at 5", sender: "other" },
        { text: "On time 👍", sender: "me" },
      ],
    },
    {
      id: 14,
      name: "Nikita Singh",
      message: "Done",
      time: "Tuesday",
      img: "https://i.pravatar.cc/40?img=24",
      unread: 2,
      online: false,
      lastSeen: "Tuesday 11:30 AM",
      typing: true,
      messages: [
        { text: "Done", sender: "other" },
        { text: "Great 😄", sender: "me" },
      ],
    },
    {
      id: 15,
      name: "Yash Patel",
      message: "Check this",
      time: "Monday",
      img: "https://i.pravatar.cc/40?img=25",
      unread: 0,
      online: true,
      lastSeen: "2:00 PM",
      typing: true,
      messages: [
        { text: "Check this", sender: "other" },
        { text: "Nice 👍", sender: "me" },
      ],
    },
  ]);

  const [archivedChats, setArchivedChats] = useState([
    {
      id: 101,
      name: "Ritik",
      message: "Coming?",
      time: "11:50 am",
      img: "https://i.pravatar.cc/40?img=30",
      unread: 0,
      messages: [
        { text: "Aavso?", sender: "other" },
        { text: "Haa aavish 👍", sender: "me" },
      ],
    },
    {
      id: 102,
      name: "Pall",
      message: "Ok 👍",
      time: "Tuesday",
      img: "https://i.pravatar.cc/40?img=31",
      unread: 0,
      messages: [
        { text: "Kaam thai gayu?", sender: "other" },
        { text: "Haa complete", sender: "me" },
      ],
    },
    {
      id: 103,
      name: "Dhruvi Patel",
      message: "Photo",
      time: "Yesterday",
      img: "https://i.pravatar.cc/40?img=32",
      unread: 2,
      messages: [
        { text: "Photo mokli", sender: "other" },
        { text: "Nice pic 😍", sender: "me" },
      ],
    },
  ]);

  const archiveChat = (chat) => {
    setChats(prev => prev.filter(c => c.id !== chat.id));
    setArchivedChats(prev => [chat, ...prev]);
    setSelectedChat(null); // ✅ ADD THIS
  };


  const unarchiveChat = (chat) => {
    setArchivedChats(prev => prev.filter(c => c.id !== chat.id));
    setChats(prev => [chat, ...prev]);
  };


  const [activeTab, setActiveTab] = useState("chat");



  return (
    <div className={`${darkMode ? "dark" : ""} flex h-screen overflow-hidden bg-[#efeae2] dark:bg-[#0b141a]`}>
      <SidebarIcons
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {activeTab === "chat" && (
        <div className="flex flex-1 h-full">

          {/* Sidebar */}
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
              selectedChat={selectedChat}
            />
          </div>

          {/* Chat */}
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
      )}

      {activeTab === "status" && (
        <div className="flex-1 flex items-center justify-center h-full">
          <StatusPage />
        </div>
      )}

      {activeTab === "archive" && (
        <div className="flex flex-1 h-full">

          {/* LEFT */}
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

          {/* RIGHT */}
          <div
            className={`
        ${selectedChat ? "block" : "hidden md:flex"}
        flex-1 h-full
      `}
          >

            {!selectedChat ? (
              <div className="flex flex-1 items-center justify-center bg-[#efeae2] dark:bg-gray-800 text-gray-500 dark:text-gray-300">
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
      )}

      {activeTab === "call" && (
        <div className="flex flex-1 h-full">
          <CallsPage />
        </div>
      )}

      {activeTab === "channel" && (
        <div className="flex flex-1 h-full">
          <ChannelPage />
        </div>
      )}
    </div>
  );
}

export default App;