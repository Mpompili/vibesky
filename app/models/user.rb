class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image, validate_media_type: false, default_url: "https://s3-us-west-1.amazonaws.com/vibesky-dev/tracks/images/public_images/missing.png"
  
  validates_attachment_content_type :image,
  :content_type => /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/,
   :message => 'file type is not allowed (only jpeg/png/gif images)'

  after_initialize :ensure_session_token

  has_many :tracks,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Track

  has_many :comments
  has_many :likes 

  has_many :liked_tracks,
  through: :likes, 
  source: :track
    
  # associations:
  # has_many :tracks
  # has_many :comments
  # has_many :likes

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
