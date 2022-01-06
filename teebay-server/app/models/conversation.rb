class Conversation < ApplicationRecord
    belongs_to :sender, class_name: 'User'
    belongs_to :reciever, class_name: 'User'
    belongs_to :product, class_name: 'Product'
    has_many :messages , dependent: :delete_all
end
