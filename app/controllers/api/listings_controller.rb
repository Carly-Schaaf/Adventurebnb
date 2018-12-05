class Api::ListingsController < ApplicationController

  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render 'api/listings/show'
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def edit
    # @listing = Listing.find(params[:listing][:id])
    #
    # if @listing.update(listings_params)
    #   render 'api/listings/show'
    # else
    #   render json: @listing.errors.full_messages, status: 422
    # end
    # come back to this after doing Bookings CRUD
  end

  def index
    @listings = Listing.in_bounds(params[:filters][:bounds])
    if params[:filters][:max_guests]
      @listings = @listings.where('max_guests >= ?', params[:filters][:max_guests])
    end
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
    @reviews = @listing.reviews
    render 'api/listings/show'
  end

  def select_by_city
    @listings = Listing.where(city: params[:city]).limit(4)
    render :index
  end

  def destroy
    # come back to this after doing Bookings CRUD
  end

  private

  def listing_params
    params.require(:listing).permit(
      :title,
      :description,
      :type,
      :owner_id,
      :address_1,
      :address_2,
      :city,
      :state,
      :zipcode,
      :country,
      :lat,
      :lng,
      :daily_rate,
      :max_guests,
      :num_bathrooms,
      :num_beds,
      :num_bedrooms,
      :num_common_spaces,
      :bounds
    )
  end
end
