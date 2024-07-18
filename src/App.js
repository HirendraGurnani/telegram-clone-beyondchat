import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import "./App.css";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [dark, setDark] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isChatListHeadingVisible, setIsChatListHeadingVisible] =
    useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openChat = (chat) => {
    setSelectedChat(chat);
    fetch(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chat.id}`
    )
      .then((response) => response.json())
      .then((data) => setMessages(data.data))
      .catch((error) => console.error("Error fetching chat messages:", error));

    if (window.innerWidth < 412) {
      setIsNavOpen(false);
      setIsHeaderVisible(false); 
      setIsChatListHeadingVisible(false);
    }
  };

  const fetchChats = async (page) => {
    const response = await fetch(
      `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
    );
    const data = await response.json();
    return data.data.data;
  };

  const fetchLastMessage = async (chatId) => {
    const response = await fetch(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}&limit=1`
    );
    const data = await response.json();
    return data.data[0]?.message || "No messages";
  };

  useEffect(() => {
    const fetchAllChats = async () => {
      try {
        const response = await fetch(
          "https://devapi.beyondchats.com/api/get_all_chats?page=1"
        );
        const data = await response.json();
        const totalPages = data.data.last_page;

        const allChats = await Promise.all(
          Array.from({ length: totalPages }, (_, page) => fetchChats(page + 1))
        ).then((pages) => pages.flat());

        const chatPromises = allChats.map(async (chat) => {
          const lastMessage = await fetchLastMessage(chat.id);
          return {
            ...chat,
            lastMessage,
          };
        });

        const chatsWithLastMessage = await Promise.all(chatPromises);
        setChats(chatsWithLastMessage);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchAllChats();
  }, []);

  return (
    <div className="app">
      {isHeaderVisible && (
        <header className="app-header">
          <button onClick={toggleNav} className="nav-toggle">
            <svg
              viewBox="0 0 24 24"
              fill="#aaaaaa"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7H19"
                stroke="#aaaaaa"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12L19 12"
                stroke="#aaaaaa"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 17L19 17"
                stroke="#aaaaaa"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="search-input">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L21.2929 22.7071ZM17 10C17 13.866 13.866 17 10 17V19C14.9706 19 19 14.9706 19 10H 17ZM10 17C6.13401 17 3 13.866 3 10H1C1 14.9706 5.02944 19 10 19V17ZM3 10C3 6.13401 6.13401 3 10 3V1C5.02944 1 1 5.02944 1 10H3ZM10 3C13.866 3 17 6.13401 17 10H19C19 5.02944 14.9706 1 10 1V3ZM14.7929 16.2071L21.2929 22.7071L22.7071 21.2929L16.2071 14.7929L14.7929 16.2071Z"
                fill="#aaaaaa80"
              />
            </svg>
            <input type="search" name="Search" id="" placeholder="Search" />
          </div>
        </header>
      )}
      <Nav
        isOpen={isNavOpen}
        toggleNav={toggleNav}
        dark={dark}
        setDark={setDark}
      />
      <main className={`app-content ${selectedChat ? "chat-selected" : ""}`}>
        {isChatListHeadingVisible && (
          <div className="chat-list-heading">
            <p>All</p>
          </div>
        )}
        <ChatList chats={chats} openChat={openChat} />
        {selectedChat && (
          <Chat
            chat={selectedChat}
            messages={messages}
            closeChat={() => {
              setSelectedChat(null);
              setIsHeaderVisible(true); 
              setIsChatListHeadingVisible(true);
            }}
          />
        )}
      </main>
    </div>
  );
};

export default App;
