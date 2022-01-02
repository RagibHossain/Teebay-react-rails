class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @room = Conversation.find(params[:room])
    stream_for @room
  end
  def create_message(data)
        
        message = Message.new(text: data["text"], conversation_id:@room.id, user_id: data["sender_id"])
        created_message = message.save
        conversation = Conversation.find(@room.id)
        if created_message
          ChatChannel.broadcast_to(
            @room, {
              messages: Panko::ArraySerializer.new(conversation.messages, each_serializer: MessageSerializer).to_json
            }
          )
        end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
