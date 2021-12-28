import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Header, Message } from "semantic-ui-react";
import { login } from "../../actions/userAuthentication";
import TeebayButton from "../Common/TeebayButton";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom"

const Login = ({user:{loggedIn},login}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLogin = (user) => {
    login(user);
  };

  if(loggedIn) return ( <Redirect to='/myProducts' />)
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

Login.propTypes = {
  login : PropTypes.func.isRequired,
  user : PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(mapStateToProps,{login})(Login);
