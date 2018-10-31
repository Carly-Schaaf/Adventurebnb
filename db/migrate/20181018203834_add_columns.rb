class AddColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :photo, :string
    add_column :listings, :photo, :string
  end
end
