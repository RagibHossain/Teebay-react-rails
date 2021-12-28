


export const createProductFormData = (data ) => {

    let formData = new FormData();
    let category_ids = [];
    formData.append("category_ids",[]);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("rent_price", data.rent_price);
    formData.append("buy_price", data.buy_price);
    data.category.forEach((c) => {
        category_ids.push(c)
    }) 
    
    formData.append("category_ids",category_ids);
    debugger
    return formData;
}