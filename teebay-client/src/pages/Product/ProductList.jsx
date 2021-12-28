import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({remove,link,products,edit}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {products.map((product) => (
                <ProductCard edit={edit} remove={remove} link={link} key={product.id} product={product} />
            ))}

        </div>
    )
}

export default ProductList
