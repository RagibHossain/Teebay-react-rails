class Product < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :categories
  has_many :conversations, dependent: :delete_all

end
