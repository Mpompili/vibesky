class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render "api/tracks/index"
  end

  def create
    @track = current_user.tracks.new(track_params)
    debugger

    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def edit
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render "api/tracks/index"
  end

  private
  def track_params
    params.require(:track).permit(:title)
  end
end
