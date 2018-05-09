class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    # @user.img_url = 'placeholder_image'

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end

  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :image, :username, :location, :about) 
  end
end
