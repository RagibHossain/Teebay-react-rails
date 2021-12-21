import React from 'react'

const Category = ({categories}) => {
    const myCategories = [
        {
            key: 1,
            text: "ELECTRONICS",
            value: 6
        },
        {
            key: 2,
            text: "FURNITURE",
            value: 7
        },
        {
            key: 3,
            text: "HOME APPLIANCES",
            value: 8
        },
        {
            key: 4,
            text: "SPORTING GOODS",
            value: 9
        },
        {
            key: 5,
            text:"OUTDOOR",
            value: 10
        },
        {
            key: 6,
            text: "TOYS",
            value: 11
        }
    ];
    return (
        <div style={{display:"flex",color:"#788896",marginTop:"10px",marginBottom:"10px"}}>
            Categories : 
            {categories.map((category) => (
                <p key={category}>{myCategories.find(x => x.value == category)?.text+","} </p> 
            ))}
        </div>
    )
}

export default Category
