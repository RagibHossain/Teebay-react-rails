import React from "react";
import TeebayButton from "../Common/TeebayButton";
import TeebayHeader from "../Common/TeebayHeader";
import MyProducts from "./MyProducts";
import ProductList from "./ProductList";
import {products} from "./products";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getProducts} from "../../actions/product"
const AllProducts = ({product:{products},getProducts}) => {
  return (
    <div>
      <TeebayHeader content="All PRODUCTS" />
      {products.length < 1 ? (
        <NoProduct />
      ) : (
        <>
          <ProductList link="productdetails" edit={false} remove={false} products={products} />
          <div
            onClick={() => history.push("/addproduct")}
            style={{ display: "flex", justifyContent: "center" }}
          >           
          </div>
        </>
      )}
    </div>
  );
};
MyProducts.propTypes = {
  myProducts : PropTypes.object.isRequired,
  getProducts : PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  product : state.product
}

export default connect(mapStateToProps,{getProducts})(AllProducts);
