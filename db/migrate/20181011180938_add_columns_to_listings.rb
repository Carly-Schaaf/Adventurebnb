class AddColumnsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :essentials, :boolean, null: false, default: false
    add_column :listings, :wifi, :boolean, null: false, default: false
    add_column :listings, :shampoo, :boolean, null: false, default: false
    add_column :listings, :clothing_storage, :boolean, null: false, default: false
    add_column :listings, :tv, :boolean, null: false, default: false
    add_column :listings, :heat, :boolean, null: false, default: false
    add_column :listings, :air_conditioning, :boolean, null: false, default: false
    add_column :listings, :breakfast_coffee_tea, :boolean, null: false, default: false
    add_column :listings, :desk, :boolean, null: false, default: false
    add_column :listings, :fireplace, :boolean, null: false, default: false
    add_column :listings, :iron, :boolean, null: false, default: false
    add_column :listings, :hair_dryer, :boolean, null: false, default: false
    add_column :listings, :pets, :boolean, null: false, default: false
    add_column :listings, :private_entrance, :boolean, null: false, default: false
    add_column :listings, :smoke_detector, :boolean, null: false, default: false
    add_column :listings, :carbon_monoxide_detector, :boolean, null: false, default: false
    add_column :listings, :first_aid, :boolean, null: false, default: false
    add_column :listings, :safety_card, :boolean, null: false, default: false
    add_column :listings, :fire_extinguisher, :boolean, null: false, default: false
    add_column :listings, :bedroom_lock, :boolean, null: false, default: false
  end
end
