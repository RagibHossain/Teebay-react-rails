class ConversationsController < ApplicationController
    def index
        conversations = Conversation.all
        render json: conversations
    end
    
    def product_conversations
        if current_user
            conversations = Conversation.where(product_id: params[:id])      
            render json: Panko::ArraySerializer.new(conversations,each_serializer: ConversationSerializer).to_json 
        else 
            render json: {message: "Log in"}
        end
    end

    def show
        conversation = Conversation.find(params["id"])
        render json: ConversationSerializer.new.serialize_to_json(conversation), status: :ok
    end
    def create
        if current_user
            conversation = Conversation.where(sender_id: conversation_params[:sender_id],reciever_id: conversation_params[:reciever_id],product_id: conversation_params[:product_id]).first
            if conversation
                render json: ConversationSerializer.new.serialize_to_json(conversation), status: :ok
            else
                conversation = Conversation.new({**conversation_params})
                if conversation.save
                    render json: ConversationSerializer.new.serialize_to_json(conversation), status: :ok
                else 
                    render json: {message: "Couldn't create a conversation"}, status: :bad_request
                end
            end
        else
            render json: {message: "You are not logged in"}, status: :unauthorized
        end


    end

    private

    def conversation_params
        params.permit(:sender_id, :reciever_id, :product_id)
    end
end
