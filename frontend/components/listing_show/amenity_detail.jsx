import React from 'react';
import startCase from 'lodash.startcase';

const AmenityDetail = ({amenity, i}) => (
  <ul className="amenity-detail" key={`${i}`}>
    <li className="amenity-icon">
      {amenity.icon }
    </li>
    <li>
      {startCase(amenity.title)}
    </li>
  </ul>
);

export default AmenityDetail;
