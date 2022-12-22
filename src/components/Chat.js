import React from 'react'
import { useState } from 'react';
import {BsEmojiSmile } from "react-icons/bs";


export const ChatRoom = (props) => {

const { data } = props;
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const color_list = ["red", "green", "blue", "yellow", "gray"];
  const [formValue, setFormValue] = useState("");
  const [msg, setMsg] = useState(false);
  const date = new Date();

  const addMessage = (formValue) => {
    data.push(formValue);
    setFormValue("");
    setMsg(true);
  };

  return (
    <>
    <main>
      {msg
        ? data.map((x) => {
         const name = user_list[Math.floor(Math.random() * user_list.length)]
         const color_profile = color_list[Math.floor(Math.random() * color_list.length)]
            return (
              <div>                
                <p className="name-in-short" style={{backgroundColor:color_profile}} >
                  {name.charAt(0).toUpperCase()+name.charAt(1).toUpperCase()}&nbsp;&nbsp;&nbsp;
                  {name}&nbsp;&nbsp;&nbsp;&nbsp;
                 
                  <span className="time-style">
                 
                 {date.getHours() +
                   ":" +
                   date.getMinutes() +
                   ":" +
                   date.getSeconds()}
               </span>                 
                </p>            
                <li>
                  <p className="text-decor"> {x}</p>
                </li>
              </div>
            );
          })
        : null}
    </main>

    <div className="form-input">
      <input
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="say something nice"
      />

      <button type="submit" onClick={() => addMessage(formValue)}>
      <BsEmojiSmile/>
      </button>
    </div>
  </>
  )
}
