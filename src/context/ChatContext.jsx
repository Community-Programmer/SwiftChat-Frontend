
import React, { useState } from 'react'
import ChatAppcontext from "./Context";

const ChatContext = (props) => {
  const [alert, setAlert] = useState(null);
  const [info, setinfo] = useState({ name: "", roomName: "", roomId: "" })
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);


  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <ChatAppcontext.Provider value={{ alert, setAlert, showAlert, info, setinfo, joinedUsers, setJoinedUsers, chatHistory, setChatHistory }}>
      {props.children}
    </ChatAppcontext.Provider>
  )
}

export default ChatContext