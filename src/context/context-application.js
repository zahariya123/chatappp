import React, { useState } from "react";
import PropTypes from 'prop-types';
export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {

  MyContext.propTypes={
children:PropTypes.string.isRequired
  }
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
  