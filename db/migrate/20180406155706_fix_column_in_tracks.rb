class FixColumnInTracks < ActiveRecord::Migration[5.1]
  def change
    remove_attachment :tracks, :track_image
  end
end
