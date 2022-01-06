class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.references :sender, null: false
      t.references :reciever, null: false
      t.references :product, null: false
      t.timestamps
    end
    add_foreign_key :conversations, :users, column: :sender_id
    add_foreign_key :conversations, :users, column: :reciever_id
    add_foreign_key :conversations, :products, column: :product_id , on_delete: :cascade
  end
end
