class GetProduct < BaseInteractor

  def call
    context.product = Product.find(context.id)    
  end
end
