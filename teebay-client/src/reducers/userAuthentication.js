const initialState = {
  loggedIn: false,
  token: null,
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        loggedIn: true,
        token: action.payload.access_token,
      };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return {
        ...state,
        loggedIn: false,
        token: null,
      };
    default:
      return state;
  }
};
export default userReducer;
