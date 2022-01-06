class GetProducts < BaseInteractor

  def call
    products = Product.joins([:categories]).distinct.all
    render json: Panko::ArraySerializer.new(products, each_serializer: ProductSerializer).to_json
  end
end
