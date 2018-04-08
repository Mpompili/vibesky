class AddAttachmentAudioToTracks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tracks do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :tracks, :audio
  end
end
