class Track < ApplicationRecord
  validates :title, presence: true
  validates :uploader_id, presence: true

  has_attached_file :image, default_url: "http://d2dzjyo4yc2sta.cloudfront.net/?url=images.pitchero.com%2Fui%2F220891%2F1511183769_0.jpg&w=720&t=fit&q=85"
  validates_attachment_content_type :image,
  :content_type => /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/,
   :message => 'file type is not allowed (only jpeg/png/gif images)'

  belongs_to :user,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: :User
end
