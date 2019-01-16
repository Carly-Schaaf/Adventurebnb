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
  // "shampoo",
  // "clothingStorage":,
  // "heat",
  // "airConditioning":,
  // "desk",
  // "iron",
  // "hair_dryer",
  // "private_entrance",
  // "smoke_detector",
  // "carbon_monoxide_detector",
  // "safety_card",
  // cannot find icons for the above items
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
  const partialStar = int - roundedReview;
  const stars = Array(5).fill().map((star, i)=> {
    if (i < roundedReview) {
      return(
      <li key={Math.random()} className="small-stars">
        <i className="material-icons small">
          star
        </i>
      </li>);
    } else if (partialStar !== 0 ) {
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


//
//
// export const getSFListings = ({ listings }) => {
//   let sfListings = [];
//   const listingsArray = Object.values(listings);
//   if (listingsArray.length === 0) return sfListings;
//   let i = 0;
//   while (sfListings.length < 5) {
//     if (listingsArray[i].city === "San Francisco") {
//       listingsArray[i].image = window.images.sf_index_photo;
//       sfListings.push(listingsArray[i]);
//     }
//     i = (i + 1) % listingsArray.length;
//   }
//   return sfListings;
// };
//
// export const getLAListings = ({ listings }) => {
//   let laListings = [];
//   const listingsArray = Object.values(listings);
//   if (listingsArray.length === 0) return laListings;
//   let i = 0;
//   while (laListings.length < 5) {
//     if (listingsArray[i].city === "Los Angeles") {
//       listingsArray[i].image = window.images.la_index_photo;
//       laListings.push(listingsArray[i]);
//     }
//     i = (i + 1) % listingsArray.length;
//   }
//   return laListings;
// };
//
// export const getNYListings = ({ listings }) => {
//   let nyListings = [];
//   const listingsArray = Object.values(listings);
//   if (listingsArray.length === 0) return nyListings;
//   let i = 0;
//   while (nyListings.length < 5) {
//     if (listingsArray[i].city === "New York") {
//       listingsArray[i].image = window.images.ny_index_photo;
//       nyListings.push(listingsArray[i]);
//     }
//     i = (i + 1) % listingsArray.length;
//   }
//   return nyListings;
// };
//
// export const getTKListings = ({ listings }) => {
//   let tkListings = [];
//   const listingsArray = Object.values(listings);
//   if (listingsArray.length === 0) return tkListings;
//   let i = 0;
//   while (tkListings.length < 5) {
//     if (listingsArray[i].city === "Tokyo") {
//       listingsArray[i].image = window.images.tk_index_photo;
//       tkListings.push(listingsArray[i]);
//     }
//     i = (i + 1) % listingsArray.length;
//   }
//   return tkListings;
// };
//
// export const getHAVListings = ({ listings }) => {
//   let havListings = [];
//   const listingsArray = Object.values(listings);
//   if (listingsArray.length === 0) return havListings;
//   let i = 0;
//   while (havListings.length < 5) {
//     if (listingsArray[i].city === "Havana") {
//       listingsArray[i].image = window.images.hav_index_photo;
//       havListings.push(listingsArray[i]);
//     }
//     i = (i + 1) % listingsArray.length;
//   }
//   return havListings;
// };
