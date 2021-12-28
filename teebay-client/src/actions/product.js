import { toast } from "react-toastify";
import thunk from "redux-thunk";
import agent from "../api/agent";
import store from "../store";

export const addProduct = (product, history) => async (dispatch) => {
  try {
    const response = await agent.Products.addProduct(product);
    console.log(product);
    console.log(response);
   await dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
    toast.success("Product Added");
    history.push("/myproducts");
  } catch (ex) {
    console.log(ex);
  }
};
export const editProduct = (product, history) => async (dispatch) => {
  try {
    debugger;
    const response = await agent.Products.updateProduct(product);
    console.log(product);
    console.log(response);
   await dispatch({
      type: "EDIT_PRODUCT",
      payload: product,
    });
    toast.success("Product Updated");
    history.push("/myproducts");
  } catch (ex) {
    console.log(ex);
  }
};
export const getProducts = () => async (dispatch) => {
  try {
    const products = await agent.Products.getProducts();
   await dispatch({
      type: "GET_PRODUCTS",
      payload: products,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getMyProducts = () => async (dispatch) => {
  try {
    const myProducts = await agent.Products.getMyProducts();
  await  dispatch({
      type: "GET_MY_PRODUCTS",
      payload: myProducts,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await agent.Products.deleteProduct(productId);

   await dispatch({
      type: "DELETE_PRODUCT",
      payload: productId,
    });
  } catch (error) {
    console.log(error);
  }
};
export const setCurrentProduct = (productId) => async (dispatch) => {
  await dispatch({
    type: "SET_CURRENT_PRODUCT",
    payload: productId,
  });
};
export const removeCurrentProduct = () => (dispatch) => {
  dispatch({
    type: "REMOVE_CURRENT_PRODUCT",
  });
};
export const emptyMyProducts = () => (dispatch) => {
  dispatch({
    type: "EMPTY_MY_PRODUCTS",
  })
}
export const getProduct = (productId) => async (dispatch) => {

  try {
    const result = await agent.Products.productDetails(productId);
    await dispatch({
      type: "GET_PRODUCT",
      payload: result,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
