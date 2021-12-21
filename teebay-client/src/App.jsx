import { useState ,Fragment} from 'react'
import AddProduct from './pages/Product/AddProduct'
import { Container } from 'semantic-ui-react'
import AllProducts from './pages/Product/AllProducts'
import Login from './pages/UserAuthentication/Login'
import Register from './pages/UserAuthentication/Register'
import {ToastContainer} from "react-toastify"
import { Route, Switch } from 'react-router-dom'
import ProductDetails from './pages/Product/ProductDetails'
import MyProducts from './pages/Product/MyProducts'
import ChatSession from './pages/Chat/ChatSession'
import store from './store'
import {Provider} from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
   <Provider store={store}>
   <ToastContainer position="top-right" />
          <Route exact path="/" component={Login} />
          <Route
            path={"/(.+)"}
            render={() => (
              <Fragment>
                <Container style={{ marginTop: "10em" }}>
                  <Switch>
                    <Route exact path="/productdetails" component={ProductDetails} />
                    <Route exact path="/myproducts" component={MyProducts} />
                    <Route exact path="/addproduct" component={AddProduct} />
                    <Route exact path="/allproducts" component={AllProducts} />
                    <Route exact path="/chat" component={ChatSession} />
                    <Route exact path="/register" component={Register} />
                  </Switch>
                </Container>
              </Fragment>
            )}
          />
    </Provider>
  )
}

export default App
