class GetProductConversation
  include Interactor

  def call
      if context.user
          context.conversations = Conversation.where(product_id: context.id)      
      else 
          context.fail!(message: "Log in")
      end
  end
end
