class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    @booking.guest = current_user
    @booking.listing_id = params[:listing_id]

    if @booking.save
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render 'api/bookings/show'
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def index
    @bookings = Booking.where(guest_id: current_user.id)
    render :index
  end

  def bookings_by_listing
    @bookings = Booking.where(listing_id: params[:listing_id])
    render :index
  end

  def edit
    # don't think I need this
  end

  private

  def booking_params
    params.require(:booking).permit(:arrival_date, :departure_date, :num_guests)
  end

end
