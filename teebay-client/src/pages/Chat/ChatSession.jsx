import React from "react";
import Message from "./Message";

const ChatSession = () => {
  return (
    <div style={{ display: "flex", height: "700px", width: "100%" }}>
      <div
        style={{
          width: "20%",
          border: "1px solid #C3CFD9",
          marginRight: "15px",
          display:"flex",
          flexDirection:"column",
          padding:"20px"
        }}
      >
          <h1>List of Users</h1>
          <p>Ragib (Offline)</p>
          <p>Rohan (Online)</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          border: "1px solid #C3CFD9",
          padding: "20px",
        }}
      >
        <Message message={"Hi there."} />
        <Message message={"Hi ."} />
        <div >
        <input style={{width:"100%"}} placeholder="type what you wanna say" type={"text"} />
        </div>
        
      </div>
    </div>
  );
};

export default ChatSession;
