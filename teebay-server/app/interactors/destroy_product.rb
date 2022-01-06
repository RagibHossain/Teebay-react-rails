class DestroyProduct
  include Interactor

  def call
    context.product.destroy
  end
end
