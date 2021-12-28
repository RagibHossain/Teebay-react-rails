class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.string :name
      t.string :description
      t.integer :buy_price
      t.integer :rent_price
      t.timestamps
    end
  end
end
