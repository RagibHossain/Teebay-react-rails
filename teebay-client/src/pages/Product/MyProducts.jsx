import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TeebayButton from "../Common/TeebayButton";
import TeebayHeader from "../Common/TeebayHeader";
import ProductList from "./ProductList";
import {getMyProducts,emptyMyProducts} from "../../actions/product"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NoProduct from "./NoProduct"
const MyProducts = ({product : {myProducts},getMyProducts,emptyMyProducts}) => {
  const history = useHistory();
  useEffect(() => {
   if(myProducts,length < 1) getMyProducts()
   return () => {
    emptyMyProducts()
   }
  },[getMyProducts])
  return (
    <div>
      <TeebayHeader content="MY PRODUCTS" />
      {myProducts.length < 1 ? (
        <NoProduct />
      ) : (
        <>
          <ProductList link="update" edit={true} remove={true} products={myProducts} />
          <div
            onClick={() => history.push("/addproduct")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TeebayButton content="Add Product" />
          </div>
        </>
      )}
    </div>
  );
};

MyProducts.propTypes = {
  getMyProducts: PropTypes.func.isRequired,
  emptyMyProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps,{getMyProducts,emptyMyProducts})(MyProducts);
