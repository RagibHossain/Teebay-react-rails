class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :buy_price
      t.integer :rent_price
      t.timestamps
    end
  end
end
