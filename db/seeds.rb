require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USERS
User.destroy_all

user1 = User.create(
  username: "CarlySchaaf",
  password: "starwars"
)
# user_photo_1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/airbnb-clone-development/alice_photo.jpg')
user_photo_1 = File.open('app/assets/images/alice_photo.jpg')
user1.photo.attach(io: user_photo_1, filename: 'alice_photo.jpg')

user2 = User.create(
  username: "Manny",
  password: "akshdfkjsdflkj"
)
# user_photo_1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/airbnb-clone-development/alice_photo.jpg')
user_photo_2 = File.open('app/assets/images/manny.jpg')
user2.photo.attach(io: user_photo_2, filename: 'manny.jpg')

user3 = User.create(
  username: "Jorge",
  password: "jdfalskdjflsakdjf"
)
# user_photo_1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/airbnb-clone-development/alice_photo.jpg')
user_photo_3 = File.open('app/assets/images/jorge.jpg')
user3.photo.attach(io: user_photo_3, filename: 'jorge.jpg')

user4 = User.create(
  username: "Rika",
  password: "ajalskdjflsk"
)
# user_photo_1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/airbnb-clone-development/alice_photo.jpg')
user_photo_4 = File.open('app/assets/images/rika.jpg')
user4.photo.attach(io: user_photo_4, filename: 'rika.jpg')

# LISTINGS
Listing.destroy_all

guest_range = (1..16).to_a

list1 = Listing.create(
  title: "Home in Marin Headlands",
  description: "Beautiful secluded cottage in Marin. Escape the city sounds
  and find peace.",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.791285,
  lng: -122.424398,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
  essentials: true,
  wifi: true,
  clothing_storage: true,
  tv: true,
  air_conditioning: true,
  breakfast_coffee_tea: true,
  fireplace: true,
  first_aid: true,
  fire_extinguisher: true,
  pets: true,
  bedroom_lock: true
)

list_photo_1 = File.open('app/assets/images/1.jpg')
list1.photo.attach(io: list_photo_1, filename: '1.jpg')

list2 = Listing.create(
  title: "Tropical Getaway in SF",
  description: "This is a very cute Palapa suite separate from
  the main house. All restaurants and bars are a stone throw away.
  Located in SF's cultural center there is no need for a car.
  California king bed with ensuite bathroom and shower!",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.775377,
  lng: -122.428281,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
  first_aid: true,
  fire_extinguisher: true,
  pets: true,
  bedroom_lock: true
)


list_photo_2 = File.open('app/assets/images/2.jpg')
list2.photo.attach(io: list_photo_2, filename: '2.jpg')

list3 = Listing.create(
  title: "Mission District Views in Private Condominium",
  description: "From local spa-quality bath products to 'smart room' light controls, thoughtful in-room amenities hit every detail to make this room the perfect place for Guests who prefer quality and want more than the average stay.",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.772930,
  lng: -122.428233,
  daily_rate: 90,
  max_guests: 5,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
  essentials: true,
  wifi: true,
)

list_photo_3 = File.open('app/assets/images/3.jpg')
list3.photo.attach(io: list_photo_3, filename: '3.jpg')

