class UploadProduct < BaseInteractor
  def call
    context.product = Product.create({**context.product_params, user_id: context.user.id })
    context.fail!(message :"Couldn't Save the product") unless context.product.valid?
    ProductMailer.with(user: context.user, product: context.product).product_created_email.deliver_later
  end
end
