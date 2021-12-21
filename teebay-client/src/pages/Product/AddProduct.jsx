import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Dropdown, Select } from "semantic-ui-react";
import MyButton from "../Common/TeebayButton";
import MyHeader from "../Common/TeebayHeader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./product.css";
import { addProduct } from "../../actions/product";
const AddProduct = ({ addProduct }) => {
  const categories = [
    {
      key: 1,
      text: "ELECTRONICS",
      value: 6,
    },
    {
      key: 2,
      text: "FURNITURE",
      value: 7,
    },
    {
      key: 3,
      text: "HOME APPLIANCES",
      value: 8,
    },
    {
      key: 4,
      text: "SPORTING GOODS",
      value: 9,
    },
    {
      key: 5,
      text: "OUTDOOR",
      value: 10,
    },
    {
      key: 6,
      text: "TOYS",
      value: 11,
    },
  ];
  const inputStyle = {
    height: "40px",
    width: "100%",
    margin: "10px 0px 10px 0px",
    borderRadius: "2%",
    padding: "5px",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const store = useContext(RootStoreContext);
  // const {addProduct,updateProduct,getProductDetails,emptyCurrentProduct,currentProduct} = store.productStore;
  const history = useHistory();
  const [product, setProduct] = useState();

  const initializeFormData = {
    title: product ? product.title : "",
    description: product ? product.description : "",
    price: product ? product.price : 0,
    rentPrice: product ? product.rentPrice : 0,
    uploadedby: product ? product.title : 1,
    dateposted: product ? product.dateposted : Date.now,
    status: "",
    category: product ? product.category : [],
  };
  const onSubmitHandler = () => {
    console.log(product);
    addProduct(product);
    // if (!currentProduct) addProduct(product).then(()=>{

    //     history.push("/products")
    //     toast.success("Product Added Successfully")
    // });
    // else updateProduct(product).then(()=>{

    //     history.push("/products")
    //     toast.success("Product Updated Successfully")
    // });
  };

  //   useEffect(() => {
  //     if (match.params.id) {
  //       getProductDetails(match.params.id);
  //     }
  //     return () => {
  //       emptyCurrentProduct()
  //     }
  //   }, [getProductDetails, match.params.id,emptyCurrentProduct]);

  const onSelectItem = (item, data) => {
    setProduct({ ...product, category: data.value });
  };

  const onSelect = (item) => {
    const { name, value } = item.target;
    setProduct({ ...product, [name]: value });
  };
  return (
    <div>
      <MyHeader content="ADD PRODUCT" />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* <MyInput type="text" labelText="Title" height="40px" widthPercentage="100%" /> */}
        <div className="input">
          <input
            {...register("title", { required: "Title is Required" })}
            type="text"
            placeholder="title"
            style={inputStyle}
            defaultValue={initializeFormData.title}
            onChange={(e) => onSelect(e)}
          />
          {errors.title && (
            <p className="errorStyle">{errors.title?.message}</p>
          )}
        </div>

        <Dropdown
          placeholder="Select a Category"
          fluid
          style={{ margin: "20px", color: "black", width: "26%" }}
          multiple
          search
          selection
          defaultValue={initializeFormData.category}
          options={categories}
          onChange={(e, data) => onSelectItem(e, data)}
        />

        <div className="input">
          <textarea
            {...register("description", {
              required: "Description is Required",
            })}
            placeholder="Description"
            style={{ height: "100px" }}
            defaultValue={initializeFormData.description}
            onChange={(e) => onSelect(e)}
          />
          {errors.description && (
            <p className="errorStyle">{errors.description?.message}</p>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <div className="input">
            <input
              {...register("price", { required: "Price is Required" })}
              type="number"
              placeholder="Price"
              style={inputStyle}
              defaultValue={initializeFormData.price}
              onChange={(e) => onSelect(e)}
            />
            {errors.price && (
              <p className="errorStyle">{errors.price?.message}</p>
            )}
          </div>
          <div className="input">
            <input
              {...register("rentPrice", { required: "Rent Price is Required" })}
              type="number"
              placeholder="Rent Price"
              style={inputStyle}
              defaultValue={initializeFormData.rentPrice}
              onChange={(e) => onSelect(e)}
            />
            {errors.rentPrice && (
              <p className="errorStyle">{errors.rentPrice?.message}</p>
            )}
          </div>
        </div>

        <MyButton content="Add" floating="right" />
      </form>
    </div>
  );
};
AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};
export default connect(null, { addProduct })(AddProduct);
