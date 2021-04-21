## Adventurebnb

[Live Link](https://adventurebnb.herokuapp.com/#/)

Welcome to Adventurebnb - my single-page clone of Airbnb. My web-app includes many of the features that can be found on the real Airbnb, including the ability to search for over 60 listings in 5 different cities, view their exact location via the Google Maps API, and book, edit, or cancel a booking at any of these listings.

![Splash Page](https://user-images.githubusercontent.com/39382120/54859657-2c7e6b80-4ccd-11e9-9f4b-ed4ae2436961.png "Splash Page")

The search feature works by converting user input into latitudinal and longitudinal coordinates (via Google's Geocoding API), which is then used as the center for the Google Map displayed on the results page. Once this map is loaded, I use the latitudinal and longitudinal coordinates of the perimeter of the map to fetch any listings in my database that fall within this perimter. 

![Listings Page with Map](https://user-images.githubusercontent.com/39382120/47235621-75cd3680-d38e-11e8-83c3-230cdc639ba6.png "Listings Page with Map")

I built the map feature using the Google Maps API and Google’s Geocoding API - to turn locations into coordinates. Listings will dynamically appear and disappear based on the user's interaction with the map.

![Map Gif](./app/assets/images/carlygify.gif "Map Gif")

![Listings Page](https://user-images.githubusercontent.com/39382120/60606842-f000e800-9d70-11e9-8db2-b254baeac20a.png "Listings Page")

My listing show-page enables logged-in users to book a listing. Users can only book if another user has not already booked that date or any overlapping dates, and can only book for the number of guests that the listing allows for. I built my calendar feature using Airbnb's own calendar library, React-Dates.

![Bookings Page](https://user-images.githubusercontent.com/39382120/54859680-8c751200-4ccd-11e9-82f2-8dbde9bcb34d.png "Bookings Page")

Above, logged-in users can view their bookings as well as edit or cancel them. The edit-booking form pre-fills users' current reservation information for their reference when editing.

This project was designed and built in under two weeks.

### Technologies used
 1.	Javascript
 2.	Ruby on Rails
 3.	PostgreSQL
 4.	HTML
 5.	SCSS/CSS

### Libraries used:

* React.js (incl. react-router-dom)
* Redux (incl. react-redux, redux-thunk middleware)
* jQuery for Ajax calls to my API
* React-Dates - Airbnb engineering's calendar library
* Google Map API, Google Places Autocomplete, Google Geocoding API
* Bcrypt for user authorization
* AWS S3 buckets to store user and listing photos

### Features:

* Sign up & log in with username & password
* Browse living spaces by location on Google Maps
* Book living spaces
* Edit bookings
* Read user reviews
