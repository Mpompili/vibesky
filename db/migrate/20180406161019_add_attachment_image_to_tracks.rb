class AddAttachmentImageToTracks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tracks do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :tracks, :image
  end
end
