const initialState = {
  products: [],
  myProducts: [],
  currentProduct: {},
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
    case "GET_PRODUCT":
      Object.assign(state.currentProduct);
      return {
        ...state,
        currentProduct: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: [
          action.payload,
          ...state.products.filter((x) => x.id !== action.payload.id),
        ],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((x) => x.id !== action.payload),
      };
    case "SET_CURRENT_PRODUCT":
      Object.assign(state.currentProduct);
      return {
        ...state,
        currentProduct: state.products.find((x) => x.id === action.payload),
      };
    case "REMOVE_CURRENT_PRODUCT":
      return {
        ...state,
        currentProduct: {},
      };
      case "EMPTY_MY_PRODUCTS":
        return{
          ...state,
          myProducts: []
        }
    default:
      return state;
  }
};
export default productReducer;
