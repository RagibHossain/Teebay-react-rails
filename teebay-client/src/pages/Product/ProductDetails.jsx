import React from 'react'
import TeebayButton from '../Common/TeebayButton';
import TeebayHeader from '../Common/TeebayHeader';
import { products } from './products';

const ProductDetails = () => {
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
      const product = products[0];
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
          {product && 
           <div style={{ display: "flex", flexDirection: "column" }}>
    
           <h1>{product.title}</h1>
    
          
    
           <span style={spanStyle}>Categories : {product.category}</span>
           <span style={spanStyle}>Price : {product.price}$</span>
           <span style={spanStyle}>Rent Price : {product.rentPrice}$</span>
    
           <p style={paraStyle}>{product.description}</p>
          
           <div>
    
         <TeebayButton content="Talk with owner"/>
    
           </div>
         </div>
          }
         
        </div>
      )
}

export default ProductDetails
