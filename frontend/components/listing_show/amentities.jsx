import React from 'react';
import AmentityDetail from './amentity_detail';

const Amenities = ({amenities}) => {
  const allAmenities = amenities.map((amentity, i) => (
      <AmentityDetail amentity={amentity} key={i} />
  ));
  return (
  <div className="amentity-outer-container">
    <div className="amentity-title">Amenities</div>
    <div className="amentity-container">
      { allAmenities }
    </div>
  </div>
  );
};

export default Amenities;
