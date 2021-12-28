import React, { useEffect } from "react";
import TeebayButton from "../Common/TeebayButton";
import TeebayHeader from "../Common/TeebayHeader";
import MyProducts from "./MyProducts";
import ProductList from "./ProductList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../actions/product";
const AllProducts = ({ product: { products }, getProducts }) => {
  useEffect(() => {
    if (products.length < 1) getProducts();
  }, [getProducts,products]);
  return (
    <div>
      <TeebayHeader content="All PRODUCTS" />
      {products.length < 1 ? (
        <div > no products </div>
      ) : (
        <>
          <ProductList
            link="productdetails"
            edit={false}
            remove={false}
            products={products}
          />
          <div
            onClick={() => history.push("/addproduct")}
            style={{ display: "flex", justifyContent: "center" }}
          ></div>
        </>
      )}
    </div>
  );
};
AllProducts.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, { getProducts })(AllProducts);
