## Adventurebnb

[Live Link](https://adventurebnb.herokuapp.com/#/)

Welcome to Adventurebnb - my single-page clone of Airbnb. My web-app includes many of the features that can be found on the real Airbnb, including the ability to search for over 60 listings in 5 different cities, view their exact location via Google’s Maps API, and book, edit, or cancel a booking at any of these listings.

![Splash Page](https://user-images.githubusercontent.com/39382120/54859657-2c7e6b80-4ccd-11e9-9f4b-ed4ae2436961.png "Splash Page")

This splash page features a search bar that takes in a city, street, place, etc. (featuring Google's Place Autocomplete API), and returns a map of listings in that location. The search bar works by converting user input into latitudinal and longitudinal coordinates (via Google's Geocoding API), which is then used as the center for the Google Map I create and display on the results page. Once this map is loaded, I use the latitudinal and longitudinal coordinates of the perimeter of the map to fetch any listings in my database that fall within this perimter. 

![Listings Page with Map](https://user-images.githubusercontent.com/39382120/47235621-75cd3680-d38e-11e8-83c3-230cdc639ba6.png "Listings Page with Map")

![Map Gif](./app/assets/images/carlygify.gif "Map Gif")

I built the above map functionality using Google’s Geocoding API - to turn locations into coordinates - and the Google Maps API. Listings will dynamically appear and disappear based on the user's interaction with the map.

![Listings Page](https://user-images.githubusercontent.com/39382120/60606842-f000e800-9d70-11e9-8db2-b254baeac20a.png "Listings Page")

My listing show-page enables logged-in users to book that listing. Users can only book if another user has not already booked that date or any overlapping dates, and can only book for the number of guests that the listing allows for. I built my calendar feature using Airbnb's own calendar library, React-Dates.

![Bookings Page](https://user-images.githubusercontent.com/39382120/54859680-8c751200-4ccd-11e9-82f2-8dbde9bcb34d.png "Bookings Page")

Here, logged-in users can view their bookings as well as edit or cancel them. The edit-booking form pre-fills users' current reservation information for their reference when editing.

![Code Snippet of SQL Query](https://user-images.githubusercontent.com/39382120/63602605-ad8fa680-c57c-11e9-8618-73f27e53cfa5.png)

I wrote this SQL query in order to fetch a home and its average total rating across 6 different rating categories with just one database query, significantly improving the loading time of the homes index page.

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
* Search and browse living spaces by location on Google Maps
* Book living spaces
* Edit bookings
* Read user reviews
