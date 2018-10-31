json.extract! booking, :id, :arrival_date, :departure_date, :num_guests, :listing_id
json.set! :host_id, booking.host.id
