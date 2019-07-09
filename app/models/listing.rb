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
    avg_total_review = Listing.find_by_sql [
      "SELECT (avg_accuracy +
      avg_communication +
      avg_cleanliness +
      avg_location +
      avg_checkin +
      avg_value) AS avg_total_review
      FROM
        (SELECT AVG(accuracy) as avg_accuracy,
        AVG(communication) as avg_communication,
        AVG(cleanliness) as avg_cleanliness,
        AVG(location) as avg_location,
        AVG(check_in) as avg_checkin,
        AVG(value) as avg_value
        FROM listings JOIN reviews on listings.id = reviews.listing_id
        WHERE listings.id = ?)
    AS subquery", self.id]

    avg_total_review = (avg_total_review.pluck(:avg_total_review)[0].to_f/6).round(1)

    return avg_total_review
  end

end