list4 = Listing.create(
  title: "Serene and Private Japanese-Inspired Retreat",
  description: "This serene and private Japanese inspired retreat is just a 3 minute walk to town, the beach and trails. Wear your yukata (kimono) to the inside/outside bathhouse to experience a Japanese soaking tub. Sleep to the sound of waves, wake to bird songs.",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.745147,
  lng: -122.486646,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_4 = File.open('app/assets/images/4.jpg')
list4.photo.attach(io: list_photo_4, filename: '4.jpg')

list5 = Listing.create(
  title: "Grand and Cozy 1920's SF Studio",
  description: "Come enjoy our large studio in San Francisco's charming and convenient Bernal Heights! You'll enjoy your own cozy and private lodging with a romantic gas fireplace, wood and stone floors and artistic decor. You will be close to world class views of San Francisco and it's beautiful bay. Bus lines are close by and and parking is very easy!",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.774704,
  lng: -122.491793,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
  essentials: true,
  wifi: true,
  clothing_storage: true,
  tv: true,
)


list_photo_5 = File.open('app/assets/images/5.jpg')
list5.photo.attach(io: list_photo_5, filename: '5.jpg')

list27 = Listing.create(
  title: Faker::Name.name,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.781201,
  lng: -122.434627,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_27 = File.open('app/assets/images/6.jpg')
list27.photo.attach(io: list_photo_27, filename: '27.jpg')


list28 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.798130,
  lng: -122.431346,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_28 = File.open('app/assets/images/7.jpg')
list28.photo.attach(io: list_photo_28, filename: '28.jpg')


list29 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.786526,
  lng: -122.413328,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_29 = File.open('app/assets/images/8.jpg')
list29.photo.attach(io: list_photo_29, filename: '29.jpg')


list30 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.754094,
  lng: -122.418162,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_30 = File.open('app/assets/images/9.jpg')
list30.photo.attach(io: list_photo_30, filename: '30.jpg')


list31 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.784096,
  lng: -122.457288,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_31 = File.open('app/assets/images/10.jpg')
list31.photo.attach(io: list_photo_31, filename: '31.jpg')


list32 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.783898,
  lng: -122.478059,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_32 = File.open('app/assets/images/11.jpg')
list32.photo.attach(io: list_photo_32, filename: '32.jpg')


list33 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.777866,
  lng: -122.502093,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_33 = File.open('app/assets/images/12.jpg')
list33.photo.attach(io: list_photo_33, filename: '33.jpg')


list34 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.757985,
  lng: -122.491633,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_34 = File.open('app/assets/images/13.jpg')
list34.photo.attach(io: list_photo_34, filename: '34.jpg')


list35 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 37.743298,
  lng: -122.499703,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_35 = File.open('app/assets/images/14.jpg')
list35.photo.attach(io: list_photo_35, filename: '35.jpg')

list6 = Listing.create(
  title: "Charming Craftsman with Outdoor Shower",
  description: "Live in a garden oasis in the middle of Venice Beach. Featuring vine-covered interior walls, a brick patio with lounge chairs, and a delightful outdoor shower, this unique guest house is nestled in the sunny backyard of a larger Craftsman home.",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.006340,
  lng: -118.443550,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
  essentials: true,
  wifi: true,
  clothing_storage: true,
  tv: true,
  pets: true
)

list_photo_6 = File.open('app/assets/images/6.jpg')
list6.photo.attach(io: list_photo_6, filename: '6.jpg')

list7 = Listing.create(
  title: "Charming Craftsman with Outdoor Shower",
  description: "Live in a garden oasis in the middle of Venice Beach. Featuring vine-covered interior walls, a brick patio with lounge chairs, and a delightful outdoor shower, this unique guest house is nestled in the sunny backyard of a larger Craftsman home.",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.028861,
  lng: -118.355530,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_7 = File.open('app/assets/images/7.jpg')
list7.photo.attach(io: list_photo_7, filename: '7.jpg')

list8 = Listing.create(
  title: "Charming Craftsman with Outdoor Shower",
  description: "Live in a garden oasis in the middle of Venice Beach. Featuring vine-covered interior walls, a brick patio with lounge chairs, and a delightful outdoor shower, this unique guest house is nestled in the sunny backyard of a larger Craftsman home.",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 33.988576,
  lng: -118.468123,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_8 = File.open('app/assets/images/8.jpg')
list8.photo.attach(io: list_photo_8, filename: '8.jpg')

list9 = Listing.create(
  title: "Charming Craftsman with Outdoor Shower",
  description: "Live in a garden oasis in the middle of Venice Beach. Featuring vine-covered interior walls, a brick patio with lounge chairs, and a delightful outdoor shower, this unique guest house is nestled in the sunny backyard of a larger Craftsman home.",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.020338,
  lng: -118.342103,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_9 = File.open('app/assets/images/9.jpg')
list9.photo.attach(io: list_photo_9, filename: '9.jpg')

list10 = Listing.create(
  title: "Charming Craftsman with Outdoor Shower",
  description: "Live in a garden oasis in the middle of Venice Beach. Featuring vine-covered interior walls, a brick patio with lounge chairs, and a delightful outdoor shower, this unique guest house is nestled in the sunny backyard of a larger Craftsman home.",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.020449,
  lng: -118.344206,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_10 = File.open('app/assets/images/10.jpg')
list10.photo.attach(io: list_photo_10, filename: '10.jpg')

list66 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.037570,
  lng: -118.249401,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_66 = File.open('app/assets/images/11.jpg')
list66.photo.attach(io: list_photo_66, filename: '66.jpg')

list67 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.049701,
  lng: -118.249399,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_67 = File.open('app/assets/images/12.jpg')
list67.photo.attach(io: list_photo_67, filename: '67.jpg')


list68 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.057807,
  lng: -118.264500,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_68 = File.open('app/assets/images/13.jpg')
list68.photo.attach(io: list_photo_68, filename: '68.jpg')


list69 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.059810,
  lng: -118.232553,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_69 = File.open('app/assets/images/14.jpg')
list69.photo.attach(io: list_photo_69, filename: '69.jpg')


list70 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.046943,
  lng: -118.240797,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_70 = File.open('app/assets/images/15.jpg')
list70.photo.attach(io: list_photo_70, filename: '70.jpg')


list71 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.035128,
  lng: -118.240462,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_71 = File.open('app/assets/images/16.jpg')
list71.photo.attach(io: list_photo_71, filename: '71.jpg')


list72 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.049567,
  lng: -118.234961,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_72 = File.open('app/assets/images/17.jpg')
list72.photo.attach(io: list_photo_72, filename: '72.jpg')


list73 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.033920,
  lng: -82.354586,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_73 = File.open('app/assets/images/18.jpg')
list73.photo.attach(io: list_photo_73, filename: '73.jpg')


list74 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.018129,
  lng: -118.259355,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_74 = File.open('app/assets/images/1.jpg')
list74.photo.attach(io: list_photo_74, filename: '74.jpg')


list75 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Los Angeles",
  state: "CA",
  zipcode: "94109",
  country: "Unied States",
  lat: 34.037693,
  lng: -118.252993,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_75 = File.open('app/assets/images/2.jpg')
list75.photo.attach(io: list_photo_75, filename: '75.jpg')

# # TOKYO

list11 = Listing.create(
  title: "Shibuya House w/Garden",
  description: "Our comfortable, bright, clean and warm house surrounded by green is located close to Shibuya, Harajuku, Omotesando and Shinjuku! We provide you with info on best restaurants, areas, history and entertainments that only locals know in Tokyo",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TYO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.689520,
  lng: 139.837601,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_11 = File.open('app/assets/images/11.jpg')
list11.photo.attach(io: list_photo_11, filename: '11.jpg')

list12 = Listing.create(
  title: "Shibuya House w/Garden",
  description: "Our comfortable, bright, clean and warm house surrounded by green is located close to Shibuya, Harajuku, Omotesando and Shinjuku! We provide you with info on best restaurants, areas, history and entertainments that only locals know in Tokyo",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TYO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.675042,
  lng: 139.710419,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_12 = File.open('app/assets/images/12.jpg')
list12.photo.attach(io: list_photo_12, filename: '12.jpg')

list13 = Listing.create(
  title: "Shibuya House w/Garden",
  description: "Our comfortable, bright, clean and warm house surrounded by green is located close to Shibuya, Harajuku, Omotesando and Shinjuku! We provide you with info on best restaurants, areas, history and entertainments that only locals know in Tokyo",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TYO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.664553,
  lng: 139.705098,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_13 = File.open('app/assets/images/13.jpg')
list13.photo.attach(io: list_photo_13, filename: '13.jpg')

list14 = Listing.create(
  title: "Shibuya House w/Garden",
  description: "Our comfortable, bright, clean and warm house surrounded by green is located close to Shibuya, Harajuku, Omotesando and Shinjuku! We provide you with info on best restaurants, areas, history and entertainments that only locals know in Tokyo",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TYO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.665078,
  lng: 139.681451,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_14 = File.open('app/assets/images/14.jpg')
list14.photo.attach(io: list_photo_14, filename: '14.jpg')

list15 = Listing.create(
  title: "Shibuya House w/Garden",
  description: "Our comfortable, bright, clean and warm house surrounded by green is located close to Shibuya, Harajuku, Omotesando and Shinjuku! We provide you with info on best restaurants, areas, history and entertainments that only locals know in Tokyo",
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TYO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.642521,
  lng: 139.663212,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_15 = File.open('app/assets/images/15.jpg')
list15.photo.attach(io: list_photo_15, filename: '15.jpg')

list46 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.695127,
  lng: 139.712994,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_46 = File.open('app/assets/images/16.jpg')
list46.photo.attach(io: list_photo_46, filename: '46.jpg')

list47 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.704295,
  lng: 139.722782,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_47 = File.open('app/assets/images/17.jpg')
list47.photo.attach(io: list_photo_47, filename: '47.jpg')


list48 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.708306,
  lng: 139.724586,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_48 = File.open('app/assets/images/18.jpg')
list48.photo.attach(io: list_photo_48, filename: '48.jpg')


list49 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.702977,
  lng: 139.731279,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_49 = File.open('app/assets/images/1.jpg')
list49.photo.attach(io: list_photo_49, filename: '49.jpg')


list50 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.707477,
  lng: 139.724756,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_50 = File.open('app/assets/images/2.jpg')
list50.photo.attach(io: list_photo_50, filename: '50.jpg')


list51 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.700407,
  lng: 139.715829,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_51 = File.open('app/assets/images/3.jpg')
list51.photo.attach(io: list_photo_51, filename: '51.jpg')


list52 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.693755,
  lng: 139.710077,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_52 = File.open('app/assets/images/4.jpg')
list52.photo.attach(io: list_photo_52, filename: '52.jpg')


list53 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.686263,
  lng: 139.717800,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_53 = File.open('app/assets/images/5.jpg')
list53.photo.attach(io: list_photo_53, filename: '53.jpg')


list54 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.705438,
  lng: 139.706476,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_54 = File.open('app/assets/images/6.jpg')
list54.photo.attach(io: list_photo_54, filename: '54.jpg')


list55 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Tokyo",
  state: "TKO",
  zipcode: "94109",
  country: "Unied States",
  lat: 35.702496,
  lng: 139.715058,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_55 = File.open('app/assets/images/7.jpg')
list55.photo.attach(io: list_photo_55, filename: '55.jpg')


# NEW YORK

list16 = Listing.create(
  title: "Homey Room",
  description: "My place is close to the subway and great local cafes and entertainment destinations Goodbye Blue Monday Inc, Tender Trap, and , SoCo. You’ll love my place because of the modern apartment with nice new finishes and central Heat and Air Conditioning, high-speed internet, the great views of the city, and the quick ride to Manhattan. My place is good for couples, solo adventurers, and business travelers. The room accommodates two people (two maximum).",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "New York",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.761804,
  lng: -73.991126,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_16 = File.open('app/assets/images/16.jpg')
list16.photo.attach(io: list_photo_16, filename: '16.jpg')

list17 = Listing.create(
  title: "Homey Room",
  description: "My place is close to the subway and great local cafes and entertainment destinations Goodbye Blue Monday Inc, Tender Trap, and , SoCo. You’ll love my place because of the modern apartment with nice new finishes and central Heat and Air Conditioning, high-speed internet, the great views of the city, and the quick ride to Manhattan. My place is good for couples, solo adventurers, and business travelers. The room accommodates two people (two maximum).",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "New York",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.754233,
  lng: -73.975120,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_17 = File.open('app/assets/images/17.jpg')
list17.photo.attach(io: list_photo_17, filename: '17.jpg')

list18 = Listing.create(
  title: "Homey Room",
  description: "My place is close to the subway and great local cafes and entertainment destinations Goodbye Blue Monday Inc, Tender Trap, and , SoCo. You’ll love my place because of the modern apartment with nice new finishes and central Heat and Air Conditioning, high-speed internet, the great views of the city, and the quick ride to Manhattan. My place is good for couples, solo adventurers, and business travelers. The room accommodates two people (two maximum).",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "New York",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.780828,
  lng: -73.953781,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_18 = File.open('app/assets/images/18.jpg')
list18.photo.attach(io: list_photo_18, filename: '18.jpg')

list19 = Listing.create(
  title: "Homey Room",
  description: "My place is close to the subway and great local cafes and entertainment destinations Goodbye Blue Monday Inc, Tender Trap, and , SoCo. You’ll love my place because of the modern apartment with nice new finishes and central Heat and Air Conditioning, high-speed internet, the great views of the city, and the quick ride to Manhattan. My place is good for couples, solo adventurers, and business travelers. The room accommodates two people (two maximum).",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "New York",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.802442,
  lng: -73.947985,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_19 = File.open('app/assets/images/1.jpg')
list19.photo.attach(io: list_photo_19, filename: '19.jpg')

list20 = Listing.create(
  title: "Homey Room",
  description: "My place is close to the subway and great local cafes and entertainment destinations Goodbye Blue Monday Inc, Tender Trap, and , SoCo. You’ll love my place because of the modern apartment with nice new finishes and central Heat and Air Conditioning, high-speed internet, the great views of the city, and the quick ride to Manhattan. My place is good for couples, solo adventurers, and business travelers. The room accommodates two people (two maximum).",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "New York",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.797332,
  lng: -73.970516,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_20 = File.open('app/assets/images/2.jpg')
list20.photo.attach(io: list_photo_20, filename: '20.jpg')

list36 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.756923,
  lng: -73.971167,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_36 = File.open('app/assets/images/3.jpg')
list36.photo.attach(io: list_photo_36, filename: '36.jpg')

list37 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.755501,
  lng: -73.969901,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_37 = File.open('app/assets/images/4.jpg')
list37.photo.attach(io: list_photo_37, filename: '37.jpg')


list38 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.779098,
  lng: -73.955977,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_38 = File.open('app/assets/images/5.jpg')
list38.photo.attach(io: list_photo_38, filename: '38.jpg')


list39 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.799180,
  lng: -73.948753,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_39 = File.open('app/assets/images/6.jpg')
list39.photo.attach(io: list_photo_39, filename: '39.jpg')


list40 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.806786,
  lng: -73.965574,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_40 = File.open('app/assets/images/7.jpg')
list40.photo.attach(io: list_photo_40, filename: '40.jpg')


list41 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.801780,
  lng: -73.954419,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_41 = File.open('app/assets/images/8.jpg')
list41.photo.attach(io: list_photo_41, filename: '41.jpg')

list42 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.792234,
  lng: -73.973647,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_42 = File.open('app/assets/images/9.jpg')
list42.photo.attach(io: list_photo_42, filename: '42.jpg')


list43 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.779989,
  lng: -73.979743,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_43 = File.open('app/assets/images/10.jpg')
list43.photo.attach(io: list_photo_43, filename: '43.jpg')


list44 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.766927,
  lng: -73.984898,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_44 = File.open('app/assets/images/11.jpg')
list44.photo.attach(io: list_photo_44, filename: '44.jpg')


list45 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Manhattan",
  state: "NY",
  zipcode: "94109",
  country: "Unied States",
  lat: 40.747493,
  lng: -73.995033,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)


list_photo_45 = File.open('app/assets/images/12.jpg')
list45.photo.attach(io: list_photo_45, filename: '45.jpg')

# HAVANA

list21 = Listing.create(
  title: "The Albear House",
  description: "A cozy apartment with two bedrooms in the Vedado area, very close to La Rampa, the Malecon, the hotels, the wifi zone, the restaurants, the clubs and other interesting sites. Located in a downtown area with easy connections to other places.",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.138554,
  lng: -82.364522,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_21 = File.open('app/assets/images/3.jpg')
list21.photo.attach(io: list_photo_21, filename: '21.jpg')

list22 = Listing.create(
  title: "The Albear House",
  description: "A cozy apartment with two bedrooms in the Vedado area, very close to La Rampa, the Malecon, the hotels, the wifi zone, the restaurants, the clubs and other interesting sites. Located in a downtown area with easy connections to other places.",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.133715,
  lng: -82.371710,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_22 = File.open('app/assets/images/4.jpg')
list22.photo.attach(io: list_photo_22, filename: '22.jpg')

list23 = Listing.create(
  title: "The Albear House",
  description: "A cozy apartment with two bedrooms in the Vedado area, very close to La Rampa, the Malecon, the hotels, the wifi zone, the restaurants, the clubs and other interesting sites. Located in a downtown area with easy connections to other places.",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.128628,
  lng: -82.372912,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_23 = File.open('app/assets/images/5.jpg')
list23.photo.attach(io: list_photo_23, filename: '23.jpg')

list24 = Listing.create(
  title: "The Albear House",
  description: "A cozy apartment with two bedrooms in the Vedado area, very close to La Rampa, the Malecon, the hotels, the wifi zone, the restaurants, the clubs and other interesting sites. Located in a downtown area with easy connections to other places.",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.140927,
  lng: -82.377761,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_24 = File.open('app/assets/images/6.jpg')
list24.photo.attach(io: list_photo_24, filename: '24.jpg')

list26 = Listing.create(
  title: "The Albear House",
  description: "A cozy apartment with two bedrooms in the Vedado area, very close to La Rampa, the Malecon, the hotels, the wifi zone, the restaurants, the clubs and other interesting sites. Located in a downtown area with easy connections to other places.",
  home_type: "Apartment",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.131776,
  lng: -82.390553,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_26 = File.open('app/assets/images/7.jpg')
list26.photo.attach(io: list_photo_26, filename: '26.jpg')

list56 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.126584,
  lng: -82.369437,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_56 = File.open('app/assets/images/8.jpg')
list56.photo.attach(io: list_photo_56, filename: '56.jpg')

list57 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.137954,
  lng: -82.364801,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)
list_photo_57 = File.open('app/assets/images/9.jpg')
list57.photo.attach(io: list_photo_57, filename: '57.jpg')

list58 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.138826,
  lng: -82.373384,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_58 = File.open('app/assets/images/10.jpg')
list58.photo.attach(io: list_photo_58, filename: '58.jpg')

list59 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.126794,
  lng: -82.372956,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_59 = File.open('app/assets/images/11.jpg')
list59.photo.attach(io: list_photo_59, filename: '59.jpg')

list60 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.125731,
  lng: -82.361798,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_60 = File.open('app/assets/images/12.jpg')
list60.photo.attach(io: list_photo_60, filename: '60.jpg')


list61 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.132562,
  lng: -82.351926,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_61 = File.open('app/assets/images/13.jpg')
list61.photo.attach(io: list_photo_61, filename: '61.jpg')


list62 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.141604,
  lng: -82.354929,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_62 = File.open('app/assets/images/14.jpg')
list62.photo.attach(io: list_photo_62, filename: '62.jpg')


list63 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.140543,
  lng:  -82.361967,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_63 = File.open('app/assets/images/15.jpg')
list63.photo.attach(io: list_photo_63, filename: '63.jpg')


list64 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.133833,
  lng: -82.349094,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_64 = File.open('app/assets/images/16.jpg')
list64.photo.attach(io: list_photo_64, filename: '64.jpg')


list65 = Listing.create(
  title: Faker::Address.state,
  description: Faker::GreekPhilosophers.quote,
  home_type: "Home",
  owner_id: user1.id,
  address_1: "1801 Franklin",
  address_2: "Apt. 201",
  city: "Havana",
  state: "HAV",
  zipcode: "94109",
  country: "Unied States",
  lat: 23.142481,
  lng: -82.354586,
  daily_rate: 90,
  max_guests: guest_range.sample,
  num_bathrooms: 1,
  num_beds: 1,
  num_bedrooms: 1,
  num_common_spaces: 1,
)

list_photo_65 = File.open('app/assets/images/17.jpg')
list65.photo.attach(io: list_photo_65, filename: '65.jpg')

# BOOKINGS
Booking.destroy_all

Booking.create(
  guest_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  num_guests: 1,
  arrival_date: "20181030",
  departure_date: "20181118"
)

Booking.create(
  guest_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  num_guests: 1,
  arrival_date: "20180905",
  departure_date: "20180918"
)

Booking.create(
  guest_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  num_guests: 1,
  arrival_date: "20190105",
  departure_date: "20190118"
)

# REVIEWS
Review.destroy_all

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user1.id,
  listing_id: list1.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user2.id,
  listing_id: list1.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user3.id,
  listing_id: list1.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user4.id,
  listing_id: list1.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)


Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user4.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user3.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user3.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user4.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user2.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)


Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)


Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user4.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user2.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)


Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user3.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)


Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user2.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)


Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user3.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user4.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user4.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user1.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user3.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user2.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user3.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)

Review.create(
  body: Faker::GreekPhilosophers.quote,
  author_id: user4.id,
  listing_id: Listing.order('RANDOM()').first.id,
  accuracy: 4,
  communication: 4,
  cleanliness: 4,
  location: 5,
  check_in: 5,
  value: 4
)
