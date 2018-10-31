Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :bookings, only: [:index, :update, :destroy]
    resources :users, only: [:create]
    resources :reviews, only: [:index, :show]
    resources :listings, except: :new do
      resources :bookings, only: :create
      resources :reviews, only: :create
    end
    resource :session, only: [:create, :destroy]
  end

  get 'api/listings_by_city/:city', to: 'api/listings#select_by_city'
end
