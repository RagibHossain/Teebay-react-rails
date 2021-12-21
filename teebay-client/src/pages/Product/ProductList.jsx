import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({remove,link,products}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {products.map((product) => (
                <ProductCard remove={remove} link={link} key={product.pk} product={product} />
            ))}

        </div>
    )
}

export default ProductList
