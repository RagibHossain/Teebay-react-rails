const initialState = {
  loggedIn: false,
  token: null,
  currentUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      localStorage.setItem("token", action.payload.access_token);
      localStorage.setItem("user",JSON.stringify(action.payload.user))
      Object.assign(state.currentUser);
      return {
        ...state,
        loggedIn: true,
        token: action.payload.access_token,
        currentUser: action.payload.user
      };
    case "LOG_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        loggedIn: false,
        token: null,
        currentUser: {}
      };
    default:
      return state;
  }
};
export default userReducer;
