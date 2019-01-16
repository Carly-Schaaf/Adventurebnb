import React from 'react';
import startCase from 'lodash.startcase';

const AmentityDetail = ({amentity, i}) => (
  <ul className="amentity-detail" key={`${i}`}>
    <li className="amentity-icon">
      {amentity.icon }
    </li>
    <li>
      {startCase(amentity.title)}
    </li>
  </ul>
);

export default AmentityDetail;
