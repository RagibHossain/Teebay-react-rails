class ProductSerializer < ApplicationSerializer
  attributes :name, :id, :buy_price, :rent_price, :description, :user_id
  has_many :categories, serializer: CategorySerializer
end
