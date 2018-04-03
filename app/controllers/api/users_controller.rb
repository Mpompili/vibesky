class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.img_url = 'placeholder_image'
    if @user.save!
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def edit
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
