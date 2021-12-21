
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Icon } from 'semantic-ui-react'
import Category from '../Common/Category';
import CommonModal from '../Common/CommonModal';
const ProductCard = ({product,remove,link,edit}) => {
    // const store = useContext(RootStoreContext)
    // const { deleteProduct, setCurrentProduct } = store.productStore;
    const history = useHistory();
    const goToPage = (link) => {
        let exactLink = edit ? `/${link}/${pk}` : `/${link}`;
        history.push(exactLink)//
        // setCurrentProduct(pk);
    }
  
    return (
        <div style={{ width: "80%", border: "1px solid #C3CFD9", padding: "30px", margin: "30px" }}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 style={{ cursor: "pointer" }} onClick={() => goToPage( link)} >{product.title}</h1>
                {remove &&
                    <CommonModal
                        header={`Are you sure you want to delete this product}?`}
                        trigger={
                            <button style={{border:"0px",cursor:"pointer"}} >
                                <i className="trash alternate icon"></i>
                            </button>
                        }
                        cancelText="NOOOO"
                        btnColor="red"
                        buttonText="Yes, Delete"
                        action={() => deleteProduct(product.pk)}
                    />
                }
            </div>


            <Category categories={product.category} />
            <div style={{color:"#788896",marginTop:"10px",marginBottom:"10px"}}>
                <span>Price : ${product.price} || Rent Price : ${product.rentPrice ?? "0"} daily</span>

            </div>

            <p> {product.description}</p>



        </div>
    )
}

export default ProductCard
