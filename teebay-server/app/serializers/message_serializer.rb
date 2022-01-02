class MessageSerializer < ApplicationSerializer
    attributes :text, :id, :user_id, :created_at
end