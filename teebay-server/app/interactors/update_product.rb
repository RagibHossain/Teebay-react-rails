class UpdateProduct 
  include Interactor
  include Pundit
  def call  
     context.product
     context.product.update({ **context.product_params })
     context.fail!(message:" Could not update Product") unless context.product.persisted?
  end
end
