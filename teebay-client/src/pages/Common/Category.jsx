import React from 'react'

const Category = ({categories}) => {
    return (
        <div style={{display:"flex",color:"#788896",marginTop:"10px",marginBottom:"10px"}}>
            Categories : 
            {categories?.map((category) => (
                <p key={category.id}>{category.name}</p> 
            ))}
        </div>
    )
}

export default Category
