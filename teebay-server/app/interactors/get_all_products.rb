class GetAllProducts < BaseInteractor

    
  def call
    context.products = Product.joins([:categories]).distinct.all  
  end
end
