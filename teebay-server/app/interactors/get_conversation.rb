class GetConversation
  include Interactor

  def call
    context.conversation = Conversation.find(context.id)
  end
end
