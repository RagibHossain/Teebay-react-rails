import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import PropTypes from "prop-types";
import { logout } from '../../actions/userAuthentication'; 
const NavBar = ({logout}) => {
    const spanStyle = {
        color:"white",
        fontWeight:"bolder"
    }
    const history = useHistory();

    const logOut = () => {
        logout();
        history.push("/")
       
    }
    return (
        <div style={{width:"100%",padding:"20px",position:"fixed",top:"0",backgroundColor:"#9EADBA"}}>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/allproducts">
               <span style={spanStyle}>All PRODUCTS</span> 
               </Link>
               <Link to="/myproducts">
               <span style={spanStyle}>MY PRODUCTS</span> 
               </Link>
               {/* <Link to="/updateprofile">
               <span style={spanStyle}>
               <i className="user icon"></i> {currentUser?.firstname.toUpperCase()+" "+currentUser?.lastname.toUpperCase()}</span> 
               </Link> */}
               
               <Button onClick={() => logOut()}  content="Logout" color="grey"/>
            </div>          
        </div>
    )
}
NavBar.propTypes = {
 logout : PropTypes.func.isRequired
}
export default connect(null,{logout})(NavBar)