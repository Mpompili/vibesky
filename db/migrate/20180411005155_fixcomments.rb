class Fixcomments < ActiveRecord::Migration[5.1]
  def change
    remove_index :comments, :user_id
    remove_index :comments, :track_id
    remove_column :comments, :body
    remove_column :comments, :user_id
    remove_column :comments, :track_id
    add_column :comments, :body, :text,  null: false
    add_column :comments, :user_id, :integer, null: false
    add_column :comments, :track_id, :integer, null: false
    add_index :comments, :user_id
    add_index :comments, :track_id
  end
end
