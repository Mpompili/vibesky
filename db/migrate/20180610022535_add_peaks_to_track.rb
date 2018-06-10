class AddPeaksToTrack < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :track_peaks, :text
  end
end
