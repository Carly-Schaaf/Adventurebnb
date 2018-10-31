class AddColumnToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :home_type, :string, null: false
  end
end
