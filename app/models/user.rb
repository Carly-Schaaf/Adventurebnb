class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :listings
  has_many :bookings,
  foreign_key: :guest_id,
  class_name: :Booking

  has_many :reviews,
  foreign_key: :author_id,
  class_name: :Review

  has_one_attached :photo

  attr_reader :password
  after_initialize :ensure_session_token

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(value)
    @password = value
    self.password_digest = BCrypt::Password.create(value)
  end

  def self.find_by_credentials(username, pw)
    @user = User.find_by(username: username)
    @user && @user.is_password?(pw) ? @user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
