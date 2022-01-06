class CreateConversation
  include Interactor

  def call
      if context.user
        conversation = Conversation.where(sender_id: context.params[:sender_id],reciever_id: context.params[:reciever_id],product_id: context.params[:product_id]).first
        if conversation
          context.conversation = conversation
        else
          conversation = Conversation.create({**context.params})
          context.fail!(message: "Couldn't Create Conversation") unless conversation.valid?
          context.conversation = conversation
        end
      else
        context.fail!(message: "You are not logged in")
      end
  end
end
