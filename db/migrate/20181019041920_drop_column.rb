class DropColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :photo
    remove_column :listings, :photo
  end
end
