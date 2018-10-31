import React from 'react';
import ListingIndexItem from './listing_index_item';

const ListingIndex = ({ listings }) => {
  const listingsRow = listings.map((listing, i) => (
    <div id={i} key={i} className="listing-item">
      <ListingIndexItem listing={listing}/></div>));
  return(
    <ul className="listings-row">
      { listingsRow }
    </ul>
  );

};



export default ListingIndex;
