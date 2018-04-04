class RemoveUsernameFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, :username
    remove_column :users, :username
    add_index :users, :email, unique: true
  end
end
