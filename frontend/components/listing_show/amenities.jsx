import React from 'react';
import AmenityDetail from './amenity_detail';

const Amenities = ({amenities}) => {
  const allAmenities = amenities.map((amenity, i) => (
      <AmenityDetail amenity={amenity} key={i} />
  ));
  return (
  <div className="amenity-outer-container">
    <div className="amenity-title">Amenities</div>
    <div className="amenity-container">
      { allAmenities }
    </div>
  </div>
  );
};

export default Amenities;
