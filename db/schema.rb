# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_19_041920) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "guest_id", null: false
    t.date "arrival_date", null: false
    t.date "departure_date", null: false
    t.integer "num_guests", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["arrival_date"], name: "index_bookings_on_arrival_date"
    t.index ["departure_date"], name: "index_bookings_on_departure_date"
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["listing_id"], name: "index_bookings_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "owner_id", null: false
    t.string "address_1", null: false
    t.string "address_2"
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "country", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.integer "daily_rate", null: false
    t.integer "max_guests", default: 1, null: false
    t.integer "num_bathrooms", null: false
    t.integer "num_beds", null: false
    t.integer "num_bedrooms", null: false
    t.integer "num_common_spaces", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "essentials", default: false, null: false
    t.boolean "wifi", default: false, null: false
    t.boolean "shampoo", default: false, null: false
    t.boolean "clothing_storage", default: false, null: false
    t.boolean "tv", default: false, null: false
    t.boolean "heat", default: false, null: false
    t.boolean "air_conditioning", default: false, null: false
    t.boolean "breakfast_coffee_tea", default: false, null: false
    t.boolean "desk", default: false, null: false
    t.boolean "fireplace", default: false, null: false
    t.boolean "iron", default: false, null: false
    t.boolean "hair_dryer", default: false, null: false
    t.boolean "pets", default: false, null: false
    t.boolean "private_entrance", default: false, null: false
    t.boolean "smoke_detector", default: false, null: false
    t.boolean "carbon_monoxide_detector", default: false, null: false
    t.boolean "first_aid", default: false, null: false
    t.boolean "safety_card", default: false, null: false
    t.boolean "fire_extinguisher", default: false, null: false
    t.boolean "bedroom_lock", default: false, null: false
    t.string "home_type", null: false
    t.index ["city"], name: "index_listings_on_city"
    t.index ["country"], name: "index_listings_on_country"
    t.index ["daily_rate"], name: "index_listings_on_daily_rate"
    t.index ["lat"], name: "index_listings_on_lat"
    t.index ["lng"], name: "index_listings_on_lng"
    t.index ["max_guests"], name: "index_listings_on_max_guests"
    t.index ["num_bathrooms"], name: "index_listings_on_num_bathrooms"
    t.index ["num_bedrooms"], name: "index_listings_on_num_bedrooms"
    t.index ["num_beds"], name: "index_listings_on_num_beds"
    t.index ["owner_id"], name: "index_listings_on_owner_id"
    t.index ["state"], name: "index_listings_on_state"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "listing_id", null: false
    t.integer "accuracy", null: false
    t.integer "communication", null: false
    t.integer "cleanliness", null: false
    t.integer "location", null: false
    t.integer "check_in", null: false
    t.integer "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["listing_id"], name: "index_reviews_on_listing_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
