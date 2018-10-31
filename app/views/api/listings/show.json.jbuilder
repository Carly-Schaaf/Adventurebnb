json.set! :listing do
  json.partial! 'api/listings/listing', listing: @listing
  if @listing.photo.attached?
    json.photo url_for(@listing.photo)
  end
end

json.set! :reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
      json.set! :author do
        json.partial! 'api/users/user', user: review.author
      end
    end
  end
end
