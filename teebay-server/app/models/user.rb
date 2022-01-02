class User < ApplicationRecord
  has_many :access_grants,
           class_name: 'Doorkeeper::AccessGrant',
           foreign_key: :resource_owner_id,
           dependent: :delete_all # or :destroy if you need callbacks

  has_many :access_tokens,
           class_name: 'Doorkeeper::AccessToken',
           foreign_key: :resource_owner_id,
           dependent: :delete_all # or :destroy if you need callbacks

  has_many :products
  has_many :messages
  has_many :sender_conversations, class_name: 'Conversation', foreign_key: 'sender_id'
  has_many :reciever_conversations, class_name: 'Conversation', foreign_key: 'reciever_id'
  
  has_secure_password
  validates :email, presence: true
  validates :password, presence: true
end
