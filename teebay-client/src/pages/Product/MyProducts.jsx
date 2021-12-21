import React from "react";
import { useHistory } from "react-router-dom";
import TeebayButton from "../Common/TeebayButton";
import TeebayHeader from "../Common/TeebayHeader";
import ProductList from "./ProductList";
import {products} from "./products";

const MyProducts = () => {
  const history = useHistory();
  return (
    <div>
      <TeebayHeader content="MY PRODUCTS" />
      {products.length < 1 ? (
        <NoProduct />
      ) : (
        <>
          <ProductList link="update" edit={true} remove={true} products={products} />
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

export default MyProducts;
