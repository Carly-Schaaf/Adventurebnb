class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.author = current_user
    @review.listing = params[:listing_id]

    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.where(listing_id: params[:listing_id])
    .limit(10)
  end

  private

  def review_params
    params.require(:review).permit(
    :listing_id,
    :body,
    :accuracy,
    :communication,
    :cleanliness,
    :location,
    :check_in,
    :value
  )
  end

end
