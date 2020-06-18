class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false, default: "John"
      t.string :lname, null: false, default: "Doe"
      t.string :password_digest
      t.string :session_token
      t.string :credentials
      t.timestamps
    end
    add_index :users, :session_token
    add_index :users, :email, unique: true
  end
end
