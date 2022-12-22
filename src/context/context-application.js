import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [chatHistory,setChatHistory] = useState([]);
    const [user,setUser] = useState([])
    const [color,setColor] = useState([])
  
  
    const value = {
     chatHistory,
     setChatHistory,
     user,
     setUser,
     color,
     setColor
    };
  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };
  