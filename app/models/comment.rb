class Comment < ApplicationRecord
  validates :body, :user, :track, presence: true

  belongs_to :user
  belongs_to :track
  
end
