import React from 'react'
import TeebayButton from '../Common/TeebayButton';
import TeebayHeader from '../Common/TeebayHeader';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
const ProductDetails = ({product:{currentProduct},match}) => {
    const spanStyle = {
        color: "#788896",
        margin: "5px",
        fontSize: "15px"
      }
      const paraStyle = {
        color: "#000000",
        margin: "5px",
        fontSize: "15px"
      }
      // const product = products[0];
    //   const store = useContext(RootStoreContext);
    //   const { getProductDetails, emptyCurrentProduct, currentProduct: product, action, buyProduct } = store.productStore;
    //   const { currentUser } = store.userStore;
    //   useEffect(() => {
    //     if (match.params.id) {
    //       getProductDetails(match.params.id);
    //     }
    //     return () => {
    //       emptyCurrentProduct()
    //     }
    //   }, [getProductDetails, match.params.id, emptyCurrentProduct]);
    //   const onButtonClick = () => {
    //     buyProduct(product, currentUser!.id, history, mytoast)
    //   }
      return (
        <div>
          <TeebayHeader content="Product Details" />
          {currentProduct && 
           <div style={{ display: "flex", flexDirection: "column" }}>
    
           <h1>{product.title}</h1>
    
          
    
           <span style={spanStyle}>Categories : {currentProduct.category}</span>
           <span style={spanStyle}>Price : {currentProduct.price}$</span>
           <span style={spanStyle}>Rent Price : {currentProduct.rentPrice}$</span>
    
           <p style={paraStyle}>{currentProduct.description}</p>
          
           <div>
    
         <TeebayButton content="Talk with owner"/>
    
           </div>
         </div>
          }
         
        </div>
      )
}
ProductDetails.propTypes = {
  product : PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(ProductDetails)
