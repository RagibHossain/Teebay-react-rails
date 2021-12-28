import React from "react";
import { useHistory } from "react-router";
import { Icon } from "semantic-ui-react";
import Category from "../Common/Category";
import CommonModal from "../Common/CommonModal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProduct, setCurrentProduct } from "../../actions/product";
import { useEffect } from "react";
const ProductCard = ({
  product,
  remove,
  link,
  edit,
  deleteProduct,
  setCurrentProduct,
}) => {
  const history = useHistory();
  const goToPage = (link) => {
    setCurrentProduct(product.id).then(() => {
      let exactLink = edit ? `/${link}/${product.id}` : `/${link}`;
      history.push(exactLink);
    });
  };
  useEffect(() => {

  },[])
  const deleteHandleClicked = () => {
    
  }
  return (
    <div
      style={{
        width: "80%",
        border: "1px solid #C3CFD9",
        padding: "30px",
        margin: "30px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ cursor: "pointer" }} onClick={() => goToPage(link)}>
          {product.name}
        </h1>
        {remove && (
          <CommonModal
            header={`Are you sure you want to delete this product}?`}
            trigger={
              <button style={{ border: "0px", cursor: "pointer" }}>
                <i className="trash alternate icon"></i>
              </button>
            }
            cancelText="NOOOO"
            btnColor="red"
            buttonText="Yes, Delete"
            action={() => deleteProduct(product.id)}
          />
        )}
      </div>

      <Category categories={product.categories} />
      <div
        style={{ color: "#788896", marginTop: "10px", marginBottom: "10px" }}
      >
        <span>
          Price : ${product.buy_price} || Rent Price : $
          {product.rent_price ?? "0"} daily
        </span>
      </div>

      <p> {product.description}</p>
    </div>
  );
};
ProductCard.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  setCurrentProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

export default connect(null, { deleteProduct, setCurrentProduct })(ProductCard);
