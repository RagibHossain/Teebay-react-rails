import { toast } from "react-toastify";
import agent from "../api/agent";

export const addProduct = (product) => async (dispatch) => {
  try {
  
    // await agent.Products.addProduct(product);
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
    toast.success("Product Added");
  } catch (ex) {
    console.log(ex);
  }
};
export const getProducts = () => async (dispatch) => {
  try {
    // const products = await agent.Products.productList();
    dispatch({
        type:"GET_PRODUCTS",
        payload:products
    })
  } catch (error) {
    console.log(error);
  }
};
