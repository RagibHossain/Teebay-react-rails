import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { createProductFormData } from "../Helper/formDataUtil";

axios.defaults.baseURL = "http://127.0.0.1:3000/";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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



const Products = {
  getProducts: () => requests.get("products/"),
  getMyProducts : () => requests.get("myproducts/"),
  myProducts : (data ) => requests.post("myproducts/",data),
  productDetails : (id ) => requests.get(`products/${id}`),
  addProduct : (product ) => requests.post("products/",product),
  updateProduct : (product ) => requests.put(`products/${product.id}/`,product),
  deleteProduct : (id ) => requests.del(`products/${id}/`)
};

const User = {
  userList: () => requests.get("users/"),
  login: (body) => requests.post("oauth/token",body),
  register: (body) => requests.post("users/",body),
  currentUser: () => requests.get("currentuser/")
}

const agent = { Products, User };

export default agent;