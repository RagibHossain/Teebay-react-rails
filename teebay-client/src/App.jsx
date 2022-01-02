import { useState, Fragment } from "react";
import AddProduct from "./pages/Product/AddProduct";
import { Container } from "semantic-ui-react";
import AllProducts from "./pages/Product/AllProducts";
import Login from "./pages/UserAuthentication/Login";
import Register from "./pages/UserAuthentication/Register";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./pages/Product/ProductDetails";
import MyProducts from "./pages/Product/MyProducts";
import ChatSession from "./pages/Chat/ChatSession";
import store from "./store";
import { connect, Provider, useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./pages/Product/EditProduct";
import NavBar from "./pages/Common/NavBar";
import { useEffect } from "react";
import Conversations from "./pages/Chat/Conversations";
function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn)
  useEffect(() => {
   if(localStorage.getItem("token")){
     let user = {
       access_token: localStorage.getItem("token"),
       user: JSON.parse(localStorage.getItem("user"))
     }
     dispatch({
       type:"LOGGED_IN",
       payload: user
     })
   }
  },[])
  return (
     <>
      <ToastContainer position="top-right" />
      { loggedIn && <NavBar />}
      <Route exact path="/" component={Login} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Container style={{ marginTop: "10em" }}>
              <Switch>
                <Route
                  exact
                  path="/productdetails/:id"
                  component={ProductDetails}
                />
                <Route exact path="/myproducts" component={MyProducts} />
                <Route exact path="/addproduct" component={AddProduct} />
                <Route exact path="/update/:id" component={EditProduct} />
                <Route exact path="/allproducts" component={AllProducts} />
                <Route exact path="/conversations/:id" component={Conversations} />
                <Route exact path="/chat/:id" component={ChatSession} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
     </>
  );
}

export default App;
