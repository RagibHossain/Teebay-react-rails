class ProductsController < ApplicationController
  def index
    products = Product.joins([:categories]).distinct.all
    render json: Panko::ArraySerializer.new(products, each_serializer: ProductSerializer).to_json
  end

  def show
    product = Product.find(params[:id])
     render json: ProductSerializer.new.serialize_to_json(product),status: :ok 

  end

  def create
    user = current_user
    if user
      product = Product.new({ **product_params, user_id: user.id })
      product_created = product.save
      if product_created
        ProductMailer.with(user: current_user, product: product).product_created_email.deliver_later
        render json: { products: product, categories: product.categories }
      else
        render json: { message: "Couldn't create product" }
      end
    else
      render json: { message: 'You are not authorized' }
    end
  end

  def update
    product = Product.find(params[:id])
    authorize product
    product_updated = product.update({ **product_params })
    if product_updated
      render json: product
    else
      render json: { message: "Couldn't updated product" }
    end
  end

  def destroy
    products = Product.all
    product = Product.find(params[:id])
    authorize product
    product.destroy
    render json: products
  end

  def my_products
    products = current_user.products.joins([:categories]).distinct.all
    if products.any?
      render json: Panko::ArraySerializer.new(products, each_serializer: ProductSerializer).to_json
    else
      render json: { message: 'You have nothing' }
    end
  end

  private

  # Only allow a list of trusted parameters through.
  def product_params
    params.permit(:name, :description, :buy_price, :rent_price, { category_ids: [] })
  end
end
