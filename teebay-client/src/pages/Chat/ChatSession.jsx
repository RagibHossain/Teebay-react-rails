import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "semantic-ui-react";
import agent from "../../api/agent";
import NothingToDisplay from "../Common/NothingToDisplay";
import actionCable from "actioncable";
import { useRef } from "react";
import { connect, useSelector } from "react-redux";
import TeebayHeader from "../Common/TeebayHeader";
import PropTypes from "prop-types";
import { getProduct } from "../../actions/product";
import "./chat.css";
const ChatSession = ({ match,getProduct }) => {
  const [convo, setConvo] = useState(null);
  const user = useSelector((state) => state.user.currentUser);
  const currentProduct = useSelector((state) => state.product.currentProduct);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatChannelRef = useRef(null);
  const cable = actionCable.createConsumer("ws://127.0.0.1:3000/cable");
  useEffect(() => {
    agent.Chat.getConversation(match.params.id).then((res) => {
      getProduct(res.product_id)
      setConvo(res);
      setMessages(res.messages);
    });
    
    chatChannelRef.current = cable.subscriptions.create(
      {
        channel: "ChatChannel",
        room: match.params.id,
      },
      {
        received: (updatedMessages) => {
          setMessages(JSON.parse(updatedMessages.messages));
        },
        createChatMessage(text) {
          chatChannelRef.current.perform("create_message", {
            text: text.text,
            sender_id: user.id,
          });
        },
      }
    );
  }, [match.params.id,getProduct]);
  
  const senderStyle = {
    width: "max-content",
    marginBottom:"5px",
    maxWidth:"500px",
    border: "1px solid #C3CFD9",
    borderRadius: "15px",
    padding: "5px",
    marginLeft:"auto",
    wordWrap:"break-down"
  };
  const recieverStyle = {
    backgroundColor: "grey",
    marginBottom:"5px",
    border: "1px solid #C3CFD9",
    borderRadius: "15px",
    padding: "5px",
    width: "max-content",
    maxWidth:"500px",
    marginRight:"auto",
    wordWrap:"break-down"
  };
  const onChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    chatChannelRef.current.createChatMessage({
      text: message,
    });
    setMessage("");
  };
  return (
    <>
      <TeebayHeader content={`${currentProduct.name} niye kotha barta`} />
      <div
        style={{
          display: "flex",
          height: "75vh",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "20%",
            border: "1px solid #C3CFD9",
            marginRight: "15px",
            display: "flex",
            flexDirection: "column",
            padding: "20px"
          }}
        >
          <h1>List of Users</h1>
          <p>{convo?.reciever.email.split("@")[0]} (Online)</p>
          <p>{convo?.sender.email.split("@")[0]} (Online)</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            border: "1px solid #C3CFD9",
            padding: "20px"
          }}
        >
          <div
            style={{
              height: "65vh",
              overflow: "scroll"
            }}
          >
            {messages.length < 1 ? (
              <NothingToDisplay content={"No messages "} />
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    style={
                      message.user_id === convo.sender.id
                        ? senderStyle
                        : recieverStyle
                    }
                  >
                    {message.text} <br/>
                    {message.created_at}
                  </div>
                ))}
              </>
            )}
          </div>
          {/* messages */}

          <div
            style={{
              marginTop: "auto",
              display: "flext",
              alignItems:"center"
            }}
          >
            <form style={{ display: "flex" }} onSubmit={handleSubmit}>
              <input
                style={{ width: "100%", height: "30px", marginRight: "10px" }}
                placeholder="type what you wanna say"
                type={"text"}
                value={message}
                onChange={onChange}
              />
              <Button content="Send" />
            </form>
          </div>
        </div>
        {/* </>} */}
      </div>
    </>
  );
};
ChatSession.proptypes = {
  getProduct : PropTypes.func.isRequired
}
export default connect(null,{getProduct}) (ChatSession);
