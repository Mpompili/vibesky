class Api::LikesController < ApplicationController
  def create
    @like = current_user.likes.new()
    @like.track_id = params[:trackId]
    if @like.save
        @track = Track.find(@like.track_id)
        render "api/tracks/show"
    else 
        render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    @track = Track.find(@like.track_id)
    render "api/tracks/show"
  end
  
end
