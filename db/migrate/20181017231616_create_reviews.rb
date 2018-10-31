class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :listing_id, null: false
      t.integer :accuracy, null: false
      t.integer :communication, null: false
      t.integer :cleanliness, null: false
      t.integer :location, null: false
      t.integer :check_in, null: false
      t.integer :value, null: false
      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :listing_id
  end
end
