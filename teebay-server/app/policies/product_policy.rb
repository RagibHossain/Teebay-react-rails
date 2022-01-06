class ProductPolicy < ApplicationPolicy
  attr_reader :user, :product

  def initialize(user, product)
    @user = user
    @product = product
  end

  def create?
    !!user
  end

  def update?
   !!user && product.user_id == user.id
  end

  def destroy?
   !!user &&  product.user_id == user.id
  end
end
