import React from 'react';
import AmentityDetail from './amentity_detail';

const Amentities = ({amentities}) => {
  const allAmentities = amentities.map((amentity, i) => (
      <AmentityDetail amentity={amentity} key={i} />
  ));
  return (
  <div className="amentity-outer-container">
    <div className="amentity-title">Amentities</div>
    <div className="amentity-container">
      { allAmentities }
    </div>
  </div>
  );
};

export default Amentities;
