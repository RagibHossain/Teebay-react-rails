import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Grid, Header, Message } from "semantic-ui-react";
import TeebayButton from "../Common/TeebayButton";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLogin = (user) => {
    // signIn(user);
    console.log(user);
  };

  // if(loggedIn) return ( <Redirect to='/updateprofile' />)
  const inputStyle = {
    height: "40px",
    width: "100%",
    margin: "10px 0px 10px 0px",
    borderRadius: "2%",
    padding: "5px",
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          Sign-in
        </Header>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="input">
            <input
              {...register("email", { required: "Email is Required" })}
              type="text"
              placeholder="Email"
              style={inputStyle}
            />
            {errors.email && (
              <p className="errorStyle">{errors.email?.message}</p>
            )}
          </div>
          <div className="input">
            <input
              {...register("password", { required: "Password  is Required" })}
              type="password"
              placeholder="Password"
              style={inputStyle}
            />
            {errors.password && (
              <p className="errorStyle">{errors.password?.message}</p>
            )}
          </div>
          <TeebayButton content="Login" />
        </form>
        <Message>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/RagibHossain/Teebay-react-rails.git
// git push -u origin main