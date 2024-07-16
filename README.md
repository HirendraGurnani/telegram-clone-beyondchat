# Chat Application

This is a Telegram web chat application built using React.js. It allows users to view a list of chats, open individual chats to view messages, and interact in real-time. The UI is a replication of actual web based telegram application

## Features

- View a list of chats with last messages.
- Click on a chat to open and view its messages.
- Responsive design for mobile and desktop.

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS
- API integration for fetching chat data

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repo
   ```sh
   https://github.com/HirendraGurnani/telegram-clone-beyondchat.git

2. Navigate to the project directory
   ```sh
   cd telegram-clone-beyondchat

3. Install dependencies
   ```sh
   npm i

### Usage

1. Start the development server
   ```sh
   npm start

2. Open your browser and go to http://localhost:3000 to view the app.

# API Documentation

1. The application interacts with a RESTful API to fetch chat data and messages.

2. API endpoints:
- /api/get_all_chats: Retrieves all chats.
- /api/get_chat_messages?chat_id={chat_id}: Retrieves messages for a specific chat.