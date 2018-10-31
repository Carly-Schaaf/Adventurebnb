class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.date :arrival_date, null: false
      t.date :departure_date, null: false
      t.integer :num_guests, null: false
      t.timestamps
    end
    add_index :bookings, :listing_id
    add_index :bookings, :guest_id
    add_index :bookings, :arrival_date
    add_index :bookings, :departure_date
  end
end
