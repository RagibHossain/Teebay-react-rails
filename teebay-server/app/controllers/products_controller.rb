class ProductsController < ApplicationController
  def index
    result = GetAllProducts.call
    if result.success? 
      render json: Panko::ArraySerializer.new(result.products, each_serializer: ProductSerializer).to_json
    else
      render json: {message: "Couldn't load products"},status: :not_found
    end
  end

  def show
    result = GetProduct.call(id: params[:id])
     if result.success? 
      render json: ProductSerializer.new.serialize_to_json(result.product),status: :ok 
     else
      render json: {message: "No product found"},status: :not_found
     end
  end

  def create
      result = UploadProduct.call(product_params: product_params,user: current_user)
      if result.success?
        render json: { products: result.product, categories: result.product.categories },status: :ok
      else
        render json: {message: result.message},status: :bad_request
      end
  end

  def update
    result = UpdateProductInfo.call(id: params[:id],product_params: product_params)
    if result.success?
      render json: { products: result.product, categories: result.product.categories },status: :ok
    else
      render json: {message: result.message},status: :bad_request
    end

  end

  def destroy
    result = DeleteProduct.call(id: params[:id])
    if result.success?
      render json: {message: "Product Deleted Succesfully"}, status: :ok
    else
      render json: {message: "Couldn't Delete The product"}, status: :ok
    end
  end

  def my_products 
    result = GetMyProducts.call(user: current_user)
    if result.success?
      render json: Panko::ArraySerializer.new(result.products, each_serializer: MyProductSerializer).to_json 
    else
      render json: {message: result.message}, status: :unauthorized
    end
  end

  private

  # Only allow a list of trusted parameters through.
  def product_params
    params.permit(:name, :description, :buy_price, :rent_price, { category_ids: [] })
  end
end
