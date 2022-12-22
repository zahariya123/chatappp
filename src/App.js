import React, { useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { BsPeopleFill,BsEmojiSmile } from "react-icons/bs";

function App() {
  const arr = [];
  const Left = styled.div`
    width: 50%;
    text-align: left;
  `;
  const Right = styled.div`
    width: 50%;
    text-align: right;
  `;
  return (
    <div className="App">
      <header>
        <Left>
          <div style={{ fontSize: "20px", color: "black" }}>Introductions</div>
          <div style={{ color: "GrayText" }}>
            This Channel Is For Company Wide Chatter
          </div>
        </Left>
        <Right>
          <div>
            3/100&nbsp;&nbsp;&nbsp; <BsPeopleFill />
          </div>
        </Right>
      </header>

      <section>
        <ChatRoom data={arr} />
      </section>
    </div>
  );
}

function ChatRoom(props) {
  const { data } = props;
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const color_list = ["red", "green", "blue", "yellow", "gray"];
  const [formValue, setFormValue] = useState("");
  const [msg, setMsg] = useState(false);
  const date = new Date();
  const addMessage = (formValue) => {
    data.push(formValue);

    setFormValue("");
    console.log(data);
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
                
                  <p style={{backgroundColor:color_profile,width:"15px",height:"25px",borderRadius:"100%",textAlign:"left",fontSize:"20px"}}>
                    {name.charAt(0).toUpperCase()+name.charAt(1).toUpperCase()}&nbsp;&nbsp;&nbsp;
                    {name}&nbsp;&nbsp;&nbsp;&nbsp;
                   
                    <span style={{ color: "gray", fontSize: "15px" }}>
                   
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
  );
}

export default App;
