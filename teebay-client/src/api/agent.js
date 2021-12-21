import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { createProductFormData } from "../Helper/formDataUtil";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";


axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error -- make sure API server is running");
    console.log(error);
  }


  if (error.response.status === 404) {
     toast.error(error.response.data)
  }
  else if (error.response.status === 400) {
    toast.error(error.response.data)
  }
  else if (error.response.status === 500) {
    toast.error(error.response.data)
  }
  else if (error.response.status === 401) {
    toast.error(error.response.data)
  }
  else if (error.response.status === 417) {
    toast.error(error.response.data)
  }
  else throw error.response;
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const form = {
  productPostForm: (url, data) => {
    const formData = createProductFormData(data);
    console.log(formData);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
  productPutForm: (url, data) => {
    const formData = createProductFormData(data);
    console.log(formData)
    return axios
      .put(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },

};

const Products = {
  productList: () => requests.get("/"),
  myProducts : (data ) => requests.post("myproducts/",data),
  productDetails : (pk ) => requests.get(`${pk}`),
  addProduct : (product ) => form.productPostForm("create/",product),
  updateProduct : (product ) => form.productPutForm(`update/${product.pk}/`,product),
  deleteProduct : (pk ) => requests.del(`delete/${pk}/`)


};

const User = {
  userList: () => requests.get("users/"),
  login: (data )  => requests.post("login/",data),
  register: (body ) => requests.post("register/",body),
  updateProfile: (body) => requests.put(`updateprofile/${body.id}`,body)
}

const agent = { Products,User };

export default agent;