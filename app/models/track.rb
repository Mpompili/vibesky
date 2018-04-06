class Track < ApplicationRecord
  validates :title, presence: true
  validates :uploader_id, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image,
    content_type: ["image/jpeg", "image/gif", "image/png"]

  belongs_to :user,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: :User
end
