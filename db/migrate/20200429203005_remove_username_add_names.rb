class RemoveUsernameAddNames < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username
    add_column :users, :fname, :string
    add_column :users, :lname, :string
  end
end
