require 'bigdecimal'

class Listing < ApplicationRecord
  validate :avg_accuracy,
  :avg_communication,
  :avg_cleanliness,
  :avg_location,
  :avg_checkin,
  :avg_value,
  :avg_total_review
  validate :num_reviews

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User
  has_many :bookings
  has_many :reviews

  has_one_attached :photo

  def self.in_bounds(bounds)
    ne_lat = bounds[:northEast][:lat]
    ne_lng = bounds[:northEast][:lng]
    sw_lat = bounds[:southWest][:lat]
    sw_lng = bounds[:southWest][:lng]
    Listing.where('lat < :ne_lat AND lng < :ne_lng',
      ne_lat: ne_lat, ne_lng: ne_lng)
      .where('lat > :sw_lat AND lng > :sw_lng',
      sw_lat: sw_lat, sw_lng: sw_lng)
  end

  def num_reviews
    self.reviews.count
  end

  def avg_accuracy
    self.reviews.average(:accuracy).to_f.round(1)
  end

  def avg_communication
    self.reviews.average(:communication).to_f.round(1)
  end

  def avg_cleanliness
    self.reviews.average(:cleanliness).to_f.round(1)
  end

  def avg_location
    self.reviews.average(:location).to_f
  end

  def avg_checkin
    self.reviews.average(:check_in).to_f.round(1)
  end

  def avg_value
    self.reviews.average(:value).to_f.round(1)
  end

  def avg_total_review
    avg = 0;
    avg += self.avg_accuracy
    avg += self.avg_communication
    avg += self.avg_cleanliness
    avg += self.avg_location
    avg += self.avg_checkin
    avg += self.avg_value
    return (avg/6).round(1)
  end

end
