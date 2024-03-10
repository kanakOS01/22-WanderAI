import "./chatBox.css";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import W from "../../assets/logo.png";
import PropTypes from "prop-types";
import { aiServerUrl, appServerUrl } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { AddChat, hide } from "../../state/chat";

function IconSend(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" />
    </svg>
  );
}
function IconCloseSharp() {
  const dispatch = useDispatch();
  const closeChat = () => {
    dispatch(hide());
  };
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      onClick={() => closeChat()}
    >
      <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
    </svg>
  );
}
function IconUser(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
    </svg>
  );
}
const Chat = () => {
  const {showChat,history:chat} = useSelector((state) => state.chat);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const chatRef = useRef();
  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  },[chat]);
  const fetchQuery = async (bot_input) => {
    setQuery("");
    const res = await axios.post(aiServerUrl+"/bot_response", { bot_input }, { headers: { "content-type": "application/x-www-form-urlencoded" } }
    );
    const chatObj = {
      user: bot_input,
      answer: res.data.bot_response
    };
    dispatch(AddChat(chatObj));
    try{
      await axios.put(appServerUrl+"/api/_v1/me/chat",{chat:chatObj},{
        headers:{
          "Authorization":`Bearer ${user?.token}`
        }
      });
    }catch(e){
      console.log(e);
    };
    return res.data;
  };
  function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      voices = speechSynthesis.getVoices();
    }
    return voices;
  }
  return (
    <form
      className={`chat-box ${showChat ? "clicked" : ""}`}
      onSubmit={(e) => {
        fetchQuery(query);
        e.preventDefault();
      }}
    >
      <div className="output">
        <div className="top">
          <p>WanderAI</p>
          <IconCloseSharp />
        </div>
        <div className="chat" ref={chatRef}>
          {
            chat.map((message,index) => {
              return (
                <React.Fragment key={index}>
                  <div className="user">
                    <IconUser/>
                    <p>{message.user}</p>
                  </div>
                  <div className="ai">
                    <img src={W} style={{cursor:"pointer"}} title="Click to narrate" onClick={()=>{
                      let textToSpeak = message.answer;

                      let speakData = new SpeechSynthesisUtterance();
                      speakData.volume = 1;
                      speakData.rate = 1;
                      speakData.pitch = 2;
                      speakData.text = textToSpeak;
                      speakData.lang = "en-US";
                      speakData.voice = getVoices()[0];
                      
                      speechSynthesis.speak(speakData);
                    }} />
                    <pre style={{ width: "100%", whiteSpace: "pre-wrap" }}>{message.answer}</pre>
                  </div>
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
      <div className="input">
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Type a message..." />
        <IconSend />
      </div>

    </form>
  );
};
export default Chat;