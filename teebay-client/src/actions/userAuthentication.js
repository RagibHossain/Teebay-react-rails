import agent from "../api/agent";

export const login =  (credentials) => async (dispatch) => {
  const loginRequestBody = {
    grant_type: "password",
    client_id: "ljZtobz94ee3GtOaSV2bFTym6Jl8JKf7k0tFEQYGmyY",
    client_secret: "Lgls0g67nWk6GqlA2uiCDUf0MLllggChWrqHynaZ2_8",
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
