import React, { useState } from "react";
import { getProfileIconClass } from "../utils";

const ChatList = ({ chats, openChat, isChatListHeadingVisible }) => {
  const [activeChatId, setActiveChatId] = useState(null);

  const handleChatClick = (chat) => {
    setActiveChatId(chat.id);
    openChat(chat);
    
  };

  const truncateMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return message.slice(0, maxLength) + "...";
    }
    return message;
  };

  return (
    <>
      {isChatListHeadingVisible && ( 
        <div className="chat-list-heading">
          <p>All</p>
        </div>
      )}
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div
            key={chat.id}
            className={`chat-item ${activeChatId === chat.id ? "active" : ""}`}
            onClick={() => handleChatClick(chat)}
          >
            <div className={`profile-icon ${getProfileIconClass(index)}`}>
              {chat.creator.name ? chat.creator.name[0].toUpperCase() : "U"}
            </div>
            <div className="chat-info">
              <h3>{chat.creator.name || "Unknown User"}</h3>
              <p>{truncateMessage(chat.lastMessage, 45)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatList;
