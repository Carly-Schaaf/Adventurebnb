class Booking < ApplicationRecord
  validates :listing_id, :guest_id, :arrival_date, :departure_date, :num_guests, presence: true
  validate :does_not_overlap_another_booking
  validate :num_guests_does_not_exceed_max_guests


  belongs_to :listing
  belongs_to :guest,
  foreign_key: :guest_id,
  class_name: :User

  has_one :host,
  through: :listing,
  source: :owner


  def overlapping_bookings
    Booking
      .where.not(id: self.id)
      .where(listing_id: self.listing_id)
      .where.not('arrival_date > :departure_date OR departure_date < :arrival_date',
            arrival_date: arrival_date, departure_date: departure_date)
  end

  def does_not_overlap_another_booking
    unless overlapping_bookings.empty?
      errors[:base] <<
        'Booking conflicts with a pre-existing booking'
    end
  end

  def num_guests_does_not_exceed_max_guests
    unless num_guests <= self.listing.max_guests
      errors[:num_guests] <<
        'must be less than the allowed numbers of guests'
    end
  end
end
