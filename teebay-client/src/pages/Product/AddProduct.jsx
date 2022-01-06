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
import RedirectToLogin from "../Common/RedirectToLogin";
const AddProduct = ({ addProduct }) => {
  const categories = [
    {
      key: 1,
      text: "ELECTRONICS",
      value: 1,
    },
    {
      key: 2,
      text: "FURNITURE",
      value: 2,
    },
    {
      key: 3,
      text: "HOME APPLIANCES",
      value: 3,
    },
    {
      key: 4,
      text: "SPORTING GOODS",
      value: 4,
    },
    {
      key: 5,
      text: "OUTDOOR",
      value: 5,
    },
    {
      key: 6,
      text: "TOYS",
      value: 6,
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

  const history = useHistory();
  const [product, setProduct] = useState();

  const onSubmitHandler = () => {
    addProduct(product, history);
  };

  const onSelectItem = (item, data) => {
    setProduct({ ...product, category_ids: data.value });
  };

  const onSelect = (item) => {
    const { name, value } = item.target;
    setProduct({ ...product, [name]: value });
  };
  return (
    <div>
      <RedirectToLogin />
      <MyHeader content="ADD PRODUCT" />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="input">
          <input
            {...register("name", { required: "name is Required" })}
            type="text"
            placeholder="name"
            style={inputStyle}
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
            onChange={(e) => onSelect(e)}
          />
          {errors.description && (
            <p className="errorStyle">{errors.description?.message}</p>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <div className="input">
            <input
              {...register("buy_price", { required: "Price is Required" })}
              type="number"
              placeholder="Price"
              style={inputStyle}
              onChange={(e) => onSelect(e)}
            />
            {errors.price && (
              <p className="errorStyle">{errors.price?.message}</p>
            )}
          </div>
          <div className="input">
            <input
              {...register("rent_price", {
                required: "Rent Price is Required",
              })}
              type="number"
              placeholder="Rent Price"
              style={inputStyle}
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
