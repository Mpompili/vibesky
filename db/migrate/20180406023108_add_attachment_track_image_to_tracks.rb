class AddAttachmentTrackImageToTracks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tracks do |t|
      t.attachment :track_image
    end
  end

  def self.down
    remove_attachment :tracks, :track_image
  end
end
