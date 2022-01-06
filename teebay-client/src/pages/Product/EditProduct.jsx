import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Dropdown, Select } from "semantic-ui-react";
import MyButton from "../Common/TeebayButton";
import MyHeader from "../Common/TeebayHeader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./product.css";
import {
  getProduct,
  editProduct,
  removeCurrentProduct,
} from "../../actions/product";
import { categories } from "../../objects/categories";
import agent from "../../api/agent";
import RedirectToLogin from "../Common/RedirectToLogin";
const EditProduct = ({
  getProduct,
  editProduct,
  removeCurrentProduct,
  match,
}) => {
  const categories_to_load = categories;
  const [loadedProduct, setProduct] = useState(null);
  const inputStyle = {
    height: "40px",
    width: "100%",
    margin: "10px 0px 10px 0px",
    borderRadius: "2%",
    padding: "5px",
  };
  let currentProduct = {};
  useEffect(() => {

     agent.Products.productDetails(match.params.id).then((res) => {
       setProduct({
        id: res.id,
        name: res.name,
        description: res.description,
        buy_price: res.buy_price,
        rent_price: res.rent_price,
        category_ids: res.categories,
      })
     })
    

    // return () => {
    //   removeCurrentProduct();
    // };
  }, [getProduct,match.params.id]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let selectedCategories = [];
  if(loadedProduct) loadedProduct.category_ids.forEach((category) => {
    selectedCategories.push(category.id);
  });
  const history = useHistory();



  const onSubmitHandler = () => {
    editProduct(loadedProduct, history);
  };

  const onSelectItem = (item, data) => {
    setProduct({ ...loadedProduct, category_ids: data.value });
  };

  const onSelect = (item) => {
    const { name, value } = item.target;
    setProduct({ ...loadedProduct, [name]: value });
  };
  return (
    <div>
      <RedirectToLogin />
      {loadedProduct && (
        <>
          <MyHeader content="ADD PRODUCT" />
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="input">
              <input
                {...register("name", { required: "name is Required" })}
                type="text"
                placeholder="name"
                defaultValue={loadedProduct.name}
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
              defaultValue={selectedCategories}
              options={categories_to_load}
              onChange={(e, data) => onSelectItem(e, data)}
            />

            <div className="input">
              <textarea
                {...register("description", {
                  required: "Description is Required",
                })}
                defaultValue={loadedProduct.description}
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
                  defaultValue={loadedProduct.buy_price}
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
                  defaultValue={loadedProduct.rent_price}
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
        </>
      )}
    </div>
  );
};
EditProduct.propTypes = {
  getProduct: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps, {
  getProduct,
  editProduct,
  removeCurrentProduct,
})(EditProduct);
