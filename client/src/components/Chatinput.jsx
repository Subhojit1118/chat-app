import React, { useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
export default function Chatinput({ handleSendMsg }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojiPickerHideShow = (e, emojiObject) => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = (emojiObject, event) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <>
      <Container>
        <div className="button-container">
          <div className="emoji">
            <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
            {showEmojiPicker && (
              <Picker
                height={400}
                width={300}
                theme="dark"
                onEmojiClick={handleEmojiClick}
              />
            )}
          </div>
        </div>
        <form className="input-container" onSubmit={(e) => sendChat(e)}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="submit">
            <IoMdSend />
          </button>
        </form>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  
  align-items: center;
  background-color: #080420;
  padding: 0 2rem;
  padding-bottom: 0.3rem;
  .button-container {
    display:flex;
    align-item:center;
    color:white:
    gap:1rem;
    .emoji{
      position:relative;
      svg{
        font-size:1.5rem;
        color:#ffff00c8;
        cursor:pointer;
      }
       .EmojiPickerReact{
        position:absolute;
        top:-420px;
        box-shadow:3px 3px 10px #9a86f3;
        border-color:#9186f3;
        --epr-emoji-size:1.7rem;
        --epr-hover-bg-color:#9186f3;
        ::-webkit-scrollbar {
          width: 0.3rem;
          &-thumb {
           background-color: #9186f3;
           width: 0.1rem;
           border-radius: 1rem;
          }
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 1.5rem;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #9186f3;
      cursor: pointer;
      border: none;
      svg { 
        font-size: 1.7rem;
        color: white;
      }
    }
  }
`;
