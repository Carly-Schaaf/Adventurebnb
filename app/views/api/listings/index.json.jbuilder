@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'api/listings/listing', listing: listing
    if listing.photo.attached?
      json.photo url_for(listing.photo)
    end
  end
end
