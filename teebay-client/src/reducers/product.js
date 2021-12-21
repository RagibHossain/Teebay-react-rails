const initialState = {
  products: [],
  myProducts: [],
  currentProduct: null,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_MY_PRODUCTS":
      return {
        ...state,
        myProducts: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [action.payload,...state.products],
      };
    default:
      return state;
  }
};
export default productReducer;
