import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getProduct } from "../../actions/product";
import agent from "../../api/agent";
import TeebayHeader from "../Common/TeebayHeader";
import PropTypes from "prop-types";
import "./chat.css"
import { useHistory } from "react-router-dom";
const Conversations = ({ match , getProduct }) => {

  const [convos, setConvos] = useState([]);
  const history = useHistory();
  const currentProduct = useSelector((state) => state.product.currentProduct);
  useEffect(() => {
    agent.Chat.getProductConversations(match.params.id).then((res) => {
      getProduct(match.params.id)
      setConvos(res);
    });
  }, [match.params.id,getProduct]);
  const handleConvoClicked = (data) => {
    agent.Chat.createConversation({
      sender_id: data.sender_id,
      reciever_id: data.reciever_id,
      product_id: currentProduct.id
    }).then((response) => {
      history.push(`/chat/${response.id}`)
    })
  }
  return (
    <div>
      <TeebayHeader content={`${currentProduct.name} Conversations`} />
      {convos.map((convo) => (
        <div className="conversation" onClick={() => handleConvoClicked(convo)} key={convo.id}>
          <h1>{convo.sender.email}</h1>
          <p>Last message : {convo.messages.length > 0 && convo.messages[convo.messages.length - 1].text}</p>
        </div>
      ))}
    </div>
  );
};

Conversations.proptypes = {
  getProduct : PropTypes.func.isRequired
}
export default connect(null,{getProduct}) (Conversations);
