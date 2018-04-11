class FixComment < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :body
    add_column :comments, :body, :string,  null: false
  end
end
