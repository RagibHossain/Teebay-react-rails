import agent from "../api/agent";

export const login =  (credentials) => async (dispatch) => {
  const loginRequestBody = {
    grant_type: "password",
    client_id: "mNcxbPK_E03Iik5Xg4oeZzFJdDaYCQ-eqDedZyyOfCg",
    client_secret: "joWiQaNE5U6NdIa1K4ZFwiNkg3kMZST8tCwLyzjw0oQ",
    email: credentials.email,
    password: credentials.password,
  };

  try {
    const response = await agent.User.login(loginRequestBody);
    console.log(response);
    dispatch({
        type:"LOGGED_IN",
        payload:response
    })
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = (credentials,history) => async (dispatch) => {
  try {
    const response = await agent.User.register(credentials);
    console.log("hi")
    console.log(response)
    history.push("/")
  }catch(error){
    console.log(error)
  }
}
export const logout = (history) => (dispatch) => {
  dispatch({
    type:"LOG_OUT"
  })
}
