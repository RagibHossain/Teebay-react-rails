


export const createProductFormData = (data ) => {
    let formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("rentPrice", data.rentPrice);
    formData.append("uploadedby", data.uploadedby);
    formData.append("status", data.status);
    data.category.map((c) => {
        formData.append("category",c);
    }) 
    
    return formData;
}