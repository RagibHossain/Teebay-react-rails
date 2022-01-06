import React, { useEffect } from "react";
import TeebayButton from "../Common/TeebayButton";
import TeebayHeader from "../Common/TeebayHeader";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getProduct, removeCurrentProduct } from "../../actions/product";
import Category from "../Common/Category";
import { Button } from "semantic-ui-react";
import agent from "../../api/agent";
import { useHistory } from "react-router-dom";
const ProductDetails = ({
  product: { currentProduct },
  getProduct,
  removeCurrentProduct,
  match,
}) => {
  const spanStyle = {
    color: "#788896",
    margin: "5px",
    fontSize: "15px",
  };
  const paraStyle = {
    color: "#000000",
    margin: "5px",
    fontSize: "15px",
  };
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  useEffect(() => {
    if (!currentProduct) {
      getProduct(match.params.id);
    }
    // return () => {
    //   removeCurrentProduct();
    // };
  }, [getProduct, match.params.id, removeCurrentProduct]);
  const handleTalkWithOwner = () =>{
    agent.Chat.createConversation({
      sender_id: user.id,
      reciever_id: currentProduct.user_id,
      product_id: currentProduct.id
    }).then((response) => {
      history.push(`/chat/${response.id}`)
    })
  }
  return (
    <div>
      <TeebayHeader content="Product Details" />
      {currentProduct && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>{currentProduct.title}</h1>

          <span style={spanStyle}>
            <Category categories={currentProduct.categories} />{" "}
          </span>
          <span style={spanStyle}>Price : {currentProduct.buy_price}$</span>
          <span style={spanStyle}>
            Rent Price : {currentProduct.rent_price}$
          </span>

          <p style={paraStyle}>{currentProduct.description}</p>

          <div>
            
            {user.id && currentProduct.user_id !== user.id && (
              <Button onClick={handleTalkWithOwner} content="Talk with owner" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  getProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProduct, removeCurrentProduct })(
  ProductDetails
);
