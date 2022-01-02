class ConversationSerializer < ApplicationSerializer
    attributes :id, :sender_id, :reciever_id , :product_id
    has_many :messages , serializer: MessageSerializer
    has_one :sender , serializer: UserSerializer
    has_one :reciever , serializer: UserSerializer
end