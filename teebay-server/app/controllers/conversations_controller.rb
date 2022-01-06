class ConversationsController < ApplicationController
    
    def product_conversations
        result = GetProductConversation.call(id: params[:id],user: current_user)
        if result.success?
            render json: Panko::ArraySerializer.new(result.conversations,each_serializer: ConversationSerializer).to_json 
        else
            render json: {message: result.message}, status: :bad_request
        end
    end

    def show
        result = GetConversation.call(id: params[:id])
        if result.success?
            render json: ConversationSerializer.new.serialize_to_json(result.conversation), status: :ok
        else
            render json: {message: "Couldn't find any conversation"}, status: :not_found
        end
    end
    def create
        result = CreateConversation.call(params: conversation_params,user: current_user)
        if result.success?
            render json: ConversationSerializer.new.serialize_to_json(result.conversation), status: :ok
        else 
            render json: {message: result.message}, status: :bad_request
        end
    end

    private

    def conversation_params
        params.permit(:sender_id, :reciever_id, :product_id)
    end
end
