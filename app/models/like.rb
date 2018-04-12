class Like < ApplicationRecord
    validates :user, :track, presence: true
    validates :user, uniqueness: {scope: :track}

    belongs_to :user
    belongs_to :track 
end
