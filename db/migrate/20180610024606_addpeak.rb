class Addpeak < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :audioPeaks, :text 
  end
end
