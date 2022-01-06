class GetMyProducts < BaseInteractor
  def call
    if context.user
      context.products = context.user.products.joins([:categories]).distinct.all
    else
      context.fail!(message: "You are not logged in")
    end
  end
end
