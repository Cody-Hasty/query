class ChangeValueToDefault < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :fname, :string, null: false, default: "John"
    change_column :users, :lname, :string, null: false, default: "Doe"
  end
end
