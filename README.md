## adventureBnb

[Live Link](https://myairbnbclone.herokuapp.com/)

Welcome to adventureBnB - my single-page clone of AirBnB. My web app includes many of the features that can be found on the real AirBnB. These include a search functionality with Google’s Maps API, the ability to explore over 60 listings in 5 different cities, as well as the option to book, edit, or cancel a booking at any of those listings.

![alt text](https://user-images.githubusercontent.com/39382120/54859657-2c7e6b80-4ccd-11e9-9f4b-ed4ae2436961.png "Splash Page")

This splash page features a search bar that takes in any location and returns a map of listings in that location.

![alt text](https://user-images.githubusercontent.com/39382120/47235621-75cd3680-d38e-11e8-83c3-230cdc639ba6.png "Listings Page with Map")

![alt text](./app/assets/images/carlygify.gif "Map Gif")

I built the above map functionality using Google’s Place Autocomplete API, Geocoding API - to turn locations into coordinates - and the Maps API. Listings will dynamically appear and disappear based on the user's interaction with the map.

![alt text](https://user-images.githubusercontent.com/39382120/47235832-13c10100-d38f-11e8-9234-4996da49bad3.png "Listings Page")

My listing view page enables logged-in users to book that listing. Users can only book if another user has not already booked that date, and can only book for the number of guests that the listing allows for. I built my calendar feature using AirBnB's own calendar library, React-Dates.

![alt text](https://user-images.githubusercontent.com/39382120/54859680-8c751200-4ccd-11e9-82f2-8dbde9bcb34d.png "Bookings Page")

Here, logged-in users can view their bookings and edit or cancel those bookings. The edit form pre-fills the user’s previous reservation information for their reference when editing.



### Technologies used
 1.	Javascript
 2.	Ruby on Rails for backend
 3.	PostgreSQL
 4.	HTML
 5.	CSS

### Libraries used:

* React.js
* Redux
* Moment.js
* React-Dates - AirBnB engineering's own calendar library
* Google Map API, Google Places Autocomplete, Google Geocoding API
* Bcrypt for user authorization
* AWS S3 buckets to store user and listing photos

### Features:

* Sign up/log in with username & password
* Search and browse living spaces by location utilizing Google Maps
* Book living spaces
* Edit reservations
