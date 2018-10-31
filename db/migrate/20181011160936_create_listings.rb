class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description
      t.string :type, null: false
      t.integer :owner_id, null: false
      t.string :address_1, null: false
      t.string :address_2
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :country, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :daily_rate, null: false
      t.integer :max_guests, default: 1, null: false
      t.integer :num_bathrooms, null: false
      t.integer :num_beds, null: false
      t.integer :num_bedrooms, null: false
      t.integer :num_common_spaces, null: false
      t.timestamps
    end
    add_index :listings, :owner_id
    add_index :listings, :state
    add_index :listings, :country
    add_index :listings, :daily_rate
    add_index :listings, :max_guests
    add_index :listings, :city
    add_index :listings, :lat
    add_index :listings, :lng
    add_index :listings, :num_beds
    add_index :listings, :num_bedrooms
    add_index :listings, :num_bathrooms
    add_index :listings, :type
  end
end
