class MakeMessagesTableOnConversationDeleteCascade < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :messages, :conversations
    add_foreign_key :messages, :conversations, on_delete: :cascade

  end
end
