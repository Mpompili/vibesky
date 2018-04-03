class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false, unique: true
      t.string :img_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
