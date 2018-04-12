class AddIndexToLikesTable < ActiveRecord::Migration[5.1]
  def change
    add_index :likes, [:user_id, :track_id], unique: true 
  end
end
