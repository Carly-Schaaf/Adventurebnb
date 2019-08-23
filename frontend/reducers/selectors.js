import React from 'react';

export const listingAmenities = (listing) => {
  if (listing === undefined) return null;
  const amenityObj = {
    "essentials": <i className="fas fa-shower"></i>,
    "wifi": <i className="fas fa-wifi"></i>,
    "tv": <i className="fas fa-tv"></i>,
    "breakfastCoffeeTea": <i className="fas fa-coffee"></i>,
    "fireplace": <i className="fas fa-fire"></i>,
    "pets": <i className="fas fa-paw"></i>,
    "firstAid": <i className="fas fa-first-aid"></i>,
    "fireExtinguisher": <i className="fas fa-fire-extinguisher"></i>,
    "bedroom_lock": <i className="fas fa-lock"></i>
  };
  let myResult = [];
  const allAmenities = Object.keys(amenityObj);
  allAmenities.forEach(amenity => {
    if (listing[amenity]) {
      myResult.push({"title": amenity, "icon": amenityObj[amenity]});
    }
  });
  return myResult.slice(0, 4);
};

export const starCount = (int) => {
  const roundedReview = Math.floor(int);
  const partialStar = int - roundedReview;
  const stars = Array(5).fill().map((star, i)=> {
    if (i < roundedReview) {
      return(
      <li key={Math.random()} className="stars">
        <i className="material-icons">
          star
        </i>
      </li>);
    } else if (partialStar !== 0 ) {
      return(
        <li key={Math.random()} className="stars">
          <i className="material-icons">
            star_half
          </i>
        </li>);
    } else {
      return(
        <li key={Math.random()} className="stars">
          <i className="material-icons">
            star_border
          </i>
        </li>);
    }
  });
  return stars;
};

export const smallStarCount = (int) => {
  const roundedReview = Math.floor(int);
  let partialStar = int - roundedReview;
  const stars = Array(5).fill().map((star, i)=> {
    if (i < roundedReview) {
      return(
      <li key={Math.random()} className="small-stars">
        <i className="material-icons small">
          star
        </i>
      </li>);
    } else if (partialStar !== 0 ) {
      partialStar = 0;
      return(
        <li key={Math.random()} className="small-stars">
          <i className="material-icons small">
            star_half
          </i>
        </li>);
    } else {
      return(
        <li key={Math.random()} className="small-stars">
          <i className="material-icons small">
            star_border
          </i>
        </li>);
    }
  });
  return stars;
};
