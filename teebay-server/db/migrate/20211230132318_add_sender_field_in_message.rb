class AddSenderFieldInMessage < ActiveRecord::Migration[6.1]
  def change
    add_reference :messages, :user ,index:true, foreign_key: true
  end
end
