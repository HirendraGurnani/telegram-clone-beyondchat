import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Chats</h2>
      </div>
      <div className="sidebar-chats">
        <div className="chat">
          <p>Chat 1</p>
        </div>
        <div className="chat">
          <p>Chat 2</p>
        </div>
        <div className="chat">
          <p>Chat 3</p>
        </div>
        {/* Add more chats as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
