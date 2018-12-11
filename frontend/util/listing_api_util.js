export const fetchListings = ({bounds, guests}) => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
    data: {filters: {bounds, max_guests: guests}}
  })
);

export const fetchListing = (listingId) => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${listingId}`
  })
);

export const fetchListingByCity = (city, filters) => (
  $.ajax({
    method: 'GET',
    url: `api/listings_by_city/${city}`,
    data: {filters: {bounds: filters.bounds, max_guests: filters.guests}}
  })
);
